import { Howler } from 'howler'
import { useState } from 'react'

const VolumeSlider = () => {
  const [volume, setVolume] = useState(0.5)

  return (
    <>
      <h2 className="mt-8 text-center text-2xl text-orange-500">Volume</h2>
      <div className="mx-auto mt-4 max-w-md">
        <input
          type="range"
          step="0.01"
          min="0"
          max="1"
          onChange={(e) => {
            setVolume(parseFloat(e.target.value))
            Howler.volume(parseFloat(e.target.value))
          }}
          value={volume}
          className="w-full cursor-pointer  accent-orange-500"
        />
      </div>
    </>
  )
}

export default VolumeSlider
