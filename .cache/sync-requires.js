const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/xian/Code/Projects/xian/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/xian/Code/Projects/xian/src/pages/404.js"))),
  "component---src-pages-home-index-js": hot(preferDefault(require("/home/xian/Code/Projects/xian/src/pages/Home/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/xian/Code/Projects/xian/src/pages/index.js"))),
  "component---src-pages-resume-index-js": hot(preferDefault(require("/home/xian/Code/Projects/xian/src/pages/Resume/index.js"))),
  "component---src-pages-resume-styles-js": hot(preferDefault(require("/home/xian/Code/Projects/xian/src/pages/Resume/styles.js")))
}

