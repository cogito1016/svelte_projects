import Home from "./routes/Home.svelte";
import NotFound from "./routes/NotFound.svelte";
import Info from "./routes/Info.svelte";
import ImageBoard from "./routes/Image-Board.svelte";

export default {
  "/": Home,
  "/info": Info,
  "/image-board": ImageBoard,
  // The catch-all route must always be last
  "*": NotFound,
};
