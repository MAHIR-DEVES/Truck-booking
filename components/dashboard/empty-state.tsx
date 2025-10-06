export default function EmptyState() {
    return (
      <div className="min-h-screen bg-white md:w-[1200px]">
        {/* Navigation */}
        <nav className="p-4 border-b">
          <div className="max-w-7xl mx-auto flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              পছন্দের ড্রাইভার
            </a>
            <a href="#" className="text-red-500 border-b-2 border-red-500">
              রকেট ড্রাইভার
            </a>
          </div>
        </nav>
  
        {/* Empty State Content */}
        <div className="max-w-md mx-auto mt-20 text-center px-4">
          {/* Illustration */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            {/* Down Arrow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-gray-200"></div>
            {/* Box */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-24 border-2 border-gray-200 rounded-lg"></div>
            {/* Decorative Leaves */}
            <div className="absolute bottom-0 left-0 w-8 h-8 text-gray-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 3C17.5 3 21 6.5 21 12C21 17.5 17.5 21 12 21C6.5 21 3 17.5 3 12C3 6.5 6.5 3 12 3Z" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 text-gray-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 3C17.5 3 21 6.5 21 12C21 17.5 17.5 21 12 21C6.5 21 3 17.5 3 12C3 6.5 6.5 3 12 3Z" />
              </svg>
            </div>
          </div>
  
          {/* Message */}
          <p className="text-gray-600 text-lg">কোনো রকেট ড্রাইভার নেই</p>
        </div>
      </div>
    )
  }
  
  