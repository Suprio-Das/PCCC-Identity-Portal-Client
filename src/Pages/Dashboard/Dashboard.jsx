import React, { useState, useEffect } from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
    const studentData = useLoaderData();
    const [digitsOnly, setDigitsOnly] = useState('');
    const [focused, setFocused] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [matchedStudent, setMatchedStudent] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(-1);

    const fullInput = `CSE ${digitsOnly}`;

    useEffect(() => {
        if (!digitsOnly) {
            setSuggestions([]);
            setMatchedStudent(null);
            setNotFound(false);
            setHighlightIndex(-1);
            return;
        }

        const exactMatch = studentData.find(student => student?.StudentId === fullInput);

        if (exactMatch) {
            setMatchedStudent(exactMatch);
            setSuggestions([]); // ✅ Don't show others
            setHighlightIndex(-1);
            setNotFound(false);
        } else {
            const filtered = studentData.filter(student =>
                student?.StudentId?.startsWith(fullInput)
            );
            setSuggestions(filtered);
            setMatchedStudent(null);
            setHighlightIndex(filtered.length > 0 ? 0 : -1);
            if (digitsOnly.length >= 4) setNotFound(true);
            else setNotFound(false);
        }
    }, [digitsOnly]);

    const handleInputChange = (e) => {
        const rawValue = e.target.value;
        const numericPart = rawValue.replace(/^CSE\s*/, '');
        const onlyDigits = numericPart.replace(/\D/g, '');
        setDigitsOnly(onlyDigits);
    };

    const handleKeyDown = (e) => {
        if (suggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            setHighlightIndex((prev) => (prev + 1) % suggestions.length);
        } else if (e.key === 'ArrowUp') {
            setHighlightIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
        } else if (e.key === 'Enter' && highlightIndex >= 0) {
            const selected = suggestions[highlightIndex];
            setDigitsOnly(selected.StudentId.replace('CSE ', ''));
            setSuggestions([]);
        }
    };

    const highlightMatch = (text) => {
        const match = fullInput;
        const before = text.slice(0, match.length);
        const after = text.slice(match.length);
        return (
            <span>
                <span className='font-semibold text-blue-600'>{before}</span>
                <span>{after}</span>
            </span>
        );
    };

    return (
        <div className='min-h-[calc(100vh-130px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4'>
            <div className='w-full max-w-md p-8 bg-white shadow-xl rounded-2xl'>
                <h2 className='text-2xl font-bold text-center text-blue-500 mb-6'>Identify Student by ID</h2>

                <input
                    type='text'
                    value={focused ? fullInput : digitsOnly}
                    onChange={handleInputChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => {
                        setFocused(false);
                        setSuggestions([]);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder='Type the id number only'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 font-mono'
                />

                {suggestions.length > 0 && (
                    <ul className='bg-white mt-2 rounded-lg border border-gray-200 shadow-sm overflow-y-auto max-h-60'>
                        {suggestions.map((student, index) => (
                            <li
                                key={student.StudentId}
                                className={`px-4 py-2 cursor-pointer transition duration-200 ${index === highlightIndex ? 'bg-blue-100 font-medium' : 'hover:bg-blue-50'}`}
                                onMouseDown={() => setDigitsOnly(student.StudentId.replace('CSE ', ''))}
                            >
                                {highlightMatch(student.StudentId)}
                            </li>
                        ))}
                    </ul>
                )}

                {matchedStudent && (
                    <div className='mt-5 p-4 bg-green-50 border border-green-300 rounded-lg text-green-700'>
                        <p className='font-semibold flex items-center gap-1'><RiVerifiedBadgeFill /> Student Found: {matchedStudent.Name}</p>
                        <button className='btn mt-3 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'>
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
