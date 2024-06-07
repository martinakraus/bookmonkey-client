import { CanActivateFn } from '@angular/router';

export const confirmDeactivateGuard: CanActivateFn = (route, state) => {
  return confirm('Are you sure?');
};
