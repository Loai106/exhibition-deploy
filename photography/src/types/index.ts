import axios from "axios";

export const BASE_URL = "https://api.canvasgaza.com/api";

export const CLIENT_ID_PAYPAL =
  "BAAK5qCC-xBSbtLQiGchrBlS7xWweNV_NiKQFoSXOOmhlxKJ0Oj94iiykcbtcS9QVPhQX6_0611RGUvC8Y";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // 5 seconds timeout
  headers: { "Content-Type": "application/json" },
});

export const END_POINTS = {
  GET_ALL_ARTISTS: "/artists",
  GET_ARTIST: "/artist",
  GET_ALL_PAINTINGS: "/paintings",
  GET_PAINTING: "/paintings",
};

export const QUERY_KEY = {
  ALL_ARTISTS: "GET_ALL_ARTISTS",
  ARTIST: "GET_ARTIST",
  ALL_PAINTINGS: "GET_ALL_PAINTINGS",
  PAINTING: "GET_PAINTING",
};

export interface Artist {
  artist_id: number;
  firstName: string;
  lastName: string;
  artistStory: string;
  pob: string; // Place of birth
  dob: string; // Date of birth (ISO string format)
  artistPic: string;
  createdAt: string; // ISO string format
  updatedAt: string; // ISO string format
  paintings: Painting[]; // Array of paintings
  age: number; // Age of the artist
}

export interface Painting {
  painting_id: number;
  paintingName: string;
  description: string;
  date: string; // Date (ISO string format)
  height: number; // Height in cm (assumed)
  width: number; // Width in cm (assumed)
  exhibition_id: number;
  painting_url: string; // URL of the painting
  createdAt: string; // ISO string format
  updatedAt: string; // ISO string format
  artists: Artist[]; // Relation to artist-painting
}

export interface ArtistPainting {
  artistPainting_id: number;
  artist_id: number;
  painting_id: number;
  createdAt: string; // ISO string format
  updatedAt: string; // ISO string format
}

export interface Artist {
  artist_id: number;
  firstName: string;
  lastName: string;
  artistStory: string;
  pob: string; // Place of birth
  dob: string; // Date of birth (ISO string format)
  artistPic: string;
  createdAt: string; // ISO string format
  updatedAt: string; // ISO string format
  paintings: Painting[]; // Array of paintings
  artist_painting: ArtistPainting; // Relation to artist-painting
}
