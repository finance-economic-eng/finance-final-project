export class Client {
  id: number;
  name: string;
  dni: string;
  email: string;
  zone: string;
  idClientDeals: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.dni = '';
    this.email = '';
    this.zone = '';
    this.idClientDeals = 0;
  }
}
