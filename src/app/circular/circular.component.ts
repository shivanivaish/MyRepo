import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public happyText ='Manager is on vacation';
public myTodos=[
'Wash coffee mug',
'Take a shower',
'Say hi to the new hire',
'Shampoo your hair'
];

  constructor() { }

  ngOnInit() {

    this.happyText='Manager is Sick';
  }
makemeHappier(){

  this.happyText='manager got fired.'
}
}
