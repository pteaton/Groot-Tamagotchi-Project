console.log("tamagotchi");






class Tamagotchi {
    constructor(name) {

        this.hunger = 0
        this.sleepiness = 0
        this.boredom = 0
        this.age = 0

        this.name = name
    }




}



const game = {

    /// STATE of App 
    tama: null,
    counter: 0,
    Timer: null,




    createTamagotchi: function(str) {
        const newTama = new Tamagotchi(str)
        this.tama = newTama
        const tamagotchiSpace = document.querySelector('.tamagotchiZone');
        console.log(tamagotchiSpace);
        let babyGroot = document.createElement('img')
        babyGroot.setAttribute('src', "https://git.generalassemb.ly/peaton373/tamagotchi-mini-project/blob/master/image-folder/babyGroot-levels-1-4.jpg?raw=true")
        babyGroot.id = 'babyGroot'
        tamagotchiSpace.appendChild(babyGroot)
        this.displayName();

    },

    displayName: function() {
        let displayName = document.createElement('h1')
        let tamgotchiName = document.getElementById('name')
        displayName.innerText = tamgotchiName.value
        displayName.style.color = 'white'
        let image = document.querySelector('.tamagotchiZone')
        image.style.padding = ('1%')
        image.style.margin = ('30pt auto')
        image.style.border = ('5px solid white')
        image.style.backgroundColor = ('limegreen')
        image.appendChild(displayName)


    },


    startTimer: function() {
        game.timer = setInterval(this.timeIt, 1000)
        let timer = document.getElementById('timer')
        timer.innerText = game.counter

    },




    timeIt: function() {
        game.counter += 1
        let timer = document.getElementById('timer')
        timer.innerText = game.counter
        if (game.counter % 5 === 0) {
            console.log('5secs');
            game.getHungry();
        }
        if (game.counter % 5 === 0) {
            console.log('10secs');
            game.getBored();
        }
        if (game.counter % 1 === 0) {
            console.log('15ecs');
            game.getTired();
        }
    },

    getHungry: function() {
        game.tama.hunger += 2
        console.log(game.tama.hunger);
        let hungerLevel = document.querySelectorAll('li')[0]
        hungerLevel.innerText = (`Hunger = ${game.tama.hunger}`)
        if (game.tama.hunger === 4) {
            game.eatLunch()
        }
        if (game.tama.hunger === 10) {
            game.death();
        }
    },


    getBored: function() {
        game.tama.boredom += 2
        console.log(game.tama.boredom);
        let boredomLevel = document.querySelectorAll('li')[2]
        boredomLevel.innerText = (`Boredom = ${game.tama.boredom}`)
        if (game.tama.boredom === 4) {
            game.playWithTamagotchi()
        }
        if (game.tama.boredom === 10) {
            game.death();
        }

    },

    getTired: function() {
        game.tama.sleepiness += 1
        console.log(game.tama.sleepiness);
        let sleepinessLevel = document.querySelectorAll('li')[1]
        sleepinessLevel.innerText = (`Sleepiness = ${game.tama.sleepiness}`)
        if (game.tama.sleepiness === 4) {
            game.restTamagotchi()
        }
        if (game.tama.sleepiness === 10) {
            game.death();
        }


    },


    eatLunch: function() {
        let buttonSpan = document.createElement('span')
        buttonSpan.classList.add('buttonSpan')
        buttonSpan.innerText = (`${game.tama.name} is getting very hungry !`)
        buttonSpan.style.color = "white"
        let feedButton = document.createElement('button')
        feedButton.id = 'feedButton'
        feedButton.innerText = (`Feed ${game.tama.name}`)
        feedButton.style.color = 'red'
        feedButton.style.backgroundColor = 'white'
        let docBody = document.querySelector('body')
        docBody.appendChild(buttonSpan)
        buttonSpan.appendChild(feedButton)
    },


    playWithTamagotchi: function() {
        let buttonSpan = document.createElement('span')
        buttonSpan.classList.add('buttonSpan')
        buttonSpan.innerText = (`${game.tama.name} is getting bored !`)
        buttonSpan.style.color = "white"
        let playButton = document.createElement('button')
        playButton.id = 'playButton'
        playButton.innerText = (`Play with ${game.tama.name}`)
        playButton.style.color = 'red'
        playButton.style.backgroundColor = 'white'
        let docBody = document.querySelector('body')
        docBody.appendChild(buttonSpan)
        buttonSpan.appendChild(playButton)
    },



    restTamagotchi: function() {
        let sleepyIndicator = document.createElement('div')
        sleepyIndicator.id = 'sleepyIndicator'
        let container = document.querySelector('.container')
        sleepyIndicator.innerText = (`${game.tama.name} is getting sleepy! Hit the lights to rest.`)
        container.appendChild(sleepyIndicator)
    },

    goDark: function() {
        game.gameChanger();
        console.log("Time to sleep");
        let body = document.querySelector('body')
        body.style.backgroundColor = 'black'
        let switchOff = document.getElementById('switchOff')
        switchOff.remove()
        let switchOn = document.createElement('img')
        switchOn.classList.add('switch')
        switchOn.id = 'switchOn'
        switchOn.setAttribute('src', 'https://git.generalassemb.ly/peaton373/tamagotchi-mini-project/blob/master/image-folder/babyGroot-levels-1-4.jpg?raw=true')
        let container = document.querySelector(".container")
        container.appendChild(switchOn)
        game.resetMetrics();
    },




    gameChanger: function() {
        clearInterval(game.timer)
        if (game.tama.sleepiness >= 4) {
            game.removeScript();
        }
    },

    removeScript: function() {
        let script = document.getElementById('sleepyIndicator')
        script.remove()
    },

    resetMetrics: function() {
        game.tama.sleepiness = 0
        let sleepinessLevel = document.querySelectorAll('li')[1]
        sleepinessLevel.innerText = (`Sleepiness = ${game.tama.sleepiness}`)
        game.tama.age += 1
        let age = document.querySelectorAll('li')[3]
        age.innerText = (`Age = ${game.tama.age}`)
        if (game.tama.hunger >= 4) {
            game.removeButtons();
        }
        if (game.tama.boredom >= 4) {
            game.removeButtons();
        }
    },




    // game.removeButtons();



    removeButtons: function() {
        let button1 = document.querySelectorAll('.buttonSpan')[0]
        let button2 = document.querySelectorAll('.buttonSpan')[1]
        button1.remove()
        button2.remove()
    },




    goBright: function() {
        console.log(" time to wake up")
        let body = document.querySelector('body')
        body.style.backgroundColor = 'white'
        let switchOn = document.getElementById('switchOn')
        switchOn.remove()
        let switchOff = document.createElement('img')
        switchOff.classList.add('switch')
        switchOff.id = 'switchOff'
        switchOff.setAttribute('src', 'https://git.generalassemb.ly/peaton373/tamagotchi-mini-project/blob/master/image-folder/groot%20levels-9-10.png?raw=true')
        let container = document.querySelector(".container")
        container.appendChild(switchOff)
        game.startTimer();
        if (game.tama.hunger >= 4) {
            game.eatLunch();
        }
        if (game.tama.boredom >= 4) {
            game.playWithTamagotchi();
        }
        if (game.tama.age === 2) {
            game.evolve();
        }


    },


    evolve: function() {
        let evolveButton = document.createElement('button')
        let docBody = document.querySelector('body')
        let buttonSpace = document.createElement('div')
        buttonSpace.classList.add('evoContainer')
        buttonSpace.innerText = (`${game.tama.name} is evolving`)
        evolveButton.id = ('evolveButton')
        evolveButton.innerText = ('continue')
        docBody.appendChild(buttonSpace)
        buttonSpace.appendChild(evolveButton)
    },




    completeEvo: function() {
        let babyGroot = document.getElementById('upgrade')
        babyGroot.remove();
        let adultGroot = document.createElement('img')
        adultGroot.setAttribute('src', "https://git.generalassemb.ly/peaton373/tamagotchi-mini-project/blob/master/image-folder/groot%20levels-9-10.png?raw=true")
        adultGroot.id = 'adultGroot'
        let tamagotchiZone = document.querySelector('.tamagotchiZone')
        tamagotchiZone.appendChild(adultGroot)
        let buttonSpan = document.querySelector('.evoContainer')
        buttonSpan.remove();
    },



    death: function() {
        let bigList = document.getElementById('grootStatus')
        bigList.remove();
        let scoreArena = document.querySelector('.scoreArena')
        clearInterval(game.timer);
        game.deadGroot();


        if (game.tama.hunger === 10) {
            let deathMessage = document.createElement('h1')
            deathMessage.classList.add('deathMessage')
            deathMessage.innerText = (`${game.tama.name} has died of starvation. ${game.tama.name} lived to a staggering age of ${game.tama.age}`)
            let docBody = document.querySelector('body')
            scoreArena.appendChild(deathMessage)
        }
        if (game.tama.boredom === 10) {
            let deathMessage = document.createElement('h1')
            deathMessage.classList.add('deathMessage')
            deathMessage.innerText = (`${game.tama.name} has died of neglect. ${game.tama.name} lived to a staggering age of ${game.tama.age}`)
            let docBody = document.querySelector('body')
            scoreArena.appendChild(deathMessage)
        }
        if (game.tama.sleepiness === 10) {
            let deathMessage = document.createElement('h1')
            deathMessage.classList.add('deathMessage')
            deathMessage.innerText = (`${game.tama.name} died of sleep deprivation. ${game.tama.name} lived to a staggering age of ${game.tama.age}`)
            let docBody = document.querySelector('body')
            scoreArena.appendChild(deathMessage)

        }

    },




    deadFrog: function() {

        if (game.tama.age >= 2) {
            let liveGroot = document.getElementById('adultGroot')
            liveGroot.remove();
            let deadGroot = document.createElement('img')
            deadGroot.id = 'deadGroot'
            deadGroot.setAttribute('src', 'https://git.generalassemb.ly/peaton373/tamagotchi-mini-project/blob/master/image-folder/groot%20levels-9-10.png?raw=true')
            let docBody = document.querySelector('body')
            docBody.appendChild(deadGroot)
        }

        if (game.tama.age < 2) {
            let liveGroot = document.getElementById('adultGroot')
            liveGroot.remove();
            let deadGroot = document.createElement('img')
            deadGroot.id = 'deadGroot'
            deadGroot.setAttribute('src', 'https://git.generalassemb.ly/peaton373/tamagotchi-mini-project/blob/master/image-folder/groot%20levels-9-10.png?raw=true')
            let docBody = document.querySelector('body')
            docBody.appendChild(deadGroot)
        }
    },



}




const submitForm = document.querySelector('.form')

submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('button works');
    const tamagotchiName = document.querySelector('#name')
    game.createTamagotchi(tamagotchiName.value)
    tamagotchiName.value = ""
    game.startTimer();


})




document.addEventListener('mousedown', (event) => {
    // const feedbutton = document.getElementById('feedButton')
    if (event.target && event.target.id == ('feedButton')) {
        game.tama.hunger = 0
        const hungerLevel = document.querySelectorAll('li')[0]
        hungerLevel.innerText = (`Hunger = ${game.tama.hunger}`)
    }
})




document.addEventListener('mouseup', (event) => {
    if (event.target && event.target.id == ('feedButton')) {
        const buttonSpan = document.querySelector('.buttonSpan')
        buttonSpan.remove()
    }
})


document.addEventListener('mousedown', (event) => {
    if (event.target && event.target.id == ('playButton')) {
        game.tama.boredom = 0
        const boredomLevel = document.querySelectorAll('li')[2]
        boredomLevel.innerText = (`Boredom = ${game.tama.boredom}`)
    }
})




document.addEventListener('mouseup', (event) => {
    if (event.target && event.target.id == ('playButton')) {
        const buttonSpan = document.querySelector('.buttonSpan')
        buttonSpan.remove()
    }
    if (event.taget && event.target.id == ('feedButton')) {
        const buttonSpan = document.querySelector('.buttonSpan')
        buttonSpan.remove()
    }

})

const switchContainer = document.querySelector('.container')
const lightSwitch = document.getElementById('switchOff')

switchContainer.addEventListener('click', (event) => {
    if (event.target.id == 'switchOff') {
        game.goDark()
    }
    if (event.target.id == 'switchOn') {
        game.goBright()
    }


})


document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'evolveButton') {
        game.completeEvo();
    }

})