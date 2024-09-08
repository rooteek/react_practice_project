import ShowData from './COmponents/ShowData'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './COmponents/Navbar/Navbar';
import InsertData from './COmponents/InsertData';
function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/insert">
          <InsertData />
        </Route>
        <Route path='/showdata'>
          <ShowData />
        </Route>
      </Switch>
    </>
  )
}

export default App
