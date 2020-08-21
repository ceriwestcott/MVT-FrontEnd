// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// @ts-ignore
import {NbButtonModule, NbLayoutModule, NbSidebarModule, NbThemeModule} from "@nebular/theme";
// @ts-ignore
import {RouterModule, Router} from  "@angular/router";
// @ts-ignore
import {TestModule} from "../../../../libs/test/src";
import {UserService} from "../../../../libs/services/src/lib/api-client";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        RouterModule.forRoot([]),
        NbThemeModule.forRoot(),
        BrowserModule,
        NbLayoutModule,
        NbSidebarModule.forRoot(),
        NbButtonModule,
        TestModule,
      HttpClientModule
    ],
  providers: [UserService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
