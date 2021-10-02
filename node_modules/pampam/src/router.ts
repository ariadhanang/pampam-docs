import { Module } from "./module";
import { IRoute, Route } from "./route";

export class Router {
	module: Module;
	routes: Route[];
	currentRoute?: Route;

	constructor(module: Module, routes: IRoute[]) {
		this.module = module;
		this.routes = [];
		this.buildRoutes(routes, () => {
			this.init();
		});
	}

	async buildRoutes(routes: IRoute[], callback: any) {
		for (const route of routes) {
			let newroute = await Route.build(this, this.routes.length, route);
			if (route.children) {
				for (const child of route.children) {
					let childroute = await Route.build(this, this.routes.length, {
						...child,
						parentId: newroute.id
					});
					newroute.childrenIds.push(childroute.id);
				}
			}
		}
		console.log(this.routes);
		callback();
	}

	findRoute(path: string): Route {
		return this.routes.find(route => route.path === path);
	}

	findRouteById(id: number) {
		return this.routes[id];
	}

	navigate(path: string): void {
		const route = this.findRoute(path);
		if (route) {
			if (window.location.pathname !== path) window.history.pushState({}, "", path);
			this.renderView(route);
			this.currentRoute = route;
		} else {
			if (this.findRoute("/404")) {
				this.navigate('/404');
			} else {
				document.body.innerHTML = "404 not found.";
			}
		}
	}

	init(): void {
		this.navigate(window.location.pathname);
	}

	renderView(route: Route) {
		if (!route.hasParent) {
			let root = document.getElementById("root");
			root.innerHTML = route.template;
		}
		console.log(route.stack);
	}
}