import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // URL to fetch from - backend server must be running
  const feed = new URL('http://localhost:8080/');
  var items = "";
  
  // Hooks to get data 
  const [data, setData] = useState({});
  const getData = async()=>{
  }
  
  // Get data from URL response
  // Should await here, but does not work for some reason 
  useEffect(() =>{
    try {
      axios.get(feed)
      .then(function (response) {
        // success
        setData(response);
      })
    } catch (e) {
      console.error(e);
    }
    getData();
  }, []);

  return (
    <>
      {(data) => {
        // Check if data is valid
        while (!data) {
          <div className="App">
            <div id="flex">
              {
                // Sets items to the array of items 
                items = data.data.items
              }
              {
                // Make an image for each item in the array
                items.forEach((item, index) => {
                  <img src={item.m} alt="" />
                })
              }
            </div>
          </div>
        }
      }}
    </>
  );

  // Ran out of time to do have the search 
  // Get string from text box on button click
  // Loop through the items and compare to tags
  // Display images while inside the loop

  // Testing the grid if it works 
  // const image = "https://live.staticflickr.com/65535/52315390317_9209ae7cc4_m.jpg";
  // return (
  //   <div className="App">
  //     <div id="flex">
  //       <img src={image} alt="" />
  //       <img src={image} alt="" />
  //       <img src={image} alt="" />
  //       <img src={image} alt="" />
  //       <img src={image} alt="" />
  //       <img src={image} alt="" />
  //     </div>
  //   </div>
  // );
}

export default App;
