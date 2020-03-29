import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import { selectCollection} from '../../redux/shop/shop.selector';

import './collection.style.scss'
import CollectionItem from "../../component/collection-item/collection-item.components";

const CollectionPage = ({collection:{title,items}}) => {
    console.log("=============");
    return (
        <div className='collection-page'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className='items'>
                {
                    items.map((item) => {
                            return (
                                <CollectionItem key={item.id} item={item}/>
                            )
                        })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);