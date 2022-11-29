import { Accordion, Drawer, Paper } from '@material-ui/core';
import { makeStyles, mergeClasses } from '@material-ui/styles'
import React, { useRef } from 'react'
import { LogInfo } from '../../../constants/constant_vals';
import { useClickOutside } from '../../../hooks/useClickOutside';
import AccordionSection from "./accordionSection";

export const useSideBarStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 280,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },  

    // keep content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        position: "fixed",
        overflow: 'auto',
        backgroundColor: "#fff",
        [theme.breakpoints.up('xs')]: {
            width: 280,
        },
        [theme.breakpoints.up('sm')]: {
            width: 400,
        },
    },
}))


const SideBar = (props) => {
    const StyleClass = useSideBarStyles();
    const RefVar = useRef(null);

    useClickOutside(RefVar, props.closeHandler);

    if(LogInfo){
        console.info(`side_bar: rendering`)
    }
    return (
        <div className={StyleClass.root}>
            <nav className={StyleClass.drawer}>
                <div id={`sidebar-drawer`} ref={RefVar}>
                    <Drawer
                        classes={{
                            paper: StyleClass.drawerPaper
                        }}
                        variant="temporary"
                        open={props.open}>
                        <AccordionSection/>
                    </Drawer>
                </div>

            </nav>

        </div>
    )
}

export default SideBar;


