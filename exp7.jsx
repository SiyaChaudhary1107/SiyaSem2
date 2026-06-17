import React from "react";
import "./style.css";

function App(){

const students = [
{ name:"Rahul Sharma", course:"Computer Science", marks:85 },
{ name:"Anita Verma", course:"Information Technology", marks:92 },
{ name:"Rohan Gupta", course:"Electronics", marks:78 }
];

return(
<div className="container">

<h2>Student Information</h2>

{students.map((s,index)=>(
<div className="card" key={index}>
<h3>{s.name}</h3>
<p>Course: {s.course}</p>
<p>Marks: {s.marks}</p>
</div>
))}

</div>
);

}

export default App;