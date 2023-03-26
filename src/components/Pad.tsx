/* eslint-disable jsx-a11y/media-has-caption */
import { Howl } from 'howler'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { PADS } from '../constants'

type PadProps = (typeof PADS)[number]

const Pad = ({ ...pad }: PadProps) => {
  const [isActive, setIsActive] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const playSound = () => {
    const sample = audioRef.current
    if (!sample) return

    const sound = new Howl({
      src: [sample.src],
      preload: true,
    })
    sound.play()

    setIsActive(true)
    setTimeout(() => setIsActive(false), 200)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent, code: string) => {
      if (e.code === code) {
        if (e.repeat) return
        playSound()
      }
    }
    document.addEventListener('keydown', (e) => handleKeyDown(e, pad.code))
    return () => {
      document.removeEventListener('keydown', (e) => handleKeyDown(e, pad.code))
    }
  }, [pad.code])

  return (
    <button
      onClick={playSound}
      className={twMerge(
        'w-full rounded-sm border-2 border-orange-500 bg-slate-900 px-4 py-8 text-center text-xl font-bold text-orange-500 transition-all hover:bg-slate-800',
        isActive && 'bg-orange-500 text-slate-900'
      )}
    >
      <audio ref={audioRef} id={pad.keyTrigger} src={pad.url} />
      {pad.keyTrigger}
    </button>
  )
}

export default Pad
