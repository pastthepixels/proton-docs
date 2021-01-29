/** The class that represents a material for a mesh in Proton. */
class Proton3DMaterial {

    /**
     * The constructor does some fancy stuff to work for imported objects,
     * but you don't have to worry about this since it is automatic.
     * @param { object } parentObject The (Proton3D)object that will have the material assigned to it
     * @param { object } extras A list of parameters for this function. All that matters for this function is extras.name, which is the name of the material.
     */
    constructor( parentObject, extras ) {
        // ...
    }

    /** The color of the material, in a hexadecimal color value. */
    color = "#FFFFFF"

    /** The roughness of the material: a value between 0 and 1. */
    roughness = 0

    /** The "metalness" of the material: a value between 0 and 1. */
    metalness = 0

    /** The opacity of the material: a value between 0 and 1. */
    opacity = 0

    /** The emissive strength of the material: a value between 0 and 1. */
    emissive = 0

    /** The emissive color of the material, in a hexadecimal color value. */
    emissiveColor = "#FFFFFF"

    /** Whether or not the material is rendered in "wireframe" mode. */
    wireframe = false

    /**
     * Sets the emissive color of the material
     * @param { string } color A hexadecimal color value
     */
    setEmissiveColor( color ) {
        // ...
    }

    /**
     * Returns the emissive color of the material
     * @return { string } A hexadecimal color value
     */
    getEmissiveColor() {
        // ...
    }

    /**
     * Turns on or off wireframe rendering for the material
     * @param { boolean } value Whether or not the material has wireframe enabled
     */
    setWireframe( value ) {
        // ...
    }

    /**
     * Returns the value of wether or not wireframe is enabled for the material
     * @return { boolean } Whether or not the material has wireframe enabled
     */
    getWireframe() {
        // ...
    }

    /**
     * Sets the emissive intensity of the material.
     * @param { number } value The emissive intensity: a value between 0 and 1.
     */
    setEmissive( value ) {
        // ...
    }

    /**
     * Returns the emissive intensity of the material.
     * @return { number } The emissive intensity: a value between 0 and 1.
     */
    getEmissive() {
        // ...
    }

    /**
     * Changes the color of the material.
     * @param { string } hexString A hexadecimal color value.
     */
    setColor( hexString ) {
        // ...
    }

    /**
     * Returns the current color of the material.
     * @return { string } A hexadecimal color value.
     */
    getColor() {
        // ...
    }

    /**
     * Sets the roughness of the material.
     * @param { number } value The roughness of the material: a value between 0 and 1.
     */
    setRoughness( value ) {
        // ...
    }

    /**
     * Returns the roughness of the material.
     * @return { number } The roughness of the material: a value between 0 and 1.
     */
    getRoughness() {
        // ...
    }

    /**
     * Sets the metalness of the material (how much it looks like metal).
     * @param { number } value The metalness of the material: a value between 0 and 1.
     */
    setMetalness( value ) {
        // ...
    }

    /**
     * Returns the metalness of the material.
     * @return { number } The metalness of the material: a value between 0 and 1.
     */
    getMetalness() {
        // ...
    }

    /**
     * Sets the opacity of the material.
     * @param { number } value The opacity of the material: a value between 0 and 1.
     */
    setOpacity( value ) {
        // ...
    }

    /**
     * Returns the opacity of the material.
     * @return { number } The opacity of the material: a value between 0 and 1.
     */
    getOpacity() {
        // ...
    }

    /**
     * Makes the material transparent.
     */
    makeTransparent() {
        // ...
    }
    
}