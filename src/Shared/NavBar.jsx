import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-emerald-950 text-neutral-content md:flex md:flex-row flex-col md:justify-between items-center px-10">
            <div>
                <img className="w-10 rounded-full" src="https://img.freepik.com/free-vector/doctor-medical-healthcare-pfrofessional-character-vector_53876-175176.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                <Link className="text-xl mx-5"><span className="text-red-300 font-bold">Doc </span> House</Link>
            </div>
            <div className="flex md:gap-10 gap-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/appointment">Appointment</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;