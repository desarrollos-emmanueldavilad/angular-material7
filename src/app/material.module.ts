import {MatButtonModule, MatToolbarModule, MatInputModule, MatSelectModule} from '@angular/material'
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';



@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
    ]
})
export class MaterialModule {}