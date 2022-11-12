//var person = "Fatima";
//let animals = [];

//animals = person

let firstName: any = "John";
let height: number = 6;
let isDone: boolean = false;

firstName = height;

interface IVehicle {

    wheels: number;
    engine: string;
    drive();
}

class Car implements IVehicle{

    wheels: number;
    engine: string;

    constructor(wheels: number, engine:string){

        this.wheels = wheels;
        this.engine = engine;
    }

    drive(){
        console.log('Driving....');
    }
}

let myCar = new Car(4, 'v8');
myCar.drive();