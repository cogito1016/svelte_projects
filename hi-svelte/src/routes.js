import Home from "./routes/Home.svelte";
import Lorem from "./routes/Lorem.svelte";
import NotFound from "./routes/NotFound.svelte";
import Exam from "./routes/Exam.svelte";

export default {
  "/": Home,
  "/lorem/:repeat": Lorem,
  "/exam": Exam,
  // The catch-all route must always be last
  "*": NotFound,
};
