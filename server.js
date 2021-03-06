const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);

    socket.on('send', function (text) {
        let newText = "<" + socket.id + "> " + text;
        if (text == "struct") {
            io.emit('struct');
        }
        if (text == 'struct card') {
            io.emit('struct create', 130, 180)
        };
        if (text == 'struct token') {
            io.emit('struct create', 100, 100)
        };
        if (text == 'struct cards') {
            io.emit('struct multi', 130, 180, 5)
        };
        if (text == 'struct tokens') {
            io.emit('struct multi', 100, 100, 5)
        };
        io.emit('receive', newText);
    });

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
    });
});

http.listen(3000, function () {
    console.log('Server started!');
});