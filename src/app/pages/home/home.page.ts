import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MailI } from 'src/app/shares/modals/mailI.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: MailI[] = []

  constructor(private router:Router) { }

  ngOnInit() {
  }
  detailPage(itemCode: string) {
    this.router.navigate(['/detail-item/' + itemCode])
  }
}
