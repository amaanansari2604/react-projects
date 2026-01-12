import { MusicPlayer } from "./components/MusicPlayer"

function App() {

  return (
    <>
      <div className="app">
        {/* <Navbar></Navbar> */}

        <main className="app-main">
          <div className="player-section">
            <MusicPlayer></MusicPlayer>
          </div>
          <div className="content-section"></div>
        </main>
      </div>
    </>
  )
}

export default App
