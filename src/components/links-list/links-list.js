import { useEffect, useState } from "react";
import { shorterApi } from "../../utils/shorter-api";

import LinkCard from "../link-card/link-card";
import linkListStyles from './links-list.module.css';

function LinksList({initialData, setInitialData}) {
    const [order, setOrder] = useState('');

    function handleChange(evt) {
        setOrder(evt.target.value);
    };

    useEffect(() => {
        handleSortData();    
    }, [order]);

    function handleSortData() {
        shorterApi.sortData(localStorage.getItem('jwt'), order, '100000')
            .then((res) => {
                setInitialData(res);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function refreshData() {
        shorterApi.getData(localStorage.getItem('jwt'))
            .then((res) => {
                setInitialData(res);
                setOrder('');
            })
            .catch((err) => {
                console.log(err);
            })
    };

    console.log(order);



    return (
        <section className={linkListStyles.section}>
            <div className={linkListStyles.filterBlock}>
                <div className={linkListStyles.filters}>
                    <div className={linkListStyles.radioContainer}>
                        <label className={linkListStyles.label}>
                            asc_short
                            <input type='radio' value='asc_short' checked={order === 'asc_short'} onChange={(evt) => handleChange(evt)}></input> 
                        </label>
                        <label className={linkListStyles.label}>
                            asc_target
                            <input type='radio' value='asc_target' checked={order === 'asc_target'} onChange={(evt) => handleChange(evt)}></input>
                        </label>
                        <label className={linkListStyles.label}>
                            asc_counter
                            <input type='radio' value='asc_counter' checked={order === 'asc_counter'} onChange={(evt) => handleChange(evt)}></input> 
                        </label>
                    </div>
                    <div className={linkListStyles.radioContainer}>
                        <label className={linkListStyles.label}>
                            desc_short
                            <input type='radio' value='desc_short' checked={order === 'desc_short'} onChange={(evt) => handleChange(evt)}></input> 
                        </label>
                        <label className={linkListStyles.label}>
                            desc_target
                            <input type='radio' value='desc_target' checked={order === 'desc_target'} onChange={(evt) => handleChange(evt)}></input>
                        </label>
                        <label className={linkListStyles.label}>
                            desc_counter
                            <input type='radio' value='desc_counter' checked={order === 'desc_counter'} onChange={(evt) => handleChange(evt)}></input> 
                        </label>
                    </div>
                    <button className={linkListStyles.button} onClick={ refreshData }>Сбросить фильтры</button>
                </div>
                <h1 className={linkListStyles.mainTitle}>Ваши ссылки {`(всего ${initialData.length})`}</h1>  
            </div>
            <div className={linkListStyles.titles}>
                <h2 className={`${linkListStyles.title} ${linkListStyles.titleFull}`}>Длинная ссылка</h2>
                <h2 className={`${linkListStyles.title} ${linkListStyles.titleShort}`}>Короткая ссылка</h2>
                <h2 className={`${linkListStyles.title} ${linkListStyles.titleCounter}`}>Переходов</h2>
            </div>
            <ul className={linkListStyles.list}>
                {
                    initialData.map((i) => (
                        <li key={ i.id }> 
                            <LinkCard
                                counter={ i.counter }
                                short={ i.short }
                                target={ i.target }
                            />
                        </li>
                    ))
                }

            </ul>
        </section>
    )
}

export default LinksList;