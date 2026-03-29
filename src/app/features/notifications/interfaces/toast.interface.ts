import { NotificationType } from '../types';

export interface IToast {
  readonly id: number;
  readonly type: NotificationType;
  readonly message: string;
}
