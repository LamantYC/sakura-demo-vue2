export const constantRouterMap = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/entrancelayout',
        name: 'EntranceLayout',
        redirect: '/login',
        component: () => import('../views/layoutpage/EntranceLayout'),
        children: [
            {
                path: '/login',
                name: 'Login',
                component: ()=>import('../views/entrance/Login')
            },
        ]
    },
    {
        path: '/layout',
        name: 'Layout',
        redirect: '/home',
        component: ()=>import('../views/layoutpage/layout'),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: ()=>import('../views/system/Home')
            }
        ]
    },
]
