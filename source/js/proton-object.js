/** Proton itself! Contains some tools and important variables. */
class Proton {

    /** An object in which Proton stores temporary things like a Vector3 for transformations. */
    cache = {}

    /** Tells you if your game is paused or not. Consider using Proton's own functions to pause and play since they actually do the work. */
    paused = false

    /** An optional function to be executed when your game is paused. */
    onPause = function(){}

    /** An optional function to be executed when your game has resumed. */
    onResume = function(){}

    /** After making an object the player, it can be accessed through Proton. */
    player = {}

    /** After initializing itself, Proton creates a scene. This is that scene. */
    scene = {}

    /** A handler for localStorage. Note: You may want to view the source for this documentation and navigate to source/js/proton-object.js to see the full documentation on this object. */
    storage = {
        /** The name of your game - localStorage items include the name of your game so that it's easy to get said item when you need it. */
        name: "mygame",
        /**
         * Gets a stored value.
         * @param { string } name The name of your stored value.
         * @return { string } The value of your stored value.
         */
        get( name ) {
            // ...
        },
        /**
         * Sets a stored value.
         * @param { string } name The name of your stored value.
         * @param { string } value The value of your stored value.
         * @return { string } The value of your stored value.
         */
        set( name, value ) {
            // ...
        }
    }

    /**
     * Converts a measurement in degrees to a measurement in radians.
     * @param { number } deg The measurement to convert
     * @return { number } The measurement, now in radians.
     */
    degToRad( deg ) {
        // ...
    }

    /***
     * Converts a measurement in radians to a measurement in degrees.
     * @param { number } rad The measurement to convert.
     * @return { number } The measurement, now in degrees.
     */
    radToDeg( rad ) {
        // ...
    }

    /**
     * A port of THREE.Vector3 with only functions to add (add), subtract (sub), multiply (multiply), and divide (divide) other Vector3 objects and with the set function from three.js (which you should really check out at threejs.org!).
     * @param { number } x The x value of the vector.
     * @param { number } y The y value of the vector.
     * @param { number } z The z value of the vector.
     */
    Vector3( x, y, z ) {
        // ...
    }

    /**
     * Imports objects! This a direct "pipe" to Proton.scene.interpreter.importObject. Note: This is a constructor and creates a Proton3DObject.
     * @param { object } extras Branches off the extras parameter for a Proton3DObject, but without "type". Notable changes/variables include: { onReady: function(){}, noShadows: Boolean, castShadows: Boolean, receiveShadows: Boolean }
     */
    import( extras ) {
        // ...
    }

    /**
     * Pauses your game.
     */
    pause() {
        // ...
    }

    /**
     * Resumes your game.
     */
    resume() {
        // ...
    }

    /**
     * Gets a crosshair from a scene (made after setting camera controls), adds an HTML element for a crosshair under [scene.crosshair].element, and adds functions to hide and show it ([scene.crosshair].hide and [scene.crosshair].show, respectively.)
     * @param { object } crosshair The scene's crosshair element.
     * @return { object } The scene's crosshair element.
     */
    crosshair( crosshair ) {
        // ...
    }

    /**
     * Turns on/off the magical no-clip! It will automatically switch on or off when you call this function.
     */
    noclip() {
        // ...
    }

    /**
     * Initializes the scene. The parameters here are identical to that in [scene].init.
     * @param { object } extras The main parameters for this function: { postprocessing: { enabled: Boolean, bloom: Boolean, backgroundColor: String (hexadecimal color value), ssao: Boolean, fxaa: Boolean, usePCSS: Boolean, anisotropicFilteringLevel: Number }, sky: Boolean }
     */
    init( extras ) {
        // ...
    }

}