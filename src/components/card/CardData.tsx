import React from "react";

interface CardDataProps {
    data: string;
    setData: (value: string) => void;
    isEditing: boolean;
}

const CardData: React.FC<CardDataProps> = ({ data, setData, isEditing }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Data</label>
            <textarea
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                rows={4}
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Enter data"
                disabled={!isEditing}
            />
        </div>
    );
};

export default CardData;
