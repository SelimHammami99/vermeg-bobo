import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import App from "./routes/App";
import ErrorPage from "./routes/ErrorPage";
import ELKPage from "./routes/ELKPage";
import UploadPage from "./routes/UploadPage";
import DemoPage from "./routes/DemoPage";
import VM1Page from "./routes/VM1Page";
import VM2Page from "./routes/VM2Page";

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
        element: <ELKPage />,
        index: true,
      },
      {
        path: "upload",
        element: <UploadPage />,
        index: true,
      },
      {
        path: "virtualmachine1",
        element: <VM1Page />,
      },
      {
        path: "virtualmachine2",
        element: <VM2Page />,
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
