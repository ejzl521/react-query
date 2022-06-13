import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 상태를 주입할 Provider로 감싸고 쿼리클라이언트 주입
  <QueryClientProvider client={queryClient}>
    {/* devtools */}
    <ReactQueryDevtools initialIsOpen={true} />
    <App />
  </QueryClientProvider>
);