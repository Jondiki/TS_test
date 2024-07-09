class Human {

    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName:string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    getFullName(): string{
        return `${this.firstName}${this.lastName}`;
}
}




const employeur: Human = new Human("Jon","Diki");

const fullName = employeur.getFullName();



let elmt = document.getElementById("myResult");
elmt.textContent = fullName.toString();