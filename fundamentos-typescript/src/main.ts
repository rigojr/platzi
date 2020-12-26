function helloWorld(message:string) :void {
    console.log(message)
}

helloWorld("Hello Typescript")

let users: string[];
users = ["1","2","3","10","20","30"]

let users2: Array<string>

console.log(users.sort( (a,b) => parseInt(a) - parseInt(b) ))

// TUPLAS

let users3: [number,string];
users3 = [1,"123"];
console.log(users3)

let array:[number, string][] = [];
let matriz: Array<[number, string, boolean]> = [];

function whatTime(hour: number | string, minute: number | string) : string {
    return hour+':'+minute;
  }
  
  whatTime(1,30) //'1:30'
  whatTime('1',30) //'1:30'
  whatTime(1,'30') //'1:30'
  whatTime('1','30') //'1:30'

//   Usando Alias podemos reducir la cantidad de código en los tipos predefinidos.

type Hours = number | string;
type Minutes = number | string;

function whatTime2(hour: Hours, minute: Minutes) : string {
  return hour+':'+minute;
}

// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';   // string | number
// let smallPicture: SquareSize = '200x200'; // --> Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';

//Angle Bracket: <Type>
let username : any;
username = (<string>'danijazzero').toUpperCase()
///as: variable as type
username = (username as string).toLowerCase()

let testUsername : any = "Rigojr 24154359";

console.log( (testUsername as string).split(' ')[0] )

const fullNameMaxLength = 10;

class Employee {
  private _fullName: string;

  constructor (name: string) {
    this._fullName = name
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee(Smith);
employee.fullName = "Bob Smith";

if (employee.fullName) {
  console.log(employee.fullName);
}