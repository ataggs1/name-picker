import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'random-name-picker';
  names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank']; // Added for tests
  selectedName = '';
  showFireworks = false;

  pickRandomName() {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    this.selectedName = this.names[randomIndex];
    this.triggerFireworks();
  }

  triggerFireworks() {
    this.showFireworks = true;
    setTimeout(() => {
      this.showFireworks = false;
    }, 2000);
  }
}
