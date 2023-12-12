var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello");
/*
class stu{

}

let ob:stu=new stu();
*/
/*
let name1:string="ajay";

console.log(typeof name1);

let age:number;
age=22;

let sal:number=234.000;

let isBoolean:boolean=true;

console.log(name1+" "+age+" "+sal+" "+isBoolean);
console.log("My name is "+name1);
console.log('My name is ${name1}');

let userName=null;
console.log(userName);
console.log(typeof userName);

let userPass;
console.log(userPass);
console.log(typeof userPass);

let x:any="hello";
console.log(typeof x);
x=18;
console.log(typeof x);

x={
    id:101,
    name:"ajay"
}

let y:number[]=[3,4,5,6];

for(let i=0;i<y.length;i++)
{
    console.log(y[i]);
}
console.log(y);

let z:string[]=["akash","ajay","jay","amol"];
console.log(z);
for(let i=0;i<z.length;i++)
{
    console.log(z[i]);
}


*/
/*
class Car
{
    model:string="Kia";
    color:string="Red"

    setModelName(model:string)
    {
        this.model=model;
    }

    getModelName():string
    {
        return this.model;
    }

    setColorName(color:string)
    {
        this.color=color;
    }

    getColorName():string
    {
        return this.color;
    }

}

let c:Car=new Car();

console.log(c.getModelName()+" "+c.getColorName());

*/
/*

//constructor

class UserComment
{
    commentId:number;
    content:string;

//
//     constructor()
//     {
//         this.commentId=101;
//         this.content="Topic is good";

//     }
//

    
    constructor(commentId:number=101,content:string="good")
    {
        this.commentId=commentId;
        this.content=content;
    }


    display():void{
        console.log(this.commentId+" "+this.content);
    }
}

let userComment:UserComment=new UserComment();

userComment.display();

let userComment1:UserComment=new UserComment(102,"v.good");

userComment1.display();
*/
/*
class Addition
{
    num1:number;
    num2:number;

    constructor()
    {
        this.num1=4;
        this.num2=5;
    }

    add():void{
        console.log(this.num1+"+"+this.num2+"="+(this.num1+this.num2));
    }
}

let sum:Addition=new Addition();

sum.add();
*/
var Car = /** @class */ (function () {
    function Car() {
        this._model = "Kia";
        this._color = "Red";
    }
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (_model) {
            this._model = _model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (_color) {
            this._color = _color;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.display = function () {
        console.log(this._model + " " + this._color);
    };
    return Car;
}());
var c = new Car();
c.display();
c.model = "Kia";
c.color = "red";
c.display();
// class Company
// {
//     private regNo:number;
//     private compName:string;
//     constructor(regNo:number=1023,compName:string="Bajaj")
//     {
//         this.regNo=regNo;
//         this.compName=compName;
//     }
//     display():void{
//         console.log(this.regNo+" "+this.compName);
//     }
// }
// let company:Company=new Company();
// company.display();
// class Employee extends Company
// {
//     private empName:string;
//     private empId:number;
// }
//Access specifier
var Company = /** @class */ (function () {
    function Company() {
        this.regNo = 101;
        this.name = "TCS";
    }
    Company.prototype.display1 = function () {
        console.log(this.regNo + " " + this.name);
    };
    return Company;
}());
var t = new Company();
t.display1();
t.regNo;
var emp = /** @class */ (function (_super) {
    __extends(emp, _super);
    function emp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ename = "Rohit";
        return _this;
    }
    emp.prototype.show = function () {
        t.display1();
        console.log(this.ename);
    };
    return emp;
}(Company));
var emp1 = new emp();
emp1.show();
