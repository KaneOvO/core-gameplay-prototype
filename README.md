# Core Gameplay Prototype

A core gameplay archetype of our game, containing the complete first level of combat, maze exploration, and respawn mechanics from our game. 

Instead of heading to the second level after the maze exploration, you will return to the background introduction.


Audio: 

The game has two different kinds of several different BGM, which will be changed in different scenes such as exploration and battle.

Visual: 

There are several different types of visual objects in the game.

For example, the game's cards are sprite objects generated using external video.

The stars when the event cards pop up in the game are visual objects that we generate using code.

Motion: 

The core interaction of our game is dragging cards for selection, and we have designed many animations for card objects. 

This includes dragging, panning down to leave at the end of a selection, and drawing a new card.

Progression: 

One of the most significant advances is the HP settings for players and enemies in the game's combat scenes.


Prefabs:

All the scenes in the game are based on two scene classes, Game scene and base, where base is also a class based on game scene. 

All non-game scenes, including the main menu, background introduction are integrated with game scene, while the game scene inherits from base class.
