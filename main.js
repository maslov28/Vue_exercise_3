Vue.createApp({
    data() {
        return {
            date: new Date(),
            outDate: ''
        }
    },
    methods: {
        dateTransform(n) {
            if (n == 1) {
                this.outDate = this.date.toLocaleDateString();
            }
            else if (n == 2) {
                this.outDate = this.date.toLocaleDateString().split('.').reverse().join('-');
            }
            else {
                this.outDate = this.date.toLocaleDateString().split('.').join('/');
            }
        }
    }
}).mount('#app');