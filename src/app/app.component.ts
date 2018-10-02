import { Component } from '@angular/core';
import 'tinder-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Angular';
  description = "One framework";
  likeHandler(){
    console.log('like event from component...');
  }
  nopeHandler(){
    console.log('nope event from component...');
  }
}
