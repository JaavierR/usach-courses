import { VPTheme } from "@vue/theme";
// import "./styles/styles.css";
import "./styles/overrides.css";

const theme: any = {
  ...VPTheme,
  enhanceApp(ctx: any) {
    VPTheme.enhanceApp?.(ctx);

    // if (typeof window !== "undefined") handleRedirects(ctx.router);
  },
};

export default theme;
