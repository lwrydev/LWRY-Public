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
          <div className='d-none d-xl-block col-xl-1'></div>
          <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5'>
            <div>
              <div className={styles.mainContentText}>ข้อความหลักเว็บไซต์</div>
              <div className={styles.mainContentDetails}>ข้อความย่อย อธิบายหรือขยายความจากข้อความหลัก อธิบายหรือขยายความจากข้อความหลัก</div>
              <div className={styles.btnGroup}>
                <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
                <Button className={styles.btnPrice}>ดูราคาแพ็กเกจ</Button>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5'>
            <Image src={IconHome} height='400' />
          </div>
          <div className='d-none d-xl-block col-1'></div>
        </div>
      </div>
      <div className={styles.lwryDetailsBlock}>
        <div className='row flex-column-reverse flex-sm-column'>
          <div className='col-lg-1 col-xl-2'></div>
          <div className='col-lg-10 col-xl-4'>
            <div className={styles.lwryDetailsPic}></div>
          </div>
          <div className='d-lg-block col-lg-1 d-xl-none'></div>
          <div className='d-lg-block col-lg-1 d-xl-none'></div>
          <div className='col-lg-10 col-xl-4'>
            <div className={styles.lwryDetails}>
              <div className={styles.detailsContentText}>Lawlivery คืออะไร?</div>
              <div className={styles.detailsContentDetails}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง</div>
              <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
            </div>
          </div>
          <div className='col-lg-1 col-xl-2'></div>
        </div>
      </div>
      <div className={styles.aboutLwry}>
        <div className={styles.aboutLwryText}>ทำไมต้อง Lawlivery?</div>
        <div className='d-flex'>
          <div className='col-md-0 col-lg-1 col-xl-2'></div>
          <div className='col-sm-12 col-md-12 col-lg-10 col-xl-8'>
            <div className='d-md-flex'>
              <div className={styles.aboutLwryBox + ' d-flex flex-row d-md-block'}>
                <div className='col-4 col-sm-4 col-md-12'>
                  <div className={styles.aboutPic}></div>
                </div>
                <div className='col-sm-8 col-md-12'>
                  <div className={styles.aboutTitle + ' text-md-center'}>จุดขายที่หนึ่ง</div>
                  <div className={styles.aboutDetail + ' text-md-center'}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนา</div>
                </div>
              </div>
              <div className={styles.aboutLwryBox + ' d-flex flex-row d-md-block'}>
                <div className='col-4 col-sm-4 col-md-12'>
                  <div className={styles.aboutPic}></div>
                </div>
                <div className='col-sm-8 col-md-12'>
                  <div className={styles.aboutTitle + ' text-md-center'}>จุดขายที่สอง</div>
                  <div className={styles.aboutDetail + ' text-md-center'}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนา</div>
                </div>
              </div>
              <div className={styles.aboutLwryBox + ' d-flex flex-row d-md-block'}>
                <div className='col-4 col-sm-4 col-md-12'>
                  <div className={styles.aboutPic}></div>
                </div>
                <div className='col-sm-8 col-md-12'>
                  <div className={styles.aboutTitle + ' text-md-center'}>จุดขายที่สาม</div>
                  <div className={styles.aboutDetail + ' text-md-center'}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนา</div>
                </div>
              </div>
              <div className={styles.aboutLwryBox + ' d-flex flex-row d-md-block'}>
                <div className='col-4 col-sm-4 col-md-12'>
                  <div className={styles.aboutPic}></div>
                </div>
                <div className='col-sm-8 col-md-12'>
                  <div className={styles.aboutTitle + ' text-md-center'}>จุดขายที่สี่</div>
                  <div className={styles.aboutDetail + ' text-md-center'}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนา</div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-0 col-lg-1 col-xl-2'></div>
        </div>
      </div>
      <div className={styles.lwryDetailsBlock2}>
        <div className='d-flex'>
          <div className='col-sm-0 col-md-1 col-lg-1 col-xl-2'></div>
          <div className='col-sm-12 col-md-10 col-lg-10 col-xl-8'>
            <div className='row'>
              <div className='col-sm-12 col-md-12 col-lg-12 col-xl-6 d-flex align-items-center'>
                <div className={styles.lwryDetails}>
                  <div className={styles.detailsContentText}>Solution ของ Lawlivery</div>
                  <div className={styles.detailsContentDetails}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง</div>
                  <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
                </div>
              </div>
              <div className='col-1 d-md-none'></div>
              <div className='col-sm-10 col-md-12 col-lg-12 col-xl-6'>
                <div className={styles.lwryDetailsPic}></div>
              </div>
              <div className='col-1 d-md-none'></div>
            </div>
          </div>
          <div className='col-md-1 col-xl-2'></div>
        </div>
        <div className={styles.lwryDetails}>
        </div>
      </div>
      <Feature />
      <Blog />
    </div>
  )
}