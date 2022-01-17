import axios from "axios"
import { useState, useEffect } from "react"
import MovieCard from "Components/MovieCard";
import MovieStars from "Components/MovieStars";
import Pagination from "Components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

     const [pageNumber, setPageNumber] =useState(0);

    useEffect(() => { axios.get("http://localhost:8080/movies?size=12page=1")
    .then(response => {
        const data = response.data as MoviePage;
        setPageNumber(data.number);
    )

    
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