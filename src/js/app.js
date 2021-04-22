Vue.config.devtools = true;
import menu from './menu.js'
import courses from './courses.js'
import social from './social.js'
let app = new Vue({
    el: "#root",
    data() {
        return {
            menu: menu,
            courses: courses,
            social: social
        }
    },
    methods: {},
    mounted() {
        console.log(this.courses);



    },
    computed: {},
    watch() {}
})