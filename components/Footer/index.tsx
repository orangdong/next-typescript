import Link from 'next/link';
import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style['footer-content']}>
        <div className={style['footer-link']}>
          <div className={style['link-container']}>
            <p className={style['link-head']}>Support</p>
            <Link href="#"><a className={style.link}>Help Center</a></Link>
            <Link href="#"><a className={style.link}>Safety Information</a></Link>
            <Link href="#"><a className={style.link}>FAQ</a></Link>
            <Link href="#"><a className={style.link}>Report an Issue</a></Link>
          </div>
          <div className={style['link-container']}>
            <p className={style['link-head']}>Community</p>
            <Link href="#"><a className={style.link}>Forum</a></Link>
            <Link href="#"><a className={style.link}>Testimonial</a></Link>
          </div>
          <div className={style['link-container']}>
            <p className={style['link-head']}>Company</p>
            <Link href="#"><a className={style.link}>Company Profile</a></Link>
            <Link href="#"><a className={style.link}>Careers</a></Link>
            <Link href="#"><a className={style.link}>Timeline</a></Link>
            <Link href="#"><a className={style.link}>Company Culture</a></Link>
          </div>
          <div className={style['link-container']}>
            <p className={style['link-head']}>About</p>
            <Link href="#"><a className={style.link}>About Us</a></Link>
            <Link href="#"><a className={style.link}>Investors</a></Link>
            <Link href="#"><a className={style.link}>Privacy & Policy</a></Link>
            <Link href="#"><a className={style.link}>Terms & Conditions</a></Link>
          </div>
        </div>
        <div className={style.copyright}>
          <div className={style['copyright-text']}>
            <p className={style['footer-text']}>© 2021 Sleepless Yeti</p>
            <span style={{ marginLeft: `${0.5}rem`, marginRight: `${0.5}rem` }}>·</span>
            <Link href="#"><a className={`${style.link} ${style['footer-text']}`}>Donations</a></Link>
            <span style={{ marginLeft: `${0.5}rem`, marginRight: `${0.5}rem` }}>·</span>
            <Link href="#"><a className={`${style.link} ${style['footer-text']}`}>Sitemap</a></Link>
          </div>
          <div className={style['social-media']}>
            <div className={style['language-container']}>
              <div>
                <i className={`${'bx'} ${'bx-globe'} ${style.globe}`} />
              </div>
              <p className={style.language}>English (US)</p>
            </div>
            <i className={`${'bx'} ${'bxl-facebook'} ${style['social-logo']}`} />
            <i className={`${'bx'} ${'bxl-twitter'} ${style['social-logo']}`} />
            <i className={`${'bx'} ${'bxl-instagram'} ${style['social-logo']}`} />
          </div>

        </div>
      </div>
    </footer>
  );
}
