import { ADD_VIDEO, VIDEO_FOUND, FILTER, ORDER } from "./action-types";

const initialState = {
    allVideo: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VIDEO:
            return { ...state, allVideo: [...state.allVideo, action.payload] }

        case VIDEO_FOUND:
            return { ...state, allVideo: [action.payload] }

        case FILTER:
            const videoFilter = [...state.allVideo].filter((videoGameFilter) => videoGameFilter.genre === action.payload);


            return {
                ...state,
                allvideo:
                    action.payload === 'all' ?
                        state.allVideo :
                        videoFilter
            }

        /*  case ORDER:
             const allCharactersFavCopy= [...state.myFavorites];
         return{
             ...state,
             myFavorites: action.payload === 'A' ? allCharactersFavCopy.sort((a,b) => a.id - b.id) :
             allCharactersFavCopy.sort((a,b) => b.id - a.id)
         } */

        default:
            return { ...state };
    }
};

export default reducer;