import { Component, ViewChild, ElementRef, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private validHeaders: Array<string> = ['recipes', 'shopping-list'];
  private componentInnerHTML: string;

  @ViewChild('componentHolder', { static: true }) componentHolder: ElementRef;

  setHeader(header: string) {
    if (this.validHeaders.includes(header)) {
      this.setComponent(header);
    }
  }

  private setComponent(name: string) {
    //  This code injection doesn't work, because of XSS protection
    // this.componentInnerHTML = `<app-${name}></app-${name}>`;
    this.componentInnerHTML = name;
  }

  getComponentName() {
    return this.componentInnerHTML;
  }
}
