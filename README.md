# Frozen Mouth
A chrome extension that mutes the audio of KSI's "Thick Of It" song on YouTube.

# Warning! Doesn't work on all systems!
While it *works on my machine*, I tested some setups where youtube's localStorage looks completely different and my code doesn't work there. I'm working on fixing the issue.

# Features
- Uses new Manifest v3 ensuring compatibility with newer versions of chrome
- Activates automatically and only on KSI's song
- Failsafe: If the extension can't get and press the mute button, it modifies localStorage to mute the audio
- Saves your braincells for the price of completely nothing
- **We don't store, transmit or handle ANY user data**

# Installation
**This extension is not published on the chrome webstore yet, because it is pending review. You can install it manually by following the instructions below, or wait a few weeks to be published.**

### Manual installation
1. Download the [source code (.zip)](https://github.com/cablesalty/frozenmouth/archive/refs/heads/main.zip) or [download a release (latest release recommended) (.zip source code)](https://github.com/cablesalty/frozenmouth/releases/)
2. Extract the .zip file
3. Go to [chrome://extensions](chrome://extensions)
4. Click the "Developer Mode" toggle in the top right corner
5. Click "Load Unpacked"
6. Select the downloaded .zip file
7. Enjoy!

# Privacy
As mentioned before, we do not store, transmit, sell or handle any user data.
