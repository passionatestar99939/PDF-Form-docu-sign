// import React from "react";
// import AppContent from "./containers/AppContent";
// import HomePage from "./containers/HomePage";
// import Router from "./router";
// import Operation from "./components/Operation";

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <Router />
//     </div>
//   );
// }

// export default App;

import React from 'react';
// import './styles.css';

const App = () => {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div
        style={{
          border: '1px solid red',
        }}
        ref={ref}
      >
        Width: {width}
      </div>
    </div>
  );
};

export default App;
