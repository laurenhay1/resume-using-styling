import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: "times new roman; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
