import { createApp } from "vue";
import "./assets/css/main.css";
import App from "./App.vue";
import router from "@/routers";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
