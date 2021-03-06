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
            filteredCourses: courses,
            categorySet: 0
        }
    },
    methods: {
        setCategory(cat) {
            this.categorySet = cat.category
            console.log(this.categorySet);
            this.filteredCourses = []
            this.courses.forEach((element) => {
                if (cat.category == 0) {
                    this.filteredCourses.push(element)
                }
                if (element.category == this.categorySet) {
                    this.filteredCourses.push(element)
                }
            })
        },
        getStars(vote) {
            let starsHTML = '';
            for (var i = 1; i <= 5; i++) {
                if (i <= Math.ceil(vote / 2)) {
                    starsHTML += '<img src="dist/img/starfull.svg" alt="">';
                } else {
                    starsHTML += '<img src="dist/img/staremptyl.svg" alt="">';
                }
            }
            return starsHTML;
        },
    },
    mounted() {
        // push dei corsi development in un array
        this.courses.forEach((element) => {
            if (element.category == 1) {
                this.developmentCourses.push(element)
            }
        })
    },
})