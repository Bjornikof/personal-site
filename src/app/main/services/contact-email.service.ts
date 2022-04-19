import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  formspreeUrl = 'https://formspree.io/f/mgedndvo';
  jsonHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  sendEmail(email: string, name: string, message: string) {
    return this.http.post(this.formspreeUrl,
      {name: name, replyto: email, message: message},
      {'headers': this.jsonHeader});
  }

}
