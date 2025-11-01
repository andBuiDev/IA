# 🤝 Contribución al Bootcamp IA Interactivo

¡Gracias por tu interés en contribuir a este proyecto educativo! Tu ayuda puede hacer que más personas tengan acceso a una educación de calidad en Inteligencia Artificial.

## 📋 Tabla de Contenidos

- [Cómo Contribuir](#cómo-contribuir)
- [Tipos de Contribuciones](#tipos-de-contribuciones)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guía de Estilo](#guía-de-estilo)
- [Reporte de Issues](#reporte-de-issues)
- [Pull Requests](#pull-requests)

## 🚀 Cómo Contribuir

### Requisitos Previos

- Node.js 18+
- Conocimientos básicos de React/Next.js
- Pasión por la educación en IA

### Pasos Iniciales

1. **Fork** el repositorio
2. **Clona** tu fork localmente:
   ```bash
   git clone https://github.com/TU-USUARIO/bootcamp-ia-interactivo.git
   cd bootcamp-ia-interactivo
   ```
3. **Añade** el repositorio original:
   ```bash
   git remote add upstream https://github.com/tu-usuario/bootcamp-ia-interactivo.git
   ```
4. **Instala** las dependencias:
   ```bash
   npm install
   ```
5. **Crea** una rama para tu contribución:
   ```bash
   git checkout -b feature/tu-nueva-funcionalidad
   ```

## 🎯 Tipos de Contribuciones

### 🐛 Reporte de Bugs
- Busca issues existentes antes de crear uno nuevo
- Usa el template de bug report
- Incluye capturas de pantalla si es posible
- Proporciona pasos para reproducir el problema

### ✨ Nuevas Funcionalidades
- Abre un issue para discutir la idea antes de codificar
- Sigue la estructura actual del proyecto
- Añade pruebas si es necesario
- Documenta los cambios

### 📚 Contenido Educativo
- **Nuevos ejercicios**: Crea ejercicios interactivos con validación
- **Módulos adicionales**: Propón nuevos temas de aprendizaje
- **Mejoras de contenido**: Actualiza o expande el material existente
- **Traducciones**: Ayuda a traducir a otros idiomas

### 🎨 Mejoras de Diseño
- Mejoras en la UX/UI
- Componentes reutilizables
- Optimización para móviles
- Accesibilidad

### 📝 Documentación
- Mejora del README
- Guías de instalación
- Tutoriales
- Comentarios en el código

## 🔄 Proceso de Desarrollo

### 1. Desarrollo
```bash
# Inicia el servidor de desarrollo
npm run dev

# Verifica la calidad del código
npm run lint

# Verifica tipos de TypeScript
npm run type-check
```

### 2. Testing
- Prueba tu funcionalidad en diferentes navegadores
- Verifica que el diseño sea responsive
- Asegúrate de que no haya errores en la consola

### 3. Commit
Usa mensajes de commit claros y descriptivos:
```bash
# Buen ejemplo
git commit -m "feat: añadir quiz interactivo sobre conceptos básicos de IA"

# Mal ejemplo
git commit -m "arreglar cosas"
```

### 4. Pull Request
- **Actualiza** tu rama con los últimos cambios:
  ```bash
  git pull upstream main
  ```
- **Resuelve** cualquier conflicto
- **Crea** el Pull Request con una descripción clara
- **Espera** la revisión y feedback

## 📝 Guía de Estilo

### Código
- Usa **TypeScript** para todo el código nuevo
- Sigue las convenciones de **ESLint**
- Usa nombres descriptivos para variables y funciones
- Comenta el código complejo

### Componentes
- Usa los componentes de **shadcn/ui** cuando sea posible
- Mantén los componentes pequeños y reutilizables
- Usa **Tailwind CSS** para los estilos
- Asegúrate de que los componentes sean **responsive**

### Contenido Educativo
- Usa un lenguaje claro y accesible
- Incluye ejemplos prácticos
- Proporciona retroalimentación inmediata
- Verifica que la información sea precisa

## 🐛 Reporte de Issues

### Bug Report Template
```markdown
## Descripción
Breve descripción del problema

## Pasos para Reproducir
1. Ve a '...'
2. Haz clic en '....'
3. Desliza hasta '....'
4. Ve el error

## Comportamiento Esperado
Describe lo que debería pasar

## Capturas de Pantalla
Añade capturas si ayuda a explicar el problema

## Entorno
- SO: [ej. Windows 10, macOS 12.0]
- Navegador: [ej. Chrome, Firefox]
- Versión: [ej. 1.0.0]
```

### Feature Request Template
```markdown
## Descripción
Breve descripción de la funcionalidad sugerida

## Problema que Resuelve
¿Qué problema resolvería esta funcionalidad?

## Solución Propuesta
Describe cómo podría implementarse

## Alternativas Consideradas
¿Has considerado otras soluciones?

## Recursos Adicionales
Enlaces, documentación, ejemplos, etc.
```

## 🔄 Pull Requests

### Antes de Crear un PR
- [ ] Tu código sigue la guía de estilo
- [ ] Has probado tu funcionalidad
- [ ] No hay errores de linting
- [ ] Has actualizado la documentación
- [ ] Has añadido pruebas si es necesario

### PR Template
```markdown
## Descripción
Breve descripción de los cambios

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Cambio breaking
- [ ] Documentación

## ¿Por qué este cambio?
Explica el propósito de los cambios

## ¿Cómo se prueba?
Instrucciones para probar los cambios

## Checklist
- [ ] Mi código sigue las guías de estilo
- [ ] He realizado una auto-revisión
- [ ] He añadido comentarios en áreas complejas
- [ ] He documentado mis cambios
- [ ] Mis cambios no generan nuevas advertencias
```

## 🏆 Reconocimiento

¡Todos los contribuidores serán reconocidos en:

- El archivo **CONTRIBUTORS.md**
- La sección de agradecimientos del README
- Insignias especiales en la plataforma

## 📞 Contacto

Si tienes dudas sobre cómo contribuir:

- Crea un issue con la etiqueta `question`
- Contacta a los mantenedores del proyecto
- Revisa issues y PRs anteriores para ejemplos

## 🌟 Guía para Principiantes

Si es tu primera vez contribuyendo:

1. Empieza con issues etiquetados como `good first issue`
2. Lee la [documentación de GitHub](https://docs.github.com/es/get-started/quickstart/contributing-to-projects)
3. No dudes en hacer preguntas
4. Aprende de los PRs de otros contribuidores

---

¡Gracias por hacer que la educación en IA sea accesible para todos! 🚀🤖