let app = new Q("docs", [
	{ path: "/", templateUrl: "/pages/home.html" },
	{ path: "/tutorials", templateUrl: "/pages/tutorials.html", children: [
		{ path: "/getting-started", templateUrl: "/pages/tutorials/getting-started.html" },
		{ path: "/routing", templateUrl: "/pages/tutorials/routing.html" }
	]},

]);
