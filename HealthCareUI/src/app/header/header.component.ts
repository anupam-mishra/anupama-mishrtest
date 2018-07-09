import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Anupam';  
  allowNewTitle = false;
  constructor() { 
   setTimeout(()=>{       
    this.allowNewTitle=true;
   },3000);

  

  }
  onAddTitle(event:Event)
  {
   
  }
  onUpdateText(event:Event)
  {
    //this.title=(<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
