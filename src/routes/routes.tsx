import { Route, Routes } from 'react-router-dom'
import { WhosWatching } from '../pages/whos-watching'
import { Home } from '../pages/home'

export function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whos-watching" element={<WhosWatching />} />
    </Routes>
  )
}