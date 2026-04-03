const http = require('http');

// Creamos el servidor
const server = http.createServer((req, res) => {
    // Enviamos una respuesta exitosa (Código 200)
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('✅ Microservicio de Gestión de Usuarios: Operativo y Funcionando.\n');
});

// El servidor escucha en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});