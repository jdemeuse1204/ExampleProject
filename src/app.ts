import { Router, RouterConfiguration, RouteConfig } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

export const routes: any[] = [
  { route: ["", "Home"], settings: { roles: [] }, name: "home", moduleId: PLATFORM.moduleName("./app/areas/home/home"), title: "Home", nav: true },
  ];

export class App {

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    config.title = "Code Test Project";
    config.map(routes);

    const routeConfig: RouteConfig = {
      redirect: '#/',
      route: ["", "Home"]
    };

    config.mapUnknownRoutes(routeConfig);
    this.router = router;
  }
}

