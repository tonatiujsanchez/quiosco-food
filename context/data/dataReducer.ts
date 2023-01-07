
import { DataState } from './';


type DataActionType =

    | { type: '[DATA] - Refresh Images', payload: any }




export const dataReducer = (state: DataState, action: DataActionType): DataState => {

    switch (action.type) {

        // Images
        case '[DATA] - Refresh Images':
            return {
                ...state,
            }

        default:
            return state
    }
}