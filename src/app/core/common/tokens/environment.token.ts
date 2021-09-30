import {InjectionToken} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {EnvironmentTypeEnum} from '../../../../environments/environment.interface';

export const ENVIRONMENT_TYPE = new InjectionToken<EnvironmentTypeEnum>('ENVIRONMENT_TOKEN', {
  providedIn: 'root',
  factory: () => environment.type
});
