import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[appCardHover]'
})
export class CardHoverDirective {

    constructor(private el: ElementRef,
                private renderer: Renderer) {

        // el.nativeElement.style.backgroundColor = 'gray';
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray'); // Better for other mobile devices
    }

}
