// function damage(characterToDamage : {life : number}, amount: number):number{
//     characterToDamage.life -= amount;
//     return characterToDamage.life;
// }
// let result: number = damage({ life: 100 }, 42);
var _a, _b;
var EquipierN1 = {
    name: "Jon",
    money: 2000000,
    age: 27,
    child: {
        name: "Carl",
        money: 10000,
        age: 7,
        villes: ["Los-Angeles", "Paris", "New York"],
    }
};
var result = (_a = EquipierN1.child) === null || _a === void 0 ? void 0 : _a.villes[1];
var result2 = (_b = EquipierN1.child) === null || _b === void 0 ? void 0 : _b.money;
console.log(result, result2);
var element = document.getElementById("myResult");
element.textContent = result.toString();
console.log(result);
