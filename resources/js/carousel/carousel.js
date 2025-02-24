import EmblaCarousel from 'embla-carousel'
import { setupTweenScale } from './EmblaCarouselTweenScale'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'

const OPTIONS = { loop: true }

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtn = emblaNode.querySelector('.embla__button--prev')
const nextBtn = emblaNode.querySelector('.embla__button--next')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)
const removeTweenScale = setupTweenScale(emblaApi)

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtn,
  nextBtn
)

emblaApi
  .on('destroy', removeTweenScale)
  .on('destroy', removePrevNextBtnsClickHandlers)
