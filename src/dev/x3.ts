import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import THREEx3, { THREEx3Instance } from 'three-x3'
import ISetup from '../setups/i-setup'
import * as THREE from 'three'
import { Scene } from 'three'

export function createX3 (setup: ISetup, scene: Scene): THREEx3Instance {
    return new THREEx3({
        THREE,
        OrbitControls,
        scene,
        camera: setup.camera,
        renderer: setup.renderer
    })
}

export function setupDefaultX3Config (setup: ISetup, x3: THREEx3Instance): void {
    x3.add(setup.camera, { open: false })
    // x3.add(setup.light, {
    //     helper: { visible: false }
    // })
}
