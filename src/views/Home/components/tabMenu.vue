<template>
    <div>
       
    <div class="container">
      <dl v-for="item in menuList" :key="item.ind" @click="changeItem(item.ind)"
       :class="{active:menuInd===item.ind}">
        <dt :class="item.max">
          <i :class="'iconfont '+item.icon"></i>
        </dt>
        <dd>{{item.title}}</dd>
      </dl>
    </div>

    </div>
</template>
<script>
export default {
    props:['index'],
    components:{

    },
    data(){
        return {
            menuList:[
              {
                title:'待处理',
                icon:'icon-shijian',
                ind:0,
                max:'font_max'
              }, {
                title:'已发起',
                icon:'icon-zhifeiji',
                ind:1,
                max:'font_max'
              }, {
                title:'已处理',
                icon:'icon-wancheng',
                ind:2,
                max:''
              }
            ],
            menuInd:0
        }
    },
    computed:{

    },
    methods:{
        changeItem(ind){
          this.menuInd=ind;
          this.$emit('changeInd',ind)
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
  .container {
    width: 100%;
    height: pxTorem(90px);
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: pxTorem(10px) pxTorem(30px);
    box-sizing: border-box;
    font-size: pxTorem(15px);
    // border-bottom:1px solid #ccc;
    box-shadow: pxTorem(5px) pxTorem(6px) pxTorem(7px) #f0f0f0;
    background: #ffffff;

    dl {
      flex: 1;
      color: #cbc9c9;
      dt {
        width: 100%;
        height: pxTorem(35px);
        i {
          font-size: pxTorem(25px);
        }
      }

      &.active {
        color: #0d6646;
      }
    }
    .font_max {
      i {
        font-size: pxTorem(28px);
      }
    }
  }
</style>