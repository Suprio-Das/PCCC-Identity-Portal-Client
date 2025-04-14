import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CommitteeMembers = () => {
    const loadedData = useLoaderData();
    const [committeeMembers, setCommitteeMembers] = useState(loadedData);
    return (
        <div>
            This is committee members page.
        </div>
    );
};

export default CommitteeMembers;