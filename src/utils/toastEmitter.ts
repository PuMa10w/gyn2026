import type { Toast } from '../types';

export const emitToast = (message: string, type: Toast['type'] = 'info', duration = 2400) => {
  const event = new CustomEvent('gyn-toast', { detail: { message, type, duration } });
  window.dispatchEvent(event);
};