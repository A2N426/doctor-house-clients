import Banner from "../../components/Banner/Banner";
import Clients from "../../components/Clients/Clients";
import Contact from "../../components/Contact/Catact";
import ContactPackage from "../../components/ContactPackage/ContactPackage";
import Doctors from "../../components/Doctors/Doctors";
import Service from "../../components/Service/Service";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Contact></Contact>
            <Clients></Clients>
            <Doctors></Doctors>
            <ContactPackage></ContactPackage>
        </div>
    );
};

export default Home;