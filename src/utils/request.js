import axios from "axios";
import router from "../router"

const request=axios.create();

//添加请求拦截
request.interceptors.request.use((config)=>{
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem('token')
        }
    }
},(error)=>{
 return Promise.reject(error)
})

//响应之前拦截
request.interceptors.response.use((response)=>{
    // console.log(response)
    return response
},(error)=>{
    switch(error.response.status){
        case 401:
        console.log('未登录')
        router.push('/login')
        break;
    }
    return Promise.reject(error)

})

export default{
    get(url,data){
        return request.get(url,{
            params:data
        })
    },
    post(url,data){
        return request.post(url,data)
    }
}