import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../../model/client.entity";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrl: './client-management.component.css'
})
export class ClientManagementComponent implements OnInit, AfterViewInit{
  //Atributes//
clientData: Client;
dataSource: MatTableDataSource<any>;

    // Lo que se muestra en las columnas
displayedColumns: string[] = ['id', 'name', 'dni', 'email', 'zone'];

@ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
@ViewChild(MatSort, {static: false}) sort!: MatSort;
isEditMode: boolean;

//Constructor
  constructor(private clientService: ClientsService){
    this.isEditMode = false;
    this.clientData = {} as Client;
    this.dataSource = new MatTableDataSource<any>();
  }
  //Private methods
  private resetEditState() : void{
    this.isEditMode = false;
    this.clientData = {} as Client;
  }

  //UI Event Handlers

  onEditItem(element: Client){
    this.isEditMode = true;
    this.clientData = element;
  }

  onDeleteItem(element: Client){
    this.deleteClient(element.id);
  }

  onCancelEdit(){
    this.resetEditState();
    this.getAllClients();
  }

  onClientAdded(element:Client){
    this.clientData = element;
    this.createClient();
    this.resetEditState();
  }

  onClientUpdated(element: Client){
    this.clientData = element;
    this.updateClient();
    this.resetEditState();
  }
  //CRUD ACTIONS
  private getAllClients(){
    this.clientService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  };

  private createClient(){
    this.clientService.create(this.clientData).subscribe((response:any) =>{
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((client: Client)=>{
        return client;
      });
    });
  };

private updateClient(){
let clientToUpdate =this.clientData;
this.clientService.update(this.clientData.id, clientToUpdate).subscribe((response: any) => {
  this.dataSource.data = this.dataSource.data.map((client: Client) => {
    if (client.id === response.id) {
      return response;
    }
    return client;
  });
});
};

private deleteClient(clientId: number){
  this.clientService.delete(clientId).subscribe(()=>{
    this.dataSource.data = this.dataSource.data.filter((client: Client) => {
      return client.id !== clientId ? client : false;
    });
  });
};

ngOnInit():void{
  this.getAllClients()
}

ngAfterViewInit(): void{
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

}
