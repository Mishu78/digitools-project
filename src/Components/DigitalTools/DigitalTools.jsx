import DigitalToolCard from '../DigitalToolCard/DigitalToolCard';
import { use } from "react";
const DigitalTools = ({digitalToolsPromise,carts,setCarts}) => {
    const digitalTools= use(digitalToolsPromise);

    console.log(digitalTools);
    return (
        
        <div className='mt-20 container justify-items-center mx-auto'>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                   digitalTools.map(digitalTool => (
                    <DigitalToolCard key={digitalTool.id} digitalTool={digitalTool} carts={carts} setCarts={setCarts}></DigitalToolCard>
                   ) )
                }
                
            </div>
        </div>
    );
};

export default DigitalTools;