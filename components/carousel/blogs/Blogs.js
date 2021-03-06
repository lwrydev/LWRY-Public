import { useState } from "react";

import styles from './blogs.module.css'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    i < items.length - 2 ?
      <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
        {item}
      </div> :
      <div className="thumb">
        {item}
      </div>
  ));
}

const elements = [
  <div className={styles.blogItem}>
    <div className={styles.blogBG}></div>
    <div className={styles.ftTitle}>บทความที่หนึ่ง</div>
    <div className={styles.blogDetails}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนอย่างรวดเร็วตามการพัฒนาของ</div>
  </div>,
  <div className={styles.blogItem}>
    <div className={styles.blogBG}></div>
    <div className={styles.ftTitle}>บทความที่สอง</div>
    <div className={styles.blogDetails}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนอย่างรวดเร็วตามการพัฒนาของ</div>
  </div>,
  <div className={styles.blogItem}>
    <div className={styles.blogBG}></div>
    <div className={styles.ftTitle}>บทความที่สาม</div>
    <div className={styles.blogDetails}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนอย่างรวดเร็วตามการพัฒนาของ</div>
  </div>,
  <div className={styles.blogItemInvi}></div>,
  <div className={styles.blogItemInvi}></div>,
  <div className={styles.blogItemInvi}></div>
]

const blogs = [
  {
    detail: 'ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง ปัจจุบัน...'
  },
  {
    detail: 'ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง ปัจจุบัน...ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง ปัจจุบัน...'
  },
  {
    detail: 'ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนอย่างรวดเร็วตามการพัฒนาของเทคโนโลยี'
  }
]

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
}

export default function Blog() {
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(elements, [setThumbIndex, setThumbAnimation]))

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 4) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);
  };

  return (
    <div className="row">
      <div className="d-sm-none d-md-none col-lg-1 col-xl-1"></div>
      <div className="col-sm-12 col-md-12 col-lg-11 col-xl-12">
        <div className={styles.blogText}>Blog</div>
        <div className={styles.blogBlock}>
          <div className="col-1 col-md-2 col-xl-2"></div>
          <div className="d-none d-sm-block col-1"></div>
          <div className='justify-content-center d-flex align-items-center'>
            {thumbIndex > 0 ?
              <div className={styles.blogAngle} onClick={() => slidePrev()} >
                <FontAwesomeIcon icon={faAngleLeft} size='3x' />
              </div>
              :
              <></>
            }
          </div>
          <div className='col-10 col-sm-10 col-lg-8 overflow-hidden d-flex align-items-center blog'>
            <AliceCarousel
              activeIndex={thumbIndex}
              autoWidth
              disableDotsControls
              disableButtonsControls
              items={thumbs}
              mouseTracking={false}
              touchTracking={false}
              onSlideChanged={syncThumbs}
              responsive={responsive}
            />
          </div>
          <div className='justify-content-center d-flex align-items-center'>
            {thumbIndex < elements.length - 4 ?
              <div className={styles.blogAngle} onClick={() => slideNext()} >
                <FontAwesomeIcon icon={faAngleRight} size='3x' />
              </div>
              :
              <></>
            }
          </div>
        </div>
        <div className={styles.details}>
          <div>{blogs[thumbIndex].detail}</div>
        </div>
      </div>
    </div>
  )
}