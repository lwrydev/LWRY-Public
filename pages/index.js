import { Button } from 'react-bootstrap'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.mainContent}>
        <div className={styles.picture}></div>
        <div className={styles.mainBlock}>
          <div className={styles.mainContentText}>ข้อความหลักเว็บไซต์</div>
          <div className={styles.mainContentDetails}>ข้อความย่อย อธิบายหรือขยายความจากข้อความหลัก อธิบายหรือขยายความจากข้อความหลัก</div>
          <div className={styles.btnGroup}>
            <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
            <Button className={styles.btnPrice}>ดูราคาแพ็กเกจ</Button>
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
          <div className={styles.aboutLwryBox}></div>
          <div className={styles.aboutLwryBox}></div>
          <div className={styles.aboutLwryBox}></div>
          <div className={styles.aboutLwryBox}></div>
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
        <div className={styles.featureText}>Our Feature</div>
        <div className={styles.featurePic}></div>
      </div>
      <div className={styles.blogBlock}>
        <div className={styles.blogText}>Blog</div>
        <div className={styles.blogPic}></div>
      </div>
    </div>
  )
}