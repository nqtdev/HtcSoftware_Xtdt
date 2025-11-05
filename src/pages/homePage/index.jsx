import CardBoy from 'assets/page_HomePage/cardCanCuoc/boyCard.webp'
import CardGirl from 'assets/page_HomePage/cardCanCuoc/girlCard.webp'
import BaoMat from 'assets/page_HomePage/baomat.webp'
import DescribeTitle from 'layout/DescribeTitle'
import CallToAction from 'layout/CallToAction'
// import QuyTrinhXacThuc from 'assets/page_HomePage/quytrinh.webp'
import MaoDanh from 'assets/page_HomePage/kyc/maodanh.webp'
import OtherProduct from 'components/otherProducts'
import Identifier from './components/identifier'
import Solution from './components/solution'
const Index = () => {
  return (
    <div className='overflow-hidden '>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        {/* Nền với hiệu ứng tối ưu hóa */}
        <div
          className='absolute inset-0 bg-bg-img-homepage bg-cover bg-center bg-no-repeat bg-fixed'
          style={{
            filter: 'brightness(0.6) contrast(1.2)',
          }}
        />
        <div className='relative z-10 text-center text-white px-4 max-w-4xl mx-auto'>
          <div className='mb-8 inline-block'>
            <h1 className='text-4xl md:text-6xl font-lora font-bold mb-6 leading-tight tracking-tight'>
              Căn Cước Gắn Chip
              <span className='block text-transparent font-lora text-white   py-2'>
                Căn Cước Công Dân Gắn Chip
              </span>
            </h1>
          </div>

          <div className='relative mb-10'>
            <p className='text-xl md:text-3xl font-roboto mb-8 leading-relaxed max-w-4xl mx-auto'>
              Độ chính xác <span className='font-roboto text-cyan-300'>100%</span> với cơ sở dữ liệu
              <span className='font-roboto text-yellow-300'> RAR-C06 </span>
              từ Bộ Công An
            </p>
            {/* Đường gạch chân trang trí */}
            <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></div>
          </div>
        </div>
        {/* Indicator cuộn xuống */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='flex flex-col items-center'>
            <span className='text-sm text-cyan-300 mb-2'>Khám phá</span>
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {/* CCCD Section */}
      <div className='container max-w-6xl m-auto'>
        {/* Giải pháp định danh  */}
        <section className='py-20 px-4 md:px-8 '>
          <Identifier />
          {/* Advantages Section */}
          {/* <div className='mb-16'>
            <DescribeTitle title='Ưu Điểm Của eKYC' />
            <div className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100'>
              <div className='flex flex-col lg:flex-row items-center gap-8'>
                <div className='lg:w-1/2'>
                  <div className='space-y-6'>
                    {[
                      {
                        title: 'Tốc độ vượt trội',
                        description: 'Quy trình xác thực nhanh chóng, tiện lợi cho người dùng',
                      },
                      {
                        title: 'Tiết kiệm chi phí',
                        description:
                          'Giảm thiểu nhân sự, giấy tờ và thời gian xử lý cho doanh nghiệp',
                      },
                      {
                        title: 'Phủ sóng toàn quốc',
                        description:
                          'Tiếp cận người dùng ở vùng sâu, vùng xa thông qua xác thực trực tuyến',
                      },
                      {
                        title: 'Hạn chế sai sót',
                        description: 'Giảm thiểu lỗi trong quá trình nhập liệu thủ công',
                      },
                    ].map((advantage, index) => (
                      <div key={index} className='flex items-start'>
                        <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0 mt-1'>
                          <svg
                            className='w-5 h-5 text-blue-600'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className='font-semibold font-roboto text-gray-800 mb-1 text-lg'>
                            {advantage.title}
                          </h4>
                          <p className='text-gray-600 font-roboto'>{advantage.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='lg:w-1/2'>
                  <img src={QuyTrinhXacThuc} alt='Quy trình xác thực eKYC' className=' w-full' />
                </div>
              </div>
            </div>
          </div> */}

          {/* Accuracy Section */}
          <div>
            <DescribeTitle title='Tính đúng đắn của eKYC' />
            <div className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100'>
              <div className='flex flex-col lg:flex-row items-center gap-8'>
                <div className='lg:w-1/2'>
                  <div className='space-y-4'>
                    <p className='text-gray-700 text-lg font-roboto'>
                      Mặc dù eKYC đã giúp rút ngắn quy trình, tăng độ chính xác và giảm chi phí,
                      song các giải pháp eKYC truyền thống vẫn phụ thuộc vào việc người dùng tự cung
                      cấp giấy tờ (CMND, CCCD bản chụp), và chỉ có thể đối chiếu thông tin bề mặt mà
                      không kiểm chứng được tính xác thực trong dữ liệu gốc của Nhà nước.
                    </p>
                    <div className='space-y-3'>
                      {[
                        {
                          title: 'Rủi ro bị mạo danh',
                          description: 'Thông tin đăng ký dịch vụ có thể bị mạo danh bởi kẻ gian',
                        },
                        {
                          title: 'Rủi ro xác thực giấy tờ',
                          description:
                            'Giấy tờ bị làm giả, khiến việc xác minh thông tin nhân thân, ảnh chụp không chính xác',
                        },
                        {
                          title: 'Bảo mật thông tin',
                          description:
                            'Nguy cơ lộ thông tin cá nhân trong quá trình truyền tải dữ liệu',
                        },
                      ].map((risk, index) => (
                        <div key={index} className='flex items-start'>
                          <div className='bg-red-100 p-1 rounded-full mr-3 flex-shrink-0 mt-1'>
                            <svg
                              className='w-5 h-5 text-red-600'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z'
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className='font-semibold font-roboto text-gray-800 mb-1 text-lg'>
                              {risk.title}
                            </h4>
                            <p className='text-gray-600 font-roboto'> -{risk.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className='text-gray-700 text-lg font-roboto'>
                      Do đó CCCD gắn chip ra đời cho phép Xác thực từ nguồn dữ liệu gốc (do Bộ Công
                      an cấp), đảm bảo độ tin cậy tuyệt đối. Loại bỏ hoàn toàn nguy cơ giả mạo giấy
                      tờ hoặc dùng ảnh, video giả. Hợp nhất dữ liệu định danh – sinh trắc học –
                      thông tin công dân trong một lần xác thực. Tăng hiệu quả chống gian lận, đặc
                      biệt trong lĩnh vực tài chính, ngân hàng, viễn thông và chính phủ số.
                    </p>
                  </div>
                </div>
                <div className='lg:w-1/2'>
                  <img src={MaoDanh} alt='Rủi ro mạo danh trong eKYC' className=' w-full ' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Định nghĩa CCCD là gì  */}
        <section className='py-20 px-4 md:px-8 '>
          <div className='max-w-6xl mx-auto'>
            <DescribeTitle title='Hiểu Thêm Về Thẻ Căn Cước' />
            <div className='flex flex-col lg:flex-row items-center gap-10'>
              <div className='lg:w-1/2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md'>
                    <div className='text-blue-600 text-4xl font-bold mb-4'>01</div>
                    <p className='text-gray-700 font-roboto text-lg'>
                      Thẻ căn cước công dân gắn chip (e-ID) là loại giấy tờ tùy thân mới, thay thế
                      cho CMND cũ và thẻ CCCD mã vạch.
                    </p>
                  </div>

                  <div className='bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md'>
                    <div className='text-blue-600 text-4xl font-bold mb-4'>02</div>
                    <p className='text-gray-700 font-roboto text-lg'>
                      e-ID đóng vai trò như thiết bị nhận diện, xác thực danh tính và truy cập thông
                      tin công dân từ cơ sở dữ liệu quốc gia.
                    </p>
                  </div>

                  <div className='bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md'>
                    <div className='text-blue-600 text-4xl font-bold mb-4'>03</div>
                    <p className='text-gray-700 font-roboto text-lg'>
                      Theo Bộ Công an, hơn 90 triệu thẻ CCCD gắn chip đã được cấp phát (trên 101
                      triệu công dân đủ điều kiện).
                    </p>
                  </div>

                  <div className='bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md'>
                    <div className='text-blue-600 text-4xl font-bold mb-4'>04</div>
                    <p className='text-gray-700 font-roboto text-lg'>
                      Chip của thẻ CCCD gắn chip là loại NFC chip nên có thể đọc được dữ liệu chip
                      này bằng các thiết bị hỗ trợ NFC như Smartphone, đầu đọc thẻ NFC... chuyên
                      dụng
                    </p>
                  </div>
                </div>
              </div>

              <div className='lg:w-1/2 flex flex-col md:flex-row gap-6 justify-center'>
                <div className='max-w-xs transform transition-all duration-500 hover:-translate-y-2'>
                  <div className='bg-white p-4 rounded-2xl shadow-lg'>
                    <img
                      className='w-full rounded-xl'
                      src={CardBoy}
                      alt='Căn cước công dân mẫu nam'
                    />
                  </div>
                </div>
                <div className='max-w-xs transform transition-all duration-500 hover:-translate-y-2'>
                  <div className='bg-white p-4 rounded-2xl shadow-lg'>
                    <img
                      className='w-full rounded-xl'
                      src={CardGirl}
                      alt='Căn cước công dân mẫu nữ'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Tính bảo mật của CCCD  */}
        <section className='py-20 px-4 md:px-8 '>
          <div className='max-w-6xl mx-auto'>
            <DescribeTitle
              title={'Bảo Mật Dữ Liệu CCCD Gắn Chip'}
              description={'Công nghệ bảo mật tiên tiến đảm bảo an toàn thông tin công dân'}
            />
            <div className='flex flex-col lg:flex-row items-center gap-10'>
              <div className='lg:w-1/2'>
                <div className='space-y-6'>
                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0 mt-1'>
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
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-2'>Dữ liệu mã hóa</h4>
                      <p className='text-gray-600 font-roboto'>
                        Dữ liệu (Data Group – DG) lưu trong Chip của CCCD gắn Chip là dữ liệu đã
                        được mã hóa, cần được giải mã để có thể sử dụng.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0 mt-1'>
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
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-2'>
                        Kiểm tra toàn vẹn dữ liệu
                      </h4>
                      <p className='text-gray-600 font-roboto'>
                        Dữ liệu trong Chip có thể đọc được bằng phần mềm NFC nhưng phải được kiểm
                        tra đảm bảo toàn vẹn dữ liệu giữa tất cả các DG bằng các thuật toán kiểm tra
                        (PA - Passive Authentication).
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0 mt-1'>
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
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-2'>Xác thực hợp pháp</h4>
                      <p className='text-gray-600 font-roboto'>
                        Dữ liệu trong Chip của CCCD gắn Chip được ký số và chỉ có thể xác thực hợp
                        pháp bởi Bộ Công an.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0 mt-1'>
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
                          d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-2'>
                        Bảo vệ chống truy cập trái phép
                      </h4>
                      <p className='text-gray-600 font-roboto'>
                        Nếu phần mềm đọc NFC Chip truy cập thẻ sai quy cách thì thẻ CCCD gắn Chip tự
                        động bị vô hiệu hóa, phải xin cơ quan Công an cấp lại.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0 mt-1'>
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
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-2'>Truyền dữ liệu an toàn</h4>
                      <p className='text-gray-600 font-roboto'>
                        Dữ liệu gửi từ các ứng dụng/SDK để được xác thực đều là dữ liệu mã hóa,
                        không phải dữ liệu có thể đọc được bình thường.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:w-1/2 flex justify-center'>
                <div className='max-w-md transform transition-all duration-500 hover:-translate-y-2'>
                  <div>
                    <img
                      src={BaoMat}
                      alt='Minh họa bảo mật dữ liệu CCCD gắn chip'
                      className='w-full rounded-xl'
                    />
                    <div className='mt-4 text-center'>
                      <p className='text-sm text-gray-500'>
                        Công nghệ bảo mật tiên tiến đảm bảo an toàn thông tin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <OtherProduct title='Các sản phẩm đọc thẻ của chúng tôi' />
        {/* Bộ giải pháp của HTC  */}
        <section className='py-16 px-4 md:px-8 '>
          <Solution />
        </section>
        {/* Các trường thông tin của CCCD/Căn cước */}

        <section className='py-20 px-4 md:px-8 '>
          <div className='max-w-6xl mx-auto'>
            <DescribeTitle
              title={'Dữ liệu xác thực của Bộ Công an trong Căn cước/Căn cước công dân'}
              description={
                'Phân tích chi tiết thông tin được lưu trữ và bảo mật trong chip điện tử'
              }
              className='text-center'
            />

            <div className='grid md:grid-cols-2 gap-8 mt-16'>
              {/* Thẻ Căn cước */}
              <div className='bg-gray-50 rounded-xl p-8 border border-gray-200'>
                <div className='flex items-center mb-8'>
                  <div className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold text-gray-900 font-lora'>Thẻ Căn cước</h3>
                  </div>
                </div>

                <div className='space-y-3'>
                  {[
                    'Họ, chữ đệm và tên khai sinh',
                    'Số định danh cá nhân',
                    'Quốc tịch',
                    'Ngày, tháng, năm sinh',
                    'Giới tính',
                    'Ngày, tháng, năm hết hạn',
                    'Quê quán',
                    'Thông tin sinh trắc học về ảnh khuôn mặt',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center py-2 border-b border-gray-100 last:border-b-0'
                    >
                      <div className='w-2 h-2 bg-blue-400 rounded-full mr-4'></div>
                      <span className='text-gray-700 font-roboto'>{item}</span>
                    </div>
                  ))}
                </div>

                <div className='mt-6 pt-6 border-t border-gray-200'>
                  <div className='flex items-center text-sm text-gray-600'>
                    <svg
                      className='w-4 h-4 mr-2 text-blue-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='font-roboto'>8 loại thông tin định danh</span>
                  </div>
                </div>
              </div>

              {/* Thẻ Căn cước công dân */}
              <div className='bg-gray-50 rounded-xl p-8 border border-gray-200'>
                <div className='flex items-center mb-8'>
                  <div className='w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold text-gray-900 font-lora'>
                      Thẻ Căn cước công dân
                    </h3>
                  </div>
                </div>

                <div className='space-y-3 max-h-80 overflow-y-auto pr-4'>
                  {[
                    'Số căn cước',
                    'Họ và tên',
                    'Ngày sinh',
                    'Giới tính',
                    'Quốc tịch',
                    'Nguyên quán',
                    'Ngày cấp',
                    'Ngày hết hạn',
                    'Số căn cước cũ',
                    'Dân tộc',
                    'Tôn giáo',
                    'Nhận dạng cá nhân',
                    'Thường trú',
                    'Họ tên cha, mẹ',
                    'Họ tên vợ, chồng',
                    'Mã MRZ CCCD',
                    'Ảnh Chân Dung Trong CCCD',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center py-2 border-b border-gray-100 last:border-b-0'
                    >
                      <div className='w-2 h-2 bg-green-500 rounded-full mr-4'></div>
                      <span className='text-gray-700 font-roboto'>{item}</span>
                    </div>
                  ))}
                </div>

                <div className='mt-6 pt-6 border-t border-gray-200'>
                  <div className='flex items-center text-sm text-gray-600'>
                    <svg
                      className='w-4 h-4 mr-2 text-green-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='font-roboto'>17 loại thông tin định danh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CallToAction />
    </div>
  )
}

export default Index
