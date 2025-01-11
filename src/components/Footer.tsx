export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
            <div>
              <h3 className="text-lg font-bold text-white">About Us</h3>
              <p className="mt-4 text-sm">
                We give you the best products!
              </p>
            </div>

  
            {/* Section 3: Social Media */}
            <div>
              <h3 className="text-lg font-bold text-white">Follow Us</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.5v-9.29H9.82v-3.62h3.005V8.413c0-2.967 1.808-4.582 4.447-4.582 1.264 0 2.353.093 2.668.135v3.097h-1.83c-1.433 0-1.71.682-1.71 1.682v2.204h3.423l-.447 3.62h-2.976V24h5.834c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.955 13.955 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.946 4.89a4.935 4.935 0 01-2.224.084 4.926 4.926 0 004.604 3.417A9.868 9.868 0 010 21.543a13.918 13.918 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.741 0 8.332.015 7.053.072c-1.281.058-2.16.256-2.921.54a5.945 5.945 0 00-2.148 1.39A5.944 5.944 0 00.57 4.653c-.284.762-.482 1.641-.54 2.921C0 8.741.015 9.149.072 10.429c.058 1.281.256 2.16.54 2.921a5.945 5.945 0 001.39 2.148 5.944 5.944 0 002.148 1.39c.762.284 1.641.482 2.921.54 1.281.057 1.689.072 2.969.072s1.688-.015 2.969-.072c1.281-.058 2.16-.256 2.921-.54a5.945 5.945 0 002.148-1.39 5.944 5.944 0 001.39-2.148c.284-.762.482-1.641.54-2.921.057-1.28.072-1.688.072-2.969s-.015-1.688-.072-2.969c-.058-1.281-.256-2.16-.54-2.921a5.945 5.945 0 00-1.39-2.148A5.944 5.944 0 0019.868.612C19.107.328 18.228.13 16.947.072 15.667.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 15.688a3.688 3.688 0 110-7.376 3.688 3.688 0 010 7.376zm6.406-10.844a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
            <p>© {currentYear} Web Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  