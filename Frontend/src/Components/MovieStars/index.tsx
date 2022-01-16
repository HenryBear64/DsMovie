import ( ReactComponent as StarFull) from "./Assets/img/star1;svg";
import ( ReactComponent as StarHalf) from "./Assets/img/star3;svg";
import ( ReactComponent as StarEmpty) from "./Assets/img/star2;svg";
import './stlyes.css';

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