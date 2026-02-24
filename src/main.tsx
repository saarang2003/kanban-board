import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { ProjectProvider } from "./context/ProjectContext";
import { StoryProvider } from "./context/StoryContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <ProjectProvider>
        <StoryProvider>
          <App />
        </StoryProvider>
      </ProjectProvider>
    </UserProvider>
  </StrictMode>,
);
