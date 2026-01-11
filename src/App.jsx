import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()

    const copyTask=[...task]
     copyTask.push({title,details})
     setTask(copyTask)

    // console.log(title,details)
    setTitle('')
    setDetails('')
  }
    const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white ' >
     <form onSubmit={(e)=>{
      submitHandler(e)
     }} className=' p-10 lg:w-1/2  flex flex-col gap-4 ' >
      <h1 className='text-3xl font-bold'>Add Notes</h1>
      <input value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
       type="text"
        placeholder='Enter Task Heading'
        className='px-5 py-2 w-1/2 border-2 rounded ' />
      <textarea value={details}
      onChange={(e)=>{
        setDetails(e.target.value)
      }}
       placeholder='Enter task Details'
        name=""
         id="" className='px-5 h-20 w-1/2 py-2 border-2 rounded'>


         </textarea>
         <button className='bg-white w-1/2 text-black px-5 py-2 rounded'>
          Add Note
         </button>

     </form>
     <div className='p-10  lg:w-1/2   lg:border-l-2  bg-black h-full '>
     <h1 className='text-3xl font-bold'>Recent Notes</h1>
     <div  className='flex flex-wrap gap-5 mt-5  overflow-auto ' >
      {task.map(function(elem,idx){
             return <div key={idx} className=" overflow-auto bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaQI1jG-YPWLOsB8Du-q5WQ7m8qBJWblLWkH5byoUhg&s')] text-black h-52 w-40  rounded-2xl bg-cover  flex flex-col items-start relative justify-between "><div className='py-2 px-3'><h1 className='font-bold text-2xl'>{elem.title}</h1><p>{elem.details}</p>
             </div> 
             <div className='w-1/2 ml-10'>
              <button onClick={() => {
                deleteNote(idx)
              }} className=' cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white mb-1  w-full '>Delete</button>
             </div>
              </div>
     })}
       
     </div>
     </div>
    </div>
  
  )
}

export default App
