import React, { useState, useEffect } from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";

const studentData = [
    { id: 'CSE 02807546', name: 'Alex' },
    { id: 'CSE 02807547', name: 'Duplex' },
    { id: 'CSE 02807548', name: 'Half-Duplex' },
    { id: 'CSE 02807549', name: 'Full-Duplex' },
    { id: 'CSE 02707549', name: 'Full-Duplex' },
];

const Dashboard = () => {
    const [digitsOnly, setDigitsOnly] = useState('');
    const [focused, setFocused] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [matchedStudent, setMatchedStudent] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const fullInput = `CSE ${digitsOnly}`;

    useEffect(() => {
        if (!digitsOnly) {
            setSuggestions([]);
            setMatchedStudent(null);
            setNotFound(false);
            return;
        }

        const filtered = studentData.filter(student =>
            student.id.startsWith(fullInput)
        );
        setSuggestions(filtered);

        const exactMatch = studentData.find(student => student.id === fullInput);
        if (exactMatch) {
            setMatchedStudent(exactMatch);
            setNotFound(false);
        } else {
            setMatchedStudent(null);
            if (digitsOnly.length >= 4) setNotFound(true);
        }
    }, [digitsOnly]);

    const handleInputChange = (e) => {
        const rawValue = e.target.value;
        const numericPart = rawValue.replace(/^CSE\s*/, '');
        const onlyDigits = numericPart.replace(/\D/g, '');
        setDigitsOnly(onlyDigits);
    };

    return (
        <div className='min-h-[calc(100vh-70px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4'>
            <div className='w-full max-w-md p-8 bg-white shadow-xl rounded-2xl'>
                <h2 className='text-2xl font-bold text-center text-blue-500 mb-6'>Identify Student by ID</h2>

                <input
                    type='text'
                    value={focused ? fullInput : digitsOnly}
                    onChange={handleInputChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder='Type the id number only'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 font-mono'
                />

                {suggestions.length > 0 && (
                    <ul className='bg-white mt-2 rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
                        {suggestions.map(student => (
                            <li
                                key={student.id}
                                className='px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors duration-200'
                                onMouseDown={() => setDigitsOnly(student.id.replace('CSE ', ''))}
                            >
                                {student.id}
                            </li>
                        ))}
                    </ul>
                )}

                {matchedStudent && (
                    <div className='mt-5 p-4 bg-green-50 border border-green-300 rounded-lg text-green-700'>
                        <p className='font-semibold flex items-center gap-0.5'><RiVerifiedBadgeFill /> Student Found: {matchedStudent.name}</p>
                        <button className='btn mt-3 w-full bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition'>
                            View Details
                        </button>
                    </div>
                )}

                {notFound && (
                    <p className='mt-5 text-red-600 font-medium text-center'>❌ Student Not Found</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
