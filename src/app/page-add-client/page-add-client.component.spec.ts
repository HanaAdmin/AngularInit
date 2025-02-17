import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddClientComponent } from './page-add-client.component';

describe('PageAddClientComponent', () => {
  let component: PageAddClientComponent;
  let fixture: ComponentFixture<PageAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAddClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
