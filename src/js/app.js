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
            developmentCourses: [],
            filteredCourses: [],
            categorySet: null
        }
    },
    methods: {
        setCategory(cat) {
            this.categorySet = cat.category
            console.log(this.categorySet);
        },
        courseFiltered(course) {
            this.courses.forEach((element) => {
                if (element.category == this.categorySet) {
                    this.filteredCourses.push(element)
                }
            })
        }
    },
    mounted() {
        // push dei corsi development in un array
        this.courses.forEach((element) => {
            if (element.category == 1) {
                this.developmentCourses.push(element)
            }
        })
    },
    computed: {
        courseFiltered() {
            this.courses.forEach((element) => {
                if (element.category == this.categorySet) {
                    this.filteredCourses.push(element)
                }
            })
        }
    },
    watch() {}
})