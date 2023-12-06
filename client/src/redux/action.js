import axios from 'axios';
import { ADD_VIDEO, VIDEO_FOUND, FILTER, ORDER } from './action-types';

export const addVideo = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/videogames');

            dispatch({
                type: ADD_VIDEO,
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const videoFound = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/videogames?name=${name}`);

            dispatch({
                type: VIDEO_FOUND,
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const filterCards = (opcion) => {
    return { type: FILTER, payload: opcion };
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order };
};