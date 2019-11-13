import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../shared/services/auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-messsage.model';


@Injectable()
export class ChatService {
  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage : ChatMessage;
  userName: Observable<string>;



  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { 
    // this.afAuth.authState.subscribe(auth =>{
    //   if(auth != undefined && auth != null){
    //     this.user=auth;
    //   }
    // });
  }

  sendMessage(msg : string){
    const timeStamp = this.getTimeStamp();
    //const email = this.user.email;
    const email= "test@gmail.com";
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      messsage : msg,
      timeSent :timeStamp,
      //userName : this.userName,
      userName : 'test-user',
      email : email 
});
  console.log("called sendMessage()!");

  }

  getMessages(): FirebaseListObservable< ChatMessage[] >{
    // query to create our message feed binding
    console.log("getmessages");
    return this.db.list('messagesList',{
      query:{
        limitToLast: 25,
        orderbyKey: true
      }
    });
  }

  
  getTimeStamp(){

    const now   = new Date();
    const date = now.getUTCFullYear() + '/' +
                  (now.getUTCMonth() + 1 ) + '/' +
                  now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                now.getUTCMinutes() + ':' +
                now.getUTCSeconds();

    return (date + ' ' + time);

  }

}
