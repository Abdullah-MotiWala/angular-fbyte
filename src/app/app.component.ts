import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LocalStorageService],
})
export class AppComponent {
  title = 'eazio';
}
