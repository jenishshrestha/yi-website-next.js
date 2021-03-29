import React, { useEffect, useRef, useState } from "react";
import { gsap, Elastic } from "gsap";

const Magnetic = ({ children }) => {
  // constants
  //   const [random, setRandom] = useState(null);
  let childRef = useRef(null),
    mouseCoords = {
      x: 0,
      y: 0,
    },
    childBounds = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    },
    damp = 0.2,
    padding = 15,
    isHooked = false;

  //   functions
  const bounds = (element) => {
    const {
      top,
      right,
      bottom,
      left,
      width,
      height,
      x,
      y,
    } = element.getBoundingClientRect();
    return { top, right, bottom, left, width, height, x, y };
  };

  const isCollided = (coords, bounds) => {
    if (
      coords.x >= bounds.left &&
      coords.x <= bounds.right &&
      coords.y >= bounds.top &&
      coords.y <= bounds.bottom
    ) {
      return true;
    } else {
      return false;
    }
  };

  const updateMouseCoords = (e) => {
    mouseCoords = {
      x: e.clientX,
      y: e.clientY,
    };
    raf();
  };

  const registerBounds = () => {
    if (childRef && childRef.current) {
      const b = bounds(childRef.current);
      childBounds = {
        bottom: b.bottom + padding,
        height: b.height + padding * 2,
        left: b.left - padding,
        right: b.right + padding,
        top: b.top - padding,
        width: b.width + padding * 2,
      };
    }
  };

  const raf = () => {
    if (childBounds && mouseCoords && isCollided(mouseCoords, childBounds)) {
      gsap.to(childRef.current, {
        x: (mouseCoords.x - childBounds.left - childBounds.width / 2) * damp,
        y: (mouseCoords.y - childBounds.top - childBounds.height / 2) * damp,
        duration: 0.3,
      });
      isHooked = true;
    }
    if (
      childBounds &&
      mouseCoords &&
      !isCollided(mouseCoords, childBounds) &&
      isHooked
    ) {
      gsap.to(childRef.current, {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: Elastic.easeOut.config(1, 0.3),
      });
      isHooked = false;
    }
  };

  useEffect(() => {
    registerBounds();
    window.addEventListener("mousemove", updateMouseCoords);
    window.addEventListener("resize", registerBounds);

    return () => {
      // cleanup
      window.removeEventListener("mousemove", updateMouseCoords);
      window.removeEventListener("resize", registerBounds);
    };
  }, []);

  return (
    <div className="magnetic" ref={childRef}>
      {children}
    </div>
  );
};

export default Magnetic;
