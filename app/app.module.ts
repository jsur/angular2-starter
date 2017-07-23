import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';

@NgModule({
  imports: [ // Any module we want to use
    BrowserModule,
    FormsModule
   ],
  declarations: [ // Any component or directive we want to use
    AppComponent,
    UserProfileComponent,
    UserFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
