import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import chengji from '@/views/modules/chengji/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jiaocai from '@/views/modules/jiaocai/list'
    import kebiao from '@/views/modules/kebiao/list'
    import kecheng from '@/views/modules/kecheng/list'
    import kechengBaoming from '@/views/modules/kechengBaoming/list'
    import laoshi from '@/views/modules/laoshi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import dictionaryBanji from '@/views/modules/dictionaryBanji/list'
    import dictionaryChengji from '@/views/modules/dictionaryChengji/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJiaocai from '@/views/modules/dictionaryJiaocai/list'
    import dictionaryJie from '@/views/modules/dictionaryJie/list'
    import dictionaryKecheng from '@/views/modules/dictionaryKecheng/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXingqi from '@/views/modules/dictionaryXingqi/list'
    import dictionaryYuanxi from '@/views/modules/dictionaryYuanxi/list'
    import dictionaryZhicheng from '@/views/modules/dictionaryZhicheng/list'
    import dictionaryZhuanye from '@/views/modules/dictionaryZhuanye/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBanji',
        name: '班级',
        component: dictionaryBanji
    }
    ,{
        path: '/dictionaryChengji',
        name: '成绩类型',
        component: dictionaryChengji
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJiaocai',
        name: '教材类型',
        component: dictionaryJiaocai
    }
    ,{
        path: '/dictionaryJie',
        name: '第几节',
        component: dictionaryJie
    }
    ,{
        path: '/dictionaryKecheng',
        name: '课程类型',
        component: dictionaryKecheng
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXingqi',
        name: '星期',
        component: dictionaryXingqi
    }
    ,{
        path: '/dictionaryYuanxi',
        name: '院系',
        component: dictionaryYuanxi
    }
    ,{
        path: '/dictionaryZhicheng',
        name: '职称',
        component: dictionaryZhicheng
    }
    ,{
        path: '/dictionaryZhuanye',
        name: '专业',
        component: dictionaryZhuanye
    }


    ,{
        path: '/chengji',
        name: '成绩',
        component: chengji
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/jiaocai',
        name: '教材',
        component: jiaocai
      }
    ,{
        path: '/kebiao',
        name: '课表',
        component: kebiao
      }
    ,{
        path: '/kecheng',
        name: '课程',
        component: kecheng
      }
    ,{
        path: '/kechengBaoming',
        name: '课程报名',
        component: kechengBaoming
      }
    ,{
        path: '/laoshi',
        name: '老师',
        component: laoshi
      }
    ,{
        path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
