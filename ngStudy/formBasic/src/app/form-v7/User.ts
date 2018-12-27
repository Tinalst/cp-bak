export class User {
  name: string;
  age: string;
  constructor(obj?) {
    this.name = obj && obj['name'] || '';
    this.age = obj && obj['age'] || '';
  }
}
