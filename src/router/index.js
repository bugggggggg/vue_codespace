import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from "@/components/Login";
import Home from "@/components/Home"
import ProblemList from "@/components/ProblemList";
import Status from "@/components/Status";
import Problem from "@/components/Problem";
import Submit from "@/components/Submit";
import User from "@/components/User";
import BlogEdit from "@/components/BlogEdit";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
import UserBlogList from "@/components/UserBlogList";
import UserStatus from "@/components/UserStatus";
import Code from "@/components/Code";

Vue.use(Router)


    const routes=[
        {
            path:'/register',
            name:'register',
            component:Register,
            meta:{
                title:'注册'
            }
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{
                title:'登录'
            }
        },
        {
            path:'/',
            name:'home',
            component:Home,
            meta:{
                title:'主页'
            },

            children:[{
                path:'/problemList',component:ProblemList
            },{
                 path:'/status',component:Status
            },{
                path:'/problemList/problem',
                component: Problem
            },{
                path:'/problemList/submit',
                component: Submit
            },{
                path:'/user',
                component: User
            },{
                path:'/user/blogList',
                component: UserBlogList
            },{
                path: '/user/statusList'  ,
                component: UserStatus
            },{
                path: '/code',
                component: Code
            },

                {
                path: '/blog/edit',
                component: BlogEdit
            },{
                path: '/blog/list',
                component: BlogList
            },{
                path: '/blog/blogDetail',
                component: BlogDetail
            }
            ]

        }

    ]

const router=new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router