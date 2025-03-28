import axios from "axios";
import { useState, useEffect } from "react";

const Search = () => {
  const [inpdata, setInpData] = useState(""); // Controlled input
  const [data, setData] = useState([]);

  // Load all students initially
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/Students`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/Students?q=${inpdata}`);
      setData(res.data);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  };

  return (
    <>
      <center>
        <h1>This Is Search Component</h1>
        <hr />

        {/* Controlled input */}
        <input
          type="text"
          placeholder="Search By Names"
          value={inpdata}
          onChange={(e) => setInpData(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {/* Display Results */}
        <ul>
          {data.length > 0 ? (
            data.map((student) => <li key={student.id}>{student.name}</li>)
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </center>
    </>
  );
};

export default Search;
