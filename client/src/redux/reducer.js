import { ADD_VIDEO, VIDEO_FOUND, FILTER, ORDER } from "./action-types";

const initialState = {
    allVideo: [],
    previousAllVideo: [],
    allVideoFound: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VIDEO:
            state.previousAllVideo = [...action.payload];
            return { ...state, allVideo: [...action.payload] }

        case VIDEO_FOUND:
            state.allVideoFound = [...action.payload];
            return { ...state, allVideo: [...action.payload] }


        case FILTER:
            let filteredVideos = [];

            switch(action.payload){
                case 'default':
                    return{...state, allVideo:[...state.previousAllVideo]}
                
                case 'all':
                    if(state.allVideoFound[0]){
                        filteredVideos = [...state.allVideoFound];
                    }else{
                        filteredVideos = [...state.previousAllVideo];
                    }
                    return { ...state, allVideo: filteredVideos }
                
                case 'true':
                    filteredVideos = state.previousAllVideo.filter((video) => video.created === true);
                    return { ...state, allVideo: filteredVideos }
                
                case 'Action':
                    filteredVideos = state.previousAllVideo.filter((video) => video.genre[0] === 'Action ');
                    return { ...state, allVideo: filteredVideos }

                case 'Shooter':
                    filteredVideos = state.previousAllVideo.filter((video) => video.genre[0] === 'Shooter ');
                    return { ...state, allVideo: filteredVideos }

                case 'Adventure':
                    filteredVideos = state.previousAllVideo.filter((video) => video.genre[0] === 'Adventure ');
                return { ...state, allVideo: filteredVideos }

                default : return { ...state };

            }

        case ORDER:
            let allVideoCopy = []
            switch(action.payload){
                case 'default':
                    return{...state, allVideo:[...state.previousAllVideo]}

                case 'asAlf':
                    allVideoCopy= [...state.allVideo];
                    allVideoCopy.sort((a,b) => a.name.localeCompare(b.name))
                    return{...state,allVideo: allVideoCopy}
                
                case 'desAlf':
                    allVideoCopy= [...state.allVideo];
                    allVideoCopy.sort((a,b) => b.name.localeCompare(a.name))
                    return{...state,allVideo: allVideoCopy}

                case 'asRating':
                    allVideoCopy= [...state.allVideo];
                    allVideoCopy.sort((a,b) => a.rating - b.rating)
                    return{...state, allVideo: allVideoCopy}

                case 'desRating':
                    allVideoCopy= [...state.allVideo];
                    allVideoCopy.sort((a,b) => b.rating - a.rating)
                    return{...state, allVideo: allVideoCopy}

                default : return { ...state };
            }

             /* const allVideoCopy= [...state.previousAllVideo];
         return{
             ...state,
             allVideo: payloasd === 'A' ? allCharactersFavCopy.sort((a,b) => a.id - b.id) :
             allCharactersFavCopy.sort((a,b) => b.id - a.id)
            } */

        default:
            return { ...state };
    }
};

export default reducer;