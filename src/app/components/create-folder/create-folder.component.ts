import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.scss']
})
export class CreateFolderComponent{
  public form: FormGroup = this.fb.group({
    folderName: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(
    private dialogRef: MatDialogRef<CreateFolderComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public formSubmit(): void{
    if(this.form.valid){
      this.dialogRef.close(this.controlsGetter('folderName'));
    }
  }

  public controlsGetter(ctrlName: string): string{
    return this.form.controls[ctrlName].value;
  }

}
