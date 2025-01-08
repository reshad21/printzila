import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MyContextProvider } from "./Context/MyContextProvider.tsx";
import "./index.css";
import router from "./Routes/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  </StrictMode>
);
