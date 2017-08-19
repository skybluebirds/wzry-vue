// 引入vue组件
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-rescource';
import MintUi from 'mint-ui';   //引入mint-ui组件
import 'mint-ui/libs/style.min.css';    //引入mint-ui组件的css
import 'mui/dist/css/mui.min.css';      //引入mui组件的css
import 'mui/examples/hello-mui/css/icons-extra.css';    //引入mui组件的扩展css



// 启用插件
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MintUi);


// 引入自己的组件
// 2.1 引入主页的组件
import Capp from '../components/App.vue';



// 创建实例化对象
const vm = new Vue({
    el: "#wzry",
    // 关联视图，把根组件渲染到视图中
    render: function (c) {  
        return c(Capp);
    },
    router
})