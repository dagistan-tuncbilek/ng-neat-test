import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements AfterViewInit{

  // @ViewChild('modal') private modalContent!: TemplateRef<any>

  constructor(private modalService: ModalService) {}

  ngAfterViewInit(): void {
    // this.modalService
    //   .open(this.modalContent, { size: 'lg', title: 'Foo' })
    //   .subscribe((action) => {
    //     console.log('modalAction', action);
    //   });
  }


}
