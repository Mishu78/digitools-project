import DigitalToolCard from '../DigitalToolCard/DigitalToolCard';
import { use } from "react";
const DigitalTools = ({digitalToolsPromise}) => {
    const digitalTools= use(digitalToolsPromise);

    console.log(digitalTools);
    return (
        
        <div className='mt-40 container justify-items-center mx-auto'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-bold mb-3'>Premium Digital Tools</h2>
            <p className='text-gray-500 mb-3'>Premium Digital ToolsChoose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>

            <button className='btn-primary  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-3 text-white'>Products</button>
            <button className='btn-primary rounded-4xl p-3 '>Cart</button>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                   digitalTools.map(digitalTool => (
                    <DigitalToolCard digitalTool={digitalTool}></DigitalToolCard>
                   ) )
                }
                
            </div>
        </div>
    );
};

export default DigitalTools;