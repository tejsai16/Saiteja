
const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      backgroundSize: '400% 400%',
      animation: 'gradientBG 15s ease infinite',
      color: '#fff',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <style>{`
        @keyframes gradientBG {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
      `}</style>
      <div style={{ textAlign: 'center', marginTop: '6rem', background: 'rgba(0,0,0,0.4)', padding: '2rem', borderRadius: 12, display: 'inline-block' }}>
        <h1>Welcome to Saiteja's Website</h1>
        <p>Sample text. Replace this with your own content.</p>
        <img src="/logo192.png" alt="Sample" style={{ width: 120, margin: '1rem' }} />
      </div>
    </div>
  );
};

export default Home;
