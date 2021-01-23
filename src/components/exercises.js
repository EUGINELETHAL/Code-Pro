import React, {useEffect, useState } from "react";
import AceEditor from "react-ace";
import { Button } from 'react-bootstrap';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-solarized_dark";
import TimeoutExample from  './timer';



// Render editor
export default function Exercise() { 

  const [exercises, setExercises] = useState('')
  const [currentid, setId]= useState(0)
  const [value, setValue] = useState("")
  function onChange(newValue) {
    console.log("change", newValue);
     setValue(newValue);
     console.log(newValue);
  
      }
  
  function getExercises() {
    const exercises = [
      {
      id: 0,
      body: `Define a function called sum that takes
      two integers as arguments and returns their sum.`,
      seconds: 60 
      },
      {
      id: 1,
      body: `Define a function called reverse that takes a string
      as an argument and returns the string in reversed order.`
      },
      {
      id: 2,
      body: `Define a function called factorial that takes a random
      number as an argument and then returns the factorial of that
      given number.`,

      
      }
      ];
    setExercises(exercises);
  }
  
  
  useEffect(() => {
    let exercises = getExercises();
 
   
   
    },[]);
    
   
	return (
	  <><TimeoutExample/>
	    <h1>Exercises</h1>
	  <hr/><br/>
		{exercises.length &&
	
    <div key={exercises[currentid].id}>
    <h4>{exercises[currentid].body}</h4></div>
		}
	    <AceEditor
	    mode="java"
	    theme="solarized_dark"
	    onChange={onChange}
	    name="UNIQUE_ID_OF_DIV"
	    editorProps={{ $blockScrolling: true }}
	    fontSize={14}
	    height={'375px'}
	    showPrintMargin={true}
	    showGutter={true}
	    highlightActiveLine={true}
	    onChange={onChange}
	    style={{marginLeft:'700px',
	   }}
	  /> <Button onClick={() => setId(currentid + 1)}variant="dark" bsSize="small">Run Code</Button>
	  <br/><br/> 
    </>
	);
}

	 
