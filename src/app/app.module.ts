import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent }	from './nav.component';
import { AboutComponent } from './about.component';
import { FooterComponent }  from './footer.component';
import { ProjectsComponent }  from './projects.component';
import { ExperienceComponent }  from './experience.component';
import { EducationComponent }  from './education.component';
import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
