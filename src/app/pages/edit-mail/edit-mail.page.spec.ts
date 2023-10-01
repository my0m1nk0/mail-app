import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMailPage } from './edit-mail.page';

describe('EditMailPage', () => {
  let component: EditMailPage;
  let fixture: ComponentFixture<EditMailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
