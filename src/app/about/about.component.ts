import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name!: string;
  version!: string;
  group!: string;
  date!: string;
  git!: String;

  ngOnInit(): void {
    this.name = "tanulo";
    this.version = "tanulo 001";
    this.name = "Szabó Brigitta";
    this.group = "Szoft II/N";
    this.date = "2023-03-08";
    this.git = "https://github.com/tailorbrigit"
   
  }
}
