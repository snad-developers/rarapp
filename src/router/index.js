import { createRouter, createWebHashHistory } from 'vue-router'
import loginPage from '../components/loginPage.vue';
import registrationPage from '../components/registrationPage.vue';
import HomePage from '../components/HomePage.vue';
import SecurityPage from '../components/SecurityPage.vue';



const routes = [
{
    path: "/",
    name: "HomePage",
    component: HomePage
},
{
path: "/loginPage",
name: "loginPage",
component: loginPage
},
{
path: "/registrationPage",
name: "registrationPage",
component: registrationPage

},
{
  path: "/SecurityPage",
  name: "SecurityPage",
  component: SecurityPage
  
},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
