import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, BannerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'linkedIn-post-ssr-app';
}
