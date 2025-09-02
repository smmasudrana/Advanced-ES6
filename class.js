class player{
    constructor(name, age){
        this.name = name;
        this.age= age ;
        this.location = 'bangladesh'
    }

    goal(){
        console.log('score a goal');
    }
    getTeamName(){
        return 'barsa'
    }
}
const player1 = new player('tom brady', 33);
const player2 = new player('oshanto', 25);

console.log(player1 instanceof player);
console.log(player2);
player1.goal()