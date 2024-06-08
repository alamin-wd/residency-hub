import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Agents = () => {

    const agents = useLoaderData();

    return (

        <div className="my-10 text-center">

            <Helmet>
                <title>Agents | Residency Hub</title>
            </Helmet>

            <h2 className="text-4xl font-bold">Meet Our Agents</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {
                    agents.map(agent => <div
                        key={agent.id}
                        className="shadow-xl rounded-lg p-4">

                        <img src={agent.image} alt="" />

                        <h3 className="text-2xl font-semibold mt-3">{agent.name}</h3>

                        <p className="font-medium text-[#5f7384]">{agent.agent_type}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Agents;
