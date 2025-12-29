import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CursorState = 'dot' | 'left-arrow' | 'right-arrow' | 'hover';

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>('dot');
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollableElement, setScrollableElement] = useState<HTMLElement | null>(null);
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const findScrollableParent = (element: HTMLElement | null): HTMLElement | null => {
      if (!element) return null;

      if (element.hasAttribute('data-scrollable')) {
        return element;
      }

      return findScrollableParent(element.parentElement);
    };

    const canScrollLeft = (element: HTMLElement): boolean => {
      return element.scrollLeft > 5;
    };

    const canScrollRight = (element: HTMLElement): boolean => {
      return element.scrollLeft < (element.scrollWidth - element.clientWidth - 5);
    };

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const scrollableParent = findScrollableParent(target);

      if (scrollableParent) {
        setScrollableElement(scrollableParent);
        const rect = scrollableParent.getBoundingClientRect();
        const relativeX = e.clientX - rect.left;
        const width = rect.width;
        const edgeThreshold = Math.min(width * 0.3, 200);

        const scrollLeft = canScrollLeft(scrollableParent);
        const scrollRight = canScrollRight(scrollableParent);

        if (relativeX < edgeThreshold && scrollLeft) {
          setCursorState('left-arrow');
          setScrollDirection('left');
        } else if (relativeX > width - edgeThreshold && scrollRight) {
          setCursorState('right-arrow');
          setScrollDirection('right');
        } else {
          setScrollDirection(null);
          if (
            target.tagName === 'BUTTON' ||
            target.tagName === 'A' ||
            target.classList.contains('cursor-pointer')
          ) {
            setCursorState('hover');
          } else {
            setCursorState('dot');
          }
        }
      } else {
        setScrollableElement(null);
        setScrollDirection(null);
        if (
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.classList.contains('cursor-pointer')
        ) {
          setCursorState('hover');
        } else {
          setCursorState('dot');
        }
      }
    };

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const handleClick = (e: MouseEvent) => {
      if (scrollableElement && scrollDirection) {
        e.preventDefault();
        const scrollAmount = 380;
        scrollableElement.scrollBy({
          left: scrollDirection === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('click', handleClick);
      clearTimeout(scrollTimeout);
    };
  }, [scrollableElement, scrollDirection]);

  const getCursorSize = () => {
    switch (cursorState) {
      case 'left-arrow':
      case 'right-arrow':
        return 64;
      case 'hover':
        return 48;
      default:
        return 32;
    }
  };

  const cursorSize = getCursorSize();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - cursorSize / 2,
          y: mousePosition.y - cursorSize / 2,
          scale: isScrolling ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 150,
          damping: 15,
        }}
      >
        <AnimatePresence mode="wait">
          {cursorState === 'dot' && (
            <motion.div
              key="dot"
              className="flex items-center justify-center"
              style={{ width: cursorSize, height: cursorSize }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="rounded-full border-2 border-[#F7FF38]"
                style={{ width: cursorSize, height: cursorSize }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#F7FF38] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          )}

          {cursorState === 'left-arrow' && (
            <motion.div
              key="left-arrow"
              className="flex items-center justify-center bg-[#F7FF38] rounded-full"
              style={{ width: cursorSize, height: cursorSize }}
              initial={{ scale: 0, x: 50 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0, x: 50 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronLeft className="text-black" size={28} strokeWidth={3} />
              </motion.div>
            </motion.div>
          )}

          {cursorState === 'right-arrow' && (
            <motion.div
              key="right-arrow"
              className="flex items-center justify-center bg-[#F7FF38] rounded-full"
              style={{ width: cursorSize, height: cursorSize }}
              initial={{ scale: 0, x: -50 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0, x: -50 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="text-black" size={28} strokeWidth={3} />
              </motion.div>
            </motion.div>
          )}

          {cursorState === 'hover' && (
            <motion.div
              key="hover"
              className="rounded-full border-2 border-[#F7FF38] bg-[#F7FF38]/20"
              style={{ width: cursorSize, height: cursorSize }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-[#F7FF38] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
