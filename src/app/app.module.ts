import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { FormsModule }   from '@angular/forms';   // <-- Import declaration

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'about', component: MyAboutComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
