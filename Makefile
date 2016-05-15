all: clean prepare result.kml doc

prepare:
	mkdir build

clean:
	rm -rf doc
	rm -rf build

result.kml: genKML.py
	python genKML.py

run:
	cd build && google-earth result.kml

doc:
	echo "TODO: setup docs building"

bootstrap:
	sudo apt-get install -y python-dev python-pip python-numpy python-pandas python-scipy python-matplotlib
	sudo pip2 install simplekml
	sudo pip2 install Sphinx 
