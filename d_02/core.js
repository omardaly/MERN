class Ninja{
    constructor (name,health=20,speed=3,strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
}
    sayName(){
        console.log(`this ninja name: ${this.name}`);
        return this
    }
    showStats(){
        // console.log(`name:${this.name},
        //             health:${this.health},
        //             speed:${this.speed},
        //             strength:${this.strength}`
        // );
        console.log(this)
        return this

    }
    drinkSake(){
        this.health+=10;
        return this
        // console.log(`${this.health}`);
    }

}


class Sensei extends Ninja {
    constructor (name,health=200,speed=10,strength=10,wisdom=10){
        super(name,health,speed,strength);
        this.wisdom =wisdom;

}
    speakWisdom(){
        this.drinkSake();
    }
}

const sensei1 = new Sensei("jhone")
sensei1.speakWisdom()
sensei1.showStats()