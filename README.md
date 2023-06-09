<div align="center"> 
  <img widht="150px" height="150px" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
  <h1>React Course from <a target="_blank" href="https://www.coderhouse.com">Coderhouse</a></h1>
  <p>Repository for the second presentation of the final project.</p>
  <a href="https://pre-entrega2-rey-due5.vercel.app/" taget="_blank">Project Demo!</a>
</div>

<h2>E-commerce</h2>
<h3>Description</h2>
<p>Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom</p>
<p>Componentes:</p>
<ul>
    <li>Navbar con cart</li>
    <li>Catálogo</li>
    <li>Detalle de producto</li>
</ul>

<h3>Description</h2>
<p>Se debe entregar:</p>

<ul>
    <li>
        <p>Rutas a configurar</p>
        <ul>
            <li>‘/’ navega a ItemListContainer /></li>
            <li>‘/category/:id’  ItemListContainer /></li>
            <li>‘/item/:id’ navega a ItemDetailContainer /></li>
        </ul>
    </li>
</ul>

<ul>
    <li>
        <p>Links a configurar</p>
        <ul>
            <li>Clickear en el brand debe navegar a ‘/’</li>
            <li>Clickear un Item.js debe navegar a /item/:id</li>
            <li>Clickear en una categoría del navbar debe navegar a /category/:categoryId</li>
        </ul>
    </li>
</ul>

<p>Para finalizar deberá integrar los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría.</p>

<h4>Notas:</h4>
 <ul>
    <li>No usar HashRouter como en el ejemplo del gif (usar BrowserRouter)</li>
    <li>Utilizar el id de la categoría como nombre en la URL param en vez de números (vehículos, por ej)</li>
    <li>Utilizar el id del item como URL param</li>
</ul>

<h2>Tools used in this project</h2>
<a target="_blank" href="https://mui.com/">
    <img alt="Material UI" src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white">
</a> 
<a target="_blank" href="https://mui.com/material-ui/material-icons/">
    <img alt="Material UI" src="https://img.shields.io/badge/Material Icons-4e56a6?style=for-the-badge&logo=mui&logoColor=white">
</a>
<a target="_blank" href="http://">
    <img alt="React Router DOM" src="https://img.shields.io/badge/React Router dom-green?style=for-the-badge&logo=npm&logoColor=white">
</a>

<h2>More Information</h2>
<ul>
  <li>📚 <a target="_blank" href="https://www.coderhouse.com/online/reactjs">Course web page</a></li>
  <li>🖍 <a target="_blank" href="https://drive.google.com/file/d/1G_SRPkYExFpTkmOvbEwj985rIgQ62kx9/view">Study Plan</a></li>
</ul>
