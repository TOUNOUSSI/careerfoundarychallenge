import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header" #myRegister>
        <h4 class="modal-title text-center">Want to know if UX design is right for you? </h4>
        <h5 class=" text-center small-text">Find out our free 7-days short courses</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <form class="register-form">
        <div class="form-group modal-body">
    
            <input type="text" class="form-control" placeholder="First Name*">
            <input type="text" class="form-control" placeholder="Email*">
            <br>
    
    
        </div>
        <div class="modal-footer">
            <div class="left-side">
                <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Never mind</button>
            </div>
            <div class="divider"></div>
            <div class="right-side">
                <button type="button" class="btn btn-primary btn-link" (click)="activeModal.close('Close click')">Register</button>
            </div>
        </div>
    </form>`
})
export class NgbdModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) { }
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})

export class NgbdModalComponent {
    constructor(private modalService: NgbModal) { }
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
