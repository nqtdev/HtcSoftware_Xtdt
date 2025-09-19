import CardBoy from 'assets/page_HomePage/cardCanCuoc/boyCard.webp'
import CardGirl from 'assets/page_HomePage/cardCanCuoc/girlCard.webp'
import Ekyc from 'assets/page_HomePage/kyc/ekyc.webp'
import Kyc from 'assets/page_HomePage/kyc/kyc.webp'
import QuyTrinhXacThuc from 'assets/page_HomePage/quytrinh.webp'
import CallToAction from 'layout/callToAcction'
import DescribeTitle from 'layout/describeTitle/describeTitle'
import BaoMat from 'assets/page_HomePage/baomat.webp'
import OtherProduct from 'components/otherProducts'
const Index = () => {
  return (
    <div className='overflow-hidden bg-gray-50'>
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
            <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight'>
              Dịch Vụ Xác Thực
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 py-2'>
                Căn Cước Gắn Chip
              </span>
            </h1>
          </div>

          <div className='relative mb-10'>
            <p className='text-xl md:text-3xl font-semibold mb-8 leading-relaxed max-w-4xl mx-auto'>
              Độ chính xác <span className='font-bold text-cyan-300'>100%</span> với cơ sở dữ liệu
              <span className='font-semibold text-yellow-300'> RAR-C06 </span>
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
      <section className='py-20 px-4 md:px-8 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <DescribeTitle title='Hiểu Thêm Về Thẻ Căn Cước' />
          <div className='flex flex-col lg:flex-row items-center gap-10'>
            <div className='lg:w-1/2'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md'>
                  <div className='text-blue-600 text-4xl font-bold mb-4'>01</div>
                  <p className='text-gray-700 font-roboto text-lg'>
                    Thẻ căn cước công dân gắn chip (e-ID) là loại giấy tờ tùy thân mới, thay thế cho
                    CMND cũ và thẻ CCCD mã vạch.
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
                    Theo Bộ Công an, hơn 90 triệu thẻ CCCD gắn chip đã được cấp phát (trên 101 triệu
                    công dân đủ điều kiện).
                  </p>
                </div>

                <div className='bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md'>
                  <div className='text-blue-600 text-4xl font-bold mb-4'>04</div>
                  <p className='text-gray-700 font-roboto text-lg'>
                    Từ 01/01/2023, sổ hộ khẩu giấy hết hiệu lực. Người không có CCCD gắn chip không
                    được ghi vào hộ khẩu điện tử.
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
      <section className='py-20 px-4 md:px-8 bg-white'>
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
                      Dữ liệu (Data Group – DG) lưu trong Chip của CCCD gắn Chip là dữ liệu đã được
                      mã hóa, cần được giải mã để có thể sử dụng.
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
                    <h4 className='font-semibold text-gray-800 mb-2'>Kiểm tra toàn vẹn dữ liệu</h4>
                    <p className='text-gray-600 font-roboto'>
                      Dữ liệu trong Chip có thể đọc được bằng phần mềm NFC nhưng phải được kiểm tra
                      đảm bảo toàn vẹn dữ liệu giữa tất cả các DG bằng các thuật toán kiểm tra (PA -
                      Passive Authentication).
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
                      Dữ liệu gửi từ các ứng dụng/SDK để được xác thực đều là dữ liệu mã hóa, không
                      phải dữ liệu có thể đọc được bình thường.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 flex justify-center'>
              <div className='max-w-md transform transition-all duration-500 hover:-translate-y-2'>
                <div className='bg-white p-6 rounded-2xl shadow-lg border border-gray-100'>
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
      <section className='py-20 px-4 md:px-8 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <DescribeTitle
            title='Giải Pháp Xác Thực Danh Tính'
            description='Công nghệ hiện đại cho quy trình xác minh khách hàng an toàn và hiệu quả'
          />

          <div className='grid md:grid-cols-2 gap-10 mb-16'>
            <div className='bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md'>
              <div className='flex items-center mb-6'>
                <div className='bg-blue-100 p-3 rounded-lg mr-4'>
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
                      d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    ></path>
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-gray-800'>Xác Thực Truyền Thống (KYC)</h3>
              </div>
              <p className='text-gray-700 mb-6 font-roboto text-lg'>
                KYC (Know Your Customer) là quy trình thu thập thông tin khách hàng để xác định danh
                tính, kiểm tra tính xác thực và đánh giá rủi ro từ mối quan hệ với khách hàng đó.
              </p>
              <div className='bg-gray-100 p-4 rounded-lg mb-6'>
                <p className='text-gray-700 font-roboto'>Phương thức thực hiện:</p>
                <p className='text-gray-600 font-roboto'>
                  Gặp mặt trực tiếp, đối chiếu giấy tờ (CMND, hộ chiếu, giấy tờ có giá trị pháp lý)
                </p>
              </div>
              <img src={Kyc} alt='Quy trình KYC truyền thống' className='rounded-lg w-full' />
            </div>

            <div className='bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md'>
              <div className='flex items-center mb-6'>
                <div className='bg-green-100 p-3 rounded-lg mr-4'>
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
                      d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    ></path>
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-gray-800'>Xác Thực Điện Tử (eKYC)</h3>
              </div>
              <p className='text-gray-700 mb-6 font-roboto text-lg'>
                eKYC (Electronic Know Your Customer) là phiên bản số hóa của KYC, cho phép xác minh
                danh tính khách hàng từ xa thông qua các công nghệ điện tử tiên tiến.
              </p>
              <div className='bg-gray-100 p-4 rounded-lg mb-6'>
                <p className='text-gray-700 font-roboto'>Công nghệ ứng dụng:</p>
                <ul className='list-disc pl-5 text-gray-600'>
                  <li className='font-roboto'>Đối chiếu dữ liệu với Bộ Công An</li>
                  <li className='font-roboto'>Nhận dạng ký tự quang học (OCR)</li>
                  <li className='font-roboto'>Xác thực khuôn mặt và phát hiện sự sống</li>
                  <li className='font-roboto'>Chữ ký điện tử, mã OTP, vân tay</li>
                </ul>
              </div>
              <img src={Ekyc} alt='Quy trình eKYC hiện đại' className='rounded-lg w-full' />
            </div>
          </div>
          <OtherProduct />
          <div className='bg-white p-8 rounded-2xl shadow-sm'>
            <DescribeTitle title='Ưu Điểm Vượt Trội Của eKYC' />
            <div className='flex flex-col lg:flex-row items-center gap-8'>
              <div className='lg:w-1/2'>
                <div className='space-y-6'>
                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0'>
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
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-1 font-roboto '>
                        Tốc độ vượt trội
                      </h4>
                      <p className='text-gray-600 font-roboto'>
                        Quy trình xác thực nhanh chóng, tiện lợi cho người dùng
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0'>
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
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-1 font-roboto'>
                        Độ chính xác tuyệt đối
                      </h4>
                      <p className='text-gray-600 font-roboto'>
                        Đảm bảo 100% khi kết hợp với cơ sở dữ liệu RAR từ Bộ Công An
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0'>
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
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-1 font-roboto'>
                        Tiết kiệm chi phí
                      </h4>
                      <p className='text-gray-600 font-roboto'>
                        Giảm thiểu nhân sự, giấy tờ và thời gian xử lý cho doanh nghiệp
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0'>
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
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-1 font-roboto'>
                        Phủ sóng toàn quốc
                      </h4>
                      <p className='text-gray-600 font-roboto'>
                        Tiếp cận người dùng ở vùng sâu, vùng xa thông qua xác thực trực tuyến
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0'>
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
                          d='M5 13l4 4L19 7'
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800 mb-1 font-roboto'>
                        Hạn chế sai sót
                      </h4>
                      <p className='text-gray-600 font-roboto'>
                        Giảm thiểu lỗi trong quá trình nhập liệu thủ công
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:w-1/2'>
                <img
                  src={QuyTrinhXacThuc}
                  alt='Quy trình xác thực eKYC'
                  className='rounded-lg w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <CallToAction />
    </div>
  )
}

export default Index
