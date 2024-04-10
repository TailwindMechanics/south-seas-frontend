# Chicane Cards Game Project Brief
## Overview
The primary objective of this project is to create a high-quality multiplayer card game that demonstrates technical skills, code quality, and ability to deliver a polished product in the iGaming industry. The game is built using React and PixiJS for the frontend, ASP.NET for the backend, and Supabase for the database. Additionally, this project will serve as a foundation for the larger South Seas project, a 3D game engine built with wgpu. This project is for demonstration only and is not a commercial product.
## Author: 
Seamus Dunne, https://www.linkedin.com/in/s-dunne/
## Technical Stack
### Frontend
- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool for fast development and optimized production builds.
- **pnpm**: Fast and efficient package manager for JavaScript projects. 
- **PixiJS**: *(Later)* 2D rendering engine for interactive graphics and animations.
- **TypeScript**: Static typing for JavaScript. 
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Headless UI**: Unopinionated component library.
- **Supabase.js**: Auth, orm and code gen for schema, real-time player input.
- **RxJS**: Library for reactive programming in JavaScript. 
- **Prettier**: Code formatter for consistent code style. 
- **HowlerJS**: *(Later)* Audio library for sound effects and background music.
### PixiJS Libraries (Later):
- **pixi-viewport**: Viewport management for panning and zooming.
- **pixi-particles**: Particle system for visual effects.
- **pixi-spine**: Integration with Spine animation tool.
- **pixi-keyboard**: Keyboard input handling.
### Backend
- **ASP.NET**: Web framework for building server-side applications.
- **Supabase SDK**: Real-time player input, auth.
- **Entity Framework Core**: Code-centric db schema definition. 
- **Rx.NET**: Library for reactive programming in C#.
### Database
- **Supabase**: Provides real-time subscriptions and efficient data storage for game state and player information.
- **Auth**: Supabase Auth.
- **Payments**: *(Later)* Supabase Stripe extension.
### DevOps
- **GitHub Actions**: CI/CD pipeline for automated testing and deployment.
- **Koyeb**: Serverless platform for hosting and scaling the backend and database.
___
## Game Mechanics
1. Each player is dealt a hand of 5 cards.
2. The dealer lays out cards face-up on the table, equal to the number of players.
3. Players take turns placing a card face-down on any stack and announcing the new sum of that stack, either honestly or bluffing.
4. If a player is called on their announced sum and they were honest, the accuser receives a penalty card. If the player was bluffing, the accused receives a penalty card. In either case, the stack in question is turned face-up.
5. Any player can call any stack at any time by challenging the announced sum. The player who placed the topmost card on the called stack must then respond, revealing whether they were honest or bluffing.
6. A player can pass their turn at any time and pick up a new card from the deck.
7. The winner is the player who places their final card on a stack and accurately announces the total sum of that stack. If they are incorrect, they are out of the round.
___