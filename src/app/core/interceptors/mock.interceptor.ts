import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ENVIRONMENT_TYPE} from '../common/tokens/environment.token';
import {EnvironmentTypeEnum} from '../../../environments/environment.interface';

const MOCK_SERVER_URL = 'http://localhost:3000';


@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor(@Inject(ENVIRONMENT_TYPE) private readonly envType: EnvironmentTypeEnum) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.envType === EnvironmentTypeEnum.MOCK) {
      return next.handle(req.clone({
        url: MOCK_SERVER_URL + req.url
      }));
    }

    return next.handle(req);
  }
}
