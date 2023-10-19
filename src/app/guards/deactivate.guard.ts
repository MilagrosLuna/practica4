import { CanDeactivateFn } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { inject } from '@angular/core';

export const deactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return inject(AuthService).isUserAuthenticated();
};

export const deactivateGuardAdmin: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return inject(AuthService).isAdminUser();
};