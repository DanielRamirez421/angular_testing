import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { LoginForm } from './form';


describe('Forms tests', () => {

  let component: LoginForm;

  beforeEach(() => {
     component = new LoginForm(new FormBuilder());
  });


  it('Should create a form with email field inside', () => {
    expect(component.form.contains('email')).toBeTruthy();
  });


  it('Should create a form with password field inside', () => {
    expect(component.form.contains('password')).toBeTruthy();
  });


  it('Email should be required', () => {
    const emailControl = component.form.get('email');
    const errors = emailControl?.errors;
    expect(errors && errors['required']).toBeTruthy();
  });



  it('Email should be valid', () => {
    const email = component.form.get('email');
    email?.setValue('daniel@daniel.com');
    expect(email?.valid).toBeTruthy();
  });



});
