import axios from 'axios';
const myAxios=axios.create({
    baseURL:"http://localhost:8080"
})

export const getCart=(user_id)=>{
    myAxios.get("/cart").then((res)=>{
        return res.data;
    })
}

export const getHome=(data)=>{
    myAxios.post("/user/login",data).then((res)=>{
        console.log(res.data)
        return res.data;
    })
}

const {
    REACT_APP_HOME_PAGE_URL,
    REACT_APP_ADD_TO_CART_URL,


    REACT_APP_ADD_TO_CART_PORT,
    REACT_APP_HOME_PAGE_PORT
} = process.env

export const homeDataApi = axios.create({
    baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
})
export const addToCartApi = axios.create({
    baseURL: REACT_APP_ADD_TO_CART_URL || `http://localhost:${REACT_APP_ADD_TO_CART_PORT}`
})
// export const homeDataApi = axios.create({
//     baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
// })
// export const homeDataApi = axios.create({
//     baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
// })
// export const homeDataApi = axios.create({
//     baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
// })
// export const homeDataApi = axios.create({
//     baseURL: REACT_APP_HOME_PAGE_URL || `http://localhost:${REACT_APP_HOME_PAGE_PORT}`
// })
