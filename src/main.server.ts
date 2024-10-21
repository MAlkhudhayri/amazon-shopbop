import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

export default function bootstrap(): Promise<ApplicationRef> {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      provideServerRendering()
    ]
  });
}
