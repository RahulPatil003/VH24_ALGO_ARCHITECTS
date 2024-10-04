import React, { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import {
  BarChart,
  Users,
  BookOpen,
  ShoppingBag,
  LogOut,
  Menu,
  Bell
} from "lucide-react"

import { Button } from "../components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../components/ui/dropdown-menu"

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const location = useLocation()
  const userType = location.pathname.split("/")[1]

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white ${
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <h1
            className={`text-xl font-bold ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            Donation Platform
          </h1>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-8">
          <NavItem
            to={`/${userType}`}
            icon={<BarChart />}
            label="Dashboard"
            isOpen={isSidebarOpen}
          />
          <NavItem
            to={`/${userType}/profile`}
            icon={<Users />}
            label="Profile"
            isOpen={isSidebarOpen}
          />
          {userType === "donor" && (
            <>
              <NavItem
                to="/donor/donations"
                icon={<BookOpen />}
                label="Donations"
                isOpen={isSidebarOpen}
              />
              <NavItem
                to="/donor/campaigns"
                icon={<Users />}
                label="Campaigns"
                isOpen={isSidebarOpen}
              />
            </>
          )}
          {userType === "institute" && (
            <>
              <NavItem
                to="/institute/requests"
                icon={<BookOpen />}
                label="Requests"
                isOpen={isSidebarOpen}
              />
              <NavItem
                to="/institute/donors"
                icon={<Users />}
                label="Donors"
                isOpen={isSidebarOpen}
              />
            </>
          )}
          {userType === "supplier" && (
            <>
              <NavItem
                to="/supplier/inventory"
                icon={<ShoppingBag />}
                label="Inventory"
                isOpen={isSidebarOpen}
              />
              <NavItem
                to="/supplier/orders"
                icon={<BookOpen />}
                label="Orders"
                isOpen={isSidebarOpen}
              />
            </>
          )}
          <NavItem
            to="/logout"
            icon={<LogOut />}
            label="Logout"
            isOpen={isSidebarOpen}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {userType.charAt(0).toUpperCase() + userType.slice(1)} Dashboard
            </h2>
            <div className="flex items-center">
              <NotificationMenu />
              <UserMenu />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function NavItem({ to, icon, label, isOpen }) {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
    >
      {icon}
      {isOpen && <span className="ml-4">{label}</span>}
    </Link>
  )
}

function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuItem>
          <div className="flex flex-col">
            <span className="font-medium">New Donation Received</span>
            <span className="text-sm text-gray-500">
              You received a donation of $100
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-col">
            <span className="font-medium">Campaign Goal Reached</span>
            <span className="text-sm text-gray-500">
              Your campaign "School Supplies" reached its goal
            </span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <img
            className="h-8 w-8 rounded-full"
            src="/placeholder.svg?height=32&width=32"
            alt="User avatar"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
