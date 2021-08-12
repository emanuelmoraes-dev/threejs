declare module 'three-x3' {
    export type THREEx3Instance = {
        tick (): void
        fps (callback: () => void): void
        add (element: unknown, options?: Record<string, unknown>): void
    }

    export type THREEx3Args = {
        THREE: unknown,
        OrbitControls: unknown,
        camera: unknown,
        renderer: unknown,
        scene: unknown
    }

    export type THREEx3Type = {
        new (args: THREEx3Args): THREEx3Instance
    }

    const THREEx3Class: THREEx3Type
    export default THREEx3Class
}
