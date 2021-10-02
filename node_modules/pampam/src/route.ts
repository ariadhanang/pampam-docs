import { Controller } from "./controller";
import { Router } from "./router";

export class Route {
	id: number;
	path: string;
	templateUrl: string;
	controller: Controller;
	title?: string;
	childrenIds?: number[];
	parentId?: number;
	redirectTo?: string;
	allow?: string[];

	templateString: string;
	virtualdom?: HTMLDivElement;

	router: Router;

	constructor(router: Router, id: number, config: IRoute) {
		this.router = router;

		this.id = id;
		this.path = config.path;
		this.templateUrl = config.templateUrl;
		this.controller = config.controller ? new config.controller() : new Controller();
		this.templateString = config.templateString ? config.templateString : "";

		this.childrenIds = [];
		this.parentId = config.parentId ? config.parentId : undefined;
	}

	static async getTemplate(url: string): Promise<string> {
		try {
			const fetchTemplate = await fetch(url);
			if (fetchTemplate.ok) return await fetchTemplate.text();
			throw Error();
		} catch (error) {
			return `Template file "${url}" not found.`;
		}
	}

	static async build(router: Router, id: number, config: IRoute) {
		const templateString = await Route.getTemplate(config.templateUrl);
		const newroute = new Route(router, id, { ...config, templateString });
		router.routes.push(newroute);
		return newroute;
	}

	get hasParent(): boolean {
		return this.parentId ? true : false;
	}

	get parent(): Route {
		return this.router.findRouteById(this.parentId);
	}

	get stack(): Route[] {
		if (this.hasParent) return [...this.parent.stack, this];
		return [this];
	}

	get template(): string {
		if (!this.virtualdom) {
			this.virtualdom = document.createElement("div");
			this.virtualdom.innerHTML = this.templateString;
		}
		return this.virtualdom.innerHTML;
	}

}

export interface IRoute {
	path: string;
	templateUrl: string;
	title?: string;
	redirectTo?: string;
	allow?: string[];
	children?: IRoute[];
	parentId?: number;
	controller?: typeof Controller;
	templateString?: string;
}