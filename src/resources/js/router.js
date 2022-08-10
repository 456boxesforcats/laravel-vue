import {createWebHistory, createRouter} from 'vue-router'

// Pages
// Errors
const NotFound = () => import('./pages/errors/NotFound.vue')

// Home
const Home = () => import('./pages/home/Home.vue')

// Auth
const Login = () => import('./pages/auth/Login.vue')
const Register = () => import('./pages/auth/Register.vue')
const ForgotPassword = () => import('./pages/auth/ForgotPassword.vue')
const ResetPassword = () => import('./pages/auth/ResetPassword.vue')

// Posts
const PostList = () => import('./pages/posts/List.vue')
const PostAdd = () => import('./pages/posts/Add.vue')
const PostEdit = () => import('./pages/posts/Edit.vue')

// Components
const HeaderMenu = () => import('./components/HeaderMenu.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'notFound',
            path: '/404',
            component: NotFound
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
        {
            name: 'forgotPassword',
            path: '/password/forgot',
            component: ForgotPassword
        },
        {
            name: 'resetPassword',
            path: '/password/reset/:hash',
            component: ResetPassword
        },
        {
            name: 'home',
            path: '/',
            components: {
                default: () => Home(),
                HeaderMenu: () => HeaderMenu()
            }
        },
        {
            name: 'postList',
            path: '/post',
            components: {
                default: () => PostList(),
                HeaderMenu: () => HeaderMenu()
            }
        },
        {
            name: 'postEdit',
            path: '/post/:id/edit',
            components: {
                default: () => PostEdit(),
                HeaderMenu: () => HeaderMenu()
            }
        },
        {
            name: 'postAdd',
            path: '/post/add',
            components: {
                default: () => PostAdd(),
                HeaderMenu: () => HeaderMenu()
            }
        }
    ]
})

// Redirect to 404 if page not found
router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        next('/404');
    } else {
        next();
    }
})


export default router
