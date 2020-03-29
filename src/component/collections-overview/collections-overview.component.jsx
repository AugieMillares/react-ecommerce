import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import CollectionPreview from "../../component/preview-collection/preview-collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import './collections-overview.styles.scss'


const CollectionsOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollection}) => (
                <CollectionPreview key={id} {...otherCollection}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)

