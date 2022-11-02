import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const Url = () => {
  const data = useRouter();
  const [shorturl, setShortUrl] = useState([]);

  const getUrl = () => {
    axios
    .get(`https://man.romodeus.site/manifest/${data.query.key}`)
    .then((response) => {
      console.log(response)
      setShortUrl(response.data.data.custom_url)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getUrl();
  }, []);

  return (
    <div>
      <Header/>
      <div className="xl:w-96">
          <div className="border border-black py-4 px-5 w-full rounded">
            <p className='text-black text-xs font-semibold'>{shorturl}</p>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Url