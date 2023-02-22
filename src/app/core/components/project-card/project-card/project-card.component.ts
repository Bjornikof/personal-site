import {Component, Input, OnInit} from '@angular/core';
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {


  @Input() header: string = '';
  @Input() description: string = '';
  @Input() prodLink: string = '';
  @Input() githubLink: string = '';
  @Input() techs: string[] = ['', ''];
  @Input() mediaArray: string[] = ['', ''];


  faGlobe = faGlobe;
  faGithub = faGithub;

  constructor() {
  }

  ngOnInit(): void {
  }

}
