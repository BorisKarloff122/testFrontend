import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {FolderComponent} from "../../components/folder/folder.component";
import {ElementComponent} from "../../components/element/element.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {AddFileComponent} from "../../components/add-file/add-file.component";
import {DeleteElementComponent} from "../../components/delete-element/delete-element.component";
import {CreateFolderComponent} from "../../components/create-folder/create-folder.component";
import {LoaderComponent} from "../components/loader/loader.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "../../components/login/login.component";



@NgModule({
  declarations: [
    FolderComponent,
    ElementComponent,
    AddFileComponent,
    LoaderComponent,
    CreateFolderComponent,
    DeleteElementComponent,
    LoginComponent,
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatFormFieldModule,
        MatDialogModule,
        MatToolbarModule,
        MatTooltipModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
  exports: [
    MatIconModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule,
    FolderComponent,
  ]
})
export class SharedModule { }
