import Link from 'next/link';
import '/app/ui/store_styles.css';

export default function Layout({children})
{
    return (<>

        <div className="search-bar-container">
            <form className="search-bar">
                <a>Магазин</a>
                <label htmlFor="search-bar-input"></label>
                <input type="search" placeholder="Поиск товара" id="search-bar-input"></input>
                <button className="search-bar-submit-btn" type="submit">Лупа</button>
            </form>

            <form className="city-picker">
                <label htmlFor="city">My city: </label>
                <select name="city" id="city">
                    <option value="Almaty">Almaty</option>
                    <option value="Shymkent">Shymkent</option>
                    <option value="Karaganda">Karaganda</option>
                    <option value="Kyzylorda">Kyzylorda</option>
                </select>
            </form>

        </div>

        <NavigationBar/>

        {children}

        </>);
}

function NavigationBar()
{
    return (
        <nav className="navigation">
            <ul>
                <li><Link href="/store">All categories</Link></li>
                <li><Link href="/store/shop/phones">Phones</Link></li>
                <li><Link href="/store/shop/laptops">Laptops</Link></li>
                <li><Link href="/store/shop/monitors">Monitors</Link></li>
                <li><Link href="/store/shop/peripherials">Peripherials</Link></li>
                <li><Link href="/store/shop/smart-watches">Smart watches</Link></li>
            </ul>
        </nav>
    );
}