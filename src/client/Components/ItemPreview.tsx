import * as React from 'react';
import { IItem } from '../utils/interfaces';
import { Link } from 'react-router-dom';

export interface ItemPreviewProps {
    item: IItem
}

const ItemPreview: React.SFC<ItemPreviewProps> = ({ item }) => { 
    return (
        <div>
            <div className="card m-3 mt-8 shadow">
                <div className="row no-gutters" style={{ maxWidth: '540px' }}>
                    <div className="col-md-4">
                        <img 
                        src="https://work-examples-mds.s3.us-east-2.amazonaws.com/Marketing+Content/JPG+75+Summer+OLE.jpg" 
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