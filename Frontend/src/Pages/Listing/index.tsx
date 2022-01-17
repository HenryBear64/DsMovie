import MovieCard from "Components/MovieCard";
import MovieStars from "Components/MovieStars";
import Pagination from "Components/Pagination";

function Listing() {

    // FORMA ERRADA
    axios.get(("http://localhost:8080/movies?size=12page=0")
        .then(response => {
            console.log.respose.data;
        });


    return (
        <>
            <Pagination />

            <div className="container">
                <MovieCard />
            </div>

            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">

                </div>

                div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">

                </div>div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">

                </div>div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">

                </div>div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">

                </div>div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">

                </div>
            </div>
            <MovieStars />
        </>
    );
}

export default Listing;