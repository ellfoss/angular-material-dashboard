import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

import { TOAST_MESSAGES } from './constants';
import { IAlert, IToast } from './interfaces';
import { NotificationType } from './types';

@Component({
  selector: 'app-notifications',
  imports: [NgClass, NgStyle],
  templateUrl: './notifications.html',
  styleUrl: './notifications.less',
})
export class NotificationsComponent {
  private toastCounter: number = 0;

  readonly alerts = signal<IAlert[]>([
    { id: 0, color: 'red', dismissed: false },
    { id: 1, color: 'grey', dismissed: false },
    { id: 2, color: 'green', dismissed: false },
    { id: 3, color: 'red-orange', dismissed: false },
    { id: 4, color: 'orange', dismissed: false },
    { id: 5, color: 'light-blue', dismissed: false },
    { id: 6, color: 'medium-grey', dismissed: false },
    { id: 7, color: 'dark-black', dismissed: false },
  ]);

  readonly toasts = signal<IToast[]>([]);

  dismiss(id: number): void {
    this.alerts.update(alerts => alerts.map(a => a.id === id ? { ...a, dismissed: true } : a));
  }

  showToast(type: NotificationType): void {
    const id: number = ++this.toastCounter;
    this.toasts.update(toasts => [...toasts, { id, type, message: TOAST_MESSAGES[type] }]);
    setTimeout((): void => this.dismissToast(id), 4000);
  }

  dismissToast(id: number): void {
    this.toasts.update(toasts => toasts.filter(t => t.id !== id));
  }
}
