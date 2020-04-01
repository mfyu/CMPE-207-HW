import socket


TCP_IP = '127.0.0.1'
TCP_PORT = 9000
BUFFER_SIZE = 1024
M1 = "      ___            ____                 ___   __        ___\n"
M2 = "|   | |    |    |    |    |    \\        / |   | |  | |    |   \\\n"
M3 = "|___| |___ |    |    |    |     \\  /\\  /  |   | |_/  |    |    |\n"
M4 = "|   | |___ |___ |___ |____|      \\/  \\/   |___| | \\  |___ |___/\n"

MESSAGE = M1+M2+M3+M4



s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((TCP_IP, TCP_PORT))

while 1:
	s.listen(1)

	conn, addr = s.accept()
	print('Connection address:', addr)
	conn.send(MESSAGE.encode())
