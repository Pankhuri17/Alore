import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectorSidebarComponent } from './prospector-sidebar.component';

describe('ProspectorSidebarComponent', () => {
  let component: ProspectorSidebarComponent;
  let fixture: ComponentFixture<ProspectorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectorSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
