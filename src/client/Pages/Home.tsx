import * as React from 'react';
import { useState, useEffect } from 'react';
import {IItem} from '../utils/interfaces';
import { json } from '../utils/api';
import ItemPreview from '../Components/ItemPreview';

export interface HomeProps { }

const Home: React.SFC<HomeProps> = () => {

    const [items, setItems] = useState<IItem[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let items = await json('/api/items');
                setItems(items);
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    return (
        <>
            <div>
                <h2 className="row m-4 justify-items-center text-secondary">Examples of My Work</h2>
            </div>
            <main className="col">
                <section className="row my-3 justify-items-center">
                    {items.map(item => (
                        <div key={item.id}>
                           <ItemPreview item={item}/>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}

export default Home;

