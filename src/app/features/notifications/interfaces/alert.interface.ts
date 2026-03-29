import { AlertColor } from '../types';

export interface IAlert {
  readonly id: number;
  readonly color: AlertColor;
  dismissed: boolean;
}
