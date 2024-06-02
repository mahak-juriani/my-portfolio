import './Certifications.css'
import certificate from './images/Cerificate.jpeg'
function Certifications(){
    return(
        <div className="certifications-contianer">
            <h1>Certifications</h1>
            <br/>
            <br/>
            <div className="certificate-card">
            <div className="certificate-details">
                <h3>Certificate Details</h3>
                <p>AWS Certified Cloud Practitioner</p>
                <p>Validation Number: 7d59401e01cd4accb8fbcabfba724d45</p>
                <p>Issue Date: May 17, 2024</p>
                <p>Expiration Date: May 17, 2027</p>
            </div>
            <img src={certificate} alt="Certificate Image" className="certificate-image" />
            </div>

        </div>
    );
}

export default Certifications;