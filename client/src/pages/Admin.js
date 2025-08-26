import React, { useState } from 'react';

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const [files, setFiles] = useState([]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = e => {
    e.preventDefault();
    // TODO: Send login data to backend
    if (form.username === 'saiteja.muddasani' && form.password === 'Breweries@2025') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleFileChange = e => {
    setFiles([...e.target.files]);
  };

  const handleUpload = () => {
    // TODO: Upload files to backend
    alert('Files uploaded!');
  };

  const handleDelete = idx => {
    // TODO: Delete file from backend
    setFiles(files.filter((_, i) => i !== idx));
  };

  if (!loggedIn) {
    return (
      <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required style={{ width: '100%', marginBottom: 10 }} />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{ width: '100%', marginBottom: 10 }} />
          <button type="submit" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <input type="file" multiple onChange={handleFileChange} style={{ marginBottom: 10 }} />
      <button onClick={handleUpload} style={{ marginBottom: 20 }}>Upload</button>
      <div>
        <h3>Uploaded Files</h3>
        <ul>
          {files.map((file, idx) => (
            <li key={idx} style={{ marginBottom: 8 }}>
              {file.name}
              <button onClick={() => handleDelete(idx)} style={{ marginLeft: 10 }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
