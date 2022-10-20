//路由配置文件
import { createRouter, createWebHashHistory } from "vue-router"; //按需引入

const routes = [{
    path: "/", //根路径
    component: () =>
        import ("../views/Main.vue"),
    redirect: '/home',
    children: [{
            path: "/home",
            name: "home",
            component: () =>
                import ("../views/home/Home.vue"),
        },
        {
            path: "/user",
            name: "user",
            component: () =>
                import ("../views/User/User.vue"),
        },
        {
            path: "/MyOrder",
            name: "MyOrder",
            component: () =>
                import ("../views/User/MyOrder.vue"),
        },
        {
            path:"/MyUser",
            name:"MyUser",
            component:() =>
                import ("../views/MyUser/MyUser.vue")
        },
        {
            path: "/page1",
            name: "page1",
            component: () =>
                import ("../views/Page1.vue"),
        },
        {
            path: "/page2",
            name: "page2",
            component: () =>
                import ("../views/Page2.vue"),
        },
    ],
}, 
{
    path:'/login',
    name:'login',
    component:() => import("../views/Login/login.vue")
}

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;