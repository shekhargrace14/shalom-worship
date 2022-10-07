import {useRouter} from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/Navbar'


const errorPage = () => {
    const router = useRouter();
    const handleInput =()=>{
        router.push("/")
    }
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        }, 3000);

    })
  return (
    <>
        <Navbar/>

        404 page
        <a  onClick={handleInput}>Back to Home</a>

    </>
  )
}

export default errorPage;