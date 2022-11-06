import axios from 'axios';

const {
    REACT_APP_AUTH_URL,
    REACT_APP_MAIN_PAGE_URL,
    REACT_APP_SEARCH_SUGGESTION_URL,
    REACT_APP_AUTH_PORT,
    REACT_APP_MAIN_PAGE_PORT,
    REACT_APP_SEARCH_SUGGESTION_PORT 
} = process.env

export const AuthApi = axios.create({
    baseURL: REACT_APP_AUTH_URL || `http://localhost:${REACT_APP_AUTH_PORT}`
})

export const MainPageApi = axios.create({
    baseURL: REACT_APP_MAIN_PAGE_URL || `http://localhost:${REACT_APP_MAIN_PAGE_PORT}`
})

export const SearchSuggestionApi = axios.create({
    baseURL: REACT_APP_SEARCH_SUGGESTION_URL || `http://localhost:${REACT_APP_SEARCH_SUGGESTION_PORT}`
})