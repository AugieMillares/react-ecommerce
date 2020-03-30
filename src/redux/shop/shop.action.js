import {ShopActionType} from "./shop.types";


export const getCollections = collectionMap => ({
    type: ShopActionType.GET_COLLECTIONS,
    payload: collectionMap
});