import { PADS } from '../constants'
import Pad from './Pad'

const Pads = () => {
  return (
    <div className="mx-2 mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {PADS.map((pad) => (
        <Pad key={pad.id} {...pad} />
      ))}
    </div>
  )
}

export default Pads
