import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";

const getEmailFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
const email = getEmailFromLocalStorage()

// this code is working now
// const getEmailFromLocalStorage = () => {
//   const user = localStorage.getItem('user');
//   try {
//     return user ? JSON.parse(user) : null;
//   } catch (error) {
//     console.error("Error parsing user data from localStorage:", error);
//     return null;
//   }
// };

// const email = getEmailFromLocalStorage()
// localStorage.setItem('user', JSON.stringify({ email }));


const initialState = {
  email:email,
  bookmarks: [], 
};

export const saveBookmarkToDb = createAsyncThunk(
  "bookmarks/saveBookmarkToDb",
  async (bookmarkData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/bookmark/add", bookmarkData); 
      console.log("response",response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    userEmail:(state, action) =>{
      state.email = action.payload; 
    },
    addBookmark: (state, action) => {
      const { email, ...bookmarks } = action.payload;
      state.email = email;
      state.bookmarks = bookmarks;
      return state;
    },
    removeBookmark: (state, action) => {
      const { email, trackId } = action.payload;
      if (state.bookmarks[email]) {
        state.bookmarks[email] = state.bookmarks[email].filter(
          (id) => id !== trackId
        );
      }
    },
    clearBookmarks: (state, action) => {
      const { email } = action.payload;
      if (state.bookmarks[email]) {
        state.bookmarks[email] = [];
      }
    },
  },
});

export const { userEmail,addBookmark, removeBookmark, clearBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;

// Selectors
export const selectBookmarksByEmail = (state, email) => state.bookmarks.bookmarks[email] || [];