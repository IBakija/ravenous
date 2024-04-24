import React from 'react';
import Business from '../Business/Business';
import style from './BusinessList.module.scss';

interface Item {
    id: number;
    ime: string;
    prezime: string;
    adresa: string;
    checked: boolean;
}

interface Props {
    items: Item[];
}

const BusinessList: React.FC<Props> = (props) => {
    return (
        <div className={style.businessList}>
            {props.items.map((item) => {
                return <Business item={item} />;
            })}

            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
};

export default BusinessList;
