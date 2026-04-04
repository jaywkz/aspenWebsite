import { useEffect, useRef, useState } from 'react'
import type { JSX } from 'react'
import './Home.css'
import bigHugLogo from '../assets/Full BodyB_WTransparent.png'
import smallHugLogo from '../assets/smallHugLogo.png'

export default function Home(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const videoRef = useRef<HTMLDivElement | null>(null)
  const [videoVisible, setVideoVisible] = useState(false)
  const infoRef = useRef<HTMLDivElement | null>(null)
  const [infoVisible, setInfoVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const node = infoRef.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInfoVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="page">

      <div className = "topTextDiv">
        <p className='topText'>We all need a HUG.</p>
      </div>

      <div ref={ref} className={`hero ${visible ? 'visible' : ''}`}>
        <img src={bigHugLogo} alt="Big Hug Logo" className="hero__logo" />
        <div className="hero__text">
          <p>
            Help Us Grow (HUG) is a student-led initiative from Boston Latin Academy attempting to close the perception gap between teachers who don't believe
            their students' mental health can impact their academic performance, and the large group of kids who report that it does.
            We believe that everybody, teachers and students, need a HUG, and that by raising awareness to the issues both groups face,
            we can create a more supportive and understanding school environment for everyone.
          </p>
        </div>
      </div>
      <div className="stats-section">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-value">50%</div>
            <div className="stat-label">B Students report mental health issues</div>
          </div>
          <div className="stat">
            <div className="stat-value">80%</div>
            <div className="stat-label">Teachers nationwide don't believe their students are struggling</div>
          </div>
          <div className="stat">
            <div className="stat-value">100%</div>
            <div className="stat-label">Of us need a HUG</div>
          </div>
        </div>
      </div>

      <div className={`video-container ${videoVisible ? 'visible' : ''}`} ref={videoRef}>
        <div className={`video-wrapper ${videoVisible ? 'visible' : ''}`}>
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/watch?v=g0lSixkzGOY"
            title="Intro video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className={`info-sections ${infoVisible ? 'visible' : ''}`} ref={infoRef}>
        <div className="info-card info-students">
          <div>
            <h3>Students</h3>
            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfYTbPoeqaFRdvshaBZNQTGriwxZQa5ATmi6npxpIJUFCJdSQ/viewform?usp=dialog">Student survey</a></p>
          </div>
          <img src={smallHugLogo} alt="students" className="info-card__img" />
        </div>
        <div className="info-card info-teachers">
          <div>
            <h3>Teachers</h3>
            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfQNw4jAD2rdnLd0Zhlw6WOIGoyOiTOrd_6h4CbO6DiPufMuQ/viewform?usp=dialog">Teacher survey</a></p>
          </div>
          <img src={smallHugLogo} alt="teachers" className="info-card__img" />
        </div>
      </div>

      <footer className="site-footer">
        <div className="site-footer__inner">© {new Date().getFullYear()} Help Us Grow. All rights reserved.</div>
        <div className="site-footer__inner">Contact: jakeybink@gmail.com</div>
      </footer>
    </div>
  )
}
