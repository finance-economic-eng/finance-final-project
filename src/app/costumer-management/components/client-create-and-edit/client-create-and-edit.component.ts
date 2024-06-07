import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Client} from "../../model/client.entity";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-client-create-and-edit',
  templateUrl: './client-create-and-edit.component.html',
  styleUrl: './client-create-and-edit.component.css'
})
export class ClientCreateAndEditComponent {
  @Input() client : Client;
  @Input() editMode = false;
  @Output() clientAdded = new EventEmitter<Client>();
  @Output() clientUpdated = new EventEmitter<Client>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('clientForm', {static: false}) clientForm!: NgForm;

  constructor() {
    this.client = {} as Client;
  }

  onSubmit(){
    if(this.clientForm.form.valid){
      let emitter = this.editMode ? this.clientUpdated : this.clientAdded;
      emitter.emit(this.client)
      this.resetEditState();
    } else{
      console.error('Invalid data in form');
    }
  }

  onCancel(){
    this.editCanceled.emit();
    this.resetEditState()
  }

  private resetEditState(){
    this.client = {} as Client;
    this.editMode = false;
    this.clientForm.resetForm();
  }
}
