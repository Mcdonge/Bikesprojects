"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingCart, User, LogOut, Settings, Users, ChevronDown } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem("user") || sessionStorage.getItem("user")
        const token = localStorage.getItem("token") || sessionStorage.getItem("token")

        if (token && storedUser) {
          try {
            const userData = JSON.parse(storedUser)
            setUser(userData)
            setIsAuthenticated(true)
          } catch (error) {
            console.error("Error parsing user data:", error)
            throw error
          }
        } else {
          setUser(null)
          setIsAuthenticated(false)
        }
      } catch (error) {
        console.error("Authentication error:", error)
        toast.error("Error checking authentication")
        setUser(null)
        setIsAuthenticated(false)
        router.push("/auth/login")
      }
    }

    checkAuth()

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "user" || e.key === "token") {
        checkAuth()
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [router])

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("user")
      setIsAuthenticated(false)
      setUser(null)
      toast.success("Logged out successfully")
      
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'user',
        newValue: null
      }))
      
      await router.push("/auth/login")
      router.refresh()
    } catch (error) {
      console.error("Logout error:", error)
      toast.error("Error during logout")
    }
  }

  const handleCart = () => {
    if (!user) {
      toast.error("Please login to view cart")
      window.location.href = "/auth/login"
      return
    }
    window.location.href = "/cart"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Road bike logo.jpeg"
              alt="Miami Bikes Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="font-bold text-xl">Miami Bikes</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                pathname === item.href ? "text-blue-600" : "text-gray-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCart}
            className="md:hidden"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline">{user?.firstName}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {user?.isAdmin ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/admin/dashboard" className="flex items-center gap-2 w-full">
                        <Settings className="h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/admin/users" className="flex items-center gap-2 w-full">
                        <Users className="h-4 w-4" />
                        Users
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="flex items-center gap-2 w-full">
                        <User className="h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem asChild>
                  <Link href="/cart" className="flex items-center gap-2 w-full">
                    <ShoppingCart className="h-4 w-4" />
                    Cart
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/auth/login" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                Login
              </Link>
              <Link href="/auth/register" className="text-sm font-medium text-gray-600 hover:text-blue-600">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
