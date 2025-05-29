import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';
import textjap from'./images/dskny-tanjiro-kamado-512x512 1.png'
import logojap from'./images/Demon_Slayer_(3)3 1.png'
function Security() {
  const [enter,setEnter] = useState('')
  console.log(enter)
  let value =''
  const enterinput = (keyinput)=>{
    value=enter+keyinput
   
    setEnter(value)
    }
    const usenavigate = useNavigate()
    useEffect(()=>{
     if(enter==='0020'){
      setTimeout(()=>{
usenavigate('/home')
      },100)
     
     }
    },[enter])
  return (
    <div className=' w-[100vw] h-[100vh] bg1   flex items-center justify-center'>
      
        <div className=' m-auto '>
        <div className='w-[700px] max-md:w-[400px] max-sm:w-[300px] glass h-[500px] max-sm:h-[450px] '>
            <div className='absolute bottom-0 p-5  flex'>
              <img src={logojap} alt="" className='max-sm:w-[50px] max-sm:h-[50px]' />
              <div>
 
                <div>
                  <p className='text-[#ffffff33] font-[600] p-4 max-sm:p-2 text-[12px] max-sm:text-[7px]'>どんなに惨めでも恥ずかしくても 生きてかなきゃならねえんだぞ,人の心の中に土足で踏みいるな,苦しくても、楽な方に逃げるな,兄ちゃんが絶対助けてやるからな！</p>
                </div>
                {/* <img src={textjap} alt="" className='w-[100px] absolute right-2 bottom-2'/> */}
              </div>
             
            </div>
            <div className='flex items-center justify-center p-4'>
                <input   type="text"
                        readOnly='true'
                  placeholder="Enter The Security Code"
                  required
                  maxLength={4}
                  value={enter}
                  onChange={(e)=>{setEnter(e.target.value)}}

                className='border-purple-500 tracking-widest rounded-md text-[#271d55] font-[700] bg-[white]  w-[500px] h-[50px] outline-none text-center m-auto [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none' />
            </div>
            <div className='grid grid-cols-3 gap-4 p-6 max-sm:p-4'>
              <div>
                <button onClick={()=>enterinput('1')} className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>1</button>
              </div>
              <div>
                <button onClick={()=>enterinput('2')}  className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>2</button>
              </div>
              <div>
                <button onClick={()=>enterinput('3')} className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>3</button>
              </div>
              <div>
                <button onClick={()=>enterinput('4')} className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>4</button>
              </div>
              <div>
                <button onClick={()=>enterinput('5')} className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>5</button>
              </div>
              <div>
                <button onClick={()=>enterinput('6')}  className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>6</button>
              </div>
              <div>
                <button onClick={()=>enterinput('7')}  className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>7</button>
              </div>
              <div>
                <button onClick={()=>enterinput('8')} className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>8</button>
              </div>
              <div>
                <button onClick={()=>enterinput('9')} className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>9</button>
              </div>
              <div>
                  <button onClick={()=>{
                    setEnter('')
                  }} className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>X</button>
              </div>
              <div>
                <button onClick={()=>enterinput('0')} className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'>0</button>
              </div>
              <div>
                  <button onClick={()=>{
                    setEnter(enter.slice(0,-1))
                  }} className='buttonglass w-[100%] h-[50px] font-bold text-white flex items-center text-center justify-center'><Icon icon="material-symbols-light:arrow-back-2" width="34" height="34" /></button>
              </div>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Security