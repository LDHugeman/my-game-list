import { Component, OnInit } from '@angular/core';
import { ToastService, Message } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.scss'],
})
export class ToastMessagesComponent implements OnInit {
  messages: Message[];

  constructor(private _toast: ToastService) {}

  ngOnInit(): void {
    this.messages = this._toast.getMessages();
  }

  dismiss(id: number) {
    this._toast.dismissMessage(id);
  }
}
