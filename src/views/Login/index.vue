<template>
    <div class="login" >
        <div class="top"><i class="iconfont icon-cuo"></i></div>
        <div class="title">
            <h4>欢迎来到星享俱乐部</h4>
        </div>
        <div class="inp_value">
            <input type="text" placeholder="手机号码"  v-model="phone_value">
            <input type="password" placeholder="密码"  v-model="pwd_value">
            <button class="loginBtn" @click="loginBtnFn">登录/注册</button>
            <p>使用账号密码登录</p>
        </div>
        <div class="other">
            <p>使用以下方式进行账户注册/登录</p>
            <p>
                <i class="iconfont icon-taobao"></i>
                <i class="iconfont icon-zhifubao"></i>
            </p>
        </div>
    </div>
</template>
<script> 
import request from "../../utils/request";
const phoneReg=/^1[3578]\d{9}$/;
export default {

    props:{},
    components:{

    },
    data(){
        return {
            phone_value:'',
            pwd_value:''
        }
    },
    computed:{

    },
    methods:{
        loginBtnFn(){
            if(phoneReg.test(this.phone_value)&&this.pwd_value.trim()!==""){
                request.post('/api/login',{
                    phone:this.phone_value,
                    password:this.pwd_value
                }).then(res=>{
                  
                  window.localStorage.setItem('token',res.data.token);
                  this.$router.push('/')
                })
            }else{
                alert("请输入正确的用户名及密码")
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../../static/scss/common.scss";
.login{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background:#f8f8f6;
    .top{
        width:100%;
        height:pxTorem(44px);
        padding:pxTorem(10px);
        box-sizing:border-box;
        background:#fff;
        i{
            font-size:pxTorem(18px);
        font-weight:900;

        }
    }
    .title{
         width:100%;
        height:pxTorem(100px);
        padding:pxTorem(10px);
        box-sizing:border-box;
        background:#fff;
        font-size:pxTorem(32px);
        font-weight:900;
        color: #262626;
    }
    .inp_value{
        flex:1;
          padding:pxTorem(10px);
            box-sizing:border-box;
        input{
            width:100%;
            height:pxTorem(60px);
            border-bottom:pxTorem(1px) solid #ccc;
        }
        button{
            width:100%;
            height:pxTorem(38px);
            border-radius:pxTorem(20px);
            margin:pxTorem(30px) 0 ;
            outline:0;
            border:0;
            background:#ccc;
            color:#fff;
            font-size:pxTorem(14px);
        }
        p{
             width:100%;
            font-size:pxTorem(14px);
             text-align:center;
            font-size:pxTorem(14px);
color:#008a38;
        }
    }
    .other{
        width:100%;
        height:pxTorem(140px);
         padding:pxTorem(25px) 0;
        box-sizing:border-box;
        p{
            width:100%;
            text-align:center;
            margin-bottom:pxTorem(20px);
            font-size:pxTorem(14px);
            color:rgb(46, 45, 45);
            i{
                font-size:pxTorem(35px);
                margin: 0 pxTorem(15px) ;
            }
            i:nth-child(1){
                color:#ff6e00;
            }
            i:nth-child(2){
                color:#00abef;
            }
        };
    }
}
</style>