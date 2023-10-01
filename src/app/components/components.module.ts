import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { IonicModule } from '@ionic/angular';
import { EditorLayoutComponent } from './editor-layout/editor-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';



@NgModule({
  declarations: [
    EditorLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    EditorModule
  ],
  exports:[
    EditorLayoutComponent,
    MainLayoutComponent
  ]
})
export class ComponentsModule { }
