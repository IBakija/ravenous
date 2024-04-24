import React from 'react';
import style from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <h1>Ravenous</h1>
        </header>
    );
};

export default Header;
