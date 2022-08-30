import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss']
})
export class AddFileComponent{
  public fileArray: File[] = [];
  public formData = new FormData();
  constructor(
    private dialogRef: MatDialogRef<AddFileComponent>
  ) { }

  public onFileSelected(event: any) {
    this.fileArray = Array.from(event.target.files);
    this.processFormData(this.fileArray);
  }

  public closeDialog(): void{
    this.dialogRef.close(this.formData)
    this.fileArray = [];
  }

  public removeUpload(index: number): void{

    this.fileArray.splice(index, 1);
    this.processFormData(this.fileArray);
  }


  public processFormData(arr: File[]): void{
    arr.forEach((i, item)=>{
      this.formData.append(i.name, i);
    })
  }
}
