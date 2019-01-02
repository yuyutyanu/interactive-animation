/* ripple effect */

const RippleEffect = function(e){
  const ripple = this;
  const cover = document.createElement('span')
  const x = e.layerX
  const y = e.layerY
  const size = ripple.offsetWidth;
  const style = 'top:' + y + 'px; ' +
                'left:' + x + 'px; ' +
                'height:' + size + 'px; ' +
                'width:' + size + 'px;'

  ripple.appendChild(cover)
  cover.setAttribute('style', style)
  cover.setAttribute('class', 'rp-effect')

  cover.addEventListener('animationend', (e) => {
    cover.parentNode.removeChild(cover)
  })
};

const ripples = document.querySelectorAll('.ripple')
ripples.forEach((ripple) =>{
  ripple.addEventListener('mousedown', RippleEffect)
})

/* swap effect */