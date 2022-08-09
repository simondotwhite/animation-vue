import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "animate.css";

import { vueAnimateCss } from "../../dist/main";
import { GlobalAnimateConfig } from "../../dist/common/config";

const app = createApp(App);
app.use(
  vueAnimateCss(
    GlobalAnimateConfig.init({
      duration: 1000,
      delay: 1000,
      repeat: 1
    })
  )
);
app.mount("#app");
