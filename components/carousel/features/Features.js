import { useState } from "react";

import styles from './features.module.css'
import Image from 'next/image'
import { Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

//icon
import IconFeature from '../../../assets/logo/icon_feature.svg'

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
  <div className={styles.featureItem}>
    <div className={styles.ftTitle}>แชทกับทนาย</div>
    <div className="d-flex justify-content-center">
      <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
    </div>
  </div>,
  <div className={styles.featureItem}>
    <div className={styles.ftTitle}>ว่าจ้างทนาย</div>
    <div className="d-flex justify-content-center">
      <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
    </div>
  </div>,
  <div className={styles.featureItem}>
    <div className={styles.ftTitle}>ใช้งานง่าย</div>
    <div className="d-flex justify-content-center">
      <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
    </div>
  </div>,
  <div className={styles.featureItemInvi}></div>,
  <div className={styles.featureItemInvi}></div>
]

const features = [
  {
    title: 'อธิบาย feature หนึ่ง',
    detail: 'ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนอย่างรวดเร็วตามการพัฒนาของเทคโนโลยี'
  },
  {
    title: 'อธิบาย feature สอง',
    detail: 'ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนอย่างรวดเร็วตามการพัฒนาของเทคโนโลยี'
  },
  {
    title: 'อธิบาย feature สาม',
    detail: 'ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนอย่างรวดเร็วตามการพัฒนาของเทคโนโลยี'
  }
]

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
}

export default function Feature() {
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(elements, [setThumbIndex, setThumbAnimation]))

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 3) {
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
    <div className="d-flex">
      <div className="d-none d-lg-block col-lg-2 col-xl-2"></div>
      <div className="col-12 col-lg-10">
        <div className={styles.featureText}>Our Feature</div>
        <div className={styles.featureBlock + ' flex-wrap flex-md-nowrap'}>
          <div className='d-none d-md-flex col-1 align-items-center justify-content-center'>
            {thumbIndex > 0 ?
              <div className={styles.featureAngle} onClick={() => slidePrev()} >
                <FontAwesomeIcon icon={faAngleLeft} size='3x' />
              </div>
              :
              <></>
            }
          </div>
          <div className='col-12 col-md-5 col-lg-5 d-flex align-items-center justify-content-center row'>
            <div className={styles.featureDetails}>
              <div className={styles.featureTitle}>{features[thumbIndex].title}</div>
              <div className={styles.featureTxt}>{features[thumbIndex].detail}</div>
              <div className="d-none d-sm-block">
                <Image src={IconFeature} height='240' />
              </div>
              <div className="d-block d-sm-none">
                <Image src={IconFeature} height='180' />
              </div>
            </div>
          </div>
          <div className='d-md-none col-1 d-flex align-items-center justify-content-center'>
            {thumbIndex > 0 ?
              <div className={styles.featureAngle} onClick={() => slidePrev()} >
                <FontAwesomeIcon icon={faAngleLeft} size='3x' />
              </div>
              :
              <></>
            }
          </div>
          <div className="d-none d-md-none col-1"></div>
          <div className='col-10 col-md-5 overflow-hidden d-flex align-items-center feature'>
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
            {thumbIndex < elements.length - 3 ?
              <div className={styles.featureAngleRight} onClick={() => slideNext()} >
                <FontAwesomeIcon icon={faAngleRight} size='3x' />
              </div>
              :
              <></>
            }
          </div>
        </div>
      </div>
    </div>
  )
}