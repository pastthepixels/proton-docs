Testing Your Game
=================
With all the programming and modelling done, you just need to run your game.
Open a terminal in your game directory and type

.. code:: bash

    npm start

And that's it! Thank you for reading this tutorial, and I hope you enjoy using Proton as much as I do making it!

One last thing: You can use the WASD keys to move, spacebar to jump, and if you want to (right) click to fire spheres, you can use this code (pasted into the same GameCode function as it should contain all of your game):

.. code:: javascript

    // Debug cubes!
    window[ "makeCube" ] = () => {

        return new Proton3DObject( {
            type: "cube",
            mass: 1,
            position: Proton.scene.crosshair.position.clone().add( Proton.scene.crosshair.localPosition ),
            height: .5,
            depth: .5,
            width: .5,
            friction: 1,
            restitution: 0,
            onReady: function() { this.material.roughness = 0 }
        } );

    }
    window[ "makeSphere" ] = () => {

        return new Proton3DObject( {
            type: "sphere",
            mass: 1,
            position: Proton.scene.crosshair.position.clone().add( Proton.scene.crosshair.localPosition ),
            radius: .25,
            friction: .5,
            restitution: 1,
            onReady: function() {

                var pos = Proton.scene.crosshair.localPosition;
                this.setLinearVelocity( pos.x * 12, pos.y * 6, pos.z * 12 );
                this.material.setColor( new BABYLON.Color3( Math.random(), Math.random(), Math.random() ).toHexString() );

            }
        } );

    }
    document.body.onclick = ( event ) => { if ( event.button == 2 ) { makeSphere() } else { makeCube () } };
