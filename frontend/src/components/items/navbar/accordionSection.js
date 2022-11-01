import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { Accordion, Divider, Grid } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProductsRoute } from '../../../constants/routes';
import { LogInfo, TAB_DATA_CONFIG } from '../../../constants/constant_vals';

const height = 50

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightMedium,
    },
    subHeading: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightRegular,
    },
    content: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightLight,
        color: "black"
    },
    accordionSummaryRoot: {
        minHeight: height,
        height: height
    },
    accordionSummaryExpanded: {
        minHeight: `${height}px !important`,
        height: `${height}px !important`,
        margin: "0px !important",
        alignItems: "center"
    },
    accordionSummaryContent: {
        margin: "5px 0",
        padding: "0 15px"
    },
    accordionDetailRoot: {
        paddingTop: 0
    },
    subHeaderAccordionRoot: {
        minHeight: height,
        height: height,
        [theme.breakpoints.up('xs')]: {
            width: '244px',
        },
        [theme.breakpoints.up('sm')]: {
            width: '364px',
        },

    },
}));


const AccordionSection = () => {
    const StyleClass = useStyles();
    const TabsApiData = useSelector(state => state.TabsRed)

    const RenderMainContent = (contentList, mapKey, queryParam) => {
        return contentList.map(({id, value}) => {
            <Grid item key={`${mapKey}${id}`}>
                <Link to={`${ProductsRoute}?q=${queryParam}=${id}`}>
                    <Typography className={StyleClass.content}>
                        {value}
                    </Typography>
                    <Divider/>
                </Link>
            </Grid>
        })
    }

    const RenderNestedAccordion = (title, content, key, queryParam) => {
        const id = `${key}-panel-subheader`
        return (
            <Accordion square elevation={0}>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls={id}
                    id={id}
                    classes={{
                        root: StyleClass.subHeaderAccordionRoot,
                        expanded: StyleClass.accordionSummaryExpanded,
                        content: StyleClass.accordionSummaryContent
                    }}
                >
                    <Typography className={StyleClass.subHeading}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails classes={{root: StyleClass.accordionDetailRoot}}>
                    <Grid container direction="column" spacing={3} style={{padding: "1rem 0 1rem 2rem"}}>
                        {RenderMainContent(content, key, queryParam)}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        )
    }

    if(LogInfo){
        console.info(`AccordionSection: rendering`)
    }
    return TAB_DATA_CONFIG.map((conf) => {
        const id = `${conf.mapKey}-panel-header`
        return(
            <div className={StyleClass.root} key={id}>
                <Accordion square elevation={0} key={conf.index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls={id}
                        id={id}
                        classes={{root: StyleClass.accordionSummaryRoot, expanded: StyleClass.accordionSummaryExpanded,
                        content: StyleClass.accordionSummaryContent}}>
                            <Typography className={StyleClass.heading}>{conf.label}</Typography>
                    </AccordionSummary>
                    <AccordionDetails classes={{root: StyleClass.accordionDetailRoot}}>
                        <Grid container direction="column" style={{paddingLeft: "0.5rem"}}>
                            <Grid item>
                                {RenderNestedAccordion("Top Brands",
                                    TabsApiData.data[conf.mapKey].brands,
                                    `${conf.mapKey}-brands-`,"brands")}
                            </Grid>
                            <Grid item>
                                {RenderNestedAccordion("Top Categories",
                                    TabsApiData.data[conf.mapKey].apparels,
                                    `${conf.mapKey}-categories-`, "Wardrobe Types")}
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    })

}

export default AccordionSection