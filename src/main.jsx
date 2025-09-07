import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/Router.jsx";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./contexts/AuthProvider.jsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            className: "font-semibold font-secondary py-2 px-4",
          }}
        />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
