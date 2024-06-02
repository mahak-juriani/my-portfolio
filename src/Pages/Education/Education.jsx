import './Education.css';
function Education() {
    return (
        <div className="timelines">
            <div className="timeline education">
                <h2 className="timeline-title">Education</h2>
                <br />
                <div className="timeline-items">
                    <div className="timeline-item">
                        <h3>Bachelor's of Science in Computer Science</h3>
                        <time datetime="2023/2027">2033 &ndash; 2027</time>
                        <div className="location">Scaler School of Technology, Bangalore</div>
                    </div>
                    <div className="timeline-item">
                        <h3>St. Joseph's Convent Girls' Sr. Sec. School</h3>
                        <time datetime="2009/2023">2009 &ndash; 2023</time>
                        <div className="location">Jabalpur, Madhya Pradesh</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;