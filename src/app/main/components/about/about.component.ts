import {Component, OnInit} from '@angular/core';
import {FirestoreItemService} from "../../services/firestore-item.service";
import {take} from "rxjs";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faFileDownload = faFileDownload;

  firestoreCollection: string = 'certificationItems';
  tableData: any[] = [];
  skillSet: string[] = ["UI/UX", "Front End Development", "Software Development", "Web Development", "Angular",
    "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "Angular Material", "VueJS", "Vuetify", "Camunda", "REST",
    "API", "Java", "Spring Boot", "English", "Russian", "Turkish"];

  constructor(private firestoreItemService: FirestoreItemService) {
  }

  ngOnInit(): void {
    this.getCertificationItems();
  }

  getCertificationItems() {
    return this.firestoreItemService.getItems(this.firestoreCollection).snapshotChanges()
      .pipe(take(1)).subscribe(data => {
        for (let item of data) {
          this.tableData.push(item.payload.doc.data());
        }
      }, error => {
        console.log(error);
      });
  }

  downloadCV() {
    window.open('assets/files/dilara_unbay_ENG_CV.pdf', '_blank');
  }

}
