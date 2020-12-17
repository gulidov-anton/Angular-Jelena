import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appStyle]',
})
export class StyleDirective {
    constructor(private el: ElementRef, private r: Renderer2) {
        r.setStyle(this.el.nativeElement, 'color', 'blue');
        el.nativeElement.style.color = 'red';
    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        this.r.setStyle(this.el.nativeElement, 'color', 'red');
    }
}
