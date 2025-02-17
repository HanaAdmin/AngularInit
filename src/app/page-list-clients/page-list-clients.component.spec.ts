import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListClientsComponent } from './page-list-clients.component';

describe('PageListClientsComponent', () => {
  let component: PageListClientsComponent;
  let fixture: ComponentFixture<PageListClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
