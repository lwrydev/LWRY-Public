import { Button, Carousel } from 'react-bootstrap'
import styles from '../styles/home.module.css'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
//icon
import IconHome from '../assets/logo/icon_homepage.svg'
import IconFeature from '../assets/logo/icon_feature.svg'
import { useState } from 'react'

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div className={styles.mainContent}>
        <div className={styles.picture}></div>
        <div className={styles.mainBlock}>
          <div className='col-5 d-flex align-items-center'>
            <div>
              <div className={styles.mainContentText}>ข้อความหลักเว็บไซต์</div>
              <div className={styles.mainContentDetails}>ข้อความย่อย อธิบายหรือขยายความจากข้อความหลัก อธิบายหรือขยายความจากข้อความหลัก</div>
              <div className={styles.btnGroup}>
                <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
                <Button className={styles.btnPrice}>ดูราคาแพ็กเกจ</Button>
              </div>
            </div>
          </div>
          <div className='col-7'>
            <Image src={IconHome} />
          </div>
        </div>
      </div>
      <div className={styles.lwryDetailsBlock}>
        <div className={styles.lwryDetailsPic}></div>
        <div className={styles.lwryDetails}>
          <div className={styles.detailsContentText}>Lawlivery คืออะไร?</div>
          <div className={styles.detailsContentDetails}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง</div>
        </div>
      </div>
      <div className={styles.aboutLwry}>
        <div className={styles.aboutLwryText}>ทำไมต้อง Lawlivery?</div>
        <div className={styles.aboutLwryGrp}>
          <div className={styles.aboutLwryBox}>
            <div className={styles.aboutPic}></div>
            <div className={styles.aboutTitle}>จุดขายที่หนึ่ง</div>
            <div className={styles.aboutDetail}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนา</div>
          </div>
          <div className={styles.aboutLwryBox}>
            <div className={styles.aboutPic}></div>
            <div className={styles.aboutTitle}>จุดขายที่สอง</div>
            <div className={styles.aboutDetail}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนา</div>
          </div>
          <div className={styles.aboutLwryBox}>
            <div className={styles.aboutPic}></div>
            <div className={styles.aboutTitle}>จุดขายที่สาม</div>
            <div className={styles.aboutDetail}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนา</div>
          </div>
          <div className={styles.aboutLwryBox}>
            <div className={styles.aboutPic}></div>
            <div className={styles.aboutTitle}>จุดขายที่สี่</div>
            <div className={styles.aboutDetail}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนา</div>
          </div>
        </div>
      </div>
      <div className={styles.lwryDetailsBlock2}>
        <div className={styles.lwryDetails}>
          <div className={styles.detailsContentText}>Solution ของ Lawlivery</div>
          <div className={styles.detailsContentDetails}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง</div>
        </div>
        <div className={styles.lwryDetailsPic}></div>
      </div>
      <div className={styles.featureBlock}>
        <div className='col-1 d-flex align-items-center justify-content-center'>
          <div className={styles.featureAngle}>
            <FontAwesomeIcon icon={faAngleLeft} size='3x' />
          </div>
        </div>
        <div className='col-4'>
          <div className={styles.featureText}>Our Feature</div>
          <div className={styles.featureDetails}>
            <div className={styles.featureTitle}>อธิบาย feature หนึ่ง</div>
            <div className={styles.featureTxt}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนอย่างรวดเร็วตามการพัฒนาของเทคโนโลยี</div>
            <Image src={IconFeature} height='240' />
          </div>
        </div>
        <div className='col-7 overflow-hidden d-flex align-items-center'>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.ftTitle}>แชทกับทนาย</div>
            </div>
            <div className={styles.featureItemHide}>
              <div className={styles.ftTitle}>ว่าจ้างทนาย</div>
            </div>
            <div className={styles.featureItemHide}>
              <div className={styles.ftTitle}>ใช้งานง่าย</div>
            </div>
          </div>
        </div>
        <div className={styles.featureAgBox}>
          <div className={styles.featureAngle}>
            <FontAwesomeIcon icon={faAngleRight} size='3x' />
          </div>
        </div>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <div className={styles.featureItem}>
            <div className={styles.ftTitle}>แชทกับทนาย</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.featureItem}>
            <div className={styles.ftTitle}>แชทกับทนาย</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.featureItem}>
            <div className={styles.ftTitle}>แชทกับทนาย</div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className={styles.blogBlock}>
        <div className={styles.blogText}>Blog</div>
        <div className={styles.blogPic}></div>
      </div>
    </div>
  )
}