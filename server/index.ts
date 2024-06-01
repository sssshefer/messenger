import {Socket} from "socket.io";

const io = require('socket.io')(5000, {
    cors: {
        origin: "http://localhost:3000",
    }
})

io.on('connection', (socket:Socket) => {
    const id = socket.handshake.query.id as string;
    socket.join(id);

    socket.on('send-message', ({ recipients, text }:{recipients:string[], text:string}) => {
        recipients.forEach(recipient => {
            const newRecipients = recipients.filter(r => r !== recipient);
            newRecipients.push(id);
            socket.broadcast.to(recipient).emit('receive-message', {
                recipientsIds: newRecipients, senderId: id, text
            });
        });
    })
})