<template>
  <div class="addlist">
    <Header>
      <i @click="$router.push('/')" class="iconfont icon-fanhui"></i>
      <p>{{getType}}</p>
      <i></i>
    </Header>
    <!--  -->
    <div class="username">
      <dl>
        <dt>
          <img :src="userinfo.data.avatar" alt>
        </dt>
        <dd>
          <span>申请人姓名</span>
          <span>直接主管</span>
        </dd>
        <dd>
          <span></span>
          <span>{{userinfo.data.nickname}}</span>
          <span></span>
          <span>秦义超</span>
        </dd>
        <dd>
          <span>&gt;</span>
        </dd>
      </dl>
    </div>
    <!-- 下边的盒子 -->
    <div class="content">
      <div class="meg">
        <h3>申请信息</h3>
        <!-- {{userinfo}} -->
        <p>
          <span>
            加班日期
            <i>*</i>
          </span>
          <span>
            <div class="block">
              <el-date-picker v-model="dataValue" placeholder="选择日期"></el-date-picker>
            </div>
          </span>
        </p>
        <p>
          <span>
            加班类型
            <i>*</i>
          </span>
          <span>
            <input type="text" placeholder="请输入加班类型">
          </span>
        </p>
        <p>
          <span>
            加班起始时间
            <i>*</i>
          </span>

          <span>
            <el-time-picker
              :selectableRange="[
              '21:00:00 - 24:00:00', 
              '07:00:00 - 09:00:00'
              ]"
              v-model="starttime"
            ></el-time-picker>
          </span>
        </p>
        <p>
          <span>
            加班截止时间
            <i>*</i>
          </span>
          <span>
            <el-time-picker
              :selectableRange="[
              '21:00:00 - 24:00:00', 
              '07:00:00 - 09:00:00'
              ]"
              v-model="endtime"
              @change="endtimeval"
            >></el-time-picker>
          </span>
          <!-- <span><input type="text" placeholder="请输入加班截止时间"/></span> -->
        </p>
        <p>
          <span>
            共计时数
            <i>*</i>
          </span>
          <span>{{dataday}}小时</span>
        </p>
      </div>
      <div class="reason">
        <h3>加班事由</h3>
        <textarea></textarea>
      </div>
      <div class="reason img">
        <h3>附件</h3>
        <div>
          <div>+</div>
          <input type="file" @change="changefile">
        </div>

        <div class="inputimgs">
          <ul>
            <li v-for="(item,index) in imglist" :key="index">
              <span @click="clickdel(index)">X</span>
              <img :src="'http://localhost:3000'+item" alt>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 最下边的脚 -->
    <footer class="footer">
      <span @click="$router.push('/')">取消</span>
      <p class="argee" @click="commit">提交</p>
    </footer>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import request from "../../utils/request.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      dataValue: "",
      data: "",
      overtimeList: [
        {
          id: 1,
          title: "双休日"
        },
        {
          id: 2,
          title: "节假日"
        },
        {
          id: 3,
          title: "工作日"
        }
      ],
      vacationList: [
        {
          id: 1,
          title: "年假"
        },
        {
          id: 2,
          title: "假期"
        }
      ],
      imgtype: ["jpg", "jpeg", "gif", "svg", "png"],
      size: 3, //mb
      starttime: "",
      endtime: "",
      dataday: "",
      imglist: [],
      describe: "",
      usertype: -1
    };
  },
  computed: {
    ...mapState("user", ["userinfo"]),
    getType() {
      return this.$router.history.current.params.type === "vacation"
        ? "休假申请表"
        : "加班申请表";
    }
    // userinfo(){
    //     return this.userinfo;
    // }
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    // ...mapMutations('user',['setuserinfo'])
    endtimeval() {
      let starttime = new Date(this.starttime) * 1;
      let endtime = new Date(this.endtime) * 1;
      let day = endtime - starttime;
      if (day < 0) {
        // alert("时间选择格式不正确");
        this.$alert('时间选择格式不正确')
      } else {
        this.dataday = (day / 1000 / 60 / 60).toFixed(2);
      }
    },
    changefile(e) {
      let userfile = e.target.files[0];

    //   console.log(e.target.files[0])
      const { size, type } = userfile;
      const filereg = /.*(jpg|png|gif|jpeg|svg)$/;
      let err = "";
      if (!filereg.exec(type)) {
        err = "上传格式" + this.imgtype.join(",") + "的图片";
        // alert(err);
        this.$alert(err)
        return;
      }
      if (this.size * 1024 * 1024 < size) {
        err = "请输入" + this.size + "MB以内的图片";
        alert(err);
        return;
      }

      console.log( new FormData())
      const fromdata = new FormData();
      fromdata.append("file", userfile);
      console.log(fromdata,'fromdata')


      request.post("/api/upload", fromdata).then(res => {
        console.log(res.data.url);
        this.imglist.push(res.data.url);
   
      });

 
    },
    clickdel(value) {
      this.imglist.splice(value, 1);
    },
    commit() {
      const object = {
        annex: this.imglist,
        describe: this.describe,
        endTime: this.endtime,
        startTime: this.starttime,
        type: this.usertype
      };
      if (this.type === "vacation") {
        request.post("/api/apply/vacation", object).then(res => {
          console.log(res);
          if (res.data.msg === "提交成功") {
            this.$router.push("/");
          }
        });
      } else {
        request.post("/api/apply/overtime", object).then(res => {
          console.log(res);
          if (res.data.msg === "提交成功") {
            this.$router.push("/");
          }
        });
      }
    }
  },
  created() {
    this.getUserInfo();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../../static/scss/_minix.scss";
@import "../../../static/scss/common.scss";
.addlist {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: pxTorem(44px);
  background: #0b6242;
  color: #fff;
  text-align: center;
  line-height: pxTorem(44px);
  display: flex;
  justify-content: space-between;
  padding: 0 pxTorem(10px);
  box-sizing: border-box;
}
.username {
  width: 100%;
  color: #fff;
  background: #0b6242;
  height: pxTorem(130px);
  border-radius: 0 0 pxTorem(20px) pxTorem(20px);
  box-sizing: border-box;
  overflow: hidden;
  padding: pxTorem(14px) pxTorem(15px);
  dl {
    width: 100%;
    height: 100%;
    @include box_flex;
    dt {
      width: pxTorem(42px);
      height: pxTorem(42px);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    dd {
      &:nth-child(2),
      &:nth-child(3) {
        flex: 1;
        span {
          font-size: pxTorem(14px);
          display: block;
          color: #b1e8d5;
          padding: 0 0 pxTorem(5px) pxTorem(15px);
        }
      }
      &:nth-child(4) {
        width: pxTorem(30px);
      }
    }
  }
}
.inputimgs {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: pxTorem(120px);
      height: pxTorem(120px);
      position: relative;
      margin-left: pxTorem(15px);
      background: red;
      img {
        max-width: 100%;
        height: 100%;
      }
      span {
        position: absolute;
        top: pxTorem(5px);
        right: pxTorem(5px);
        border-radius: 50%;
        line-height: pxTorem(20px);
        width: pxTorem(20px);
        height: pxTorem(20px);
        background: rgba($color: #000000, $alpha: 0.6);
        color: white;
        text-align: center;
      }
    }
  }
}

//
.content {
  width: 94%;
  margin-left: 3%;
  margin-top: pxTorem(-24px);
  flex: 1;
  overflow: auto;
  border-radius: pxTorem(8px);

  .meg {
    width: 100%;
    background: #fff;
    border-radius: pxTorem(8px);

    h3 {
      width: 94%;
      margin-left: 3%;
      height: pxTorem(40px);
      line-height: pxTorem(40px);
      font-size: pxTorem(14px);
      border-bottom: 1px solid #eee;
    }
    > p {
      width: 94%;
      height: pxTorem(40px);
      margin-left: 3%;
      display: flex;
      justify-content: space-between;
      line-height: pxTorem(40px);
      font-size: pxTorem(14px);
      span:nth-child(1) {
        color: #a6a6a6;
        i {
          color: red;
        }
      }
    }
  }
  .reason {
    width: 100%;
    // height: pxTorem(150px);
    margin-top: pxTorem(16px);
    background: #fff;
    border-radius: pxTorem(8px);
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    h3 {
      width: 94%;
      height: pxTorem(40px);
      line-height: pxTorem(40px);
      font-size: pxTorem(14px);
      border-bottom: 1px solid #eee;
      margin-left: 3%;
    }
    textarea {
      flex: 1;
      font-size: pxTorem(16px);
    }
  }
  .img {
    > p {
      width: 100%;
      height: pxTorem(120px);
      display: flex;
      img {
        width: pxTorem(120px);
        height: pxTorem(120px);
      }
    }
  }
}
.footer {
  width: 100%;
  height: pxTorem(50px);
  display: flex;
  line-height: pxTorem(50px);
  font-size: pxTorem(14px);
  span {
    width: pxTorem(80px);
    height: 100%;
    text-align: center;
  }
  p {
    flex: 1;
    text-align: center;
  }
  .quit {
    background: #404a53;
    color: #fff;
  }
  .argee {
    background: #0b6242;
    color: #fff;
  }
}
</style>