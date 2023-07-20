import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import App from "./routes/App";
import ErrorPage from "./routes/ErrorPage";
import InternalPage from "./routes/InternalPage";
import EIKPage from "./routes/EIKPage";
import UploadPage from "./routes/UploadPage";
import DemoPage from "./routes/DemoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "demo",
        element: <DemoPage />,
        index: true,
      },
      {
        path: "eik",
        element: <EIKPage />,
        index: true,
      },
      {
        path: "upload",
        element: <UploadPage />,
        index: true,
      },
      {
        path: "internal",
        element: <InternalPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
