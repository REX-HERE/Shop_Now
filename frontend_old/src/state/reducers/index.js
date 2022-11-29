import { combineReducers } from "redux";
import {reducer as FormReducer} from "redux-form";
import { TabHoverReducer } from "./event_handler_reducer";
import { ClearFiltersReducer, SelectedFilterAtrReducer, SelectPageReducer, SelectSortReducer } from "./filter_reducer";
import { AddToCartReducer, CartTotalReducer, DeliveryChargesReducer, FilterAttributesReducer, FilterProductsReducer, FilterQueryReducer, GoogleAuthReducer, HomePageReducer, PaymentDataReducer, PaymentResponseReducer, SavedSortedListReducer, SearchKeywordReducer, SelectProductDetailReducer, ShippingAddressReducer, ShoppingBagReducer, SignInReducer, SignUpReducer, TabsReducer } from "./main_reducers";


const RootReducer = combineReducers({
    FormRed: FormReducer,
    SignInRed: SignInReducer,
    SignUpRed: SignUpReducer,
    GOauthRed: GoogleAuthReducer,
    HomePageRed: HomePageReducer,
    TabsRed: TabsReducer,
    AddToCartRed: AddToCartReducer,
    ProductFilterRed: FilterProductsReducer,
    AttributeFilterRed: FilterAttributesReducer,
    QueryFilterRed: FilterQueryReducer,
    SelectProductDetailRed: SelectProductDetailReducer,
    ShoppingBagRed: ShoppingBagReducer,
    CartTotalRed: CartTotalReducer,
    DeliveryChargesRed: DeliveryChargesReducer,
    SavedSortedListRed: SavedSortedListReducer,
    ShippingAddressRed: ShippingAddressReducer,
    PaymentDataRed: PaymentDataReducer,
    PaymentResponseRed: PaymentResponseReducer,
    SearchKeywordRed: SearchKeywordReducer,
    TabHoverRed: TabHoverReducer,
    SelectFilterAtrRed: SelectedFilterAtrReducer,
    SelectSortRed: SelectSortReducer,
    SelectPageRed: SelectPageReducer,
    ClearFilterRed: ClearFiltersReducer
})

export default RootReducer;