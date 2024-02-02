import LinkCard from "../link-card/link-card";
import linkListStyles from './links-list.module.css';

function LinksList() {
    return (
        <section className={linkListStyles.section}>
            <div className={linkListStyles.titles}>
                <h2 className={`${linkListStyles.title} ${linkListStyles.titleFull}`}>Длинная ссылка</h2>
                <h2 className={`${linkListStyles.title} ${linkListStyles.titleShort}`}>Короткая ссылка</h2>
                <h2 className={`${linkListStyles.title} ${linkListStyles.titleCounter}`}>Переходов</h2>
            </div>
            <ul className={linkListStyles.list}>
                <li>
                    <LinkCard/>
                </li>
                <li>
                    <LinkCard/>
                </li>
                <li>
                    <LinkCard/>
                </li>
            </ul>
        </section>
    )
}

export default LinksList;