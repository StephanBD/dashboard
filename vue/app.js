import Vue from "vue";
import Alert from "./Alert.vue";
// import Slide from "./Slide.vue";

// new Vue({
//   el: "#app",
//   components: { Slide },
//   created() {
//     console.log("xxxxxxxxxxxxx");
//   },
// });

new Vue({
  // store,
  render: (h) => h(Alert),
}).$mount("#app");
