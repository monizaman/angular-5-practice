import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule,MatToolbarModule,MatTableModule,MatFormFieldModule,MatInputModule } from '@angular/material';


@NgModule({
  imports: [ MatButtonModule,MatToolbarModule,MatTableModule,MatFormFieldModule,MatInputModule ],
  exports: [ MatButtonModule,MatToolbarModule,MatTableModule,MatFormFieldModule,MatInputModule ],
})
export class MaterialModule {}