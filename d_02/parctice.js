class Ninja{
    constructor (name){
        this.name = name;
        this.health = 20;
        this.speed = 3;
        this.strength = 3;
}
    sayName(){
        console.log(`this ninja name: ${this.name}`);
        return this
    }
    showStats(){
        console.log(`name:${this.name},
                    health:${this.health},
                    speed:${this.speed},
                    strength:${this.strength}`
        );
        return this

    }
    drinkSake(){
        this.health+=10;
        console.log(`${this.health}`);
    }

}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();



