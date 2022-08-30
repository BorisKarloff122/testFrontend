import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IElement} from "../../shared/models/element";
import {DataService} from "../../shared/services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteElementComponent} from "../delete-element/delete-element.component";
import {lastValueFrom, mergeMap, tap} from "rxjs";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() public elem!: IElement;
  public env = environment

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public action(): void{
    if(this.elem.type === 'folder'){
      this.moveToDir(this.elem.path, 1)
    }
  }

  public moveToDir(val: string, direction: number): void{
    this.dataService.moveToDir({ path: val, direction: direction}).subscribe((res)=>{
      this.dataService.$getCatalogDataSource.next('');
    });
  }

  public async removeElement(): Promise<void>{
    let result = this.dialog.open(DeleteElementComponent, {data: this.elem}).afterClosed().pipe(
      mergeMap(()=>this.dataService.removeElement(this.elem)),
      tap(()=> this.dataService.$getCatalogDataSource.next(''))
    )

    await lastValueFrom(result);
  }

  public downloadElement(elem: IElement): void{

  }
}
