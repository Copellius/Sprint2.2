# Sprint 2.2 Shopping Cart Project

Proyecto de carrito de compras desarrollado con JavaScript como parte del Sprint 2.2 del Bootcamp Frontend IT Academy.

---

## Descripción

Aplicación web que simula un sistema de compra con carrito dinámico. Permite gestionar productos, aplicar descuentos automáticos y validar formularios en la página de checkout.

---

## Funcionalidades

- Agregar productos al carrito  
- Incrementar y reducir cantidades  
- Eliminar productos individuales  
- Vaciar carrito completo  
- Aplicación automática de promociones  
- Cálculo dinámico del total  
- Contador de productos en el navbar  
- Validación de formulario con feedback visual  

---

## Tecnologías

- HTML  
- CSS (Bootstrap)  
- JavaScript  

---

## Instalación

1. Clonar el repositorio:

```
git clone https://github.com/Copellius/Sprint2.2
```

2. Abrir el proyecto en tu editor de código.

3. Ejecutar `index.html` utilizando Live Server o abrirlo directamente en el navegador.

---

## Estructura del proyecto

### shop.js  
Gestiona la lógica principal del carrito:
- Agregar productos  
- Eliminar productos  
- Calcular totales  
- Actualizar la interfaz  

### checkout.js  
Controla la validación del formulario:
- Expresiones regulares  
- Longitudes mínimas  
- Estados visuales con Bootstrap  

---

## 🧠 Funciones principales

- `buy(id)`  
- `cleanCart()`  
- `calculateTotal()`  
- `applyPromotionsCart(product, subtotal)`  
- `printCart()`  
- `removeFromCart(id)`  
- `validate()`  
