import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { MAIN_PAGE_API } from "../../../constants/api_for_routes";
import { LogInfo, HOME_PAGE_API_OBJECT_LEN} from "../../../constants/constant_vals";
import { GetDataViaApi, DefaultSearchSuggestions, LOAD_HOME_PAGE } from "../../../state/action_creator";
import { HomePageReducer } from "../../../state/reducers/main_reducers";
import { Bad_request } from "../../common_ui/error/bad_request";
import { HTTPError } from "../../common_ui/error/http_error";
import Spinner from "../../common_ui/spinner";
import {Dimmer} from "semantic-ui-react";
import {StyledSegment, StyledDimmer} from "../../../styles/semanticUI/customStyles"
import DocumentTitle from "../../common_ui/documentTitle";
import { Hidden } from "@material-ui/core";
import HomeMenuIcons from "./homeMenuIcons";


const Home = props => {
    const {hover} =useSelector(state => state.TabHoverRed)
    const homeAPIData = useSelector(state => state.HomePageRed)


    useEffect(() => {
        if(LogInfo){
            console.info("Home")
        }


        if(!homeAPIData.hasOwnProperty("data")){
            props.GetDataViaApi(LOAD_HOME_PAGE, MAIN_PAGE_API, null, false)
        }
    },[HomePageReducer])

    // show spinner till loading
    if(homeAPIData.is_loading){
        if(LogInfo){
            console.info("Home: loading")
        }
        return <Spinner textComponent={
            <Grid container direction="column" spacing={1} style={{
                alignItems: "center", fontSize: "1.1rem", fontWeight: "bold"}}>
                <Grid item>
                    Please wait! 
                </Grid>
                <Grid item>
                    check your
                </Grid>
                <Grid item>
                    internet connection
                </Grid>
            </Grid>}/>
    } else {
        if(homeAPIData.hasOwnProperty("data")
            && Object.entries(homeAPIData.data).length !== HOME_PAGE_API_OBJECT_LEN) {

            if(LogInfo){
                console.info(`Home: homeAPIData.data length didn't matched`)
            }

            return <Bad_request/>


        } else if (homeAPIData.hasOwnProperty('statusCode')){
            if(LogInfo){
                console.info(`Home: homeApiDATA.statuscode = ${homeAPIData.statusCode}`)
            }
            return <HTTPError statusCode={homeAPIData.statusCode}/>
        }

    }

    if(LogInfo){
        console.info("Home: Rendering")
    }
    return (
        <Dimmer.Dimmable as={StyledSegment} dimmed={hover}>
            <DocumentTitle title="Online Store - ShopNow"/>
            <Hidden only={['xs', 'lg']}>
                <HomeMenuIcons/>
            </Hidden>
            <Hidden only={['xs']}>
                <VerticalSlider/>
            </Hidden>
            <TopCategoriesAndBrands/>
            <StyledDimmer active={hover}/>
        </Dimmer.Dimmable>
    )
}