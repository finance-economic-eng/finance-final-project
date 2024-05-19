export class Client {
  id: number;
  name: string;
  dni: string;
  email: string;
  idZone: number;
  idClientDeals: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.dni = '';
    this.email = '';
    this.idZone = 0;
    this.idClientDeals = 0;
  }
}
