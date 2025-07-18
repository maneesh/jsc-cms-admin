'use client';

import { useState } from 'react';
import CardHeading from './CardHeading';
import CardData from './CardData';

export default function EditableCard() {
    const sectionOptions = [
        'Navbar',
        'Banner',
        'HeroSection',
        'ToolSection',
        'SecondTool',
        'BecomeChampion',
        'GlobalClient',
        'Talents',
        'Footer',
    ];

    const [section, setSection] = useState(sectionOptions[0]);
    const [heading, setHeading] = useState('');
    const [data, setData] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    const handleSend = () => {
        setIsEditing(false);

        const payload = {
            id: 'abc123',
            section,
            heading,
            data,
        };

        console.log('Payload to send:', payload);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="max-w-xl w-full mx-auto bg-white shadow-xl rounded-2xl p-6 mt-10">
            {/* Section Dropdown */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Section</label>
                <select
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    disabled={!isEditing}
                >
                    {sectionOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            {/* Heading */}
            <CardHeading
                heading={heading}
                setHeading={setHeading}
                isEditing={isEditing}
            />

            {/* Data */}
            <CardData
                data={data}
                setData={setData}
                isEditing={isEditing}
            />

            {/* Buttons */}
            <div className="text-right">
                {isEditing ? (
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
                        onClick={handleSend}
                    >
                        Send
                    </button>
                ) : (
                    <button
                        className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-md"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
}
