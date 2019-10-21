import * as React from 'react';
import { Link } from 'react-router-dom';
import { IItem, ITag } from '../utils/interfaces';

export interface ItemDetailsProps {
    item: IItem,
    tags: ITag[]
}

const ItemDetails: React.SFC<ItemDetailsProps> = ({ item, tags }) => {
    return (
        <div className="card mb-3 shadow" >
            <div className="card-img-top mx-auto" style={{ maxWidth: '300px' }}>
                <img src="/images/airport-woman-det.jpg" className="card-img-top" style={{ maxWidth: '300px', maxHeight: '200px' }} alt="blog-image" />
                <div className="col">
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        {tags.map(tag => (
                            <span key={`tag-${tag.id}`} className="badge badge-warning badge-pill m-1">{tag.name}</span>
                        ))}
                        <p className="card-text mt-3">{item.descrip}</p>
                        <Link to="/" className="btn btn-primary btn-block m-1 shadow-sm">Back To Blog Feed</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;