import "./styles.css";
import { Movie } from 'types/movie';
import { Link, useParams } from 'react-router-dom';
function Form() {

   type Props = {
       movie : Movie;
   }

function Form ( { movie } : Props) {

    const params =useParams();
}

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <link to="/">
                <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </link>
                
            </div >
        </div >
    );
}

export default Form;