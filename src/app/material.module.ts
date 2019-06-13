import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatIconModule, 
     MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatProgressSpinnerModule
    } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

    
@NgModule({
    imports:[MatButtonModule,MatCheckboxModule,MatFormFieldModule,MatInputModule,MatCardModule,
            MatSelectModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,MatMomentDateModule,MatProgressSpinnerModule],
    exports:[MatButtonModule,MatCheckboxModule,MatFormFieldModule,MatInputModule,MatCardModule,
            MatSelectModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatDialogModule,MatMomentDateModule,MatProgressSpinnerModule]
})
export class MaterialModule{}