import { Component, Input, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; 
import { DataService } from '../uniteStage/data.service';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
const  SOCKET_ENDPOINT = 'localhost:3200';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  title = 'Websocket Angular client ';
  userName: string;
  message: string;
  output: any[] = [];
  feedback: string;
  socket: any;
public  data: any;
private notifications: Notification[] =[];
 subscription;

  constructor(private dataService:DataService,private router:Router) {
   // this.socket = io("localhost:3200");
   }
user:any;
  items: MenuItem[];
    ngOnInit() {
     this.setupSocketConnection();
this.user=this.dataService.user;
      //this.dataService.listen('typing').subscribe((data) => this.updateFeedback(data));
      //this.dataService.listen('chat').subscribe((data) => this.updateMessage(data));
    }
    setupSocketConnection() {
      this.socket = io(SOCKET_ENDPOINT);
      this.socket.on('message-broadcast', (data: string) => {
      if (data) {
       const element = document.createElement('li');
       element.innerHTML = data;
       element.style.background = 'white';
       element.style.padding =  '15px 30px';
       element.style.margin = '10px';
       element.style.borderRadius="5em";
       document.getElementById('message-list').appendChild(element);
       }
     });
   }
    
   SendMessage() {
    this.socket.emit('message', this.message);
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.style.background = 'white';
    element.style.padding =  '15px 30px';
    element.style.margin = '10px';
    element.style.borderRadius="5em";
    element.style.textAlign = 'right';
    document.getElementById('message-list').appendChild(element);
    this.message = '';
 }
    /*messageTyping(): void {
      this.dataService.emit('typing', this.userName);    
    }
  
    sendMessage(): void {
      this.dataService.emit('chat', {
        message: this.message,
        handle: this.userName
      });
      this.message = "";    
    }
  
    updateMessage(data:any) {
      this.feedback = '';
      if(!!!data) return;
      console.log(`${data.handle} : ${data.message}`);
      this.output.push(data);
    }
  
    updateFeedback(data: any){
      this.feedback = `${data} is typing a message`;
    }*/
}
