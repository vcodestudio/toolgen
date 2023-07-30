import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import App from "./containers/App";

export default (strapi) => {
  const pluginDescription =
    pluginPkg.strapi.description || pluginPkg.description;
  const { icon } = pluginPkg.strapi;

  strapi.admin.registerPlugin({
    id: pluginId,
    name: pluginPkg.strapi.name,
    description: pluginDescription,
    icon,
    pluginLogo: pluginPkg.strapi.logo,
    isReady: true,
    mainComponent: App,
    menu: {
      id: "my-plugin",
      title: "My Plugin",
      to: `${strapi.settingsBaseURL}/plugins/${pluginId}`,
      icon,
    },
  });
};
