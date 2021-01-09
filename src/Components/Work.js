import React from "react";
import $ from 'jquery';
import flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import "../css/slider.css";

function Work({resumeData}) {
    // function generateSlide({item}) {
    //     return (
    //
    //     );
    // }
    React.useEffect(() => {
        let slideEl = $(".slide--parent");
        // slideEl.flickity({
        //     imagesLoaded: true,
        //     wrapAround: true,
        //     autoPlay: true,
        //     pauseAutoPlayOnHover: false
        // });
    }, []);
    return (
        <section id={"work"} className={"main-content"}>
            <div className={"row skill"}>
                <div className={"three columns header-col"}>
                    <h1><span>Work Experience</span></h1>
                </div>
                <div className="slide--parent">
                    {
                        resumeData.work && resumeData.work.map((item) => {
                            return(
                                <div className="parent--el">
                                    <div className="two--col">
                                        <div className="is-item has--img">
                                            <figure className="the-img">
                                                <img src={item.image} alt=""/>
                                            </figure>
                                        </div>
                                        <div className="is-item has--content">
                                            <div className="is-item--inner">
                                                <h1><span>{item.employer}</span></h1>
                                                <small>{item.position}</small>
                                                <hr/>
                                                <p>{item.description}</p>
                                                <a className={"button"} href={item.button_url}>{item.button}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    );
}
export default Work;
