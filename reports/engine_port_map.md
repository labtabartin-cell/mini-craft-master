# Engine port map

| Native area | Observed systems | Web module |
|---|---|---|
| Application | App, AppPlatform_android, MinecraftClient | runtime/app.js |
| World | Level, ServerLevel, WorldInfo, LevelData | runtime/world |
| Chunks | ChunkSource, NetworkChunkSource, RenderChunk, RenderChunkBuilder | runtime/world/chunks |
| Blocks | Block and concrete block classes | runtime/content/blocks |
| Items | Item, ArmorItem, ArrowItem, AuxDataBlockItem | runtime/content/items |
| Actors | Entity, Mob, Player, LocalPlayer | runtime/entity |
| Gameplay | GameMode, Abilities, AdventureSettings | runtime/gameplay |
| Inventory | Inventory, InventoryMenu, container models | runtime/inventory |
| Rendering | LevelRenderer, RenderChunkBuilder, terrain/entity/UI paths | runtime/render |
| UI | GuiElement, GuiElementContainer, shipped UI JSON | runtime/ui |
| Networking | NetworkHandler, ClientNetworkHandler, packet classes | runtime/network |
| Audio | SoundRepository, UISoundPlayer | runtime/audio |
| Particles | particle classes and renderer symbols | runtime/particles |
| Persistence | Android storage abstractions | runtime/storage |

Highest-risk areas are chunk meshing, exact renderer/material semantics, entity behavior, custom UI renderers, networking/session behavior, and native tick/physics timing.
