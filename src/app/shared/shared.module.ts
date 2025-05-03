import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { StylingModule } from './styling.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobCardComponent } from './job-card/job-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, StylingModule],
  exports: [
    // Angular Modules
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [provideHttpClient(withFetch())],
  declarations: [HeaderComponent, FooterComponent, JobCardComponent],
})
export class SharedModule {}
