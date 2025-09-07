import { Component, signal, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('w-tracker');
  
  private router = inject(Router);

  constructor() {
    // Handle GitHub Pages redirect for client-side routing
    this.handleGitHubPagesRedirect();
  }

  private handleGitHubPagesRedirect(): void {
    const redirectPath = sessionStorage.getItem('github-pages-redirect');
    if (redirectPath) {
      sessionStorage.removeItem('github-pages-redirect');
      
      // Use setTimeout to ensure the router is ready
      setTimeout(() => {
        this.router.navigateByUrl(redirectPath);
      }, 0);
    }
  }
}
