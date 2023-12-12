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


class Car
{
    private _model:string="Kia";
    private _color:string="Red"

   public set model(_model:string)
    {
        this._model=_model;
    }

   public get model():string
    {
        return this._model;
    }

    set color(_color:string)
    {
        this._color=_color;
    }

    get color():string
    {
        return this._color;
    }

    display():void{
        console.log(this._model+" "+this._color);
    }

}

let c:Car=new Car();

c.display();
c.model="Kia";
c.color="red";

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

class Company
{
    public regNo:number;
    private name:string; // we cannot access private members 

    constructor()
   {
    this.regNo=101;
    this.name="TCS";
  }

  display1():void
  {
    console.log(this.regNo+" "+this.name);

  }
}

let t:Company=new Company();
t.display1();
t.regNo;

class emp extends Company
{
   private ename:string="Rohit";

   public show():void
   {
        t.display1()
        console.log(this.ename);
   }
}

let emp1:emp=new emp();
emp1.show()