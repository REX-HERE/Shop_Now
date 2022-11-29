import React, { useState } from 'react'
import { TextField, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles} from "@material-ui/core/styles";
import { connect, useSelector } from 'react-redux';
import {GetSearchSuggestions} from "../../../state/action_creator/index"
import history from '../../../history';
import { PRODUCT_DATA_BY_CATEGORY_API } from '../../../constants/api_for_routes';
import { LogInfo, MAX_PRODUCTS_PER_PAGE } from '../../../constants/constant_vals';




export const useSearchBarStyles = makeStyles((theme) => ({
    paper: {
        height: 250
    },
    listbox: {
        maxHeight: 240,
    },
    option: {
        [theme.breakpoints.down("xs")]: {
            paddingLeft: 40
        },
    }
}));

function Search_bar(props) {
    const [value, setValue] = useState(null);
    const SearchSuggestions = useSelector(state => state.SearchKeywordRed)
    const StyleClass = useSearchBarStyles()
    let SelectedValue = null

    const GetSearchKeyword = () => {
        return document.querySelector('input[id="free-solo"]').value
    }

    const HandleSearchKeyword = () => {
        if(value && !value.isEmpty) {
            let queryLink = null
            for (let i = 0; i < SearchSuggestions.data.length; ++i){
                if (SearchSuggestions.data[i].keyword.length === value.length
                    && SearchSuggestions.data[i].keyword.localCompare(value) === 0){
                        
                        // complete match
                        queryLink = SearchSuggestions.data[i].link
                        break;
                    } else {
                        queryLink = SearchSuggestions.data[i].link
                    }
            }

            if(LogInfo){
                console.info(`=======> queryLink = ${queryLink}, value = ${value}, history = ${JSON.stringify(history)}`)
            }
            if(queryLink){
                history.push(`${PRODUCT_DATA_BY_CATEGORY_API}?q=${queryLink}::page=0,${MAX_PRODUCTS_PER_PAGE}`)
            }
        }
    }

    const Close = (event, reason) => {
        if(reason === "select-option"){
            let finalSelectedValue = SelectedValue
            if(!SelectedValue) {
                finalSelectedValue = GetSearchKeyword()
            }
            if(LogInfo){
                console.info(`SearchBar: reason- ${reason}`)
            }
            HandleSearchKeyword(finalSelectedValue)
        }
    }


    // renders - 

    const RenderDesktopText = (params) => {
        return <TextField {...params} label="Search Products & Brands" variant='outlined'/>
    }

    const RenderMobileText = (params) => {
        return(
            <TextField
                style={{position: "absolute", left: 0, top: 15}}
                label="Search Products & Brands"
                variant="outlined"
                {...params}
                InputProps={{
                    ...params.InputProps,
                    startAdornment: <ArrowBackIcon onClick={props.Close} fontSize="large"/>,
                }}
            />
        )
    }

    // handle changing search-
    const HandleInputChange= (event, newValue)=>{
        SelectedValue = newValue
        props.GetSearchKeyword(newValue)
    }

    if(LogInfo){
        console.info(`Search Bar: rendering`)
    }
    return (
        <Grid container alignItems='center'>
            <Autocomplete
                value={value}
                autoComplete={true}
                autoHighlight={true}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        setValue({
                            keyword: newValue,
                        });
                    } else if (newValue && newValue.inputValue) {
                        // Create new value from input
                        setValue({
                            keyword: newValue.inputValue,
                        });
                    } else {
                        setValue(newValue);
                    }
                }}
                onInputChange={HandleInputChange}
                selectOnFocus
                clearOnBlur
                blurOnSelect={true}
                handleHomeEndKeys
                closeIcon={<CloseIcon/>}
                id="free-solo"
                options={SearchSuggestions.data}
                getOptionLabel={(option) => {
                    if (typeof option === 'string') {
                        return option;
                    }
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    return option.keyword;
                }}
                renderOption={(option) => option.keyword}
                freeSolo
                fullWidth
                onClose={Close}
                size={props.size}
                classes={{paper: StyleClass.paper, listbox: StyleClass.listbox, option: StyleClass.option}}
                renderInput={(params) =>
                    props.device ? RenderMobileText(params) : RenderDesktopText(params)}
            />
        </Grid>
        
    )
}

export default connect(null, {GetSearchSuggestions})(Search_bar);