import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  @Input() appHover: string = 'red';

  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.appHover
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    );
  }
}
