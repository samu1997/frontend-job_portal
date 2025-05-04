import { Component } from '@angular/core';

@Component({
  selector: 'job-portal-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend-job_portal';
  mobileMenuOpen = false;

  // don't delete this
  // toggleDarkMode() {
  //   const element = document.querySelector('html');
  //   element?.classList.toggle('my-app-dark');
  // }

  openMobileMenu() {
    this.mobileMenuOpen = true;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
