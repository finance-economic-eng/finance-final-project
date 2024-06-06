import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Client} from "../model/client.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends BaseService <Client>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = "/clients";
  }
}
