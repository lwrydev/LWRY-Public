import { Button } from 'react-bootstrap'
import styles from './products.module.css'
import Image from 'next/image'

//icon
import IconSvg from '../../assets/logo/icon_logo.svg'
import IconMacbook from '../../assets/logo/icon_macbook.svg'
import IconIphoneGrb from '../../assets/logo/icon_iphone_grb.svg'

export default function Products() {
  return (
    <div>
      <div className={styles.mainContent}>
        <div className={styles.productsBox}>
          <div className='d-flex justify-content-center row'>
            <Image src={IconSvg} />
            <div className={styles.productTitle}>ข้อความหลักเว็บไซต์</div>
            <Button className={styles.btnInit}>เริ่มต้นใช้งาน</Button>
            <div className={styles.btnMore}>สอบถามเพิ่มเติม</div>
            <Image src={IconMacbook} height='380' />
          </div>
        </div>
        <div className={styles.featureBox}>
          <div className='d-flex'>
            <div className='col-6 d-flex align-items-center'>
              <div className={styles.featureItem}>
                <div className='d-flex'>
                  <div className='col-4'></div>
                  <div className='col-8'>
                    <div className='d-flex'>
                      <div className='row'>
                        <div className={styles.featureTitle}>นำเสนอฟีเจอร์ที่หนึ่งของ Lawlivery</div>
                        <div className={styles.featureDetail}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง ปัจจุบัน...</div>
                        <div className={styles.btnMore2}>สอบถามเพิ่มเติม</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className={styles.featurePic}></div>
            </div>
          </div>
          <div className='d-flex'>
            <div className='col-6 d-flex justify-content-center'>
              <div className={styles.featurePic}></div>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <div className={styles.featureItem}>
                <div className='d-flex'>
                  <div className='col-8'>
                    <div className='d-flex'>
                      <div className='row'>
                        <div className={styles.featureTitle}>นำเสนอฟีเจอร์ที่สองของ Lawlivery</div>
                        <div className={styles.featureDetail}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง ปัจจุบัน...</div>
                        <div className={styles.btnMore2}>สอบถามเพิ่มเติม</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-4'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex'>
            <div className='col-6 d-flex align-items-center'>
              <div className={styles.featureItem}>
                <div className='d-flex'>
                  <div className='col-4'></div>
                  <div className='col-8'>
                    <div className='d-flex'>
                      <div className='row'>
                        <div className={styles.featureTitle}>นำเสนอฟีเจอร์ที่สามของ Lawlivery</div>
                        <div className={styles.featureDetail}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง ปัจจุบัน...</div>
                        <div className={styles.btnMore2}>สอบถามเพิ่มเติม</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className={styles.featurePic}></div>
            </div>
          </div>
          <div className='d-flex'>
            <div className='col-6 d-flex justify-content-center'>
              <div className={styles.featurePic}></div>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <div className={styles.featureItem}>
                <div className='d-flex'>
                  <div className='col-8'>
                    <div className='d-flex'>
                      <div className='row'>
                        <div className={styles.featureTitle}>นำเสนอฟีเจอร์ที่สี่ของ Lawlivery</div>
                        <div className={styles.featureDetail}>ปัจจุบันโลกธุรกิจของเรามีการเปลี่ยนแปลงอย่างรวดเร็วตามการพัฒนาของเทคโนโลยีที่มีความก้าวหน้า อย่างไม่หยุดยั้งทำให้ผู้ประกอบการคงจะใช้วิธีการผลิต การจำหน่าย หรือการบริการแบบเดิม ๆ อีกต่อไปไม่ได้ เพราะอาจไม่สามารถตอบสนอง ปัจจุบัน...</div>
                        <div className={styles.btnMore2}>สอบถามเพิ่มเติม</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-4'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className='d-flex'>
            <div className='col-5 d-flex align-items-center'>
              <div className='col-4'></div>
              <div className='col-8'>
                <div className={styles.registerTitle}>สมัครใช้บริการของเรา Lawlivery</div>
                <Button className={styles.btnInit2}>เริ่มต้นใช้งาน</Button>
              </div>
            </div>
            <div className='col-7'>
              <Image src={IconIphoneGrb} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}