import { Controller } from "stimulus"

export default class extends Controller {
  initialize() {
    this.intersectionObserver = new IntersectionObserver(entries => this.processIntersectionEntries(entries))
  }

  connect() {
    console.log("connected")
    this.intersectionObserver.observe(this.element)
  }

  disconnect() {
    this.intersectionObserver.unobserve(this.element)
  }

  // Private

  processIntersectionEntries(entries) {
    entries.forEach(entry => {
      this.element.classList.toggle(this.data.get("class"), entry.isIntersecting)
    })
  }
}
