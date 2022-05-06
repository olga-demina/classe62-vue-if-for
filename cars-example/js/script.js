const app = new Vue(
    {
        el: '#root',
        data: {
            cars: [
                {
                    marca: 'Fiat',
                    modello: 'Punto',
                    colore: 'viola'
                },
                {
                    marca: 'BMW',
                    modello: 'Serie 3',
                    colore: 'blu elettrico'
                },
                {
                    marca: 'Mercedes',
                    modello: 'Classe A',
                    colore: 'verde lime'
                }
            ],

            newMarca: '',
            newModello: '',
            newColore: ''
        },
        methods: {
            addCar: function() {
                // Creo un nuovo oggetto con i valori degli input
                const newCar = {
                    marca: this.newMarca,
                    modello: this.newModello,
                    colore: this.newColore
                }

                // Aggiungo l'oggetto all'interno dell'array
                this.cars.push(newCar);

                // Ripulisco i campi
                this.newMarca = '';
                this.newModello = '';
                this.newColore = '';
            }
        }
    }
);