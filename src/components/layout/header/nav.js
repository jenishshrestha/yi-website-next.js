import { React, Fragment } from "react";
import { isEmpty } from "lodash";
import Link from "next/link";
import Image from "next/image";

const Nav = ({ headerMenus, siteLogo }) => {
  if (isEmpty(headerMenus)) {
    return;
  }

  const menus = headerMenus,
    middleMenuNumber = menus.length / 2;

  return (
    <Fragment>
      {menus.length ? (
        <ul className="primaryMenu">
          {menus.map((menu, i) => {
            return (
              <Fragment key={menu?.node?.id}>
                {i === middleMenuNumber ? (
                  <li>
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
