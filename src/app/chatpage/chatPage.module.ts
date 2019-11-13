import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminAuthGuard } from 'app/admin/adminGuard/admin-auth.guard';
import { ExceptionService } from 'app/core/exception.service';
import { AuthGuard } from 'shared/authGuard/auth.guard';
import { SharedModule } from 'shared/shared.module';

import { ChatComponent } from '../chatpage/chat/chat.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ChatService } from './services/chat.service';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from 'app/core/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'shared/services/auth.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';




//import { SpinnerComponent } from './spinner/spinner.component';
//import { NameListComponent } from './name-list/name-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireAuthModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'chatPage/chat', component: ChatComponent},
      { path : 'chatPage/chatroom', component : ChatroomComponent},
    ])
  ],
  declarations: [
    ChatComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent

  ],
  exports:[

  ],
  providers:[
    ExceptionService,
    AuthService,
    ChatService

    
  ]
})
export class ChatModule { }
