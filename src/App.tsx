import Pads from './components/Pads'
import VolumeSlider from './components/VolumeSlider'

function App() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <header>
          <h1 className="text-center text-4xl font-medium text-orange-500">TS-808</h1>
        </header>
        <main>
          <Pads />
          <VolumeSlider />
        </main>
      </div>
    </main>
  )
}

export default App
