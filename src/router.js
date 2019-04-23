import VueRouter from 'vue-router'

import Home from './pages/zhuye/Home'
// import Test from './pages/Test'
// import App from './App'
import Teams from './pages/zhuye/Teams'
import Challenges from "./pages/zhuye/Challenges";
import Scoreboard from "./pages/zhuye/Scoreboard";
import Match from "./pages/zhuye/Match"
import Shop from "./pages/zhuye/Shop"
import Login from "./pages/zhanghao/Login"
import SignUp from "./pages/zhanghao/SignUp"
import Test from "./pages/Test"
import Forget from "./pages/zhanghao/ForgetPassword"

const router = new VueRouter({
    routes: [{
        path: '/Teams',
        name:'Teams',
        component:Teams
    },{
        path: '/Challenges',
        name:'Challenges',
        component:Challenges
    },{
        path: '/Scoreboard',
        name:'Scoreboard',
        component:Scoreboard
    },{
        path: '/Match',
        name:'Match',
        component:Match
    },{
        path: '/Shop',
        name:'Shop',
        component:Shop
    },{
        path:'/',
        name:'/Home',
        component:Home
    },{
        path:'/Login',
        name:'/Login',
        component:Login
    },{
        path:'/SignUp',
        name:'/SignUp',
        component:SignUp
    },{
        path:'/test',
        name:'/test',
        component:Test
    },{
        path:'/forgetPassword',
        name:'/forgetPassword',
        component:Forget
    }
    ]
});

export default router
