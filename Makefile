
all:
	cd ./src/web/ && zip -ru ../../build/app-web.zip ./*
	cd ./src/desktop/ && zip -ru ../../build/app-desktop.zip ./*

clean:
	rm build/app-web.zip build/app-desktop.zip