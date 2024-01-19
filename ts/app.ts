import { ShutdownIcon } from "$ts/images/power";
import { appLibrary } from "$ts/stores/apps";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { Runtime } from "./runtime";

export const ExitApp: App = {
  metadata: {
    name: "Exit",
    description: "The Exit menu",
    author: "The ArcOS Team",
    version: "2.0.0",
    icon: ShutdownIcon,
    hidden: true,
    appGroup: "internal"
  },
  runtime: Runtime,
  content: AppSvelte,
  id: "ExitApp",
  size: { w: NaN, h: NaN },
  minSize: { w: NaN, h: NaN },
  maxSize: { w: NaN, h: NaN },
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
  },
  singleInstance: true,
  loadCondition: () => appLibrary.get().has("ArcShell")
}