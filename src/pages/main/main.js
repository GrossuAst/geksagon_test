import LinksList from "../../components/links-list/links-list";
import mainStyle from './main.module.css';

function MainPage() {
    return (
        <main className={mainStyle.main}>
            <LinksList/>
        </main>
    );
}

export default MainPage;