import { Component, OnInit } from '@angular/core';
import { Name } from 'shared/models/name';
import { NameService } from './name.service'

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {
  name : Name[]
  constructor(private nameService: NameService ) { }

  ngOnInit() {
    this.getName();
    //console.log("NameResponse",name);
  }
  getName(){
    this.nameService.getNames().subscribe(res => {
      this.name = res;
    })
  }

}
