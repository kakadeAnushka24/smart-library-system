import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import "./About.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";

function About() {
    return ( 
    <div>
        <Navbar active="about"/>
        <PageTitle title="About Us!!!" />  

        <BodyContainer> 

            {/* Main About Card */}
            <div className="about-main-card">
                <p>
                    It is a modern digital platform built to make reading, learning, and knowledge sharing simple and accessible to everyone. 
                    Whether you’re a student, teacher, or lifelong learner, Smart Library System connects you to a collection of books and 
                    study materials through an easy-to-use online library system. With Smart Library System, we aim to empower readers and 
                    authors by providing an engaging space to explore, publish, and collaborate. We believe in the transformative power of 
                    books and the importance of connecting communities through knowledge.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="card-container">

                <div className="about-card">
                    <h3>Extensive Digital Library</h3>
                    <p>
                        Explore thousands of books and research materials from diverse genres and domains.
                    </p>
                </div>

                <div className="about-card">
                    <h3>Easy Accessibility</h3>
                    <p>
                        Read your favorite books anytime, anywhere with a simple and user-friendly interface.
                    </p>
                </div>

                <div className="about-card">
                    <h3>Community Learning</h3>
                    <p>
                        Connect with readers and authors, share knowledge, and grow together.
                    </p>
                </div>

            </div>

        </BodyContainer>

        <Footer /> 
    </div>
    );
}

export default About;
