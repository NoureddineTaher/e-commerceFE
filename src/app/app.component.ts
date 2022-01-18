import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private categories : any;
 constructor( private catService : CatalogueService){
   //called first time before the ngOnInit()
}

 ngOnInit() : void {
   this.getCategories();
}
private getCategories() {
   this.catService.getRessource("/categories")
   .subscribe(data => {
      this.categories = data;},
       err => { 
      console.log(err);
    })

}
}
