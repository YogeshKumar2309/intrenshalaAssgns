
export const initialState = {
    favourites: JSON.parse(localStorage.getItem("favourites")) || [],
}

export const favouritesReducer = (state, action) => {
    switch (action.type ) {
        case "TOGGLE_FAVOURITE" :{
            const id = action.payload;

            const isFavourite = state.favourites.includes(id);

            const favourites = isFavourite ? state.favourites.filter((favId) => favId !== id)
            : [...state.favourites, id];

            localStorage.setItem("favourites", JSON.stringify(favourites));

            return {
                ...state,
                favourites,
            }
        }
        case "LOAD_FAVOURITES" : 
            return { ...state, favourites : action.payload};
        

        default :
            return state;
    }

}

