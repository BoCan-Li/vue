import Vue from "vue"
import {
  Button,
  Layout,
  Menu,
  Icon,
  Drawer,
  Radio,
  Form,
  Input,
} from "ant-design-vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Authorized from "@/components/Authorized"
import AuthDirective from "@/directives/auth"

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(Form)
Vue.use(Input)
Vue.component("Authorized", Authorized)
Vue.use(AuthDirective)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
