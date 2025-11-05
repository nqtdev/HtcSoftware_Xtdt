import DescribeTitle from 'layout/DescribeTitle'
import Ekyc from 'assets/page_HomePage/kyc/ekyc.webp'
import Kyc from 'assets/page_HomePage/kyc/kyc.webp'

const Identifier = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <DescribeTitle
        title='Giải Pháp Xác Thực Danh Tính'
        description='Công nghệ hiện đại cho quy trình xác minh khách hàng an toàn và hiệu quả'
      />

      <div className='grid md:grid-cols-2 gap-10 mb-16'>
        {/* Xác thực truyền thống  */}
        <div className='bg-white p-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md'>
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
                />
              </svg>
            </div>
            <h3 className='text-2xl font-bold font-lora text-gray-800'>
              Xác Thực Truyền Thống (KYC)
            </h3>
          </div>

          <p className='text-gray-700 mb-6 font-roboto text-lg'>
            KYC (Know Your Customer) là quy trình xác minh danh tính khách hàng thông qua việc đối
            chiếu giấy tờ tùy thân bản gốc và hiện diện trực tiếp tại điểm giao dịch.
          </p>
          <img src={Kyc} alt='Quy trình KYC truyền thống' className='rounded-lg w-1/2 m-auto' />

          {[
            {
              title: 'Phương thức thực hiện:',
              items: [
                'Khách hàng đến trực tiếp quầy giao dịch, cung cấp giấy tờ (CMND/CCCD, hộ chiếu…).',
                'Nhân viên kiểm tra, đối chiếu hình ảnh, chữ ký, và nhập dữ liệu thủ công.',
              ],
            },
            {
              title: 'Cơ sở dữ liệu đối chiếu:',
              items: [
                'Dựa trên hồ sơ giấy và thông tin nội bộ doanh nghiệp.',
                'Không có nguồn dữ liệu gốc từ cơ quan nhà nước.',
              ],
            },
            {
              title: 'Công nghệ áp dụng:',
              items: ['Gần như không có công nghệ hỗ trợ.', 'Thao tác thủ công'],
            },
            {
              title: 'Rủi ro và hạn chế:',
              items: [
                'Dễ xảy ra sai sót, gian lận giấy tờ giả.',
                'Phụ thuộc vào nghiệp vụ thẩm định hồ sơ của giao dịch viên',
                'Tốn chi phí vận hành và thời gian xử lý.',
              ],
            },
          ].map((section, index) => (
            <div key={index} className='bg-gray-100 p-4 rounded-lg mb-6'>
              <p className='text-gray-700 font-roboto mb-2'>{section.title}</p>
              <ul className='list-disc pl-5 text-gray-600'>
                {section.items.map((text, i) => (
                  <li key={i} className='font-roboto'>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Xác thực eKYC  */}
        <div className='bg-white p-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md'>
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
                />
              </svg>
            </div>
            <h3 className='text-2xl font-bold font-lora text-gray-800'>Xác Thực Điện Tử (eKYC)</h3>
          </div>

          <p className='text-gray-700 mb-6 font-roboto text-lg'>
            Quy trình xác thực danh tính được thực hiện trực tuyến, sử dụng hình ảnh giấy tờ tùy
            thân và sinh trắc học (khuôn mặt, video) để định danh từ xa.
          </p>
          <img src={Ekyc} alt='Quy trình eKYC hiện đại' className='rounded-lg w-1/2 m-auto' />

          {[
            {
              title: 'Phương thức thực hiện:',
              items: [
                'Khách hàng thực hiện trực tuyến (qua app, website, thiết bị đầu cuối).',
                'Khách hàng tải ảnh giấy tờ, chụp khuôn mặt qua ứng dụng.',
                'Hệ thống trích xuất và so khớp thông tin tự động qua AI/OCR/Face Matching',
              ],
            },
            {
              title: 'Cơ sở dữ liệu đối chiếu:',
              items: [
                'Dựa trên dữ liệu do người dùng cung cấp.',
                'Không có khả năng kiểm tra chéo với CSDL quốc gia về dân cư, nên tính xác thực còn hạn chế.',
              ],
            },
            {
              title: 'Công nghệ áp dụng:',
              items: [
                'OCR (Optical Character Recognition): Trích xuất thông tin từ giấy tờ tùy thân.',
                'Face Matching: So khớp khuôn mặt giữa ảnh chụp và giấy tờ.',
                'Liveness Detection: Phát hiện người thật qua chuyển động hoặc độ sâu hình ảnh.',
              ],
            },
            {
              title: 'Rủi ro và hạn chế:',
              items: [
                'Không xác thực được giấy tờ giả tinh vi.',
                'Không kiểm chứng được người thật nếu AI chưa đủ chính xác.',
                'Thiếu khả năng liên thông dữ liệu.',
              ],
            },
          ].map((section, index) => (
            <div key={index} className='bg-gray-100 p-4 rounded-lg mb-6'>
              <p className='text-gray-700 font-roboto mb-2'>{section.title}</p>
              <ul className='list-disc pl-5 text-gray-600'>
                {section.items.map((item, i) => (
                  <li key={i} className='font-roboto'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Identifier
