import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VerseListComponent } from './verse-list/verse-list.component';



@NgModule({
  declarations: [
    // Remove AppComponent from declarations
    // Add other components here
    VerseListComponent
  ],
  imports: [
    BrowserModule,
    // Add AppComponent to imports
    AppComponent,
    // Add other modules here
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
