import { FaCalendar, FaUser, FaBagShopping} from 'react-icons/fa6' 

const WorkStats = () => {
    return ( 
        <section className="work_statistics">
            <div className="happy_clients stats">
                <div className="icon"> <FaUser size={25}/> </div>
                <div className="right">
                    <h2 className="stat"> 250+ </h2>
                    <div className="text">Happy Clients</div>
                </div>
            </div>

            <div className="project_complete stats">
                <div className="icon"> <FaBagShopping size={25}/> </div>
                <div className="right">
                    <h2 className="stat"> 300+ </h2>
                    <div className="text">Project Complete</div>
                </div>
            </div>

            <div className="years_of_experience stats"> 
                <div className="icon"> <FaCalendar size={25}/> </div>
                <div className="right">
                    <h2 className="stat"> 3+ </h2>
                    <div className="text">Years of Experience</div> 
                </div>
            </div>
        </section>
    );
}
 
export default WorkStats;