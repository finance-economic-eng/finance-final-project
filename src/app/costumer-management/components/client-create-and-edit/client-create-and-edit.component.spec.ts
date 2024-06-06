import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateAndEditComponent } from './client-create-and-edit.component';

describe('ClientCreateAndEditComponent', () => {
  let component: ClientCreateAndEditComponent;
  let fixture: ComponentFixture<ClientCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientCreateAndEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
