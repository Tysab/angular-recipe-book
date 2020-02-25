import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  /* Method 1 */
  // @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  /* Method 2 */
  //  Closes dropdown window when clicked outside the dropdown content
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}

  /* Method 3 */
  // private toggled = false;

  // constructor(private elRef: ElementRef, private REN: Renderer2) {}

  // @HostListener('click') toggleDropdown() {
  //   this.toggled
  //     ? this.REN.removeClass(this.elRef.nativeElement, 'open')
  //     : this.REN.addClass(this.elRef.nativeElement, 'open');

  //   this.toggled = !this.toggled;
  // }
}
