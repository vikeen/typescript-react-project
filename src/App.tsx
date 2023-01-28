import * as React from 'react'
import FirstComponent from './components/FirstComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} />
    </div>
  );
}

export default App;
