# ☢️ Trabajo Práctico - El Reactor Nuclear ☢️

<p align="center">
    <img src="https://i.postimg.cc/RVz8XVyk/image.png" width="80%">
</p>

## Tabla de Contenido

1. [Introducción](#introducción)
    - [Funcionamiento del Reactor](#funcionamiento-del-reactor)
    - [Requerimientos del Sistema](#requerimientos-del-sistema)
2. [💻 Pre-requisitos](#💻-pre-requisitos)
    - [Node.js y npm](#nodejs-y-npm)
3. [🚀 Instalación](#🚀-instalación)
    - [Clonar el Repositorio](#clonar-el-repositorio)
    - [Instalar Dependencias del Proyecto](#instalar-dependencias-del-proyecto)
4. [🔨 Compilación](#🔨-compilación)
5. [⚙️ Ejecución](#⚙️-ejecución)
6. [✅ Testeo](#✅-testeo)
7. [📁 Estructura del Proyecto](#📁-estructura-del-proyecto)
8. [🤝 Autores](#🤝-autores)

[🌟 Enunciado](./ENUNCIADO.md)

## Introducción
Este proyecto implementa un sistema de asistencia específicamente desarrollado para asistir a los operadores, incluyendo a Homero J. S., en la supervisión y control del reactor nuclear.

La planta nuclear genera electricidad a partir de reacciones de fisión nuclear controladas. El sistema se encarga de monitorear continuamente la temperatura del reactor y proporciona mecanismos de control automatizados para mantener la operación dentro de los rangos de seguridad establecidos.

#### Funcionamiento del Reactor
El reactor del Sr. Montgomery B. posee una capacidad de 700 MW/h, lo que significa que en condiciones normales, puede generar hasta 700 MWe de energía eléctrica por hora, aunque generalmente, la producción es menor.
Según la temperatura registrada, el reactor se comporta de diferentes maneras:

- **Rango normal de temperatura**: Entre 280°C y 330°C.
- **Estado de criticidad**: Por encima de 330°C, la capacidad productiva del reactor se reduce al 80% de su capacidad total.
- **Estado crítico**: Por encima de 400°C, el reactor debe ser apagado de forma inmediata para evitar accidentes.

#### Requerimientos del Sistema
El Sr. Montgomery B. solicita que el sistema envíe una alerta al operador en caso de que la temperatura del reactor supere los 330°C, para que pueda activar los protocolos de enfriamiento del reactor. Este mecanismo, que solo puede ser activado si la temperatura supera los 330°C, reduce la potencia generada en base al consumo automático de las barras de control del reactor.

Cada barra de control reduce la energía térmica liberada en un determinado porcentaje

---

## 💻 Pre requisitos

### Node.js y npm
Este proyecto usa el lenguaje TypeScript y requiere Node.js y npm (Node Package Manager) para ejecutarse e instalar los paquetes necesarios.

**Instalación de Node.js y npm**
Podés descargar e instalar Node.js desde su [página oficial](https://nodejs.org/en). La instalación de Node.js incluye npm automáticamente.

Para verificar si ya tienes Node.js y npm instalados, ejecuta los siguientes comandos en tu terminal:

```bash
node -v
npm -v
```

## 🚀 Instalación
Sigue estos pasos para instalar y configurar el proyecto:

1. Clonar el Repositorio
Primero, clona el repositorio del proyecto desde GitHub. Abre tu terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/fedef1982/Trabajo-Practico-Laboratorio3-2024-Reactor-Nuclear.git
```

2. Instalar Dependencias del Proyecto

Instala las dependencias del proyecto ejecutando el siguiente comando en el directorio del proyecto:

```bash
  npm install
```
## 🔨 Compilación
Para compilar los archivos ejecuta:

```bash
  npm run build
```

## ⚙️ Ejecución
Para ejecutar el proyecto, usa el siguiente comando:
```bash
  npm run start:dev
```

## ✅ Testeo
Para testear el proyecto usa el comando en tu terminal

```bash
  npm run test
```

## 📁 Estructura del Proyecto

```css
Trabajo-Practico-Laboratorio3-2024-Reactor-Nuclear
|
├─ diagramas/
│  ├─ DiagramaDeClases.puml
│  ├─ DiagramaDeClasesObservadores.puml
│  ├─ DiagramaDeClasesReactor.puml
│  ├─ DiagramaDeClasesRefrigeracion.puml
│  ├─ DiagramaSecuenciaEnfriamiento.puml
│  └─ DiagramaSecuenciaInicio.puml
│
├─ src/
│  ├─ central/
│  │  └─ centralNuclear.ts
│  ├─ constantes.ts
│  ├─ estadosReactor/
│  │  ├─ estadoReactor.ts
│  │  ├─ estadoReactorApagado.ts
│  │  ├─ estadoReactorCritico.ts
│  │  ├─ estadoReactorDisminuido.ts
│  │  ├─ estadoReactorEncendido.ts
│  │  ├─ estadoReactorNormal.ts
│  │  ├─ ISuscriptorEstadoApagado.ts
│  │  └─ ISuscriptorEstadoDisminuido.ts
│  ├─ excepciones/
│  │  └─ noSeGeneraEnergiaException.ts
│  ├─ operador/
│  │  ├─ operador.ts
│  │  └─ srBurns.ts
│  ├─ reactor/
│  │  ├─ builderReactor.ts
│  │  ├─ combustible.ts
│  │  ├─ directorReactor.ts
│  │  ├─ generador/
│  │  │  ├─ Generador.ts
│  │  │  ├─ IGenerador.ts
│  │  │  └─ ISuscriptorEnegiaNeta.ts
│  │  ├─ IBuilderReactor.ts
│  │  ├─ ICombustible.ts
│  │  ├─ INucleo.ts
│  │  ├─ ISensor.ts
│  │  ├─ ISuscriptorTemperatura.ts
│  │  ├─ nucleo.ts
│  │  ├─ reactor.ts
│  │  └─ sensor.ts
│  ├─ refrigeracion/
│  │  ├─ barrasDeControl.ts
│  │  ├─ barraStrategy.ts
│  │  ├─ refrigerableStrategy.ts
│  │  ├─ turbina.ts
│  │  └─ turbinaStrategy.ts
│  └─ tablero/
│     ├─ alerta.ts
│     ├─ mostrable.ts
│     ├─ tablero.ts
│     └─ tableroConsola.ts
├─ tests/
│  ├─ central/
│  │  └─ centralNuclear.test.ts
│  ├─ estadosReactor/
│  │  ├─ estadoReactorApagado.test.ts
│  │  ├─ estadoReactorCritico.test.ts
│  │  ├─ estadoReactorDisminuido.test.ts
│  │  ├─ estadoReactorEncendido.test.ts
│  │  └─ estadoReactorNormal.test.ts
│  ├─ mockMostrable.ts
│  ├─ mocks.ts
│  ├─ mocksReactor.ts
│  ├─ operador/
│  │  ├─ operador.test.ts
│  │  └─ srBurns.test.ts
│  ├─ reactor/
│  │  ├─ builderReactor.test.ts
│  │  ├─ combustible.test.ts
│  │  ├─ directorReactor.test.ts
│  │  ├─ generador/
│  │  │  └─ generador.test.ts
│  │  ├─ nucleo.test.ts
│  │  ├─ reactor.test.ts
│  │  └─ sensor.test.ts
│  ├─ refrigeracion/
│  │  ├─ barrasDeControl.test.ts
│  │  ├─ barraStrategy.test.ts
│  │  ├─ turbina.test.ts
│  │  └─ turbinaStrategy.test.ts
│  └─ tablero/
│     ├─ alerta.test.ts
│     ├─ mostrable.test.ts
│     └─ tableroConsola.test.ts
├─ tsconfig.json
├─ jest.config.js
├─ package-lock.json
├─ package.json
└─ README.md
``` 

## 🤝 Autores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Camirolejo">
        <img src="https://i.pinimg.com/originals/ee/03/54/ee0354ee6689f83a0326291b79d819e1.jpg" width="100px;" alt="-"/><br>
        <sub>
          <b>Camila García</b>
        </sub>
      </a>
    </td>   
    <td align="center">
      <a href="https://github.com/abrilAlvarez1">
        <img src="https://i.pinimg.com/originals/2a/4c/e2/2a4ce25630c250e2f10cc4b5de34cf04.jpg" width="100px;" alt=""/><br>
        <sub>
          <b>Abril Alvarez</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/NiAlGon">
        <img src="https://i.pinimg.com/originals/e9/80/08/e9800881d89878ae20ed541503c0c2db.jpg" width="100px;" alt="-"/><br>
        <sub>
          <b>Nicolás Gonzalez</b>
        </sub>
      </a>
    </td>
      <td align="center">
      <a href="https://github.com/fedef1982">
        <img src="https://i.pinimg.com/originals/dd/4c/e4/dd4ce422a0b424b4653933b7092d4077.jpg" width="100px;" alt=""/><br>
        <sub>
          <b>Federíco Fresco</b>
        </sub>
      </a>
    </td>
  </tr>
</table>



[#💻 Pre requisitos]: #💻-Pre-requisitos