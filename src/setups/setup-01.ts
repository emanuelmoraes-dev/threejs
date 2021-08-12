import ISetup from './i-setup'
import { PerspectiveCamera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function createSetup01 (
    domScene: HTMLElement,
    width = 800,
    height = 600,
    antialias = true,
    pixelRatio = window.devicePixelRatio
): ISetup {
    const renderer = new WebGLRenderer({
        antialias
    })

    if (pixelRatio)
        renderer.setPixelRatio(pixelRatio)

    renderer.setSize(width, height)
    domScene.appendChild(renderer.domElement)

    const camera = new PerspectiveCamera(50, width / height)
    camera.position.x = 1.5
    camera.position.y = 4.4
    camera.position.z = 8.5

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enabled = false
    controls.update()

    return {
        renderer,
        camera,
        controls
    }
}
