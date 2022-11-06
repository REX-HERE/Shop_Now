import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LogDebug, LogInfo, MAX_PRODUCTS_PER_PAGE, TAB_DATA_CONFIG } from '../../../constants/constant_vals';
import { TAB_HOVER } from '../../../state/action_creator';
import useTabStyles from '../../../styles/materialUI/tabStyles';
import {Link} from "react-router-dom";
import {Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Bad_request } from '../../common_ui/error/bad_request';

function TabPanel(props) {
    const {value, index} = props;
    const classes = useTabStyles();
    const dispatch = useDispatch();
    const tabsData = useSelector(state => state.TabsRed.data)

    const mouseLeaveHandler = () => {
        if(LogInfo){
            console.info(`[TabPanel]`)

        }
        dispatch({
            type: TAB_HOVER, 
            payload: {
                index: false,
                hover: false
            }
        })
    }

    const renderDataList = (brandList, queryParam) => {
        return brandList.map(({id, value}) => {
            return (
                <Link key={id} to={`/products?q=${queryParam}=${id}::page=0,${MAX_PRODUCTS_PER_PAGE}`}
                      onClick={mouseLeaveHandler}>
                    <Box pt={1.5} css={{color: "#282c3f", fontWeight: 500,
                        fontSize: '15px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                        {value}
                    </Box>
                </Link>
            )
        })
    }

    const renderTabPanel = (brandList, apparelList) => {
        if(!brandList) {
            if(LogInfo){
                console.info(`[TabPanel]: brandList is null = ${brandList}`)

            }
            return <Bad_request/>
        } else if(!apparelList) {
            if(LogInfo){
                console.info(`[TabPanel]: wardrobetypeList is null = ${apparelList}`)

            }
            return <Bad_request/>
        }

        return (
            <Paper square className={classes.paperRoot} onMouseLeave={mouseLeaveHandler}
                   style={{left: `${index * 70 + 185}px`}}>
                <Box display="flex" flexDirection="column" flexWrap="wrap" p={1} pl={4}>
                    <Box pt={0.75} css={{color: TAB_DATA_CONFIG[index].color, fontWeight: "bold",
                        fontSize: '15px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                        Top Brands
                    </Box>
                    {renderDataList(brandList, "brands")}
                    <Box pt={0.75} css={{color: TAB_DATA_CONFIG[index].color, fontWeight: "bold",
                        fontSize: '15px', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                        Top Categories
                    </Box>
                    {renderDataList(apparelList, "apparels")}
                </Box>
            </Paper>
        )
    }

    if(isNaN(index)) {
        return
    }

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tab-${index}`}
            aria-labelledby={`simple-tab-${index}`}>
            {
                value === index &&
                renderTabPanel(tabsData[TAB_DATA_CONFIG[index].mapKey].brands,
                    tabsData[TAB_DATA_CONFIG[index].mapKey].apparels)
            }
        </div>
    );

}

export const TabPanelList = () => { 
    const {index} = useSelector(state => state.TabHoverRed)
    const StyleClass = useTabStyles();

    if (index === -1) {
        if(LogDebug){
            console.debug(`[TabPanelList]: index is null`)

        }
        return null;
    }

    const renderTabPanels = () => {
        return TAB_DATA_CONFIG.map((conf) => {
            return <TabPanel key={conf.index} value={index} index={conf.index}/>
        })
    }

    if(LogInfo){
        console.info(`[TabPanelList]: rendering, index = ${index}`)
    }
    return (
        <div className={StyleClass.root}>
            {renderTabPanels}
        </div>
    )
}

