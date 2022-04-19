import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {faEnvelope, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";
import {ContactEmailService} from "../../services/contact-email.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {faInstagram, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  faPaperPlane = faPaperPlane;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  linkedInUrl = 'https://www.linkedin.com/in/dilaraunbay/';
  instagramUrl = 'https://www.instagram.com/bjornikof/';
  whatsappUrl = 'https://wa.me/905319380045';

  success = 'Message is on its way 😉';
  failure = 'Opsies, message is lost 😦';

  messageForm =  this._formBuilder.group({
    fullName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    message: [null, Validators.required]
  });

  constructor(private _formBuilder: FormBuilder,
              private _contactEmailService: ContactEmailService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openLink(url: number) {
    switch(url) {
      case 0: {
        window.open(this.linkedInUrl);
        break;
      }
      case 1: {
        window.open(this.instagramUrl);
        break;
      }
      case 2: {
        window.open(this.whatsappUrl);
        break;
      }
    }
  }

  sendEmail() {
    if (this.messageForm.valid) {
      const name = this.messageForm.get('fullName')?.value;
      const email = this.messageForm.get('email')?.value;
      const message = this.messageForm.get('message')?.value;
      this._contactEmailService.sendEmail(name, email, message).subscribe({
        next: () => {
          this._snackBar.open(this.success);
        },
        error: () => {
          this._snackBar.open(this.failure);
        }
      });
    }
  }

}
