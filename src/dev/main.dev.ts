import '../style.css'
import { domScene } from '../html'
import createSetup from '../setups/setup-01'
import createScene from '../scenes/scene-01'
import { createX3, setupDefaultX3Config } from './x3'
import scene01X3Config from './scenes-x3-config/scene-01-x3-config'

const setup = createSetup(domScene)
setup.controls.enabled = true

const scene01 = createScene(setup)

const x3 = createX3(setup, scene01.scene)
setupDefaultX3Config(setup, x3)
scene01X3Config(x3, scene01)

setup.renderer.setAnimationLoop(() => {
    // scene01.objects.cube.rotation.x += 0.01
    // scene01.objects.cube.rotation.y += 0.01

    x3.tick()
    x3.fps(() => {
        setup.renderer.render(scene01.scene, setup.camera)
    })
})

export default {}
