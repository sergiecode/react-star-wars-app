![Star Wars](https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg)

# May the forth be with you
## Proyecto React Star Wars usando SWAPI (Star Wars API)

### Para crear un nuevo proyecto React con Vite 

    npm create vite@latest react-star-wars-app

### Instalar dependencias 

    npm  install 

### Instalar React Router para la navegación 

    npm  install react-router-dom 

### Instalar Axios para las peticiones HTTP 

    npm  install axios 

## Usaremos el siguiente mirror de SWAPI:
[SWAPI Mirror Link](https://swapi.py4e.com/)

## Archivos de estilos:

### index.css

```css
:root {
    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #0f0f0f;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    margin: 0;
    min-height: 100vh;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
```

### App.css

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    padding: 20px 0;
  }
  
  .card {
    background-color: #1e1e1e;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card h3 {
    color: #FFE81F;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 1.5rem;
  }
  
  .card-info {
    margin-bottom: 8px;
    font-size: 0.95rem;
  }
  
  .card-info span {
    font-weight: 600;
    color: #FFE81F;
    margin-right: 6px;
  }
  
  .card-actions {
    margin-top: 20px;
  }
  
  .btn {
    background-color: #FFE81F;
    color: #000;
    font-weight: 600;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.95rem;
    transition: background-color 0.2s ease;
    text-decoration: none;
    display: inline-block;
  }
  
  .btn:hover {
    background-color: #e6d019;
  }
  
  .character-detail {
    background-color: #1e1e1e;
    border-radius: 12px;
    padding: 30px;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .character-detail h1 {
    color: #FFE81F;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .detail-section {
    margin-bottom: 24px;
  }
  
  .detail-section h2 {
    color: #FFE81F;
    font-size: 1.5rem;
    margin-bottom: 14px;
    border-bottom: 1px solid #333;
    padding-bottom: 8px;
  }
  
  .detail-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .detail-item {
    padding: 8px 0;
  }
  
  .detail-item span {
    font-weight: 600;
    color: #FFE81F;
    margin-right: 8px;
  }
  
  .back-btn {
    margin-top: 30px;
  }
  
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    font-size: 1.2rem;
  }
  
  .page-controls {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  
  .error-message {
    color: #ff6b6b;
    text-align: center;
    padding: 20px;
    background-color: rgba(255, 107, 107, 0.1);
    border-radius: 8px;
    margin-top: 20px;
  }
```

### App.css

```css
.navbar {
    background-color: #121212;
    padding: 16px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-logo {
    text-decoration: none;
  }
  
  .navbar-logo h1 {
    margin: 0;
    font-size: 1.75rem;
    color: #FFE81F;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
```
