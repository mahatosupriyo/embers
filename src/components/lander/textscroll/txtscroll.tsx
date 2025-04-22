'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './txtscroll.module.scss'

export default function TextHighlightScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  })

  const words = [
    'It', 'was', 'not', 'about', 'trends.',
    'It', 'was', 'about', 'taste.',
    'A', 'pitmaster', 'dream.', 'A', 'long,', 'slow', 'fire.',
    'Embers', 'is', 'a', 'tribute', 'to', 'tradition', '-',
    'where', 'each', 'cut,', 'each', 'spice,', 'and', 'each', 'second', 'matters.',
    'Made', 'with', 'obsession.', 'Served', 'with', 'pride.'
  ]
  
  

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <p style={{fontSize: '1.66rem', color: '#a7a7a7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2rem'}}>Make your story live</p>
        <motion.p
          initial={{ opacity: 0, y: '2%', filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false }}
          className={styles.mission}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={styles.word}
              style={{
                color: useTransform(
                  scrollYProgress,
                  [i / words.length, (i + 1) / words.length],
                  ["rgba(67, 67, 67, 0.4)", "rgb(0, 0, 0)"]
                )
              }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  )
}