module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  myJob: {
    task: ({ strapi }) => {
      //   Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
      console.log("aa");
    },
    options: {
      rule: "* * * * * *",
      tz: "Asia/Tokyo",
      // start 10 seconds from now
      // start: new Date(Date.now() + 10000),
      // end 20 seconds from now
      end: new Date(Date.now() + 2000),
    },
  },
};
