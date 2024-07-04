

// class Car {
//     brand: string;
//     model: string;
//     constructor(brand:string, model:string) {
//       this.brand = brand;
//       this.model = model;
//     }

//     displayInfo() {
//       console.log(`Car: ${this.brand} ${this.model}`);
//     }
//   }

//   const myCar = new Car('Supra Mk4', 'Toyota');
//   myCar.displayInfo();  // Output: Car: Toyota Corolla



// class Student {
//    public name: string;
//     age:number;
//     constructor(stdName:string, stdAge:number){
//         this.name = stdName
//         this.age = stdAge
//     }
//     canProgram (): void {
//         console.log("This student can program");
//     }
// }

// let s1:Student =  new Student("Cristiano", 14)
// s1.name = "Ubaid"

// console.log(s1)


//Using abstract
// abstract class takePhoto {
//     filter: string;
//     brust: number;

//     constructor(filter: string, brust:number){
//         this.filter = filter;
//         this.brust = brust;
//     }
// }

// // inheritance seekh liya he ab bane ge oops ke master

// class Instagram extends takePhoto {
//     filter: string;
//     brust: number;
//     realTime: number;
//     constructor(filName:string, brustNo:number, rlTime:number){
//         // super(filName, brust)
//         super(filName, brustNo)
//         this.realTime = rlTime
//     }
// }

// let instaApp:Instagram = new Instagram("cold filter 01", 3, 50)

// console.log(instaApp);


// class personData {
//     public name: string;
//     private age: number;
//     public experince: number;

//     constructor(tName: string, tAge:number, Exp:number){
//         this.name = tName
//         this.age = tAge
//         this.experince = Exp
//     }

//     set ubdateAge(ubdAge: number){
//     this.age = ubdAge
//     }

//     set ubdExp(ubdExp: number){
//         this.experince = ubdExp
//         }
// }

// let tData1:personData = new personData("Hasnain", 10, 3)
// console.log(tData1);


// tData1.ubdateAge = 20


// console.log(tData1);

// tData1.ubdExp = 10

// console.log(tData1);


class GiaicAtm {
    private name: string;
    private pin: number;
    public balance: number;
    protected isLogin: boolean

    constructor(name: string, pin: number, balance: number) {
        this.name = name;
        this.pin = pin;
        this.balance = balance;

    }
    Login(): void {
        if (this.name === "Ubaid" || this.pin === 1234) {
            this.isLogin = true
        } else {
            this.isLogin = false
        }
    }

    deposit(amount: number): void {
        if (this.isLogin) {
            this.balance += amount
        } else {
            console.log("please login");
        }
    }

    withdrawl(amount: number): void {
        if (this.isLogin) {
            this.balance -= amount
        } else {
            console.log("please login");

        }
        console.log(`You Have Successfully withdrawed: ${amount}`);

        this.balance
    }
}


let UbaidTransac: GiaicAtm = new GiaicAtm("Ubaid", 1234, 20000)
UbaidTransac.Login()
UbaidTransac.withdrawl(1000)


console.log(UbaidTransac);


