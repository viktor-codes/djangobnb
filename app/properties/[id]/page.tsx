import Image from 'next/image'
import ReservationSideBar from '@/app/components/properties/ReservationSideBar'
const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
            <Image
            fill
            src="/beach_1.jpg"
            className='object-cover w-full h-full'
            alt='Beach house'
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-3 py-6 pr-6">
                <h1 className="mb-4 text-4xl">Property name</h1>

                <span className="mb-6 block text-lg text-gray-600">
                    4 guests · 2 bedrooms · 2 beds · 2 baths
                </span>
                <hr />
                <div className="py-6 flex items-center space-x-4">
                    <Image
                    src="/profile_pic_1.jpg"
                    alt="Profile picture"
                    width={50}
                    height={50}
                    className='rounded-full'
                    />

                    <p><strong>John Doe is your host</strong></p>
                </div>
                <hr />
                <p className="mt-6 text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum odio velit quos corporis qui necessitatibus impedit dicta quod esse placeat accusantium, vel cupiditate cumque nulla animi ullam quo. Minima, voluptatibus.
                </p>
            </div>
            <ReservationSideBar />
        </div>
    </main>
  )
  
}

export default PropertyDetailPage

