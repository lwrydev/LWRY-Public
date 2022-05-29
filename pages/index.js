import { Button } from 'react-bootstrap'
import styles from '../styles/home.module.css'
import Image from 'next/image'

import Feature from '../components/carousel/features/Features'
import Blog from '../components/carousel/blogs/Blogs'

//icon
import IconHome from '../assets/logo/icon_homepage.svg'

export default function Home() {

  return (
    <div>
      <div className={styles.mainContent}>
        <div className={styles.picture}></div>
        <div className={styles.mainBlock}>
          <div className='col-1'></div>
          <div className='col-5'>
            <div>
              <div className={styles.mainContentText}>ข้อความหลักเว็บไซต์</div>
              <div className={styles.mainContentDetails}>ข้อความย่อย อธิบายหรือขยายความจากข้อความหลัก อธิบายหรือขยายความจากข้อความหลัก</div>
              <div className={styles.btnGroup}>
                <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
                <Button className={styles.btnPrice}>ดูราคาแพ็กเกจ</Button>
              </div>
            </div>
          </div>
          <div className='col-5'>
            <Image src={IconHome} />
          </div>
          <div className='col-1'></div>
        </div>
      </div>
      <div className={styles.lwryDetailsBlock}>
        <div className='d-flex'>
          <div className='col-2'></div>
          <div className='col-4'>
            <div className={styles.lwryDetailsPic}></div>
          </div>
          <div className='col-4'>
            <div className={styles.lwryDetails}>
              <div className={styles.detailsContentText}>Lawlivery คืออะไร?</div>
              <div className={styles.detailsContentDetails}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง</div>
              <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
            </div>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
      <div className={styles.aboutLwry}>
        <div className={styles.aboutLwryText}>ทำไมต้อง Lawlivery?</div>
        <div className='d-flex'>
          <div className='col-2'></div>
          <div className='col-9'>
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
          <div className='col-1'></div>
        </div>
      </div>
      <div className={styles.lwryDetailsBlock2}>
        <div className='d-flex'>
          <div className='col-2'></div>
          <div className='col-9'>
            <div className='d-flex'>
              <div className='col-6 d-flex align-items-center'>
                <div className={styles.lwryDetails}>
                  <div className={styles.detailsContentText}>Solution ของ Lawlivery</div>
                  <div className={styles.detailsContentDetails}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง</div>
                  <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
                </div>
              </div>
              <div className='col-6'>
                <div className={styles.lwryDetailsPic}></div>
              </div>
            </div>
          </div>
          <div className='col-1'></div>
        </div>
        <div className={styles.lwryDetails}>
        </div>
      </div>
      <Feature />
      <Blog />
    </div>
  )
}