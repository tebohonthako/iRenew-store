import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function login() {
  var email = document.getElement('email').value;
  var password = document.getElementById('password').value;

  // You would typically fetch user data from JSON or a server
  // For simplicity, we'll hardcode user data here
  var users = [
      { "email": "user1", "password": "password1" },
      { "email": "user2", "password": "password2" }
  ];

  // Check if the entered credentials match any user
  var authenticatedUser = users.find(user => user.email === email && user.password === password);

  if (authenticatedUser) {
      document.getElementById('message').textContent = 'Login successful!';
  } else {
      document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
  }
}
