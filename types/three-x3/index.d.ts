declare module 'three-x3' {
    type THREEx3 = {
        tick (): void
        fps (callback: () => void): void
        add (element: unknown, options?: Record<string, unknown>): void
    }

    type THREEx3Args = {
        THREE: unknown,
        OrbitControls: unknown,
        camera: unknown,
        renderer: unknown,
        scene: unknown
    }

    type THREEx3Type = {
        new (args: THREEx3Args): THREEx3
    }

    const THREEx3Class: THREEx3Type

    export default THREEx3Class
}
