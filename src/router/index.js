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
import News from "@/components/News";

Vue.use(Router)


const routes = [{
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: '注册'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '主页',
            name: '首页'
        },

        children: [{
            path: '/problemList',
            component: ProblemList,
            meta: {
                name: '题目'
            }
        }, {
            path: '/status',
            component: Status,
            meta: {
                name: '提交状态'
            }
        }, {
            path: '/problem',
            component: Problem,
            meta: {
                name: '题目描述'
            }
        }, {
            path: '/submit',
            component: Submit,
            meta: {
                name: '题目提交'
            }
        }, {
            path: '/user',
            component: User,
            meta: {
                name: '用户信息'
            }
        }, {
            path: '/user/blogList',
            component: UserBlogList,
            meta: {
                name: '个人博客'
            }
        }, {
            path: '/user/statusList',
            component: UserStatus,
            meta: {
                name: '提交记录'
            }
        }, {
            path: '/code',
            component: Code,
            meta: {
                name: '完整代码'
            }
        }, {
            path: '/blog/edit',
            component: BlogEdit,
            meta: {
                name: '博客编辑'
            }
        }, {
            path: '/blog/list',
            component: BlogList,
            meta: {
                name: '博客'
            }
        }, {
            path: '/blog/blogDetail',
            component: BlogDetail,
            meta: {
                name: '博客详情'
            }
        }, {
            path: '/news',
            component: News,
            meta: {
                name: '资讯'
            }
        }]

    }

]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router