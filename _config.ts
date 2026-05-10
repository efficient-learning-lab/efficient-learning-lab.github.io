import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const site = lume({
  location: new URL("https://ell.skku.edu"),
});

site.use(jsx());
site.use(tailwindcss());
site.add("styles.css");
site.add("scripts.js");
site.data("layout", "layouts/main.tsx");
site.ignore("docs");
site.ignore("README.md");

export default site;
