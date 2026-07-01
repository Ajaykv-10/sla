import { useEffect, useState } from "react"


const App = () => {

const [datasShow,setDatasShow] = useState([])
const [search,setSearch] = useState("")
const[category,setCategory] = useState("")
const [catData,setCatData] = useState([])


const fetchData = async()=>{
// step 1 - using Fatch function to take the responce data
const dataFetch = await fetch("https://dummyjson.com/products?limit=8")
const res = await dataFetch.json()
setDatasShow(res.products)
console.log(res.products);
const categories = [...new Set(res.products.map((e)=>e.category))]
setCatData(categories)
}


useEffect(()=>{
  fetchData()
},[])


const searchfun = (e)=>{
setSearch(e.target.value)
}

const filtercat = (e)=>{

setCategory(e.target.value)
}
console.log("category",category);
const filterData =search? datasShow.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase())): datasShow
const catFilteredData =category? filterData.filter((e)=>e.category.toLowerCase()===(category.toLowerCase())): filterData


  return (
   <>
  
     <h1>Search Process</h1>
    <div className="bg-amber-100 p-10 h-full">
    <div className="mb-10 mx-8 flex gap-4">
      <input type="text" onChange={searchfun} className="bg-white border w-100 p-1 rounded" placeholder="Enter the Product Search" />
      <select onChange={filtercat} className="bg-white border w-100 p-1 rounded">
        <option value="" selected>Select cat</option>
        {["beauty","fragrances"].map((e,i)=>(
           <option value={e} key={i}>{e}</option>
        ))}
      </select>
      </div>   
   <div className="flex gap-10 flex-wrap justify-center items-center">
       {catFilteredData.length > 0 ? catFilteredData.map((e,i)=>(

        <div key={i+1} className="bg-white text-black p-2 w-80 h-60 rounded">
          {/* <img src={e.images} /> */}
          <h1>{e.title}</h1>
          <p className="mb-15">{e.category}</p>
          <button className="bg-blue-700 text-white p-1 w-25 rounded">Buy Now</button>
        </div>

      )):"No Result Found"}
   </div>
        
    </div>


   </>
  )
}

export default App