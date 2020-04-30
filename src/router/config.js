//在这里配置路由页面

const routes = [{
	path: '/',
	name: 'home',
	component:  () => import('../views/main/Index'),
}, {
	path: "/login",
	name: "logn",
	component: () => import('../views/login/Login')
}]
export default routes
