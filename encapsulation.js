var Employee = /** @class */ (function () {
    function Employee() {
        this.salary = 0;
    }
    Object.defineProperty(Employee.prototype, "isalary", {
        get: function () {
            return this.salary;
        },
        set: function (salary) {
            var isNegative = salary < 0;
            if (!isNegative) {
                this.salary = salary;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var Jon = new Employee();
Jon.isalary = 2500;
var elmt = document.getElementById("myResult");
elmt.textContent = Jon.isalary.toString();
