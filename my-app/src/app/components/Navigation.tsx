import Header from './Header';
import Categories from './Categories';
import style from './navigation.module.css';

export default async function Navigation() {
    return (
        <nav className={style.nav}>
            <Header />
            <Categories />
        </nav>
    )
}