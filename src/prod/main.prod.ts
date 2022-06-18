import '../style.css'
import { domScene } from '../html'
import createSetup from '../setups/setup-01'
import createScene from '../scenes/scene-01'

const setup = createSetup(domScene)
const scene01 = createScene(setup)

setup.renderer.setAnimationLoop(() => {
    setup.renderer.render(scene01.scene, setup.camera)
})
