import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/irouter";
import store from "./store/sindex";
import uiComponents from "./ui-components/uindex";

const app = createApp(App);

uiComponents.map((component) => app.component(component.name, component));
app.use(router);
app.use(store);
app.mount("#app");
