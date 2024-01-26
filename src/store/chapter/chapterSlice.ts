import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSupabase } from "../../utils/supabase";

const supabase = useSupabase();

export interface Chapter {
  id: number;
  title: string;
  body: string;
}

type ChapterState = {
  chapters: Chapter[] | null;
  current_chapter: Chapter | null;
};

const initialState: ChapterState = {
  chapters: null,
  current_chapter: null,
};

const chapterSlice = createSlice({
  name: "chapters",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getChapters.fulfilled,
        (state, action: PayloadAction<Chapter[] | null>) => {
          state.chapters = action.payload;
        }
      )
      .addCase(
        getSingleChapter.fulfilled,
        (state, action: PayloadAction<Chapter | null>) => {
          state.current_chapter = action.payload;
        }
      );
  },
});

export const getSingleChapter = createAsyncThunk(
  "chapters/getSingleChapter",
  async (chapter_id: number) => {
    const { data } = await supabase
      .from("Chapters")
      .select()
      .eq("id", chapter_id)
      .single();

    return data as Chapter | null;
  }
);

export const getChapters = createAsyncThunk(
  "chapters/getChapters",
  async (novel_id: number) => {
    const { data } = await supabase
      .from("Chapters")
      .select()
      .eq("novel_id", novel_id)
      .returns<Chapter[]>();

    return data;
  }
);

export default chapterSlice.reducer;
