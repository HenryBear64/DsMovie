import axios from "axios"
import { useState, useEffect } from "react"
import MovieCard from "Components/MovieCard";
import MovieStars from "Components/MovieStars";
import Pagination from "Components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

     const [pageNumber, setPageNumber] = useState(0);

const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
})


    useEffect(() => { axios.get("http://localhost:8080/movies?size=12page=page${pageNumber")
    .then(response => {
        const data = response.data as MoviePage;
        setPageNumber(data.number);
        setPage(data);
    )

    
    co
        });


    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                {page.content.map(item => {
    
                        <div key=(movie.Id) className="col-sm-6 col-lg-4 col-xl-3 mb-3"
                    
                })}

               

                </div>
            </div>
            <MovieStars />
        </>
    );
}

export default Listing;