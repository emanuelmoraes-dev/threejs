import { THREEx3Instance } from 'three-x3'
import { Scene01 } from '../../scenes/scene-01'

export default function scene01X3Config (x3: THREEx3Instance, scene01: Scene01) {
    x3.add(scene01.light, {
        helper: { visible: false }
    })
    x3.add(scene01.objects.cube, { label: 'cube' })
    x3.add(scene01.objects.circle, { label: 'circle' })
    x3.add(scene01.objects.cone, { label: 'cone' })
    x3.add(scene01.objects.cylinder, { label: 'cylinder' })
    x3.add(scene01.objects.plane, { label: 'plane' })
    x3.add(scene01.objects.sphere)
}
