import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule
  ]
  
})
export class MaterialModule { }
