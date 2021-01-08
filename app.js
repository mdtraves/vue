$vm = new Vue({
    el: '#app',
    data : {
        Player: 'Roberto Firmino',
        Position: 'Striker',
        Country: 'Brazil',
        Current: true,
        Age: 29,
        Goals: 234,
        message: 'bum',
        players: ['Trent', 'Virgil', 'Andy', 'Thiago', 'Sadio', 'Takumi' ]
    },
    methods:{
        increase: function(){
            return this.Goals ++
        }, 
        decrease: function(){
            return this.Goals --
        }
    }



})


