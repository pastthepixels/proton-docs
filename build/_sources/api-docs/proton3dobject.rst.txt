==============
Proton3DObject
==============

.. note:: Here are the possible options for the ``extras`` parameter of the constructor:

.. code-block:: json

    {
        type: "cube"|"sphere"|"perspectivecamera"|"spotlight"|"sky"|undefined/null (used when importing meshes),
        fov: [A number around 1, only for cameras.],
        position: new Proton.Vector3( [Number], [Number], [Number] ),
        rotation: new Proton.Vector3( [Number], [Number], [Number] ) (Measures in degrees.),
        sun: [A Proton3D light which is the "sun" of your sky. Only for skies.],
        width: [A number. Only for cubes.],
        height: [A number. Only for cubes.],
        depth: [A number. Only for cubes.],
        radius: [A number. Only for spheres.]
        castShadow: [A boolean. Only for meshes.]
        invisible: [A boolean. Only for meshes. (Calls object.makeInvisible().)],
        noPhysics: [A boolean. Only for meshes.],
        mass: [A number. Only for meshes.],
        restitution: [A number, representing bounciness. Only for meshes.],
        friction: [A number. Only for meshes.]
    }

.. js:autoclass:: Proton3DObject
    :members: