import React, {Component} from "react";
export default class Timeline extends Component {
    render () {
        let resumeData = this.props.resumeData;
        function generateTimelineObject(data) {
            return (
                <div className="timeline-item">
                    <div className="timeline-item-content">
                        <span className="tag" style={{background: data.category.color}}>
                            {data.category.tag}
                        </span>
                        <time>{data.date}</time>
                        <div className={"timeline-body"}>
                            <img src={data.image_url} alt=""/>
                            <p><b>{data.title}</b></p>
                            <p>{data.text}</p>
                        </div>
                        {data.link && (
                            <a
                                href={data.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {data.link.text}
                            </a>
                        )}
                        <span className="circle"/>
                    </div>
                </div>
            );
        }
        return (
            <section id={"timeline"} className={"main-content"}>
                <div className={"row skill"}>
                    <div className={"three columns header-col"}>
                        <h1><span>Timeline</span></h1>
                    </div>
                    <div className="timeline-container">
                        {resumeData.timelineData.map((data, idx) => (
                            generateTimelineObject(data)
                        ))}
                    </div>
                </div>
            </section>

        )
    }
}