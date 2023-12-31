import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { IonicModule } from '@ionic/angular';
import { EditorLayoutComponent } from './editor-layout/editor-layout.component';



@NgModule({
  declarations: [
    EditorLayoutComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    EditorModule
  ],
  exports:[
    EditorLayoutComponent,
  ]
})
export class ComponentsModule { }
