import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { ModelsModule } from './models/models.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    AuthModule,
    ModelsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
