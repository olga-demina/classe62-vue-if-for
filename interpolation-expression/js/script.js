const app = new Vue(
    {
        el: '#root',
        data: {
            isCiao: true
        },
        methods: {
            changeGreeting: function() {
                // if (this.isCiao === true) {
                //     this.isCiao = false;
                // } else {
                //     this.isCiao = true;
                // }
                this.isCiao = !this.isCiao;
            }
        }
    }
);