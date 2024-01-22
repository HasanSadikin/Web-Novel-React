import { createSlice } from "@reduxjs/toolkit";
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
  value: Novel[];
};

const initialState: NovelState = {
  value: [],
};

export const novel = createSlice({
  name: "novel",
  initialState,
  reducers: {},
});
