import {
    Color,
    DoubleSide,
    ExtrudeBufferGeometry,
    HemisphereLight, Light,
    Mesh,
    MeshLambertMaterial,
    Scene,
    Shape
} from 'three'
import ISetup from '../setups/i-setup'

export interface Scene02 {
    scene: Scene
    light: Light
    objects: {
        lines: Mesh
    }
}

export default function createScene02 (setup: ISetup, backgroundColor = 0x222222): Scene02 {
    const scene = new Scene()
    scene.background = new Color(backgroundColor)

    // const light = new AmbientLight(0xffffff, 1)
    const light = new HemisphereLight(0xffffbb, 0x000000, 2)
    scene.add(light)

    // const path = new Path()
    const path = new Shape()
    path.moveTo(1, 3)
    path.lineTo(3, 3)
    // path.bezierCurveTo(2, 2.3, 4, 1.7, 3, 1)
    path.lineTo(3, 1)
    path.lineTo(1, 1)
    // path.quadraticCurveTo(-1, 2, 1, 3)
    path.lineTo(1, 3)

    // const geometry = new BufferGeometry()
    // geometry.setFromPoints(path.getPoints())

    // const geometry = new ShapeBufferGeometry(
    //     path
    // )

    const geometry = new  ExtrudeBufferGeometry(
        path, {
            depth: 0.5,
            bevelEnabled: true,
            bevelSize: 0.5,
            bevelThickness: 0.5
        }
    )

    // const material = new LineBasicMaterial({
    //     color: 0xffffff
    // })

    const material = new MeshLambertMaterial({
        color: 0xffffff,
        side: DoubleSide
    })

    // const line = new Line(geometry, material)
    // scene.add(line)

    const lines = new Mesh(geometry, material)
    scene.add(lines)

    return {
        scene,
        light,
        objects: {
            lines
        }
    }
}
