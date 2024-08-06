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
    child: Array<Child>;
}


const EquipierN1: Employer = {
    name: "Jon",
    money: 2000000,
    age: 27,
    
    child: [{
        
         name: "Carl",
         money: 80000,
         age: 7,
        villes: ["Los-Angeles","Paris","New York"],
    }, {
        name: "James",
        money: 50000,
        age: 5,
        villes: ["Los-Angeles","Paris","New York","London"],
    }]
}


const result: unknown  = EquipierN1.child[1].name;
const result2: unknown= EquipierN1.child[1].money;
console.log(result);
console.log(result2);
 















const element = document.getElementById("myResult");
const element2 = document.getElementById("myResult2");
element.textContent = result.toString();
element2.textContent = result2.toString();

//console.log(result);



