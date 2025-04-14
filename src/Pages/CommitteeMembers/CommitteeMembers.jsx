import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CommitteeMembers = () => {
    const loadedData = useLoaderData();
    const [committeeMembers, setCommitteeMembers] = useState(loadedData);
    return (
        <div className='w-[90%] mx-auto my-5'>
            <h1 className='mt-3 mb-11 lg:text-3xl text-md font-semibold text-blue-500 text-center'>Committee Members Info</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-8'>
                {
                    committeeMembers.map(member => <div key={member._id} className='w-full max-w-sm rounded-xl overflow-hidden shadow-xl bg-white'>
                        <div className='profile-card h-24 relative'>
                            <div className='absolute -bottom-12 left-1/2 transform -translate-x-1/2'>
                                <img
                                    src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                                    alt='Profile'
                                    className='w-24 h-24 rounded-full border-4 border-white bg-white'
                                />
                            </div>
                        </div>

                        <div className='mt-16 text-center px-6 pb-6'>
                            <h2 className='text-xl font-bold text-gray-800'>Suprio Das</h2>
                            <p className='text-sm text-gray-500'>Designation: IT Secretary</p>
                            <p className='text-sm text-gray-500'>Batch: 28 D</p>
                            <p className='text-sm text-gray-500'>ID: CSE 028 07546</p>
                            <p className='text-sm text-gray-500'>Phone:
                                01610243375
                            </p>

                            <div className='mt-6 flex gap-4 justify-center'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-lg transition'>
                                    Update
                                </button>
                                <button className='bg-red-500 hover:bg-red-600 text-white cursor-pointer px-4 py-2 rounded-lg transition'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CommitteeMembers;