import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Tour of mmmaske';
    ngOnInit(): void {
        if(isDevMode()) {
            console.log(this.title + ' is in development mode.');
        } else {
            console.log('Welcome to '+this.title+'!');
        }
    }
}