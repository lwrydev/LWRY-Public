import { Navbar, Container, Nav } from "react-bootstrap"

import styles from '../navbar.module.css'

import IconMapLawyer from '../../../assets/logo/Icon_map_lawyer'
import IconMetroHammer from '../../../assets/logo/Icon_metro_hammer'
import IconSignature from '../../../assets/logo/Icon_signature'
import IconReadTheDocs from '../../../assets/logo/Icon_readthedocs'

export default function ProductMenu({ setShowProduct }) {
  return (
    <div
      className={styles.productBox}
      onMouseLeave={() => setShowProduct(false)}
    >
      <div className={styles.productItem}>
        <div className={styles.iconProduct}>
          <IconMapLawyer />
        </div>
        <div>
          <div className={styles.productTitle}>จุดเด่นผลิตภัณฑ์</div>
          <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
        </div>
      </div>
      <div className={styles.feature}>ฟีเจอร์การใช้งาน</div>
      <div className={styles.productItem}>
        <div className={styles.iconProduct}>
          <IconMetroHammer />
        </div>
        <div>
          <div className={styles.productTitle}>รับคำปรึกษาจากทนายความมืออาชีพ</div>
          <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
        </div>
      </div>
      <div className={styles.productItem}>
        <div className={styles.iconProduct}>
          <IconSignature />
        </div>
        <div>
          <div className={styles.productTitle}>ว่าจ้างทนายความมืออาชีพ</div>
          <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
        </div>
      </div>
      <div className={styles.productItem}>
        <div className={styles.iconProduct}>
          <IconReadTheDocs />
        </div>
        <div>
          <div className={styles.productTitle}>เป็นทนายความให้กับเรา</div>
          <div className={styles.productDetails}>ตอบโจทย์การทำงานของผู้ใช้งาน</div>
        </div>
      </div>
    </div>
  )
}