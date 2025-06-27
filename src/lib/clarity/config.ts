import Clarity from '@microsoft/clarity';

export function initClarity() {
  if (typeof window !== 'undefined') {
    Clarity.init('s6312ulcjp');
  }
}