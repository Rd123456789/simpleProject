import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSpecialComponentComponent } from './todo-special-component.component';

describe('TodoSpecialComponentComponent', () => {
  let component: TodoSpecialComponentComponent;
  let fixture: ComponentFixture<TodoSpecialComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSpecialComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSpecialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
