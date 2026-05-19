const rootSelector = '[data-js-episode-card]'


class Episode {
  selectors = {
    root: rootSelector,
    description: '[data-js-episode-card-description]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.descriptionElement = this.rootElement.querySelector(this.selectors.description)
    this.state = {
      isExpanded: false,
    }
    this.bindEvents()
  }

  onDescriptionClick = () => {
    if (this.state.isExpanded) {
      this.descriptionElement.style.maxHeight = '3em'
    } else {
      this.descriptionElement.style.maxHeight = this.descriptionElement.firstElementChild.scrollHeight + 'px'
    }
    this.state.isExpanded = !this.state.isExpanded
  }

  bindEvents() {
    this.descriptionElement.addEventListener('click', this.onDescriptionClick)
  }
}

class EpisodesCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Episode(element)
    })
  }
}

export default EpisodesCollection