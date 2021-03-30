import React, { useEffect, useState, useRef } from "react"
import { ApolloProvider } from "@apollo/client"
import client from "../src/apollo/client"
import Layout from "../src/components/layout/layout"
import { gsap } from "gsap"
import "swiper/swiper-bundle.min.css"
import "../styles/globals.scss"
// import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const { data } = pageProps
  const [dataCopy, setDataCopy] = useState({})

  let dotRef = useRef(null)
  let circleRef = useRef(null)

  let mouseCoords = {
    x: 0,
    y: 0,
  }

  const updateMouseCoords = (e) => {
    mouseCoords = {
      x: e.clientX,
      y: e.clientY,
    }

    gsap.to(dotRef.current, {
      x: mouseCoords.x,
      y: mouseCoords.y,
      duration: 0,
    })

    gsap.to(circleRef.current, {
      x: mouseCoords.x,
      y: mouseCoords.y,
      duration: 0.4,
    })
  }

  useEffect(() => {
    if (pageProps) {
      setDataCopy(data)
    }
  }, [pageProps])

  // useEffect(() => {
  //   window.addEventListener("mousemove", updateMouseCoords)
  //   return () => {
  //     window.removeEventListener("mousemove", updateMouseCoords)
  //   }
  // }, [])
  return (
    <>
      {/* <div className="dot-cursor" ref={dotRef}></div>
      <div className="circle-cursor" ref={circleRef}></div> */}
      <ApolloProvider client={client}>
        <Layout data={dataCopy}>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  )
}

export default MyApp
