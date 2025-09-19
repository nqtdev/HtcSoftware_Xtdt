// @ Page sản phẩm HTC eKYC Platform
// Thêm hiệu ứng khi cuộn chuột
import Banner from 'assets/page_HtcEkycPlatform/banner.webp'
import Vt_xacthuc from 'assets/page_HtcEkycPlatform/section_characteristic/xac-thuc-nhanh-chong.webp'
import Vt_tangcuong from 'assets/page_HtcEkycPlatform/section_characteristic/tang-cuong-bao-mat.webp'
import Vt_tietkiem from 'assets/page_HtcEkycPlatform/section_characteristic/tiet-kiem-chi-phi.webp'
import Vt_caithien from 'assets/page_HtcEkycPlatform/section_characteristic/cai-thien-trai-nghiem.webp'
import Vt_tuanthu from 'assets/page_HtcEkycPlatform/section_characteristic/tuan-thu-quy-dinh.webp'
import Vt_dulieu from 'assets/page_HtcEkycPlatform/section_characteristic/du-lieu-minh-bach.webp'
import ID_OCR from 'assets/page_HtcEkycPlatform/section_service/img_1.webp'
import LiveNess_Check from 'assets/page_HtcEkycPlatform/section_service/img_2.webp'
import ID_Sanity from 'assets/page_HtcEkycPlatform/section_service/img_3.webp'
import CheckCCCD from 'assets/page_HtcEkycPlatform/section_service/img_6.webp'
import Number1 from 'assets/page_HtcEkycPlatform/number/number_1.webp'
import Number2 from 'assets/page_HtcEkycPlatform/number/number_2.webp'
import Number3 from 'assets/page_HtcEkycPlatform/number/number_3.webp'
import Number4 from 'assets/page_HtcEkycPlatform/number/number_4.webp'
import Star from 'assets/page_HtcEkycPlatform/icon_star.webp'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import {useEffect} from 'react'
// import useCheckMobile from 'hooks/useCheckMobile'
import CallToAction from 'layout/callToAcction'
import DescribeTitle from 'layout/describeTitle/describeTitle'

const HtcEkycPlatform = () => {
  // useEffect(() => {
  //   AOS.init({})
  // }, [])
  // const isMobile = useCheckMobile()

  return (
    <div className='overflow-hidden'>
      {/* Banner  */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 overflow-x-hidden'>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <div className='absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute top-1/4 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        </div>
        <div className='container mx-auto max-w-7xl relative z-10 px-4'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div
              className='w-full lg:w-1/2 text-center lg:text-left'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6'>
                HTC eKYC Platform
              </h1>
              <p className='text-xl md:text-2xl text-gray-700 mb-6'>
                Giải pháp định danh điện tử cho doanh nghiệp
              </p>
              <p className='text-gray-600 mb-8 leading-relaxed'>
                Nền tảng HTC eKYC là một giải pháp toàn diện, được trang bị các thuật toán và công
                nghệ thông minh, tiên tiến. Đồng thời, nó luôn được giám sát, cập nhật và tối ưu hóa
                để cung cấp chất lượng dịch vụ tốt nhất cho khách hàng.
              </p>
            </div>
            <div className='w-full lg:w-1/2' data-aos='fade-left' data-aos-delay='400'>
              <div className='relative items-center justify-center flex'>
                <div className='absolute -inset-5 '>
                  <div className='w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-blue-400 to-purple-600'></div>
                </div>
                <img
                  src={Banner}
                  alt='HTC eKYC Platform'
                  className='relative w-full max-w-md mx-auto lg:mx-0  transform hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vai trò của công nghệ EKYC  */}
      <section className='py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden'>
        <div className='container mx-auto max-w-6xl relative'>
          {/* Tiêu đề section */}
          <DescribeTitle
            title={'Vai trò của Công nghệ e-KYC'}
            description={
              'Khám phá những lợi ích nổi bật mà công nghệ e-KYC mang lại cho doanh nghiệp'
            }
          />

          {/* Lưới hiển thị các vai trò */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                icon: Vt_xacthuc,
                title: 'Xác thực danh tính nhanh chóng',
                desc: 'Giảm thiểu thời gian xác thực so với phương pháp thủ công.',
                delay: 200,
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Vt_tangcuong,
                title: 'Tăng cường bảo mật',
                desc: 'Sử dụng các phương pháp sinh trắc học như nhận dạng khuôn mặt và dấu vân tay.',
                delay: 300,
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: Vt_tietkiem,
                title: 'Tiết kiệm chi phí',
                desc: 'Giảm chi phí liên quan đến xử lý giấy tờ và nhân lực.',
                delay: 400,
                color: 'from-green-500 to-green-600',
              },
              {
                icon: Vt_caithien,
                title: 'Cải thiện trải nghiệm',
                desc: 'Khách hàng có thể xác thực từ xa mà không cần đến trực tiếp.',
                delay: 500,
                color: 'from-orange-500 to-orange-600',
              },
              {
                icon: Vt_tuanthu,
                title: 'Tuân thủ quy định',
                desc: 'Hiệu quả hơn trong việc tuân thủ các quy định về phòng chống rửa tiền.',
                delay: 600,
                color: 'from-red-500 to-red-600',
              },
              {
                icon: Vt_dulieu,
                title: 'Dữ liệu minh bạch',
                desc: 'Thu thập và lưu trữ dữ liệu chính xác, dễ dàng truy xuất.',
                delay: 700,
                color: 'from-indigo-500 to-indigo-600',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-delay={item.delay}
              >
                {/* Hiệu ứng gradient background trên hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Hiệu ứng border gradient trên hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5`}
                >
                  <div className='absolute inset-0 rounded-2xl bg-white'></div>
                </div>

                {/* Nội dung */}
                <div className='relative z-10 flex items-start'>
                  {/* Icon với hiệu ứng */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center p-2 mr-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <img src={item.icon} alt={item.title} className='w-12 h-12' />
                  </div>

                  {/* Text content */}
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
                  </div>
                </div>

                {/* Hiệu ứng decorative element */}
                <div
                  className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className='absolute left-0 -bottom-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob'></div>
          <div className='absolute right-10 -bottom-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000'></div>
        </div>

        <style>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>

      {/* HTC eKYC Platform mang lại */}
      <section className='py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden'>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle
            title={'Các dịch vụ chính'}
            description={'Khám phá các tính năng nổi bật của nền tảng eKYC hàng đầu'}
          />

          {/* ID Read (OCR) */}
          <div className='bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-12' data-aos='fade-up'>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-1/2 mb-6 md:mb-0 md:pr-8'>
                <div className='flex items-center mb-4'>
                  <img src={Number1} alt='number 1' className='w-10 h-10 mr-3' />
                  <h3 className='text-2xl font-semibold text-blue-700'>ID Reader (OCR)</h3>
                </div>
                <p className='text-gray-600 mb-4'>
                  OCR (Optical Character Recognition) được sử dụng để nhận dạng, quét ký tự bằng
                  quang học thông qua hình ảnh hoặc tệp PDF với độ chính xác rất cao. Đây là công
                  nghệ cần thiết để xây dựng luồng tiếp cận khách hàng Online (Digital Onboarding).
                </p>
                <div className='space-y-2'>
                  {[
                    'Giải pháp ID Reader hỗ trợ 4 loại giấy tờ CMND/CCCD, bằng lái xe, hộ chiếu.',
                    'Độ chính xác lên đến 98%.',
                    'Xử lý được những hình ảnh kém chất lượng (bị mờ, loá) hoặc ảnh đen trắng.',
                  ].map((item, index) => (
                    <div key={index} className='flex items-start'>
                      <img
                        src={Star}
                        alt='icon ngôi sao'
                        className='w-5 h-5 mt-1 mr-2 flex-shrink-0'
                      />
                      <span className='text-gray-600'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='md:w-1/2'>
                <img
                  src={ID_OCR}
                  alt='ID_OCR'
                  className='rounded-xl shadow-lg w-full max-w-md mx-auto'
                />
              </div>
            </div>
          </div>

          {/* Liveness Check */}
          <div
            className='bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-12'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <div className='flex flex-col md:flex-row-reverse items-center'>
              <div className='md:w-1/2 mb-6 md:mb-0 md:pl-8'>
                <div className='flex items-center mb-4'>
                  <img src={Number2} alt='number 2' className='w-10 h-10 mr-3' />
                  <h3 className='text-2xl font-semibold text-blue-700'>Liveness Check</h3>
                </div>
                <p className='text-gray-600 mb-4'>
                  Liveness Check là công nghệ hỗ trợ doanh nghiệp phát hiện, ngăn chặn các trường
                  hợp giả mạo (Fraud) khuôn mặt, hình ảnh, video.
                </p>
                <div className='space-y-2'>
                  {[
                    'Xác minh thông tin khách hàng đang thao tác tại thời gian thực.',
                    'Định danh chính chủ phát hiện trường hợp giả mạo.',
                    'Thực hiện phân tích dữ liệu để nhận biết video không phải bản phát lại.',
                  ].map((item, index) => (
                    <div key={index} className='flex items-start'>
                      <img
                        src={Star}
                        alt='icon ngôi sao'
                        className='w-5 h-5 mt-1 mr-2 flex-shrink-0'
                      />
                      <span className='text-gray-600'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='md:w-1/2'>
                <img
                  src={LiveNess_Check}
                  alt='LiveNess_Check'
                  className='rounded-xl shadow-lg w-full max-w-md mx-auto'
                />
              </div>
            </div>
          </div>

          {/* ID Sanity Check */}
          <div
            className='bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-12'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-1/2 mb-6 md:mb-0 md:pr-8'>
                <div className='flex items-center mb-4'>
                  <img src={Number3} alt='number 3' className='w-10 h-10 mr-3' />
                  <h3 className='text-2xl font-semibold text-blue-700'>ID Sanity Check</h3>
                </div>
                <p className='text-gray-600 mb-4'>
                  Giải pháp ID Sanity Check được xây dựng với những thuật toán thị giác máy tính
                  (Computer Vision) tiên tiến, hiện đại giúp cho doanh nghiệp dễ dàng kiểm tra được
                  chất lượng ảnh chụp.
                </p>
                <div className='space-y-2'>
                  {[
                    'Giải pháp ID Sanity Check được xây dựng với những thuật toán thị giác máy tính tiên tiến, hiện đại.',
                    'Phản hồi nhanh chóng, yêu cầu cung cấp lại ảnh mới.',
                    'Giải pháp toàn diện, lập trình thông minh thông qua Computer Vision.',
                  ].map((item, index) => (
                    <div key={index} className='flex items-start'>
                      <img
                        src={Star}
                        alt='icon ngôi sao'
                        className='w-5 h-5 mt-1 mr-2 flex-shrink-0'
                      />
                      <span className='text-gray-600'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='md:w-1/2'>
                <img
                  src={ID_Sanity}
                  alt='ID_Sanity'
                  className='rounded-xl shadow-lg w-full max-w-md mx-auto'
                />
              </div>
            </div>
          </div>

          {/* Xác minh CCCD gắn chip */}
          <div
            className='bg-white rounded-3xl p-6 md:p-8 shadow-xl'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <div className='flex flex-col md:flex-row-reverse items-center'>
              <div className='md:w-1/2 mb-6 md:mb-0 md:pl-8'>
                <div className='flex items-center mb-4'>
                  <img src={Number4} alt='number 4' className='w-10 h-10 mr-3' />
                  <h3 className='text-2xl font-semibold  text-blue-700'>Xác minh CCCD gắn chip</h3>
                </div>
                <p className='text-gray-600 mb-4'>
                  Đọc và xác minh thông tin trên CCCD gắn chip sử dụng kết nối NFC. Từ đó, kiểm tra
                  thông tin cá nhân khách hàng đã được xác thực bởi Bộ Công an một cách nhanh chóng
                  và chính xác.
                </p>
                <div className='space-y-2'>
                  {[
                    'Giao diện dễ dùng, tích hợp nhanh chóng trên mọi nền tảng, ứng dụng.',
                    'Đọc thông tin với độ chính xác tuyệt đối (thông tin được lưu trong thẻ chip).',
                    'Ngăn chặn, phát hiện CCCD không hợp lệ.',
                    'Xác minh nhanh chóng, bảo mật tuyệt đối.',
                  ].map((item, index) => (
                    <div key={index} className='flex items-start'>
                      <img
                        src={Star}
                        alt='icon ngôi sao'
                        className='w-5 h-5 mt-1 mr-2 flex-shrink-0'
                      />
                      <span className='text-gray-600'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='md:w-1/2'>
                <img
                  src={CheckCCCD}
                  alt='CheckCCCD'
                  className='rounded-xl shadow-lg w-full max-w-md mx-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full overflow-hidden'>
        <CallToAction />
      </section>
    </div>
  )
}

export default HtcEkycPlatform
