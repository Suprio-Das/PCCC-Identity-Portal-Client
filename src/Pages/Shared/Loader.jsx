import Lottie from 'lottie-react';
import Loader_Lottie from '../../assets/loader_lottie.json';

const Loader = () => {
    return (
        <div className='min-h-[calc(100vh-70px)] flex item-center justify-center'>
            <Lottie animationData={Loader_Lottie} className='w-62'></Lottie>
        </div>
    );
};

export default Loader;