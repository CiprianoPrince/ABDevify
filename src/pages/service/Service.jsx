import { servicesImage1, servicesImage2 } from "../../assets/images";

const Service = () => {
    return <section className="container mx-auto">
        <div className="flex justify-between p-5">

        <div>
        <img src={servicesImage1} alt="" />
        </div>
        <div>

        <img src={servicesImage2} alt="" />
        </div>
        </div>
    </section>;
};

export default Service;
