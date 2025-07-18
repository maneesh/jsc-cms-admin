import React from "react";

interface CardHeadingProps {
    heading: string;
    setHeading: (value: string) => void;
    isEditing: boolean;
}

const CardHeading: React.FC<CardHeadingProps> = ({ heading, setHeading, isEditing }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Heading</label>
            <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                placeholder="Enter heading"
                disabled={!isEditing}
            />
        </div>
    );
};

export default CardHeading;
