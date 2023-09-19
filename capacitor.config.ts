import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.andy.app",
  appName: "color-pallete",
  webDir: "dist",
  bundledWebRuntime: false,
  overrideUserAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  server: {
    allowNavigation: ["*"],
    // url: "http://localhost:5173",
  },
};

export default config;
