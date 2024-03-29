export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Authors: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      Bookmarks: {
        Row: {
          created_at: string
          id: number
          novel_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          novel_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          novel_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Bookmarks_novel_id_fkey"
            columns: ["novel_id"]
            isOneToOne: false
            referencedRelation: "Novels"
            referencedColumns: ["id"]
          }
        ]
      }
      Chapters: {
        Row: {
          body: string | null
          created_at: string
          id: number
          novel_id: number | null
          title: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: number
          novel_id?: number | null
          title?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: number
          novel_id?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Chapters_novel_id_fkey"
            columns: ["novel_id"]
            isOneToOne: false
            referencedRelation: "Novels"
            referencedColumns: ["id"]
          }
        ]
      }
      Comments: {
        Row: {
          comment: string | null
          created_at: string
          id: number
          novel_id: number | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: number
          novel_id?: number | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: number
          novel_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Comments_novel_id_fkey"
            columns: ["novel_id"]
            isOneToOne: false
            referencedRelation: "Novels"
            referencedColumns: ["id"]
          }
        ]
      }
      GenreGroups: {
        Row: {
          created_at: string | null
          genre_id: number | null
          id: number
          novel_id: number | null
        }
        Insert: {
          created_at?: string | null
          genre_id?: number | null
          id?: number
          novel_id?: number | null
        }
        Update: {
          created_at?: string | null
          genre_id?: number | null
          id?: number
          novel_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "GenreGroups_genre_id_fkey"
            columns: ["genre_id"]
            isOneToOne: false
            referencedRelation: "Genres"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "GenreGroups_novel_id_fkey"
            columns: ["novel_id"]
            isOneToOne: false
            referencedRelation: "Novels"
            referencedColumns: ["id"]
          }
        ]
      }
      Genres: {
        Row: {
          color: string | null
          created_at: string | null
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
      Likes: {
        Row: {
          created_at: string
          id: number
          novel_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          novel_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          novel_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Likes_novel_id_fkey"
            columns: ["novel_id"]
            isOneToOne: false
            referencedRelation: "Novels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      Novels: {
        Row: {
          author_id: number | null
          created_at: string | null
          description: string | null
          id: number
          image: string | null
          name: string | null
          origin_id: number | null
          slug: string | null
          star: number | null
        }
        Insert: {
          author_id?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          origin_id?: number | null
          slug?: string | null
          star?: number | null
        }
        Update: {
          author_id?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          origin_id?: number | null
          slug?: string | null
          star?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Novels_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "Authors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Novels_origin_id_fkey"
            columns: ["origin_id"]
            isOneToOne: false
            referencedRelation: "Origins"
            referencedColumns: ["id"]
          }
        ]
      }
      Origins: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
      Views: {
        Row: {
          chapter_id: number | null
          created_at: string
          id: number
          views: number | null
        }
        Insert: {
          chapter_id?: number | null
          created_at?: string
          id?: number
          views?: number | null
        }
        Update: {
          chapter_id?: number | null
          created_at?: string
          id?: number
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Views_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "Chapters"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_all_novels: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          novel_name: string
          image: string
          slug: string
          star: number
          description: string
          author_id: number
          author: string
          origin: string
          genres: string
          genres_slugs: string
        }[]
      }
      get_all_novels_based_on_genre: {
        Args: {
          genrename: string
        }
        Returns: {
          id: number
          novel_name: string
          image: string
          slug: string
          star: number
          description: string
          author_id: number
          author: string
          origin: string
          genres: string
          genres_slugs: string
        }[]
      }
      get_bookmarks_by_user_id: {
        Args: {
          userid: string
        }
        Returns: {
          id: number
          novel_name: string
          image: string
          slug: string
          star: number
          description: string
          author_id: number
          author: string
          origin: string
          genres: string
          genres_slugs: string
        }[]
      }
      get_novel_by_slug: {
        Args: {
          novelslug: string
        }
        Returns: {
          id: number
          novel_name: string
          image: string
          slug: string
          star: number
          description: string
          author_id: number
          author: string
          origin: string
          genres: string
          genres_slugs: string
        }[]
      }
      get_novels_by_author: {
        Args: {
          authorid: number
        }
        Returns: {
          id: number
          novel_name: string
          image: string
          slug: string
          star: number
          description: string
          author_id: number
          author: string
          origin: string
          genres: string
          genres_slugs: string
        }[]
      }
      get_novels_by_origin: {
        Args: {
          originname: string
        }
        Returns: {
          id: number
          novel_name: string
          image: string
          slug: string
          star: number
          description: string
          author_id: number
          author: string
          origin: string
          genres: string
          genres_slugs: string
        }[]
      }
      get_views_by_novel_id: {
        Args: {
          novelid: number
        }
        Returns: {
          id: number
          views: number
        }[]
      }
      is_bookmarked: {
        Args: {
          novelid: number
          userid: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
