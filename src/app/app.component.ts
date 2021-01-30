import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("appTitle", {read: ElementRef}) appTitle: ElementRef;
  
  title = 'shop';

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = "Very cool app title";
  }
}
