import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IItem, ITag } from '../utils/interfaces';
import { json } from '../utils/api';
import ItemDetails from '../Components/ItemDetails';

export interface DetailsProps extends RouteComponentProps<{ id: string }> { }

const Details: React.SFC<DetailsProps> = props => {

    const [item, setItem] = useState<IItem>({
        id: 0,
        title: '',
        descrip: '',
        company: '',
        assignment: '',
        _created: new Date(),
        // name: ''
    });

    const [tags, setTags] = useState<ITag[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let data = await json(`/api/items/${props.match.params.id}`);
                setItem(data[0]);
                setTags(data[1][0]);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [props.match.params.id]);

    return (
        <section className="row mt-5 justify-content-center">
            <ItemDetails item={item} tags={tags} />
        </section>
    );
}

export default Details;