import { Component } from '@angular/core';
import  { Observable } from  'rxjs';
import  { FormBuilder, Validators } from  '@angular/forms'; 
import { AngularFireDatabase } from 'angularfire2/database';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: Contact = <Contact>{};
      items: Observable<any[]>;
      // contactForm: FormGroup;

  
  constructor( private db: AngularFireDatabase) {
    // this.items = db.list('messages')
   }

  
  submit()  {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>',this.contactForm)
    this.db.list('/messages').push(this.contactForm);
    alert('Thank you for contacting us, your message has gone through!');
    }
  clearForm(){
    this.contactForm.Name="",
    this.contactForm.Email="",
    this.contactForm.Location="",
    this.contactForm.PhoneNumber= null;
    this.contactForm.Message="";

  }

    
}
