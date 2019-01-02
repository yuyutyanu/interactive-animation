/* ripple effect */

const RippleEffect = function(e){
  e.stopPropagation();
  const ripple = this;
  const cover = document.createElement('span')
  const size = ripple.offsetWidth;
  const loc = ripple.getBoundingClientRect()
  const x = e.pageX - loc.left - window.pageXOffset - (size / 2);
  const y = e.pageY - loc.top - window.pageYOffset - (size / 2);
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