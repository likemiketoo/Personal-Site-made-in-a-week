//var prompt = require("prompt-sync")();
var myCurrentPokemon = [];
var cpuCurrentPokemon = [];

var myPokemonRoster = 
[
    {
        name: "Pikachu",
        type: "electric",
        hp: 89,
        atk: 84,
        def: 78,
        legend: false,
        aliveCheck: true
        
    },
    {
        name: "Quilava",
        type: "fire",
        hp: 58,
        atk: 64,
        def: 58,
        legend: false,
        aliveCheck: true
    },
    {
        name: "Bulbasaur",
        type: "grass",
        hp: 39,
        atk: 70,
        def: 43,
        legend: false,
        aliveCheck: true
    }
]

var cpuPokemonRoster = 
[
    {
        name: "Blastoise",
        type: "water",
        hp: 95,
        atk: 80,
        def: 75,
        legend: false,
        aliveCheck: true
    },
    {
        name: "Wartortle",
        type: "water",
        hp: 54,
        atk: 66,
        def: 58,
        legend: false,
        aliveCheck: true
    },
    {
        name: "Squirtle",
        type: "water",
        hp: 44,
        atk: 56,
        def: 38,
        legend: true,
        aliveCheck: true
    }
]

// Prints Roster
function printRoster(rosterArray, cpuRosterArray)
{
    console.log("Your Pokemon: ")
    for (var i = 0; i < rosterArray.length; i++)
    {
        if(rosterArray[i].aliveCheck != false)
        {
           console.log(rosterArray[i].name + "- HP: " + rosterArray[i].hp);
        }
    }
}

function playerChoice(rosterArray, cpuRosterArray)
{
    if((rosterArray[0].aliveCheck != true)&&(rosterArray[1].aliveCheck != true)&&(rosterArray[2].aliveCheck != true))
    {
        console.log("You have no more Pokemon! You Lose!");
        gameEnd();
    }
    
    var temp = 0;
    var usrPkmNum = 0;
    
    var choice = prompt("Select your Pokemon: ");
    for(var i = 0; i < rosterArray.length; i++)
    {
        if((choice == rosterArray[i].name) && (rosterArray[i].aliveCheck != false))
        {
            console.log("Go " + rosterArray[i].name + "!")
            temp = 1;
            usrPkmNum = i;
        }
    }
    
    if(temp == 0)
    {
        console.log("You don't have that Pokemon...");
        playerChoice(rosterArray, cpuRosterArray);
    }
    else
    {
    }
    
    battle(usrPkmNum, rosterArray, cpuRosterArray);
}


function battle(usrPkm, usrRosterArray, cpuRosterArray)
{
    var cpuPkm = getRandomInt(3);
    if((cpuRosterArray[0].aliveCheck != true)&&(cpuRosterArray[1].aliveCheck != true)&&(cpuRosterArray[2].aliveCheck != true))
    {
        console.log("The CPU has no more Pokemon! You win!");
        gameEnd();
    }
    
    for(var i = 0; cpuRosterArray[cpuPkm].aliveCheck != true; i++)
    {
        if(cpuRosterArray[cpuPkm].aliveCheck != true)
        {
            cpuPkm = getRandomInt(3);
        }
    }
    
    console.log("Your opponent chose " +  cpuRosterArray[cpuPkm].name);
    var atkChoice = prompt("Attack? Y/N");
                           
    if(atkChoice == "Y")
    {
        console.log(usrRosterArray[usrPkm].name + " attacked!");
        console.log(usrRosterArray[usrPkm].name + " did " + usrRosterArray[usrPkm].atk + " damage.");
        
        cpuRosterArray[cpuPkm].hp = cpuRosterArray[cpuPkm].hp - usrRosterArray[usrPkm].atk;
        
        //Makes Pokemon health 0 if the value goes into the negatives
        if(cpuRosterArray[cpuPkm].hp <= 0)
        {
            cpuRosterArray[cpuPkm].hp = 0;
        }
        
        console.log(cpuRosterArray[cpuPkm].name + " health went down to " + cpuRosterArray[cpuPkm].hp + "!");
        
        if(cpuRosterArray[cpuPkm].hp <= 0)
        {
            console.log(cpuRosterArray[cpuPkm].name + " fainted!")
            cpuRosterArray[cpuPkm].aliveCheck = false;
        }
        defend(usrPkm, cpuPkm, usrRosterArray, cpuRosterArray);
    }
    else if(atkChoice == "N")
    {
        defend(usrPkm, cpuPkm, usrRosterArray, cpuRosterArray);
    }
    
    
}

function defend(usrPkm, cpuPkm, usrRosterArray, cpuRosterArray)
{
    if((cpuRosterArray[0].aliveCheck != true)&&(cpuRosterArray[1].aliveCheck != true)&&(cpuRosterArray[2].aliveCheck != true))
    {
        console.log("The CPU has no more Pokemon! You win!");
        gameEnd();
    }
    
    for(var i = 0; cpuRosterArray[cpuPkm].aliveCheck != true; i++)
    {
        if(cpuRosterArray[cpuPkm].aliveCheck != true)
        {
            cpuPkm = getRandomInt(3);
        }
    }
    console.log("Your opponent chose " +  cpuRosterArray[cpuPkm].name);
    console.log(cpuRosterArray[cpuPkm].name + " attacked!");
    console.log(cpuRosterArray[cpuPkm].name + " did " + cpuRosterArray[cpuPkm].atk + " damage.");

    usrRosterArray[usrPkm].hp = usrRosterArray[usrPkm].hp - cpuRosterArray[cpuPkm].atk;

    //Makes Pokemon health 0 if the value goes into the negatives
    if(usrRosterArray[usrPkm].hp <= 0)
    {
        usrRosterArray[usrPkm].hp = 0;
    }

    console.log(usrRosterArray[usrPkm].name + " health went down to " + usrRosterArray[usrPkm].hp + "!");

    if(usrRosterArray[usrPkm].hp <= 0)
    {
        console.log(usrRosterArray[usrPkm].name + " fainted!")
        usrRosterArray[usrPkm].aliveCheck = false;
    }
    
    playerChoice(usrRosterArray, cpuRosterArray);
    
}

//Random number function
function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

function gameEnd()
{
    break
    return;
}


printRoster(myPokemonRoster);
playerChoice(myPokemonRoster, cpuPokemonRoster);
// Subtracts HP from each object
// function pokemonAttack(rosterArray)
// {
//   for (var i = 0; i < rosterArray.length; i++)
//   {
//     rosterArray[i].hp = rosterArray[i].hp - 10;
//   }
//   printRoster(rosterArray);
// }
// pokemonAttack(myPokemonRoster);