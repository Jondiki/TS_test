var Human = /** @class */ (function () {
    function Human(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Human.prototype.getFullName = function () {
        return "".concat(this.firstName).concat(this.lastName);
    };
    return Human;
}());
var employeur = new Human("Jon", "Diki");
var fullName = employeur.getFullName();
var elmt = document.getElementById("myResult");
elmt.textContent = fullName.toString();
