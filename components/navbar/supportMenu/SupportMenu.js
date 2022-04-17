import styles from '../navbar.module.css'

import IconDollars from '../../../assets/logo/Icon_dollars'
import IconChat from '../../../assets/logo/Icon_chat'
import IconSign from '../../../assets/logo/icon_sign'
import IconBook from '../../../assets/logo/Icon_book'
import IconConversation from '../../../assets/logo/icon_conversation'
import IconBadFeedback from '../../../assets/logo/icon_bad_feedback'
import IconUnion from '../../../assets/logo/icon_union'

export default function SupportMenu({ setShowSupport }) {
  return (
    <div
      className={styles.supportBox}
      onMouseLeave={() => setShowSupport(false)}
    >
      <div className={styles.manualBox}>
        <div className={styles.feature}>คู่มือการใช้งาน</div>
        <div className={styles.productItem}>
          <div className={styles.iconProduct}>
            <IconDollars />
          </div>
          <div>
            <div className={styles.productTitle}>วิธีการสั่งซื้อ</div>
            <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
          </div>
        </div>
        <div className={styles.productItem}>
          <div className={styles.iconProduct}>
            <IconChat />
          </div>
          <div>
            <div className={styles.productTitle}>ขั้นตอนการรับคำปรึกษา</div>
            <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
          </div>
        </div>
        <div className={styles.productItem}>
          <div className={styles.iconProduct}>
            <IconSign />
          </div>
          <div>
            <div className={styles.productTitle}>ขั้นตอนการว่าจ้างทนาย</div>
            <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
          </div>
        </div>
        <div className={styles.productItem}>
          <div className={styles.iconProduct}>
            <IconConversation />
          </div>
          <div>
            <div className={styles.productTitle}>คำถามที่พบบ่อย</div>
            <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
          </div>
        </div>
      </div>
      <div className={styles.manualBox}>
        <div className={styles.feature}>การสนับสนุน</div>
        <div className={styles.productItem}>
          <div className={styles.iconProduct}>
            <IconBook />
          </div>
          <div>
            <div className={styles.productTitle}>คู่มือการใช้งานเว็บไซต์</div>
            <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
          </div>
        </div>
        <div className={styles.productItem}>
          <div className={styles.iconProduct}>
            <IconBadFeedback />
          </div>
          <div>
            <div className={styles.productTitle}>รับเรื่องร้องเรียน</div>
            <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
          </div>
        </div>
        <div className={styles.productItem}>
          <div className={styles.iconProduct}>
            <IconUnion />
          </div>
          <div>
            <div className={styles.productTitle}>ติดต่อเรา</div>
            <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
          </div>
        </div>
      </div>
    </div>
  )
}