import React, { useState } from "react";
import { addJob } from "../api"; 

const Reg = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare data for backend
    const newJob = {
      title: jobTitle,
      description,
      contact
    };

    // Call backend
    const result = await addJob(newJob);

    if (result) {
      alert("Job Posted Successfully");
      setJobTitle("");
      setDescription("");
      setContact("");
    } else {
      alert("Failed to post job. Try again.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Post Job</h2>

        {/* Job Title */}
        <label style={styles.label}>Job Title</label>
        <select
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
          style={styles.select}
        >
          <option value="">Select Job</option>
          <option value="Electrician">Electrician</option>
          <option value="Plumber">Plumber</option>
          <option value="Driver">Driver</option>
          <option value="Cleaner">Cleaner</option>
        </select>

        {/* Job Description */}
        <label style={styles.label}>Job Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={styles.textarea}
        />

        {/* Contact */}
        <label style={styles.label}>Contact Number</label>
        <input
          type="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #020617, #0f172a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#020617",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
  },
  heading: {
    color: "#fff",
    textAlign: "center",
    marginBottom: "20px"
  },
  label: {
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "6px",
    display: "block"
  },
  select: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    backgroundColor: "#020617",
    color: "#fff",
    border: "1px solid #1e293b",
    marginBottom: "18px"
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    backgroundColor: "#020617",
    color: "#fff",
    border: "1px solid #1e293b",
    marginBottom: "18px"
  },
  textarea: {
    width: "100%",
    padding: "12px",
    height: "90px",
    borderRadius: "6px",
    backgroundColor: "#020617",
    color: "#fff",
    border: "1px solid #1e293b",
    marginBottom: "18px",
    resize: "none"
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default Reg;
