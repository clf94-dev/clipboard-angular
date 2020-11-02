import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { MiddleComponent } from './components/middle/middle.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { FeaturesComponent } from './components/features/features.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MiddleComponent,
    CompaniesComponent,
    FeaturesComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
