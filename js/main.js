function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function run() {
  const stars = document.querySelector('.stars')
  if (!stars) {
    return
  }
  const stars1 = [], stars2 = []

  for (let i = 0; i < 200; ++i) {
    const star = document.createElement('div')
    stars.append(star)
    star.className = 'star shining'
    star.style.left = `${getRandomInt(-1500, 1500)}px`
    star.style.top = `${getRandomInt(-1500, 1500)}px`

    const size = getRandomInt(5, 15)
    star.style.width = star.style.height = `${size}px`
    stars1.push(star)
  }

  for (let i = 0; i < 200; ++i) {
    const star = document.createElement('div')
    stars.append(star)
    star.className = 'star'
    star.style.left = `${getRandomInt(-1500, 1500)}px`
    star.style.top = `${getRandomInt(-1500, 1500)}px`

    const size = getRandomInt(5, 15)
    star.style.width = star.style.height = `${size}px`
    stars2.push(star)
  }

  // let toggle = false
  // setInterval(() => {
  //   if (toggle = !toggle) {
  //     stars1.forEach(s => s.classList.add('shining'))
  //     stars2.forEach(s => s.classList.remove('shining'))
  //   } else {
  //     stars2.forEach(s => s.classList.add('shining'))
  //     stars1.forEach(s => s.classList.remove('shining'))
  //   }
  // }, 1000)

  function animation(callback) {
    setTimeout(() => {
      stars1.forEach(s => s.classList.add('shining'))
      setTimeout(() => {
        stars2.forEach(s => s.classList.add('shining'))
        setTimeout(() => {
          stars2.forEach(s => s.classList.remove('shining'))
          setTimeout(() => {
            stars1.forEach(s => s.classList.remove('shining'))
            callback(callback)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }
  animation(animation)
}

document.addEventListener('DOMContentLoaded', run)
