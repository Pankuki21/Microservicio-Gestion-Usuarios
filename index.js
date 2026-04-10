const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('✅ Microservicio de Gestión de Usuarios: Operativo y Funcionando Hotfix Aplicado.\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});