import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core'
interface Style {
    border?: string;
    fontWeight?: string;
}

@Directive({
    selector: '[appStyle]',
})
export class StyleDirective {
    @Input('appStyle') color: string = 'red';
    @Input() dStyles: Style;

    constructor(private el: ElementRef, private r: Renderer2) {
    }

    @HostListener('mouseenter', ['$event.target']) onEnter(event: Event) {
        this.r.setStyle(this.el.nativeElement, 'color', this.color);
        this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
        this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    }
    @HostListener('mouseleave', ['$event.target']) onLeave(event: Event) {
        this.r.setStyle(this.el.nativeElement, 'color', null);
        this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
        this.r.setStyle(this.el.nativeElement, 'border', null);
    }
}