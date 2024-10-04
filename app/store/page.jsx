import Link from 'next/link'
import Image from 'next/image'

export default function Page()
{
    return (<>
        <Categories/>
    </>);
}

function Categories()
{
    return (
        <div className="categories">
            <h1>Categories</h1>
            <div className="categories-container">
                <div class="category">
                    <Link href="store/shop/phones" className="category-item-title">Phones
                        <Image src="/phone.jpg" width="140" height="140" alt="Phone"></Image>
                    </Link>
                </div>
                <div class="category">
                    <Link href="store/shop/laptops" className="category-item-title">Laptops
                        <Image src="/laptop.jpg" width="140" height="140" alt="Laptop"></Image>
                    </Link>
                </div>
                <div class="category">
                    <Link href="store/shop/monitors" className="category-item-title">Monitors
                        <Image src="/monitor.jpg" width="140" height="140" alt="Monitor"></Image>
                    </Link>
                </div>
                <div class="category">
                    <Link href="store/shop/kitchen-thing" className="category-item-title">Kitchen
                        <Image src="/knife.jpg" width="140" height="140" alt="Keyboard and Mouse"></Image>
                    </Link>
                </div>
                <div class="category">
                    <Link href="store/shop/toys" className="category-item-title">Toys
                        <Image src="/toys.jpg" width="140" height="140" alt="Toys"></Image>
                    </Link>
                </div>
                <div class="category">
                    <Link href="store/shop/clothes" className="category-item-title">Clothes
                        <Image src="/clothe.jpg" width="140" height="140" alt="Toys"></Image>
                    </Link>
                </div>
            </div>

        </div>
    );
}