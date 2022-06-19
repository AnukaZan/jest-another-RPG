const Potion = require('../lib/Potion'); //use constructor from Potion.js
const Character = require('./Character');

class Player extends Character {
    constructor(name = ''){ //if no name, empty string
        super(name); //passes the name argument to constructor of Character class
        
        this.inventory = [new Potion('health'), new Potion()]; //inventory will have new Health potion and potion
    }
    
    getStats(){ //.prototype creates the method once
        return{
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    getInventory(){
        if(this.inventory.length){
            return this.inventory; //return inventory and end function
        }
    
        return false; //otherwise its false
    }

    addPotion(potion){
        this.inventory.push(potion);
    };

    usePotion(index){
        //splice(startOfArray, numberUntilEndOfArray, itemToAdd)
        //remove indexed item from array and return removed item as new array and choose the 0 index
        const potion = this.inventory.splice(index, 1)[0]; 
    
        switch(potion.name){
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;   
            case 'strength':
                this.strength += potion.value;
                break;
        }
    };
}



module.exports = Player;