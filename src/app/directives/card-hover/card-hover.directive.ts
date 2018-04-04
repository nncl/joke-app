import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appCardHover]'
})
export class CardHoverDirective {
    @HostBinding('class.card-outline-primary') private isHovering: boolean = false;

    constructor(private el: ElementRef,
                private renderer: Renderer2) {

        // el.nativeElement.style.backgroundColor = 'gray';
        // renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray'); // Better for other mobile devices
    }

    @HostListener('mouseover') onMouseOver() {
        const punchlineEl = this.el.nativeElement.querySelector('.card-text');
        this.renderer.setStyle(punchlineEl, 'display', 'block');
        this.isHovering = true;
    }

    @HostListener('mouseout') onMouseOut() {
        const punchlineEl = this.el.nativeElement.querySelector('.card-text');
        this.renderer.setStyle(punchlineEl, 'display', 'none');
        this.isHovering = false;
    }

}
