import React, { useEffect } from 'react'
import toast, { Toaster } from "react-hot-toast"
import Display from '../components/Display'

const Canvas = () => {
    useEffect(()=>{
        toast.success("Ensalamento criado")
    })
    return (
        <section>
            <Toaster />
            <Display width={window.screen.width} height="600" />
        </section>
    )
}

export default Canvas