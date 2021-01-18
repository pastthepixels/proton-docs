=============================
Initializing Your Environment
=============================
.. note::
    This setup has been tested to work on Pop!_OS 20.10. I'll try to simplify the instuctions for those using other operating systems, but it may not be perfect.

.. note::
    We're going to be using Electron, which lets people make native-like apps through HTML.
    This optionally requires Node.js and VSCode/Codium if you want a good development environment.
    If you're stuck so far, don't panic! I'll be reviewing the steps to do this below.

Step 1: Install Node.js and NPM
===============================
For Debian-based systems, you can use the command:

.. code-block:: bash

    sudo apt install npm

For other systems, head over to the `Node.js website <https://nodejs.org/en/download/>`_ and download and install Node.js (pre-packaged with NPM).

Step 2 (Optional): Install Visual Studio Code or VSCodium
=========================================================
If you want to install Visual Studio Code, you can use `this link <https://code.visualstudio.com/Download>`_.
Alternatively, if you want to install telemetry-less version of VSCode, you can install VSCodium from `this link <https://github.com/VSCodium/vscodium/releases>`_.
Usage is fairly simple; you can use VSCode/Codium like a typical text editor. To open a folder, click ``File > Open Folder`` in the top bar, and you can then use
the built-in file explorer to open and edit files within your opened folder.

Step 3: Set up your folder structure
====================================
Let's suppose you want to make this game in the folder ``mygame``. The file/folder structure should look something like this:

|    mygame/
|    ├── models/
|    ├──── environment.glb (will be made later)
|    ├──── player.glb (will be made later)
|    ├── proton/
|    ├──── engine.js (can be downloaded from `<https://github.com/pastthepixels/proton>`_)
|    ├──── wrapper.js (can be downloaded from `<https://github.com/pastthepixels/proton>`_)
|    ├── node_modules/ (should be created automatically in further steps)
|    ├── index.html
|    ├── main.js
|    ├── package-lock.json (should be created automatically in further steps)
|    └── package.json (should be created automatically in further steps)

Step 4: Install Electron
========================

The next steps are rather simple - we just have to follow the steps detalied from `<https://www.electronjs.org/docs/tutorial/quick-start>`_.
Again, on Debian-based systems, it would look like this:

.. code-block:: bash

    cd mygame
    npm init -y
    npm i --save-dev electron