import { NotificationType } from '../types';

export const TOAST_MESSAGES: Record<NotificationType, string> = {
  success: "You've done it, all things working.",
  info: 'This is an info message.',
  warning: 'This is a warning message.',
  danger: 'This is an error message.',
};
