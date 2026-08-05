import { Navbar } from './components/layout/Navbar'
import { Docker } from './components/sections/Docker'
import { Features } from './components/sections/Features'
import { Footer } from './components/sections/Footer'
import { Hero } from './components/sections/Hero'
import { Performance } from './components/sections/Performance'
import { Problems } from './components/sections/Problems'
import { Security } from './components/sections/Security'
import { Terminal } from './components/sections/Terminal'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Security />
        <Performance />
        <Terminal />
        <Docker />
      </main>
      <Footer />
    </div>
  )
}

export default App
