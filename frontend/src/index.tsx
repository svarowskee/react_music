import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from "@nextui-org/system";
import './index.css';
import App from "./app/index";


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <App/>
      </main>
    </NextUIProvider>
  </StrictMode>
);
