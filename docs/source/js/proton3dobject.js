/** Description. */
class Proton3DObject {

    /**
     * The constructor for making an object in Proton uses a variable called "extras" to prevent multiple function
     * parameters (that must be in exact order when called because JavaScript).
     * @param { object } extras Parameters for making the object. 
     */
    constructor( extras ) {
        // ...
    }

    /** Wether or not the object casts a shadow. */
    castShadow = false

    /** Wether or not the object can receive a shadow cast upon it. This should also work for self-shadows. */
    receiveShadow = false

    /** The position of the object. */
    position = new Proton.Vector3( 0, 0, 0 )

    /** The rotation of the object, measured in degrees. */
    rotation = new Proton.Vector3( 0, 0, 0 )

    /** The distance the player has to be from the object to pick it up (or whatever they'd do) by pressing their use key (typically E). */
    pickupDistance = 4

    /** A function to be executed when the player is within the pickup distance. */
    onNear = function(){ alert( "The player got near to me!" ) }

    /** A function to be executed when the player is withing the pickup distance of the object, hovers over it with their crosshair, and presses their use key. */
    onUse = function(){ alert( "The player pressed their USE key on me!" ) }

    /** The mass of the object (0 = stationary) */
    mass = 10

    /** Any sub-objects of the object */
    children = []

    /**
     * Makes an object into the player. Disclaimer: Needs the imported object + this function to have the parameter noShadows set to true 
     * @param { object } extras An example (all properties are optional): { type: "firstperson"|"thirdperson", head: Proton.Vector3, invisible: boolean, noShadows: boolean, movementSpeed: number, jumpHeight: number }
     */
    makePlayer( extras ) {
        // ...
    }

    /**
     * Makes the object invisible.
     */
    makeInvisible() {
        // ...
    }

    /**
     * Sets the "shadow options" for an object: whether an object casts a shadow, and wether it can receive one.
     * @param { boolean } cast Wether the object can cast a shadow
     * @param { boolean } receive Wether the object can receive a shadow
     */
    setShadowOptions( cast, receive ) {
        // ...
    }

    /**
     * Gets "shadow options" for an object: whether an object casts a shadow, and wether it can receive one.
     * @return { object } { cast: [boolean], receive: [boolean] }
     */
    getShadowOptions() {
        // ...
    }

    /**
     * Applies an "impulse" to an object.
     * @param { object } force A Proton.Vector3 object
     * @param { object } offset (Optional:) A Proton.Vector3 object describing where the impulse is to be done.
     */
    applyImpulse( force, offset ) {
        // ...
    }

    /**
     * Deletes an object. It can still be accessed as a variable, but it is deleted from the scene.
     */
    delete() {
        // ...
    }

    /**
     * Sets the mass of the object.
     * @param { number } value The mass of the object. Note: 0 = stationary
     */
    setMass( value ) {
        // ...
    }

    /**
     * Gets the mass of an object.
     * @return { number } The mass itself.
     */
    getMass() {
        // ...
    }

    /**
     * Sets a function to be called when the object is used (see the onUse property's description for more)
     * @param { function } useFunction The function itself.
     */
    setOnUse( useFunction ) {
        // ...
    }

    /**
     * Returns the function to be called when the object is used (see the onUse property's description for more)
     * @return { function } The function itself.
     */
    getOnUse() {
        // ...
    }

    /**
     * Sets a function to be called when the player gets close to the object (see the onNear property's description for more)
     * @param { function } nearFunction The function itself.
     */
    setOnNear( nearFunction ) {
        // ...
    }

    /**
     * Returns the function to be called when the player gets close to the object (see the onNear property's description for more)
     * @return { function } The function itself.
     */
    getOnNear() {
        // ...
    }

    /**
     * Sets the minimum distance for the object to be used (see above).
     * @param { number } value The minimum distance for the object to be used by the player.
     */
    setPickupDistance( value ) {
        // ...
    }

    /**
     * Returns the minimum distance for the object to be used (see above).
     * @return { number } The minimum distance for the object to be used by the player.
     */
    getPickupDistance() {
        // ...
    }

    /**
     * Sets two variables: wether the object can be picked up, and whether it should not actually be picked up (but still have the onUse function executed.)
     * @param { boolean } pickupness Wether the object can be picked up or not.
     * @param { boolean } returnAfterUse Wether the object should actually be picked up or have just the onUse function executed.
     */
    setPickup( pickupness, returnAfterUse ) {
        // ...
    }

    /**
     * Returns the variables described in the setPickup function.
     * @return { object } { pickupable: [Whether the object can be picked up or not.], returnAfterPickup: [Wether the object should actually be picked up or just have the onUse function executed.] }
     */
    getPickup() {
        // ...
    }

    /**
     * Sets the linear velocity of the object
     * @param { number } x The x value of the linear velocity of the object
     * @param { number } y The y value of the linear velocity of the object
     * @param { number } z The z value of the linear velocity of the object
     */
    setLinearVelocity( x, y, z ) {
        // ...
    }

    /**
     * Returns the linear velocity of an object
     * @return { object } A Proton.Vector3 object.
     */
    getLinearVelocity() {
        // ...
    }

    /**
     * Sets the angular velocity of the object
     * @param { number } x The x value of the angular velocity of the object
     * @param { number } y The y value of the angular velocity of the object
     * @param { number } z The z value of the angular velocity of the object
     */
    setAngularVelocity( x, y, z ) {
        // ...
    }

    /**
     * Returns the angular velocity of an object
     * @return { object } A Proton.Vector3 object.
     */
    getAngluarVelocity() {
        // ...
    }

    /**
     * Sets the "linear factor" of an object: wether or not an axis is going to be used when physics is simulated for an object, in a normalized vector.
     * @param { number } x The x value of the linear factor of the object
     * @param { number } y The y value of the linear factor of the object
     * @param { number } z The z value of the linear factor of the object
     */
    setLinearFactor( x, y, z ) {
        // ...
    }

    /**
     * Adds a linear velocity to the object.
     * @param { number } x The x value of the added linear velocity 
     * @param { number } y The y value of the added linear velocity
     * @param { number } z The z value of the added linear velocity
     */
    addLinearVelocity( x, y, z ) {
        // ...
    }

    /**
     * Adds an angular velocity to the object.
     * @param { number } x The x value of the added angular velocity
     * @param { number } y The y value of the added angular velocity
     * @param { number } z The z value of the added angular velocity
     */
    addAngularVelocity( x, y, z ) {
        // ...
    }

    /**
     * Sets the "angular factor" of an object: wether or not an axis is going to be used when physics is simulated for an object, in a normalized vector.
     * @param { number } x The x value of the angular factor of the object
     * @param { number } y The y value of the angular factor of the object
     * @param { number } z The z value of the angular factor of the object
     */
    setAngularFactor( x, y, z ) {
        // ...
    }

    /**
     * Sets the rotation of the object, in degrees.
     * @param { number } x The x value of the object's new rotation
     * @param { number } y The y value of the object's new rotation
     * @param { number } z The z value of the object's new rotation
     */
    setRotation( x, y, z ) {
        // ...
    }

    /**
     * Sets the position of the object.
     * @param { number } x The x value of the object's new position
     * @param { number } y The y value of the object's new position
     * @param { number } z The z value of the object's new position
     */
    setPosition( x, y, z ) {
        // ...
    }

    /**
     * Eases the object into a set position.
     * @param { number } x The x value of the object's new position
     * @param { number } y The y value of the object's new position
     * @param { number } z The z value of the object's new position
     */
    animatePosition( x, y, z ) {
        // ...
    }

    /**
     * Returns the rotation of the object.
     * @return { object } A Proton.Vector3 object
     */
    getRotation() {
        // ...
    }

    /**
     * Returns the position of the object.
     * @return { object } A Proton.Vector3 object
     */
    getPosition() {
        // ...
    }

    /**
     * Checks if the physics for the object has loaded.
     * @return { boolean } Wether or not physics for the object has loaded.
     */
    isPhysicsReady() {
        // ...
    }

    /**
     * Gets a normalized vector on where the object is "looking".
     * @return { object } A Proton.Vector3 object.
     */
    getWorldDirection() {
        // ...
    }

    /**
     * Rotates the object to face a vector.
     * @param { number } x The x value of the vector.
     * @param { number } y The y value of the vector.
     * @param { number } z The z value of the vector.
     */
    lookAt( x, y, z ) {
        // ...
    }

    /**
     * Gets the global position of the object
     * @return { object } A Proton.Vector3 object.
     */
    getWorldPosition() {
        // ...
    }

    /**
     * Gets the global rotation of the object.
     * @return { object } A Proton.Vector3 object.
     */
    getWorldRotation() {
        // ...
    }

    /**
     * Adds another object to the object
     * @param { object } object The Proton3DObject that will become a "child" of the main object.
     */
    add( object ) {
        // ...
    }

    /**
     * Removes another object from the object
     * @param { object } object The Proton3DObject that will stop being "child" of the main object. Note that it already has to be a child of the object: you can use [object].children to see if the main object has children at all.
     */
    remove( object ) {
        // ...
    }

    // |---------- Type-Specific Functions ----------|

    /**
     * Changes the field-of-view for a camera.
     * @param { number } value The FOV, somewhere around 1.
     */
    changeFOV( value ) {
        // ...
    }

    /**
     * Sets the intensity of a light.
     * @param { number } value The intensity of the light.
     */
    setIntensity( value ) {
        // ...
    }

    /**
     * Sets the angle of a spotlight
     * @param { number } value The angle, in radians.
     */
    setAngle( value ) {
        // ...
    }

    /**
     * Sets the position of a sun in a sky.
     * @param { number } x The X position of the sun.
     * @param { number } y The Y position of the sun.
     * @param { number } z The Z position of the sun.
     */
    setSunPosition( x, y, z ) {
        // ...
    }





}