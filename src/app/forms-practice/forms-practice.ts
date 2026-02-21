import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minLength } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms-practice',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forms-practice.html',
  styleUrl: './forms-practice.css',
})
export class FormsPractice {

  profileform = new FormGroup({
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  })

  onSubmit() {
    console.log(this.profileform.value);
  }
  get name(){
    return this.profileform.get('name')
  }
  get email(){
    return this.profileform.get('email')
  }
  get password(){
    return this.profileform.get('password')
  }
}

