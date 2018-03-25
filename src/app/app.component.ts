import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
Catalogs = [];
  
constructor(private data: AppService) {}
  clicked(event) {
    console.log(event);
    this.data.getCatalogs()
      .subscribe(x => {
        console.log(x);
        this.Catalogs = x;
      });
  }

}