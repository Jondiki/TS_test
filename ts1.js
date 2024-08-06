// function damage(characterToDamage : {life : number}, amount: number):number{
//     characterToDamage.life -= amount;
//     return characterToDamage.life;
// }
// let result: number = damage({ life: 100 }, 42);
var EquipierN1 = {
    name: "Jon",
    money: 2000000,
    age: 27,
    child: [{
            name: "Carl",
            money: 80000,
            age: 7,
            villes: ["Los-Angeles", "Paris", "New York"],
        }, {
            name: "James",
            money: 50000,
            age: 5,
            villes: ["Los-Angeles", "Paris", "New York", "London"],
        }]
};
var result = EquipierN1.child[1].name;
var result2 = EquipierN1.child[1].money;
console.log(result);
console.log(result2);
var element = document.getElementById("myResult");
var element2 = document.getElementById("myResult2");
element.textContent = result.toString();
element2.textContent = result2.toString();
//console.log(result);
