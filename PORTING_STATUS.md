# Porting status

## Verified from the supplied APK

- Native engine: `lib/armeabi-v7a/libminecraftpe.so`
- Original UI definition files: 30
- Image assets: 947
- Sound assets: 414
- `items.json`: present
- Material/shader definitions: present
- Native symbols expose major systems including `MinecraftClient`, `Level`, `LevelRenderer`, `Player`, `GameMode`, `Inventory`, GUI/screen classes, blocks/items, entities, networking, rendering and audio.

## Web replacement plan

| Native layer | Web replacement |
|---|---|
| Android app/input | DOM Pointer/Keyboard/Gamepad APIs |
| Native renderer | WebGL2 |
| Native asset loading | fetch + ImageBitmap/AudioBuffer |
| Native UI JSON renderer | JavaScript UI runtime |
| Level/chunks | JS/WASM world/chunk modules |
| Persistence | IndexedDB |
| Audio | WebAudio |
| Networking | WebSocket/fetch |

## Not claimed complete

The repository intentionally does not claim that the native engine has already been translated. The APK contains the compiled engine but not its original C++ source tree, so the remaining work is the actual engine reconstruction/port.
