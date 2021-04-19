import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface RouterStateUrl {
  [x: string]: any;
  url: string;
  queryParams: Params;
  params: Params;
  fragment: string;
}

export interface RouterState {
  router: RouterReducerState<RouterStateUrl>;
}
