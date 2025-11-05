const Solution = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-blue-800 mb-6 leading-tight font-lora'>
          Bộ Giải Pháp eKYC 2.0 Kết Nối Trực Tiếp Với Bộ Công An
        </h2>
        <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-roboto'>
          Xác thực CCCD gắn chip (IDCheck/eID Authentication) không chỉ là “một phiên bản nâng cấp
          của eKYC”, mà là nền tảng xác thực quốc gia, đóng vai trò xương sống cho hệ thống định
          danh số Việt Nam trong kỷ nguyên chuyển đổi số.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {/* Solution 1 */}
        <a
          href='/Solution/RarEkycPlatform'
          target='_blank'
          rel='noopener noreferrer'
          className='block bg-white rounded-2xl p-6 shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200 group hover:scale-105'
        >
          <div className='flex items-start mb-4'>
            <div className='bg-blue-100 p-3 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors duration-300'>
              <svg
                className='w-6 h-6 text-blue-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
                />
              </svg>
            </div>
            <div>
              <h3 className='text-xl font-bold text-gray-800 mb-2 font-lora'>
                RAR eKYC Platform - eID
              </h3>
              <p className='text-gray-600 leading-relaxed font-roboto'>
                Giải pháp định danh điện tử bằng thẻ Căn cước/Căn cước công dân xác thực dữ liệu
                trực tiếp với Bộ Công an
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-sm text-blue-600 font-medium'>
              <span className='font-roboto'>Kết nối trực tiếp</span>
              <div className='w-1 h-1 bg-blue-600 rounded-full mx-2'></div>
              <span className='font-roboto'>Bộ Công An</span>
            </div>
            <div className='flex items-center text-blue-600 group-hover:text-blue-700 transition-colors'>
              <span className='text-sm font-medium mr-2 font-roboto'>Khám phá</span>
              <svg
                className='w-4 h-4 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </div>
        </a>

        {/* Solution 2 */}
        <a
          href='/Solution/RarVNeidPlatform'
          className='block bg-white rounded-2xl p-6 shadow-sm border border-green-100 hover:shadow-lg transition-all duration-300 hover:border-green-200 group hover:scale-105'
        >
          <div className='flex items-start mb-4'>
            <div className='bg-green-100 p-3 rounded-xl mr-4 group-hover:bg-green-200 transition-colors duration-300'>
              <svg
                className='w-6 h-6 text-green-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
            <div>
              <h3 className='text-xl font-bold text-gray-800 mb-2 font-lora'>
                RAR VNeID Platform - VNeID
              </h3>
              <p className='text-gray-600 leading-relaxed font-roboto'>
                Giải pháp định danh điện tử, chia sẻ dữ liệu an toàn và bảo mật qua ứng dụng VNeID
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-sm text-green-600 font-medium'>
              <span className='font-roboto'>Ứng dụng di động</span>
              <div className='w-1 h-1 bg-green-600 rounded-full mx-2'></div>
              <span className='font-roboto'>VNeID</span>
            </div>
            <div className='flex items-center text-green-600 group-hover:text-green-700 transition-colors'>
              <span className='text-sm font-medium mr-2 font-roboto'>Khám phá</span>
              <svg
                className='w-4 h-4 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </div>
        </a>

        {/* Solution 3 */}
        <a
          href='/Solution/HtcEkycPlatform'
          className='block bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-lg transition-all duration-300 hover:border-purple-200 group hover:scale-105'
        >
          <div className='flex items-start mb-4'>
            <div className='bg-purple-100 p-3 rounded-xl mr-4 group-hover:bg-purple-200 transition-colors duration-300'>
              <svg
                className='w-6 h-6 text-purple-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
                />
              </svg>
            </div>
            <div>
              <h3 className='text-xl font-bold text-gray-800 mb-2 font-lora'>HTC eKYC Platform</h3>
              <p className='text-gray-600 leading-relaxed font-roboto'>
                Bộ giải pháp định danh điện tử eKYC toàn diện với công nghệ tiên tiến và bảo mật cao
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-sm text-purple-600 font-medium'>
              <span className='font-roboto'>Giải pháp toàn diện</span>
              <div className='w-1 h-1 bg-purple-600 rounded-full mx-2'></div>
              <span className='font-roboto'>Công nghệ cao</span>
            </div>
            <div className='flex items-center text-purple-600 group-hover:text-purple-700 transition-colors'>
              <span className='text-sm font-medium mr-2 font-roboto'>Khám phá</span>
              <svg
                className='w-4 h-4 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </div>
        </a>

        {/* Solution 4 */}
        <a
          href='/Solution/HtcEkycPlatform'
          className='block bg-white rounded-2xl p-6 shadow-sm border border-orange-100 hover:shadow-lg transition-all duration-300 hover:border-orange-200 group hover:scale-105'
        >
          <div className='flex items-start mb-4'>
            <div className='bg-orange-100 p-3 rounded-xl mr-4 group-hover:bg-orange-200 transition-colors duration-300'>
              <svg
                className='w-6 h-6 text-orange-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
                />
              </svg>
            </div>
            <div>
              <h3 className='text-xl font-bold text-gray-800 mb-2 font-lora'>ID Pass</h3>
              <p className='text-gray-600 leading-relaxed font-roboto'>
                Bộ giải pháp cung cấp thiết bị đọc thẻ Căn cước/Căn cước công dân xác thực dữ liệu
                với Bộ Công an
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-sm text-orange-600 font-medium'>
              <span className='font-roboto'>Thiết bị phần cứng</span>
              <div className='w-1 h-1 bg-orange-600 rounded-full mx-2'></div>
              <span className='font-roboto'>Đọc thẻ chuyên dụng</span>
            </div>
            <div className='flex items-center text-orange-600 group-hover:text-orange-700 transition-colors'>
              <span className='text-sm font-medium mr-2 font-roboto'>Khám phá</span>
              <svg
                className='w-4 h-4 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </div>
        </a>
      </div>

      {/* Features Banner */}
      <div className='mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-200'>
        <div className='grid md:grid-cols-3 gap-6 text-center'>
          <div className='flex flex-col items-center'>
            <div className='bg-blue-100 p-3 rounded-full mb-3'>
              <svg
                className='w-8 h-8 text-blue-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
            <h4 className='font-semibold text-gray-800 mb-2 font-roboto'>Bảo Mật Tuyệt Đối</h4>
            <p className='text-gray-600 font-roboto text-sm'>Kết nối trực tiếp với Bộ Công An</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-green-100 p-3 rounded-full mb-3'>
              <svg
                className='w-8 h-8 text-green-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h4 className='font-semibold font-roboto text-gray-800 mb-2'>Tốc Độ Cao</h4>
            <p className='text-gray-600 font-roboto text-sm'>Xác thực nhanh chóng trong vài giây</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-purple-100 p-3 rounded-full mb-3'>
              <svg
                className='w-8 h-8 text-purple-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                />
              </svg>
            </div>
            <h4 className='font-semibold font-roboto text-gray-800 mb-2'>Độ Chính Xác 99.9%</h4>
            <p className='text-gray-600 font-roboto text-sm'>Dữ liệu được xác thực chính xác</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
