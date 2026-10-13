import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

/**
 * AnimatedCounter: Smoothly animates a numeric value from `from` to `to`
 * when it scrolls into view using Framer Motion.
 *
 * @param {number} to - Final number to animate to
 * @param {number} [from=0] - Initial number
 * @param {number} [duration=2] - Animation duration in seconds
 * @param {string} [suffix=""] - Text after the number (e.g., "+", "%")
 * @param {string} [prefix=""] - Text before the number (e.g., "$")
 */
const AnimatedCounter = ({ to, from = 0, duration = 2, suffix = "", prefix = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;

    const numericTo = typeof to === "number" ? to : parseFloat(to);
    if (isNaN(numericTo)) return;

    const controls = animate(from, numericTo, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Custom smooth easeOut cubic bezier
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = `${prefix}${Math.round(value).toLocaleString()}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, prefix, suffix]);

  return <span ref={nodeRef}>{`${prefix}${from}${suffix}`}</span>;
};

export default AnimatedCounter;
