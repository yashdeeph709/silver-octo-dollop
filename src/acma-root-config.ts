import { registerApplication, start } from "single-spa";
import { GlobalEventDistributor } from "./globaleventdistributor";

const globalEventDistributor = new GlobalEventDistributor();

registerApplication({
  name: "@acma/create",
  //@ts-ignore
  app: () => System.import("@acma/create"),
  activeWhen: "/",
  customProps: {
    globalEventDistributor: globalEventDistributor
  }
});
registerApplication({
  name: "@acma/list",
  //@ts-ignore
  app: () => System.import("@acma/list"),
  activeWhen: "/",
  customProps: {
    globalEventDistributor: globalEventDistributor
  }
});
start();
