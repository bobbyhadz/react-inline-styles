import './App.css';

const App = () => {
  const stylesObj = {
    backgroundColor: 'lime',
    color: 'white',
  };

  const elementWidth = 150;

  return (
    <div>
      {/* 👇️ Set inline styles directly */}
      <div style={{backgroundColor: 'salmon', color: 'white'}}>
        Some content
      </div>

      <br />

      {/* 👇️ Set inline styles using an object variable */}
      <div style={stylesObj}>Some content</div>

      <br />

      {/* 👇️ Set inline styles conditionally using a ternary */}
      <div
        style={{
          backgroundColor:
            'hi'.length === 2 ? 'violet' : 'mediumblue',
          color: 'hi'.length === 2 ? 'white' : 'mediumpurple',
        }}
      >
        Some content
      </div>

      <br />

      {/* 👇️ Set inline styles interpolating a variable into a string */}
      <div
        style={{
          width: `${elementWidth}px`,
          backgroundColor: 'salmon',
          color: 'white',
        }}
      >
        Some content
      </div>
    </div>
  );
};

export default App;
