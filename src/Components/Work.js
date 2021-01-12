import React from "react";
import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import "../css/slider.css";

function Work({resumeData}) {
    React.useEffect(() => {
        const window_width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        if(window_width > 920) {
            let slideEl = $(".slide--parent");
            let flickity = new Flickity('.slide--parent', {
                imagesLoaded: true,
                wrapAround: true,
                // autoPlay: true,
                adaptiveHeight : true
            });
        } else {


        }
    }, []);
    return (
        <section id={"work"} className={"main-content"}>
            <div className={"row skill"}>
                <div className={"three columns header-col"}>
                    <h1><span>Work Experience</span></h1>
                </div>
                <div className={"nine columns main-col work-bg"}>
                    <div className="slide--parent">
                        {
                            resumeData.work && resumeData.work.map((item) => {
                                return(
                                    <div className="parent--el">
                                        <div className="two--col">
                                            <div className="is-item has--img">
                                                <figure className="the-img">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt=""/>
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
                <div className={"nine columns work-sm"}>
                    {
                        resumeData.work && resumeData.work.map((data) => {
                            return (
                                <div className="timeline-card">
                                    <img src={process.env.PUBLIC_URL + "/" + data.image} alt=""/>
                                    <div className="container">
                                        <h2><b>{data.employer}</b></h2>
                                        <small>{data.position}</small>
                                        <p>{data.description}</p>
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
