<template>
  <div class="home">
    <div class="header">
      <p>
        <i class="iconfont icon-fanhui"></i>
      </p>
      <p class="center_title">加班/休假</p>
      <p class="btn_top">
        <i class="iconfont icon-daiban"></i>
        <i class="iconfont icon-fangdajing"></i>
      </p>
    </div>
    <TabMenu :index="index" @changeInd="changeIndex"></TabMenu>

    <!-- type-type -->
    <TabType :typeId="typeId" @changeType="changeTypeFn"></TabType>
    <!-- todolist -->
   <div class="todolist">

      <TodoList :dataList="datalist"></TodoList>
   </div>

    <div class="add_list" @click="handleShow">
      <i class="iconfont icon-jia"></i>
      <p>发起任务</p>
    </div>
    <PopUp  :show="isShow" @changeShow="handleShow"></PopUp>
  </div>
</template>
<script>
import TabMenu from "./components/tabMenu.vue";
import TabType from "./components/TabType.vue";
import TodoList from "./components/TodoList.vue";
import PopUp from "../../components/PopUp.vue";
import request from "../../utils/request";
import {mapState,mapActions,mapMutations} from "vuex";

export default {

  props: {},
  components: {
    TabMenu,
    TabType,
    TodoList,
    PopUp
  },
  data() {
    return {
      isShow: false,
      index:0,
      typeId:0,
        title:'加班',
      tabOption:{
      
                page:1,
                pageSize:5,
                create_at:0,
                status:0,
                type:"overtime"
      },
      datalist:[]
    };
  },
  computed: {
    
  },
  methods: {
    ...mapActions('user',['getUserInfo']),
    handleShow() {
      this.isShow = !this.isShow;
    },

    changeIndex(ind){
      this.index=ind;
      this.tabOption.status=ind;
     
      this.getTaskList()

    },
    changeTypeFn(ind){
      this.typeId=ind;
       if(ind===0){
        this.tabOption.type="overtime"
      }else{
        this.tabOption.type="vacation"
      }

     this.getTaskList()

    },

    getTaskList(){
      request.get('/api/task/list',{
            ...this.tabOption
            }).then(res=>{
            this.datalist=res.data.data;
      })
    }
    
    
  },
  created() {
      this.getTaskList();
      this.getUserInfo()
     
  },
  mounted() {
  },
   beforeRouteEnter (to, from, next) {
     if(window.localStorage.getItem('token')){
       next()
     }else{
       next('/')

     }
  }
};
</script>
<style scoped lang="scss">
@import "../.././../static/scss/common.scss";
.home {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  color: #0b0b0a;

  .header {
    width: 100%;
    height: pxTorem(44px);
    display: flex;
    justify-content: space-between;
    padding: 0 pxTorem(15px);
    line-height: pxTorem(44px);
    box-sizing: border-box;
    color: #000;
    background: #ffffff;

    .iconfont {
      font-size: pxTorem(18px);
    }
    .center_title {
      flex: 1;
      text-align: center;
      margin-left: pxTorem(20px);
      font-size: pxTorem(18px);
    }
    .btn_top i {
      margin: 0 pxTorem(5px);
    }
  }


.todolist{
  flex:1;
  overflow-y:auto;
}
 
  .add_list {
    width: pxTorem(150px);
    height: pxTorem(50px);
    background: #086644;
    position: fixed;
    bottom: 3%;
    right: 5%;
    border-radius: pxTorem(30px);
    overflow: hidden;
    display: flex;
    padding: pxTorem(13px) pxTorem(25px);
    box-sizing: border-box;
    font-size: pxTorem(18px);
    // font-weight:900;
    color: #fff;
    .iconfont {
      font-size: pxTorem(23px);
      margin-right: pxTorem(3px);
      line-height: pxTorem(23px);
    }
  }
 
}
</style>