========================
Importing Your Character
========================
This is the final step!
Again, we're going to paste this code right below where we had the environment imported, and I'll explain what it does after.

.. code:: javascript

    // The player
    window[ "player" ] = new Proton.import( {
        path: "models/player.glb",
        mass: 1,
        noPhysics: true,
        noShadows: true,
        position: new Proton.Vector3( 0, 6, 0 ),
        onReady: function () {

            player.objects[ 0 ].makePlayer( {
                // camera
                type: "firstperson",
                head: new Proton.Vector3( 0, 1.6, 0 ),
                invisible: true,
                noShadows: true,
                // keycontrols
                movementSpeed: 2.5
            } );
            Proton.scene.controls.camera.init();
            
        }
    } );

What this does is it loads the playermodel you made earlier. It loades it with no physics and no shadows, in order to immerse the player into the environment.
noPhysics is required in order to use the makePlayer function, and in order to use the parameter noShadows in said function, you have to have noShadows enabled for
your imported mesh.

Okay! Now let's see what this makePlayer function does.

After you import an object, it has a value named "objects". This is the list of objects in your file that have been imported.
Each object has an ability to be made a player - hence the use of "makePlayer". Let's now see what its parameters are.

.. code:: javascript

        object.makePlayer( {
            // camera
            type: "firstperson", // Can be set to "firstperson" or "thirdperson" modes.
            head: new Proton.Vector3( 0, 1.6, 0 ), // The location in which the head of your object is. You won't see your playermodel for this demo, so 1.6 metres seems like a convincing number.
            invisible: true, // This makes the player invisible. You wouldn't want to see your feet, would you? Ok, maybe so. But definitely not the inside of your head.
            noShadows: true, // Again, this has to be used in conjunction with noShadows on the object side for it to work. You don't have to disable shadows, but it helps with immersion.
            // keycontrols
            movementSpeed: 2.5 // Adjusts the movement speed of your player. Sprint speed is automatically calculated.
        } );

And that's it! You're done the whole thing! All that's needed to be done next is testing your game.