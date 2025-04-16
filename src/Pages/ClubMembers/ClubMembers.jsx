import { useEffect, useState } from "react";
import { BsFillClipboardDataFill } from "react-icons/bs";

const ClubMembers = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const batch = form.batch.value;
        const section = form.section.value;
        const formattedBatch = `CSE ${batch}-${section}`;
        console.log(formattedBatch)
        setSearch(formattedBatch);
        setResult([]);
    }

    useEffect(() => {
        if (search.length > 0) {
            fetch(`http://localhost:5000/batchWiseClubMembers?batch=${search}`)
                .then(res => res.json())
                .then(data => {
                    setResult(data)
                })
        }
    }, [search])

    console.log(result);

    return (
        <div className='w-[90%] mx-auto p-5'>
            <h1 className='lg:text-2xl font-semibold text-blue-500 flex items-center justify-center gap-2'>Find Batchwise Members Data <BsFillClipboardDataFill /></h1>

            {/* Filter */}
            <div className="flex items-center justify-center mt-5">
                <form onSubmit={handleSearch}>
                    <div className="join">
                        <div>
                            <div>
                                <input type="number" className="input join-item w-[220px]" name="batch" placeholder="Batch-Section(e.g. 28-A)" />
                            </div>
                        </div>
                        <select name="section" className="select join-item">
                            <option disabled selected>Section</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                        <select className="select join-item" disabled>
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
            {/* Members Data */}
            <div className="overflow-x-auto mt-10">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white text-left text-sm uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-3">No.</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Student ID</th>
                            <th className="px-6 py-3">Contact No.</th>
                            <th className="px-6 py-3">Email</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-gray-700 text-sm divide-y divide-gray-200">
                        <tr className="hover:bg-gray-100 transition-colors duration-200">
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">John Doe</td>
                            <td className="px-6 py-4">CSE 02807546</td>
                            <td className="px-6 py-4">017xxxxxxxx</td>
                            <td className="px-6 py-4">john@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ClubMembers;