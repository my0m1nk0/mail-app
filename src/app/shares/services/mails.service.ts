import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MailI } from '../modals/mailI.modal';

@Injectable({
  providedIn: 'root'
})
export class MailsService {
  newItems = new BehaviorSubject<MailI[]>(JSON.parse(JSON.stringify(MailMock)))
  getNewMailDetail(code: string) {
    return this.newItems.getValue().find((mail) => mail.mailCode === code)
  }

  constructor() { }
}
