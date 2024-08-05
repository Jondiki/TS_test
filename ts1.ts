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
type Child = Person & 
{
    ville: string;
}

type Employer = Person & {
    child?: Child;
}


const EquipierN1: Employer = {
    name: "Jon",
    money: 2000,
    age: 27,
    
    child:  {
        
         name: "Carl",
         money: 2000,
         age: 27,
         ville: "New York",
}
}


const result: any = EquipierN1;
console.log(result);
 















const element = document.getElementById("myResult");
element.textContent = result.toString();

console.log(result);



