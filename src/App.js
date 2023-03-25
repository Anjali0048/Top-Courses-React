import React, { useState } from "react";
import { toast } from "react-toastify";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData} from "./data";
import { useEffect } from "react";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("something went wrong !");
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[])

  return(
    <div className="min-h-screen bg-bgDark2 flex flex-col">

      <div>
        <Navbar title={"Top Courses"}/>
      </div>

      <div className="bg-bgDark2">
        <Filter 
          filterData = {filterData} 
          category = {category}
          setCategory = {setCategory}
        />

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>) 
          }
        </div>

      </div>
      
    </div>
  ) 
};

export default App;
