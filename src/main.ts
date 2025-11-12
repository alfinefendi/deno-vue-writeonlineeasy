import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from '@primeuix/themes/aura';
import Editor from "primevue/editor";
import "./assets/style.css";
import App from "./App.vue";
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component("Editor", Editor);
app.mount("#app");
