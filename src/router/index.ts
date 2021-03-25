/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		meta: {
			title: "Home",
		},
		component: () => import("../views/Home.vue"),
		alias: ["/accueil"],
	},
	{
		path: "/game",
		name: "Game",
		meta: {
			title: "Game",
		},
		component: () => import("../views/Game.vue"),
	},
	{
		path: "/list",
		name: "Countries List",
		meta: {
			title: "Countries List",
		},
		component: () => import("../views/CountriesList.vue"),
	},
	{
		path: "/country/:name",
		name: "Country infos",
		meta: {
			title: "Country infos",
		},
		component: () => import("../views/Country.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
