import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {ColorKeywords} from 'three';
import pink = ColorKeywords.pink;
@Component({
  selector: 'app-create-ascene',
  templateUrl: './create-ascene.component.html',
  styleUrls: ['./create-ascene.component.scss']
})
export class CreateASceneComponent implements OnInit {
  @ViewChild('canvasbox') canvasbox: ElementRef;
  scene;
  camera;
  renderer;
  animateCallback;
  cube;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.init();
    this.appendCube();
    this.animateCallback = {
      // this指向当前component组件类
      // 返回一个新的函数 每次调用callAnimate的时候都是调用的组件类里的animate类型函数
      callAnimate: (this.animate).bind(this)
    };
    this.animateCallback.callAnimate();
  }

  init() {
    const width = this.canvasbox.nativeElement.clientWidth;
    const height = this.canvasbox.nativeElement.clientHeight;

    // 创建场景
    this.scene = new THREE.Scene();
    // 透视相机： FOV || 长宽比 || 近剪切面 || 远剪切面
    this.camera = new THREE.PerspectiveCamera(75,  width / height, 0.1, 1000);
    // 渲染器
    this.renderer = new THREE.WebGLRenderer();
    // 渲染器大小 width || height || updateStyle: true || false
    this.renderer.setSize(width, height);

    // 渲染器添加到HTML文档中
    this.render.appendChild(this.canvasbox.nativeElement, this.renderer.domElement);
  }

  appendCube() {
    let geometry, material;
    // 创建一个立方体
    geometry = new THREE.BoxGeometry(1, 1, 1);
    // 创建材质
    material = new THREE.MeshBasicMaterial({color: 'pink'});
    // 立方体+材质 = 网格
    this.cube = new THREE.Mesh(geometry, material);
    // 将网格添加到场景
    this.scene.add(this.cube);

    // 放置相机位于网格中
    this.camera.position.z = 5;
  }

  // 渲染场景
  animate() {
    requestAnimationFrame(this.animateCallback.callAnimate);

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }

}
