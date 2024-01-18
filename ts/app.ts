import { ShutdownIcon } from "$ts/images/power";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { Runtime } from "./runtime";

export const ExitApp: App = {
  metadata: {
    name: "Exit",
    description: "The Exit menu",
    author: "The ArcOS Team",
    version: "2.0.0",
    icon: ShutdownIcon
  },
  runtime: Runtime,
  content: AppSvelte,
  id: "ExitApp",
  size: { w: 0, h: 0 },
  minSize: { w: 0, h: 0 },
  maxSize: { w: 0, h: 0 },
  pos: { x: 0, y: 0 },
  state: {
    minimized: false,
    maximized: false,
    headless: true,
    fullscreen: true,
    resizable: false
  },
  controls: {
    minimize: false,
    maximize: false,
    close: false
  }
}