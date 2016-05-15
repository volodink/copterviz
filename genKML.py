# -*- coding: utf-8 -*-

import simplekml

kml = simplekml.Kml()
kml.newpoint(name=u"Это CanSat 2016", coords=[(37.721900, 56.726386)])
kml.save("build/result.kml")
