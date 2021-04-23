Vue.config.devtools = true;
import menu from './menu.js'
import courses from './courses.js'
import social from './social.js'
import category from './category.js'
let app = new Vue({
    el: "#root",
    data() {
        return {
            menu: menu,
            courses: courses,
            social: social,
            category: category,
            developmentCourses: []
        }
    },
    methods: {},
    mounted() {
        // push dei corsi development in un array
        this.courses.reverse().forEach((element) => {
            if (element.category == 1) {
                this.developmentCourses.push(element)
            }
        })
    },
    computed: {},
    watch() {}
})