import * as React from 'react';
import { useState } from 'react';
import { IItem } from '../utils/interfaces';
import { Link } from 'react-router-dom';
import '../../../public/images/cheers.jpg';
import { useEffect } from 'react';
import { json } from '../utils/api';

export interface ItemPreviewProps {
    item: IItem
}

export interface ItemPreviewState {
    item: IItem[]
}

const imageArray = [
    { image1: '../../../public/images/cheers.jpg' },
    { image2: '../../../public/images/jpg-75-summer-ole.jpg' }
]

const ItemPreview: React.SFC<ItemPreviewProps> = ({ item } ) => {

    const [image, setImage] = useState<IItem[]>([
        {
            id: 0,
            title: '',
            descrip: '',
            company: '',
            source: '',
            _created: new Date()
        }
    ]);

    useEffect(() => {
        (async () => {
            try {
                let result = await json('/api/items');
                setImage(result)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return (
        <div>
            <div className="card m-3 mt-8 shadow">
                <div className="row no-gutters" style={{ maxWidth: '300px' }}>
                    <div className="col-md-4">
                        <img
                            src={image[0].source}
                            className="card-img" alt="item-image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            {/* <p className="card-text font-weight-lighter font-italic">{item.descrip.substring(0, 40)} ...</p> */}
                            <Link to={`/${item.id}/details`} className="btn btn-primary btn-block m-1 shadow-sm">Read More</Link>
                        </div>
                        {/* <div className="card-footer d-flex justify-content-center">
                            <p className="text-muted text-secondary">Posted on {moment(item._created).format('MM DD YYYY')}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemPreview;