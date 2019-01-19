const initialState = { menuOpen: false };

const app = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_OPEN":
      return Object.assign({}, state, {
        menuOpen: true
      });
    case "MENU_CLOSE":
      return Object.assign({}, state, {
        menuOpen: false
      });
    case "TOGGLE_MENU":
      return Object.assign({}, state, {
        menuOpen: !state.menuOpen
      });
    default:
      return state;
  }
};

export default app;
