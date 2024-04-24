import React from 'react';
import style from './Hero.module.scss';
import SearchBar from '../SearchBar/SearchBar';

const Hero: React.FC = () => {
    return (
        <section className={style.hero}>
            <SearchBar />
        </section>
    );
};

export default Hero;
