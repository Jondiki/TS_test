var Human = /** @class */ (function () {
    function Human(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Human.prototype.setFullName = function () {
        return "".concat(this.firstName, "  ").concat(this.lastName, " ");
    };
    return Human;
}());
// Création de l'instance
var employeur = new Human("Jon", "DIKIZEYIKO");
employeur.firstName = "John";
// Using Method
var fullName = employeur.setFullName();
var elmt = document.getElementById("myResult");
elmt.textContent = fullName.toString();
console.log(fullName);
