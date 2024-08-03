import './list.css'
import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { BiChevronLeft } from 'react-icons/bi'
import ListParts from '../listParts/ListParts'
import { useRef } from 'react'
import moviesexport from '../export/moviesexport'

const List = ({dat }) => {
  const movies = moviesexport();
  const listRef = useRef();
  const [slideList, setSlideList] = useState(0);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideList > 0) {
      setSlideList(slideList - 1);
      listRef.current.style.transform = `translateX(${240 + distance}px)`;
    }
    if (direction === 'right' && slideList < 10 - window.innerWidth / 240) {
      setSlideList(slideList + 1);
      listRef.current.style.transform = `translateX(${-240 + distance}px)`;
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
    setScrollLeft(listRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    listRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="list">
    {movies && (
      <div className="list__wrapper" key={dat.id}>
        <span className="list__title">{dat.genre}</span>
        <div className="wrapper">
          <BiChevronLeft
            className="list__svg left"
            onClick={() => handleScroll('left')}
          />
          <div
            className="list__container"
            ref={listRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {movies.map((movie, index) => (
              <ListParts key={index} index={index} movie={movie} />
            ))}
          </div>
          <BiChevronRight
            className="list__svg right"
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>
    )}
  </div>
  )
}

export default List