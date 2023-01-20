// Class 
var person = /** @class */ (function () {
    //  Constructor 
    function person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // Methods
    person.prototype.nameAddress = function (name, address) {
        var namexAddress = name.concat(address);
        console.log(namexAddress);
        return;
    };
    return person;
}());
var profile = new person("Brandon", 30, " 9000 Turtle Dr");
profile.nameAddress;
console.log(profile.nameAddress("Brandon", " 9000 Turtle Dr"));
