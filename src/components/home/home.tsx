"use client";
import { useState } from "react";

interface HomePageContent {
  title: string;
  description: string;
}

const defaultContent: HomePageContent = {
  title: "Welcome to My Website",
  description: "This is a sample home page built with Next.js and TypeScript.",
};

export default function Home() {
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState<HomePageContent>(defaultContent);
  const [formContent, setFormContent] = useState<HomePageContent>(defaultContent);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setContent(formContent);
    setEditMode(false);
  };

  return (
    <div className="container" style={{ padding: "2rem" }}>
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? "Cancel Edit" : "Edit Content"}
      </button>

      {editMode ? (
        <div style={{ marginTop: "1rem" }}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formContent.title}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <label>Description:</label>
            <textarea
              name="description"
              value={formContent.description}
              onChange={handleInputChange}
              rows={5}
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <button onClick={handleSave} style={{ marginTop: "1rem" }}>
            Save
          </button>
        </div>
      ) : (
        <div style={{ marginTop: "2rem" }}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
      )}
    </div>
  );
}
