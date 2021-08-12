import '../style.css'
import { domScene } from '../html'
import createSetup from '../setups/setup-01'
import createScene from '../scenes/scene-02'

const setup = createSetup(domScene)
const scene02 = createScene(setup)

setup.renderer.setAnimationLoop(() => {
    setup.renderer.render(scene02.scene, setup.camera)
})
