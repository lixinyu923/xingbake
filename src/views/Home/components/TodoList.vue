<template>
    <div>
        <ul class="content">
      <li v-for="item in dataList" :key="item.applicationNumber" @click="$router.push({name:'detail',params:{
        type:item.list_type,
        id:item.applicationNumber
      }})">
        <p>
          <span>{{item.applicationNumber}}</span>
          <span>
            <i class="iconfont icon-73dengdai"></i>待审批
          </span>
        </p>
        <div class="inner_list">
          <dl>
            <dt>申请人</dt>
            <dd>{{item.nickname}}</dd>
          </dl>
          <dl>
            <dt>加班类型</dt>
            <dd>工作日加班</dd>
          </dl>
          <dl>
            <dt>加班日期</dt>
            <dd>2019-02-02</dd>
          </dl>
          <dl>
            <dt>加班时数</dt>
            <dd>2.5</dd>
          </dl>
        </div>
      </li>
    </ul>
    </div>
</template>
<script>
export default {

    props:['dataList'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../../../static/scss/common.scss";
 .content {
    flex: 1;
    overflow-y: auto;
    li {
      width: 100%;
      height: pxTorem(110px);
      overflow: hidden;
      background: #fff;
      display: flex;
      flex-direction: column;
      margin-top: pxTorem(10px);
      padding: pxTorem(10px) pxTorem(15px);
      box-sizing: border-box;
      p:nth-child(1) {
        width: 100%;
        height: pxTorem(30px);
        display: flex;
        justify-content: space-between;
        color: #969696;
        span {
          i {
            font-size: pxTorem(20px);
            margin-right: pxTorem(5px);
            color: #f7d536;
          }
        }
      }

      .inner_list {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        dl {
          width: 45%;
          display: flex;

          font-size: pxTorem(14px);
          line-height: pxTorem(30px);

          dt {
            width: 40%;
            color: #969696;
          }
          dd {
            margin-left: pxTorem(15px);
          }
        }
      }
    }
  }

</style>