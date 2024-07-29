class person {
  constructor(name, id, age) {
    this.myname = name;
    this.myage = age;
    this.myid = id;
  }
  name() {
    console.log(`Name of the person is : ${this.myname}`);
  }
  age() {
    console.log(`Age of the person is : ${this.myage}`);
  }
  id() {
    console.log(`id of the person is : ${this.myid}`);
  }
}
 class personmore extends person{
        super(name, id , age,no){
    /*super constructor is called in derived class so 
    that to access the parent constructor and properties*/ 
        
        console.log(`no. of this person is: ${this.myid}`)
    }
 }

 const person1=new personmore('ok',234,23,1)
 const person2=new personmore('dok',345,21,2)
 const person3=new personmore('kok',456,27,3)

 person1.age();
 person1.name();
 person1.id();