# Pokemon Game - README.md

Este proyecto es un laboratorio para explorar conceptos clave de Vue.js, como el diseño condicional, emit, props, Tailwind CSS, composables, enumeraciones e interfaces.

## Objetivo

El objetivo principal de este proyecto es proporcionar un entorno de aprendizaje práctico para comprender y aplicar estos conceptos de Vue.js en un contexto de desarrollo de juegos.

## Características

- **Diseño condicional**: Se utiliza para mostrar diferentes elementos de la interfaz de usuario en función de condiciones específicas. Por ejemplo, el componente `PokemonGame.vue` muestra un mensaje de carga mientras se obtienen los datos del Pokémon y luego muestra el juego una vez que los datos están disponibles.
- **emit**: Se utiliza para enviar eventos desde componentes hijos a componentes padres. Por ejemplo, el componente `PokemonOptions.vue` emite un evento `selected-option` cuando el usuario selecciona una opción, y el componente `PokemonGame.vue` lo escucha para verificar la respuesta.
- **props**: Se utiliza para pasar datos desde componentes padres a componentes hijos. Por ejemplo, el componente `PokemonGame.vue` pasa las opciones de Pokémon y la respuesta correcta al componente `PokemonOptions.vue` a través de props.
- **Tailwind CSS**: Se utiliza para el estilo de la interfaz de usuario, proporcionando una forma rápida y fácil de crear diseños responsivos.
- **Composables**: Se utilizan para encapsular lógica reutilizable y mejorar la organización del código. El composable `usePokemonGame` en `src/modules/pokemon/composables/usePokemonGame.ts` maneja la lógica del juego, como obtener datos de Pokémon aleatorios, actualizar el estado del juego y verificar las respuestas.
- **Enumeraciones**: Se utilizan para definir conjuntos de valores constantes, mejorando la legibilidad y la seguridad del código. La enumeración `GameStatus` en `src/modules/pokemon/interfaces.ts` define los diferentes estados del juego, como "Playing", "Loading" y "GameOver".
- **Interfaces**: Se utilizan para definir la estructura de los datos, mejorando la legibilidad y la seguridad del código. La interfaz `Pokemon` en `src/modules/pokemon/interfaces.ts` define la estructura de los datos de un Pokémon.

## Tecnologías

- **Vue.js**: El framework utilizado para construir la interfaz de usuario y administrar la lógica del juego.
- **TypeScript**: Se utiliza para la seguridad de tipos y una mejor organización del código.
- **Tailwind CSS**: Se utiliza para dar estilo a los elementos visuales del juego.

## Cómo empezar

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/your-username/pokemon-game.git
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run serve
   ```

## Estructura del proyecto

pokemon-game/
├── src
│ ├── main.ts
│ ├── App.vue
│ ├── modules
│ │ ├── pokemon
│ │ │ ├── components
│ │ │ │ ├── PokemonCard.vue
│ │ │ │ ├── PokemonOptions.vue
│ │ │ │ ├── PokemonPicture.vue
│ │ │ │ └── ...
│ │ │ ├── composables
│ │ │ │ ├── usePokemonGame.ts
│ │ │ │ └── ...
│ │ │ ├── interfaces.ts
│ │ │ ├── pages
│ │ │ │ ├── PokemonGame.vue
│ │ │ │ └── ...
│ │ │ └── ...
│ │ └── ...
│ ├── assets
│ │ ├── styles.css
│ │ └── animations.css
│ ├── ...
└── ...

## Componente `PokemonGame.vue`

Este componente es el punto de entrada del juego. Muestra la interfaz principal del juego, incluyendo:

- Un mensaje de carga mientras se obtienen los datos del Pokémon.
- El nombre del Pokémon.
- La imagen del Pokémon.
- Las opciones de respuesta.
- Un botón para reiniciar el juego.

### Uso de props y emit

El componente `PokemonGame.vue` pasa las opciones de Pokémon y la respuesta correcta al componente `PokemonOptions.vue` a través de props. El componente `PokemonOptions.vue` emite un evento `selected-option` cuando el usuario selecciona una opción, y el componente `PokemonGame.vue` lo escucha para verificar la respuesta.

### Uso de composables

El composable `usePokemonGame` en `src/modules/pokemon/composables/usePokemonGame.ts` maneja la lógica del juego, como obtener datos de Pokémon aleatorios, actualizar el estado del juego y verificar las respuestas.

### Uso de enums e interfaces

La enumeración `GameStatus` en `src/modules/pokemon/interfaces.ts` define los diferentes estados del juego, como "Playing", "Loading" y "GameOver". La interfaz `Pokemon` en `src/modules/pokemon/interfaces.ts` define la estructura de los datos de un Pokémon.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
