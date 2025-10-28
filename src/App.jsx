import { useState, useEffect } from 'react'
  import './App.css'

  function App() {
    const [git, setGit] = useState([]);
    const [user, setUser] = useState("VortexWanderer9")
    useEffect(() =>{ 
      fetchUser()
    }, [])
    const fetchUser = async () =>{
      try {
        const response = await fetch(`https://api.github.com/users/${user}`)
        if(!response.ok){
          throw new Error('Network Problem');          
        }
        const data = await response.json()
        setGit(data)
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <>
    <div className='bg-gradient-to-r from-cyan-400 to-fuchsia-400 flex flex-col items-center h-screen p-6'>
      <div>
        <img src="./light.png" alt="Light Mode" className='cursor-pointer' />
      </div>
      <div>
        <h2 className='text-center mt-3 font-bold text-2xl text-white'>Your Ultimate GitHub Profile</h2>
      </div>
      <div className='mt-6 border-2 border-cyan-700 p-5 rounded' >
      <div className='flex gap-4 items-center'>
        <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder='Enter Your Username' className='outline-none border-2 border-cyan-700 py-1 px-2 rounded font-bold w-full'/>
        <div className='font-bold hover:bg-amber-200 duration-1000 px-2 py-1 rounded cursor-pointer bg-amber-300' onClick={fetchUser}>
          <span>Search</span>
        </div>
      </div>

      <div className="profile mt-4 p-5 flex justify-center">
      <div className="image">
        <img src= {git.avatar_url ? git.avatar_url : "./profile.jpeg"} alt="Profile" className='rounded-full h-32 border-2 border-cyan-800' />
      </div>
      </div>
      <div>
          <h2 className='font-bold text-center'>{git.login}</h2>
      </div>
      <div className="details">
        <h2 className="name"> Name:<span className='text-indigo-700'>{git.name}</span></h2>
      <h2>Followers: <span className='text-indigo-700'>{git.followers}</span></h2>
      <h2>following: <span className='text-indigo-700'>{git.following}</span></h2>
      <h2>Bio: <span className='text-indigo-700'>{git.bio}</span></h2>
      <h2>Twitter: <span className='text-indigo-700'> {git.twitter_username ? git.twitter_username : "?"} </span></h2>
      <h2>Public_repos: <span className='text-indigo-700'> {git.public_repos} </span></h2>
            <h2>Email: <span className='text-indigo-700'>{git.email ? git.email : "?"}</span></h2>
                        <h2>Location: <span className='text-indigo-700'>{git.location ? git.location : "?"}</span></h2>
      
      <a  href= {git.html_url} className='text-gray-800 hover:text-gray-950 font-bold flex gap-6 items-center justify-center'>
        <span>GitHub Profile </span>
        <img src="./github-mark.svg" width= "30px" alt="" />
      </a>
      </div>
      </div>

    </div>
    </>
  ) 
  }

  export default App
