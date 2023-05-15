export const UPDATE_NAME = "UPDATE_NAME";
export const GET_JOKE = "GET_JOKE";
export const GET_NEWS = "GET_NEWS";

export const changeName = () => {
    return {
        type: UPDATE_NAME,
    }
}

export const randomJoke = () => {
    return {
        type: GET_JOKE,
    }
}

export const fetchNews = () => {
    return {
        type: GET_NEWS,
    }
}