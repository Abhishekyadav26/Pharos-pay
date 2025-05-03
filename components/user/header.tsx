import { Home } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Pharos Pay', url: 'https://v0-pharos-blockchain-app.vercel.app/', icon: Home }
  ]

  return <NavBar items={navItems} />
}