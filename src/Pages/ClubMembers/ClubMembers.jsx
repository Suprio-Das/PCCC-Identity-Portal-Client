import { useEffect, useState } from "react";
import { BsFillClipboardDataFill } from "react-icons/bs";
import NotFoundLottie from '../../assets/NotFoundLottie.json';
import Lottie from "lottie-react";
import { exportToExcel } from "./Export";


const ClubMembers = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const batch = form.batch.value;
        const section = form.section.value;
        if (section == 'A' || section == 'B' || section == 'C' || section == 'D') {
            const formattedBatch = `CSE ${batch}-${section}`;
            setSearch(formattedBatch);
            console.log("Section")
        } else {
            const formattedBatch = `CSE ${batch}`
            setSearch(formattedBatch);
        }
        setResult([]);
        form.reset();
    }

    useEffect(() => {
        if (search.length > 0) {
            fetch(`https://pccc-identity-portal-server.onrender.com/batchWiseClubMembers?batch=${search}`)
                .then(res => res.json())
                .then(data => {
                    setResult(data)
                })
        }
    }, [search])

    return (
        <div className='lg:w-[90%] mx-auto p-5'>
            <h1 className='lg:text-2xl font-semibold text-blue-500 flex items-center justify-center gap-2'>Find Batchwise Members Data <BsFillClipboardDataFill /></h1>

            {/* Filter */}
            <div className="flex items-center justify-center mt-5">
                <form onSubmit={handleSearch}>
                    <div className="join">
                        <div>
                            <div>
                                <input type="number" className="input join-item lg:w-[220px] w-[180px]" name="batch" placeholder="Batch-Section(e.g. 28-A)" />
                            </div>
                        </div>
                        <select name="section" className="select join-item" defaultValue="">
                            <option value="" disabled>Section</option>
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

            {/* Export Button */}
            {
                result.length > 0 && (
                    <div className="flex justify-end mt-5">
                        <button onClick={() => exportToExcel(result, search)} className="btn btn-sm common-btn text-white">
                            Export Data
                        </button>
                    </div>
                )
            }

            {/* Members Data */}
            {
                result.length > 0 ? <div className="overflow-x-auto mt-10">
                    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="table-header text-white text-left text-sm uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-3">No.</th>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Student ID</th>
                                <th className="px-6 py-3">Contact No.</th>
                                <th className="px-6 py-3">Email</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-700 text-sm divide-y divide-gray-200">
                            {
                                result.map((member, index) => <tr key={member._id} className="hover:bg-gray-100 transition-colors duration-200">
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">{member?.Name}</td>
                                    <td className="px-6 py-4">{member?.StudentId}</td>
                                    <td className="px-6 py-4">
                                        {
                                            member?.ContactNo !== "null"
                                                ?
                                                member.ContactNo
                                                :
                                                "Not Found"
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        {
                                            member?.Email !== "null"
                                                ?
                                                member.Email
                                                :
                                                "Not Found"
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div> : <h1 className="flex justify-center items-center my-14">
                    <Lottie animationData={NotFoundLottie} className="w-64"></Lottie>
                </h1>
            }
        </div>
    );
};

export default ClubMembers;