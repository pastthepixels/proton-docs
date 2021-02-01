====================
Importing Your Scene
====================
Now we're going to import the scene. It should only take a few lines of code, pasted inside your GameCode constructor:

.. code:: javascript

    // The environment
    window[ "environment" ] = new Proton.import( {
        path: "models/base.glb",
        mass: 0, // A mass of zero is needed to make static objects.
        position: new Proton.Vector3( 0, -5, 0 )
    } );

.. note::

    We're using window[ "environment" ] instead of the var keyword to make the variable "environment" global. This means you can play with it from the JavaScript
    console in the developer options panel.

This function, "Proton.import", has some parameters important to us:

.. code:: javascript

    var importedMesh = new Proton.import( { // It's important to have that "new" keyword
        path: "", // A string consisting of the URL of your models
        mass: 0, // The mass of your object (zero to make it static)
        position: new Proton.Vector3( 0, 0, 0 ) // The position of your object when it loads (Note that OpenGL/WebGL has a thing called Y-up)
        physicsImpostor: "MeshImpostor" // A string consisting of the constructor used to make the physics mesh in Babylon.js (this can change the physics mesh's shape) (OPTIONAL)
        onReady: function(){ console.log( this ) } // A function called when the object has loaded (OPTIONAL)
    } )

Great! Now we're going to just have to import the playermodel. Head over to the next step to do that.