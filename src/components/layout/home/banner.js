import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Magnetic from "./../../magnetic/magnetic"

import {
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Medium,
  Phone,
  Location,
  Email,
} from "../../icons/home"
import Link from "next/link"

const HomeBanner = ({ page }) => {
  let image = useRef(null),
    title = useRef(null),
    button = useRef(null),
    footer = useRef(null),
    svg1 = useRef(null),
    svg2 = useRef(null),
    svg3 = useRef(null)

  const bannerAnimationFunction = () => {
    let bannerAnimation = gsap.timeline()

    bannerAnimation
      .fromTo(
        image.current,
        { duration: 0, y: 40, opacity: 0 },
        { delay: 0.5, duration: 0.8, y: 0, opacity: 1 }
      )
      .fromTo(
        title.current,
        { duration: 0, y: 40, opacity: 0 },
        { duration: 0.8, y: 0, opacity: 1 }
      )
      .fromTo(
        button.current,
        { duration: 0, y: 40, opacity: 0 },
        { duration: 0.8, y: 0, opacity: 1 }
      )

    return bannerAnimation
  }

  const footerAnimationFunction = () => {
    let footerAnimation = gsap.timeline()
    footerAnimation.fromTo(
      footer.current,
      { duration: 0, y: 40, opacity: 0 },
      { duration: 0.8, y: 0, opacity: 1 }
    )
    return footerAnimation
  }

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
      .add(footerAnimationFunction())
      .add(bannerAnimationFunction())
  }, [])

  const bannerImage = page?.homePage?.bannerImage?.sourceUrl,
    bannerLogo = page?.homePage?.bannerLogo?.sourceUrl,
    bannerTitle = page?.homePage?.bannerTitle,
    ctaButtonText = page?.homePage?.ctaButtonText,
    ctaButtonLink = page?.homePage?.ctaButtonLink,
    facebookLink = page?.homePage?.facebook,
    instagramLink = page?.homePage?.instagram,
    twitterLink = page?.homePage?.twitter,
    youtubeLink = page?.homePage?.youtube,
    mediumLink = page?.homePage?.medium,
    phoneNumber = page?.homePage?.phoneNumber,
    googleMapLocation = page?.homePage?.googleMapLocation,
    emailAddress = page?.homePage?.emailAddress

  return (
    <div className="homeBanner">
      <div className="homeBanner__background">
        <div className="image-wrapper">
          <img
            src={bannerImage}
            alt={page?.homePage?.bannerImage?.altText}
            title={page?.homePage?.bannerImage?.title}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="homeBanner__content">
        <div className="container">
          <div className="homeBanner__content--wrapper">
            <div className="homeBanner__content--svgs">
              <div ref={svg1}>
                <Ellipse1 />
              </div>
              <div ref={svg2}>
                <Ellipse2 />
              </div>

              <div ref={svg3}>
                <Ellipse3 />
              </div>
            </div>
            {bannerLogo ? (
              <img
                ref={image}
                src={bannerLogo}
                alt={page.homePage.bannerLogo?.altText}
                width={page.homePage.bannerLogo?.mediaDetails?.width}
                height={page.homePage.bannerLogo?.mediaDetails?.height}
              />
            ) : (
              ""
            )}

            {bannerTitle ? <h1 ref={title}>{bannerTitle}</h1> : ""}

            {ctaButtonText ? (
              <div className="" ref={button}>
                <Magnetic>
                  <Link href={ctaButtonLink ? ctaButtonLink : "#"}>
                    <a className="btn btn-rounded btn-dark cta-button">
                      {ctaButtonText}
                      <span>→</span>
                    </a>
                  </Link>
                </Magnetic>
              </div>
            ) : (
              ""
            )}

            {/* <Magnetic>Button</Magnetic> */}
          </div>
        </div>
      </div>
      <div className="homeBanner__footer" ref={footer}>
        <div className="container">
          <div className="homeBanner__footer--wrapper">
            <div className="homeBanner__footer--socialIcons">
              <a href={facebookLink} rel="noreferrer nofollow" target="_blank">
                <Facebook />
              </a>
              <a href={instagramLink} rel="noreferrer nofollow" target="_blank">
                <Instagram />
              </a>
              <a href={twitterLink} rel="noreferrer nofollow" target="_blank">
                <Twitter />
              </a>
              <a href={youtubeLink} rel="noreferrer nofollow" target="_blank">
                <Youtube />
              </a>
              <a href={mediumLink} rel="noreferrer nofollow" target="_blank">
                <Medium />
              </a>
            </div>
            <div className="homeBanner__footer--contactInfo">
              <a href={"tel:" + phoneNumber}>
                <Phone />
                <span>{phoneNumber}</span>
              </a>
              <a
                href={googleMapLocation}
                rel="noreferrer nofollow"
                target="_blank"
              >
                <Location />
              </a>
              <a href={"mailto:" + emailAddress}>
                <Email />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
