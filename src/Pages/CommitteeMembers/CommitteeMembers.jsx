import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CommitteeMembers = () => {
    const loadedData = useLoaderData();
    const [committeeMembers, setCommitteeMembers] = useState(loadedData);

    // Define the custom designation order
    const designationOrder = [
        "President",
        "General Secretary",
        "Joint General Secretary",
        "Secretary of CP",
        "Joint Secretary of CP",
        "Organizing Secretary",
        "IT Secretary",
        "Finance Secretary",
        "Writting and Publishing Secretary",
        "Cultural Editor",
        "Sports Editor",
        "HR of Discipline",
        "Event Editor",
        "Office Secretary",
        "Publicity Editor",
        "R&D Secretary",
        "Library Editor",
        "Unknown"
    ];

    // Sort members based on the custom designation order
    const sortedMembers = [...committeeMembers].sort((a, b) => {
        const indexA = designationOrder.indexOf(a.Designation);
        const indexB = designationOrder.indexOf(b.Designation);
        return indexA - indexB;
    });

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const memberId = form.memberId.value;
        const name = form.name.value;
        const designation = form.designation.value;
        const batch = form.batch.value;
        const studentId = form.studentId.value;
        const contactNo = form.contactNo.value;

        const updatedCommitteeInfo = {
            name,
            designation,
            batch,
            studentId,
            contactNo
        }

        fetch(`http://localhost:5000/committeeMembers/${memberId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCommitteeInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    const handleDelete = id => {
        toast.info('Feature is in progress!', {
            position: 'top-center'
        });
    };

    return (
        <div className='w-[90%] mx-auto my-5'>
            <h1 className='mt-3 mb-11 lg:text-3xl text-xl font-semibold text-blue-500 text-center'>Committee Members Info</h1>
            <div className="divider -mt-11 mb-5"></div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-8 justify-items-center mb-11'>
                {
                    sortedMembers.map(member => (
                        <div key={member._id} className='w-full max-w-sm rounded-xl overflow-hidden shadow-xl bg-white'>
                            <div className='profile-card h-24 relative'>
                                <div className='absolute -bottom-12 left-1/2 transform -translate-x-1/2'>
                                    <img
                                        src={member?.Profile}
                                        alt='Profile'
                                        className='w-24 h-24 rounded-full border-4 border-white bg-white'
                                    />
                                </div>
                            </div>

                            <div className='mt-16 text-center px-6 pb-6'>
                                <h2 className='text-xl font-bold text-gray-800'>{member?.Name}</h2>
                                <p className='text-sm text-gray-500'><span className='font-semibold'>Designation:</span> {member?.Designation}</p>
                                <p className='text-sm text-gray-500'><span className='font-semibold'>Batch:</span> {member?.Batch}</p>
                                <p className='text-sm text-gray-500'><span className='font-semibold'>ID:</span> {member?.StudentId}</p>
                                <p className='text-sm text-gray-500'><span className='font-semibold'>Phone: </span>
                                    {member.ContactNo === 'null' ? ' Not Found' : member.ContactNo}
                                </p>

                                <div className='mt-6 flex gap-4 justify-center'>
                                    <button onClick={() => document.getElementById(`${member._id}`).showModal()} className='bg-blue-500 hover:bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-lg transition'>
                                        Update
                                    </button>
                                    <button onClick={() => handleDelete(member._id)} className='bg-red-500 hover:bg-red-600 text-white cursor-pointer px-4 py-2 rounded-lg transition'>
                                        Delete
                                    </button>
                                </div>
                            </div>

                            {/* Update Modal */}
                            <dialog id={`${member._id}`} className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Update <span className='text-blue-500'>{member.Name}</span></h3>
                                    <div>
                                        <form onSubmit={handleUpdate}>
                                            {/* ID field */}
                                            <input type="text" defaultValue={member._id} name="memberId" className="hidden" />
                                            {/* Name */}
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">Update Name</legend>
                                                <input type="text" className="input w-full" defaultValue={member.Name} name='name' />
                                            </fieldset>
                                            {/* Designation */}
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">Update Designation</legend>
                                                <input type="text" className="input w-full" defaultValue={member.Designation} name='designation' />
                                            </fieldset>
                                            {/* Batch */}
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">Update Batch</legend>
                                                <input type="text" className="input w-full" defaultValue={member.Batch} name='batch' />
                                            </fieldset>
                                            {/* ID */}
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">Update ID</legend>
                                                <input type="text" className="input w-full" defaultValue={member.StudentId} name='studentId' />
                                            </fieldset>
                                            {/* Phone */}
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">Update Phone</legend>
                                                <input type="text" className="input w-full" defaultValue={member.ContactNo} name='contactNo' />
                                            </fieldset>
                                            <input type="submit" value="Update Info" className='w-full btn mt-2 common-btn' />
                                        </form>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn common-btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                        </div>
                    ))
                }

                {/* Toast Container */}
                <ToastContainer />
            </div>
        </div>
    );
};

export default CommitteeMembers;