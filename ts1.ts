// function damage(characterToDamage : {life : number}, amount: number):number{
//     characterToDamage.life -= amount;
//     return characterToDamage.life;
// }
// let result: number = damage({ life: 100 }, 42);


type Person = {
    name: string;
    money: number;
    age: number;
}
type child = Person;

type Employer = Person & {
    child?: child;
}


const EquipierN1: Employer = {
    name: "Carl",
    money: 2000,
    age: 27,
    
//const enfant1 : child ={
// name: "Carl",
// money: 2000,
// age: 27, 
// }
}


const result: any = EquipierN1;
console.log(result);
 















const element = document.getElementById("myResult");
element.textContent = result.toString();

console.log(result);



