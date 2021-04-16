import React from 'react'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from '../../src/components/layout/work/slide'
import workStyles from '../../src//components/layout/work/work.module.scss'

SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

const Work = (props) => {
  const {
    title,
    works: { nodes: workList },
  } = props

  console.log(workList)
  return (
    <>
      <div className={workStyles.sliderContainer}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          className={workStyles.slider}
          direction='vertical'
        >
          {workList.map((work) => {
            return (
              <SwiperSlide
                className={workStyles.slides}
                key={work.id}
                style={{
                  background: `url(${work.featuredImage.node.sourceUrl}) no-repeat center/cover`,
                }}
              >
                <Slide
                  workStyles={workStyles}
                  project={work}
                  title={work.title}
                  heading={work.workCptOptions.projectHeading}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default Work
