const Potion = require('../lib/Potion'); //use constructor from Potion.js

function Player(name = ''){ //if no name, empty string
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95); //health btwn 95 to 105
    this.strength = Math.floor(Math.random() * 5 + 7); //strength btwn 7 and 12
    this.agility = Math.floor(Math.random() * 5 + 7); //agiity btwn 7 and 12

    this.inventory = [new Potion('health'), new Potion()]; //inventory will have new Health potion and potion


    //ADD METHODs ON EVERY PLAYER OBJECT

    Player.prototype.getStats = function(){ //.prototype creates the method once
        return{
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    Player.prototype.getInventory = function(){
        if(this.inventory.length){
            return this.inventory; //return inventory and end function
        }

        return false; //otherwise its false
    }

    Player.prototype.getHealth = function(){
        return `${this.name}'s health is now ${this.health}!`;
    };

    Player.prototype.isAlive = function(){
        if(this.health ===0){
            return false;
        }

        return true;
    };

    Player.prototype.reduceHealth = function(health){
        this.health -= health;

        if (this.health < 0){
            this.health = 0;
        }
    };

    Player.prototype.getAttackValue = function(){
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max-min) + min);
    };

    Player.prototype.addPotion = function(potion){
        this.inventory.push(potion);
    };

    Player.prototype.usePotion = function(index){
        //splice(startOfArray, numberUntilEndOfArray, itemToAdd)
        //remove indexed item from array and return removed item as new array and choose the 0 index
        const potion = this.getInventory().splice(index, 1)[0]; 

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