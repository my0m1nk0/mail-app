import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MailsService } from './services/mails.service';
import { MailI } from './modals/mailI.modal';

export class mailDetailResolver implements Resolve<any>{
  constructor(private mailService: MailsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MailI | undefined {
    console.log(route.params['itemCode'], " route Param");
    return this.mailService.getNewItemDetail(route.params['itemCode'])
}
}
