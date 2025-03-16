import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecipesPage } from "./pages/RecipesPage";

// Redirect main.jsx to RecipesPage.jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RecipesPage />
    </ChakraProvider>
  </React.StrictMode>
);
