import React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import {
  Ellipse1,
  Ellipse2,
  Ellipse3,
} from "../../src/components/icons/home"
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SmoothScroll from "./SmoothScroll";

const Career = ({ page }) => {
  let image = useRef(null),
    careertitle = useRef(null),
    button = useRef(null),
    footer = useRef(null),
    svg1 = useRef(null),
    svg2 = useRef(null),
    svg3 = useRef(null),
    careersvg = useRef(null),
    cbdetail = useRef(null)

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".career_banner .container", {
      duration: 1,
      opacity:0,
      ease: 'SlowMo.out',
      scrollTrigger: {
        trigger: ".career_svgs",
        start: 'top 90%',
        end: 'top 85%',
        scrub: true
      }
    });
    gsap.to(".career_bg-image", {
      duration: 4,
      opacity:1,
      scale: 1.1,
      ease: 'SlowMo.in',
      scrollTrigger: {
        trigger: ".career_svgs",
        start: 'top 80%',
        end: "top 10%",
        scrub: true
      }
    });
    gsap.to(".career_bg-image-overlay", {
      duration: 4,
      opacity:1,
      background: 'linear-gradient(0deg, rgba(41, 37, 35, 1), rgba(41, 37, 35, 1))',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: ".career_svgs",
        start: 'top 80%',
        end: "top 10%",
        scrub: true
      }
    });
    gsap.to(".career_svgs", {
      duration: 1,
      opacity:1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".career_svgs",
        start: 'top 90%',
        scrub: true
      }
    });
    gsap.to(".career__banner-detail", {
      duration: 1,
      y: -200,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".career_svgs",
        start: 'top 50%',
        end: 'top 10%',
        scrub: true
      }
    });
    gsap.to(".career__banner-detail", {
      duration: 1,
      opacity:0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".career__banner-detail",
        start: 'top 30%',
        scrub: true
      }
    });
    gsap.to(".career_svgs", {
      duration: 1,
      opacity:0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".career_svgs",
        start: 'top -30%',
        scrub: true
      }
    });
    gsap.to(".career-image", {
      duration: 1,
      y: -35,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".image",
        scrub: 0.5,
        start: "top 40%",
        end: "top -5%",
        ease: "power2"
      }
    });
    gsap.to(".career-image-1", {
      duration: 1,
      // y: -35,
      x:0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".impact",
        start: 'top 40%',
        end: 'top 20%',
        scrub: true
      }
    });
    gsap.to(".career-image-2", {
      duration: 1,
      // y: -35,
      x:0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".culture",
        start: 'top 40%',
        end: 'top 20%',
        scrub: true
      }
    });
    gsap.to(".career-image-3", {
      duration: 1,
      // y: -35,
      x:0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".environment",
        start: 'top 40%',
        end: 'top 20%',
        scrub: true
      }
    });
    gsap.to(".impact > .desc", {
      duration: 1,
      x:0,
      opacity:1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".impact",
        start: 'top 40%',
        scrub: 1,
        end: 'top 20%',
      }
    });
    gsap.to(".culture > .desc", {
      duration: 1,
      x:0,
      opacity:1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".culture",
        start: 'top 50%',
        scrub: 1,
        end: 'top 40%',
      }
    });
    gsap.to(".environment > .desc", {
      duration: 1,
      x:0,
      opacity:1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".environment",
        start: 'top 40%',
        scrub: 1,
        end: 'top 20%',
      }
    });
    gsap.to(".contact", {
      duration: 1,
      y:0,
      opacity:1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ".contact",
        start: 'top 95%',
        scrub: 1,
        end: 'top 80%'
      }
    });
  }, []);
  
// gsap scroll animation ends

  const pumpkinAnimationFunction = () => {
    let svg1Animation = gsap.fromTo(
      svg1.current,
      { left: "50%", top: "50%", x: "-50%", y: "-50%" },
      { left: "100%", top: 38, x: "-100%", y: "0%", duration: 0.8 }
    )

    let svg2Animation = gsap.fromTo(
      svg2.current,
      { left: "50%", top: "50%", x: "-50%", y: "-50%" },
      { left: "0%", top: 38, x: "0%", y: "0%", duration: 0.8 }
    )

    let svg3Animation = gsap.fromTo(
      svg3.current,
      { left: "50%", top: "50%", x: "-50%", y: "-50%" },
      { left: "50%", top: 0, x: "-50%", y: "0%", duration: 0.8 }
    )

    let pumpkinAnimation = gsap.timeline()

    pumpkinAnimation.add(svg1Animation, 0.5)
    pumpkinAnimation.add(svg2Animation, 0.5)
    pumpkinAnimation.add(svg3Animation, 0.5)

    return pumpkinAnimation
  }


  

  useEffect(() => {
    let master = gsap.timeline()
    master
      .add(pumpkinAnimationFunction())
  }, [])

  return <>
    <div className="career_banner flex justify-center items-center">
      <div class="career_bg-image" style={{width: '100vw', height: '100vh' }}>
        <Image src="/careerbg.jpg" className="career-image-2"  alt="career_culture" layout="fill" objectFit="cover"/>
      </div>
      <div class="career_bg-image-overlay">
      </div>
      <div className="container">
        <h1 className="career-title" ref={careertitle}><Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Join our team to create impact.')
              .start();
          }}
          options={{
            delay: 100,
          }}
        />
        </h1>
        <div className="scroll">
          Scroll Down
        </div>
      </div>
    </div>
  <SmoothScroll>
  <div className="career__page">
    
    <div className="career_svgs homeBanner__content" ref={careersvg}>
        <div className="container">
          <div className="homeBanner__content--wrapper">
            <div className="homeBanner__content--svgs relative">
              <div ref={svg1}>
                <Ellipse1 />
              </div>
              <div ref={svg2}>
                <Ellipse2 />
              </div>

              <div ref={svg3} className="relative">
                <Ellipse3 />
                <div className="career__banner-detail absolute" ref={cbdetail}>
                  <p>We are always looking for innovative, enthusiastic and
                  hardworking individuals who are eager to use their technology
                    skills to improve the development sector.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="vaccancies">
      <div className="container">
        <ul className="m-0 p-0">
          <li className=""><a href="">Software Engineer (node.js) →</a>
            
          </li>
          <li className=""><a href="">Jr. React.js Developer →</a>
            
          </li>
          <li className=""><a href="">Sr. React.js Developer →</a>
            
          </li>
        </ul>
      </div>
      <div className="career__banner-image image" style={{width: '100vw', height: '416px'}}>
        <Image className="career-image" src="/career-banner.jpg" alt="career_banner" layout="fill" objectFit="cover"/>
      </div>
    </div>
    <div className="why_work_with_us  grid grid-cols-3 container">
        <h2>Why work with us? </h2>
      <div className="impact">
          <div className="desc">
            <span>Do work that creates impact</span>
            <p>
              Our diverse portfolio of national and international clients mean that we work on global issues
              from data transparency to violence against women and children. We are a team of results-driven individuals 
              who believe that to achieve the biggest impact, collaboration and innovation are key. 
            </p>
          </div>
        <div className="why-image image-1" style={{width: '730px', height: '403px'}}>
          <Image src="/impact.jpg" className="career-image-1" alt="career_impact"  layout="fill" objectFit="cover"/>
        </div>
      </div>

      <div className="culture">
        <div className="desc">
          <span>Work in a strong culture</span>
          <p>
            We take pride in our culture that we’ve developed organically for more than a decade. 
            Right from day one at YoungInnovations, you’ll feel you’re part of
            family that close-knit group of tech-lovers who work closely together to produce high-quality 
            products we can take pride in.
          </p>
        </div>
        <div className="why-image image-2" style={{width: '730px', height: '403px'}}>
          <Image src="/culture.jpg" className="career-image-2"  alt="career_culture" layout="fill" objectFit="cover"/>
        </div>
      </div>

      <div className="environment">
        <div className="desc">
          <span>Do work that creates impact</span>
          <p>
            We take your career pretty seriously. After our clients, you’re our Number 1 priority.
            We want to ensure that you excel, and we look for people who are just as ambitious and dedicated as we are. 
          </p>
        </div>
        <div className="why-image image-3" style={{width: '730px', height: '403px'}}>
          <Image src="/environment.jpg" className="career-image-3" alt="career_environment" layout="fill" objectFit="cover"/>
        </div>
      </div>

      <div className="contact" ref={footer}>
        <div className="desc">
          <span>Come, join us!</span>
          <email>careers@yipl.com.np</email>
          <div className="address">
          
            <phone>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.3061 11.7611 13.1191 11.7523 12.9405 11.7948C12.7618 11.8372 12.5988 11.9291 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z" fill="white"/>
              </svg>

              +977-1-5536093</phone>
            <reach>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0.5C5.13 0.5 2 3.317 2 6.8C2 11.525 9 18.5 9 18.5C9 18.5 16 11.525 16 6.8C16 3.317 12.87 0.5 9 0.5ZM9 9.05C8.33696 9.05 7.70107 8.81295 7.23223 8.39099C6.76339 7.96903 6.5 7.39674 6.5 6.8C6.5 6.20326 6.76339 5.63097 7.23223 5.20901C7.70107 4.78705 8.33696 4.55 9 4.55C9.66304 4.55 10.2989 4.78705 10.7678 5.20901C11.2366 5.63097 11.5 6.20326 11.5 6.8C11.5 7.39674 11.2366 7.96903 10.7678 8.39099C10.2989 8.81295 9.66304 9.05 9 9.05Z" fill="white"/>
              </svg>

              Mahalaxmisthan, Lalitpur, Nepal</reach>

          </div>
          <div className="social-icons">
            <ul className="flex">
              <li className="fb">
                <a href="#" className="">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.1222 10.0611C20.1222 4.50451 15.6177 0 10.0611 0C4.50451 0 0 4.50451 0 10.0611C0 15.0829 3.6792 19.2452 8.48906 20V12.9694H5.93448V10.0611H8.48906V7.84452C8.48906 5.32296 9.99112 3.93012 12.2893 3.93012C13.3901 3.93012 14.5415 4.12663 14.5415 4.12663V6.6026H13.2728C12.0229 6.6026 11.6332 7.37816 11.6332 8.17381V10.0611H14.4235L13.9775 12.9694H11.6332V20C16.443 19.2452 20.1222 15.0829 20.1222 10.0611Z" fill="white"/>
                  </svg>
                </a>
              </li>
              
              <li className="ig">
                <a href="#" className="">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71899 9.96182C4.71899 7.24206 6.94077 5.05859 9.62222 5.05859C12.3037 5.05859 14.5254 7.28037 14.5254 9.96182C14.5254 12.6433 12.342 14.865 9.62222 14.865C6.90246 14.865 4.71899 12.6816 4.71899 9.96182ZM6.48124 9.96178C6.48124 11.6856 7.89858 13.1029 9.62237 13.1029C11.3462 13.1029 12.7635 11.6856 12.7635 9.96178C12.7635 8.23799 11.3462 6.82065 9.62237 6.82065C7.89858 6.82065 6.48124 8.23799 6.48124 9.96178Z" fill="white"/>
                  <circle cx="14.7171" cy="4.94341" r="1.11089" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5679 0.5C15.1767 0.5 16.5941 1.03629 17.5901 2.07056C18.586 3.06653 19.1223 4.44556 19.1223 6.05444V13.9456C19.1223 15.5927 18.586 17.0101 17.5518 18.006C16.5558 18.9637 15.1767 19.5 13.5296 19.5H5.71506C4.14449 19.5 2.76546 19.002 1.73119 18.006C0.658605 16.9718 0.122314 15.5544 0.122314 13.9073V6.05444C0.122314 2.72177 2.34409 0.5 5.67675 0.5H13.5679ZM16.3261 16.7421C17.0156 16.0909 17.437 15.1332 17.437 13.9457V6.05457C17.437 4.94368 17.0539 3.98602 16.4027 3.29651C15.7132 2.60699 14.7555 2.26223 13.6063 2.26223H5.71519C4.566 2.26223 3.57003 2.60699 2.91882 3.2582C2.2293 3.94772 1.88455 4.90538 1.88455 6.05457V13.9074C1.88455 15.0949 2.2293 16.0526 2.91882 16.7421C3.60834 17.3933 4.566 17.738 5.71519 17.738H13.5297C14.6789 17.738 15.6366 17.3933 16.3261 16.7421Z" fill="white"/>
                  </svg>
                </a>
              </li>
              
              <li className="tw">
                <a href="#" className="">
                  <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.2718 2.13074C21.4576 2.49268 20.5813 2.73682 19.6618 2.84608C20.6006 2.28406 21.3204 1.39382 21.6599 0.331818C20.7818 0.852925 19.8097 1.23105 18.7743 1.43518C17.9456 0.552131 16.7645 0 15.4574 0C12.9481 0 10.9136 2.03452 10.9136 4.54429C10.9136 4.89993 10.9536 5.24659 11.0314 5.57976C7.2546 5.39002 3.90585 3.58121 1.6645 0.831793C1.27334 1.50262 1.04943 2.28316 1.04943 3.11675C1.04943 4.69311 1.85154 6.08423 3.07091 6.89894C2.32634 6.87511 1.62539 6.67053 1.01256 6.33017C1.01211 6.34905 1.01211 6.36839 1.01211 6.38772C1.01211 8.58905 2.57858 10.4253 4.65761 10.8434C4.27633 10.9468 3.87482 11.0026 3.46028 11.0026C3.16713 11.0026 2.88252 10.9743 2.6051 10.9208C3.18376 12.726 4.86174 14.0402 6.84995 14.0766C5.29472 15.2955 3.33573 16.0221 1.20634 16.0221C0.839904 16.0221 0.477962 16.0005 0.122314 15.9583C2.1339 17.2482 4.52227 18 7.08824 18C15.4471 18 20.0175 11.0759 20.0175 5.07079C20.0175 4.87386 20.0134 4.67737 20.0049 4.48224C20.8924 3.84288 21.6631 3.04211 22.2718 2.13074Z" fill="white"/>
                  </svg>
                </a>
              </li>
              
              <li className="yt">
                <a href="#" className="">
                  <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.504 2.50323C22.2459 1.52258 21.4717 0.748387 20.4911 0.477419C18.7233 0 11.6266 0 11.6266 0C11.6266 0 4.52979 0 2.74915 0.477419C1.7685 0.735484 1.00721 1.50968 0.736245 2.50323C0.271729 4.28387 0.271729 8 0.271729 8C0.271729 8 0.271729 11.7161 0.749148 13.4968C1.00721 14.4774 1.78141 15.2516 2.76205 15.5226C4.52979 16 11.6266 16 11.6266 16C11.6266 16 18.7233 16 20.504 15.5226C21.4846 15.2645 22.2459 14.4903 22.5169 13.4968C22.9814 11.7161 22.9814 8 22.9814 8C22.9814 8 22.9814 4.28387 22.504 2.50323ZM9.30399 11.3806V4.61935L15.2395 8L9.30399 11.3806Z" fill="white"/>
                  </svg>
                </a>
              </li>
              
              <li className="md">
                <a href="#" className="">
                  <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8725 8.00001C16.8725 12.4183 13.3151 16 8.92696 16C4.53877 16 0.981445 12.4183 0.981445 8.00001C0.981445 3.5817 4.53877 0 8.92696 0C13.3151 0 16.8725 3.5817 16.8725 8.00001Z" fill="white"/>
                  <path d="M25.5889 8.00014C25.5889 12.1592 23.8102 15.5308 21.616 15.5308C19.422 15.5308 17.6433 12.1592 17.6433 8.00014C17.6433 3.84106 19.422 0.469487 21.616 0.469487C23.8102 0.469487 25.5889 3.84106 25.5889 8.00014Z" fill="white"/>
                  <path d="M29.1544 7.99946C29.1544 11.7258 28.5289 14.7466 27.7571 14.7466C26.9856 14.7466 26.3599 11.7258 26.3599 7.99946C26.3599 4.27309 26.9856 1.25232 27.7571 1.25232C28.5289 1.25232 29.1544 4.27309 29.1544 7.99946Z" fill="white"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
  </SmoothScroll>
  </>
}

export default Career
