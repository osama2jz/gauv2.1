import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./contexts/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      cacheTime: 30000,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <MantineProvider
            theme={{
              colors: {
                green: [
                  "rgb(122, 151, 87)",
                  "rgb(122, 151, 87)",
                  "rgb(122, 151, 87)",
                  "rgb(122, 151, 87)",
                  "rgb(122, 151, 87)",
                  "rgb(122, 151, 87)",
                  "rgb(122, 151, 87)",
                  "rgb(122, 151, 87)",
                ],
              },
              primaryColor: "green",
            }}
          >
            <App />
          </MantineProvider>
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
