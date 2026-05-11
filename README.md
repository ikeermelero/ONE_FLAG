# ONE_FLAG

ONE_FLAG es un juego hecho con React en el que debes adivinar la bandera correcta a partir de varias opciones. El proyecto permite jugar en modo individual o para 2 jugadores, con puntuación y pantalla final de resultados.

## Descripción

El juego muestra una bandera aleatoria y ofrece 4 posibles respuestas. Si aciertas, sumas un punto; si fallas, se marca la opción incorrecta y pasa el turno o continúa la ronda según el modo de juego.

## Funcionalidades

- Modo 1 jugador y 2 jugadores.
- Sistema de puntuación por rondas.
- Retroalimentación visual en respuestas correctas e incorrectas.
- Pantalla final con resultados.
- Opción para abandonar la partida y volver al inicio.

## Tecnologías

- React
- JavaScript
- Tailwind CSS
- Vite

## Estructura del proyecto

- `src/App.jsx`: control de navegación entre inicio y partida.
- `src/pages/index.jsx`: pantalla de selección de jugadores.
- `src/pages/game.jsx`: lógica principal del juego.
- `src/components/`: componentes reutilizables de interfaz.
- `src/utils/`: datos y utilidades del juego.

## Cómo funciona

1. El usuario elige si quiere jugar solo o contra otra persona.
2. Se genera una ronda aleatoria con una bandera y 4 opciones.
3. El jugador responde y el juego indica si la respuesta es correcta o incorrecta.
4. Se actualiza el marcador y cambia el turno en modo multijugador.
5. Al terminar las rondas, se muestra el resultado final.

## Instalación

```bash
git clone https://github.com/ikeermelero/ONE_FLAG.git
cd ONE_FLAG
npm install
npm run dev
```

## Uso

Abre la aplicación en el navegador, selecciona el número de jugadores y pulsa en **Empezar**. Después, intenta adivinar la bandera correcta antes de que se agoten las rondas.

## Notas del proyecto

- Las banderas se cargan desde `flagcdn.com`.
- El juego está pensado como proyecto de clase y práctica de React, componentes y estado.

## Mejoras posibles

- Añadir un contador visual de rondas restantes.
- Añadir temporizador para responder.
- Guardar estadísticas más detalladas por partida.
- Mostrar ranking histórico en la pantalla inicial.
- Mejorar animaciones entre rondas.
- Añadir soporte para más jugadores y cuentas de usuario.

## Contribuidores

[Ermidio](https://github.com/Edy1110)
[Iker](https://github.com/ikeermelero)
[Eli](https://github.com/Danzanfer)
[jonathan](https://github.com/r3dc0m)
