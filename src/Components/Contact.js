import React from "react";
function Contact() {
    React.useEffect(() => {
        document.querySelectorAll('.card').forEach(e => {
            e.addEventListener('click', () => window.location.href = e.dataset.redirect);
        });
    }, []);
    return (
        <section id={"contact"}>
            <div className={"row section-head"}>
                <h1><span>Contact Me!</span></h1>
            </div>
            <div className="contact-info">
                <div className="card" data-redirect={"mailto:rptejas@gatech.edu"}>
                    <i className="card-icon far fa-envelope"></i>
                    <p>rptejas@gatech.edu</p>
                </div>

                <div className="card" data-redirect={"tel:512-665-0719"}>
                    <i className="card-icon fas fa-phone"></i>
                    <p href={"tel:512-665-0719"}>+1 512-665-0719</p>
                </div>

                <div className="card" data-redirect={"https://www.linkedin.com/in/tejas-pradeep/"}>
                    <i className="card-icon fab fa-linkedin"></i>
                    <p href={"https://www.linkedin.com/in/tejas-pradeep/"}>linkedin.com/in/tejas-pradeep</p>
                </div>
            </div>
        </section>
    )
}
export default Contact;
