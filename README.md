# Mini Craft Master — Web Port

This repository contains the browser-port workbench for the supplied Mini Craft Master APK.

The port keeps the original APK data model and UI definitions as the source of truth. It is not a mock or a simplified game.

## Repository layout

- `index.html` — browser entry point
- `css/app.css` — browser shell styling
- `js/app.js` — WebGL2/bootstrap runtime
- `PORTING_STATUS.md` — verified APK contents and port status
- `reports/engine_port_map.md` — mapping from observed native systems to web modules

## Important

The supplied APK contains the compiled ARM native engine (`libminecraftpe.so`) but not its original C++ source tree. A literal APK-to-JavaScript conversion is therefore not possible. The native engine has to be reconstructed or replaced with a compatible WebAssembly build when source is available.

The complete extracted APK workspace remains the authoritative source for the binary assets and shipped JSON data while the web runtime is being ported.
