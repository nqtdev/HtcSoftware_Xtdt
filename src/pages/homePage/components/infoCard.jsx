import CardBoy from 'assets/page_HomePage/cardCanCuoc/boyCard.webp'
import CardGirl from 'assets/page_HomePage/cardCanCuoc/girlCard.webp'
const InfoCard = () => {
  return (
    <div>
      <section>
        <div className='h-screen'>
          <div>
            <h2>Căn cước gắn chip</h2>
            <div>
              <ul>
                <li>
                  Thẻ căn cước công dân gắn chip còn được gọi là thẻ căn cước điện tử e-ID là một
                  loại giấy tờ tùy thân của cá nhân, thay thế cho CMND cũ và thẻ CCCD mã vạch.
                </li>
                <li>
                  Thẻ CCCD gắn chip đóng vai trò như một thiết bị dùng để nhận diện, xác thực danh
                  tính của cá nhân và có thể dùng để truy cập tra cứu thông tin của công dân chủ sở
                  hữu trên hệ thống cơ sở dữ liệu quốc gia về dân cư.
                </li>
                <li>
                  Theo số liệu của Bộ Công an, hiện nay có khoảng 90/101 triệu thẻ CCCD gắn Chip đã
                  được cấp phát đến người dân trong độ tuổi cấp phát CCCD (internet)
                </li>
                <li>
                  • Từ 01/01/2023, sổ hộ khẩu giấy hết hiệu lực sử dụng. Những người không có thẻ
                  CCCD gắn Chip không được ghi vào hộ khẩu điện tử.
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <img className='w-full' src={CardBoy} alt='ảnh căn cước boy' />
            </div>
            <div>
              <img className='w-full' src={CardGirl} alt='ảnh căn cước girl' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InfoCard
