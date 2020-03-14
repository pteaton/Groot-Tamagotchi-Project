class Tamagotchi {
    constructor(name) {
        this.name = name
    }
}

const app = {

    tamagotchi: null,
    intervalId: null,
    gameTimer: 0,
    sleepLevel: 0,
    hungryLevel: 0,
    boredLevel: 0,
    age: 0,

    startGame: function(name) {

        this.createTamagotchi(name)
        this.showPets()
        this.timer()
        this.hunger()
	},

    showPets: function() {

        $('#NameDiv').trigger('reset')
        $('#tamaImage1').show()
        $('.timer').show()
        $('#para').show()

    },

    createTamagotchi: function(name) {

        const newTamagotchi = new Tamagotchi(name)
        this.tamagotchi = newTamagotchi
        this.printNameAndAge()


    },

    printNameAndAge: function() {

        const $ul = $('#unord-list')
        $ul.text("")

        const $li = $('<li></li>')

        $li.text(`Name: ${this.tamagotchi.name}`)
        console.log($li.text())

        $ul.append($li)

    },

    timer: function() {
        this.intervalId = setInterval(() => {
            $('#timer').text(this.gameTimer++)
            if ($('#timer').text() % 10 == 0) {
                $('#HungerDiv').text(this.hungryLevel++)
                $('#SleepinessDiv').text(this.sleepLevel++)
                $('#BoredomDiv').text(this.boredLevel++)
                $('#AgeDiv').text(this.age++)
            }
        }, 1000)
    },

    hunger: function() {


    },
    sleepiness: function() {

    },

    boredom: function() {

    },

}

$('#NameDiv').on('submit', (event) => {

    // stops default form submitting
    event.preventDefault()

    const $name = $('#NameDiv').val()

    app.startGame($name)

})