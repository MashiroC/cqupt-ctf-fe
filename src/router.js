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
        Name:'Teams',
        component:Teams
    },{
        path: '/Challenges',
        Name:'Challenges',
        component:Challenges
    },{
        path: '/Scoreboard',
        Name:'Scoreboard',
        component:Scoreboard
    },{
        path: '/Match',
        Name:'Match',
        component:Match
    },{
        path: '/Shop',
        Name:'Shop',
        component:Shop
    },{
        path:'/',
        Name:'/Home',
        component:Home
    },{
        path:'/Login',
        Name:'/Login',
        component:Login
    },{
        path:'/SignUp',
        Name:'/SignUp',
        component:SignUp
    },{
        path:'/test',
        Name:'/test',
        component:Test
    },{
        path:'/forgetPassword',
        Name:'/forgetPassword',
        component:Forget
    }
    ]
});

export default router
