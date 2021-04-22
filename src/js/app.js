Vue.config.devtools = true;
import menu from './menu.js'
let app = new Vue({
    el: "#root",
    data() {
        return {
            menu: menu
        }
    },
    methods: {},
    mounted() {

        console.log(this.menu);


    },
    computed: {},
    watch() {}
})