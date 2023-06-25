import React from "react";
// import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
// import Footer from '../Footer/Footer';

function Main() {
    return(
        <main className="main">
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    );
}

// function Main() {
//     return(
//         <main className="main">
//             <Header />
//             <Promo />
//             <NavTab />
//             <AboutProject />
//             <Techs />
//             <AboutMe />
//             <Portfolio />
//             <Footer />
//         </main>
//     );
// }

export default Main