
# Instant Window Switch (KWin Script) 

A KDE Plasma 6 KWin script that makes switching between windows of the same application behave like on macOS — the window changes **instantly when you press the key**, not when you release it.  

By default, KDE uses ``` Meta + ` ``` (or ` Meta + ~ `) to open the **window switcher** for windows of the same app, which only activates a window after the key is released.

This script replaces that behavior with instant window activation.  

---  

##  Features  

- Instantly switch between windows of the same app (``` Meta + ` ```)

- Compatible with **KDE Plasma 6 / KWin 6**
- Optional: limit switching to windows on the current virtual desktop (default mode) or across all virtual desktops (configurable)
 

##  Installation  

1. Clone or download the repository:

```bash
git clone https://github.com/grzeswol/instant-window-switch.git
cd instant-switch
```

2. (Optional) Configure the virtual desktop behavior to switch windows across all virtual desktops:
Open ```contents/code/main.js ``` and change
```javascript
 includeAllVirtualDesktops: false
 ```
to
```javascript
 includeAllVirtualDesktops: true
 ```

3. Install the script using **kpackagetool6**:
```bash
kpackagetool6 --type=KWin/Script -i .
 ```

4. Enable it in:
**System Settings → Windows Management → KWin Scripts → Instant Window Switch**
5. Configure shortcut: 
	- Go to **System Settings → Windows Management →  Task Switcher** and remove ``` Meta + ` ``` shortcut in **Current Application** section
	- Go to **System Settings → Keyboard →  Shortcuts**, search for **Instant Window Switch** and set ``` Meta + ` ``` key combination as a shortcut

6. If not immediately working, reboot the system
