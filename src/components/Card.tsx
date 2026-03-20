"use client";
 
import Rating from "@mui/material/Rating";
 
type CardProps = {
  name: string;
  image: string;
  rating?: number;
  onRatingChange?: (name: string, value: number) => void;
};
 
export default function Card({ name, image, rating, onRatingChange }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        overflow: "hidden",
        width: "200px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "140px", objectFit: "cover" }}
      />
      <div style={{ padding: "12px" }}>
        <p style={{ margin: "0 0 8px 0", fontWeight: 500, fontSize: "14px" }}>
          {name}
        </p>
        {onRatingChange !== undefined && (
          <Rating
            id={name}
            name={name}
            data-testid={`${name} Rating`}
            value={rating ?? 0}
            onChange={(_event, newValue) => {
              onRatingChange(name, newValue ?? 0);
            }}
          />
        )}
      </div>
    </div>
  );
}
 