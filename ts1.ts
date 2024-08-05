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
    villes: Array<string>;
}

type Employer = Person & {
    child?: Child;
}


const EquipierN1: Employer = {
    name: "Jon",
    money: 2000000,
    age: 27,
    
    child:  {
        
         name: "Carl",
         money: 10000,
         age: 7,
        villes: ["Los-Angeles","Paris","New York"],
}
}


const result: any = EquipierN1.child?.villes[1];
const result2: any = EquipierN1.child?.money;
console.log(result , result2);
 















const element = document.getElementById("myResult");
element.textContent = result.toString();

console.log(result);



