import React, { useRef, useEffect, Fragment } from "react";
// import { isEmpty } from "lodash";
import Link from "next/link";
import { gsap, Power1 } from "gsap";
import { useRouter } from "next/router";

const Nav = ({ headerMenus, siteLogo }) => {
  const menus = headerMenus ? headerMenus : [],
    middleMenuNumber = menus.length / 2;

  const { asPath } = useRouter();

  let logo = useRef(null);
  let menuRefArray = useRef([]);

  const floatAnimationFunction = () => {
    let floatAnimation = gsap.timeline({ repeat: -1 });
    if (menus.length) {
      floatAnimation
        .to(logo, { y: -10, ease: Power1.easeInOut, duration: 2 })
        .to(logo, { y: 0, ease: Power1.easeInOut, duration: 2 });
    }
    return floatAnimation;
  };

  const menuAnimationFunction = () => {
    let menuAnimation = gsap.timeline();

    if (menuRefArray.current && menuRefArray.current.length) {
      menuRefArray.current.forEach((menuRef, i) => {
        if (i === middleMenuNumber) {
          menuAnimation.from(logo, {
            opacity: 0,
            y: -7,
            ease: Power1.easeInOut,
            duration: 0.5,
          });
        }
        menuAnimation.from(menuRef, {
          opacity: 0,
          y: -7,
          ease: Power1.easeInOut,
          duration: 0.5,
        });
      });
    }
    return menuAnimation;
  };

  useEffect(() => {
    var master = gsap.timeline();
    master.add(menuAnimationFunction()).add(floatAnimationFunction());
  }, [menus.length]);

  return (
    <Fragment>
      {menus.length ? (
        <ul className="primaryMenu">
          {menus.map((menu, i) => {
            const className = asPath === menu?.node?.path ? "active" : "";
            return (
              <Fragment key={menu?.node?.id}>
                {i === middleMenuNumber && (
                  <li
                    className={asPath === "/" ? "active" : ""}
                    ref={(el) => (logo = el)}
                  >
                    <Link href="/">
                      <a>
                        <img
                          src={siteLogo?.sourceUrl}
                          alt={siteLogo?.altText}
                          title={siteLogo?.title}
                          width={31}
                          height={16}
                        />
                      </a>
                    </Link>
                  </li>
                )}
                <li
                  className={className}
                  ref={(el) => (menuRefArray.current[i] = el)}
                >
                  <Link href={menu?.node?.path}>
                    <a>{menu?.node?.label}</a>
                  </Link>
                </li>
              </Fragment>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Nav;
