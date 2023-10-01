import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent  implements OnInit {
  menuItem = [
    {
      icon: "mail-unread-outline",
      link: "/home"
    },
    {
      icon: "send-outline",
      link: "/edit-mail"
    }

  ];

  constructor() { }

  ngOnInit() {}

}
