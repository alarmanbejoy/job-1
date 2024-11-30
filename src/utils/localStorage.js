// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Check for localStorage only on the client side
if (typeof window !== 'undefined') {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    initialState.user = JSON.parse(storedUser);
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Your reducers here
  },
});

export const saveToLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const removeFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export default authSlice.reducer;
