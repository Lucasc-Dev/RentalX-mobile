import React, { createContext, useCallback, useState } from 'react';

interface PeriodContextData {
    period: Period;
    definePeriod(period: Period): void; 
}

interface Period {
    start_date: Date | undefined;
    end_date: Date | undefined;
}

export const PeriodContext = createContext<PeriodContextData>({} as PeriodContextData);

export const PeriodProvider: React.FC = ({ children }) => {
    const [period, setPeriod] = useState<Period>({} as Period);

    const definePeriod = useCallback((period: Period) => {
        setPeriod(period);
    }, []);

    return (
        <PeriodContext.Provider value={{ period, definePeriod }}>
            {children}
        </PeriodContext.Provider>
    );
};