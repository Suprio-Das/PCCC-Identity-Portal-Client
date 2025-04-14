import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CommitteeMembers = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    return (
        <div>
            This is committee members page.
        </div>
    );
};

export default CommitteeMembers;