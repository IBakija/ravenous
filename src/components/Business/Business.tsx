import React from 'react';
import style from './Bussiness.module.scss';

const Business: React.FC = () => {
    return (
        <div className={style.businessCard}>
            <img src="" alt="" className={style.businessImage} />

            <div className={style.businessCardBottom}>
                <h2 className={style.businessTitle}>Name</h2>
                <div className={style.businessInfo}>
                    <div className={style.businessAddress}>
                        <p>Address</p>
                        <p>City</p>
                        <p>State zipcode</p>
                    </div>
                    <div className={style.bussinessCommunity}>
                        <p className={`${style.highlight} ${style.uppercase}`}>
                            Category
                        </p>
                        <p className={style.highlight}>rating</p>
                        <p>review count</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
