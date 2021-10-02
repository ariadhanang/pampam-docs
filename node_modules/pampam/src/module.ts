import { Router } from "./router";
import { IRoute } from "./route";

export class Module {
	name: string;
	router: Router;

	constructor(name: string, routes: IRoute[]) {
		this.name = name;
		this.router = new Router(this, routes);
	}
}