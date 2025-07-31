import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'random-name-picker';
  names: string[] = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
  selectedName = '';
  newName = '';
  showFireworks = false;

  pickRandomName() {
    if (this.names.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.names.length);
      this.selectedName = this.names[randomIndex];
      this.triggerFireworks();
    }
  }

  addName() {
    if (this.newName.trim() && !this.names.includes(this.newName.trim())) {
      this.names.push(this.newName.trim());
      this.newName = '';
    }
  }

  removeName(index: number) {
    this.names.splice(index, 1);
    if (this.names.length === 0) {
      this.selectedName = '';
    }
  }

  triggerFireworks() {
    this.showFireworks = true;
    setTimeout(() => {
      this.showFireworks = false;
    }, 2000);
  }
}
