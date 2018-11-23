import { ChangeLog } from '../actions/change-log';

interface State {
  logFile: null
}

const initialState: State = {
  logFile: null
}

export function reducer (
  state = initialState,
  action: ChangeLog
): State {
  switch (action.type) {
    case ChangeLog.type {
      return {
        ...state
      };
    }
  }
}