"use client";
 
import { useReducer } from "react";
import Link from "next/link";
import Card from "./Card";
 
// --- Types ---
type RatingMap = Map<string, number>;
 
type Action =
  | { type: "SET_RATING"; name: string; value: number }
  | { type: "REMOVE_VENUE"; name: string };
 
// --- Reducer ---
function ratingReducer(state: RatingMap, action: Action): RatingMap {
  const newMap = new Map(state);
  if (action.type === "SET_RATING") {
    newMap.set(action.name, action.value);
    return newMap;
  } else if (action.type === "REMOVE_VENUE") {
    newMap.delete(action.name);
    return newMap;
  }
  return state;
}
 
// --- Mock Venues data ---
const venues = [
  { vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpg" },
  { vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg" },
];
 
// --- Initial state: all venues with rating 0 ---
const initialState: RatingMap = new Map(venues.map((v) => [v.name, 0]));
 
export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingReducer, initialState);
 
  const handleRatingChange = (name: string, value: number) => {
    dispatch({ type: "SET_RATING", name, value });
  };
 
  const handleRemoveVenue = (name: string) => {
    dispatch({ type: "REMOVE_VENUE", name });
  };
 
  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      {/* Cards row */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {venues
          .filter((v) => ratings.has(v.name))
          .map((venue) => (
            <Link key={venue.vid} href={`/venue/${venue.vid}`} style={{ textDecoration: "none" }}>
              <Card
                name={venue.name}
                image={venue.image}
                rating={ratings.get(venue.name) ?? 0}
                onRatingChange={handleRatingChange}
              />
            </Link>
          ))}
      </div>
 
      {/* Venue list with ratings */}
      <div
        style={{
          marginTop: "24px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "16px",
          maxWidth: "680px",
        }}
      >
        <p style={{ margin: "0 0 8px 0", fontWeight: 600 }}>
          Venue List with Ratings : {ratings.size}
        </p>
        {Array.from(ratings.entries()).map(([name, value]) => (
          <p
            key={name}
            data-testid={name}
            style={{
              margin: "4px 0",
              cursor: "pointer",
              color: "#555",
              fontSize: "14px",
            }}
            onClick={() => handleRemoveVenue(name)}
          >
            {name} : {value}
          </p>
        ))}
      </div>
    </div>
  );
}
 