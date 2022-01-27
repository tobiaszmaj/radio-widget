import React from 'react';
import { StationsList } from '../StationsList/StationsLists';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Radio: React.FC = () => {

    return (
        <div>
            <Header />
            <StationsList />
            <Footer />
        </div>
    )
}