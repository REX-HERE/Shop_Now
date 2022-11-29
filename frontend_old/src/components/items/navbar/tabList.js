import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LogDebug, LogInfo, TAB_DATA_CONFIG } from '../../../constants/constant_vals';
import { TAB_HOVER } from '../../../state/action_creator';
import useTabStyles from "../../../styles/materialUI/tabStyles"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function TabList() {
    let {index} = useSelector(state => state.TabHoverRed)
    const dispatch = useDispatch();
    const classes = useTabStyles();

    const mouseLeaveHandler = event => {
        if(LogInfo){
            console.info(`[TabList]: mouseLeaveHandler = ${event.pageX}, ${window.scrollY}`)

        }


        if(event.pageX < 230 || event.pageX > 795 || (event.pageY - window.scrollY) < 1) {
            dispatch({
                type: TAB_HOVER, 
                payload: {
                    index: false,
                    hover: false
                }
            })
        }
    }

    
    const handleMouseEnter = (event) => {
        if(LogDebug){
            console.debug(`[TabList]: TAB_HOVER with
                            index = ${parseInt(event.target.id.split('-')[2])} and hover = true`)

        }

        let index = parseInt(event.target.id.split('-')[2])
        if (isNaN(index)) {
            return
        }
        dispatch({
            type: TAB_HOVER,
            payload: {
                index: index,
                hover: true,
            }
        });
    }

    const renderTabs = () => {
        if(LogInfo){
            console.info(`[TabList]: renderTabs`)

        }

        return TAB_DATA_CONFIG.map(({index, label}) => {
            return (
                    <Tab label={label}
                         key={index}
                         onMouseEnter={handleMouseEnter} onMouseLeave={mouseLeaveHandler}
                         classes={{wrapper: classes.tabsWrapper, root: classes.tabRoot}}
                         id={`simple-tab-${index}`}
                         aria-controls={`simple-tabpanel-${index}`}/>
            )
        })
    }

    if (isNaN(index)) {
        if(LogDebug){
            console.debug(`[TabList]: index is null and is set to false`)

        }
        index = false;
    }

    if(LogInfo){
        console.info(`[TabList]: TabList Component index = ${index}`)
    }

    return (
        <Tabs value={index}
              aria-label="simple-tabs"
              TabIndicatorProps={{
                  style: {
                      backgroundColor: index === false ? 'none' : TAB_DATA_CONFIG[index].color,
                      height: '4px',
                  }
              }}>
            {renderTabs(index)}
        </Tabs>       
    )
}
