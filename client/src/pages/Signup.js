import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({ name: '', username: '', email: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Send signup data to backend
    alert('Signup submitted!');
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required style={{ width: '100%', marginBottom: 10 }} />
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required style={{ width: '100%', marginBottom: 10 }} />
        <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required style={{ width: '100%', marginBottom: 10 }} />
        <button type="submit" style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}>Signup</button>
      </form>
      <hr />
      <button onClick={() => window.location.href = '/login'} style={{ width: '100%', padding: '0.5rem', fontSize: '1rem', marginTop: 10 }}>Login</button>
    </div>
  );
};

export default Signup;
