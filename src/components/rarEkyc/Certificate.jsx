import Gcn from 'assets/page_RarEkyc/certification/giay_chung_nhan.webp'
import GcnZ from 'assets/page_RarEkyc/certification/giay_chung_nhan_zoom.webp'
import Dkth from 'assets/page_RarEkyc/certification/dang_ky_thuong_hieu.webp'
import DkthZ from 'assets/page_RarEkyc/certification/dang_ky_thuong_hieu_zoom.webp'
import ModalImage from 'react-modal-image'
const Certificate = () => {
  const CertificateImg = [
    {small: Gcn, large: GcnZ, alt: 'ảnh giấy chứng nhận'},
    {small: Dkth, large: DkthZ, alt: 'ảnh đăng ký quyền tác giả'},
  ]

  return (
    <section className='m-auto md:w-3/4'>
      <div className='mb-5 flex flex-col sm:flex-row'>
        {CertificateImg.map((image, index) => (
          <div key={index} className='m-auto max-w-xs overflow-hidden pt-3'>
            <ModalImage
              loading='lazy'
              hideDownload={true}
              hideZoom={true}
              className='thumbnail h-auto w-full cursor-pointer'
              small={image.small}
              large={image.large}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificate
