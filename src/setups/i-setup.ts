import { Camera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default interface ISetup {
    camera: Camera
    controls: OrbitControls
    renderer: WebGLRenderer
}
