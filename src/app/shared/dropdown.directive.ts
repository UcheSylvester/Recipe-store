import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  constructor() {}

  @HostBinding("attr.data-toggle") isOpen: string;

  @HostListener("click") toggleOpen() {
    this.isOpen = "dropdown";
  }
}
