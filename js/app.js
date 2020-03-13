console.log("Tama-gotcha!")



/// create class for tamagotchi

class Tamagotchi {
	constructor(name) {
		this.name = name
		this.age = 0
		this.boredom = 1
		this.hunger = 1
		this.sleepiness = 1
	}
}
/// hunger (1-10 scale)
/// sleepiness (1-10 scale)
/// boredom (1-10 scale)
/// age
/// name



// create game object
game = {
	makeTamagotchi(name) {
		game.tamagotchi = new Tamagotchi(name)
	}

}
 
	// include methods in game object







// 

// ability to feed pet
// Increase your pet's hunger, sleepiness, and boredom metrics at intervals of your choosing.
/// You pet should die if hunger, boredom, or sleepiness hits 10.

// ability to name pet

// ablity to move pet on screen

// ability to morph your pet at certain ages


// Increase your pet's age every [how ever long you want].


// display character

$( "#create-form" ).on("submit", (event) => {
	event.preventDefault()
	game.makeTamagotchi($(" #name-input" ).val())
})











// game start







/// Event listeners
/// button for create tamagotchi
/// button for feed method
/// button for sleep method
/// 






