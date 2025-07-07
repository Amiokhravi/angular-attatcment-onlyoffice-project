import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { Component } from '@angular/core';

import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { TreeModule } from 'primeng/tree';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';

// p-fileUpload
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      ButtonModule,
      FileUploadModule,
      TreeModule,
      ToolbarModule,
      CardModule,
      DialogModule
      
    )
  ]
});
