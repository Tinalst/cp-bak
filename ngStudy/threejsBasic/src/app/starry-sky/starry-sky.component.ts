import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {AxesHelper} from 'three';

@Component({
  selector: 'app-starry-sky',
  templateUrl: './starry-sky.component.html',
  styleUrls: ['./starry-sky.component.scss']
})
export class StarrySkyComponent implements OnInit {
  @ViewChild('canvasbox') canvasbox: ElementRef;

  scene;
  camera;
  renderer;
  particles = [];
  particle;
  callbakAnimation;
  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.init();
    this.createParticles();
    this.callbakAnimation = {
      callAnimate: (this.animate).bind(this)
    };
    this.callbakAnimation.callAnimate();
  }

  init() {
    const width = this.canvasbox.nativeElement.clientWidth;
    const height = this.canvasbox.nativeElement.clientHeight;
    // 创建场景
    this.scene = new THREE.Scene();
    // 透视相机： FOV || 长宽比 || 近剪切面 || 远剪切面
    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 4000);
    // 渲染器
    this.renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    // 渲染器大小： width || height || updateStyle: true || false
    this.renderer.setSize(width, height);

    // 渲染器添加到HTML文档中
    this.render.appendChild(this.canvasbox.nativeElement, this.renderer.domElement);

    this.camera.position.z = 1000;

    this.scene.add(new THREE.AxesHelper(200));
  }

  createParticles(){
    let particle, material;
    for(let zpos = -100; zpos < 1000; zpos+=5) {
      material = new THREE.SpriteMaterial({color: 0x81dbeb});
      particle = new THREE.Sprite(material);

      particle.position.x = Math.random() * 1000 - 500;
      particle.position.y = Math.random() * 1000 - 500;
      particle.position.z = zpos;
      particle.scale.x = particle.scale.y = 2;
      this.scene.add(particle);
      this.particles.push(particle);
    }
  }

  updateParticle() {
    for(let i = 0; i < this.particles.length; i++) {
      this.particle = this.particles[i];
      this.particle.position.z += 5;
      if(this.particle.position.z > 1000) (this.particle.position.z -= 2000);
    }
  }

  animate() {
    requestAnimationFrame(this.callbakAnimation.callAnimate);
    this.updateParticle();

    this.renderer.render(this.scene, this.camera);
  }

}
