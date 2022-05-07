# Codechallenge Visual Thinking API By LaunchX 🚀

Este es un repositorio con la solución al codecallenge realizado para el curso en Backend con NodeJS en LaunchX impartido por [@carlogilmar](https://github.com/carlogilmar).

## __Requerimientos__ 📋

Desarollar un API con express que permita realizar consultas a una base de datos que permita acceder a diversos datos de un archivo JSON, el cual tiene una lista de objetos con varios estudiantes. El proposito general de la API es:

1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
   
## __Dependencias__ 📦
Para este proyecto se inicio con la creación de un proyecto con `npm` con el comando `npm init` y posteriormente se instalaron las dependencias con `npm install`.
- Jest
- ESLint
- Espress
  
```
Da un ejemplo
```

## __Estructura__ 📚
Esta es la esturtura que se utilizo para el diseño de la API.

``` mermaid
graph TD;
 A(Reader)
 B(studentService)
 c(studentController)


```
## __Solución__ 💻
Todos los pasos que se realizaron se encuentran en los commits del repositorio.

## __Ejecutando las pruebas__ 🔍⚙

## __EndPoints__ 🔗
Para acceder y ver los endpoints se se debe de ejecutar el comando `npm run service` para poder realizar la consulta al servidor y ver los resultados desde el navegador o desde Postman.

| Endpoint | Url | 
| --- | --- |
| [GET] /api/students | `http://localhost:3001/api/students` |
| [GET] /api/students/emails | `http://localhost:3001/api/students/emails` |
| [GET] /api/students/:credits | `http://localhost:3001/api/students/500` |


## 