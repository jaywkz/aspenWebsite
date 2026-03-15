import React, { useEffect, useRef, useState } from 'react'
import type { JSX } from 'react'
import './Home.css'
import bigHugLogo from '../assets/bigHugLogo.png'
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
      <div ref={ref} className={`hero ${visible ? 'visible' : ''}`}>
        <img src={bigHugLogo} alt="Big Hug Logo" className="hero__logo" />
        <div className="hero__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien nec ipsum efficitur convallis. Curabitur a nunc ac nisl efficitur tincidunt. Donec
            eget ligula sed metus efficitur convallis. Sed at felis id enim efficitur
            consectetur.
          </p>
        </div>
      </div>
      <div className="stats-section">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-value">1,234</div>
            <div className="stat-label">Students served</div>
          </div>
          <div className="stat">
            <div className="stat-value">256</div>
            <div className="stat-label">Schools partnered</div>
          </div>
          <div className="stat">
            <div className="stat-value">98%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </div>

      <div className={`video-container ${videoVisible ? 'visible' : ''}`} ref={videoRef}>
        <div className={`video-wrapper ${videoVisible ? 'visible' : ''}`}>
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/ZwHVs7W6XdY"
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
            <p><a href="#">Student resources</a></p>
          </div>
          <img src={smallHugLogo} alt="students" className="info-card__img" />
        </div>
        <div className="info-card info-teachers">
          <div>
            <h3>Teachers</h3>
            <p><a href="#">Teacher resources</a></p>
          </div>
          <img src={smallHugLogo} alt="teachers" className="info-card__img" />
        </div>
        <div className="info-card info-parents">
          <div>
            <h3>Parents</h3>
            <p><a href="#">Parent resources</a></p>
          </div>
          <img src={smallHugLogo} alt="parents" className="info-card__img" />
        </div>
      </div>

      <footer className="site-footer">
        <div className="site-footer__inner">© {new Date().getFullYear()} Help Us Grow. All rights reserved.</div>
      </footer>
    </div>
  )
}
