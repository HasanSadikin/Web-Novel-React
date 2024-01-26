import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSupabase } from "../../utils/supabase";

const supabase = useSupabase();

export type Novel = {
  id: number;
  novel_name: string;
  image: string;
  slug: string;
  star: number;
  description: string;
  author_id: number;
  author: string;
  origin: string;
  genres: string;
  genres_slugs: string;
};

export type NovelState = {
  novels: Novel[] | null;
  current_novel: Novel | null;
};

const initialState: NovelState = {
  novels: null,
  current_novel: null,
};

const novelSlice = createSlice({
  name: "novels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getNovels.fulfilled,
        (state, action: PayloadAction<Novel[] | null>) => {
          state.novels = action.payload;
        }
      )
      .addCase(
        getBookmarkedNovels.fulfilled,
        (state, action: PayloadAction<Novel[] | null>) => {
          state.novels = action.payload;
        }
      );
  },
});

export const getBookmarkedNovels = createAsyncThunk(
  "novels/getBookmarkNovels",
  async (id: string) => {
    const { data } = await supabase
      .rpc("get_bookmarks_by_user_id", { userid: id })
      .returns<Novel[]>();

    return data;
  }
);

export const getNovels = createAsyncThunk("novels/getNovels", async () => {
  const { data } = await supabase.rpc("get_all_novels").returns<Novel[]>();
  return data;
});

export default novelSlice.reducer;
