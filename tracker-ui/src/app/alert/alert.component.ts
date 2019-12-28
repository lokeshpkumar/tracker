import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../services/alert.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [MessageService]
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService,
      private msgService: MessageService,) { }

    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
                console.log("Message got is: ", message);
                switch (message && message.type) {
                    case 'success':
                      console.log("I am in success")
                      this.msgService.add({severity:'success', summary:message.text, detail:message.detail});
                        break;
                    case 'error':
                        console.log("I am in error")
                      this.msgService.add({severity:'error', summary:message.text, detail:message.detail});
                        break;
                }

                this.message = message;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}