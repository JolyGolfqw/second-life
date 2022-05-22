import { useState } from "react";
import Star from "./Star";

export default function StarRating({ numTotalStars = 5, rating, setRating, currentRating}) {
    const [numHoveringStars, setNumHoveringStars] = useState(null);
  
    const [isUserHovering, setIsUserHovering] = useState(false);
    
  
    function getColor(isUserHovering, i, rating, numHoveringStars) {
      const threshold = isUserHovering ? numHoveringStars : rating;
      return (i < threshold) ? "red" : "grey";
    }
  
    return (
      <div className="star-rating">
        <div onMouseEnter={() => setIsUserHovering(true)} onMouseLeave={() => setIsUserHovering(false)} >
          {Array.from({ length: numTotalStars }).map((e, i) =>
            <Star
              key={i}
              color={getColor(isUserHovering, i, rating, numHoveringStars)}
              handleSelect={() => setRating(i + 1)}
              handleHover={() => setNumHoveringStars(i + 1)}
            />)}
        </div>
        <div className="label">rating {currentRating.toFixed(1)}</div>
      </div>
    );
  }