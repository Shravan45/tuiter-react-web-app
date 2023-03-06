import Labs from "./labs/a6";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TodoList from "./labs/a6/todo/todo-list";

function App() {
   return (
    <BrowserRouter>
      <div className="container">
      <Routes>
          <Route index
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          <Route path="/tuiter/*"
                 element={<Tuiter/>}/>
              <Route path="/todos"
                 element={<TodoList/>}/>
        </Routes>

      </div>
    </BrowserRouter>
   );
}

export default App;