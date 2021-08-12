import { THREEx3Instance } from 'three-x3'
import { Scene02 } from '../../scenes/scene-02'

export default function scene02X3Config (x3: THREEx3Instance, scene02: Scene02) {
    x3.add(scene02.light, {
        helper: { visible: false }
    })
    x3.add(scene02.objects.lines, { label: 'line' })
    // x3.add(scene02.objects.line, { label: 'line' })
}
