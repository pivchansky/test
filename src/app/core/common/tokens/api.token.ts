import {InjectionToken} from '@angular/core';
import {environment} from '../../../../environments/environment';

export const API = new InjectionToken<string>('API_TOKEN', {
  providedIn: 'root',
  factory: () => environment.api
});
