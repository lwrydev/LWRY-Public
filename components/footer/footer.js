import styles from './footer.module.css'
import { useRouter } from "next/router"

import Image from 'next/image'

//icon
import IconKBank from '../../assets/logo/icon_kbank.svg'
import IconSCB from '../../assets/logo/icon_scb.svg'
import IconMasterCard from '../../assets/logo/icon_mastercard.svg'
import IconVisa from '../../assets/logo/icon_visa.svg'
import IconPaypal from '../../assets/logo/icon_paypal.svg'
import IconMasterCard2 from '../../assets/logo/icon_mastercard2.svg'
import Logo2 from '../../assets/logo/Logo2.svg'
import IconGooglePlay from '../../assets/logo/icon_googleplay.svg'
import IconAppleStore from '../../assets/logo/icon_applestore.svg'
import IconFacebookFt from '../../assets/logo/facebook_ft.svg'
import IconTwitterFt from '../../assets/logo/twitter_ft.svg'
import IconYoutubeFt from '../../assets/logo/youtube_ft.svg'
import IconLinkedinFt from '../../assets/logo/linkedin_ft.svg'
import IconInstagramFt from '../../assets/logo/instagram_ft.svg'

export default function Footer() {

  const router = useRouter()

  return (
    <div className={styles.content}>
      <div className={styles.paymentMethod}>
        <div className='row'>
          <div className='col-1 col-xl-2'></div>
          <div className='col-11 col-xl-4'>
            <div className={styles.acceptedTxt}>Accepted Payment Methods</div>
            <div className='d-flex flex-wrap'>
              <div className={styles.paymentPic}>
                <Image src={IconKBank} />
              </div>
              <div className={styles.paymentPic}>
                <Image src={IconSCB} />
              </div>
              <div className={styles.paymentPic}>
                <Image src={IconMasterCard} />
              </div>
              <div className={styles.paymentPic}>
                <Image src={IconVisa} />
              </div>
              <div className={styles.paymentPic}>
                <Image src={IconPaypal} />
              </div>
            </div>
          </div>
          <div className='col-1 col-xl-2'></div>
          <div className='col-10 col-xl-2'>
            <div className={styles.acceptedTxt}>Verified Transaction</div>
            <div className='d-flex'>
              <div className={styles.paymentPic}>
                <Image src={IconMasterCard2} />
              </div>
              <div className={styles.paymentPic}>
                <Image src={IconVisa} />
              </div>
            </div>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
      <div className={styles.menuBlock}>
        <div className='row'>
          <div className='col-1 col-xl-2'></div>
          <div className='col-11 col-xl-8'>
            <div className='row'>
              <div className='col-4 col-md-3 col-lg-3 col-xl-3'>
                <div>
                  <Image src={Logo2} height='120' />
                </div>
                <div className={styles.mobileApp}>
                  <Image src={IconGooglePlay} />
                </div>
                <div className={styles.mobileApp}>
                  <Image src={IconAppleStore} />
                </div>
              </div>
              <div className='col-4 col-md-3 col-lg-3 col-xl-2'>
                <div className={styles.menuTitle}>Navigation</div>
                <div className={styles.subMenu} onClick={() => router.push('/')}>????????????????????????</div>
                <div className={styles.subMenu} onClick={() => router.push('/products')}>???????????????????????????</div>
                <div className={styles.subMenu}>????????????</div>
                <div className={styles.subMenu}>??????????????????????????????????????????????????????</div>
                <div className={styles.subMenu}>???????????????????????????????????????</div>
                <div className={styles.subMenu}>?????????????????????????????????</div>
              </div>
              <div className='col-4 col-md-3 col-lg-3 col-xl-2'>
                <div className={styles.menuTitle}>Account</div>
                <div className={styles.subMenu}>?????????????????????????????????</div>
                <div className={styles.subMenu}>?????????????????????????????????</div>
                <div className={styles.subMenu}>?????????????????????????????????</div>
              </div>
              <div className='col-4 d-block d-md-none'></div>
              <div className='col-4 col-md-3 col-lg-3 col-xl-2'>
                <div className={styles.menuTitle}>Support</div>
                <div className={styles.subMenu}>FAQ</div>
                <div className={styles.subMenu}>Help Center</div>
                <div className={styles.subMenu}>Terms Of Use</div>
                <div className={styles.subMenu}>Terms & Conditions</div>
              </div>
              <div className='d-none col-3 d-md-block d-xl-none'></div>
              <div className='col-4 col-md-3 col-lg-3 col-xl-2'>
                <div className={styles.menuTitle}>Follow us</div>
                <div className='d-flex'>
                  <div className={styles.followUs}>
                    <Image src={IconFacebookFt} height='24' />
                  </div>
                  <div className={styles.followUs}>
                    <Image src={IconTwitterFt} height='24' />
                  </div>
                  <div className={styles.followUs}>
                    <Image src={IconYoutubeFt} height='24' />
                  </div>
                </div>
                <div className='d-flex'>
                  <div className={styles.followUs}>
                    <Image src={IconLinkedinFt} height='24' />
                  </div>
                  <div className={styles.followUs}>
                    <Image src={IconInstagramFt} height='24' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-0 col-md-0 col-lg-0 col-xl-2'></div>
        </div>
      </div>
      <div className={styles.copyright}>Copyright ?? 2022 All Rights Reserved. v1.2.0 Lawlivery Co.,Ltd</div>
    </div>
  )
}