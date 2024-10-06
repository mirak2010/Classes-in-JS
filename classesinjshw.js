class student{
    constructor(name,year){
        this.name= name;
        this.year=year;
    }
    age(){
        let date= new Date();
        return date.getFullYear() - this.year;
    }
}
student1= new student("Mark",2010);
document.getElementById("student1").innerHTML= "My name is " + student1.name + 
" And I am " + student1.age() + " So it means I was born in " + student1.year + 
"!!!!"
student2= new student("Abdullah", 2008);
document.getElementById("student2").innerHTML="My name is " + student2.name + 
" And I am " + student2.age() + " So it means I was born in " + student2.year
+ "!!!!";



class Car{
    constructor(brand){
        this.carname=brand;

    }
    present(){
        return ' I have an '
        + this.carname;
    }

}

class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return this.present()
        + ' and it is a' + this.model
    }
}
let myCar= new Model("Audi"," V8");
document.getElementById("demo").innerHTML= myCar.show();
class Student{
    constructor(firstname){
        this.studentname=firstname;
    }
    static hello(x){
        return "Hello and my name is " + x.studentname;    
    }
    static hi(x){
        return 'Hi I am ' + x.studentname;
    }
    welcome(){
        return "Welcome to " + this.studentname + "'s " + "world!!!"
    }
}
    myfirstname= new Student("Mirsaid");
    document.getElementById("demo1").innerHTML= Student.hello(myfirstname);
    document.getElementById("demo2").innerHTML= Student.hi(myfirstname);
    document.getElementById("demo3").innerHTML= myfirstname.welcome();













