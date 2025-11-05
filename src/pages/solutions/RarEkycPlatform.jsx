import Banner from 'assets/page_RarEkycPlatform/banner.webp'
import IconNFC from 'assets/page_RarEkycPlatform/section_content/scan_nfc.png'
import IconLiveNess from 'assets/page_RarEkycPlatform/section_content/liveness.png'
import IconConnect from 'assets/page_RarEkycPlatform/section_content/connect.png'
import IconShow from 'assets/page_RarEkycPlatform/section_content/view.png'
import IconNfc from 'assets/page_RarEkycPlatform/section_content_b/icon_nfc.png'
import IconSdk from 'assets/page_RarEkycPlatform/section_content_b/icon_sdk.png'
import IconApi from 'assets/page_RarEkycPlatform/section_content_b/icon_api.png'
import Banner_CCDV from 'assets/page_RarEkycPlatform/section_content_b/banner_section.png'
import PartnerLogo from 'components/rarEkyc/PartnerLogo'
import Certificate from 'components/rarEkyc/Certificate'
import ButtonContact from 'layout/buttons/ButtonContact'
import DescribeTitle from 'layout/DescribeTitle'
import CallToAction from 'layout/CallToAction'
import OnClound from 'assets/page_RarEkycPlatform/onCloud.webp'
import OnPremises from 'assets/page_RarEkycPlatform/onPremises.webp'
import LogoRar from 'assets/page_RarEkycPlatform/logoRar.webp'
import {Shield, Lock, Key, FileCheck, Cpu} from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const RarEkycPlatform = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])
  return (
    <div className='overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50/30'>
      {/* Hero Section - Giữ nguyên */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4'>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <div className='absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute top-1/4 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        </div>

        <div className='container mx-auto max-w-7xl relative z-10'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
            <div
              className='w-full lg:w-1/2 text-center lg:text-left'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6 leading-tight'>
                RAR eKYC Platform
              </h1>
              <p className='text-xl md:text-2xl text-gray-700 mb-6 font-medium'>
                Xác thực căn cước công dân gắn chip chính xác{' '}
                <span className='font-bold text-green-600'>100%</span> với cơ sở dữ liệu
                <span className='font-bold text-green-600'> RAR-C06</span> của Bộ Công An
              </p>
              <p className='text-gray-600 font-roboto mb-8 leading-relaxed text-lg'>
                RAR EKYC PLATFORM là hệ thống phần mềm do{' '}
                <b className='text-yellow-500 font-roboto'>
                  Trung tâm nghiên cứu - ứng dụng dữ liệu dân cư và căn cước công dân
                </b>{' '}
                , hợp tác với{' '}
                <b className='text-blue-800 font-roboto'>Công ty cổ phần giải pháp phần mềm HTC</b>{' '}
                xây dựng, cho phép quản lý, cấp phép, kiểm soát và thu phí hoạt động cung cấp dịch
                vụ xác thực thông tin công dân trong chip của thẻ căn cước công dân cho mục đích
                thương mại theo quy định của pháp luật
              </p>
            </div>
            <div className='w-full lg:w-1/2' data-aos='fade-left' data-aos-delay='400'>
              <div className='relative items-center justify-center flex'>
                {/* <div className='absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl'></div> */}
                <img
                  src={Banner}
                  alt='RAR eKYC Platform'
                  className='relative w-full max-w-lg mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-700  '
                  data-aos='zoom-in'
                  data-aos-delay='600'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phần Tính bảo mật dữ liệu - ĐÃ ĐƯỢC CẢI THIỆN */}
      <section className='py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50'>
        <div className='container mx-auto max-w-7xl'>
          <DescribeTitle
            title='Tính bảo mật dữ liệu'
            description='Những lợi ích nổi bật khi sử dụng nền tảng xác thực định danh điện tử RAR eKYC Platform'
            dataAos='fade-up'
          />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
            <div className='space-y-6'>
              {[
                {
                  icon: <Cpu className='h-8 w-8' />,
                  title: 'Dữ liệu mã hóa trên Chip',
                  description:
                    'Dữ liệu (Data Group – DG) lưu trong Chip của CCCD gắn Chip là dữ liệu đã được mã hóa, cần được giải mã để có thể sử dụng.',
                },
                {
                  icon: <FileCheck className='h-8 w-8' />,
                  title: 'Kiểm tra toàn vẹn dữ liệu',
                  description:
                    'Dữ liệu trong Chip được kiểm tra đảm bảo toàn vẹn giữa tất cả các DG bằng các thuật toán kiểm tra (PA - Passive Authentication).',
                },
                {
                  icon: <Shield className='h-8 w-8' />,
                  title: 'Xác thực bởi Bộ Công an',
                  description:
                    'Dữ liệu trong Chip của CCCD gắn Chip được ký số và chỉ có thể xác thực hợp pháp bởi Bộ Công an.',
                },
                {
                  icon: <Lock className='h-8 w-8' />,
                  title: 'Bảo vệ chống truy cập trái phép',
                  description:
                    'Nếu truy cập thẻ sai quy cách, thẻ CCCD gắn Chip tự động bị vô hiệu hóa, phải xin cơ quan Công an cấp lại.',
                },
                {
                  icon: <Key className='h-8 w-8' />,
                  title: 'Truyền dữ liệu an toàn',
                  description:
                    'Dữ liệu gửi từ các ứng dụng/SDK để được xác thực đều là dữ liệu mã hóa, không phải dữ liệu có thể đọc được bình thường.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >
                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600'>
                      {item.icon}
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-md font-roboto font-semibold text-gray-900 mb-2'>
                        {item.title}
                      </h3>
                      <p className='text-gray-600 font-roboto leading-relaxed'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visualization Section */}
            <div className='flex items-center justify-center'>
              <div className='relative' data-aos='zoom-in' data-aos-delay='300'>
                {/* Security Shield Illustration */}
                <div className='relative w-80 h-80'>
                  {/* Outer Shield */}
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-20 animate-pulse'></div>

                  {/* Middle Layer */}
                  <div className='absolute inset-8 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-full opacity-30'></div>

                  {/* Inner Core */}
                  <div className='absolute inset-16 bg-gradient-to-br from-blue-200 to-indigo-400 rounded-full flex items-center justify-center'>
                    <div className='text-center text-white'>
                      {/* <Lock className='h-12 w-12 mx-auto mb-2' />
                      <span className='text-sm font-semibold'>RAR eKYC</span> */}
                      <img className='rounded-xl' src={LogoRar} alt='' />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className='absolute -top-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-70 animate-bounce'></div>
                  <div
                    className='absolute -bottom-4 -right-4 w-20 h-20 bg-purple-400 rounded-full opacity-60 animate-bounce'
                    style={{animationDelay: '1s'}}
                  ></div>
                  <div
                    className='absolute top-1/2 -right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-80 animate-bounce'
                    style={{animationDelay: '2s'}}
                  ></div>
                  <div
                    className='absolute top-1/2 -left-6 w-14 h-14 bg-red-400 rounded-full opacity-70 animate-bounce'
                    style={{animationDelay: '1.5s'}}
                  ></div>
                </div>

                {/* Data Flow Animation */}
                <div className='absolute inset-0'>
                  <div className='absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full animate-ping'></div>
                  <div
                    className='absolute bottom-10 right-10 w-3 h-3 bg-green-500 rounded-full animate-ping'
                    style={{animationDelay: '0.5s'}}
                  ></div>
                  <div
                    className='absolute top-20 right-20 w-2 h-2 bg-purple-500 rounded-full animate-ping'
                    style={{animationDelay: '1s'}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Security Badge */}
          <div className='text-center' data-aos='fade-up' data-aos-delay='500'>
            <div className='inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200'>
              <Shield className='h-6 w-6 text-green-500' />
              <span className='text-sm font-semibold text-gray-700'>
                Đạt chuẩn bảo mật theo quy định của Bộ Công an
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Các phần còn lại giữ nguyên */}
      {/* Giá trị của sản phẩm */}
      <section className='py-20 px-4 '>
        <div className='container mx-auto max-w-7xl'>
          <DescribeTitle
            title='Giá trị chúng tôi đem lại'
            description='Những lợi ích nổi bật khi sử dụng nền tảng xác thực định danh điện tử RAR eKYC Platform'
            dataAos='fade-up'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
            {[
              {
                title: 'Onboard khách hàng nhanh chóng và an toàn',
                description:
                  'Quy trình đăng ký được tối ưu hóa, giảm thời gian xác thực từ vài ngày xuống còn vài phút',
                icon: (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                ),
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Phát hiện gian lận, giả mạo về hình ảnh, thông tin giấy tờ',
                description:
                  'Công nghệ AI tiên tiến nhận diện và ngăn chặn các hình thức giả mạo tinh vi nhất',
                icon: (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                    />
                  </svg>
                ),
                color: 'from-amber-500 to-orange-500',
              },
              {
                title: 'Mang lại giá trị tốt nhất với chi phí tối ưu',
                description:
                  'Giải pháp tiết kiệm chi phí vận hành lên đến 60% so với phương pháp truyền thống',
                icon: (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                ),
                color: 'from-emerald-500 to-green-500',
              },
              {
                title: 'Rút ngắn thời gian thẩm định và xử lý hồ sơ',
                description:
                  'Tự động hóa quy trình xử lý hồ sơ, giảm thời gian từ vài giờ xuống còn vài phút',
                icon: (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                ),
                color: 'from-purple-500 to-indigo-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col border border-gray-100'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className='text-xl font-semibold font-roboto text-gray-800 mb-4 group-hover:text-gray-900 transition-colors'>
                  {item.title}
                </h3>
                <p className='text-gray-600 font-roboto flex-grow leading-relaxed'>
                  {item.description}
                </p>
                {/* <div className='mt-6 pt-6 border-t border-gray-100 flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors'>
                  Tìm hiểu thêm
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </div> */}
              </div>
            ))}
          </div>

          {/* Additional CTA Section */}
          <div
            className='mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden'
            data-aos='fade-up'
          >
            <div className='absolute top-0 left-0 w-full h-full opacity-10'>
              <div className='absolute top-10 left-10 w-20 h-20 bg-white rounded-full'></div>
              <div className='absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full'></div>
            </div>
            <div className='relative z-10'>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Bắt đầu hành trình chuyển đổi số của bạn
              </h3>
              <p className='text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed'>
                Khám phá cách nền tảng xác thực định danh điện tử của chúng tôi có thể cách mạng hóa
                quy trình doanh nghiệp của bạn
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <ButtonContact variant='secondary' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Thao tác sử dụng */}
      <section className='py-20 px-4 '>
        <div className='container mx-auto max-w-7xl'>
          <DescribeTitle
            title='Thao tác 4 bước đơn giản'
            description='Quy trình xác thực nhanh chóng và dễ dàng thực hiện'
            dataAos='fade-up'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                step: 'Bước 1',
                text: 'Đưa CCCD gắn chip vào thiết bị đọc thẻ chip',
                icon: IconNFC,
                delay: 200,
                color: 'from-blue-500 to-cyan-500',
              },
              {
                step: 'Bước 2',
                text: 'Xác thực khuôn mặt chân dung chủ giấy tờ',
                icon: IconLiveNess,
                delay: 400,
                color: 'from-green-500 to-emerald-500',
              },
              {
                step: 'Bước 3',
                text: 'Xác thực CCCD gắn chip với Bộ Công An',
                icon: IconConnect,
                delay: 600,
                color: 'from-purple-500 to-indigo-500',
              },
              {
                step: 'Bước 4',
                text: 'Gửi kết quả xác thực cho ứng dụng thích hợp',
                icon: IconShow,
                delay: 800,
                color: 'from-orange-500 to-red-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center border border-gray-100 relative'
                data-aos='fade-up'
                data-aos-delay={item.delay}
              >
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                  {index + 1}
                </div>
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <img
                    src={item.icon}
                    alt={item.step}
                    className='w-12 h-12 object-contain filter brightness-0 invert'
                  />
                </div>
                <h4 className='text-xl font-bold font-roboto text-gray-800 mb-4'>{item.step}</h4>
                <p className='text-gray-600 font-roboto leading-relaxed'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hình thức cung cấp dịch vụ */}
      <section className='py-20 px-4 '>
        <div className='container mx-auto max-w-7xl'>
          <DescribeTitle
            title='Hình thức cung cấp dịch vụ'
            description='Đa dạng phương thức tích hợp phù hợp với mọi nhu cầu của doanh nghiệp'
            dataAos='fade-up'
          />

          <div
            className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl mt-12 group hover:shadow-3xl transition-all duration-500'
            data-aos='fade-up'
          >
            <div className='flex flex-col lg:flex-row'>
              <div className='w-full lg:w-3/5 p-8 md:p-12'>
                <div className='space-y-6'>
                  {[
                    {
                      icon: IconNfc,
                      title: 'Thiết bị đọc thẻ chip',
                      desc: 'Chúng tôi sẵn sàng cung cấp cho quý khách thiết bị đọc thẻ chip chuyên dụng để đọc thông tin trong thẻ căn cước công dân gắn chip',
                    },
                    {
                      icon: IconSdk,
                      title: 'SDK NFC',
                      desc: 'Bộ SDK (IOS, Android) sẵn sàng cung cấp cho quý khách để đọc thông tin căn cước gắn chip qua công nghệ kết nối gần NFC',
                    },
                    {
                      icon: IconApi,
                      title: 'API',
                      desc: 'Quý khách hàng đã có thiết bị đọc thẻ, có thể sử dụng API xác thực thông tin căn cước công dân gắn chip với RAR-C06 của chúng tôi',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group/item'
                      data-aos='fade-right'
                      data-aos-delay={index * 200}
                    >
                      <div className='flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mr-6 group-hover/item:scale-110 transition-transform duration-300'>
                        <img src={item.icon} alt={item.title} className='w-8 h-8' />
                      </div>
                      <div className='flex-1'>
                        <h5 className='text-xl font-semibold text-white mb-3'>{item.title}</h5>
                        <p className='text-blue-100 leading-relaxed'>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-12'>
                <div className='relative' data-aos='zoom-in' data-aos-delay='600'>
                  <div className='absolute -inset-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-500'></div>
                  <img
                    src={Banner_CCDV}
                    alt='Hình thức cung cấp dịch vụ'
                    className='relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mô hình triển khai */}
      <section className='py-20 px-4 '>
        <div className='container mx-auto max-w-7xl'>
          <DescribeTitle
            title='Mô hình triển khai'
            description='Đa dạng phương thức tích hợp phù hợp với mọi nhu cầu của doanh nghiệp'
            dataAos='fade-up'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
            {[
              {
                title: 'Nền tảng được đặt hoàn toàn trong Local của trung tâm RAR',
                description:
                  'Cung cấp dịch vụ xác minh thông tin nhân thân sử dụng thẻ CCCD gắn chip',
                image: OnClound,
                alt: 'Mô hình triển khai trên Cloud',
                delay: 200,
              },
              {
                title: 'Nền tảng được đặt hoàn toàn trong Local LAN của Đối Tác',
                description:
                  'Thực hiện: Xác thực Chip, Kiểm tra toàn vẹn dữ liệu CCCD Chip, Xác thực chữ ký số với BCA - tùy chọn, Giải mã dữ liệu CCCD Chip',
                image: OnPremises,
                alt: 'Mô hình triển khai On-premises',
                delay: 400,
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100'
                data-aos='fade-up'
                data-aos-delay={item.delay}
              >
                <div className='p-8'>
                  <h3 className='text-2xl font-roboto text-center font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 font-roboto mb-6 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
                <div className='p-4 bg-gray-50'>
                  <img
                    className='w-full rounded-xl transform group-hover:scale-105 transition-transform duration-700'
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Đối tác */}
      <section className='py-20 px-4 '>
        <div className='container mx-auto max-w-7xl'>
          <div data-aos='fade-up'>
            <PartnerLogo />
          </div>
        </div>
      </section>

      {/* Chứng nhận */}
      <section className='py-20 px-4 '>
        <div className='container mx-auto max-w-7xl'>
          <DescribeTitle title='Chứng nhận' description='' dataAos='fade-up' />
          <div className='mt-12' data-aos='fade-up' data-aos-delay='200'>
            <Certificate />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />

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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  )
}

export default RarEkycPlatform
