import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LocationModule } from './location/location.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { VannModule } from './vann/vann.module';
import { CanActGuardGuard } from './services/can-act-guard.guard';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LocationModule,
    HomeModule,
    VannModule

  ],
  providers: [CanActGuardGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
