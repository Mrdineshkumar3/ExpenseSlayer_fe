import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import design from './images/design.png'
import katana from './images/Katana da Kimiko.png'
import axios from 'axios';
import load from './images/Demon_Slayer_(3)3 1.png'

function Home() {
    const usenavigate = useNavigate()
    // const [filterone,setFilterone] = useState('dummy')
    // console.log(import.meta.env.VITE_REACT_APP_BACKEND_BASEURL)
    const [array,setArray] = useState([])
    axios.post( `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/collectall`).
    then(res=>{setArray(res.data)})
    .catch(err => console.log(err))

    const reversed = array.map((_, index, array) => array[array.length - 1 - index]);
    const [create,setCreate]=useState(true)
    const [title,setTitle] = useState()
    const totalamount = 0;
    const newaccount = () =>{
        axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/newaccount`,{title,totalamount})
        .then(res => {console.log(res);setCreate(!create);setTitle('')})
        .catch(err => console.log(err))
    }
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false)
  },1400)
  
    },[])
  return (
    <div className='bgz'>
        {array.length == 0 && <div className='w-[100%] h-[100vh] flex items-center justify-center fixed z-[60] bg-[black]'>
                       <div className='flex items-center justify-center gap-3 flex-col'>
                           <img src={load} alt="" className='mr-5'/>
       
       
                           <div className="spinner">
                               <span>L</span>
                               <span>O</span>
                               <span>A</span>
                               <span>D</span>
                               <span>I</span>
                               <span>N</span>
                               <span>G</span>
                           </div>
                       </div>
                   </div>
       
                   }
       
        <div className={`fixed z-30 h-[100vh] w-[100%] ${create?'hidden':'flex'}     items-center justify-center blurex`}>
            <div className='flex flex-col bg-[#c7ebfa6b] items-center justify-center border p-3  '>
                <img src={katana} alt="" className='w-[250px]' onClick={()=>{setCreate(!create)}} />
                <input type="text" value={title}  onChange={(e)=>{setTitle(e.target.value)}} id='title' className='w-[400px] max-sm:w-[320px] font-[600] tracking-widest mb-4 inn bg-[white] text-[#ff922c] text-center text-[19px] capitalize h-[50px] border-2 border-[white] my-2' />
                {/* <button className='bg-[#0f0f6c] text-white px-6 py-1 my-4' >C R E A T E</button> */}

                <button type="button" onClick={()=>{
                    newaccount()
                }} className="btn">
               <strong>C R E A T E</strong>
                  <div id="container-stars">
                  <div id="stars"></div>
                     </div>

               <div id="glow">
                 <div className="circle"></div>
                 <div className="circle"></div>
                 </div>
               </button>

            </div>
        </div>
        <div className='absolute w-[100%]    text-center  bottom-4  '>
         {/* <button className='w-[500px] h-[50px] text-white  bg-blue-800' > Add new Sheet</button>  */}
        
<button className='button10' onClick={()=>{setCreate(!create)}}>
    CREATE  NEW  SHEET
    <div id="clip">
        <div id="leftTop" className="corner"></div>
        <div id="rightBottom" className="corner"></div>
        <div id="rightTop" className="corner"></div>
        <div id="leftBottom" className="corner"></div>
    </div>
    <span id="rightArrow" className="arrow"></span>
    <span id="leftArrow" className="arrow"></span>
</button>
        </div>
       <div className=' flex flex-wrap max-sm:items-center max-sm:justify-center  gap-3  w-[100%] p-3'>
 {reversed.map((item,index)=>{
        return<>
        <div key={index} className='bg-[#82c4f171] border-[3px]  border-[white] cc max-sm:w-[160px] max-sm:h-[200px]  w-[200px] relative  h-[250px] rounded-lg overflow-hidden flex flex-col cursor-pointer' onClick={()=>{
            // usenavigate('/content')
            // setFilterone(item.title)
            const filterone=item.title;
            console.log(filterone)
            
  axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/filteronez`,{filterone}).
            then(data=> {console.log(data.data);usenavigate('/content')})
            .catch(err => console.log(err))
            
          
        }}>
            <div className='absolute  '>
                <img src={design} alt="" className='w-[200px] h-[250px] left-[-20px]'/>

            </div>

            <h2 className='text-right pr-3 max-sm:text-[14px] mt-[35px] font-[500] patua-one-regular text-[white] capitalize'>{item.title}</h2>
            <div className=' flex  flex-col mt-[30px] pl-3 '>
             <p className='text-[white] text-[8px] '>Total Expenses</p>
            <p className=' text-[25px] font-[800] text-[white]'>₹ {item.totalamount}</p>
            </div>
           
        </div>
        </>
    })}
       </div>
   
    </div>
  )
}

export default Home