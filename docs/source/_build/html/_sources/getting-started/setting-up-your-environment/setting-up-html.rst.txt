=========================
Setting Up Your HTML File
=========================

Step 7: Setting up your HTML file
=================================
Before you can begin to start making your game, you have to begin making your HTML file, ``index.html``. You can begin by pasting this template:

.. code:: html

    <!DOCTYPE html>
    <html>
    <head>
        <title>My Proton Game</title>
        <script src="proton/wrapper.js"></script> <!-- Loads the wrapper script for Proton, which tells the engine how to run -->
        <script src="proton/engine.js"></script> <!-- Loads the engine script for Proton, which provides a user-friendly interface for dealing with the Proton3DInterpreter -->
    </head>
    <body style="background: white;">
        <button id="play">Click to play</button> <!-- You have to have a click-to-play button for Proton since you have to call a function to start your game. -->
        <script>
            // Now you can write your game in JavaScript!
        </script>
    </body>
    </html>

Step 8: Setting up your code
============================
Now that your HTML file is set up, you can finally start making your game! Wait... we still have to set up Proton.
You can paste this in your <script> element.

.. code:: javascript

    // Loads all scripts.
    init();

    // Does the game.
    var game = new GameCode( function () {
        
        Proton.init();
        // You can start importing your scene here!

    } );
    play.onclick = function () {

        // Sets the game to start when all scripts inserted by Proton are loaded
        game.autoStart();

    };

Finally! Now we're ready to make a game!