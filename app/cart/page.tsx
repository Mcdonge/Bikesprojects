"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingCart, X, Plus, Trash2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import { toast } from "sonner"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          router.push("/auth/login")
          return
        }

        const response = await fetch("/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          if (response.status === 401) {
            router.push("/auth/login")
            return
          }
          throw new Error("Failed to fetch cart")
        }

        const data = await response.json()
        setCartItems(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchCart()
  }, [router])

  const handleRemoveItem = async (itemId: string) => {
    try {
      const token = localStorage.getItem("token")
      if (!token) return

      const response = await fetch(`/api/cart/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Failed to remove item")
      }

      // Refresh cart
      const updatedCart = await response.json()
      setCartItems(updatedCart)
      toast.success("Item removed from cart")
    } catch (err) {
      console.error("Error removing item:", err)
      toast.error("Failed to remove item")
    }
  }

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    try {
      const token = localStorage.getItem("token")
      if (!token) return

      const response = await fetch(`/api/cart/${itemId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      })

      if (!response.ok) {
        throw new Error("Failed to update quantity")
      }

      // Refresh cart
      const updatedCart = await response.json()
      setCartItems(updatedCart)
      toast.success("Quantity updated")
    } catch (err) {
      console.error("Error updating quantity:", err)
      toast.error("Failed to update quantity")
    }
  }

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-center">
          <Loader2 className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <div className="text-center text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <Button
          variant="outline"
          onClick={() => router.push("/bicycles")}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add More Items
        </Button>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-sm font-semibold text-muted-foreground">
            Your cart is empty
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Add items to your cart to see them here.
          </p>
          <Button
            variant="outline"
            onClick={() => router.push("/bicycles")}
            className="mt-4"
          >
            Browse Bicycles
          </Button>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>
                      ${item.price.toFixed(2)} per day
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      className="rounded-md p-1 hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="rounded-md p-1 hover:bg-accent"
                    >
                      +
                    </button>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="mt-8">
            <Card>
              <CardContent>
                <div className="flex justify-between items-center">
                  <CardTitle>Total</CardTitle>
                  <CardDescription>${getTotal().toFixed(2)}</CardDescription>
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => router.push("/bookings")}
                >
                  Proceed to Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
