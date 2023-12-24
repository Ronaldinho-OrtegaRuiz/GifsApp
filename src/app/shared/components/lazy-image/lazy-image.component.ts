import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  public Hasloaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('Attribute url is required');
  }

  onLoad():void{
    setTimeout(() => {
      this.Hasloaded = true;
    }, 1000);
  }
}
