import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewProfile = () => {
    const { state } = useLocation();
    const matchedStudent = state?.matchedStudent;

    if (!matchedStudent) {
        return <p className='text-center mt-10 text-red-600'>No student data found</p>;
    }

    return (
        <div className='min-h-[calc(100vh-130px)] flex items-center justify-center px-4'>
            <div className='w-full max-w-sm rounded-xl overflow-hidden shadow-xl bg-white'>
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
                    <h2 className='text-xl font-bold text-gray-800'>{matchedStudent.Name}</h2>
                    <p className='text-sm text-gray-500'>{matchedStudent.Batch}</p>
                    <p className='text-sm text-gray-500'>{matchedStudent.StudentId}</p>
                    <p className='text-sm text-gray-500'>
                        {matchedStudent.ContactNo === 'null' ? 'Not Found' : matchedStudent.ContactNo}
                    </p>

                    <div className='mt-6 flex gap-4 justify-center'>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition'>
                            Update
                        </button>
                        <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition'>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
