console.log("Tama-Groot!")



/// create class for tamagotchi

class Tamagotchi {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

/// hunger (1-10 scale)
/// sleepiness (1-10 scale)
/// boredom (1-10 scale)
/// age
/// name



/// create game object
const game = {
	tamagotchi: null,
	intervalID: null,
	gameTimer: 0,
	sleepLevel: 0,
	




    startGame: function() {
        $('#tamaImage1').show()

    },




    makeTamagotchi(name) {
        game.tamagotchi = new Tamagotchi(name)
    },

    startTimer: function() {
        this.timerID = setInterval() => {

        }
    }


}




// include methods in game object



// ability to feed pet
// Increase your pet's hunger, sleepiness, and boredom metrics at intervals of your choosing.
/// You pet should die if hunger, boredom, or sleepiness hits 10.

// ability to name pet

// ablity to move pet on screen

// ability to morph your pet at certain ages


// Increase your pet's age every [how ever long you want].


// display character


// submit button/ create name
$("#create-form").on("submit", (event) => {
    event.preventDefault()
    game.makeTamagotchi($(" #name-input").val())
})



// need to hide submit button
// $("#hide").click(function(){
//   $("p").hide();
// });

// $(selector).toggle(speed,callback);




// game start




/// Event Listeners ///


/// button for create tamagotchi


/// button for feed method


/// button for rest


/// button for play