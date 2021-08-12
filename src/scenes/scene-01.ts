import ISetup from '../setups/i-setup'
import {
    BoxBufferGeometry,
    CircleBufferGeometry,
    Color, ConeBufferGeometry, CylinderBufferGeometry,
    DoubleSide,
    HemisphereLight, MathUtils,
    Mesh,
    MeshLambertMaterial, PlaneBufferGeometry,
    Scene, SphereBufferGeometry
} from 'three'

export interface Scene01 {
    scene: Scene
    light: HemisphereLight
    objects: {
        cube: Mesh,
        circle: Mesh,
        cone: Mesh,
        cylinder: Mesh,
        plane: Mesh,
        sphere: Mesh
    }
}

export default function createScene01 (setup: ISetup, backgroundColor = 0x222222): Scene01 {
    const scene = new Scene()
    scene.background = new Color(backgroundColor)

    // const light = new AmbientLight(0xffffff, 1)
    const light = new HemisphereLight(0xffffbb, 0x000000, 2)
    scene.add(light)

    // const material = new MeshBasicMaterial({ color: 0xffffff })
    const material = new MeshLambertMaterial({
        color: 0x348feb,
        side: DoubleSide
    })

    const cube = new Mesh(
        new BoxBufferGeometry(),
        material
    )
    scene.add(cube)

    const circle = new Mesh(
        new CircleBufferGeometry(0.5, 20),
        material
    )
    circle.position.x = -2
    circle.rotation.x = MathUtils.degToRad(-90)
    scene.add(circle)

    const cone = new Mesh(
        new ConeBufferGeometry(0.3, 0.5),
        material
    )
    cone.position.x = -2
    cone.position.y = 2
    scene.add(cone)

    const cylinder = new Mesh(
        new CylinderBufferGeometry(0.1, 0.5, 1),
        material
    )
    cylinder.position.x = 2
    scene.add(cylinder)

    const plane = new Mesh(
        new PlaneBufferGeometry(1, 1),
        material
    )
    plane.position.x = 2
    plane.position.y = 2
    scene.add(plane)

    const sphere = new Mesh(
        new SphereBufferGeometry(0.3, 20, 20),
        material
    )
    sphere.position.y = 2
    scene.add(sphere)

    return {
        scene,
        light,
        objects: {
            cube,
            circle,
            cone,
            cylinder,
            plane,
            sphere
        }
    }
}
