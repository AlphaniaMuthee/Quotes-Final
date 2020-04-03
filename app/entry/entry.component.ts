import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  newquote = new Quote("","",0,0,"",new Date())
  @Output() addquote = new EventEmitter<Quote>();

  submit(){
    this.addquote.emit(this.newquote);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
