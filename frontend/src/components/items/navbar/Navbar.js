import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {connect, useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom";
import SideBar from "./side_bar"
import Search_bar from "./search_bar";
import useNavBarStyles from "../../../styles/materialUI/navbar_style"
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
    AppBar, Toolbar, IconButton, Typography, Grid, Avatar
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Auth_Details_Cookie, Product_Info_Cookie } from "../../../constants/cookies";
import { LogInfo, Tabs_Object_len } from "../../../constants/constant_vals";
import { ADD_TO_CART, SET_G_OAUTH, SetAuthDetailsUsingCookie, GetDataViaApi, SignOut, SignOutUsingGoogleOAuth, DefaultSearchSuggestions, LOAD_TABS_DATA } from "../../../state/action_creator";
import { TABS_API } from "../../../constants/api_for_routes";
import { TabsReducer } from "../../../state/reducers/main_reducers";
import { Bad_request } from "../../common_ui/error/bad_request";
import { HTTPError } from "../../common_ui/error/http_error";
import history from "../../../history";
import Hidden from "@material-ui/core/Hidden";
import BagButton from "./bagButton";
import MobileMenu from "./mobileMenu";
import TabList from "./tabList";



const NavBar = props => {
    const StyleClass = useNavBarStyles();

    const [hamburgerBtnState, setHamburgerBtnState] = React.useState(false);
    const [mobileSearchState, setMobileSearchState] = React.useState(false);

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const [mobileMoreAnchor, setMobileMoreAnchor] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchor);

    const {isSignedIn, tokenId, firstName} = useSelector(state => state.SignInRed)  
    const GOAuthRed = useSelector(state => state.GOauthRed)
    const TabsData = useSelector(state => state.TabsRed)
    let AuthIcon = null
    let AuthLabel = null

    const dispatch = useDispatch()
    
    
    // set the cart from saved cookie
    const setAddToCartValuesFromCookie = () => {
        let savedProductsFromCookie = Cookies.get(Product_Info_Cookie)
        let totalQuantity = 0
        if (savedProductsFromCookie) {
            savedProductsFromCookie = JSON.parse(savedProductsFromCookie)

            for (const [, qty] of Object.entries(savedProductsFromCookie.productQty)) {
                totalQuantity += parseInt(qty)
            }
            savedProductsFromCookie.totalQuantity = totalQuantity

            if(LogInfo){
                console.info(`BagButton: savedProductsFromCookie = ${JSON.stringify(savedProductsFromCookie)}`)

            }

            dispatch({
                type: ADD_TO_CART,
                payload: savedProductsFromCookie
            })
        }
    }

    // auth only once
    useEffect(() => {
        if(LogInfo){
            console.info(`NavBar: useEffect`)
        }

        if(!GOAuthRed.G_OAuth){
            window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                    clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
                    scope: 'profile'
                }).then(() => {
                    const auth = window.gapi.auth2.getAuthInstance();
                    dispatch({
                        type: SET_G_OAUTH,
                        payload: {
                            first_name: auth.currentUser.get().getBasicProfile() ?
                                auth.currentUser.get().getBasicProfile().getGivenName() : null,
                            G_OAuth: auth
                        }
                    })
                }).catch(function () {
                    console.error(`NAvBAr: failed to load google Oauth`)
                })
            })
        }

        if(isSignedIn === null){
            // then use cookie to sign in

            if(LogInfo){
                console.info(`not SignedIn yet`)
            }
            let savedAuthDetails = Cookies.get(Auth_Details_Cookie)
            if(savedAuthDetails){
                if(LogInfo){
                    console.info(`NavBar: setting auth via cookie`)
                }
                props.SetAuthDetailsUsingCookie(JSON.parse(savedAuthDetails))
            }
        }

        //load tabs data
        if(!TabsData.hasOwnProperty("data")){
            props.GetDataViaApi(LOAD_TABS_DATA, TABS_API, null, false)
        }

        //set cart
        setAddToCartValuesFromCookie();

        props.DefaultSearchSuggestions();
    }, [isSignedIn, TabsReducer])

    if (TabsData.isLoading){
        if(LogInfo){
            console.info("tabs loading")
        }
        return null
    } else {
        if(TabsData.hasOwnProperty("data")){
            if(Object.entries(TabsData.data).length !== Tabs_Object_len) {

                if(LogInfo){
                    console.info(`NavBar: TabsData.data length not matching`)
                }
                return <Bad_request/>
            }
        } else {
            if(TabsData.hasOwnProperty("statusCode")) {
                if(LogInfo){
                    console.info(`tabsData.statusCode = ${TabsData.statusCode}`)
                }
                props.errorHandler()
                return <HTTPError statusCode={TabsData.statusCode}/>

            }
        }
    }

    if(isSignedIn || GOAuthRed.is_signed_in_OAuth){
        let fname
        if(firstName){
            fname = firstName
        } else if (GOAuthRed.is_signed_in_OAuth){
            fname = GOAuthRed.first_name
        } else {
            fname = "S"
        }

        AuthIcon = <Avatar sizes="small"
                            style={{
                                width: 20, height: 20,
                                backgroundColor: "orange",
                                filter: "saturate(5)"                                
                            }}>

                                {fname.charAt(0).toUpperCase()}
        </Avatar>
        AuthLabel = "Sign Out"
    } else {
        AuthIcon = <AccountCircle/>
        AuthLabel= "Sign In"
    }

    const changeAuthStatus = () => {
        if(LogInfo){
            console.info(`NavBar: handling signoutclick isSignedIn = ${GOAuthRed.is_signed_in_OAuth}`)
        }
        if(GOAuthRed.is_signed_in_OAuth){
            props.SignOutUsingGoogleOAuth(GOAuthRed.G_OAuth)
        } else if(tokenId && isSignedIn){
            props.SignOut()
        } else {
            history.push("/signin")
        }
        CloseMobileMenu();
    }
    
    const changePageToShoppingBagHandler = () => {
        history.push("/shopping-bag")
        setMobileMoreAnchor(null);
    }


    const CloseMobileMenu = () => {
        if(LogInfo){
            console.info(`CloseMobileMenu`)
        }
        setMobileMoreAnchor(null);
    };

    const OpenMobileMenu = (event) => {
        if(LogInfo){
            console.info(`OpenMobileMenu`)
        }
        setMobileMoreAnchor(event.currentTarget);
    };

    const CloseMobileSearch = () => {
        if(LogInfo){
            console.info(`CloseMobileSearch`)
        }
        setMobileSearchState(false)
    }
    const OpenMobileSearch = () => {
        if(LogInfo){
            console.info(`OpenMobileSearch`)
        }
        setMobileSearchState(true)
    }

    const RenderInputMobileSearch = () => {
        if(mobileSearchState){
            return <Search_bar size="medium" device="mobile" handleClose={CloseMobileSearch}/>
        }
        return(
            <>
                <Grid item>
                    <IconButton onClick={OpenMobileSearch}
                                edge="end">
                        <SearchIcon fontSize="large"/>
                    </IconButton>

                </Grid>
                <Grid item>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={OpenMobileMenu}
                        color="inherit"
                        edge="end">
                        <MoreIcon fontSize="large"/>
                    </IconButton>                   
                </Grid>
            </>
        )
    }

    const OpenSidebar = () => {
        if(LogInfo){
            console.info(`NavBar: opening sidebar`)

        }
        setHamburgerBtnState(true)
    }

    const CloseSidebar = () => {
        if(LogInfo){
            console.info(`NavBar: clickOutsideListener is triggered, close sidebar`)

        }

        setHamburgerBtnState(false)
    }

    const RenderIndElement = (eventHandler, icon, label, paddingTop) =>{
        return (
            <Grid item>
                <Grid container direction="column" alignItems="center"
                      onClick={eventHandler} style={{cursor: 'pointer'}}>
                    <Grid item style={{height: 21, width: 21, paddingTop: paddingTop}}>
                        {icon}
                    </Grid>
                    <Grid item style={{color: "black", fontSize: "0.8rem", fontWeight: 'bold'}}>
                        {label}
                    </Grid>
                </Grid>
            </Grid>
        )
    }


    if(LogInfo){
        console.info(`NAVBAR: Rendering Navbar component`)
    }
    return (
        <>
            <SideBar open={hamburgerBtnState} closeHandler={CloseSidebar}/>

            <div style={{paddingBottom: 80}}>
                <AppBar color="default" className={StyleClass.appBarRoot}>
                        <Toolbar classes={{root: StyleClass.toolBarRoot}}>
                            <Grid container alignItems="center">
                                <Hidden lgUp>
                                    {!mobileSearchState ?
                                        <Grid item>
                                            <IconButton
                                                edge="start"
                                                className={StyleClass.menuButton}
                                                color="inherit"
                                                aria-label="open drawer"
                                                onClick={OpenSidebar}>
                                                <MenuIcon fontSize="large"/>
                                            </IconButton>
                                        </Grid> : null}
                                </Hidden>

                                {!mobileSearchState ? <Grid item>
                                    <Link to="/">
                                        <Typography className={StyleClass.title}>
                                            Shop Now
                                        </Typography>
                                    </Link>
                                </Grid> : null}

                                <div className={StyleClass.growHalf}/>

                                <Hidden mdDown>
                                    <Grid item xs={5}>
                                        <TabList/>
                                    </Grid>

                                    <div className={StyleClass.growHalf}/>
                                </Hidden>

                                <Hidden xsDown>
                                    <Grid item container sm={6} md={7} lg={4}>
                                        <Search_bar size="small"/>
                                    </Grid>
                                </Hidden>

                                <Hidden smUp>
                                    <div className={StyleClass.growHalf}/>
                                    <div className={StyleClass.growHalf}/>
                                    {RenderInputMobileSearch()}
                                </Hidden>

                                <Hidden xsDown>
                                    <div className={StyleClass.growHalf}/>
                                    {RenderIndElement(changeAuthStatus, AuthIcon, AuthLabel, 2)}
                                    <div className={StyleClass.growQuarter}/>
                                    {RenderIndElement(changePageToShoppingBagHandler, <BagButton/>, "Bag", 0)}
                                </Hidden>

                            </Grid>
                        </Toolbar>
                    </AppBar>

                    <MobileMenu mobileMenuId={mobileMenuId}
                                authIcon={AuthIcon}
                                authLabel={AuthLabel}
                                authBtnHandler={changeAuthStatus}
                                bagBtnHandler={changePageToShoppingBagHandler}
                                mobileMoreAnchorEl={mobileMoreAnchor}
                                isMobileMenuOpen={isMobileMenuOpen}
                                handleMobileMenuClose={CloseMobileMenu}
                />

            </div>

        </>
    )
}

export default connect(null, {SetAuthDetailsUsingCookie, SignOut, SignOutUsingGoogleOAuth, GetDataViaApi, DefaultSearchSuggestions})(NavBar);