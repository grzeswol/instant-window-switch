function switchNextWindow() {
    const active = workspace.activeWindow;
    if (!active) {
        return;
    }

    const windows = workspace.stackingOrder;
    const sameApp = windows.filter(w =>
    w.resourceClass === active.resourceClass && w !== active && w.normalWindow
    );

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