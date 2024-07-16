class Person{

   name: string;
   age: number;

    constructor(
        name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person{
   public salary !: number ;
}

let Jon = new Employee("Diki",29);

 Jon.salary = 2500;




let elmt = document.getElementById("myResult");
elmt.textContent = Jon.salary.toString();