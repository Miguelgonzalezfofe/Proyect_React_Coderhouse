import Item from './item.jsx';
import './itemList.css';

export default function ItemList({ items }) {
    return <>
        <div className='itemList'>
            {items.map((item) => {
                return <div key={item.id}><Item item={item} /></div>
            })}
        </div>
    </>;
}