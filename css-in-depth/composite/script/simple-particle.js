window.onload = function () {
  const circle = document.querySelector('.circle');
  circle.addEventListener('click', function () {
    console.log(11)
    createParticles();
  })
};

function createParticles() {
  let numDots = 23;
  let clone;
  let dotContainer = document.querySelector('.dotContainer');
  let dotArray = [];

  for(let i = 0; i < numDots; i++) {
    // 克隆粒子样本
    clone = document.querySelector('.dot').cloneNode(true);
    // 粒子插入到粒子池中
    dotArray.push(clone);
    // 克隆的节点插入到组中
    dotContainer.appendChild(clone);

    // 设置粒子效果
    playParticles(dotArray);
  }
}

function playParticles(dotArray) {
  let d = dotArray, i = d.length;

  for(p of d) {

  }
}

