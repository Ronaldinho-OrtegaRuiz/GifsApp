import { Component } from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private giftService:GifsService) {}
  get tags():string[]{
    return this.giftService.tagsHistory;
  }

  search(tag:string):void{
    this.giftService.searchTag(tag);
  }

  delete(tag:string):void{
    this.giftService.deleteTag(tag);
  }

  deleteAll():void{
    this.giftService.deleteAllTags();
  }
}
