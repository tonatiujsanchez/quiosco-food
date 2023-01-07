import { FC } from 'react';
import { DataContext } from './DataContext';


export interface DataState {

}

const DATA_INITIAL_STATE: DataState = {

}

interface Props {
    children: JSX.Element
}

export const DataProvider: FC<Props> = ({ children }) => {

    return (
        <DataContext.Provider value={{

        }}>
            { children }
        </DataContext.Provider>
    )

}