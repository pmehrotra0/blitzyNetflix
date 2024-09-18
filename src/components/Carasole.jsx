import { useMemo, useState } from "react";

function Carasole() {
    const movieDetails = [
        {
            id: 1,
            title: 'Movie1',
            details: 'Sample Details 1',
        },
        {
            id: 2,
            title: 'Movie2',
            details: 'Sample Details 2',
        },
        {
            id: 3,
            title: 'Movie3',
            details: 'Sample Details 3',
        },
        {
            id: 4,
            title: 'Movie4',
            details: 'Sample Details 4',
        }
    ]
    const [selectedMovieId, setSelectedMovieId] = useState(1);
    const selectedMovieDetails = movieDetails.filter((item) => item.id === selectedMovieId)[0];

    const handleSelectPrev = () => {
        if(selectedMovieId == 1){
            setSelectedMovieId(4);
            return;
        }
        setSelectedMovieId(selectedMovieId - 1);
    }

    const handleSelectNext = () => {
        if(selectedMovieId == 4){
            setSelectedMovieId(1);
            return;
        }
        setSelectedMovieId(selectedMovieId + 1);
    }


    return ( <div className="carasole-wrapper">
        <div className="carasole-action" onClick={handleSelectPrev}>◀︎</div>
        <div className="carasole">
            <div className="carasole-item"></div>
            <div className="caraole-item-details">
                <div className="caraole-item-details-title">{selectedMovieDetails.title}</div>
                <div className="caraole-item-details-description">ℹ️{selectedMovieDetails.details}</div>
            </div>
        </div>
        <div className="carasole-action" onClick={handleSelectNext}>▶︎</div>
    </div> );
}

export default Carasole;