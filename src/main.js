import { createApp } from "vue";
import "./assets/css/main.css";
import App from "./App.vue";
import router from "@/routers";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import VuteDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const app = createApp(App);
app.use(router);
app.component("VueDatePicker", VuteDatePicker);
app.mount("#app");
