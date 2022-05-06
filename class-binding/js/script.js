const app = new Vue(
    {
        el: '#root',
        data: {
            imgSrc: 'img/milano.jpg',
            isImgGrey: true,
            hasBorderRadius: false,
            // imgClass: 'img-grey img-border-radius',
            // imgBorderRadius: ''
        },
        methods: {
            changeImage: function() {
                this.isImgGrey = !this.isImgGrey;
                this.hasBorderRadius = !this.hasBorderRadius;
            }
        }
    }
);