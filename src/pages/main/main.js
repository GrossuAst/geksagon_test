import LinksList from "../../components/links-list/links-list";
import LinkForm from "../../components/link-form/link-form";
import mainStyle from './main.module.css';

function MainPage({isLoggedIn, initialData, setInitialData}) {
    return (
        <main className={mainStyle.main}>
            <LinkForm 
                isLoggedIn={ isLoggedIn }
                initialData={ initialData }
                setInitialData={ setInitialData }
            />
            <LinksList 
                initialData={ initialData }
            />
        </main>
    );
}

export default MainPage;