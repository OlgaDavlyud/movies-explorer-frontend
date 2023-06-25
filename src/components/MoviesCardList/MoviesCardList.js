import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import pic1 from '../../images/pic_1.png';
import pic2 from '../../images/pic_2.png';
import pic3 from '../../images/pic_3.png';
import pic4 from '../../images/pic_4.png';
import pic5 from '../../images/pic_5.png';
import pic6 from '../../images/pic_6.png';
import pic7 from '../../images/pic_7.png';
import pic8 from '../../images/pic_8.png';
import pic9 from '../../images/pic_9.png';
import pic10 from '../../images/pic_10.png';
import pic11 from '../../images/pic_11.png';
import pic12 from '../../images/pic_12.png';
import pic13 from '../../images/pic_13.png';
import pic14 from '../../images/pic_14.png';
import pic15 from '../../images/pic_15.png';
import pic16 from '../../images/pic_16.png';

function MoviesCardList() {
    return(
        <section className="movie-card-list">
            <div className="section__cards">
                <MoviesCard
                img={pic1}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic2}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic3}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic4}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic5}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic6}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic7}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic8}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic9}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic10}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic11}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic12}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic13}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic14}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic15}
                title="33 слова о дизайне"
                time="1ч42м"
                />
                <MoviesCard
                img={pic16}
                title="33 слова о дизайне"
                time="1ч42м"
                />
            </div>
        </section>
    );
}

export default MoviesCardList