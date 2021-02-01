===================
Proton3DInterpreter
===================

Instead of directly listing everything the Proton3DInterpreter does by default,
this is a quick page on how to edit it since all of the functions here have their Proton counterparts already documented.

So, you want to switch Proton's underlying engine.

Before you embark on this journey, here are some things to note:

- The Proton3DInterpreter doesn't do anything new - its purpose is to do everything in the documentation, but actually be the part that speaks to whatever engine you are using. (In this case, it's babylon.js. You should check it out at babylonjs.com!)
- Make sure to always return the same things that have been returned in the default Proton3DInterpreter!
- Comments should help you on your way. I have quite a few of them, so I do hope that helps!
- Proton3DObject functions are in the "Proton3DObject" sub-object, and the same applies for the Proton3DMaterial class.
- The Proton3DInterpreter works in a way where it is initialized by the scene with the all parameters from [scene].init. It is a class, so a new instance is created here, but keep in mind that you will only need one scene/interpreter combination - that which Proton automatically makes.

Still up for the task? Here's how you begin:

1) Redefine the Proton3DInterpreter in a new JavaScript script, imported after Proton.

.. code-block:: javascript

    Proton3DInterpreter = class ...

2) Paste the current Proton3DInterpreter (located at [Proton]/engine/wrapper.js) into where the word "class" is marked in step 1, and remove the "Proton3DInterpreter" from your pasted text (or else you'd declare it twice).

3) Now you can start! Wait, you probably want to import your scripts in a similar fashion to what Proton does. If you need to import your scripts with a quick and easy fashion, here is how Proton does it (note that you can change script paths in Proton to local ones):

.. code-block:: javascript

    function init( scripts ) {

        scriptStats.maxScripts = 0;
        if ( ! scripts ) {

            scripts = {
                ammojs: "https://cdn.babylonjs.com/ammo.js",
                babylonjs: "https://cdn.babylonjs.com/babylon.js",
                babylonjs_materials: "https://preview.babylonjs.com/materialsLibrary/babylonjs.materials.js",
                babylonjs_loaders: "https://preview.babylonjs.com/loaders/babylonjs.loaders.js"
            };

        }
        scriptStats.scripts = scripts;

        // Babylon.js
        importScript( scripts.babylonjs, true, function() {
            // Stuff that creates the sky + more materials
            importScript( scripts.babylonjs_materials, true );

            // Stuff that loads files like glTF
            importScript( scripts.babylonjs_loaders, true );

            // Physics!
            importScript( scripts.ammojs, false );
        } );

    }

4) Now you can get to work! Make sure you know what you're doing, as this can break Proton. Don't worry if it is! You can always just repeat these steps and start fresh. This is a tedious job after all, so I wish you good luck!