import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalComponent} from '../components/modal/modal.component'; 
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    MyRegister : NgbdModalComponent;
    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit() {}
}
