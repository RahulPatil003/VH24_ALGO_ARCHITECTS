import React from 'react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Label } from '../components/ui/Label'
import { Heart, Building, Truck, CheckCircle } from "lucide-react"
import { useNavigate, Link } from 'react-router-dom'


export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">DonorNet</div>
        <nav>
          <Button variant="ghost"><Link to="/login">Login</Link></Button>
          <Button variant="outline" className="ml-2"><Link to="/signup">Sign Up</Link></Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Connecting Generosity with Need</h1>
          <p className="text-2xl text-gray-600 mb-8">Join our platform to make a difference in the world</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white"><Link to="/signup">Get Started</Link></Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="w-10 h-10 text-red-500 mb-2" />
            <h2 className="text-xl font-bold mb-2">For Donors</h2>
            <p className="text-gray-600 mb-4">Make a difference with your generosity</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Find causes you care about</li>
              <li>Track your donations</li>
              <li>See the impact of your giving</li>
            </ul>
            <Button className="w-full"><Link to="/donarRegistration">Donate Now</Link></Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Building className="w-10 h-10 text-blue-500 mb-2" />
            <h2 className="text-xl font-bold mb-2">For Institutes</h2>
            <p className="text-gray-600 mb-4">Receive support for your cause</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Create fundraising campaigns</li>
              <li>Manage donations efficiently</li>
              <li>Connect with donors and suppliers</li>
            </ul>
            <Button className="w-full"><Link to="/instituteRegistration">Register Institute</Link></Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Truck className="w-10 h-10 text-green-500 mb-2" />
            <h2 className="text-xl font-bold mb-2">For Suppliers</h2>
            <p className="text-gray-600 mb-4">Provide goods and services</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>List your products or services</li>
              <li>Fulfill donation requests</li>
              <li>Grow your business while helping others</li>
            </ul>
            <Button className="w-full"><Link to="/supplierRegistration">Become a Supplier</Link></Button>
          </div>
        </section>

        {/* <section className="text-center bg-blue-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-gray-600 mb-6">Together, we can make a lasting impact on communities in need</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up Now</Button>
        </section> */}

        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose DonorNet?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                Transparent and Secure
              </h3>
              <p className="text-gray-600">
                Our platform ensures every donation is tracked and used responsibly. We provide real-time updates and detailed reports, so you always know the impact of your generosity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                Diverse Causes
              </h3>
              <p className="text-gray-600">
                From education and healthcare to environmental conservation, we connect you with a wide range of verified causes that align with your values and passions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                Efficient Resource Allocation
              </h3>
              <p className="text-gray-600">
                Our unique supplier network ensures that donations are used efficiently, maximizing the impact of every contribution and reducing waste in the donation process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                Community-Driven
              </h3>
              <p className="text-gray-600">
                Join a vibrant community of donors, institutes, and suppliers all working together to create positive change. Share stories, collaborate on projects, and amplify your impact.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl font-semibold mb-4">Ready to make a difference?</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white"><Link to="/signup">Join DonorNet Today</Link></Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 p-4 text-center text-gray-600 mt-16">
        <p>&copy; 2024 DonorNet. All rights reserved.</p>
      </footer>
    </div>
  )
}