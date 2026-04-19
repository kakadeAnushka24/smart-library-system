import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import "./Contact.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";

function Contact() {
    return ( 
    <div>
        <Navbar active="contact"/>
        <PageTitle title="Contact Us!!!" />  

        <BodyContainer>

            <div className="contact-form">
                <form>

                    <h2 className="form-title">Connect With Smart Library</h2>

                    <input type="text" placeholder="Full Name" required />
                    
                    <input type="email" placeholder="Email Address" required />

                    <input type="text" placeholder="Subject" />

                    <textarea placeholder="Write your message here..." rows="4" required></textarea>

                    <button type="submit">Send Message</button>    

                </form>
            </div>

        </BodyContainer>

        <Footer />
    </div>
    );
}

export default Contact;
