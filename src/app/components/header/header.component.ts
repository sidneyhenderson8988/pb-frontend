import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  user:any;
  ngOnInit(): void {
    //this.user = localStorage.getItem('JWT_Token');

  }

  logout(){
    localStorage.removeItem('JWT_Token');
  }
}
