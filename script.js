const _ = (sel, a) => a ? document.querySelectorAll(sel) : document.querySelector(sel)

const width = 482
const height = 278

const rand = (min, max) => Math.random() * (max - min) + min

const movePopup = () => {
  const left = `${rand(0, window.innerWidth - width)}px`,
    top = `${rand(0, window.innerHeight - height)}px`
  _("#popup").style.top = top
  _("#popup").style.left = left
}

_("#purchase-button").addEventListener('click', () => {
  _("#popup").classList.add('show')
  _("#popup-cover").classList.add('show')
})

_("#yes-btn").addEventListener('mouseover', movePopup)
_("#no-btn").addEventListener('mouseover', movePopup)
