import { DOCUMENT } from '@angular/common';
import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import {ModalComponent} from "./modal/modal.component";
import {TestComponent} from "./test/test.component";
import {DialogRef, DialogService} from "@ngneat/dialog";
import {FirstComponent} from "./first/first.component";

@Injectable({providedIn: 'root'})
export class ModalService {

  private modalNotifier: Subject<string> = new Subject();

  constructor(
    private dialogService: DialogService,
    // private resolver: ComponentFactoryResolver,
    // private injector: Injector,
    // @Inject(DOCUMENT) private document: Document
  ) {}

  // open(content: TemplateRef<any>, options?: { size?: string; title?: string }) {
  //   const modalComponentFactory = this.resolver.resolveComponentFactory(
  //     ModalComponent
  //   );
  //   const contentViewRef = content.createEmbeddedView(null);
  //   const modalComponent = modalComponentFactory.create(this.injector, [
  //     contentViewRef.rootNodes,
  //   ]);
  //
  //   modalComponent.instance.size = options?.size;
  //   modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
  //
  //   modalComponent.hostView.detectChanges();
  //
  //   this.document.body.appendChild(modalComponent.location.nativeElement);
  //   this.modalNotifier = new Subject();
  //   return this.modalNotifier.asObservable();
  // }

  // closeModal() {
  //   this.modalNotifier.complete();
  // }
  //
  // submitModal() {
  //   this.modalNotifier.next('confirm');
  //   this.closeModal();
  // }

  openDialog(component: any) {
    this.dialogService.open(component);
  }
}
