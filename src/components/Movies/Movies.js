import React from 'react';
// import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreBtn from '../MoreBtn/MoreBtn';
// import Preloader from '../Preloader/Preloader';
// import Footer from '../Footer/Footer';

function Movies() {
    return(
        <main className="movie">
            <SearchForm />
            <MoviesCardList />
            <MoreBtn />
            {/* <Preloader /> */}
        </main>
    );
}

// function Movies() {
//     return(
//         <main className="movie">
//             <Header />
//             <SearchForm />
//             <FilterCheckbox />
//             <MoviesCardList />
//             <MoreBtn />
//             {/* <Preloader /> */}
//             <Footer />
//         </main>
//     );
// }


export default Movies