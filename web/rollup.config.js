import postcss from "rollup-plugin-postcss";
import less from "less";

export default {
  // ...
  plugins: [
    postcss({
      extract: true,
      plugins: [
        // ...
      ],
      extensions: [".css", ".less"],
      use: {
        less: { plugins: [autoprefixer], javascriptEnabled: true },
      },
      loader: "less",
      preprocess: {
        less: (data, filename) => {
          return new Promise((resolve, reject) => {
            less.render(data, { filename }, (err, result) => {
              if (err) return reject(err);
              resolve({ code: result.css });
            });
          });
        },
      },
    }),
  ],
};
