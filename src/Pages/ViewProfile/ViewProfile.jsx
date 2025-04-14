import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewProfile = () => {
    const { state } = useLocation();
    const matchedStudent = state?.matchedStudent;
    console.log(matchedStudent);
    return (
        <div className='min-h-[calc(100vh-130px)] flex items-center justify-center'>
            <h1>Student Name: {matchedStudent.Name}</h1>
        </div>
    );
};

export default ViewProfile;