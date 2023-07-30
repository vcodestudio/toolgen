'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('fetch-datas')
      .service('myService')
      .getWelcomeMessage();
  },
});
