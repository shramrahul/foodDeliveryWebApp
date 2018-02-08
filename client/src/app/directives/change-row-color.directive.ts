import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';


// custom directive for the rows in the table

@Directive({
  selector: '[changeRowColor]'
})
export class ChangeRowColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {
    //element.nativeElement.style.backgroundColor="#f4424b";
   }

  /**@author shreeram
   * this method changes the background color of the row to #f4424b in the table whenever the mouse gets
   *over the particular row
   */
   @HostListener('mouseover') onmouseover(){
     this.renderer.setElementStyle(this.element.nativeElement,'background','#f4424b');
   }
    
  
   /**@author shreeram
    * this method changes the background color of the row back to the default whenever the 
   *mouse gets out of the particular row 
   */
   @HostListener('mouseout') onmouseout(){
    this.renderer.setElementStyle(this.element.nativeElement,'background','white');
  }
}
