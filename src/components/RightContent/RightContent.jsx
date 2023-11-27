
import SugestionCard from './SugestionCard';
import ImgJpProfile from '../../assets/jp_loureiro.png'

import ImgTrizProfile from '../../assets/imgTrizProfile.jpg'
import ImgCalangoProfile from '../../assets/imgCalangoProfile.jpg'
import ImgClairoProfile from '../../assets/imgClairoProfile.jpg'
import ImgLenProfile from '../../assets/ImgLenProfile.jpg'
import ImgGirlProfile from '../../assets/ImgGirlProfile.jpg'


function RightContent() {
  return (
    <div className='RightContent'>
      <SugestionCard
        srcImg={ImgJpProfile}
        name='Jp.'
        nickName='jp_loureiro.'
      />

      <div>
        <div className='suggestionSide'>
          <span>Suggested for you</span>
          <span><strong>See all</strong></span>
        </div>
        <div className='suggestionsCards'>

          <SugestionCard
            srcImg={ImgTrizProfile}
            name='triz pariz'
            nickName='triz'
          />

          <SugestionCard
            srcImg={ImgCalangoProfile}
            name='Calango'
            nickName='calaaaango'
          />

          <SugestionCard
            srcImg={ImgClairoProfile}
            name='Claire Cottrill'
            nickName='clairo'
          />

          <SugestionCard
            srcImg={ImgLenProfile}
            name='Len'
            nickName='elenidrake'
          />

          <SugestionCard
            srcImg={ImgGirlProfile}
            name='girl in red'
            nickName='girlinred'
          />

        </div>
      </div>
    </div>


  )
}

export default RightContent
