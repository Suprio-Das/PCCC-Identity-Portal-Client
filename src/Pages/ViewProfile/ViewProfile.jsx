import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewProfile = () => {
    const { state } = useLocation();
    const matchedStudent = state?.matchedStudent;
    console.log(matchedStudent);
    return (
        <div>
            This is view profile page.
        </div>
    );
};

export default ViewProfile;