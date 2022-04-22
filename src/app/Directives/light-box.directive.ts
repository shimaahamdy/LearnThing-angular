import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})

/* directive usings:
-vaildation
-masked input
-change dom view on any element we wany and applay events
*/
export class LightBoxDirective implements OnChanges {

  // propertey decrator
  //if we want pass some values form user
  //use: like directve writing name equal to val
  //higlighted="red";
  //to be like appLightBox='red'; use alias
  @Input() highlighted:string="yellow";
  //alias: we can call form outside with class name
  //only one properity can be doen with alis like class but can be other alis
  // @Input('applightbox') highlighted:string="yellow";
  @Input() defaultColor:string="blue";
  constructor(private Elment:ElementRef) {
    //show blue highlight: in constructor
    // this.Elment.nativeElement.style = `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 ${this.defaultColor}`;

    
  }
  //call atomatic after constructor according to component life cycle
  //used specially with input decrator
  //constructor can not read if any change happen to input decrators it can be seen on in chang
  ngOnChanges(): void {
        //show grey that was send in view in  highlight from begining
    // this.Elment.nativeElement.style = `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 ${this.defaultColor}`;
  }

  //we can handle any event happen on that 
  //but event on it
  //apllay function when event happen 
  //but we dosnt have specific html element we have now directive that will applied on any element

  //use host listenter/ change function behaveiour
  @HostListener('mouseover') onMouseOver()
  {
    
    this.Elment.nativeElement.style = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    //  this.Elment.nativeElement.style = `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 ${this.highlighted}`;
    //
    // this.Elment.nativeElement.style = `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 ${this.defaultColor}`;


  }

  @HostListener('mouseout') onMouseOut()
  {
    // this.Elment.nativeElement.style = `box-shadow: 0 0 0 0 ${this.defaultColor}`;

    this.Elment.nativeElement.style = `box-shadow: 0 0 0 0`;

  }
}
