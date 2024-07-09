class Employee{
    private salary: number = 0; 
    
    get isalary()
    {
        return this.salary;
    }

    set isalary(salary: number)
    {
        const isNegative = salary < 0;
        if (!isNegative)
        {
            this.salary = salary;
        }
    }

}



const Jon = new Employee();

Jon.isalary = 2500;




let elmt = document.getElementById("myResult");
elmt.textContent = Jon.isalary.toString();