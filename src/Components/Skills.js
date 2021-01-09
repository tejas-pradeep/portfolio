import React, {Component} from "react";
export default class Skills extends Component {
    render () {
        let resumeData = this.props.resumeData;
        return (
            <section id={"skills"} className={"main-content"}>
                <div className={"row skill"}>
                    <div className={"three columns header-col"}>
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className={"nine columns main-col"}>
                        <p/>
                        <div className={"bars"}>
                            <ul className={"skills"}>
                                {
                                    resumeData.skills && resumeData.skills.map((item) => {
                                        return (
                                            <li>
                                                <span className={`bar-expand`} style={{width: item.skillLevel}}/>
                                                <em>
                                                    <span>
                                                        {item.skillname}
                                                    </span>
                                                </em>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}