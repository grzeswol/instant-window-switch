const config = {
    includeAllVirtualDesktops: false // Option to include cycling through app windows opened in different virtual desktops 
}

function switchNextWindow() {
    const active = workspace.activeWindow;
    if (!active) {
        return;
    }

    var sameApp;

    const windows = workspace.stackingOrder;
    if(config.includeAllVirtualDesktops) {
        sameApp = windows.filter(w => w.resourceClass === active.resourceClass && w !== active && w.normalWindow);
    }
    else {
        const currentDesktop = workspace.currentDesktop;
        sameApp = windows.filter(w => w.resourceClass === active.resourceClass && w !== active && w.normalWindow
            && (w.desktops.includes(currentDesktop) || w.onAllDesktops));        
    }
    
    if (sameApp.length === 0) {
        return;
    }

    // Sort by stacking order for consistency
    const index = sameApp.indexOf(active);
    const next = sameApp[(index + 1) % sameApp.length];

    if (next) {
        workspace.activeWindow = next;
    }
}

registerShortcut("InstantSwitch","Instant Window Switch (Meta+`)","Meta+`",switchNextWindow);