import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    created() {
      document.addEventListener('mousemove', () => console.log('move'), {
        capture: true,
      })
    },
  })

  return (
    <div
      ref={sliderRef}
      style={{ position: 'absolute' }}
      className="keen-slider inset-0 "
    >
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  )
}
