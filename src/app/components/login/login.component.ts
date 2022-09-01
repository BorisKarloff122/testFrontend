import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public formSubmitted: boolean = false;
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void{
    this.form = this.fb.group({
      name:['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  public toggleShow(): void{
    this.showPassword = !this.showPassword;
  }

  public submitForm(): void{
    this.formSubmitted = true;
      if(this.form.valid){
        this.dialogRef.close(this.form.value);
        this.formSubmitted = false;
      }
  }

}
