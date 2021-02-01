/** Description. */
class Proton3DScene {

    /**
     * The constructor doesn't have anything important; everything is done automatically.
     */
    constructor() {
        // ...
    }

    /** An object consisting of key codes and their corresponding functions. */
    mappedKeys = {
        forward: 87, // W
        sprint: 16, // Shift
        backward: 83, // S
        left: 65, // A
        right: 68, // D
        jump: 32, // Spacebar
        use: 69, // E
        flashlight: 70 // F
    }

    /** A crosshair created after the function setCameraControls is executed. It has a property called "position", which is helpful to see the point in which the player is facing. */
    crosshair = {}

    /** A Proton3DInterpreter class. */
    interpreter = {}

    /** An object consisting of the current keys being pressed at the current moment. */
    keys = {}

    /** Functions that should be executed every now and then (close to whenever each frame is rendered, but not quite.) */
    extraFunctions = []

    /** An array of functions to be executed whenever a frame is rendered. */
    priorityExtraFunctions = []

    /** An array of extra functions to be ran whenever a(ny) key is pressed. */
    extraKeyControls = []

    /** The scene's camera (a Proton3DObject, created after initializing the scene) */
    camera = {}

    /** An array consisting of the objects in the scene. */
    children = []

    /** A sky object that is created after initializing the scene. */
    sky = {}

    /**
     * Initializes the scene. This is done automatically; you should instead see Proton.init() for user-configurable options.
     * @param { object } extras Parameters for initializing the scene.
     */
    init( extras ) {
        // ...
    }

    /**
     * Updates the scene: renders the scene, updates physics, and calls any functions under [scene].priorityExtraFunctions. Every other frame, it runs functions under [scene].extraFunctions.
     */
    update() {
        // ...
    }

    /**
     * Gets the list of all the objects in the scene. You can also use [scene].children.
     * @return { array } The array containing all the objects in the scene.
     */
    getObjectList() {
        // ...
    }

    /**
     * Removes an object from the scene.
     * @param { object } parameter The object to be removed from the scene.
     */
    remove( object ) {
        // ...
    }

    /**
     * Initializes keyboard controls for the scene
     * @param { object } obj The player.
     * @param { number } movementSpeed The movement speed of the player (optional).
     * @param { number } jumpHeight The  jump height of the player.
     * @param { object } extras Optional extra parameters for this function. (You don't have to worry about this as a user since it is automatic.)
     */
    setKeyControls( obj, movementSpeed = 2.5, jumpHeight, extras = {} ) {
        // ...
    }

    /**
     * Initializes mouse controls.
     * @param { object } extras The parameters for this function. An example: { distance: Proton.Vector3, xSensitivity: Number, ySensitivity: Number, invisibleParent: Boolean, cameraParent: Proton3DObject, type: "firstperson"|"thirdperson", distance: Proton.Vector3 (for third person camera control types only), gun: Proton3DObject, gunPosition: Proton.Vector3 }
     */
    setCameraControls( extras ) {
        // ...
    }

    /**
     * Sets controls for using objects.
     */
    setPickingUpControls() {
        // ...
    }

    /**
     * An automatic function called to stop picking up an object.
     * @param { object } child The object that is currently being picked up.
     * @param { object } scene The scene for which it should be removed.
     * @param { function } callback An optional function to be called once the object has been "let go".
     */
    resetPickingUp( child, scene, callback = function(){} ) {
        // ...
    }

    /**
     * "Picks up" an object.
     * @param { object } child The object to be picked up.
     */
    pickUpObject( child ) {
        // ...
    }

}