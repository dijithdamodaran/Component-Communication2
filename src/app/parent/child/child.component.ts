import { Component,EventEmitter,OnInit,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
      
  }

  @Output() messageEvent=new EventEmitter<string>();
  messageFromChild:string="hello there";
  SendSomeMessageToParent(){
    this.messageEvent.emit(this.messageFromChild);
  }

}
