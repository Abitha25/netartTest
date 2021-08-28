import React from "react";
import img1 from  './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import logo from './images/logo.png';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <header>
                   <img className="logo" src={logo} alt="logo"></img>
                  
               </header>
                <div  className="awardcontent">
                <div><img className="award" src={img1} alt="award img"></img></div>
                <div> <p> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.

                    C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                </p><br/>
                <img className="photo" src={img2} alt='award' />
                <figcaption>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</figcaption>
                </div>
                </div>
                <br></br>
                <div id="product">
                    <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                    <img className="products" src={img3} alt="products"></img>
                    <figcaption>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </figcaption>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Content;