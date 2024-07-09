class Human {


    static age: number;
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName:string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    setFullName(): string{
        return `${this.firstName}  ${this.lastName} `;
}
}

// Création de l'instance
const employeur = new Human("Jon", "DIKIZEYIKO");

employeur.firstName = "John";




// Using Method
const fullName = employeur.setFullName();


let elmt = document.getElementById("myResult");
elmt.textContent = fullName.toString();

console.log(fullName);