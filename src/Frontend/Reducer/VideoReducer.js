export const videoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD-TO-WATCHLATER":
      return { ...state, watchLater: [...state.watchLater, payload] };
    case "REMOVE-FROM-WATCHLATER":
      return { ...state, watchLater: payload };
    case "SEARCH-VIDEO":
      return { ...state, videos: payload };

    case "NOTE-VALUE":
      return { ...state, noteValue: payload };
    case "NOTE":
      return { ...state, notes: [...state.notes, payload] };
    default:
      throw new Error(`Unknown action type ${type} `);
  }
};
