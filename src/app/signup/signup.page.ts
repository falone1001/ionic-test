import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  // Get form values
  get fullName() {
    return this.signupForm.get('fullName')
  }

  get email() {
    return this.signupForm.get('email')
  }

  get age() {
    return this.signupForm.get('age')
  }

  get password() {
    return this.signupForm.get('password')
  }

  // Error handling
  public errors = {
    fullName: [
      { type: 'required', message: '* Full Name cannot be empty' },
      { type: 'minlength', message: '* Full Name must be at least 8 characters long' }
    ],
    email: [
      { type: 'required', message: '* Email cannot be empty' },
      { type: 'email', message: '* Email must be valid' }
    ],
    age: [
      { type: 'required', message: '* Age cannot be empty' },
      { type: 'pattern', message: '* Invalid age format' },
      { type: 'maxlength', message: '* Age cannot exceed 99' }
    ],
    password: [
      { type: 'required', message: '* Password cannot be empty' },
      { type: 'minlength', message: '* Password must be at least 5 characters long' },
      { type: 'maxlength', message: '* Password must be at most 15 characters long' }
    ],
  }

  // Add form fields and their validators
  signupForm = this.formBuilder.group({
    fullName: ['',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ],
    email: ['',
      [
        Validators.required,
        // Validators.email
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ]
    ],
    age: ['',
      [
        Validators.required,
        Validators.pattern('^[1-9][0-9]?$'),
        Validators.max(99)
      ]
    ],
    password: ['',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]
    ]
  });

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
  }

  public submit() {
    this.route.navigate(['/home']);
  }

}
