import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() in = 'yellow';
  @Input() out = 'blue'
  @HostBinding('style.backgroundColor') bgc = this.out;
  constructor() {
  }
  @HostListener('mouseenter') MEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') MLeave() {
    this.bgc = this.out;
  }

  ngOnInit(): void {
    this.bgc = this.out;
  }
}

