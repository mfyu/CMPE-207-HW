import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#AF_INET means IPv4
#Sock stream means connection oriented TCP protocol
host_ip = '94.142.241.111'
local = '127.0.0.1'
port = 23

s.connect((host_ip, port))
for x in range(200):
	print(s.recv(1024).decode("utf-8"))
	#data = s.recv(1024)
	#print('Received', repr(data))
s.close()
