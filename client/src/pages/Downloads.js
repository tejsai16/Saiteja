import React, { useEffect, useState } from 'react';

const Downloads = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/admin/files')
      .then(res => res.json())
      .then(data => setFiles(data.files || []));
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 20 }}>
      <h2>Downloads</h2>
      <ul>
        {files.length === 0 && <li>No files uploaded yet.</li>}
        {files.map((file, idx) => (
          <li key={idx}>
            <a href={`http://localhost:5000/uploads/${file}`} download>{file}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Downloads;
