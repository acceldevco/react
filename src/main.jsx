import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./Router/routes";


import * as ReactDOM from "react-dom/client";
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
