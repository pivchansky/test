import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MockInterceptor} from './interceptors/mock.interceptor';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MockInterceptor,
    }
  ]
})
export class CoreModule {
}
