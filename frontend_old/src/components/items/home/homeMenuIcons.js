import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'
import { LogInfo, MAX_PRODUCTS_PER_PAGE } from '../../../constants/constant_vals';

const HomeMenuIcons = () => {
    const homeAPIData = useSelector(state => state.HomePageRed)

    const renderImageList = (imageList) => {

        // filter out images which are related to home icons.
        imageList = imageList.filter(image => image.imageLocalPath.search("icon") !== -1)

        // map the image path and link
        return imageList.map(info => {
            return (
                <Grid key={info.id} item sm={2}>
                    <Link to={`/products?q=${info.link}::page=0,${MAX_PRODUCTS_PER_PAGE}`}>
                        <img src={info.imageURL} alt={info.imageLocalPath} style={{width: '100%', height: '100%'}}
                             title={info.link}/>
                    </Link>
                </Grid>
            )
        });
    };

    if(LogInfo){
        console.info("Rendering HomeMenuIcons Component")


    }
    return (
        <Grid container justify="space-around" style={{padding: '1rem 0'}}>
            {renderImageList(homeAPIData.data.carousels)}
        </Grid>
    )
}

export default HomeMenuIcons
