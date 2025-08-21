import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { API_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appConfig.service';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    LoginComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: API_CONFIG,
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
