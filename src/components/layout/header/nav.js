import React, { useRef, useEffect, Fragment } from "react";
import { isEmpty } from "lodash";
import Link from "next/link";
// import Image from "next/image";
import { gsap, Power1 } from "gsap";

const Nav = ({ headerMenus, siteLogo }) => {
  const menus = headerMenus,
    middleMenuNumber = menus.length / 2;

  let logo = useRef(null);

  useEffect(() => {
    console.log(menus);
    let floatAnimation = gsap.timeline({ repeat: -1 });

    floatAnimation
      .to(logo, { y: -10, ease: Power1.easeInOut, duration: 2 })
      .to(logo, { y: 0, ease: Power1.easeInOut, duration: 2 });
  }, []);

  if (isEmpty(headerMenus)) {
    return;
  }

  return (
    <Fragment>
      {menus.length ? (
        <ul className="primaryMenu">
          {menus.map((menu, i) => {
            return (
              <Fragment key={menu?.node?.id}>
                {i === middleMenuNumber ? (
                  <li ref={(el) => (logo = el)}>
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
                ) : (
                  ""
                )}
                <li>
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
