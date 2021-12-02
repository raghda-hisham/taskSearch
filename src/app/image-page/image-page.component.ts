import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../services.service'

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})

// export interface Flickerphoto{
//   farm:string;
//   id:string;
//   secret:string;
//   server:string;
//   title:string;
// }
export class ImagePageComponent implements OnInit {
   searchName:string=""; 
   listOfImages:any=[];
   id:any=[];
   
  constructor(public _services:ServicesService) { }
  getname(){
    this._services.find(this.searchName).subscribe((res)=>{

      this.listOfImages=res;
      this.id=this.listOfImages.photos.photo;

    })
  }
  ngOnInit(): void {
  }

}
