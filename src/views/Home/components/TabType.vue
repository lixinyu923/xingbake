<template>
    <div>
     
<div class="container_btn">
      <p></p>
      <p class="btn_inner">
        <span 
        v-for="(item,index) in list " :key="index"
         :class="{active:index===ind}" @click="changeTypeId(item.id)">{{item.title}}</span>
      </p>
      <p>
        <i class="iconfont icon-iconplsd"></i>
        <i class="iconfont icon-paixu-sheng"></i>
      </p>
    </div>
    </div>
</template>
<script>
export default {
    name:'typeiner',
    props:['typeId'],
    components:{

    },
    data(){
        return {
            ind:0,
            list:[{
              title:'加班',
              id:0
            },{
               title:'休假',
              id:1
            }]
        }
    },
    computed:{

    },
    methods:{
      changeTypeId(index){
        this.ind=index;
        this.$emit('changeType',index)
      }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../../../static/scss/common.scss";


  .container_btn {
    width: 100%;
    height: pxTorem(60px);
    margin-top: pxTorem(8px);
    display: flex;
    justify-content: space-between;
    padding: pxTorem(15px);
    box-sizing: border-box;
    p {
      width: 20%;
      text-align: center;
    }
    p:nth-child(3) {
      display: flex;
      line-height: pxTorem(30px);
      color: #cbc9c9;
      font-weight: 900;
      i {
        margin: 0 pxTorem(8px);
      }
      i:nth-child(1) {
        font-size: pxTorem(22px);
      }
      margin-left: pxTorem(5px);
    }
    .btn_inner {
      flex: 1;
      display: flex;
      border-radius: pxTorem(17px);
      overflow: hidden;
      line-height: pxTorem(30px);
      border: pxTorem(0.5px) solid #0c6142;

      span {
        flex: 1;
        color: #0c6142;

        &.active {
          color: #fff;
          background: #0c6142;
        }
      }
    }
  }

</style>