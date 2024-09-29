class student{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
    let date=new Date();
    return date.getFullYear()- this.year;
    }
    
}

student1= new student("Mirakhmad", 2010);
document.getElementById("student1").innerHTML="My name is " + student1.name  + " I was born in " + student1.year + " and my age is " + student1.age();
student2 = new student("Mirsadik", 2007);
document.getElementById("student2").innerHTML = "My name is " + student2.name + " I was born in " + student2.year + " and my age is " + student2.age();
