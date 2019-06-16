<template>
  <div id='app'>
    
      <keep-alive include="typeiner"> <router-view></router-view> </keep-alive>
       
  </div>
</template>
<script>
// import axios from "axios";
import request from "./utils/request.js"
export default {
  props:{

  },
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
    request.get('api/user/info').catch(error=>{
      // console.log(error)
    })
   
  },
  mounted(){

  }
}
</script>
<style  lang="scss">
@import "../static/scss/common.scss";
  #app{
    width:100%;
    height:100%;
    font-size:pxTorem(16px)
  }
</style>