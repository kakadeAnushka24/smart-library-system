import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import "./Contact.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";


function Contact() {
    return ( <div>
        <Navbar active="contact"/>
         <PageTitle title="Contact Us" />  
       <BodyContainer>
<div className="contact-form"><form>
    <input type="text" placeholder="Enter Your Name:" /><br/><br/>
    <input type="email" placeholder="Enter Your Email:"/>
<br/><br/>
<button type="button">Send</button>    
</form></div>

       </BodyContainer>
        <Footer />
    </div>
    );
}

export default Contact;