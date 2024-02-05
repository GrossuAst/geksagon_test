import LinksList from "../../components/links-list/links-list";
import LinkForm from "../../components/link-form/link-form";
import mainStyle from './main.module.css';

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MainPage({isLoggedIn, initialData, setInitialData, setIsLoggedIn}) {
    const navigate = useNavigate();

    function handleLogoutClick() {
        setIsLoggedIn(false);
        localStorage.removeItem('jwt');
        navigate('/login', {replace: true});
    }

    return (
        <>
            <header className={ mainStyle.header }>
                <h2 className={ mainStyle.title }>Тестовое задание для ООО "Гексагон"</h2>
                <button className={ mainStyle.logoutButton } onClick={ handleLogoutClick }>Выйти из профиля</button>
            </header>
            <main className={mainStyle.main}>
                <LinkForm 
                    isLoggedIn={ isLoggedIn }
                    initialData={ initialData }
                    setInitialData={ setInitialData }
                />
                <LinksList 
                    initialData={ initialData }
                    setInitialData={ setInitialData }
                />
            </main>
            <footer className={ mainStyle.footer }>
                <h3 className={ mainStyle.title }>
                    any content
                </h3>
            </footer>
        </>

    );
}

export default MainPage;