import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Tusktwo from "../Pages/Tusktwo/Tusktwo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tusk-two",
        element: <Tusktwo />,
      },
    ],
  },
]);

export default router;
