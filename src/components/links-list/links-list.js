import LinkCard from "../link-card/link-card";
import linkListStyles from './links-list.module.css';

function LinksList({initialData}) {
    return (
        <section className={linkListStyles.section}>
            <div className={linkListStyles.filterBlock}>
                <div className={linkListStyles.filters}>

                </div>
                <h1 className={linkListStyles.mainTitle}>Ваши ссылки</h1>  
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