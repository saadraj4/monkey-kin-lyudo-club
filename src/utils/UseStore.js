import { create } from 'zustand';
import axios from 'axios';
import { BASEURL } from './constants';

const useStore = create((set) => ({
  // State
  data: [], // For storing fetched data
  isLoading: false, // Loading state
  error: null, // Error state

  // GET request
  fetchData: async (apiEndpoint) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(BASEURL + apiEndpoint);
      set({ data: response.data, isLoading: false });
      return response.data;
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        isLoading: false,
      });
    }
  },

  // POST request
  postData: async (apiEndpoint, payload) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${BASEURL}${apiEndpoint}`, payload);
      console.log(response.data);
      set({ isLoading: false });
      // Optionally, you can update data after a successful POST
      // set((state) => ({
      //   data: [...state.data, response.data],
      // }));
      return response.data;
    } catch (error) {
      set({
        error: error.response?.data?.message || error.message,
        isLoading: false,
      });
    }
  },

  // Clear data
  clearData: () => set({ data: [], error: null }),
}));

export default useStore;
