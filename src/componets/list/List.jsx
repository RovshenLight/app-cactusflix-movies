import './list.css'
import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { BiChevronLeft } from 'react-icons/bi'
import ListParts from '../listParts/ListParts'
import { useRef } from 'react'
import moviesexport from '../export/moviesexport'

const List = ({dat }) => {
  const movies = moviesexport();

  const [slideList, setSlideList] = useState(0);
  const [whenMove, setWhenMove] = useState(false);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();


  let startX = 0;
  let scrollLeft = 0;

  const handleScroll = (direct) => {
    setWhenMove(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if(direct === 'left' && slideList > 0) {
      setSlideList(slideList - 1);
      listRef.current.style.transform = `translateX(${240 + distance}px)`;
    }
    if(direct === 'right' && slideList < 10 - clickLimit ) {
      setSlideList(slideList + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  }

  const handleTouchStart = (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = listRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2; // scroll-fast
    listRef.current.scrollLeft = scrollLeft - walk;
  };
  
  return (

    <div className='list'>
          {movies && (
            <div className='list__wrapper' key={dat.id}>
              <span className='list__title'>{dat.genre}</span>
                  <div className="wrapper">
                      <BiChevronLeft className='list__svg left' onClick={() => handleScroll('left')} style={{display: !whenMove && 'none' }} />
                      <div className="list__container" ref={listRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                        {movies.map((movie, index) => (
                          <>
                          <ListParts index={index} movie={movie}/>
                          </>
                        ))}
                  </div>
              <BiChevronRight className='list__svg right' onClick={() => handleScroll('right')} />
        </div>
      </div>
    )}
    </div>
  )
}

export default List