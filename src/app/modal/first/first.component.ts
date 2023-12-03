import {Component, inject} from '@angular/core';
import {ModalService} from "../modal.service";
import {TestComponent} from "../test/test.component";
import {SecondComponent} from "../second/second.component";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  private modalService = inject(ModalService)


  openDialog() {
    this.modalService.openDialog(SecondComponent);
  }
}
