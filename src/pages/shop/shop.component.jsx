import React from "react";
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectsSnapshotToMap} from "../../firebase/firebase.utils";

import {getCollections} from "../../redux/shop/shop.action";


class ShopPage extends React.Component {
    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const {getCollections} = this.props;
        const collectionsRef = firestore.collection("collections");
        collectionsRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectsSnapshotToMap(snapshot);
            getCollections(collectionsMap);

        })
    }

    componentWillUnmount() {
        //this.unsubscribeFromSnapShot();
    };

    render() {
     const {match} = this.props;
     return (
         <div className='shop-page'>
             <Route exact path={`${match.path}`} component={CollectionsOverview}/>
             <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
         </div>
     );
 }
}
const mapDispatchToProps = dispatch => ({
    getCollections : collectionMap => dispatch(getCollections(collectionMap))
});
export default connect(null,mapDispatchToProps)(ShopPage);