import React, {Component} from "react";
export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id={'about'}>
                <div className={'row'}>
                    <div className={"three columns"}>
                        <img className={"profile-pic"} src={process.env.PUBLIC_URL + "public_images/tejas_pradeep_profile_pic.jpg"} alt={"Tejas_Pradeep_profile_pic"}/>
                    </div>
                    <div className={"nine columns main-col"}>
                        <h2>About Me</h2>
                        <p>
                            {resumeData.aboutMe}
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
