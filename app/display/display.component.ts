import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  quotes: Quote[] =[
   new Quote("Robert","Wisely, and slow. They stumble that run fast.",0,0,"William Shakespeare",new Date(2001,7,10)),
   new Quote("Hannah ","If you judge people, you have no time to love them.",0,0,"Mother Teresa",new Date(2011,12,3)),
   new Quote("Herbert","The successful warrior is the average man, with laser-like focus.",0,0,"Bruce Lee",new Date(2020,1,2)),
 ]
 delete(){
   this.quotes.splice(0,1)
 }
upvote(quote){
  quote.Upvote =  quote.Upvote + 1
}
downvote(quote){
 quote.Downvote =  quote.Downvote + 1
}
addquote(quote){
  quote= new Quote(quote.Username,quote.userquote,0,0,quote.author,quote.submit)
 this.quotes.push(quote)
}
winners:Quote[]=[];
 bestquote(){
   this.winners.splice(0,this.winners.length);
   var largest= this.quotes[0].Upvote;
   var number = null;
   for(var i =0;i<this.quotes.length;i++){
     number=this.quotes[i].Upvote;
     largest = Math.max(largest,number)
   }
   for(var i =0;i<this.quotes.length;i++){
     if (this.quotes[i].Upvote === largest){
       this.winners.push(this.quotes[i])
     }

   }
 }
 toggleDetails(index){
   this.quotes[index].showUsername = !this.quotes[index].showUsername;
 }

 constructor() { }

 ngOnInit(): void {
 }

}
