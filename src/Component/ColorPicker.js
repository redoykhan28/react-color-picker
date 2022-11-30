import React, { useState } from 'react';
import { CompactPicker, HuePicker } from 'react-color';
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';




const ColorPicker = () => {

    //state for selected color
    const [selectedColor, setSelectedColor] = useState('primary');

    //state for copy color
    const [copy, setCopy] = useState('')

    const showToast = () => {

        toast.success('copied')
    }

    return (
        <div className='bg-primary ' style={{ backgroundColor: selectedColor }}>
            <div className='text-right w-11/12 mx-auto'>
                <Link to={'/home'} className="btn btn-circle border-0 mt-2 bg-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </Link>
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                            <div className="card-body">
                                <textarea readOnly className='bg-primary focus:outline-0' style={{ backgroundColor: selectedColor }} name="colorBox" id="" cols="30" rows="10"></textarea>

                                <div className='mt-4'>
                                    {/* using hue picker  */}
                                    <HuePicker
                                        color={selectedColor}
                                        onChangeComplete={color => setSelectedColor(color.hex)}
                                    />
                                </div>

                                <div className='mt-2 mb-4'>
                                    {/* using compack picker  */}
                                    <CompactPicker
                                        color={selectedColor}
                                        onChangeComplete={color => setSelectedColor(color.hex)}
                                    />
                                </div>

                                <div className='flex bg-primary p-1 rounded-md justify-center items-center'>
                                    <h5 className='text-gray-500'>Your Color:</h5>
                                    <input className='border-0 focus:outline-0 text-gray-600 bg-transparent font-bold ml-1' value={selectedColor} onChange={e => setCopy(e.target.value)} type="text" />

                                    {/* using copy to clipboard  */}
                                    <CopyToClipboard text={selectedColor}>
                                        <span className='text-gray-500 cursor-pointer'><FaCopy onClick={showToast} /></span>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default ColorPicker;