// import head from '@/components/header/head'
// import alertConfig from '../components/alertDialog'
// export default {
//   install(Vue){
//     // Vue.component('el-header',head);
//     const AlertClass=Vue.extend(alertConfig); //组件类
//     Vue.prototype.$alert=(text)=>{
//       const AlertComponent= new AlertClass({
//         propsData:{
//           text
//         }
//       })  //组件实例
//     AlertComponent.$mount()
//     document.body.appendChild(AlertComponent.$el)
//     }
//   }
// }


// import alertConfig from '../components/alertMessage'
import alertConfig from '../components/alertDialog'


class Dialog{
  constructor(Vue){
     this.AlertClass=Vue.extend(alertConfig); //组件类
    this.AlertComponent= null
  }
  init(){
    if(this.AlertComponent){
      return this.AlertComponent
    }
    else{
      this.AlertComponent=new this.AlertClass();
      this.AlertComponent.$mount()
      document.body.appendChild(this.AlertComponent.$el)
      return this.AlertComponent;
    }
  }
  show(){
    this.init().open=true;
  }
}
export default {
  install(Vue){
    // Vue.component('el-header',head);
    // const AlertClass=Vue.extend(alertConfig); //组件类
    // const AlertComponent= new AlertClass()
    // {
    //   propsData:{
    //     text:'hello'
    //   }
    // }
    // AlertComponent.$mount()
    // document.body.appendChild(AlertComponent.$el)
    const dialog=new Dialog(Vue)
    Vue.prototype.$alert=(text)=>{
      console.log(dialog.init())
       //组件实例
       dialog.init().alertOpen(text)
       
      // dialog.show()

    }
  }
}