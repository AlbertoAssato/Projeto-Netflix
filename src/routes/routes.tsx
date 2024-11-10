import { Route, Routes } from 'react-router-dom'
import { WhosWatching } from '../pages/whos-watching'

export function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WhosWatching />} />
      <Route path="/whos-watching" element={<WhosWatching />} />
    </Routes>
  )
}