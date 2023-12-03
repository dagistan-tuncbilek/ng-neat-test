import {Component, inject, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TestComponent} from "./modal/test/test.component";
import {ModalService} from "./modal/modal.service";
import {FirstComponent} from "./modal/first/first.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private modalService = inject(ModalService)

  // isOpen = false;

  openDialog() {
    this.modalService.openDialog(FirstComponent)
  }
}
