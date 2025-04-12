import Logo from '../../assets/PCIU-Computer-Club-Logo.png'

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-80px)] flex items-center justify-center'>
            <div>
                <div className='flex justify-center'>
                    <img src={Logo} alt="Logo" className='w-38 my-3' />
                </div>
                <h1 className='lg:text-5xl text-xl font-semibold text-center text-blue-500'>PCCC Identity Portal</h1>
            </div>
        </div>
    );
};

export default Home;