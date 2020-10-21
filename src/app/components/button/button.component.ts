import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() variant:string;
  @Input() disabled: boolean = false;
  @Input() text: string = "Default";
  @Input() showIconBefore: boolean = false;
  @Input() showIconAfter: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
