import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewProfile = () => {
    const { state } = useLocation();
    const matchedStudent = state?.matchedStudent;
    console.log(matchedStudent);
    return (
        <div className='min-h-[calc(100vh-130px)] flex items-center justify-center'>
            <div className='profile-card max-w-md p-5'>
                <h1>Name: {matchedStudent.Name}</h1>
            </div>
        </div>
    );
};

export default ViewProfile;