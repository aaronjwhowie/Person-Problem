

// Class 
class person {
    private name :string;
    private age: number;
    private address: string;

//  Constructor 
constructor(name :string,age: number,address: string){

    this.name = name;
    this.age = age;
    this.address = address;


}

// Methods

nameAddress(name :string,address: string): void {
let namexAddress = name.concat(address);
console.log(namexAddress)
return
    }
}
let profile = new person("Brandon", 30, " 9000 Turtle Dr");
profile.nameAddress;
console.log(profile.nameAddress("Brandon"," 9000 Turtle Dr"));