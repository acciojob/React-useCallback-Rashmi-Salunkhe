import React, { useCallback, useState } from 'react'
import SkillList from './SkillList'

const App = () => {
    const [input, setInput]= useState("");
    const [skills, setSkills] =useState(["HTML","CSS","JavaScript", "React"]);
    const addSkills= useCallback((e)=>{
        e.preventDefault();
        if(input && !skills.includes(input)){
            setSkills([...skills, input]);

        }
        setInput("");
    },[input,skills]);

    const deleteSkill = useCallback(
        (skill)=>{
            setSkills(skills.filter((s)=>s!=skill));
        },
        [skills]
    );

  return (
    <div>
        <form onSubmit={addSkills}>
          <h1 id='heading'>Skills List</h1>
          <input 
            id='skill-input'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
          <button id='skill-add-btn'>Add Skill</button>
        </form>

        <SkillList skills={skills} deleteSkill={deleteSkill}/>
    </div>
  )
}

export default App
