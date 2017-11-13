const ADD_LISTENER = 'ADD_LISTENER'

export function addListener(listenrId) {
  return {
    type:ADD_LISTENER,
    listenrId,
  }
}

export default function listeners(state = {}, action) {
  switch (action.type) {
    case ADD_LISTENER:
      return {
        ...state,
        [action.listenerId]: true,
      }
    default:
      return state
  }
}
