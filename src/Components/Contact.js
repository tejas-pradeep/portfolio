import React, {Component} from "react";
export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id={"contact"}>
                <div className={"row section-head"}>
                    <div className={"ten column"}>
                        <p className={"lead"}>
                            Feel free to contact me regarding any job opportunities or suggestions below.
                        </p>
                    </div>
                </div>
                <div className={"row"}>
                    <aside className={"eight columns footer-widgets"}>
                        <div className={"widget"}>
                            <h4>LinkedIn : {resumeData.linkedIn_ID}</h4>
                            <br/>
                            <h4>Email : {resumeData.email}</h4>
                        </div>
                    </aside>
                </div>
            </section>
        )
    }
}