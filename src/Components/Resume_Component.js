import React, {Component} from "react";
export default class Resume_Component extends Component {
    render() {
        return (
            <section id={'resume'} className={"main-content"}>
                <div className={'row'}>
                    <div className={"three columns header-col"}>
                        <h1><span>Resume</span></h1>
                    </div>
                    <div className={"nine columns main-col work-bg"}>
                        <iframe src="https://drive.google.com/file/d/13XJSIR6dbc3weUCD_ooJIEG56lGFmg1m/preview" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                </div>
            </section>
        );
    }
}