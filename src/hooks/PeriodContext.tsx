import React, { createContext } from 'react';

interface PeriodContextData {
    start_date: Date;
    end_date: Date;    
}

const PeriodContext = createContext<PeriodContextData>({} as PeriodContextData);

export const PeriodProvider: React.FC = ({ children }) => {
    return (
        <PeriodContext.Provider value={{ start_date: new Date(), end_date: new Date() }}>
            {children}
        </PeriodContext.Provider>
    );
};