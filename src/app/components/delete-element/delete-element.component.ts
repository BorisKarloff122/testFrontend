import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IElement} from "../../shared/models/element";
import {DataService} from "../../shared/services/data.service";

@Component({
  selector: 'app-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.scss']
})
export class DeleteElementComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IElement,
    private dialogRef: MatDialogRef<DeleteElementComponent>,
    private dataService: DataService
  ) { }

  ngOnInit(): void {

  }

  public closeDialog(): void{
    this.dialogRef.close();
  }

}
