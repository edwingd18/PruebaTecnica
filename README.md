# PruebaTecnica

# 🧩 Clients App – Backend (Spring Boot) + Frontend (React + Next.js)

Este proyecto es una aplicación fullstack que permite gestionar clientes. Está compuesto por un backend hecho con Spring Boot y un frontend desarrollado con React + Vite. Ambos están orquestados con Docker Compose para facilitar el despliegue local.

---

## 📦 Tecnologías utilizadas

- ⚙️ **Backend**: Java 17 + Spring Boot + Maven + H2 (base de datos en memoria)
- 💻 **Frontend**: Next.js + React + TypeScript + TailwindCSS
- 🐳 **Contenedores**: Docker y Docker Compose

---

## 📁 Estructura del proyecto

```bash
/PruebaTecnica
├── docker-compose.yml
├── frontend/
│   ├── Dockerfile
│   └── ...
└── clients/
    ├── Dockerfile
    ├── pom.xml
    └── ...
```

## ⚙️ Requisitos

Antes de iniciar asegúrate de tener instalado:

- Docker 🐳
- Docker Compose (v2 o superior)

---

## 🚀 Cómo levantar el proyecto

1. Clona el repositorio y navega al directorio raíz:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd pruebatecnica
```

2. Correr el docker compose
```bash
docker compose up --build
```

- Backend = http://localhost:8080/clients
- Frontend = http://localhost:3000/clients
