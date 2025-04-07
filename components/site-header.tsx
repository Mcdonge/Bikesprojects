"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingCart, User, LogOut, Settings, Users } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Bicycles", href: "/bicycles" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

interface UserData {
  id: string
  email: string
  firstName: string
  lastName: string
  isAdmin: boolean
}

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem("user")
    const token = localStorage.getItem("token")

    if (token && storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        setUser(userData)
        setIsAuthenticated(true)
      } catch (error) {
        console.error("Error parsing user data:", error)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
      }
    } else {
      setIsAuthenticated(false)
      setUser(null)
    }

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "user" || e.key === "token") {
        const newUser = localStorage.getItem("user")
        const newToken = localStorage.getItem("token")
        
        if (newToken && newUser) {
          try {
            const userData = JSON.parse(newUser)
            setUser(userData)
            setIsAuthenticated(true)
          } catch (error) {
            console.error("Error parsing user data:", error)
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            setIsAuthenticated(false)
            setUser(null)
          }
        } else {
          setIsAuthenticated(false)
          setUser(null)
        }
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsAuthenticated(false)
    setIsUserMenuOpen(false)
    setUser(null)
    toast.success("Logged out successfully")
    window.location.href = "/"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/Road bike logo.jpeg"
              alt="Miami Bikes Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="hidden font-bold sm:inline-block">Miami Bikes</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {isAuthenticated ? (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="relative"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">User Menu</span>
              </Button>
              {isUserMenuOpen && (
                <div className="absolute right-0 top-12 w-48 rounded-md border bg-popover p-2 shadow-md">
                  <div className="flex flex-col space-y-1">
                    <Link
                      href="/profile"
                      className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                    {user?.isAdmin && (
                      <>
                        <Link
                          href="/admin"
                          className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Dashboard
                        </Link>
                        <Link
                          href="/admin/users"
                          className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Users
                        </Link>
                      </>
                    )}
                    <Link
                      href="/settings"
                      className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
          )}
          <Link href="/bookings">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Bookings</span>
            </Button>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto">
          <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Road bike logo.jpeg"
                alt="Miami Bikes Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="font-bold">Miami Bikes</span>
            </Link>
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                    pathname === item.href ? "bg-muted" : "transparent"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link
                    href="/profile"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  {user?.isAdmin && (
                    <>
                      <Link
                        href="/admin"
                        className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/admin/users"
                        className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Users
                      </Link>
                    </>
                  )}
                  <Link
                    href="/settings"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

