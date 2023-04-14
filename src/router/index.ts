import {createRouter,createWebHashHistory} from "vue-router";
import ChatWindow from '../pages/ChatWindow.vue'
import Profile from '../pages/Profile.vue'
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/chatWindow",
      component: ChatWindow,
    },
    {
      path: "/profile",
      component: Profile,
    }
  ]
});
