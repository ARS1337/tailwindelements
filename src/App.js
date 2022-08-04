import { useContext } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import Test from "./components/Test";
import  {MyContext, state} from "./ContextStore";

function App() {
  const storeContext = useContext(MyContext);
  console.log("storeContext app ", storeContext);
  return (
    <MyContext.Provider value={state}>
      <div className="w-full flex flex-col space-y-4 items-center justify-start min-h-[100vh] bg-slate-100 overflow-hidden ">
        <div className="w-5/6">
          <Accordion />
        </div>
        <div className="w-5/6">
          <DropDown />
        </div>
        <div className="w-5/6">
          <Test />
        </div>
      </div>
     </MyContext.Provider>
  );
}

export default App;
