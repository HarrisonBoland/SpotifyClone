export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  token: null
    // 'BQAkUi_gZ1lo2ac8MeJIwM1wyE9gVmWTjxNFg6HdUmQjViE-dVT0UreLrbI4fWA_3amIr056lpyaU54xIuiWhcosVE_jx-IpQZ_311dbmkTheC1N8aZIyo-D6GoOHkY2caVnJdNuXMNTqNf0NALW0Tno_Cz0LSDSrA',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playLists: action.playLists,
      };
    default:
      return state;
  }
};

export default reducer;
