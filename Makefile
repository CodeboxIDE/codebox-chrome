
all:
	cd ./src/web/ && zip -ru ../../build/app-web.zip ./*
	cd ./src/desktop/ && zip -ru ../../build/app-desktop.zip ./*
	cd ./src/githubButton/ && zip -ru ../../build/extension-githubbutton.zip ./*

clean:
	rm build/app-web.zip build/app-desktop.zip build/extension-githubbutton.zip