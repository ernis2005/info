import React from "react";
import { useState ,useEffect} from "react";
import {fetchTodos, deleteTodo, addNeweTodo} from "../store/reducers/pizza.reducers"
import "../App.css";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
function Locak() {
   const {status, error} =useSelector(state=>state.couter.todos);
   const todos =useSelector(state=>state.couter.todos)


  let   [text  , setText]= useState('')
  
  let add  = ()=>{
 if (text.trim().length){
  dispatch(addNeweTodo(text));
  setText('')
 }
  }
   
  let [res, ] = useState([{}]);
  const [first, setfirst] = useState(true);
  
    let returnFormData = JSON.parse(localStorage.getItem("mester"));
    if (!returnFormData) {
      returnFormData = [{ none: "none" }];
    }
    let remov = (remov) => {
      localStorage.removeItem(remov);
    };
    let removv = (remov) => {
      localStorage.clear("mester", [{remov}]);
    };
    let dispatch = useDispatch();
    const Usernnn = (name) => {
      let countries = JSON.parse(localStorage.getItem("mester"));
      if (!countries) {
        countries = [];
      }
      if (countries.length) {
        countries.filter((item) => item.name !== name.name);
        countries.push(name);
      } else {
        countries.push(name);
      }
      localStorage.setItem("mester", JSON.stringify(countries));
    };
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch]);
 
  
  const [ currentPage, setCurrentPage] = useState(1)
  let [ counteriesPerPage]=  useState(9)
  const lastCountryIndex = currentPage * counteriesPerPage
  const  firstCounteryIndex = lastCountryIndex- counteriesPerPage;
  const  currentCounter = todos.slice(firstCounteryIndex,lastCountryIndex);
  const paginate = pages=>setCurrentPage(pages)

  return (
    <>
     <input type="text"  value={text} onChange={(e) => setText(e.target.value)} /> <button onClick={()=>add()}> +</button>
      <div className="card">

<div className={first ? "bbtn" :"btn"}>
  <p>{returnFormData[0].none}</p>
  {returnFormData.map((res) => {
    return (
      <div key={res}>
        <h1>{res.title}</h1>
        <button onClick={() => remov(res)}> {res.title}</button>
      </div>
    );
  })}
  <button onClick={() => removv(res)}>удалить вео</button>
</div>
{status === 'loading ' && <h2>loading</h2>}
{error &&  <h2> an error occerd:{error}</h2>}
{currentCounter.map((res, index) => {
  return (
    <div key={index}>
      <div className="cards">
        {/* <img className="img" src={res.flag} alt="" /> */}
        <h1>{res.title}</h1>

<button   onClick={() => dispatch(deleteTodo(res.id))}> удалить </button> 
        <button onClick={() => Usernnn(res)}>? {res.title}</button>
      </div>
    </div>
  );
})} 
<button className="button" onClick={() => setfirst(!first)}>
  hello
 </button>

 <Pagination className="Pagination" currentPege={counteriesPerPage} totalCount={todos.length} paginate={paginate}/> 
<h1>hello</h1>
<dialog >
  <h1>helo</h1>
  <p>Lorem ipsum dolor sit amet.</p>
</dialog>
</div>
    </>
  
  );
}
export default Locak;
