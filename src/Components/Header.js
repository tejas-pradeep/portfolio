import React, {Component} from "react";

export default class Header extends Component {
   render () {
       let resumeData = this.props.resumeData;
       return (
         <React.Fragment>
             <header id={"home"}>
                 <nav id={"nav-wrap"}>
                     <a className={"mobile-btn"} href={"#nav-wrap"} title={"Show menu"}>Show menu</a>
                     <a className={"mobile-btn"} href={"#"} title={"Hide menu"}>Hide menu</a>
                     <ul id={"nav"} className={"nav"}>
                         <li className={"current"}><a className={"smoothscroll"} href={"#home"}>Home</a></li>
                         <li><a className={"smoothscroll"} href={"#skills"}>Skills</a></li>
                         <li><a className={"smoothscroll"} href={"#timeline"}>Timeline</a></li>
                         <li><a className={"smoothscroll"} href={"#projects"}>Projects!</a></li>
                         <li><a className={"smoothscroll"} href={"#contact"}>Contact Me!</a></li>
                         <li><a href={"../Downloads/Tejas_Pradeep_Resume.pdf"} download={"Tejas_Pradeep_Resume"}>Download Resume <i className={"fas fa-download"}/></a></li>
                     </ul>
                 </nav>
                 <div className={"row banner"}>
                     <div className={"banner-text"}>
                         <h1 className={"responsive-headline"}>
                             I am {resumeData.name}.
                         </h1>
                         <h3 style={{color:"white", fontFamily:"sans-serif"}}>{resumeData.aboutMe}</h3>
                         <hr/>
                         <ul className={"social"}>
                             {
                                 resumeData.socials  && resumeData.socials.map(item => {
                                     return (
                                         <li key={item.name}>
                                             <a href={item.url} target={""}><i className={item.className}/></a>
                                         </li>
                                     )
                                 })
                             }
                         </ul>
                     </div>
                 </div>
                 <p className={"scroll-down"}>
                     <a className={"smoothscroll"} href="#skills"><i className={"icon-down-circle"}/> Click to see my skills.</a>
                 </p>
             </header>
         </React.Fragment>
       );
   }
}