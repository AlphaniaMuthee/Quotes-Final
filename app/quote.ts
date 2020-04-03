export class Quote {
  showUsername: boolean;
  constructor(public Username:string, public userquote:string, public Upvote:number,public Downvote :number,public author:string,public submit :Date ){
    this.showUsername=false;
  }
}
