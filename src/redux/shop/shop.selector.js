import { createSelector } from 'reselect'

const selectCollections = state => state.shop;

export const selectShop = createSelector(
    [selectCollections],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShop],
    collections => Object.keys(collections).map(keys => collections[keys])
);

export const selectCollection =  collectionURLParam => (
    createSelector(
       [selectShop],
       collections => collections[collectionURLParam.toLowerCase()]
    ));