import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Data.TableComponent } from './data.table.component';

describe('Data.TableComponent', () => {
  let component: Data.TableComponent;
  let fixture: ComponentFixture<Data.TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Data.TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Data.TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
