import ( ReactComponent as StarFull) from "./Assets/img/star1;svg";
import ( ReactComponent as StarHalf) from "./Assets/img/star3;svg";
import ( ReactComponent as StarEmpty) from "./Assets/img/star2;svg";
import './stlyes.css';

function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }
  
functon MovieStars()(
    return (
    <div className="dsmovie-stars-container">
        <StarFull />
        <StarFull />
        <StarFull />
        <StarHalf />
        <StarEmpty />
    </div>
    );
)

export default MovieStars;