import { renderToString } from "preact-render-to-string";
import { foo } from "./foo.tsx";

function render() {
  return renderToString(foo());
}
let html = render();

addEventListener("hmr", (e) => {
  html = render();
  // @ts-ignore hmr
  console.log("hmr", e.detail, html);
});

console.log("initial", html);
