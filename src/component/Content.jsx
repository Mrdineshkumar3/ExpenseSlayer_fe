import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import '../App.css'
import { Icon } from "@iconify/react";
import load from './images/Demon_Slayer_(3)3 1.png'
function Content() {
    const [sam, setSam] = useState([])
    const [f1, setF1] = useState([])
    const [desc, setDesc] = useState()
    const [spend, setSpend] = useState('')
    useEffect(() => {
        axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/collectall`).
            then(res => {
                setSam(res.data)
            })
            .catch(err => console.log(err))
        axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/getfilter`).
            then(res => {
                setF1(res.data);

            })
            .catch(err => console.log(err))

    }, [])
    // console.log(f1,sam)
    const [fz1, setFz1] = useState()
    useEffect(() => {

        if (sam && Array.isArray(f1) && f1.length > 0) {
            const filtered = sam.filter((item, index) => item.title == f1[0].filterone)
            console.log('filter', filtered)
            setFz1(filtered)


        }


    }, [sam, f1])

    //   console.log(fz1 && fz1[0].details)
    //     console.log(desc,spend)
    const [sum, setSum] = useState(0)
    // const calculatetotak = ()=>{

    // // const total =fz1 && fz1[0].details.reduce((acc, item) => acc + item.spend, 0);
    // //  fz1 && axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/updatetotal/${fz1[0]._id}`,{total}).
    // //   then(res=> {console.log(res.data)}).
    // //   catch(err => console.log(err))

    // }


    const details1 = {
        desc: desc,
        spend: spend,
    }
    const validate = () => {
        let status = true
        if (!desc) {
            status = false
        }
        if (!spend) {
            status = false
        }
        return status
    }
    const addone = () => {
        if (validate()) {

            axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/newone/${fz1[0]._id}`, { details1 }).
                then(res => { console.log(res.data); setFz1([res.data]); setDesc(''); setSpend(''); window.location.reload(); })
                .catch(err => console.log(err))

        }




    }
    const fire = fz1 && fz1[0] && fz1[0].details ? fz1[0].details.map((_, index, array) => array[array.length - 1 - index]) : [];
    const deleteone = (item) => {

        axios.delete(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/deleteone/${fz1[0]._id}/item/${item._id}`)
            .then(res => { window.location.reload(); })
            .catch(err => console.log(err))
    }

    return (
        <div className='bgy'>
            {!fz1 && <div className='w-[100%] h-[100vh] flex items-center justify-center fixed z-[60] bg-[black]'>
                <div className='flex items-center justify-center gap-3 flex-col'>
                    <img src={load} alt="" className='mr-5' />


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


            <div className='flex items-center justify-between w-[70%] max-lg:flex-col max-xl:w-[98%] m-auto  '>
                <div className='max-w-[500px] relative z-50 max-md:w-[98%] flex max-lg:flex-col p-3  '>
                    <div >
                        <textarea type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder=' For this' className='bg-blue-950 capitalize text-[white] border-blue-400  vb border-b-4 w-[500px] max-md:w-[100%] rounded-md outline-none  p-3 border h-[100px] resize-none' />

                    </div>
                    <div className='flex  flex-col max-md:flex-row   px-3 max-md:px-0 gap-3 '>
                        <input type="number" value={spend} onChange={(e) => { setSpend(e.target.value) }} placeholder='This much' name="" id="" className='bg-blue-950 text-[white] vb border  border-blue-400 border-b-4 h-[41%] px-4 py-2 max-sm:py-[11px] rounded-md outline-none tracking-wider font-[600] text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none' />
                        {/* <button className='text-center h-[42%] bgf  text-white' onClick={()=>{addone()}}>E N T E R</button> */}
                        <button onClick={() => { addone() }} className="bg-blue-950 flex-1 cursor-pointer  text-[white] border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                            <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            ADD :)
                        </button>


                    </div>
                </div>
                {/* <div className='bln'>
                    <h2 className='font-[500] text-[19px] text-center pb-1 text-[white] capitalize '>{fz1 && fz1[0].title}</h2>
                    <h2 className='font-[500] text-[white] '>Total Spend <span className='font-[800] text-[20px] pl-3'>₹ {fz1 && fz1[0].totalamount}</span></h2>
                </div> */}
                <div className="notification ">
                    <div className="notiglow"></div>
                    <div className="notiborderglow"></div>
                    <div className="notititle capitalize"> {fz1 && fz1.length > 0 && fz1[0].title}</div>
                    <div className="notibody font-[600]">₹ {fz1 && fz1.length > 0 && fz1[0].totalamount}</div>
                </div>
            </div>
            <div className='w-[100%] p-3 mt-[30px]'>
                <div className='w-[70%] max-xl:w-[98%] m-auto relative z-50 '>
                    {/* <div className='w-[70%] bgk m-auto '> */}

                    {fire && fire.map((item, index) => {
                        return <>
                            <div className='flex bg-[#ffffffe8] my-3 rounded-md '>
                                <div className='flex-1'>
                                    <div className=' px-4 pt-4 pb-2 text-[#172554] font-[600] capitalize '>{item.desc}</div>
                                    <div className='px-4 pb-4 text-[10px] text-gray-400'>
                                        {new Date(item.date).toLocaleString('default', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',

                                        })}
                                    </div>
                                </div>

                                <div className='w-[200px] max-sm:w-[70px] block   text-center text-[#172554] font-[600] max-sm:px-0 p-5'>₹ {item.spend}</div>
                                <div className='pt-[27px] pr-[15px] cursor-pointer'
                                    onClick={() => {
                                        deleteone(item)
                                    }}

                                >
                                    <Icon icon="fxemoji:cancellationx" className='text-[11px] text-[#172554] ' />
                                </div>

                            </div>
                        </>
                    })}


                </div>

            </div>
        </div>
    )
}

export default Content