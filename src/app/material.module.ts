import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
       MatFormFieldModule,
       MatInputModule} from '@angular/material';



@NgModule({

    imports:[
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports:[
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers:[
       
    ]
})

export class MaterialModule
{

}