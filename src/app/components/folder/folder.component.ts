import {Component} from '@angular/core';
import {IElement} from "../../shared/models/element";
import {DataService} from "../../shared/services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateFolderComponent} from "../create-folder/create-folder.component";
import {lastValueFrom, mergeMap, Observable, of, switchMap, tap, timeout} from "rxjs";
import {AddFileComponent} from "../add-file/add-file.component";


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  public elements: Observable<IElement[]> = this.dataService.$getCatalogDataSource.pipe(
    mergeMap(() => this.dataService.getCatalogData())
  );
  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) { }

  public async createDir(): Promise<void>{
    let result = this.dialog.open(CreateFolderComponent,{
      width:'500px',
      height:'220px',
    }).afterClosed().pipe(
      mergeMap((res)=> res ? this.dataService.createDir(res) : of(res)),
      tap((res)=> res ? this.dataService.$getCatalogDataSource.next('') : of(res)
    ))
    await lastValueFrom(result);
  }

  public async uploadFile(): Promise<void>{
    let result = this.dialog.open(AddFileComponent,{
      width: '500px',
    }).afterClosed().pipe(
      mergeMap((res)=>{
        return this.dataService.uploadFile(res);
      }),
      tap((res)=> {this.dataService.$getCatalogDataSource.next('');})
    )

    await lastValueFrom(result)
  }

  public async levelBack(): Promise<void>{
      let result = this.dataService.moveToDir({direction: 0}).pipe(
        tap(()=> this.dataService.$getCatalogDataSource.next(''))
      );

      await lastValueFrom(result)
  }

  public async goToHomeFolder(): Promise<void>{
    let result = this.dataService.goToHomeFolder().pipe(
      tap(()=> this.dataService.$getCatalogDataSource.next(''))
    )
    await lastValueFrom(result);
  }

}
