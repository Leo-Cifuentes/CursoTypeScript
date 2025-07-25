export class Usuario {
  constructor(public name: string, public email: string, public city?: string) {
    this.name = name;
    this.email = email;
    this.city = city;
  }
    public getInfo(): string {
        return `Name: ${this.name}, Email: ${this.email}, City: ${this.city || "Not specified"}`;
    }
}