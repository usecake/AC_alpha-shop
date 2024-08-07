import styles from '../../../styles/Form.module.scss'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function Form({ stepPhase }) {
  const { cardInfo, setCardInfo } = useContext(CartContext)
  const handleInputChange = (e) => {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <section className={`${styles['form-container']} col col-lg-12 col-sm-12`}>
      {stepPhase === 1 && (
        <form className='col col-12' data-phase='address'>
          <h3 className='form-title'>寄送地址</h3>
          <section className='form-body col col-12'>
            <div className='col col-12'>
              <div className='input-group input-w-lg-2 input-w-sm-s1'>
                <div className='input-label'>稱謂</div>
                <div className='select-container'>
                  <select defaultValue='mr'>
                    <option value='mr'>先生</option>
                    <option value='ms'>女士</option>
                    <option value='mx'>不明</option>
                  </select>
                </div>
              </div>
              <div className='input-group input-w-lg-4 input-w-sm-s2'>
                <div className='input-label'>姓名</div>
                <input type='text' placeholder='請輸入姓名' />
              </div>
            </div>
            <div className='col col-12'>
              <div className='input-group input-w-lg-3 input-w-sm-full'>
                <div className='input-label'>電話</div>
                <input type='tel' placeholder='請輸入行動電話' />
              </div>
              <div className='input-group input-w-lg-3 input-w-sm-full'>
                <div className='input-label'>Email</div>
                <input type='email' placeholder='請輸入電子郵件' />
              </div>
            </div>
            <div className='col col-12'>
              <div className='input-group input-w-lg-2 input-w-sm-full'>
                <div className='input-label'>縣市</div>
                <div className='select-container'>
                  <select defaultValue='default' required>
                    <option value='default'>請選擇縣市</option>
                    <option value='KLU'>基隆市</option>
                    <option value='TPH'>新北市</option>
                    <option value='TPE'>臺北市</option>
                    <option value='TYC'>桃園市</option>
                    <option value='HSH'>新竹縣</option>
                    <option value='HSC'>新竹市</option>
                    <option value='MAC'>苗栗市</option>
                    <option value='MAL'>苗栗縣</option>
                    <option value='TXG'>臺中市</option>
                    <option value='CWH'>彰化縣</option>
                    <option value='CWS'>彰化市</option>
                    <option value='NTC'>南投市</option>
                    <option value='NTO'>南投縣</option>
                    <option value='YLH'>雲林縣</option>
                    <option value='CHY'>嘉義縣</option>
                    <option value='CYI'>嘉義市</option>
                    <option value='TNN'>臺南市</option>
                    <option value='KHH'>高雄市</option>
                    <option value='IUH'>屏東縣</option>
                    <option value='PTS'>屏東市</option>
                    <option value='ILN'>宜蘭縣</option>
                    <option value='ILC'>宜蘭市</option>
                    <option value='HWA'>花蓮縣</option>
                    <option value='HWC'>花蓮市</option>
                    <option value='TTC'>臺東市</option>
                    <option value='TTT'>臺東縣</option>
                    <option value='PEH'>澎湖縣</option>
                    <option value='KMN'>金門縣</option>
                    <option value='LNN'>連江縣</option>
                  </select>
                </div>
              </div>
              <div className='input-group input-w-lg-4 input-w-sm-full'>
                <div className='input-label'>地址</div>
                <input type='text' placeholder='請輸入地址' />
              </div>
            </div>
          </section>
        </form>
      )}
      {stepPhase === 2 && (
        <form className='col col-12' data-phase='shipping'>
          <h3 className='form-title'>運送方式</h3>
          <section className='form-body col col-12'>
            <label className='radio-group col col-12' data-price={0}>
              <input
                id='shipping-standard'
                type='radio'
                name='shipping'
                defaultChecked
              />
              <div className='radio-info'>
                <div className='col col-12'>
                  <div className='text'>標準運送</div>
                  <div className='price' />
                </div>
                <div className='period col col-12'>約 3~7 個工作天</div>
              </div>
              <div className='radio-box-border' />
            </label>
            <label className='radio-group col col-12' data-price={500}>
              <input id='shipping-dhl' type='radio' name='shipping' />
              <div className='radio-info'>
                <div className='col col-12'>
                  <div className='text'>DHL 貨運</div>
                  <div className='price' />
                </div>
                <div className='period col col-12'>48 小時內送達</div>
              </div>
              <div className='radio-box-border' />
            </label>
          </section>
        </form>
      )}
      {stepPhase === 3 && (
        <form className='col col-12' data-phase='credit-card'>
          <h3 className='form-title'>付款資訊</h3>
          <section className='form-body col col-12'>
            <div className='col col-12'>
              <div className='input-group input-w-lg-4 input-w-sm-full'>
                <div className='input-label'>持卡人姓名</div>
                <input
                  type='text'
                  placeholder='John Doe'
                  name='name'
                  value={cardInfo.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='col col-12'>
              <div className='input-group input-w-lg-4 input-w-sm-full'>
                <div className='input-label'>卡號</div>
                <input
                  type='text'
                  placeholder='1111 2222 3333 4444'
                  name='number'
                  value={cardInfo.number}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='col col-12'>
              <div className='input-group input-w-lg-3 input-w-sm-s3'>
                <div className='input-label'>有效期限</div>
                <input
                  type='text'
                  placeholder='MM/YY'
                  name='expiryDate'
                  value={cardInfo.expiryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className='input-group input-w-lg-3 input-w-sm-s3'>
                <div className='input-label'>CVC / CCV</div>
                <input
                  type='text'
                  placeholder={123}
                  name='cvc'
                  value={cardInfo.cvc}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>
        </form>
      )}
    </section>
  )
}
