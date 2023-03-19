import Home from "./routes/+page.svelte";
import Info from "./routes/info/+page.svelte";
import ImageBoard from "./routes/image-board/+page.svelte";

export default {
  "/": Home,
  "/info": Info,
  "/image-board": ImageBoard,
  // The catch-all route must always be last
  //   "*": NotFound,
};
