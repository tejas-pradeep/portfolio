import React, {Component} from "react";
import Slider from "react-animated-slider/src";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";

export default class Work extends Component {
    render () {
        let resumeData = this.props.resumeData;
        return (
            <section id={"work"} className={"main-content"}>
                <div className={"nine columns main-col"}>
                    <Slider className={"slider-wrapper"}>
                        {resumeData.work.map((item, index) => (
                            <div
                                key={index}
                                className={"slider-content"}
                                style={{background: `url('${item.image}') no-repeat center center`}}
                            >
                                <div className="inner">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <button onClick={"location.href=" + item.image_url}>{item.button}</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </section>
        );
    }
}