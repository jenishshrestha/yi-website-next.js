import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

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
} from "../../icons/home";
import Link from "next/link";

const HomeBanner = ({ page }) => {
  let image = useRef(null),
    title = useRef(null),
    button = useRef(null),
    footer = useRef(null);

  useEffect(() => {
    let bannerAnimation = gsap.timeline();
    let footerAnimation = gsap.timeline();

    // tl.to(image, {duration: 0.8, y: 40, opacity: });

    bannerAnimation
      .fromTo(
        image,
        { duration: 0, y: 40, opacity: 0 },
        { delay: 0.5, duration: 0.8, y: 0, opacity: 1 }
      )
      .fromTo(
        title,
        { duration: 0, y: 40, opacity: 0 },
        { duration: 0.8, y: 0, opacity: 1 }
      )
      .fromTo(
        button,
        { duration: 0, y: 40, opacity: 0 },
        { duration: 0.8, y: 0, opacity: 1 }
      );

    footerAnimation.fromTo(
      footer,
      { duration: 0, y: 40, opacity: 0 },
      { duration: 0.8, y: 0, opacity: 1 }
    );
  }, []);

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
    emailAddress = page?.homePage?.emailAddress;

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
              <Ellipse1 />
              <Ellipse2 />
              <Ellipse3 />
            </div>
            {bannerLogo ? (
              <img
                ref={(el) => (image = el)}
                src={bannerLogo}
                alt={page.homePage.bannerLogo?.altText}
                width={page.homePage.bannerLogo?.mediaDetails?.width}
                height={page.homePage.bannerLogo?.mediaDetails?.height}
              />
            ) : (
              ""
            )}

            {bannerTitle ? (
              <h1 ref={(el) => (title = el)}>{bannerTitle}</h1>
            ) : (
              ""
            )}

            {ctaButtonText ? (
              <div className="magnetic-effect" ref={(el) => (button = el)}>
                <Link href={ctaButtonLink ? ctaButtonLink : "#"}>
                  <a className="btn btn-rounded btn-dark cta-button">
                    {ctaButtonText}
                    <span>→</span>
                  </a>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="homeBanner__footer" ref={(el) => (footer = el)}>
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
  );
};

export default HomeBanner;
