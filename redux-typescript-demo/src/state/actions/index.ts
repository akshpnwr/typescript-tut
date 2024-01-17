import { ActionType } from "../action-types"

interface SearchAction {
    type: ActionType.SEARCH_REPOSITORIES,
}

interface SuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[]
}

interface ErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string
}

export type Action = SearchAction | SuccessAction | ErrorAction;
