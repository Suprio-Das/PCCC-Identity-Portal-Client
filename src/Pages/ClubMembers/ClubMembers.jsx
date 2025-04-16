import { BsFillClipboardDataFill } from "react-icons/bs";

const ClubMembers = () => {
    return (
        <div className='w-[90%] mx-auto p-5'>
            <h1 className='lg:text-2xl font-semibold text-blue-500 flex items-center justify-center gap-2'>Find Batchwise Members Data <BsFillClipboardDataFill /></h1>

            {/* Filter */}
            <div className="flex items-center justify-center mt-5">
                <form>
                    <div className="join">
                        <div>
                            <div>
                                <input className="input join-item w-[200px]" placeholder="Batch-Section(e.g. 28-A)" />
                            </div>
                        </div>
                        <select className="select join-item">
                            <option disabled selected>Shift</option>
                            <option>Day</option>
                            <option>Evening</option>
                        </select>
                        <div className="indicator">
                            <button className="btn join-item">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClubMembers;