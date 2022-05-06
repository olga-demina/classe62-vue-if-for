const app = new Vue(
    {
        el: '#root',
        data: {
           names: ['Marco', 'Maria', 'Giovanni'],
           student: {
               name: 'Francesco',
               lastname: 'Natale',
               class: 62
           },
           studentList: [
                // {
                //     name: 'Francesco',
                //     lastname: 'Natale',
                //     class: 62
                // },
                // {
                //     name: 'Daniele',
                //     lastname: 'Silvestre',
                //     class: 62
                // },
                // {
                //     name: 'Davide',
                //     lastname: 'Isaia',
                //     class: 62
                // }
           ],
           studentIndex: 2
           
        },
        methods: {
           
        }
    }
);