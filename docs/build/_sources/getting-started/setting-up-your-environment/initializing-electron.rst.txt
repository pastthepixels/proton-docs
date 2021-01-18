=====================
Initializing Electron
=====================
Now, on to finishing setting up Electron and to begin working on your game!

Step 5: Modifiy your main.js file
=================================
 
I've slightly modified ``main.js`` from Electron's tutorial, and it can be copied and pasted into your ``main.js`` file:

.. code-block:: javascript

    // Importing the nessecary stuff
    const electron = require( "electron" )
    const { app, BrowserWindow } = require( "electron" )

    // Code
    app.whenReady().then( onReady )
    app.on( "window-all-closed", function() {

        if ( process.platform !== "darwin" ) {

            app.quit()

        }

    } )

    // Functions
    function onReady () {

        const window = new BrowserWindow( {
            width: 1000,
            height: 750,
            webPreferences: {
                nodeIntegration: true
            }
        } )

        // Sets a minimum size for the window
        window.setMinimumSize( 300, 300 );

        // Removes dev options + menu titlebar
        //window.removeMenu() 

        // Loads the main file
        window.loadFile( "index.html" )

    }

Step 6: Modify your package.json file
=====================================
Now we've got to edit the file ``package.json``, which will tell NPM information like the name of your game. Again, this has been slightly modified from Electron's documentation.

.. code-block:: json

    {
        "name": "my-game",
        "version": "1.0",
        "author": "your name",
        "description": "My Proton game",
        "main": "main.js",
        "scripts": {
            "start": "electron ."
        }
    }