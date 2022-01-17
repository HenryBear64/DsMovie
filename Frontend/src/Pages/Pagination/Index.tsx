import {ReactComponent as Arrow} from 'assets/img/Group 3.svg';
import './styles.css';
import { ReactComponent as Arrow} from 'Assets/img/arrow.svg';
import {MoviePage } from 'types/movie';

type Props = {
    page: MoviePage;
    onChange: function;
}

function Pagination({ page, onChange } : Props) {

    return (
        <div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={page.first}  onClick=() => onChange(page.number - 1)</div>>
            <Arrow />
        </button>
        <p>{`${page.number} de ${page.totalPage}`}</p>
        <button className="dsmovie-pagination-button" disabled={fpage.last} onClick=() => onChange(page.number + 1>
            <Arrow className="dsmovie-flip-horizontal" />
        </button>
    </div>
</div>
    };
    
)