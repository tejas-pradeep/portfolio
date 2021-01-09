import React from "react";
import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import "../css/slider.css";

function Work({resumeData}) {
    React.useEffect(() => {
        let slideEl = $(".slide--parent");
        let flickity = new Flickity('.slide--parent', {
            imagesLoaded: true,
            wrapAround: true,
            // autoPlay: true,
            adaptiveHeight : true
        });
    }, []);
    return (
        <section id={"work"} className={"main-content"}>
            <div className={"row skill"}>
                <div className={"three columns header-col"}>
                    <h1><span>Work Experience</span></h1>
                </div>
                <div className={"nine columns main-col"}>
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
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Work;
