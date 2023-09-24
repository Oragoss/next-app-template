'use client';
import React, { useEffect } from 'react'
import { CldUploadWidget } from 'next-cloudinary'

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="rxjkeeid">
        {({ open }) => 
            <button 
                className="btn btn-primary"
                onClick={() => open()}>Upload</button>}
    </CldUploadWidget>
  )
}

export default UploadPage