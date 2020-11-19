class Hello{
  constructor(){
    this.messagec = 'Hello';
  }

  hello(){
    console.log(this.messagec)
    console.log('Hello');
  }
}

class Person extends Hello{
  constructor(){
    super();
    this.names = 'Max';
    this.messagec = 'Hi';
  }

  name(){
    console.log(this.names)
  }
}

const person = new Person();
person.name();
person.hello();