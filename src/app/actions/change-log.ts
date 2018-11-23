import { Action } from '@ngrx/store';

export class ChangeLog implements Action {
  readonly type = '[Log File] Change';

  constructor(public payload: { file: string }) {}
}