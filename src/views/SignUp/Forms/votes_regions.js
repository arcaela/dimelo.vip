const regions = {
    "Antioquia": {
        "Medellin": {
            "Popular": {
                "Sec Esc La Esperanza No 2": ["35"],
                "Insteduc La Candelaria": ["53"],
                "Iemaria De Los Angeles Cano Marquez": ["20"],
                "Sec Esc Medellin": ["24"],
                "Iefe Y Alegria Granizal": ["4"],
                "Ie La Avanzada": ["2"],
                "Sec Esc Carpinelo Amapolita": ["1"],
                "Ie Antonio Derka": ["3"],
                "Secesc Pablo Vi": ["72"],
                "Sec Esc Divina Providencia": ["36"],
                "Secescagripina Montes Del Valle": ["45"],
                "Iefederico Carrasquilla": ["5"],
                "Ieguadalupe": ["5"]
            },
            "Santa Cruz": {
                "Inst Educ Asia Ignaciana": ["39"],
                "Secesc  Manuel Uribe Angel": ["36"],
                "Secesc Repub De Nicaragua": ["24"],
                "Iefe Y Alegria Jmaria Velaz": ["6"],
                "Ie Barrio Santa Cruz": ["24"],
                "Sec Esc Arzobispo Garcia": ["27"],
                "Ie Republica De Honduras": ["21"]
            },
            "Manrique": {
                "Ie Republica De Barbados": ["41"],
                "Ie San Lorenzo De Aburra": ["25"],
                "Ie Manuela Beltran": ["53"],
                "Secescsan Joseie Man Bel": ["35"],
                "Ieramon Munera Lopera": ["7"],
                "Ie Bello Oriente": ["3"],
                "Ie Jose Roberto Vasquez": ["1"],
                "Ie Jose Antonio Galan": ["33"],
                "Ie Hernan Toro Agudelo": ["34"],
                "Sec Esc Susana Diazie Rodrigo L Bonilla": ["23"],
                "Ie San Juan Bautista De La Salle": ["3"]
            },
            "Aranjuez": {
                "Col Agustiniano De San Nicola": ["43"],
                "Ie Monsenor Fco Cristobal T": ["36"],
                "Ie Gilberto Alzate Avendano": ["37"],
                "Ie Campo Valdes": ["25"],
                "Iesan Juan Bosco": ["5"],
                "Ie Alfonso Mora Naranjo": ["33"],
                "Ie Jose Maria Bravo Marquez": ["20"],
                "Ie Francisco Miranda": ["51"],
                "Ie Javiera Londono": ["32"],
                "Ie El Bosque": ["10"],
                "Ie Francisco Miranda Sd Julio Arboleda": ["3"]
            },
            "Castilla": {
                "Ie Julio Cesar Garcia": ["34"],
                "Sec Esc Eduardo Uribe Botero": ["30"],
                "Ie Pbro Antonio Jose Bernal": ["51"],
                "Iesebastian De Belalcazar": ["6"],
                "Ie Tricentenario": ["23"],
                "Sec Esc Toscana": ["3"],
                "Ie Maria Montessori": ["32"],
                "Ie Maestro Arenas Betancur": ["39"],
                "Ie Dinamarca": ["8"],
                "Inst Edu Republica De Urugua": ["39"],
                "Ie Felix De Bedout Moreno": ["5"]
            },
            "Doce De Octubre": {
                "Ie Ciudadela Las Americas": ["30"],
                "Col Vida Y Paz Progresar Unid": ["24"],
                "Sec Esc Leon De Greiff": ["23"],
                "Ie Doce De Octubre": ["24"],
                "Casd Jose Maria Espinosa Prieto": ["4"],
                "Ie El Triunfo Santa Teresa": ["4"],
                "Ie Santa Juana De Lestonacc": ["19"],
                "Ie Jesus Maria Valle Jaramillo": ["4"],
                "Iemaestro Fernando Botero": ["34"],
                "Iealfredo Cock Arango": ["32"],
                "Secescsan Martin De Porres": ["20"],
                "Ie Kennedy": ["36"],
                "Secconcentracion Educkennedy": ["19"],
                "Iejorge Eliecer Gaitanppal": ["6"],
                "Se Esc Pedregal": ["8"],
                "Iela Esperanza": ["6"]
            },
            "Robledo": {
                "Ie San Vicente De Paul": ["33"],
                "Secesc El Diamante": ["32"],
                "Ieel Diamante sede Bto": ["17"],
                "Iefe Y Alegria Villa De La C": ["40"],
                "Iefe Y Alegria San Jose": ["10"],
                "Tecnologico De Antioquia": ["18"],
                "Ie Jesus Rey": ["5"],
                "Ie Aures": ["4"],
                "Iemon Gerardo Valencia Can": ["12"],
                "Ie Jorge Robledo": ["41"],
                "Iemariscal Robledo": ["23"],
                "Secesc Santa Margarita": ["20"],
                "Colegio Ferrini": ["15"],
                "Iecamilo Mora Carrasquilla": ["6"],
                "Col Mayor De Antioquia": ["3"],
                "Ie Barrio Olaya Herrera": ["2"]
            },
            "Villa Hermosa": {
                "Ie Juan De Dios Carvajal": ["32"],
                "Ie Juan De La Cruz Posada": ["14"],
                "Iejose Celestino Mutis": ["8"],
                "Instmetropolitano itm": ["3"],
                "Secescjulia Agudelo": ["66"],
                "Secescnino Jesus De Praga": ["7"],
                "Iesol Del Oriente": ["6"],
                "Ie Luis Carlos Galan Sarmiento Ppal": ["2"],
                "Ie Villa Turbay": ["12"],
                "Secescuela Las Estancias": ["10"],
                "Secescsor Maria Luisa Courb": ["25"],
                "Ie San Francisco De Asis": ["19"],
                "Ie Felix Henao Botero": ["18"]
            },
            "Buenos Aires": {
                "Ieguadalupano La Salle": ["32"],
                "Ie Merceditas Gomez Martine": ["29"],
                "Ie Manuel Jose Caicedo": ["24"],
                "Ie La Milagrosa": ["59"],
                "Colegio Eucaristico": ["4"],
                "Sena Sd Buenos Aires": ["1"],
                "Ie Loreto Gabriela Gomez Ca": ["19"],
                "Insteducativa Federico Ozana": ["44"],
                "Escuela Normal Superior Ant": ["21"],
                "Sec Esc Jose De San Martin": ["30"],
                "Sec Esc Juan Cancio Restrepo": ["1"]
            },
            "La Candelaria": {
                "Ie Tulio Ospina": ["40"],
                "Secescagustin Nieto Caballe": ["9"],
                "Colegio Salesiano El Sufragio": ["51"],
                "Ie Cefa": ["43"],
                "Ie Hector Abad Gomez": ["26"],
                "Ie Javier A Londono": ["3"],
                "Itm prado Centro": ["3"],
                "Centro Comercial San Diego": ["56"],
                "Alcaldia Municipal sotano": ["41"],
                "Sena": ["19"],
                "Universidad Claretiana": ["3"]
            },
            "Laureles": {
                "Instituto Jorge Robledo": ["27"],
                "Insteduc Mater Dei": ["37"],
                "Ie Marco Fidel Suarez": ["35"],
                "Colegio Calasanz Femenino": ["16"],
                "Col San Ignacio Sd Mayores": ["3"],
                "Sec Esc Carlos Obando Velasco": ["2"],
                "Secesc Agrupacion Colombia": ["39"],
                "Ie Lucrecio Jaramillo Velez": ["56"],
                "Colegio Betlehemitas": ["10"],
                "Colsan Ignacio secinfantil": ["6"],
                "Universidad Adventista": ["4"],
                "Universidad Pontificia Bolivariana": ["4"]
            },
            "La America": {
                "Sec Esc Santa Lucia": ["37"],
                "Ie Concejo De Medellin": ["66"],
                "Inst Educ La Piedad": ["30"],
                "Iesanta Rosa De Lima": ["7"],
                "Ie Lola Gonzalez": ["3"],
                "Ie Rafael Uribe Uribe": ["32"],
                "Secescrafael Uribe Uribe": ["14"],
                "Sec Esc Pedro De Castro": ["44"],
                "Iefrancisco Antonio Zea": ["10"],
                "Ie America": ["6"],
                "Iesamuel Barrientos": ["3"],
                "Liceo Salazar Y Herrera": ["4"]
            },
            "San Javier": {
                "Ie Blanquizal en Admon Cr": ["14"],
                "Sec Esc Republica De Panama": ["18"],
                "Ie Juan Xxiii": ["7"],
                "Sec Esc Monsenor Perdomo": ["36"],
                "Secescpio Xii": ["28"],
                "Iestella Velez Londono": ["4"],
                "Iela Independencia": ["44"],
                "Secescel Socorro": ["27"],
                "Secescmixta Betania": ["26"],
                "Ieel Corazon": ["6"],
                "Ieeduardo Santos": ["6"],
                "Iecarlos Vieco": ["11"],
                "Sede Amor Al Nino": ["3"]
            },
            "El Poblado": {
                "Colsanta Maria Del Rosario": ["26"],
                "Colmarymount": ["15"],
                "Colegio Palermo De San Jose": ["43"],
                "Colegio San Lucas": ["2"],
                "Esc Guillermo Echavarria Misas": ["3"],
                "Politecnico Jaime Isaza Cadavi": ["26"],
                "Ieinem Jose Felix De Restrep": ["35"],
                "Universidad Eafit": ["53"],
                "Col De La Cia De Maria La Ense": ["6"],
                "San Jose De Las Vegas": ["3"]
            },
            "Guayabal": {
                "Secescsantisima Trinidad": ["21"],
                "Iebenjamin Herrera": ["21"],
                "Iecristo Rey": ["38"],
                "Seccion Esc Republica De Costa Rica": ["25"],
                "Secescla Colina": ["14"],
                "Ie La Salle Campo Amor": ["11"],
                "Sec Esc Cristo Rey Apolo": ["2"]
            },
            "Belen": {
                "Ie Fatima Nutibara": ["27"],
                "Escsofia Ospina De Navarro": ["22"],
                "Iejuan Maria Cespedes": ["60"],
                "Ie Guillermo Valencia": ["26"],
                "Uniddeportiva Andres Escobar": ["6"],
                "Liceo San Rafael": ["15"],
                "Colegio San Juan Bosco": ["2"],
                "Secescjackeline Kennedy": ["20"],
                "Iejose Maria Bernal": ["28"],
                "Instsan Carlos De La Salle": ["41"],
                "Iealcaldia De Medellin": ["39"],
                "Colegio Padre Manyanet": ["14"],
                "Iecampillas Del Rosario": ["6"],
                "Ie Antonio Ricaurte": ["3"],
                "Ieramon Giraldo Ceballos": ["37"],
                "Universidad De Medellin": ["52"],
                "Ie Horacio Munoz Suescun": ["27"],
                "Ierepublica De Venezuela": ["24"],
                "I E San Roberto Belarmino": ["5"],
                "Instituto Pedro Justo Berrio": ["1"]
            },
            "Altavista": {
                "Ie Debora Arango Perez": ["22"]
            },
            "San Antonio De Prado": {
                "Ie Fe Y Alegria El Limonar": ["23"],
                "Ie San Antonio De Prado": ["55"],
                "Iemanuel De Jbetancur": ["48"],
                "Ie Monsenor Victor Wiedemann": ["3"]
            },
            "Palmitas": {
                "Ie Hector Rogelio Montoya": ["7"]
            },
            "Santa Elena": {
                "Casa De Gobierno Santa Elena": ["17"]
            },
            "San Cristobal": {
                "Ie San Cristobal": ["44"],
                "Parque Biblioteca Fernando Botero": ["43"],
                "Ie Lusitania": ["13"],
                "Ie Presbitero Juan J Escobar": ["3"],
                "Ie Loma Hermosa": ["4"]
            }
        },
        "Apartado": {
            "Bernardo Jaramillo": {
                "Ie Alfonso Lopez": ["23"],
                "Ie Policarpa Salavarrieta": ["23"],
                "Ie La Paz": ["13"],
                "Ie La Paz 20 De Enero": ["5"]
            },
            "Ocho De Febrero": {
                "I E San Francisco De Asis": ["25"],
                "I E San Pedro Claver": ["21"],
                "Hogar Infantil Los Girasoles": ["12"],
                "I E Santa Maria La Antigua": ["3"]
            },
            "Pueblo Nuevo": {
                "Ie Heraclio Mena Padilla": ["23"],
                "Colegio Adventista": ["15"],
                "Ie Cadena Las Playas": ["2"]
            },
            "Jose Joaquin Velez": {
                "Ie Campo Alegre": ["5"],
                "Ie Madre Laura": ["14"],
                "Col Cooperativo": ["18"],
                "Ie Jose Joaquin Velez": ["24"],
                "Ie Jose Celestino Mutis": ["11"]
            },
            "Churido Pueblo": {
                "Churido": ["4"]
            },
            "Puerto Giron": {
                "Puerto Giron": ["2"]
            },
            "San Jose De Apartado": {
                "San Jose De Apartado": ["5"]
            },
            "El Reposo": {
                "El Reposo": ["13"]
            }
        },
        "Barbosa": {
            "El Hatillo": {
                "El Hatillo": ["14"]
            }
        },
        "Bello": {
            "Paris": {
                "Ie Barrio Paris Megacolegio": ["16"],
                "Ie Alberto Diaz Munoz": ["16"],
                "Ie Alb Diaz Munoz Seccprad": ["7"],
                "Centro Educat Raquel Jaramillo": ["22"],
                "Ie Barrio Paris": ["11"]
            },
            "Madera": {
                "Ie Atanasio Girardot": ["45"],
                "Col Parroq San Fco De Asis": ["25"],
                "Ie Suarez De La Presentacion": ["32"],
                "Col San Buenaventura": ["20"]
            },
            "Santa Ana": {
                "Ie Tomas Cadavid Restrepo": ["25"],
                "Colegio La Salle": ["38"]
            },
            "La Cumbre": {
                "Ie Fernando Velez": ["39"],
                "Ie La Primavera": ["20"],
                "Ie Nazareth": ["21"],
                "Ie Carlos Peres Sede Rosalia": ["3"]
            },
            "Suarez": {
                "Inst Universitaria Marco Fidel Suarez": ["27"],
                "Col Jesus De La Buena Esperanz": ["45"],
                "Ie Sagrado Corazon": ["19"],
                "Ie Jorge Eliecer Gaitan": ["50"],
                "Ie Santa Catalina": ["23"],
                "Ie La Milagrosa": ["22"]
            },
            "Bellavista": {
                "Ie Hernan Villa Baena": ["35"],
                "Ie Villa Del Sol Sec 1": ["22"],
                "Ie Villa Del Sol Sec 2": ["3"]
            },
            "Altos De Niquia": {
                "Ie Gilberto Echeverri Mejia": ["19"],
                "Ie Cial Antonio Roldan": ["21"],
                "Ie Josefa Campos": ["16"]
            },
            "Niquia": {
                "Ie Concejo De Bello": ["25"],
                "Ie Fe Y Alegria Nueva Generac": ["23"],
                "Col Nuestra Senora De Chiquinq": ["20"],
                "Betsabe Espinal": ["15"]
            },
            "Guasimalito": {
                "Ie Navarra": ["6"],
                "Ie Navarra Sd El Trebol": ["6"]
            },
            "Fontidueno": {
                "Ie Las Vegas": ["13"],
                "Ie Fontidueno Jaime Arango R": ["20"]
            },
            "Zamora": {
                "Ie Federico Sierra Arango": ["33"],
                "Ie La Gabriela": ["19"],
                "Ie Zamora Centenario": ["7"]
            },
            "San Felix": {
                "San Felix": ["7"]
            }
        },
        "Carmen De Viboral": {
            "La Esperanza": {
                "La Esperanza": ["1"]
            },
            "Alto Grande": {
                "Alto Grande": ["1"]
            },
            "La Chapa": {
                "La Chapa": ["3"]
            },
            "Santa Rita": {
                "Santa Rita": ["1"]
            },
            "Santa Ines": {
                "Santa Ines": ["1"]
            },
            "La Madera": {
                "La Madera": ["2"]
            },
            "Aguas Claras": {
                "Aguas Claras": ["4"]
            }
        },
        "Ebejico": {
            "Brasil": {
                "Brasil": ["4"]
            },
            "El Zarzal": {
                "El Zarzal": ["1"]
            },
            "Guayabal": {
                "Guayabal": ["1"]
            },
            "La Clara": {
                "La Clara": ["2"]
            },
            "Sevilla": {
                "Sevilla": ["7"]
            }
        },
        "Gomez Plata": {
            "El Salto": {
                "El Salto": ["2"]
            },
            "San Matias": {
                "San Matias": ["2"]
            },
            "La Estrella": {
                "La Estrella": ["1"]
            }
        },
        "Granada": {
            "Santa Ana": {
                "Santa Ana": ["2"]
            }
        },
        "Itagui": {
            "El Manzanillo": {
                "El Manzanillo": ["23"],
                "Ie Maria Josefa Escobar": ["5"]
            }
        },
        "Ituango": {
            "Santa Rita De Sinitave": {
                "Santa Rita De Ituango": ["7"]
            }
        },
        "La Ceja": {
            "San Jose": {
                "San Jose": ["5"]
            }
        },
        "La Union": {
            "Mesopotamia": {
                "Mesopotamia": ["2"]
            }
        },
        "Remedios": {
            "La Cruzadas": {
                "La Cruzada": ["10"]
            },
            "Santa Isabel": {
                "Santa Isabel": ["4"]
            }
        },
        "Rionegro": {
            "Libono Mejia": {
                "Ie Josefina Munoz Gonzalez": ["26"],
                "Ie Julio Sanin": ["25"],
                "Coliseo Ruben Dario Quintero": ["15"],
                "Esc Juan Manuel Gonzalez": ["13"],
                "Esc Unida": ["17"],
                "Col Quebrada Arriba": ["12"],
                "Coliseo Alto Del Medio": ["13"]
            },
            "San Antonio": {
                "Conc Edu San Antonio": ["24"],
                "It Santiago De Arma": ["18"],
                "Ie El Triangulo": ["1"]
            },
            "Mons Alfonso Uribe Jaramillo": {
                "Esc Cuatro Esquinas": ["17"],
                "Esc Carmela Bianchetti": ["9"]
            },
            "El Porvenir": {
                "Esc Eduardo Uribe Botero": ["18"],
                "Lic Consejo Municipal": ["21"],
                "Esc Pascuala Munoz": ["11"]
            },
            "Del Sur": {
                "Del Sur": ["18"],
                "Col Cabeceras correg Del Sur": ["1"]
            },
            "Jose Maria Cordova Munoz": {
                "Jose Maria Cordova Munoz": ["7"],
                "Auditorio Aeropuerto Corr Jmc": ["9"]
            },
            "Centro Casimiro Garcia": {
                "Centro": ["3"],
                "Esc San Jose De Las Cuchillas": ["2"]
            },
            "Norte Nestor E Sanint Alv": {
                "Norte": ["2"],
                "Ie Ana Gomez De Sierra": ["10"]
            }
        },
        "Sonson": {
            "Alto De Sabanas": {
                "Alto De Sabanas": ["3"],
                "El Salto": ["1"],
                "La Loma": ["1"],
                "Llanada Santa Clara": ["2"],
                "Roblal Arriba": ["1"]
            },
            "Dantas": {
                "Dantas": ["6"],
                "La Mesa": ["1"]
            },
            "San Miguel": {
                "San Miguel": ["4"]
            },
            "Los Medios": {
                "Los Medios": ["2"],
                "Las Cruces": ["1"],
                "Arenillal": ["1"]
            },
            "Los Potreros": {
                "Los Planes": ["1"],
                "Los Potreros": ["1"]
            },
            "Rio Verde De Los Henaos": {
                "El Salado": ["1"],
                "La Torre": ["1"],
                "Rioverde De Los Henaos": ["1"]
            },
            "Jerusalen La Florida": {
                "Jerusalen La Florida": ["2"]
            },
            "Rioverde De Los Montes": {
                "Brasilal": ["1"],
                "Rioverde De Los Montes": ["2"]
            }
        },
        "Vegachi": {
            "El Tigre": {
                "El Tigre": ["3"]
            }
        },
        "Abejorral": {},
        "Abriaqui": {},
        "Alejandria": {},
        "Amaga": {},
        "Amalfi": {},
        "Andes": {},
        "Angelopolis": {},
        "Angostura": {},
        "Anori": {},
        "Anza": {},
        "Arboletes": {},
        "Argelia": {},
        "Armenia": {},
        "Belmira": {},
        "Betania": {},
        "Betulia": {},
        "Briceno": {},
        "Buritica": {},
        "Caceres": {},
        "Caicedo": {},
        "Caldas": {},
        "Campamento": {},
        "Canasgordas": {},
        "Caracoli": {},
        "Caramanta": {},
        "Carepa": {},
        "Carolina Del Principe": {},
        "Caucasia": {},
        "Chigorodo": {},
        "Cisneros": {},
        "Ciudad Bolivar": {},
        "Cocorna": {},
        "Concepcion": {},
        "Concordia": {},
        "Copacabana": {},
        "Dabeiba": {},
        "Donmatias": {},
        "El Bagre": {},
        "El Carmen De Viboral": {},
        "El Penol": {},
        "El Retiro": {},
        "El Santuario": {},
        "Entrerrios": {},
        "Envigado": {},
        "Fredonia": {},
        "Frontino": {},
        "Giraldo": {},
        "Girardota": {},
        "Guadalupe": {},
        "Guarne": {},
        "Guatape": {},
        "Heliconia": {},
        "Hispania": {},
        "Jardin": {},
        "Jerico": {},
        "La Estrella": {},
        "La Pintada": {},
        "Liborina": {},
        "Maceo": {},
        "Marinilla": {},
        "Montebello": {},
        "Murindo": {},
        "Mutata": {},
        "Narino": {},
        "Nechi": {},
        "Necocli": {},
        "Olaya": {},
        "Peque": {},
        "Pueblorrico": {},
        "Puerto Berrio": {},
        "Puerto Nare": {},
        "Puerto Triunfo": {},
        "Sabanalarga": {},
        "Sabaneta": {},
        "Salgar": {},
        "San Andres De Cuerquia": {},
        "San Carlos": {},
        "San Francisco": {},
        "San Jeronimo": {},
        "San Jose De La Montana": {},
        "San Juan De Uraba": {},
        "San Luis": {},
        "San Pedro De Uraba": {},
        "San Pedro De Los Milagros": {},
        "San Rafael": {},
        "San Roque": {},
        "San Vicente": {},
        "Santa Barbara": {},
        "Santa Fe De Antioquia": {},
        "Santa Rosa De Osos": {},
        "Santo Domingo": {},
        "Segovia": {},
        "Sopetran": {},
        "Tamesis": {},
        "Taraza": {},
        "Tarso": {},
        "Titiribi": {},
        "Toledo": {},
        "Turbo": {},
        "Uramita": {},
        "Urrao": {},
        "Valdivia": {},
        "Valparaiso": {},
        "Venecia": {},
        "Vigia Del Fuerte": {},
        "Yali": {},
        "Yarumal": {},
        "Yolombo": {},
        "Yondo": {},
        "Zaragoza": {}
    },
    "Atlantico": {
        "Barranquilla": {
            "Sur Occidente": {
                "Ins Dis Desar Intnva Granada": ["34"],
                "Ideth Sede Principal Sede Ii": ["15"],
                "Coldtal Olayaant Ceb108": ["15"],
                "Col Hilda Munoz": ["27"],
                "Colegio Jorge Nicolas Abello": ["58"],
                "Ideth Sede I Primaria": ["25"],
                "Inteducativo Dtallos Pinos": ["19"],
                "Colegio Nazareth Lucero": ["10"],
                "Jorge Nicolas Abello Sd 2": ["2"],
                "Ie Distrital La Merced": ["22"],
                "Col Dtaljose Eusebio Caro": ["41"],
                "Colcamilo Torres": ["5"],
                "Col Dtal Juan Jose Rondon": ["34"],
                "Ied Javier Sanchez": ["24"],
                "Col Distrital Maria Inmaculad": ["36"],
                "Esnormal Superior La Hacienda": ["39"],
                "Colegio Americano": ["8"],
                "Cdtalel Silencioant Ceb 050": ["22"],
                "Iedinocencio Chinca": ["16"],
                "Colsofia Camargo De Llerasb": ["35"],
                "Colsofia Camargo De Llerasp": ["20"],
                "Cdistsarit Arteta De Vasquez": ["38"],
                "Instlas Mercedes Colsan Pabl": ["29"],
                "Colegio Cristiano Peniel": ["24"],
                "Iedel Pueblo": ["31"],
                "Col Alberto Assa": ["14"],
                "Centro De Educacion Basica Ceb161": ["3"],
                "Iedsonia Ahumada": ["25"],
                "Iemundo Bolivariano": ["33"],
                "Iclas Malvinas": ["32"],
                "Ied Zapata Olivella": ["29"],
                "Juan Acosta Solera": ["36"],
                "Coltecsan Carlos Borromeo": ["15"],
                "Colmanuel Elkin Patarroyo Sd 2": ["20"],
                "Col Manuel Elkin Patarroyo Sd 1": ["2"],
                "Coljose Raimundo Sojo mega": ["4"],
                "Edevaristo Sourdis Sede 1": ["21"],
                "Edevaristo Sourdis Sede 2": ["22"],
                "Iedjose Maria Velaz Sede 2": ["35"],
                "Coldtalla Salle": ["29"],
                "Juan Mina": ["16"]
            },
            "Metropolitana": {
                "Instecdistcruzada Social": ["29"],
                "Inst Educ Dist Simon Bolivar": ["22"],
                "Cebmedia No103": ["24"],
                "Col Dist De Bquilla Gabriel Garcia M": ["35"],
                "Iedla Victoria": ["9"],
                "Nuevo Col Tec Del Santuario": ["43"],
                "Ide Costa Caribe": ["24"],
                "Jose Consuegra Higgins": ["38"],
                "Idestamariamegacolegio": ["30"],
                "Coldistde Bquilla San Luis": ["39"],
                "Iedlas Americas": ["19"],
                "Colegio Golda Meir": ["15"],
                "Megacolegio Las Cayenas": ["47"],
                "Colcomunitadtalpablo Neruda": ["44"],
                "Idecolciudestudant 186": ["10"],
                "Iedreuven Feuerstein": ["5"],
                "Colmiguel Angel Builes Blq1": ["34"],
                "Colmiguel Angel Builes Blq2": ["18"],
                "Iedciudadela 20 De Julio": ["50"],
                "Megacolegio Ciudadela 20 Julio": ["61"]
            },
            "Sur Oriente": {
                "Ie Distrital Paulo Freire": ["28"],
                "Colla Presentacion": ["31"],
                "Centro Social Don Bosco": ["51"],
                "Coltecdistrde Rebolo": ["6"],
                "Centro Social Don Bosco Sd 2": ["2"],
                "Sena San Jose Multiple Bilingue": ["21"],
                "Col San Jose Sd 1": ["25"],
                "Coldtalsan Gabriel Sede No1": ["19"],
                "Iedla Union Sede 2": ["3"],
                "Ied Des Humano Maria Cano": ["32"],
                "Coloctavio Paz": ["29"],
                "Iedlos Laureles": ["6"],
                "Iedmarco Fidel Suarez": ["32"],
                "Iedntrasra De Las Nieves": ["17"],
                "Colegio Santa Teresita": ["26"],
                "Iedcalixto Alvarez": ["28"],
                "Ied Jose Marti": ["33"],
                "Intdtalcastillo La Alboraya": ["37"],
                "Coldtalbuenos Airescodiba": ["4"],
                "Coldtalmaria Auxiliadora": ["27"],
                "Colegio De Comfamiliar": ["24"],
                "Instelena De Chauvin": ["26"],
                "Instituto Presbiteriano Nazareth": ["24"],
                "Collas Nieves Sede 2": ["24"],
                "Ied San Miguel Arcangel": ["27"],
                "Iedbarrio Simon Bolivarbto": ["27"],
                "Iedluz Del Caribe": ["16"],
                "Coldistrital Jorge Isaac": ["21"],
                "Idistsimon Bolivar Primaria": ["20"]
            },
            "Norte Centro Hi": {
                "Colmayorbquilla Y Del Caribe": ["30"],
                "Iedvillanueva": ["10"],
                "Enorsuperior Del Dto Bquilla": ["15"],
                "Instla Salle": ["29"],
                "Inst Tecde Comercio De Barranquilla": ["8"],
                "It De Comercio De Bquilla Sd 2": ["1"],
                "Ied Nuestra Senora Del Rosa": ["26"],
                "Iu Itsa Sede Bquilla": ["25"],
                "Inst Tec Nacional De Comerci": ["25"],
                "Antonio Jose De Sucre Sede 2": ["22"],
                "Indeportes": ["2"],
                "Iedpestalozzi": ["19"],
                "Nuevo Colegio Del Prado": ["36"],
                "Ied La Concepcion": ["2"],
                "Colntrasenora De Nazareth": ["18"],
                "Colntrasenora De Lourdes": ["24"],
                "Colbarranquilla Codeba": ["36"],
                "Coldistrital Boston": ["8"],
                "Colsagrada Familia": ["23"],
                "Colmilitar Acolsure": ["35"],
                "Semconciliar San Luis Beltran": ["26"],
                "Colinstariano": ["4"],
                "Coljorge Isaac": ["12"],
                "Colhebreo Union": ["47"],
                "Corporacion El Litoral Sd Ii": ["6"]
            },
            "Riomar": {
                "Colliceo Cervantes": ["43"],
                "Colel Buen Concejo": ["23"],
                "Collindon B Johnson School": ["31"],
                "Universidad Autonoma Del Caribe": ["3"],
                "Instituto Las Americas": ["18"],
                "Iedsan Salvador inedissa": ["14"],
                "Cedlibertador Simon Bolivar": ["24"],
                "Ie Distrital Ied San Salvador Sd C": ["2"],
                "Colla Medalla Milagrosa": ["16"],
                "Colbifi La Salle": ["45"],
                "Colla Ensenanza": ["28"],
                "La Playa": ["38"]
            }
        }
    },
    "Bolivar": {
        "Achi": {},
        "Altos Del Rosario": {},
        "Arenal": {},
        "Arroyohondo": {},
        "Barranco De Loba": {},
        "Brazuelo De Papayal": {},
        "Calamar": {},
        "Cantagallo": {},
        "Cicuco": {},
        "Clemencia": {},
        "Cordoba": {},
        "El Carmen De Bolivar": {},
        "El Guamo": {},
        "El Penon": {},
        "Hatillo De Loba": {},
        "Mahates": {},
        "Margarita": {},
        "Maria La Baja": {},
        "Mompos": {},
        "Montecristo": {},
        "Morales": {},
        "Norosi": {},
        "Pinillos": {},
        "Regidor": {},
        "Rio Viejo": {},
        "San Cristobal": {},
        "San Estanislao": {},
        "San Fernando": {},
        "San Jacinto Del Cauca": {},
        "San Jacinto": {},
        "San Juan Nepomuceno": {},
        "San Martin De Loba": {},
        "San Pablo": {},
        "Santa Catalina": {},
        "Santa Rosa": {},
        "Santa Rosa Del Sur": {},
        "Simiti": {},
        "Soplaviento": {},
        "Talaigua Nuevo": {},
        "Tiquisio": {},
        "Turbana": {},
        "Villanueva": {},
        "Zambrano": {},
        "Cartagena De Indias": {
            "Historica Y Del Caribe": {
                "Centro Comercial Bocagrande": ["43"],
                "Univ Tecnolg De Bolivar  Ma": ["43"],
                "Ludoteca Parque Centenario": ["3"],
                "Col Eucaristico De Santa Teresa": ["7"],
                "Colegio De La Esperanza": ["29"],
                "Colegio Naval De Crespo": ["40"],
                "Colegio El Carmelo": ["16"],
                "Colegio Bervelly Hills": ["5"],
                "Club Universitario De Profesionales": ["3"],
                "Colegio Liceo Bolivar": ["31"],
                "Ie Sta Maria Sede Sagrado Corazon": ["31"],
                "Iecorazon De Maria": ["17"],
                "Ie Corazon De Maria S S J Clav": ["14"],
                "Ie Santa Maria": ["6"],
                "Eucarist Ntra Sra Del Carmen De Torices": ["41"],
                "Colegio Jose De La Vega": ["44"],
                "Ie Her Antonio Ramos De La Salle": ["6"],
                "Inst Ed Ana Maria Velez De Trujillo": ["8"],
                "Cecon Piedra De Bol Univ Cgena": ["39"],
                "Colegio Comfenalco": ["34"],
                "Inst Ed Madre Laura": ["9"],
                "Sena 4 Vientos": ["6"],
                "Ie Nuevo Bosque": ["55"],
                "Col Alberto Elias Fernandez": ["40"],
                "Ie Nuevo Bosque Sede Jose Maria Cordoba": ["11"],
                "Inst Ed Fernando De La Vega": ["6"],
                "E Normal Superior De Cartagena D Indias": ["8"],
                "Ie San Juan De Damasco": ["42"],
                "Ie Olga Gonzalez Arraut": ["35"],
                "Ie Manuela Beltran  Sed Hijos": ["12"],
                "Seminario Cartagena": ["5"],
                "Universidad Antonio Narino": ["6"],
                "Universidad De Cartagena Cs": ["40"],
                "Col Salesianos San Pedro Clave": ["18"],
                "Ie Antonia Santos": ["41"],
                "Univ De Cartagena Claustro La Merced": ["2"],
                "Fundacion Universitaria Los Libertadores": ["10"],
                "Colmayor Inst Tecnologica": ["35"],
                "Escuela Bellas Artes": ["18"],
                "Escuelas Profesionales Salesianas": ["15"],
                "Santa Cruz Del Islote": ["2"],
                "Baru": ["6"],
                "Bocachica": ["16"],
                "Cano De Loro": ["6"],
                "Isla Fuerte": ["3"],
                "Islas Del Rosario": ["2"],
                "Santa Ana": ["12"],
                "Tierrabomba": ["8"]
            },
            "La Virgen Y Turistica": {
                "Ie Fe Y Alegria Las Gaviotas": ["55"],
                "Ie Las Gaviotas Sede Moises Go": ["13"],
                "Ie Las Gaviotas Sede El Nino Jesus": ["11"],
                "Centro De Ensenanza Hijos De Bolivar": ["8"],
                "Ie Foco Rojo": ["43"],
                "Colegio Almirante Colon S Olaya": ["26"],
                "Ie Playas De Acapulco": ["17"],
                "Ie Nuestra Senora Perpetuo Socorro": ["3"],
                "Ie Francisco De Paula Santande": ["35"],
                "Ie Maria Reina": ["26"],
                "Escuela Ciudad De Tunja": ["37"],
                "Ie Corazon De Maria  Lazaro Martinez": ["6"],
                "Ie Antonio Narino": ["9"],
                "Ie Pedro Heredia": ["8"],
                "Ie Camilo Torres": ["53"],
                "Centro Colombiaton Gustavo Pulecio": ["37"],
                "Ie La Libertad": ["10"],
                "Ie Nuestro Esfuerzo": ["9"],
                "Ie Clemente Manuel Zabala": ["3"],
                "Ie Jorge Garcia Usta": ["7"],
                "Escuela Gabriela San Martin": ["52"],
                "Col Fe Y Alegria Las Americas": ["39"],
                "Centro Cultural Las Palmeras": ["15"],
                "Ie De Fredonia": ["7"],
                "Ie Fulgencio Lequerica Velez": ["26"],
                "Nuestra Senora Del Carmen": ["33"],
                "Ie Fulgencio Lequerica Velez  Ecuador": ["9"],
                "Fund Univ Colombo Internacional": ["6"],
                "Arroyo Grande": ["5"],
                "Arroyo De Piedra": ["6"],
                "Bayunca": ["29"],
                "La Boquilla": ["30"],
                "Pontezuela": ["5"],
                "Punta Canoa": ["3"]
            },
            "Industrial De La Bahia": {
                "Colegio Inem": ["43"],
                "Cent Recreacional Napoleon Perea": ["32"],
                "Ie Jose M Rodriguez S Isabel La Catolica": ["13"],
                "Ie Jose Manuel Rjardin Inf  Caracoles": ["7"],
                "Ie 20 De Julio": ["32"],
                "Ie Bertha Gedeon De Baladi": ["32"],
                "Colegio Almirante Colon  Vista Hermosa": ["6"],
                "Ie Luis Carlos Lopez": ["43"],
                "Ie Ternera": ["33"],
                "Ie Soledad Acosta De Samper": ["4"],
                "Universidad San Buenaventura": ["15"],
                "Col Fe Y Alegria El Progreso": ["33"],
                "Ie San Francisco Asis  Hijo De Los Agri": ["25"],
                "Corporacion Minuto De Dios": ["4"],
                "Ie Policarpa Salavarrieta": ["3"],
                "Ie Mercedes Abrego": ["62"],
                "Col Suenos Y Oportunidades Jes": ["34"],
                "Ie Mercedes Abrego Sede Medellin": ["12"],
                "Ie Ciudadela 2000": ["6"],
                "Ie Salvador Mandela": ["8"],
                "Ie Rosedal": ["8"],
                "Ie Jhon F Kennedy": ["47"],
                "Inst Femenino Promocion Social": ["47"],
                "Ie Nuestra Senora De La Consolata": ["6"],
                "Ie Juan Jose Nieto": ["10"],
                "Colegio Comfamiliar": ["37"],
                "Esc Ana Maria Perez Otero": ["44"],
                "Ie Prom Social De Cgena Sd La Consolata": ["5"],
                "Ie Ambientalista Cartagena De Indias": ["10"],
                "Ie Sede Emiliano Alcala Romero": ["3"],
                "Pasacaballos": ["29"],
                "Pasacaballos  Membrillal": ["3"]
            }
        },
        "Arjona": {
            "05corr Puerto Badel Cano Salado": {
                "Puerto Badel cano Salado": ["4"]
            },
            "De Gambote": {
                "Gambote": ["4"]
            },
            "De Rocha": {
                "Rocha": ["7"]
            },
            "De Sincerin": {
                "Sincerin": ["9"]
            }
        },
        "Magangue": {
            "Barbosa": {
                "Barbosa": ["4"]
            },
            "Barranca De Yuca": {
                "Barranca De Yuca": ["6"]
            },
            "Betania": {
                "Betania": ["2"]
            },
            "Bocas De San Ant": {
                "Bocas De San Antonio": ["2"]
            },
            "10 Cascajal": {
                "Cascajal": ["11"]
            },
            "11  Ceibal": {
                "Ceibal": ["3"]
            },
            "12  Coyongal": {
                "Coyongal": ["3"]
            },
            "13  El Cuatro": {
                "El Cuatro": ["3"]
            },
            "14  Guazo": {
                "Guazo": ["2"]
            },
            "15 Henequen": {
                "Henequen": ["6"]
            },
            "16 Emaus": {
                "Emaus": ["1"]
            },
            "17 Isla Grande": {
                "Isla Grande": ["4"]
            },
            "18 Juan Arias": {
                "Juan Arias": ["5"]
            },
            "19 La Pascuala": {
                "La Pascuala": ["5"]
            },
            "20 Las Brisas": {
                "Las Brisas": ["2"]
            },
            "21 Madrid": {
                "Madrid": ["3"]
            },
            "22 Panseguita": {
                "Panseguita": ["3"]
            },
            "23 Palmarito": {
                "Palmarito": ["2"]
            },
            "24 Pinalito": {
                "Pinalito": ["4"]
            },
            "25 Playa De Las Fl": {
                "Playa De Las Flores": ["1"]
            },
            "26 Puerto Kennedy": {
                "Puerto Kennedy": ["2"]
            },
            "27 Punta De Cartag": {
                "Punta De Cartagena": ["2"]
            },
            "28 El Retiro": {
                "El Retiro": ["5"]
            },
            "Puerto Narino": {
                "Puerto Narino": ["1"]
            },
            "Roma": {
                "Roma": ["1"]
            },
            "San Antonito": {
                "San Antonito": ["1"]
            },
            "32corre San Jose De Las Martas": {
                "San Jose De Las Martas": ["2"]
            },
            "33corre San Rafael De Cortina": {
                "San Rafael De Cortina": ["3"]
            },
            "34corre San Sebastian De Buenav": {
                "San Sebastian De Buenavista": ["2"]
            },
            "Santa Coita": {
                "Santa Coita": ["1"]
            },
            "Santa Fe": {
                "Santa Fe": ["5"]
            },
            "Santa Lucia": {
                "Santa Lucia": ["3"]
            },
            "Santa Monica": {
                "Santa Monica": ["1"]
            },
            "Santa Pabla": {
                "Santa Pabla": ["2"]
            },
            "Sitionuevo": {
                "Sitionuevo": ["3"]
            },
            "Tacaloa": {
                "Tacaloa": ["3"]
            },
            "Tacasaluma": {
                "Tacasaluma": ["3"]
            },
            "Sabaneta": {
                "Sabaneta": ["1"]
            },
            "Tolu": {
                "Tolu": ["2"]
            },
            "La  Ventura": {
                "La Ventura": ["4"]
            }
        },
        "Turbaco": {
            "07 Canaveral": {
                "Canaveral": ["7"]
            },
            "08 Correg San Jose De Chiquito": {
                "Chiquito": ["1"]
            }
        }
    },
    "Boyaca": {
        "Almeida": {},
        "Aquitania": {},
        "Arcabuco": {},
        "Belen": {},
        "Berbeo": {},
        "Beteitiva": {},
        "Boavita": {},
        "Boyaca": {},
        "Briceno": {},
        "Buenavista": {},
        "Busbanza": {},
        "Caldas": {},
        "Cerinza": {},
        "Chinavita": {},
        "Chiquinquira": {},
        "Chiquiza": {},
        "Chiscas": {},
        "Chita": {},
        "Chitaraque": {},
        "Chivata": {},
        "Chivor": {},
        "Cienega": {},
        "Combita": {},
        "Coper": {},
        "Corrales": {},
        "Covarachia": {},
        "Cubara": {},
        "Cucaita": {},
        "Cuitiva": {},
        "Duitama": {},
        "El Cocuy": {},
        "El Espino": {},
        "Firavitoba": {},
        "Floresta": {},
        "Gachantiva": {},
        "Gameza": {},
        "Garagoa": {},
        "Guacamayas": {},
        "Guateque": {},
        "Guayata": {},
        "Guican": {},
        "Iza": {},
        "Jenesano": {},
        "Jerico": {},
        "La Capilla": {},
        "La Uvita": {},
        "La Victoria": {},
        "Labranzagrande": {},
        "Macanal": {},
        "Maripi": {},
        "Miraflores": {},
        "Mongua": {},
        "Mongui": {},
        "Moniquira": {},
        "Motavita": {},
        "Muzo": {},
        "Nobsa": {},
        "Nuevo Colon": {},
        "Oicata": {},
        "Otanche": {},
        "Pachavita": {},
        "Paez": {},
        "Pajarito": {},
        "Panqueba": {},
        "Pauna": {},
        "Paya": {},
        "Paz Del Rio": {},
        "Pesca": {},
        "Pisba": {},
        "Quipama": {},
        "Ramiriqui": {},
        "Raquira": {},
        "Rondon": {},
        "Saboya": {},
        "Sachica": {},
        "Samaca": {},
        "San Eduardo": {},
        "San Jose De Pare": {},
        "San Luis De Gaceno": {},
        "San Mateo": {},
        "San Miguel De Sema": {},
        "San Pablo De Borbur": {},
        "Santa Maria": {},
        "Santa Rosa De Viterbo": {},
        "Santa Sofia": {},
        "Santana": {},
        "Sativanorte": {},
        "Sativasur": {},
        "Siachoque": {},
        "Soata": {},
        "Socha": {},
        "Socota": {},
        "Sogamoso": {},
        "Somondoco": {},
        "Sora": {},
        "Soraca": {},
        "Sotaquira": {},
        "Susacon": {},
        "Sutamarchan": {},
        "Sutatenza": {},
        "Tasco": {},
        "Tenza": {},
        "Tibana": {},
        "Tibasosa": {},
        "Tinjaca": {},
        "Tipacoque": {},
        "Toca": {},
        "Togui": {},
        "Topaga": {},
        "Tota": {},
        "Tunja": {},
        "Tunungua": {},
        "Turmeque": {},
        "Tuta": {},
        "Tutaza": {},
        "Umbita": {},
        "Ventaquemada": {},
        "Villa De Leyva": {},
        "Viracacha": {},
        "Zetaquira": {},
        "Campohermoso": {
            "Los Cedros": {
                "Los Cedros": ["3"]
            }
        },
        "Paipa": {
            "Palermo": {
                "Palermo": ["3"]
            }
        },
        "Puerto Boyaca": {
            "Vasconia": {
                "Puerto Palagua": ["4"],
                "Centro Calderon": ["3"],
                "Vasconia puerto Serviez": ["5"]
            },
            "Guanegro": {
                "Guanegro": ["2"]
            },
            "Pto Gutierrez": {
                "Puerto Gutierrez": ["1"],
                "Kilometro 25": ["1"]
            },
            "Puerto Pinzon": {
                "Pto Pinzon pozo Boyaca No 2": ["3"]
            },
            "El Marfil": {
                "Marfil": ["4"]
            },
            "Puerto Romero": {
                "Puerto Romero": ["2"]
            }
        }
    },
    "Caldas": {
        "Manizales": {
            "Atardeceres": {
                "Ie La Linda": ["17"],
                "Iechipre": ["15"],
                "Ie Chipre Sede B": ["26"],
                "Ie Adolfo Hoyos Ocampo": ["6"],
                "Colfilipense Ntra Sra Lourde": ["10"]
            },
            "San Jose": {
                "Iesan Agustin": ["13"],
                "Ie Instituto Manizales": ["24"],
                "Iedivina Providencia": ["9"]
            },
            "Cumanday": {
                "Ie Marco Fidel Suarez": ["21"],
                "Edificio Induslicorde Calda": ["20"],
                "Fac De Bellas Artesu Caldas": ["16"],
                "Ie Gran Colombia": ["16"],
                "Liceo Arquidio De Nuestra Sr": ["16"],
                "Ie Isabel La Catolica": ["33"],
                "Ie Instituto Univer De Cal": ["17"],
                "Ietfrancisco Jose De Caldas": ["14"]
            },
            "La Estacion": {
                "Ie La Asuncion Sede A": ["15"],
                "Ie San Jorge": ["28"],
                "Facciencias Para La Salud U": ["22"]
            },
            "Ciudadela Del Norte": {
                "Iefe Y Alegria La Paz Sede": ["35"],
                "Ie Sinai Sede B": ["22"],
                "Ie La Asuncion Sede C": ["21"],
                "Ie Liceo Mixto Sinai Sede A": ["18"],
                "Ie Bosques Del Norte": ["26"]
            },
            "Ecotur Cerro De Oro": {
                "Ie Esc Nal Aux De Enfermeria Sede A": ["16"],
                "Ie La Sultana Sede A": ["21"],
                "Ie Mariscal Sucre Sede B": ["10"],
                "Ie Mariscal Sucre Sede D": ["14"]
            },
            "Tesorito": {
                "Ie San Pio X": ["24"],
                "Ie San Pio X Sede B": ["12"],
                "Ie San Pio X Sede A": ["12"],
                "Ie Malteria": ["4"]
            },
            "Palogrande": {
                "Universidad Catolica De Maniza": ["18"],
                "Fac De Ciencias Jur Y Soc U": ["19"],
                "Ienacional Auxde Enfermeri": ["24"],
                "Ienormal Superior De Maniza": ["11"]
            },
            "Universitaria": {
                "Ie Atanasio Girardot": ["19"],
                "Ieeugenio Pacellisede Prin": ["20"],
                "Ie Malabar Sede A": ["16"],
                "Iearanjuez Sede A": ["13"],
                "Ie Malabar Sede B": ["6"]
            },
            "La Fuente": {
                "Ieandres Bello": ["19"],
                "Ie Perpetuo Socorro": ["8"],
                "Ie Leonardo Davinci Sede A": ["6"],
                "Ie Leonardo Davinci": ["28"],
                "Ielatinoamericano Sede B": ["11"]
            },
            "La Macarena": {
                "Colmayor De Nuestra Senora": ["27"],
                "Ie Leon De Greiff": ["21"],
                "Ie Siete De Agosto": ["28"],
                "Ie Estambul": ["14"]
            },
            "Colombia": {
                "Colombia": ["5"]
            },
            "La Cristalina": {
                "La Cristalina": ["3"]
            },
            "El Remanso": {
                "El Remanso": ["10"]
            },
            "Panorama": {
                "Panorama": ["5"]
            },
            "Corredor  Agro": {
                "Agroturistico El Tablazo": ["13"]
            },
            "El Manantial": {
                "El Manantial": ["5"]
            },
            "Rioblanco": {
                "Rioblanco": ["1"]
            }
        },
        "Aguadas": {
            "Arma": {
                "Arma": ["5"]
            }
        },
        "Filadelfia": {
            "El Pintado": {
                "El Pintado": ["1"]
            },
            "El Verso": {
                "El Verso": ["1"]
            },
            "La Paila": {
                "La Paila": ["2"]
            },
            "Morritos": {
                "Morritos": ["1"]
            },
            "Samaria": {
                "Samaria": ["5"]
            },
            "San Luis": {
                "San Luis": ["2"]
            }
        },
        "Manzanares": {
            "Aguabonita": {
                "Agua Bonita": ["2"],
                "La Ceiba": ["1"],
                "San Vicente": ["1"]
            },
            "Las Margaritas": {
                "Las Margaritas": ["2"]
            },
            "Los Planes": {
                "Los Planes": ["2"],
                "San Juan La Siria": ["1"]
            }
        },
        "Marmato": {
            "San Juan": {
                "San Juan": ["4"]
            }
        },
        "Marquetalia": {
            "Santa Elena": {
                "Santa Elena": ["2"]
            }
        },
        "Pacora": {
            "Castilla": {
                "Castilla": ["3"]
            },
            "Buenos Aires": {
                "Buenos Aires": ["1"]
            },
            " Las Coles": {
                "Las Coles": ["3"]
            },
            " Los Morros": {
                "Los Morros": ["2"]
            },
            "San Bartolome": {
                "San Bartolome": ["3"]
            },
            "San Lorenzo": {
                "San Lorenzo": ["2"]
            }
        },
        "Salamina": {
            "San Felix": {
                "Ie San Felix": ["3"]
            }
        },
        "Anserma": {},
        "Aranzazu": {},
        "Belalcazar": {},
        "Chinchina": {},
        "La Dorada": {},
        "La Merced": {},
        "Marulanda": {},
        "Neira": {},
        "Norcasia": {},
        "Palestina": {},
        "Pensilvania": {},
        "Riosucio": {},
        "Risaralda": {},
        "Samana": {},
        "San Jose": {},
        "Supia": {},
        "Victoria": {},
        "Villamaria": {},
        "Viterbo": {}
    },
    "Cesar": {
        "Valledupar": {
            "Comuna 4": {
                "Col Jose Eugenio Martinez": ["45"],
                "Univ Popular Del Cesarsd Sabanas": ["6"],
                "Col Nacionalizado Upar": ["37"],
                "Inst Tec Villa Corelca": ["16"],
                "Escuela Mixta No 4": ["21"],
                "Ie Consuelo Araujo Noguera": ["25"]
            },
            "El Alto De La Vuelta": {
                "El Alto De La Vuelta": ["2"]
            },
            "08aguas Blancas": {
                "Aguas Blancas": ["8"]
            },
            "09atanquez": {
                "Atanquez": ["8"]
            },
            "10badillo": {
                "Badillo": ["3"]
            },
            "11caracoli": {
                "Caracoli": ["3"]
            },
            "12chemesquemena": {
                "Chemesquemena": ["2"]
            },
            "13el Jabo": {
                "El Jabo": ["1"]
            },
            "14el Perro": {
                "El Perro": ["1"]
            },
            "15guacochito": {
                "Guacochito": ["2"]
            },
            "16guacoche": {
                "Guacoche": ["5"]
            },
            "17guatapuri": {
                "Guatapuri": ["4"]
            },
            "18guaimaral": {
                "Guaimaral": ["3"]
            },
            "19la Vega Arriba": {
                "La Vega Arriba": ["2"]
            },
            "20la Mina": {
                "La Mina": ["3"]
            },
            "21los Corazones": {
                "Los Corazones": ["3"]
            },
            "22los Haticos": {
                "Los Haticos": ["1"]
            },
            "23los Venados": {
                "Los Venados": ["4"]
            },
            "24las Raices": {
                "Las Raices": ["2"]
            },
            "25azucar Buena": {
                "Azucar Buena": ["4"]
            },
            "26mariangola": {
                "Mariangola": ["9"]
            },
            "27patillal": {
                "Patillal": ["5"]
            },
            "28rioseco": {
                "Rioseco": ["2"]
            },
            "29sabana Crespo": {
                "Sabana Crespo": ["5"]
            },
            "30valencia De Jesus": {
                "Valencia De Jesus": ["6"]
            },
            "31villa Germania": {
                "Villa Germania": ["3"]
            }
        },
        "Aguachica": {},
        "Agustin Codazzi": {},
        "Astrea": {},
        "Becerril": {},
        "Bosconia": {},
        "Chimichagua": {},
        "Chiriguana": {},
        "Curumani": {},
        "El Copey": {},
        "El Paso": {},
        "Gamarra": {},
        "Gonzalez": {},
        "La Gloria cesar": {},
        "La Jagua De Ibirico": {},
        "La Paz": {},
        "Manaure Balcon Del Cesar": {},
        "Pailitas": {},
        "Pelaya": {},
        "Pueblo Bello": {},
        "Rio De Oro": {},
        "San Alberto": {},
        "San Diego": {},
        "San Martin": {},
        "Tamalameque": {}
    },
    "Cordoba": {
        "Ayapel": {},
        "Buenavista": {},
        "Canalete": {},
        "Cerete": {},
        "Chima": {},
        "Chinu": {},
        "Cienaga De Oro": {},
        "Cotorra": {},
        "La Apartada": {},
        "Lorica": {},
        "Los Cordobas": {},
        "Momil": {},
        "Montelibano": {},
        "Monitos": {},
        "Planeta Rica": {},
        "Pueblo Nuevo": {},
        "Puerto Escondido": {},
        "Purisima": {},
        "Sahagun": {},
        "San Andres De Sotavento": {},
        "San Antero": {},
        "San Bernardo Del Viento": {},
        "San Carlos": {},
        "San Jose De Ure": {},
        "San Pelayo": {},
        "Tierralta": {},
        "Tuchin": {},
        "Valencia": {},
        "Monteria": {
            "Morindo": {
                "Morindo": ["5"]
            },
            "Santa Lucia": {
                "Santa Lucia": ["12"]
            },
            "Santa Clara": {
                "Santa Clara": ["7"]
            },
            "13correg 4 Cano Viejo Palotal": {
                "Cano Viejo Palotal": ["7"]
            },
            "Nuevo Paraiso": {
                "Nuevo Paraiso": ["3"]
            },
            "Martinica": {
                "Martinica": ["2"]
            },
            "Leticia": {
                "Leticia": ["7"]
            },
            "Pueblo Bujo": {
                "Pueblo Bujo": ["5"]
            },
            "Loma Verde": {
                "Loma Verde": ["8"]
            },
            "Jaraquiel": {
                "Jaraquiel": ["5"]
            },
            "Las Palomas": {
                "Las Palomas": ["9"]
            },
            "Guasimal": {
                "Guasimal": ["4"]
            },
            "El Sabanal": {
                "El Sabanal": ["17"]
            },
            "El Cerrito": {
                "El Cerrito": ["3"]
            },
            "Patio Bonito": {
                "Patio Bonito": ["7"]
            },
            "La Victoria": {
                "La Victoria": ["4"]
            },
            "Guateque": {
                "Guateque": ["3"]
            },
            "San Isidro": {
                "San Isidro": ["6"]
            },
            "San Anterito": {
                "San Anterito": ["10"]
            },
            "Nueva Lucia": {
                "Nueva Lucia": ["6"]
            },
            "Santa Isabel": {
                "Santa Isabel": ["5"]
            },
            "Tres Palmas": {
                "Tres Palmas": ["9"]
            },
            "Tres Piedras": {
                "Tres Piedras": ["5"]
            },
            "Buenos Aires": {
                "Buenos Aires": ["7"]
            },
            "La Manta": {
                "La Manta": ["4"]
            },
            "35correg 26 Nueva Esperanza": {
                "Nueva Esperanza": ["3"]
            },
            "Garzones": {
                "Garzones": ["24"]
            },
            "37correg 28 Kilometro 12": {
                "Kilometro 12": ["7"]
            }
        },
        "Puerto Libertador": {
            "Centro America": {
                "Centro America": ["2"]
            },
            "Puerto Lopez": {
                "Puerto Lopez": ["1"]
            }
        }
    },
    "Cundinamarca": {
        "Fusagasuga": {
            "Norte": {
                "La Aguadita": ["5"]
            },
            "Oriental": {
                "Los Sauces": ["5"]
            },
            "Centro": {
                "Parroquia Ntrasrade Belen": ["20"],
                "Colegio Santander": ["22"]
            },
            "Sur Oriental": {
                "Bochica la Trinidad": ["9"]
            },
            "Occidental": {
                "Cucharal": ["12"]
            },
            "Sur Occidental": {
                "El Triunfo boqueron": ["3"],
                "La Puerta chinauta": ["11"]
            }
        },
        "Girardot": {
            "01centro": {
                "Colegio Americano": ["28"],
                "Colegio La Presentacion": ["17"],
                "Ctro Educ Escuela Anexa": ["15"]
            },
            "02sur": {
                "Ie Nuevo Horizonte": ["28"],
                "Liceo Los Andes": ["6"]
            },
            "03occidente": {
                "Sede Francisco J De Caldas": ["11"],
                "Ctro Edu Antonio Narino": ["14"],
                "Col Mayor Martha Catalina": ["19"]
            },
            "04norte": {
                "Esc Normal Superior Maria Aux": ["15"],
                "Colegio Atanasio Girardot": ["18"]
            },
            "05oriente": {
                "Coliseo Barrio San Jorge": ["15"],
                "Coliseo Barrio Kennedy": ["14"],
                "Ie Policarpa Salavarrieta": ["16"]
            },
            "Barzalosa": {
                "Barzalosa Y Piamonte": ["8"]
            },
            "San Lorenzo": {
                "San Lorenzo": ["1"]
            }
        },
        "Guaduas": {
            "La Paz": {
                "La Paz": ["3"]
            },
            "Puerto Bogota": {
                "Cuatro Esquinas": ["1"],
                "Cedrales": ["1"],
                "Puerto Bogota": ["10"],
                "Malambo": ["1"]
            }
        },
        "Pacho": {
            "Pasuncha": {
                "Pasuncha": ["3"]
            }
        },
        "Yacopi": {
            "Ibama": {
                "Ibama": ["2"]
            }
        },
        "Agua De Dios": {},
        "Alban": {},
        "Anapoima": {},
        "Anolaima": {},
        "Apulo": {},
        "Arbelaez": {},
        "Beltran": {},
        "Bituima": {},
        "Bogota": {},
        "Bojaca": {},
        "Cabrera": {},
        "Cachipay": {},
        "Cajica": {},
        "Caparrapi": {},
        "Caqueza": {},
        "Carmen De Carupa": {},
        "Chaguani": {},
        "Chia": {},
        "Chipaque": {},
        "Choachi": {},
        "Choconta": {},
        "Cogua": {},
        "Cota": {},
        "Cucunuba": {},
        "El Colegio": {},
        "El Penon": {},
        "El Rosal": {},
        "Facatativa": {},
        "Fomeque": {},
        "Fosca": {},
        "Funza": {},
        "Fuquene": {},
        "Gachala": {},
        "Gachancipa": {},
        "Gacheta": {},
        "Gama": {},
        "Granada": {},
        "Guacheta": {},
        "Guasca": {},
        "Guataqui": {},
        "Guatavita": {},
        "Guayabal De Siquima": {},
        "Guayabetal": {},
        "Gutierrez": {},
        "Jerusalen": {},
        "Junin": {},
        "La Calera": {},
        "La Mesa": {},
        "La Palma": {},
        "La Pena": {},
        "La Vega": {},
        "Lenguazaque": {},
        "Macheta": {},
        "Madrid": {},
        "Manta": {},
        "Medina": {},
        "Mosquera": {},
        "Narino": {},
        "Nemocon": {},
        "Nilo": {},
        "Nimaima": {},
        "Nocaima": {},
        "Paime": {},
        "Pandi": {},
        "Paratebueno": {},
        "Pasca": {},
        "Puerto Salgar": {},
        "Puli": {},
        "Quebradanegra": {},
        "Quetame": {},
        "Quipile": {},
        "Ricaurte": {},
        "San Antonio Del Tequendama": {},
        "San Bernardo": {},
        "San Cayetano": {},
        "San Francisco": {},
        "San Juan De Rioseco": {},
        "Sasaima": {},
        "Sesquile": {},
        "Sibate": {},
        "Silvania": {},
        "Simijaca": {},
        "Soacha": {},
        "Sopo": {},
        "Subachoque": {},
        "Suesca": {},
        "Supata": {},
        "Susa": {},
        "Sutatausa": {},
        "Tabio": {},
        "Tausa": {},
        "Tena": {},
        "Tenjo": {},
        "Tibacuy": {},
        "Tibirita": {},
        "Tocaima": {},
        "Tocancipa": {},
        "Topaipi": {},
        "Ubala": {},
        "Ubaque": {},
        "Ubate": {},
        "Une": {},
        "Utica": {},
        "Venecia": {},
        "Vergara": {},
        "Viani": {},
        "Villagomez": {},
        "Villapinzon": {},
        "Villeta": {},
        "Viota": {},
        "Zipacon": {},
        "Zipaquira": {}
    },
    "Bogota Dc": {
        "Bogota Dc": {
            "Usaquen": {
                "Usaquen": ["99"],
                "Servita": ["78"],
                "Calazans": ["33"],
                "Aquileo Parra": ["48"],
                "Lijaca": ["38"],
                "San Antonio Union Colombia": ["37"],
                "Barrancas": ["38"],
                "Los Cedritos 151": ["71"],
                "Universidad Del Bosque": ["58"],
                "Santo Tomas De Aquino": ["56"],
                "Instituto Pedagogico": ["47"],
                "Unicentro": ["109"],
                "Plaza Mexico": ["42"],
                "Santa Paula": ["35"],
                "Hacienda Santa Barbara": ["43"],
                "Altos De San Isidro": ["8"],
                "Las Orquideas": ["46"],
                "Los Cedritos": ["40"],
                "Cedro Golf": ["37"],
                "Buenavista": ["25"],
                "Canaima": ["15"],
                "Alessandro Volta": ["11"],
                "La Carolina": ["9"],
                "Cristobal Colon": ["13"],
                "Divino Maestro A": ["14"],
                "Divino Maestro B": ["9"],
                "Las Margaritas": ["29"],
                "Alta Blanca": ["8"],
                "Colegio Toberin B": ["10"],
                "El Pite": ["3"],
                "El Codito": ["7"],
                "Verbenal Santa Maria": ["14"],
                "Saludcoop Norte": ["10"],
                "Torca": ["1"],
                "Carulla 140": ["27"],
                "Colegio San Francisco Cl 186": ["3"],
                "Buen Consejo": ["5"],
                "Plazoleta Santa Barbara": ["7"],
                "Universidad Militar": ["2"],
                "La Estrellita": ["2"],
                "Esclavas Del Sagrado Corazon": ["3"],
                "Cardenal Sancha": ["5"],
                "Siervas San Jose La Calleja": ["3"],
                "Colegio Provinma": ["7"],
                "Colegio Sans Facon": ["2"],
                "Anglo Americano": ["2"],
                "Pureza De Maria": ["2"]
            },
            "Chapinero": {
                "Chico Norte": ["73"],
                "Chico Reservado": ["47"],
                "Chico Liceo Frances Louis Past": ["43"],
                "Antiguo Country Plazoleta Caru": ["37"],
                "Universidad Ean": ["27"],
                "Universidad Sergio Arboleda": ["17"],
                "Universidad Pedagogica Naciona": ["22"],
                "Granada Colegio Simon Rodriguez Sd B": ["13"],
                "Sena Calle 65": ["25"],
                "Universidad Konrad Lorenz": ["32"],
                "Sena Calle 52": ["32"],
                "Universidad Piloto": ["21"],
                "Colegio Campestre Monteverde S": ["16"],
                "Colegio Simon Rodriguez Sede A": ["20"],
                "Universidad Distrital": ["27"],
                "Centro Comercial De La 93": ["12"],
                "Museo Del Chico": ["5"],
                "Colegio San Martin De Porres": ["3"],
                "Mariscal Sucre Sede B": ["2"],
                "Bethlemitascalle 65": ["3"],
                "U Santo Tomas Claustro": ["3"],
                "El Aquinate U Santo Tomas": ["2"],
                "Colegio Nuevo Gimnasio": ["2"],
                "Universidad Catolica": ["3"],
                "Universidad De La Salle": ["3"]
            },
            "Santa Fe": {
                "Camilo Torres": ["22"],
                "La Perseverancia": ["19"],
                "Policarpa Salavarrieta": ["15"],
                "Palacio San Francisco": ["33"],
                "Biblioteca Distrital Antonio N": ["13"],
                "Los Laches": ["20"],
                "Centro Oriente": ["12"],
                "San Bernardo": ["15"],
                "Las Cruces": ["31"],
                "Girardot": ["12"],
                "El Consuelo": ["20"],
                "Medicina Legal": ["8"],
                "Las Aguas": ["14"],
                "Las Nieves": ["21"],
                "El Verjon": ["2"],
                "El Gran San": ["3"],
                "Colegio Ramon Jimeno": ["1"],
                "Colegio La Giralda": ["4"],
                "Universidad Jorge Tadeo Lozano": ["6"],
                "Universidad Incca De Colombia": ["2"]
            },
            "San Cristobal": {
                "Las Brisas": ["17"],
                "Santa Ana Sur": ["26"],
                "San Cristobal Sur": ["41"],
                "Las Mercedes": ["27"],
                "San Blas": ["41"],
                "Primera De Mayo": ["20"],
                "Sosiego": ["18"],
                "Juan Del Rizzo": ["47"],
                "Montebello": ["36"],
                "Ramajal": ["16"],
                "Bello Horizonte": ["31"],
                "San Isidro": ["35"],
                "Parqueadero Guacamayas": ["21"],
                "San Martin De Loba Sur": ["32"],
                "Bellavista San Cristobal": ["25"],
                "La Victoria A": ["63"],
                "Altamira": ["38"],
                "El Quindio": ["13"],
                "Republica Del Canada": ["18"],
                "La Gloria": ["28"],
                "Juan Rey": ["26"],
                "Villa De Los Alpes": ["30"],
                "Los Libertadores": ["25"],
                "San Pedro Sur Oriental": ["16"],
                "Villa Del Cerro": ["13"],
                "Canada Guira": ["8"],
                "Arboleda Sur": ["19"],
                "20 De Julio Sede B": ["15"],
                "San Juan Bosco Santa Ana": ["7"],
                "San Geronimo": ["3"],
                "Suramerica": ["4"],
                "San Vicente Colsubsidio": ["5"],
                "Guacamayas Ii": ["7"],
                "Escuela La Victoria B": ["9"],
                "Juana Escobar Sede A": ["4"],
                "Roma Colsubsidio": ["1"],
                "La Gloria Escuela Altamira": ["5"],
                "Ramajal Amapolas": ["2"],
                "El Rodeo Sede B La Gloria": ["2"],
                "El Portal": ["4"],
                "La Castana": ["1"],
                "Atenas": ["2"],
                "Villa Javier La Maria": ["1"],
                "La Belleza": ["2"],
                "Aguas Claras": ["3"]
            },
            "Usme": {
                "Usme": ["37"],
                "El Destino": ["6"],
                "Monteblanco": ["33"],
                "Santa Marta": ["22"],
                "Santa Librada": ["50"],
                "Almirante Padilla": ["41"],
                "Usminia": ["22"],
                "Marichuela": ["35"],
                "La Aurora": ["50"],
                "Chuniza": ["32"],
                "La Flora": ["15"],
                "El Hato": ["8"],
                "Los Comuneros": ["33"],
                "El Virrey": ["33"],
                "El Danubio Azul": ["26"],
                "Juan Jose Rondon": ["12"],
                "La Fortaleza": ["23"],
                "El Bosque": ["24"],
                "Villa Hermosa": ["23"],
                "Valles De Cafam": ["14"],
                "La Fiscala": ["22"],
                "Portal Usme": ["21"],
                "Brasilia": ["11"],
                "El Cortijo": ["6"],
                "Tenerife": ["4"],
                "Gran Yomasa": ["11"],
                "Cabanas": ["4"],
                "Tejares": ["5"],
                "Col Fernando Gonzalez Ochoa": ["3"],
                "Alfonso Lopez": ["14"],
                "La Alborada": ["4"],
                "Uval  Puerta Al Llano": ["7"],
                "Villa Alemania": ["6"],
                "Usme  Centro": ["3"],
                "Brazuelos": ["2"],
                "Cdc Julio Cesar Sanchez": ["2"],
                "Via Al Llano": ["1"],
                "Nusadal": ["3"]
            },
            "Tunjuelito": {
                "Tunjuelito A": ["39"],
                "Fatima A": ["39"],
                "Abraham Lincoln": ["17"],
                "San Carlos": ["40"],
                "San Benito": ["33"],
                "El Tunal A": ["44"],
                "El Carmen Sur A": ["31"],
                "San Vicente Ferrer": ["37"],
                "Venecia A": ["45"],
                "Nuevo Muzu  A": ["17"],
                "Isla Del Sol": ["24"],
                "Venecia B": ["15"],
                "Tunjuelito B": ["6"],
                "El Tunal B": ["18"],
                "El Carmen Sur B": ["10"],
                "Fatima B": ["14"],
                "Nuevo  Muzo B": ["5"],
                "Jardin Infantil Isla Del Sol": ["3"],
                "Liceo Santa Bernardita": ["2"],
                "Col Cooperativo Venecia": ["5"],
                "Cooperativo Nuevo Muzu": ["1"],
                "Liceo Campestre Cafam": ["1"],
                "Nuestra Senora Las Victorias": ["1"],
                "Santa Cecilia De Tunjuelito": ["1"],
                "Alcaldia Local De Tunjuelito": ["2"],
                "Porfirio Barba Jacob": ["4"]
            },
            "Bosa": {
                "Bosa": ["90"],
                "Villa Del Rio": ["38"],
                "Jose Antonio Galan": ["34"],
                "La Amistad": ["33"],
                "Carlos Alban": ["47"],
                "La Libertad": ["73"],
                "Piamonte": ["52"],
                "La Estacion": ["45"],
                "Laureles": ["38"],
                "Palestina": ["31"],
                "Orlando Higuita": ["41"],
                "Bosa Paulo Vi": ["26"],
                "Bosa Brasilia": ["38"],
                "Islandia": ["18"],
                "Jimenez De Quesada": ["19"],
                "San Bernardino": ["27"],
                "Bosa San Jose": ["23"],
                "Surbana": ["13"],
                "Nuevo Chile": ["35"],
                "Santa Fe De Bosa": ["22"],
                "El Porvenir": ["45"],
                "El Recreo": ["42"],
                "La Esperanza": ["32"],
                "Francisco De Paula Santander": ["13"],
                "Pablo De Tarso": ["26"],
                "Atalayas": ["31"],
                "El Recuerdo Santafe": ["12"],
                "Fe Y Alegria San Ignacio": ["25"],
                "Ciudadela El Porvenir": ["25"],
                "Carlos Pizarro Leon Gomez": ["24"],
                "Nuevo Carlos Alban": ["7"],
                "Laureles Ii": ["13"],
                "Nueva Estacion": ["11"],
                "La Independecia": ["12"],
                "Bosanova": ["9"],
                "Llano Oriental": ["7"],
                "Carbonell": ["10"],
                "Nueva Granada": ["7"],
                "Naranjos": ["10"],
                "Campo Verde  Potreritos": ["12"],
                "Claretiano": ["14"],
                "Villa Del Rio Ii": ["8"],
                "Holanda": ["9"],
                "Portal De Brasil": ["5"],
                "Recreo Michelsen": ["19"],
                "Cedid San Pablo": ["9"],
                "La Acuarela": ["5"],
                "Miguel Angel Asturias": ["2"],
                "Coliseo La Palestina": ["2"],
                "Nuestra Sra De Nazareth": ["1"],
                "Manuel Elkin Patarroyo": ["4"],
                "Almacen Metro Autopista Sur": ["3"],
                "Jardin Infantil Olarte": ["2"],
                "Gimnasio Los Sauces": ["3"],
                "Claretiano El Libertador": ["2"],
                "Gimnasio Real Americano": ["4"],
                "Liceo Ciudad Capital": ["5"],
                "Juan Maximiliano Ambrosio": ["3"],
                "Instituto Guimarc": ["2"],
                "Colegio Colsubsidio Chicala": ["5"],
                "Colegio Ciudadanos Del Futuro": ["4"],
                "Cc Gran Plaza Bosa": ["13"]
            },
            "Kennedy": {
                "Class": ["39"],
                "Roma": ["66"],
                "Perpetuo Socorro": ["30"],
                "Catalina": ["33"],
                "Casablanca 32": ["47"],
                "Britalia": ["44"],
                "Gran Colombiano": ["30"],
                "Los Periodistas": ["25"],
                "Avenida Boyaca Sur": ["25"],
                "La Chucua": ["24"],
                "Carimagua": ["31"],
                "Timiza": ["46"],
                "La Uba": ["23"],
                "Santa Marta De Pastrana": ["25"],
                "La Macarena": ["25"],
                "El Japon": ["51"],
                "Estados Unidos Super 13": ["31"],
                "El Saucedal": ["19"],
                "Patio Bonito": ["74"],
                "Francisco Jose De Caldas": ["29"],
                "Banderas": ["24"],
                "Prospero Pinzon": ["28"],
                "Kennedy Ley": ["39"],
                "Los Heroes": ["17"],
                "Colegio Oea": ["21"],
                "Floralia": ["22"],
                "Carvajal Ii": ["19"],
                "Villa Adriana": ["16"],
                "Las Americas": ["46"],
                "La Floresta Sur": ["32"],
                "Marsella": ["35"],
                "Aloha": ["9"],
                "Mandalay  Colegio Kennedy": ["27"],
                "Pio Xii": ["23"],
                "Castilla": ["58"],
                "Villanueva": ["18"],
                "Jairo Anibal Nino": ["62"],
                "Favidi Vision De Colombia": ["38"],
                "Almenar": ["17"],
                "Alqueria De La Fragua": ["31"],
                "Boita": ["25"],
                "Col De Timiza": ["21"],
                "Tintalito": ["34"],
                "Las Palmeras": ["21"],
                "Dindalito": ["33"],
                "Valladolid": ["14"],
                "Milenio Plaza": ["21"],
                "Col Gabriel Betancourt Mejia": ["57"],
                "Maria Paz": ["22"],
                "Colegio Nelson Mandela": ["18"],
                "Colegio Gustavo Rojas Pinilla": ["25"],
                "Colegio Class Ied Sede B Rom": ["10"],
                "Gema": ["3"],
                "Villa Rica": ["9"],
                "Colegio Jaime Garzon": ["20"],
                "Colegio Debora Arango": ["6"],
                "Campo Bello": ["18"],
                "Patios": ["22"],
                "Manuel Cepeda": ["21"],
                "Bazaar Alsacia": ["30"],
                "Santa Maria De Kennedy": ["24"],
                "Tequendama Paulo Vi Sd A": ["7"],
                "Centro Desarrollo Comunitario": ["11"],
                "Colegio Rodrigo Triana": ["15"],
                "Colegio Dario Echandia": ["16"],
                "San Francisco En El Tintal": ["16"],
                "Centro Comercial Ciudad Tintal": ["15"],
                "Tagaste": ["8"],
                "Tierra De Castillos": ["19"],
                "Colegio Fe Y Alegria": ["9"],
                "Colegio Jean Piaget": ["6"],
                "Metro": ["5"],
                "Colegio San Pedro Claver Sede A": ["7"],
                "Colegio La Magdalena": ["3"],
                "Colegio Distrital Jackeline": ["1"],
                "Colegio Luz Y Vida": ["2"],
                "Colegio Rafael Goberna": ["1"],
                "Fernando Soto Aparicio Sede B": ["2"],
                "Liceo El Castillo": ["2"],
                "Centro Comercial Tintal Plaza": ["11"],
                "Sagrado Corazon": ["2"],
                "Codema": ["4"],
                "Salon Comunal Roma Iv": ["2"],
                "Kennedy Central": ["2"],
                "Fernando Soto Aparicio": ["1"],
                "Rosa Maria De Gordillo": ["2"],
                "Salon Comunal Carvajal Osorio": ["2"],
                "Carlos Arango Velez": ["3"],
                "Nicolas Esguerra": ["1"],
                "Salon Comunal Marsella": ["4"],
                "Isabel Ii": ["2"],
                "Liceo Reynel": ["3"],
                "Colegio Oea Antonia Santos": ["1"],
                "Salon Comunal Boita Ii Sector": ["2"],
                "Salon Comunal Santa Catalina": ["2"],
                "Colegio Integracion Moderna": ["1"]
            },
            "Fontibon": {
                "Fontibon": ["82"],
                "Villemar": ["39"],
                "Hayuelos Centro Comercial": ["39"],
                "Belen": ["32"],
                "San Pablo La Perla": ["21"],
                "Versalles": ["49"],
                "Veracruz": ["36"],
                "Modelia Sur": ["35"],
                "Santa Cecilia  Modelia": ["26"],
                "Centro A": ["20"],
                "La Laguna": ["35"],
                "Batavia": ["17"],
                "La Giralda": ["28"],
                "Puerta De Teja": ["10"],
                "Agustiniano Salitre": ["42"],
                "Tres Elefantes  La Esperanza": ["22"],
                "Puente Grande": ["16"],
                "Zona Franca": ["39"],
                "Recodo": ["26"],
                "Santa Teresa Centro": ["11"],
                "La Felicidad": ["14"],
                "Navarra Modelia": ["13"],
                "Modelia Real": ["11"],
                "La Aldea": ["10"],
                "Van Uden Calle 13": ["3"],
                "Atahualpa": ["8"],
                "Hayuelos Jumbo": ["44"],
                "Integrado Sede B": ["1"],
                "Acunar": ["1"],
                "Casa Pensamiento Intercultural": ["1"],
                "Colegio Luis Angel Arango": ["2"],
                "Ferrocaja": ["1"],
                "El Charco": ["1"],
                "Multiplaza": ["3"],
                "Salitre Plaza": ["10"],
                "Pablo Neruda": ["2"],
                "Cacique Hyntiba": ["3"],
                "Tres Estancias": ["4"]
            },
            "Engativa": {
                "Boyaca": ["49"],
                "Engativa": ["69"],
                "Normandia": ["43"],
                "Bosque Popular": ["24"],
                "El Guali": ["14"],
                "El Lujan": ["30"],
                "Villa Luz": ["40"],
                "Los Alamos": ["29"],
                "Villa Amalia": ["41"],
                "Villas De Granada": ["52"],
                "Garces Navas": ["47"],
                "Bochica": ["54"],
                "Los Alamos Norte": ["41"],
                "La Salina": ["34"],
                "La Florida": ["20"],
                "Santa Helenita": ["39"],
                "La Europa": ["15"],
                "La Estrada": ["34"],
                "La Estradita": ["31"],
                "Las Ferias": ["29"],
                "Bonanza": ["35"],
                "Sta Maria Del Lago": ["21"],
                "La Granja": ["28"],
                "Florencia": ["16"],
                "Santa Rosita": ["38"],
                "Quirigua": ["46"],
                "La Espanola": ["22"],
                "Minuto De Dios": ["41"],
                "La Serena": ["19"],
                "Bachue": ["42"],
                "Quirigua plaza De Mercado": ["29"],
                "Bachue Ii  Bochica I": ["27"],
                "Villa Gladys": ["31"],
                "El Cortijo localidad 10": ["51"],
                "San Marcos": ["41"],
                "San Ignacio": ["10"],
                "Tabora": ["26"],
                "El Morisco": ["12"],
                "Los Cerezos": ["18"],
                "Ciudadela Colsubsidio": ["59"],
                "Ferias Ii": ["16"],
                "El Muelle": ["46"],
                "La Cabana": ["14"],
                "Tisquesusa": ["6"],
                "Santa Cecilia": ["11"],
                "Plazuelas Del Virrey": ["23"],
                "Ciudad De Honda": ["6"],
                "Zarzamora": ["21"],
                "Villa Constanza": ["8"],
                "Mortino": ["9"],
                "Palo Blanco": ["5"],
                "San Joaquin": ["4"],
                "Primavera": ["5"],
                "Bolivia": ["17"],
                "Gran Granada": ["31"],
                "El Cedro": ["6"],
                "Torquigua": ["20"],
                "Almazan Engativa": ["24"],
                "Unicentro De Occidente": ["9"],
                "Salon Comunal Alamos": ["2"],
                "Leon Valencia": ["1"],
                "La Clarita": ["3"],
                "Centro Educativo Scalas": ["1"],
                "Naciones Unidas Sede B": ["1"],
                "Colegio Norte Adventista": ["1"],
                "Alcala Sede B": ["1"],
                "Diverplaza": ["6"],
                "Margarita Bosco": ["4"],
                "Colegio Copes": ["2"]
            },
            "Suba": {
                "Parque Fundacion De Suba": ["111"],
                "Colegio San Jose De Calasanz": ["39"],
                "Colegio Villa Elisa Sedes C Y D": ["29"],
                "El Rincon": ["70"],
                "Colegio Alberto Lleras Camargo": ["53"],
                "Tibabuyes Universal": ["36"],
                "Casablanca Suba": ["16"],
                "Villa Del Pradouni Agraria": ["53"],
                "Prado Pinzon": ["28"],
                "Prado Ciudad Jardin": ["24"],
                "Centro Comercial Bulevar Niza": ["65"],
                "Pontevedra": ["40"],
                "San Nicolasagustiniano Norte": ["30"],
                "La Conejera": ["7"],
                "Prado Veraniego": ["34"],
                "Niza Ix": ["26"],
                "La Alhambra Carulla": ["49"],
                "Puente Largoemmanuel Dalzon": ["24"],
                "Floresta Nortejulio Florez": ["30"],
                "Pasadenalos Tres Elefantes": ["29"],
                "Nueva Zelandia": ["32"],
                "San Luis Suba": ["41"],
                "San Cipriano": ["26"],
                "Fundacion Universi Luis Amigo": ["17"],
                "La Gaitana": ["46"],
                "Sabana De Tibabuyes": ["63"],
                "Colegiohijas De Cristo Rey": ["65"],
                "Centro Comercial Mazuren": ["48"],
                "Tejares Norte": ["31"],
                "Colegio Celestin Freinet": ["26"],
                "Colegio Alvaro Gomez": ["57"],
                "Colegio Delia Zapata Olivella": ["30"],
                "La Aguadita": ["11"],
                "Bosques De Suba": ["19"],
                "Col Republica Dominicana": ["47"],
                "Lisboacolegio Distrital Lisboa": ["35"],
                "Universidad Udca": ["4"],
                "Colegio La Khumbre": ["6"],
                "Prado Sur": ["17"],
                "Supercade Suba": ["43"],
                "Colegio Nicolas Buenaventura": ["39"],
                "Suba San Francisco": ["6"],
                "Fundacion San Felipe Neri": ["4"],
                "Colegio Simon Bolivar Suba": ["25"],
                "Colegio Eucaristico Mercedario": ["24"],
                "Aldea La Palma": ["7"],
                "Ramon De Zubiria Sede A": ["22"],
                "Colegio Virginia Gutierrez": ["12"],
                "Colegio Gonzalo Arango": ["16"],
                "Corintocolegio Nueva Colombia": ["19"],
                "La Toscanacolfe Y Alegria": ["23"],
                "Colegio Pedagogico Dulce Maria": ["28"],
                "Institucion Educativa Compartir Suba": ["37"],
                "Colegio Gerardo Molina": ["28"],
                "El Batan": ["16"],
                "Niza Centro Comercial Niza": ["38"],
                "Centro Comercial Paseo San Raf": ["23"],
                "Almacen Exito La Colina": ["37"],
                "Carulla Rincon De La Colina": ["26"],
                "Colsubsidio Mazuren": ["33"],
                "Colegio Santa Isabel De Hungria": ["15"],
                "Biblioteca Julio Mario Santo D": ["34"],
                "Colegio Rafael Maya": ["9"],
                "Suba Santa Cecilia": ["8"],
                "Instituto San Basilio": ["8"],
                "Colegio Jorge Mario Bergoglio": ["5"],
                "Colegio Veintiun Angeles": ["1"],
                "Chorrillos": ["1"],
                "Hunza Sede A": ["1"],
                "Maximino Poitiers": ["5"],
                "Salon Comunal Aures Ii": ["5"],
                "Salon Comunal Villa Maria": ["5"],
                "Salon Comunal Villa Cindy": ["3"],
                "Floresta Outlet": ["3"],
                "Colegio John Dewey": ["2"],
                "Colegio Caro Y Cuervo": ["4"],
                "Cc Portoalegre": ["6"],
                "Cc Parque La Colina": ["9"],
                "Liceo De Londres": ["1"],
                "Colegio Marymount": ["2"],
                "San Jose Bavariaabraham Lincoln": ["3"],
                "Colegio Del Bosque": ["1"],
                "Colegio Santiago Alberioni": ["2"],
                "Colegio Vista Bella": ["4"],
                "Mirandela  Nueva Zelandia": ["4"],
                "Centro Comercial Santafe": ["13"]
            },
            "Barrios Unidos": {
                "La Castellana": ["32"],
                "Rionegro": ["31"],
                "Patria": ["9"],
                "Gaitan": ["20"],
                "Entre Rios": ["15"],
                "Metropolis": ["35"],
                "Simon Bolivar": ["41"],
                "Jose Joaquin Vargas": ["32"],
                "San Fernando": ["32"],
                "Popular Modelo": ["36"],
                "12 De Octubre": ["12"],
                "Santa Sofia": ["17"],
                "Polo Club": ["19"],
                "San Felipe": ["11"],
                "Los Alcazares": ["17"],
                "La Paz": ["11"],
                "Colombia": ["13"],
                "La Muequeta": ["9"],
                "Siete De Agosto": ["24"],
                "Benjamin Herrera": ["11"],
                "Polideportivo  Polo": ["5"],
                "Iserra 100": ["9"],
                "San Miguel": ["1"],
                "Plaza De Los Artesanos": ["1"],
                "Cafam Av 68": ["3"]
            },
            "Teusaquillo": {
                "Divino Salvador": ["21"],
                "San Luis": ["19"],
                "El Campin": ["20"],
                "Nicolas De Federman": ["18"],
                "Pablo Vi": ["31"],
                "El Salitre": ["13"],
                "La Esmeralda": ["18"],
                "Cafam Calle 51": ["24"],
                "Palermo": ["36"],
                "Colegio Americano": ["35"],
                "Belalcazar": ["16"],
                "Quinta Paredes  A": ["15"],
                "Quinta Paredes B": ["25"],
                "Centro Narino": ["20"],
                "Residencias Bch": ["15"],
                "Santa Teresita": ["8"],
                "La Magdalena": ["15"],
                "Teusaquillo": ["25"],
                "Pablo Vi Ii Etapa": ["10"],
                "Rafael Nunez": ["16"],
                "Ciudad Salitre": ["30"],
                "Corpus Christi": ["8"],
                "Liceo Parroquial Sara Zapata": ["8"],
                "Acevedo Tejada": ["7"],
                "Biblioteca Virgilio Barco": ["6"],
                "Imprenta Nacional": ["17"],
                "Colegio Del Pilar": ["1"],
                "Universidad Ecci": ["1"],
                "Gimnasio Centro Narino": ["1"],
                "Colegio Santa Clara": ["4"]
            },
            "Martires": {
                "Santa Fe": ["29"],
                "Samper Mendoza": ["20"],
                "Colseguros": ["15"],
                "Estacion De La Sabana": ["17"],
                "Ricaurte": ["27"],
                "La Estanzuela": ["32"],
                "Veraguas": ["17"],
                "Centro Crecer": ["26"],
                "El Vergel": ["16"],
                "Eduardo Santos": ["19"],
                "San Fason": ["11"],
                "La Rebeca": ["6"],
                "Panamericano": ["6"],
                "Antonio Ricaurte": ["4"],
                "San Francisco De Asis": ["4"],
                "Centro De Memoria": ["7"],
                "Salon Comunal Santa Isabel": ["8"]
            },
            "Antonio Narino": {
                "Policarpa": ["27"],
                "Ciudad Berna": ["18"],
                "San Antonio": ["23"],
                "Luna Park": ["12"],
                "Ciudad Jardin": ["35"],
                "Restrepo A": ["35"],
                "Restrepo B": ["45"],
                "La Fraguita": ["12"],
                "La Fragua": ["17"],
                "Santander": ["14"],
                "Santander Sur": ["12"],
                "Villa Mayor": ["29"],
                "Sena": ["23"],
                "La Valvanera": ["8"],
                "Salon Comunal San Antonio": ["3"],
                "Colegio Adventista Emmanuel": ["1"],
                "Salon Comunal Villa Mayor": ["4"],
                "Cinco De Noviembre": ["2"],
                "Casa Comunal Ciudad Jardin": ["3"]
            },
            "Puente Aranda": {
                "Delicias Muzu": ["34"],
                "Ciudad Montes": ["38"],
                "Santa Matilde": ["26"],
                "La Asuncion": ["23"],
                "Alcaldia Puente Aranda": ["33"],
                "La Primavera": ["33"],
                "Cundinamarca": ["9"],
                "La Francia": ["14"],
                "Puente Aranda": ["15"],
                "Salazar Gomez": ["17"],
                "La Trinidad": ["14"],
                "La Pradera": ["16"],
                "Colon": ["41"],
                "San Rafael": ["24"],
                "El Jazmin": ["25"],
                "La Ponderosa": ["21"],
                "Galan": ["35"],
                "Milenta": ["19"],
                "El Tejar": ["26"],
                "Alqueria": ["29"],
                "Alcala": ["27"],
                "Santa Rita": ["32"],
                "Autopista Sur": ["12"],
                "Los Sauces": ["18"],
                "Carrera Centro Comercial": ["5"],
                "San Andresito": ["8"],
                "Salon Comunal Colon": ["9"],
                "Colonia Oriental": ["7"],
                "Salon Comunal La Trinidad": ["3"],
                "Primavera Y Gorgonzola": ["6"],
                "El Remanzo": ["3"],
                "Colegio Romulo Gallego": ["2"],
                "Salon Comunal Veraguas": ["4"],
                "Instituto De Integracion Cultural": ["1"],
                "Colegio Distrital Sorrento": ["2"],
                "Luis Carlos Galan Sarmiento": ["1"],
                "Cultura Popular": ["1"],
                "San Eusebio": ["2"],
                "Los Angeles": ["1"],
                "Plaza Central": ["4"],
                "Jorge Gaitan Cortes": ["1"],
                "Ctro De Rehabil Para Adultos Ciegos": ["1"]
            },
            "Candelaria": {
                "La Concordia": ["31"],
                "Alcaldia Mayor": ["41"],
                "Egipto": ["19"],
                "Archivo Distrital": ["21"],
                "Murillo Toro": ["13"],
                "Colegio Mayor San Bartolome": ["2"],
                "Autonoma De Colombia": ["2"],
                "Egipto Escuela Quinta Diaz": ["2"],
                "La Salle Candelaria": ["2"]
            },
            "Rafael Uribe Urib": {
                "Claret": ["28"],
                "Ingles": ["30"],
                "Bravo Paez": ["17"],
                "Libertador Ii": ["17"],
                "Centenario": ["22"],
                "Olaya": ["23"],
                "San Jose": ["25"],
                "Alejandro Obregon Gustavo Rest": ["22"],
                "Quiroga": ["21"],
                "Alcaldia Quiroga": ["34"],
                "Central Quiroga": ["14"],
                "Santa Lucia": ["25"],
                "Las Colinas": ["15"],
                "Country Sur": ["31"],
                "Las Lomas": ["25"],
                "Alexander Fleming San Jorge": ["25"],
                "Reino De Holanda": ["16"],
                "Marco Fidel Suarez": ["25"],
                "El Socorro Sur": ["13"],
                "Molinos Del Sur": ["54"],
                "Ciudad Bochica Sur": ["34"],
                "Los Molinos Ii Sector": ["28"],
                "Palermo Sur": ["22"],
                "Villa Mayor La Nueva": ["14"],
                "Granjas De San Pablo": ["13"],
                "Resurreccion": ["12"],
                "Rafael Uribe La Paz": ["11"],
                "San Agustin Sur": ["28"],
                "Covivienda Del Suroriente": ["25"],
                "Marruecos Apartamentos": ["14"],
                "Salon Comunal La Marqueza": ["7"],
                "Mirador De Marrocos": ["4"],
                "San Juanito": ["6"],
                "Providencia": ["4"],
                "Gustavo Restrepo": ["10"],
                "Salon Comunal Ingles": ["6"],
                "Salon Comunal Claret": ["6"],
                "San Jorge": ["8"],
                "Liceo San Pablo": ["4"],
                "Salon Comunal Cebadal": ["2"],
                "La Marqueza": ["3"],
                "Rafael Delgado Sede C": ["2"],
                "Salon Comunal La Paz Naranjos": ["3"],
                "Integ Rafael Delgado Salguero": ["1"],
                "Parroquial San Jose": ["1"],
                "Liceo Psicopedagogico Marco Fidel Suarez": ["1"],
                "Maria Cano": ["4"],
                "Cafam Santa Lucia": ["1"],
                "Diana Turbay": ["2"],
                "Alianza Quiroga": ["2"],
                "Estados Unidos De America": ["1"],
                "Torre Mayor": ["1"]
            },
            "Ciudad Bolivar": {
                "Lucero Del Sur": ["45"],
                "San Joaquin Del Vaticano": ["29"],
                "Pasquilla": ["6"],
                "El Tesoro": ["27"],
                "Mexico": ["36"],
                "Lucero Medio": ["22"],
                "Vistahermosa": ["43"],
                "La Acacia": ["37"],
                "Jerusalen el Tanque": ["31"],
                "Juan Pablo Ii": ["27"],
                "San Francisco": ["61"],
                "Candelaria La Nueva": ["67"],
                "Arborizadora Baja": ["44"],
                "Madelena": ["47"],
                "Ismael Perdomo": ["59"],
                "Mochuelo Alto": ["4"],
                "Mochuelo Bajo": ["7"],
                "Cordillera": ["6"],
                "Nueva Argentina": ["10"],
                "La Estancia": ["64"],
                "El Paraiso": ["25"],
                "Vereda Quiba": ["3"],
                "Manuela Beltran": ["15"],
                "Sierra Morena": ["43"],
                "Sotavento": ["27"],
                "Santo Domingo": ["25"],
                "Villa Gloria Sur": ["9"],
                "Galicia": ["61"],
                "Arborizadora Alta": ["33"],
                "Casavianca": ["14"],
                "Casona Del Libertador": ["38"],
                "Meissen": ["17"],
                "Potosi la Laguna": ["18"],
                "Altos De Jalisco": ["5"],
                "Estrella Del Sur": ["19"],
                "Caracoli": ["9"],
                "Santa Rosa": ["1"],
                "Brisas Del Volador": ["5"],
                "Divino Nino": ["6"],
                "Casa Grande": ["10"],
                "Montreal": ["6"],
                "Union Europea": ["4"],
                "San Francisco Sede B": ["15"],
                "San Francisco Sede A": ["9"],
                "Candelaria La Nueva Dos": ["23"],
                "Bonavista": ["18"],
                "Bella Flor": ["3"],
                "El Mirador": ["7"],
                "Las Quintas": ["2"],
                "Colegio Fanny Mikey": ["2"],
                "Marandu": ["1"],
                "Las Manas": ["1"],
                "Balmoral": ["1"],
                "La Coruna  Liceo Contadora": ["2"],
                "Tanquesierra Morena": ["1"],
                "Ices Las Brisas": ["1"],
                "Altos De La Estancia": ["1"],
                "Millan": ["1"],
                "Gran Plaza El Ensueno": ["26"],
                "Casa Linda Tunal Unidad 2": ["7"]
            },
            "Sumapaz": {
                "San Juan De Sumapaz": ["3"],
                "Nazareth": ["4"],
                "Betania": ["3"],
                "La Union": ["2"],
                "La Ye Santa Rosa": ["2"]
            }
        }
    },
    "Choco": {
        "Acandi": {},
        "Alto Baudo": {},
        "Bagado": {},
        "Bahia Solano": {},
        "Bajo Baudo": {},
        "Bojaya": {},
        "Canton De San Pablo": {},
        "Certegui": {},
        "Condoto": {},
        "El Atrato": {},
        "El Carmen De Atrato": {},
        "El Carmen Del Darien": {},
        "Istmina": {},
        "Jurado": {},
        "Litoral De San Juan": {},
        "Lloro": {},
        "Medio Atrato": {},
        "Medio Baudo": {},
        "Medio San Juan": {},
        "Novita": {},
        "Nuqui": {},
        "Rio Iro": {},
        "Rio Quito": {},
        "Riosucio": {},
        "San Jose Del Palmar": {},
        "Sipi": {},
        "Tado": {},
        "Union Panamericana": {},
        "Unguia": {},
        "Quibdo": {
            "Altagracia": {
                "Altagracia": ["1"]
            },
            "Barranco": {
                "Barranco": ["1"]
            },
            "Bella Luz": {
                "Bellaluz": ["1"]
            },
            "Alto Munguido": {
                "El Jaguo alto Munguido": ["1"]
            },
            "Boca De Tanando": {
                "Boca De Tanando": ["1"]
            },
            "Cabi": {
                "Pacurita": ["1"]
            },
            "Boca De Naurita": {
                "Boca De Naurita": ["1"]
            },
            "Calahorra": {
                "Calahorra": ["1"]
            },
            "Campobonito": {
                "Campobonito": ["1"]
            },
            "Guarando": {
                "Guarando": ["1"]
            },
            "Guadalupe": {
                "Guadalupe": ["1"]
            },
            "Guayabal": {
                "Guayabal": ["1"]
            },
            "19corresan Francisco De Icho": {
                "San Francisco De Icho": ["2"]
            },
            "El Tambo": {
                "El Tambo": ["1"]
            },
            "21correjitrado pueblo Nuevo": {
                "Gitrado": ["1"]
            },
            "El Fuerte": {
                "Sta Lucia Del Fuerte": ["1"]
            },
            "Las Mercedes": {
                "Las Mercedes": ["1"]
            },
            "Mojaudo": {
                "San Pedro Claver mojaudo": ["1"]
            },
            "La Troje": {
                "La Troje": ["1"]
            },
            "Naurita": {
                "Villa Del Rosario": ["1"]
            },
            "Negua": {
                "San Rafael De Negua": ["1"]
            },
            "Nemota": {
                "Boca De Nemota": ["1"]
            },
            "Puerto Murillo": {
                "San Antonio De Ichopto Murillo": ["1"]
            },
            "Sanceno": {
                "Sanceno": ["1"]
            },
            "Tagachi": {
                "Tagachi": ["2"]
            },
            "Tutunendo": {
                "Tutunendo": ["4"]
            },
            "Winando": {
                "Winando": ["1"]
            }
        }
    },
    "Huila": {
        "Neiva": {
            "Vega Larga": {
                "Vegalarga": ["6"]
            },
            "Rio Las Ceibas": {
                "Rio Las Ceibas": ["2"]
            },
            "Caguan": {
                "Caguan": ["13"]
            },
            "Fortalecillas": {
                "Fortalecillas": ["7"]
            },
            "Guacirco": {
                "Guacirco": ["3"]
            },
            "San Luis": {
                "San Luis": ["4"]
            },
            "Chapinero": {
                "Chapinero": ["2"]
            },
            "Aipecito": {
                "Aipecito": ["3"]
            }
        },
        "Pitalito": {
            "Occidental": {
                "Ienormal Superior Pitalito": ["17"],
                "Ienacional": ["26"],
                "Ie N S Sede Rodrigo Lara Bon": ["5"],
                "Ie Humberto Munoz Sd Ppal": ["12"]
            },
            "Oriental": {
                "Ie Maria Montessori": ["14"],
                "Ie Humberto Munoz Sede Nogales": ["12"],
                "Cic Venecia": ["2"]
            },
            "Centro": {
                "Colla Presentacion": ["22"],
                "Esccentral": ["15"],
                "Iewinnipeg": ["13"],
                "Ievictor Manuel Meneses": ["10"]
            },
            "Sur": {
                "Iempalmontessori": ["24"],
                "Coliseo Cubierto": ["1"]
            },
            "Bruselas": {
                "Bruselas": ["31"]
            },
            "Chillurco": {
                "Chillurco": ["8"]
            },
            "Guacacallo": {
                "Guacacallo": ["7"]
            },
            "La Laguna": {
                "La Laguna": ["5"]
            },
            "Criollo": {
                "Criollo": ["12"]
            },
            "Palmarito": {
                "Palmarito": ["5"]
            },
            "Regueros": {
                "Regueros": ["6"]
            },
            "Charguayaco": {
                "Charguayaco": ["10"]
            }
        },
        "Acevedo": {},
        "Agrado": {},
        "Aipe": {},
        "Algeciras": {},
        "Altamira": {},
        "Baraya": {},
        "Campoalegre": {},
        "Colombia": {},
        "El Pital": {},
        "Elias": {},
        "Garzon": {},
        "Gigante": {},
        "Guadalupe": {},
        "Hobo": {},
        "Iquira": {},
        "Isnos": {},
        "La Argentina": {},
        "La Plata": {},
        "Nataga": {},
        "Oporapa": {},
        "Paicol": {},
        "Palermo": {},
        "Palestina": {},
        "Rivera": {},
        "Saladoblanco": {},
        "San Agustin": {},
        "Santa Maria": {},
        "Suaza": {},
        "Tarqui": {},
        "Tello": {},
        "Teruel": {},
        "Tesalia": {},
        "Timana": {},
        "Villavieja": {},
        "Yaguara": {}
    },
    "Magdalena": {
        "Santa Marta": {
            "01loc1tayrona Spedro Alejandr": {
                "Ied Liceo Del Sur Victor De Lima": ["19"],
                "Ied Tec Del Sur Victor De Lima Sd 3 Mm": ["15"],
                "Ied Jacqueline Kennedy": ["30"],
                "Ied Jacqueline Kennedy Sd 2 Pre La Cand": ["17"],
                "Iedel Pando": ["37"],
                "Sd Jose Celedon Garcia  Ied El Pando": ["16"],
                "Iedel Parque": ["47"],
                "Ied Libano": ["29"],
                "Iedsan Fcojavier De Garago": ["32"],
                "Universidad Antonio Narino": ["2"],
                "Universidad Del Magdalena": ["7"],
                "Ied 11 De Noviembre": ["5"],
                "Ied Normal Superior San Pedro": ["35"],
                "Ied Juan Miguel De Osuna": ["25"],
                "Iedaluna Mega Colegio Cisne": ["21"],
                "Bonda": ["22"],
                "Guachaca": ["18"],
                "Calabazo": ["4"]
            },
            "02loc2histrodrigo De Bastidas": {
                "Iedhugo J Bermudez": ["27"],
                "Iedhugo Jbermudez Slaesp": ["23"],
                "Iedliceo Samario": ["23"],
                "Liceo Samario Sd2 Bavboston": ["20"],
                "Instituto La Milagrosa": ["24"],
                "Ied Liceo Celedon": ["18"],
                "Ied La Industrial": ["14"],
                "Iedfcode Paula Santander": ["20"],
                "Iedmagdalena": ["33"],
                "Iedmagdsd3 Escmixmpal": ["14"],
                "Ied Rodrigo Bastidas": ["40"],
                "Hogar Infantil Bastidas": ["16"],
                "Ied Rodrigo De Bastidas Sd 17 De Dic": ["12"],
                "Iednicolas Buenaventura": ["18"],
                "Ied Ondas Del Caribe": ["6"],
                "Ied Laura Vicuna": ["20"],
                "Iedescnormal Supmaria Aux": ["18"],
                "Ied Del Carmen": ["21"],
                "Ied Rodrigo Galvan De Bastidas": ["4"],
                "Iedmadre Laura": ["21"],
                "Iedliceo Del Norte": ["37"],
                "Ied Alfonso Lopez": ["26"],
                "Taganga": ["10"]
            },
            "03loc3turistica Perla Del Carib": {
                "Iedjose Laborde Gnecco": ["34"],
                "Ied Camilo Torres De Gaira": ["32"],
                "Ied Camilo Torres De Gaira Sd Isabel Pf": ["21"],
                "Iedla Paz": ["MEGA COL. LA PAZ"],
                "Ied Cristo Rey": ["5"],
                "Museo Mundo Marino": ["5"],
                "Minca": ["4"],
                "La Tagua": ["2"],
                "El Campano": ["2"]
            }
        },
        "Cienaga": {
            "Mar Caribe": {
                "Ie Isaac J Pereira": ["27"],
                "Infotep": ["19"],
                "Col Virginia Gomez Sd Cuatro": ["14"],
                "Iela Maria": ["12"],
                "Iela Alianza": ["3"]
            },
            "San Juan De Cordoba": {
                "Ie San Juan Del Cordoba": ["31"],
                "Ietcomercio Virginia Gomez": ["19"],
                "Ieenoc Mendoza Riascos": ["16"]
            },
            "Cienaga Grande": {
                "Ieliceo Moderno Del Sur": ["20", "SD.4"],
                "Ieel Carmen": ["12"],
                "Ie 12 De Octubre": ["3"]
            },
            "Nuevo Horizonte": {
                "Iemanuel J Del Castillo": ["20"]
            },
            "05corrg  Sn Pedro De La Sierra": {
                "San Pedro De La Sierra": ["4"]
            },
            "Palmor": {
                "Palmor": ["7"]
            },
            "Siberia": {
                "Siberia": ["2"]
            },
            "Sevillano": {
                "Sevillano": ["6"]
            },
            "Cordobita": {
                "Cordobita": ["3"]
            },
            "San Javier": {
                "San Javier": ["2"]
            }
        },
        "El Banco": {
            "Sur": {
                "Col Fco Jose De Caldas": ["21"]
            },
            "Central": {
                "Col Santa Teresa De Jesus": ["19"]
            },
            "Norte": {
                "Ied Jose Benito Barros Palo": ["25"],
                "Col Arcesio Calis Amador": ["11"]
            },
            "Aguaestrada": {
                "Aguaestrada": ["3"]
            },
            "Algarrobal": {
                "Algarrobal": ["4"]
            },
            "06correg 3 Barranco De Chilloa": {
                "Barranco De Chilloa": ["3"],
                "Botillero": ["2"]
            },
            "Belen": {
                "Belen": ["6"]
            },
            "Cano De Palma": {
                "Cano De Palma": ["4"]
            },
            "El Cedro": {
                "El Cedro": ["3"]
            },
            "El Cerrito": {
                "El Cerrito": ["4"]
            },
            "El Trebol": {
                "El Trebol": ["3"]
            },
            "12corr 9 Hatillo De La Sabana": {
                "Hatillo De La Sabana": ["3"]
            },
            "13corregimie 10 Los Negritos": {
                "Los Negritos bastidas": ["3"],
                "Mata De Cana": ["1"]
            },
            "Menchiquejo": {
                "Menchiquejo": ["4"]
            },
            "San Felipe Eduardo": {
                "San Felipe Eduardo": ["4"]
            },
            "San Jose": {
                "San Jose": ["2"]
            },
            "San Roque": {
                "San Roque": ["3"]
            },
            "Tamalamequito": {
                "Tamalamequito": ["4"],
                "Sabanas De Malpica": ["2"]
            }
        },
        "Algarrobo": {},
        "Aracataca": {},
        "Ariguani": {},
        "Cerro De San Antonio": {},
        "Chibolo": {},
        "Concordia": {},
        "El Pinon": {},
        "El Reten": {},
        "Fundacion": {},
        "Guamal": {},
        "Nueva Granada": {},
        "Pedraza": {},
        "Pijino Del Carmen": {},
        "Pivijay": {},
        "Plato": {},
        "Pueblo Viejo": {},
        "Remolino": {},
        "Sabanas De San Angel": {},
        "Salamina": {},
        "San Sebastian De Buenavista": {},
        "San Zenon": {},
        "Santa Ana": {},
        "Santa Barbara De Pinto": {},
        "Sitionuevo": {},
        "Tenerife": {},
        "Zapayan": {},
        "Zona Bananera": {}
    },
    "Narino": {
        "Pasto": {
            "Catambuco": {
                "Catambuco": ["23"],
                "Alto Casanare": ["2"],
                "Campanero": ["2"],
                "La Victoria": ["2"]
            },
            "Genoy": {
                "Genoy": ["8"]
            },
            "Mapachico": {
                "Mapachico": ["3"],
                "Anganoy": ["11"],
                "Villa Maria": ["1"]
            },
            "Cabrera": {
                "Cabrera": ["4"]
            },
            "Obonuco": {
                "Obonuco": ["9"]
            },
            "Santa Barbara": {
                "Santa Barbara": ["4"],
                "Jurado Centro": ["2"],
                "Los Angeles": ["2"],
                "La Esperanza": ["2"],
                "Las Encinas": ["2"],
                "La Concepcion": ["2"]
            },
            "El Socorro": {
                "Bajo Casanare": ["2"],
                "El Socorro": ["3"],
                "San Gabriel": ["1"]
            },
            "La Laguna": {
                "La Laguna": ["7"]
            },
            "Jamondino": {
                "El Rosario": ["6"],
                "Jamondino": ["6"]
            },
            "Buesaquillo": {
                "Buesaquillo": ["10"],
                "Cujacal Centro": ["2"],
                "Cujacal": ["1"],
                "San Francisco": ["2"]
            },
            "Morasurco": {
                "Morasurco": ["3"]
            },
            "El Encano": {
                "El Encano": ["8"],
                "Motilon": ["1"],
                "Santa Lucia": ["1"],
                "Santa Rosa Del Encano": ["1"]
            },
            "Gualmatan": {
                "Gualmatan": ["3"]
            },
            "La Caldera": {
                "La Caldera": ["2"],
                "Pradera Bajo": ["1"]
            },
            "Mocondino": {
                "Mocondino": ["7"],
                "Canchala": ["3"]
            },
            "Jongovito": {
                "Jongovito": ["6"]
            },
            "San Fernando": {
                "San Fernando": ["5"]
            }
        },
        "Gualmatan": {
            "De Cuatis": {
                "Cuatis": ["2"]
            }
        },
        "Ipiales": {
            "La Victoria": {
                "La Victoria": ["12"]
            }
        },
        "Aldana": {},
        "Ancuya": {},
        "Arboleda": {},
        "Barbacoas": {},
        "Belen": {},
        "Buesaco": {},
        "Chachagui": {},
        "Colon": {},
        "Consaca": {},
        "Contadero": {},
        "Cuaspud": {},
        "Cumbal": {},
        "Cumbitara": {},
        "El Charco": {},
        "El Penol": {},
        "El Rosario": {},
        "El Tablon": {},
        "El Tambo": {},
        "Francisco Pizarro": {},
        "Funes": {},
        "Guachucal": {},
        "Guaitarilla": {},
        "Iles": {},
        "Imues": {},
        "La Cruz": {},
        "La Florida": {},
        "La Llanada": {},
        "La Tola": {},
        "La Union": {},
        "Leiva": {},
        "Linares": {},
        "Los Andes": {},
        "Magui Payan": {},
        "Mallama": {},
        "Mosquera": {},
        "Narino": {},
        "Olaya Herrera": {},
        "Ospina": {},
        "Policarpa": {},
        "Potosi": {},
        "Providencia": {},
        "Puerres": {},
        "Pupiales": {},
        "Ricaurte": {},
        "Roberto Payan": {},
        "Samaniego": {},
        "San Bernardo": {},
        "San Jose De Alban": {},
        "San Lorenzo": {},
        "San Pablo": {},
        "San Pedro De Cartago": {},
        "Sandona": {},
        "Santa Barbara": {},
        "Santacruz": {},
        "Sapuyes": {},
        "Taminango": {},
        "Tangua": {},
        "Tumaco": {},
        "Tuquerres": {},
        "Yacuanquer": {}
    },
    "Risaralda": {
        "Pereira": {
            "Villa Santana": {
                "Insteducvillasantana": ["27"],
                "Ie Compartir Las Brisas": ["10"],
                "Ie Jaime Salazar Robledo": ["12"]
            },
            "Oriente": {
                "Ctroedujorge Eliecer Gaitan": ["25"],
                "Instituto Kennedy": ["31"],
                "Esc Gral Mosquera Sd 2 Ie H Velez M": ["10"]
            },
            "Villavicencio": {
                "Ie Marco Fidel Suarez": ["17"],
                "Colegio Basico Centenario": ["16"]
            },
            "Rio Otun": {
                "Insteducarlota Sanchez": ["29"],
                "Insteducalfredo Garcia": ["39"],
                "Colegio San Jose": ["19"],
                "Insteducarlota Sanchez 2": ["21"],
                "Insteducarlota Sanchez 3": ["15"],
                "Ie Augusto Zuluaga Trujillo": ["2"]
            },
            "Universidad": {
                "Colegio Gimnasio Pereira": ["19"],
                "Complejo Educ La Julita": ["13"],
                "Univtecnologica De Pereira": ["18"]
            },
            "Centro": {
                "Insteducativa Boyaca": ["18"],
                "Centro Cultural Lucy Tejada": ["51"],
                "Coloficial La Inmaculada": ["33"],
                "Sena": ["38"],
                "Gobernacion De Risaralda": ["40"],
                "Ie Pablo Emilio Cardona": ["2"],
                "Ie Maria Dolorosa": ["3"]
            },
            "San Nicolas": {
                "Colegio San Nicolas": ["23"]
            },
            "El Jardin": {
                "Colegio Normal Superior": ["19"]
            },
            "Boston": {
                "Colegio Sur Oriental": ["24"],
                "Insteducativa Providencia": ["16"]
            },
            "El Rocio": {
                "Centro Educel Rocio": ["6"]
            },
            "Del Cafe": {
                "Insteducativa Ciudad Boquia": ["43"],
                "Ie Hugo Angel Jaramillo": ["5"]
            },
            "Ferrocarril": {
                "Liceo Cial Aquilino Bedoya": ["22"]
            },
            "El Poblado": {
                "Ie Remigio Antonio Canarte": ["21"],
                "Iesamaria": ["27"]
            },
            "Consota": {
                "Centro Educnaranjito": ["25"],
                "Caseta Comunal": ["8"]
            },
            "El Oso": {
                "Colegio Oficial Ciudadela Cuba": ["37"],
                "Col Rodrigo Arenas Betancur": ["6"]
            },
            "Perla Del Otun": {
                "Ctro Educbayron Gaviria": ["42"]
            },
            "San Joaquin": {
                "Colegio Basico San Joaquin": ["29"],
                "Colsoffy Hernandez Marin": ["13"],
                "Ie Hans Drews Arango": ["5"]
            },
            "Olimpica": {
                "Unilibre De Pereira Belmonte": ["21"],
                "Ctro Educluis Carlos Gonzalez": ["19"],
                "Colbasico Alfonso Jaramillo": ["31"]
            },
            "Cuba": {
                "Insteducescolar San Fernando": ["39"],
                "Centro Educativo Juan Xxiii": ["24"],
                "Ie Jesus Maria Ormaza": ["2"]
            },
            "Altagracia": {
                "Altagracia": ["14"]
            },
            "La Florida": {
                "La Florida": ["7"],
                "San Jose": ["3"]
            },
            "La Bella": {
                "El Chocho": ["3"],
                "La Bella": ["5"],
                "Mundo Nuevo": ["4"]
            },
            "23corrtribunas Corcega": {
                "La Graminea": ["3"],
                "El Manzano": ["2"],
                "Ie Jose Antonio Galan": ["13"]
            },
            "Arabia": {
                "Arabia": ["7"],
                "Betulia": ["3"],
                "Yarumal": ["2"]
            },
            "25cor Puerto Caldaspuente Bol": {
                "Puerto Caldas Puente Bolivar": ["9"]
            },
            "Caimalito": {
                "Caimalito": ["10"]
            },
            "Combia Baja": {
                "Combia Baja": ["9"],
                "La Honda": ["2"]
            },
            "Combia Alta": {
                "La Convencion": ["3"],
                "Combia Alta": ["6"]
            },
            "Morelia": {
                "Morelia": ["7"]
            },
            "31corr La Estrella La Palmilla": {
                "La Estrella La Palmilla": ["5"]
            },
            "Cerritos": {
                "Cerritos": ["19"],
                "Ce 30 De Agosto": ["3"]
            }
        },
        "Belen De Umbria": {
            "Taparcal": {
                "Baldelomar": ["1"],
                "Taparcal": ["4"]
            },
            "Columbia": {
                "Columbia O La Florida": ["3"]
            }
        },
        "Dosquebradas": {
            "Comuna 2": {
                "Int Santa Sofia": ["32"],
                "Escuela La Aurora": ["2"],
                "Colegio Villa Fanny": ["2"],
                "Inst Agustin Nieto Caballero": ["22"]
            },
            "Comuna 3": {
                "Megacolegio Bernardo Lopez Perez": ["17"],
                "Escuela Policarpa Salavarriet": ["16"],
                "Colegio Nueva Republica": ["16"]
            },
            "Comuna 4": {
                "Ie Santa Isabel": ["20"]
            },
            "Comuna 6": {
                "Ie Maria Auxiliadora": ["13"]
            },
            "Comuna 7": {
                "Colegio Pablo Vi": ["27"]
            },
            "Comuna 8": {
                "Escuela San Diego": ["15"],
                "Colegio Nueva Granada": ["6"],
                "Casa De La Cultura": ["1"]
            },
            "Comuna 11": {
                "Colegio Juan Manuel Gonzalez": ["28"],
                "Colegio Hogar Nazareth": ["2"],
                "Colegio Cristo Rey": ["7"]
            },
            "Comuna 12": {
                "Colntra Sra De Guadalupe": ["27"],
                "Colegio Salesiano": ["46"]
            },
            "13corrserrania Alto Del Nudo": {
                "Serrania Alto Nudo la Union": ["5"]
            },
            "Las Marcadas": {
                "Las Marcadas alto Del Toro": ["1"],
                "Las Marcadas  Frailes": ["6"]
            }
        },
        "La Celia": {
            "Patio Bonito": {
                "Patio Bonito": ["2"]
            }
        },
        "Santa Rosa De Cabal": {
            "El Espanol": {
                "El Espanol": ["5"]
            },
            "Santa Barbara": {
                "Santa Barbara": ["3"]
            },
            "El Manzanillo": {
                "El Manzanillo": ["2"]
            },
            "09corr Las Mangas  El Cedralito": {
                "Del Sur Las Mangascedralito": ["2"]
            },
            "10corrla Capilla san Juan": {
                "La Capilla san Juan": ["2"]
            }
        },
        "Apia": {},
        "Balboa": {},
        "Guatica": {},
        "La Virginia": {},
        "Marsella": {},
        "Mistrato": {},
        "Pueblo Rico": {},
        "Quinchia": {},
        "Santuario": {}
    },
    "Norte De San": {
        "Cucuta": {
            "Centro": {
                "Col San Jose Sede Mercedes Abrego": ["48"],
                "Col Sagrado Sede Antonia Santo": ["32"],
                "Col Sagrado Corazon De Jesus": ["40"],
                "Colegio Antonio Narino": ["16"]
            },
            "Centro Oriental": {
                "Salesiano": ["54"],
                "Mercedes Abrego Sede Jardin Nacional": ["46"],
                "Universidad Francisco De Paula Santander": ["31"],
                "Colegio La Salle": ["27"],
                "Instituto Bilingue Londres": ["21"]
            },
            "Sur Oriental": {
                "Col Pablo Correa Sede Club De": ["28"],
                "Colfrancisco Jose Caldas": ["39"],
                "Club De Leones Sede Iebocono": ["16"],
                "Escuela San Mateo": ["35"],
                "Fco Jose De Caldas Sede San Pe": ["11"]
            },
            "Oriental": {
                "Escmarco Fidel Suarez": ["18"],
                "Col Pablo Correa Sede Maria Au": ["29"],
                "Colegio Simon Bolivar": ["30"],
                "Colegio Padre Luis Variara": ["32"],
                "Col Bas Club De Leones No 29": ["12"],
                "Iemonjaime Prieto Amaya": ["7"],
                "Colcarlos Perez Escalante": ["19"],
                "Centro Int Ciudadana Prados Del Este": ["9"]
            },
            "Nororiental": {
                "Sena": ["33"],
                "Guaimaral Shermogenes Maza": ["36"],
                "Inem": ["52"],
                "Col Andres Bello": ["22"],
                "Col Oriental No 26": ["24"],
                "Inem Sede Miguel Muller": ["17"],
                "Colbasico Guaimaral Nro 25": ["12"]
            },
            "Norte": {
                "Col Andres Bello Sede Laura Vi": ["30"],
                "Col Municipal Aeropuerto": ["44"],
                "Col Eustorgio Colmenares Bauti": ["30"],
                "Escuela El Cerrito": ["4"],
                "Inst Educativa San Jose": ["27"],
                "Col Toledo Plata": ["25"]
            },
            "Nor Occidental": {
                "Santos Apostoles Sede Kennedy": ["35"],
                "Col San Bartolome": ["26"],
                "Col Integrado Juan Atalaya": ["31"],
                "Col Mariano Ospina Rodriguez": ["44"],
                "Col Buenos Aires": ["19"],
                "Col Basico Camilo Daza": ["11"],
                "Centro Tecnologico De Cucuta": ["15"],
                "Colconcejo De Cucuta": ["19"]
            },
            "Occidental": {
                "Escno38 Teodoro Gutierrez C": ["29"],
                "Ie Padre Manuel Briceno Jauregui": ["46"],
                "Col Rafael Uribe Uribe": ["41"],
                "Inst Tecn Carlos Ramirez Paris": ["39"],
                "Col Hermano Rodulfo Eloy": ["25"],
                "Carlos Ramirez Sede Ntra Sra De Mongui": ["21"],
                "Ieel Rodeo": ["13"],
                "Ie Pedro Cuadro Herrera": ["1"]
            },
            "Sur Occidental": {
                "Col Ntra Sra De Belen 23 Varon": ["41"],
                "Col Julio Perez Ferrero": ["32"],
                "Cmanuel Antonio Fernandez De": ["24"],
                "Col Ntra Sra De Belen La Divina Pastora": ["17"],
                "Col Garcia Herreros Sede Esc 28 Febrero": ["16"],
                "Colbasico Los Alpes": ["10"]
            },
            "Sur": {
                "Santo Angel Sede Jose Eusebio": ["19"],
                "Col Luis Carlos Galan Sarmient": ["30"],
                "Ctro Edu Fco De Paula Andrade No 9": ["40"],
                "Alejandro Gutierrez Sede San J": ["13"]
            },
            " Sector Norte": {
                "Puerto Villamizar": ["1"]
            },
            "12correg Sector Noroccidental": {
                "Banco De Arena": ["2"],
                "Palmarito": ["2"]
            },
            "13correg Sector Occidental": {
                "La Buena Esperanza": ["11"],
                "Limoncito": ["2"]
            },
            "Sector Central": {
                "Aguaclara": ["11"]
            },
            "Sector Oriental": {
                "Guaramito": ["3"],
                "Ricaurte": ["2"],
                "San Faustino": ["3"]
            },
            "Sector Sur": {
                "El Carmen De Tonchala": ["2"],
                "San Pedro": ["3"]
            }
        },
        "Ocana": {
            "Central Jose E Caro": {
                "Escuela Normal De Senoritas": ["16"],
                "Complejo Historico": ["13"],
                "Sede David Haddad Salcedo": ["12"]
            },
            "Nororiental Cristo Rey": {
                "Polideportivo Cristo Rey": ["16"]
            },
            "Suroriental Olaya H": {
                "Polideportivo La Monumental": ["15"],
                "Concentracion Angelino Duran": ["19"]
            },
            "Suroccidental Adolfo M": {
                "Escuela Marabel": ["11"],
                "Cancha Juan Xxiii": ["12"],
                "Cancha Marabel": ["13"],
                "Colegio Alfonso Lopez": ["9"]
            },
            "Fco Fernandez De Cont": {
                "Instituto Tecnico Industrial": ["14"]
            },
            "Ciudadela Norte": {
                "Escuela Santa Clara": ["17"],
                "Colegio La Salle": ["11"]
            },
            "Aguas Claras": {
                "Aguas Claras": ["4"]
            },
            "Agua De La Virge": {
                "Agua De La Virgen": ["2"]
            },
            "Buenavista": {
                "Buenavista": ["3"]
            },
            "Otare": {
                "Otare": ["3"]
            },
            "Cerro Las Flores": {
                "Cerro De Las Flores": ["1"]
            },
            "Espiritusanto": {
                "Espiritusanto": ["1"]
            },
            "13correg Alto Patiospalogrande": {
                "Alto De Los Patios": ["1"],
                "Palogrande": ["1"]
            },
            "La Ermita": {
                "La Ermita": ["2"]
            },
            "La Floresta": {
                "La Floresta": ["1"]
            },
            "Las Chircas": {
                "Las Chircas": ["1"]
            },
            "Las Liscas": {
                "Las Liscas": ["1"]
            },
            "18correg Llano De Los Trigos": {
                "Llano De Los Trigos": ["1"]
            },
            "Mariquita": {
                "Mariquita": ["1"]
            },
            "Portachuelo": {
                "Portachuelo": ["1"]
            },
            "Pueblo Nuevo": {
                "Pueblo Nuevo": ["2"]
            },
            "Quebrada La Espe": {
                "Quebrada De La Esperanza": ["2"]
            },
            "Venadillo": {
                "Venadillo": ["1"]
            }
        }
    },
    "Quindio": {
        "Buenavista": {},
        "Circasia": {},
        "Cordoba": {},
        "Genova": {},
        "La Tebaida": {},
        "Montenegro": {},
        "Pijao": {},
        "Quimbaya": {},
        "Salento": {},
        "Armenia": {
            "Centenario": {
                "Ie Teresita Montes": ["24"],
                "Ie Laura Vicuna": ["21"],
                "Ie Instituto Tecnico Industria": ["9"],
                "Ie Simon Rodriguez": ["7"],
                "Coliseo Del Sur": ["2"]
            },
            "Rufino Jose Cuervo": {
                "Ie Rufino Sur Sede Madre Marce": ["28"],
                "Ie Rosana Londono": ["16"],
                "Ie Marcelino Champagnat": ["17"],
                "Ie Zuldemayda": ["16"],
                "Ie Los Quindos": ["21"],
                "Ie Ciudadela Del Sur": ["23"],
                "Ie Juan Xxiii": ["11"]
            },
            "Alfonso Lopez": {
                "Ie Nuestra Senora De Belen": ["21"],
                "Ie La Adiela Sede La Cecilia": ["27"],
                "Ie Ciudad Dorada": ["12"],
                "Ie Las Colinas": ["8"]
            },
            "Francisco De Paula S": {
                "Ie Jesus Maria Ocampo": ["20"],
                "Ie Camilo Torres": ["15"],
                "Ie Luis Bernal Giraldo": ["7"]
            },
            "El Bosque": {
                "Ie Gustavo Matamoros D Costa": ["25"],
                "Ie Rufino Cuervo Cent Sede Ant": ["9"]
            },
            "San Jose": {
                "Ie Rufino Jose Cuervo Centro": ["22"],
                "Ie Escuela Normal Superior": ["15"],
                "Ie Camara Junior": ["19"],
                "Ie Camara Junior Sede La Pavon": ["8"],
                "Ie Ciudadela De Occidente": ["10"],
                "Hogar Infantil Cdv La Union": ["15"]
            },
            "Cafetero": {
                "Ie Ciudad Armenia": ["20"],
                "Centro Administrativo Municipa": ["38"],
                "Col Sagrado Corazon De Jesus B": ["20"],
                "Centro Marcelino Champagnat": ["3"]
            },
            "Libertadores": {
                "Ie Cristobal Colon": ["20"],
                "Ie Gran Colombia": ["12"],
                "Cdc Los Libertadores": ["1"]
            },
            "Fundadores": {
                "Colegio Jorge Isaac": ["23"],
                "Ie Inem Jose Celestino Mutis": ["16"],
                "Ie Casd Sede Santa Eufracia": ["27"]
            },
            "Quimbaya": {
                "Coliseo Sena": ["26"],
                "Universidad Del Quindio": ["40"],
                "Ie Republica De Francia": ["10"],
                "Escuela De Administra Eam": ["15"],
                "Fundacion Quindiana De Atencion Integral": ["5"],
                "Sena Centro Agroindutrial": ["3"],
                "Ie Eudoro Granada Sd Fundadores": ["1"],
                "Ie Santa Teresa De Jesus Sd La Florida": ["1"]
            },
            "El Caimo": {
                "El Caimo": ["6"]
            }
        },
        "Calarca": {
            "Barcelona": {
                "Barcelona": ["17"]
            }
        },
        "Filandia": {
            "La India": {
                "La India": ["2"]
            }
        }
    },
    "Santander": {
        "Bucaramanga": {
            "Norte": {
                "Ie Maipore Sede B": ["24"],
                "Ie Tec Rafael Garcia Herreros": ["28"],
                "Ie Cafe Madrid": ["26"],
                "Ie Los Colorados": ["22"],
                "Salon Comunal  El Pablon": ["2"],
                "Ie Maipore Sede C": ["14"],
                "Ie Santo Angel": ["3"]
            },
            "Nororiental": {
                "Inst De Prom Soc Del Norte Sed": ["32"],
                "Orden De Los Clerigos Reg Somascos": ["24"],
                "Ie Damaso Zapata Sede C": ["4"],
                "Ie Rural Bosconia": ["1"],
                "Ie La Juventud Sede A": ["2"]
            },
            "San Francisco": {
                "Ie Damaso Zapata Sede A": ["40"],
                "Col Franciscano Del Virrey Sol": ["33"],
                "Col Santander Sede A": ["44"],
                "Corp Educativa Ased": ["12"],
                "Col Americano": ["18"],
                "Ie Comuneros": ["32"],
                "Ie Piloto Simon Bolivar": ["24"],
                "Col Santander Sede C": ["5"],
                "Ie Club Union Sede A": ["2"]
            },
            "Occidental": {
                "Inst Tec Salesiano Eloy Valenz": ["41"],
                "I Integrado Jorge Eliecer Gaitan Sede A": ["14"],
                "Col Francisco De Paula Sder S A": ["9"],
                "Col Francisco De Paula Sder S B": ["8"],
                "Central De Abastos": ["11"]
            },
            "Garcia Rovira": {
                "Ie Andres Paez De Sotomayor": ["19"],
                "Col Cooperativo De Bucaramanga": ["31"],
                "Sena Sede Salud": ["28"],
                "Ie Campo Hermoso": ["8"]
            },
            "La Concordia": {
                "Col Jorge Ardila Duarte Sede A": ["22"],
                "Inst San Jose De La Salle": ["26"],
                "Col Tec Empresarial Jose Maria": ["16"],
                "Col Aurelio Martinez Mutis Sed B": ["10"],
                "Gimnasio Superior Empresarial": ["18"]
            },
            "La Ciudadela": {
                "Col Aurelio Martinez Mutis Sed A": ["15"],
                "Ie Nuestra Senora Del Pilar Se A": ["27"],
                "Unidades Tecnologicas  De Sant": ["25"]
            },
            "Sur Occidente": {
                "Ie Nuestra Senora Del Pilar Se B": ["16"],
                "Ie Nuestra Senora Del Pilar Se E": ["12"],
                "Ie Inem Custodio Garcia Rov Sd H": ["11"]
            },
            "La Pedregoza": {
                "Inst La Libertad": ["20"],
                "Col Inem Sede G": ["8"],
                "Col Integrado Jorge Isaac": ["7"]
            },
            "Provenza": {
                "Ie Provenza": ["18"],
                "Ie Inem Custodio Garcia Rov Sd E": ["29"],
                "Jardin Infantil Casita De Choc": ["6"],
                "Ie Inem Custodio Garcia Rov Sd A": ["53"]
            },
            "Sur": {
                "Col Adventista Libertad": ["40"],
                "Ie Medalla Milagrosa": ["11"]
            },
            "Cabecera Del Llano": {
                "Col De Las Americas": ["16"],
                "Col San Pedrito": ["23"],
                "Universidad Autonoma De Bucaramanga": ["32"],
                "Col San Pedro Claver": ["43"],
                "Eforsalud": ["6"],
                "Colegio La Presentacion": ["5"]
            },
            "Oriental": {
                "Esc Normal Superior Sede A": ["49"],
                "Esc Normal Superior Sede C": ["19"],
                "Col Psicopedag Carl Rogers": ["14"],
                "Coop Especializ De Educ De Comfenalco": ["25"],
                "Universidad Coop De Colombia": ["41"],
                "Ie Las Americas": ["28"],
                "Cent Educ Cajasan Bicentenario Sede B": ["6"]
            },
            "Morrorico": {
                "Ie Oriente Miraflores Sede A": ["24"],
                "Ie Oriente Miraflores Sede C": ["7"]
            },
            "Centro": {
                "Gobernacion De Santander": ["23"],
                "Corp Universitaria Uniciencia": ["28"],
                "Col Nuestra Senora De Fatima": ["14"]
            },
            "Lagos Del Cacique": {
                "Inst Caldas": ["43"],
                "Col Nuestra Senora Del Rosario": ["5"]
            },
            "Mutis": {
                "Ie Jose Celestino Mutis": ["44"],
                "Ie Luis Carlos Galan Sarmiento": ["13"],
                "Ie Nuestra Senora Del Pilar Se C": ["6"]
            }
        },
        "Barrancabermeja": {
            "10correg La Fortuna Autopista": {
                "La Fortuna Autopista": ["5"]
            },
            "11corre Meseta De San Rafael": {
                "Esc Meseta De San Rafael Sede A": ["2"]
            },
            "12correg San Rafael De Chucuri": {
                "Col San Rafael De Chucuri": ["2"]
            },
            "13correg Cienaga Del Opon": {
                "Escuela Cienaga De Opon": ["1"]
            },
            "El Centro": {
                "Col Blanca Duran De Padilla Sede A": ["23"]
            },
            "El Llanito": {
                "El Llanito": ["6", "1"]
            }
        },
        "Floridablanca": {
            "01com1 Floridacasco Antiguo": {
                "Instituto Gabriela Mistral": ["46"],
                "Polidep Jose Elias Puyana": ["22"],
                "Col Jose Elias Puyana Sede A": ["29"],
                "Col Jose Elias Puyana Sed B": ["17"]
            },
            "Canaveralversalles": {
                "Colegio Reina De La Paz": ["18"],
                "Colegio Nuevo Cambridge": ["42"],
                "Colegio Panamericano": ["3"],
                "Colegio Vicente Azuero Sd D Rio Frio": ["2"],
                "Unab Campus El Bosque": ["11"]
            },
            "Bucaricacaracoli": {
                "Instituto Caracoli": ["11"],
                "Instituto Gabriel Garcia Marq": ["20"]
            },
            "Caldas Reposo": {
                "Colegio Isidro Caballero Sedeb": ["12"],
                "Instituto Antonio Jose De Suc": ["17"],
                "Instituto San Bernardo": ["13"],
                "Francisco Jose D Caldas I Minca Sede B": ["5"],
                "Instituto Jose Antonio Galan": ["4"],
                "Instituto La Trinidad Sede B": ["9"],
                "Instituto Fe Y Alegria": ["18"]
            },
            "Bosque Molinos": {
                "Instituto El Progreso Sede D": ["8"],
                "Salon Comunal Bbarrio Molinos Bajos": ["2"]
            },
            "Lagos Bellavista": {
                "Instituto Rafael Pombo": ["16"],
                "Colegio Cajasan": ["21"],
                "Colegio Vicente Azuero Sede B": ["5"],
                "Colegio Vicente Azuero Sede C": ["5"],
                "Colegio Vicente Azuero Sede A": ["13"]
            },
            "07com 7 Villabelsanta Ana": {
                "Instituto Domingo Sabio": ["18"],
                "Colegio Metropolitano Del Sur": ["12"],
                "Instituto Madre Del Buen Cons": ["17"],
                "Colegio Metropolitano Santa A": ["19"]
            },
            "La Cumbre El Carmen": {
                "Colegio Gonzalo Jimenez Navas": ["30"],
                "Col Microempresarial El Carme Sd C": ["13"],
                "Instituto La Cumbre": ["33"],
                "Col Jose Elias Puyana Sed C": ["10"],
                "Col Microempresarial El Carme Sd B": ["14"]
            }
        },
        "Gambita": {
            "La Palma": {
                "Correg La Palma": ["2"]
            }
        },
        "Oiba": {
            "Puente Llano": {
                "Puente De Llano": ["2"]
            }
        },
        "Suaita": {
            "Del Sector 2": {
                "Olival": ["3"],
                "Vado Real": ["5"],
                "Tolota": ["2"]
            },
            "Del Sector 1": {
                "San Jose De Suaita": ["3"]
            }
        },
        "Velez": {
            "01corr Alto Jordan  Gualilo": {
                "Alto Jordan": ["2"],
                "Gualilo": ["2"]
            }
        },
        "Aguada": {},
        "Albania": {},
        "Aratoca": {},
        "Barbosa": {},
        "Barichara": {},
        "Betulia": {},
        "Cabrera": {},
        "California": {},
        "Capitanejo": {},
        "Carcasi": {},
        "Cepita": {},
        "Cerrito": {},
        "Charala": {},
        "Charta": {},
        "Chima": {},
        "Chipata": {},
        "Cimitarra": {},
        "Concepcion": {},
        "Confines": {},
        "Contratacion": {},
        "Coromoro": {},
        "Curiti": {},
        "El Carmen De Chucuri": {},
        "El Guacamayo": {},
        "El Penon": {},
        "El Playon": {},
        "El Socorro": {},
        "Encino": {},
        "Enciso": {},
        "Florian": {},
        "Galan": {},
        "Giron": {},
        "Guaca": {},
        "Guadalupe": {},
        "Guapota": {},
        "Guavata": {},
        "Guepsa": {},
        "Hato": {},
        "Jesus Maria": {},
        "Jordan": {},
        "La Belleza": {},
        "La Paz": {},
        "Landazuri": {},
        "Lebrija": {},
        "Los Santos": {},
        "Macaravita": {},
        "Malaga": {},
        "Matanza": {},
        "Mogotes": {},
        "Molagavita": {},
        "Ocamonte": {},
        "Onzaga": {},
        "Palmar": {},
        "Palmas Del Socorro": {},
        "Paramo": {},
        "Piedecuesta": {},
        "Pinchote": {},
        "Puente Nacional": {},
        "Puerto Parra": {},
        "Puerto Wilches": {},
        "Rionegro": {},
        "Sabana De Torres": {},
        "San Andres": {},
        "San Benito": {},
        "San Gil": {},
        "San Joaquin": {},
        "San Jose De Miranda": {},
        "San Miguel": {},
        "San Vicente De Chucuri": {},
        "Santa Barbara": {},
        "Santa Helena Del Opon": {},
        "Simacota": {},
        "Sucre": {},
        "Surata": {},
        "Tona": {},
        "Valle De San Jose": {},
        "Vetas": {},
        "Villanueva": {},
        "Zapatoca": {}
    },
    "Sucre": {
        "Sincelejo": {
            "Nor Este": {
                "Ie Rogelio Rodriguez Severicheleoncito": ["21"],
                "Col Ntra Sta De Fatima": ["41"],
                "Ie Pedagogico De Venecia": ["27"],
                "Ie Para Poblaciones Especiales": ["4"]
            },
            "Oeste": {
                "Ie Normal Superior De Sincelejo": ["35"],
                "Ie Juanita Garcia Manjarres": ["20"],
                "Inst Tecnico Industrial Antonio Prieto": ["17"]
            },
            "Sur Oeste": {
                "Ie Nuestra Senora Del Carmen": ["26"],
                "Instedc20 De Enero": ["20"],
                "Ie Madre Amalia": ["27"]
            },
            "Central  Oeste": {
                "Ie Antonio Lenis": ["43"],
                "Ie San Jose Cipcdv": ["21"]
            },
            "Central": {
                "Ie Jose Ignacio Lopez": ["13"],
                "Ie Francisco De Paula Santander": ["17"],
                "Ieluis Carlos Galan": ["9"]
            },
            "Norte": {
                "Ie San Roque": ["21"],
                "Ie Antonio Narino Sede Juanita": ["10"],
                "Ie Cuarta El Salvador": ["18"],
                "Ie Altos De La Sabana": ["4"]
            },
            "Sur": {
                "Inst Nacional Simon Araujo": ["44"],
                "Colegio La Esperanza": ["34"]
            },
            "Sur Este": {
                "Ie San Jose": ["28"]
            },
            "10corregimientos Area 1": {
                "Castaneda": ["4"],
                "Chocho": ["14"],
                "Las Palmas": ["3"]
            },
            "11corregimientos Area 2": {
                "La Arena": ["5"],
                "La Chivera": ["1"],
                "La Penata": ["3"],
                "Las Majaguas": ["1"],
                "San Rafael el Zanjon": ["1"]
            },
            "12corregimientos Area 3": {
                "Cruz Del Beque": ["2"],
                "El Cerrito": ["3"],
                "Laguna Flor": ["2"],
                "Las Huertas": ["2"],
                "San Antonio": ["3"]
            },
            "13corregimientos Area 4": {
                "Buenavista": ["3"],
                "La Gallera": ["7"],
                "San Jacinto mocha": ["2"],
                "Sabanas Del Potrero": ["4"],
                "Villa De San Martin": ["3"],
                "Babilonia": ["2"],
                "Buenavistica": ["1"],
                "Cerro Del Naranjo": ["1"]
            }
        },
        "Buenavista": {},
        "Caimito": {},
        "Chalan": {},
        "Coloso": {},
        "Corozal": {},
        "Covenas": {},
        "El Roble": {},
        "Galeras": {},
        "Guaranda": {},
        "La Union": {},
        "Los Palmitos": {},
        "Majagual": {},
        "Morroa": {},
        "Ovejas": {},
        "Sampues": {},
        "San Antonio De Palmito": {},
        "San Benito Abad": {},
        "San Juan De Betulia": {},
        "San Marcos": {},
        "San Onofre": {},
        "San Pedro": {},
        "Since": {},
        "Sucre": {},
        "Tolu": {},
        "Tolu Viejo": {}
    },
    "Tolima": {
        "Ibague": {
            "Dantas": {
                "Ie Laureles Sd Dantas": ["1"]
            },
            "Laureles": {
                "Ie Laureles": ["1"]
            },
            "Coellococora": {
                "Ie Coellococora": ["5"]
            },
            "Gamboa": {
                "Esc Gamboa": ["2"]
            },
            "Tapias": {
                "Esc Camilo Torres": ["3"]
            },
            "Toche": {
                "Ie Tapias Sd Toche": ["1"]
            },
            "Juntas": {
                "Ie Juntas": ["2"]
            },
            "Villa Restrepo": {
                "Casa De La Cultura": ["6"]
            },
            "Cay": {
                "Ie Tec Agropecuaria Sd Cay": ["4"]
            },
            "Calambeo": {
                "Zona Rural Esc Los Cristales": ["2"]
            },
            "24corr  11 San Juan De La China": {
                "Ie San Juan De La China": ["4"]
            },
            "San Bernardo": {
                "Ie San Bernardo": ["4"]
            },
            "El Salado": {
                "Ie Vda La Esperanza": ["2"]
            },
            "Buenos Aires": {
                "Ie Nva Esperanza La Palma": ["4"]
            },
            "28corr 15 Carmen De Bulira": {
                "Ie Fernando Villalobos Sd Carmen Bulira": ["2"]
            },
            "El Totumo": {
                "Ie Fernando Villalobos Sd Totumo": ["6"]
            },
            "La Florida": {
                "Ie San Francisco": ["2"]
            }
        },
        "Chaparral": {
            "De Amoya": {
                "Amoya  Las Cruces": ["2"],
                "Amoya la Cortes": ["2"],
                "Amoya  Copete": ["1"]
            },
            "El Limon": {
                "El Limon": ["8"],
                "El Limon la Profunda": ["1"]
            },
            "De Calarma": {
                "Calarma risalda  Calarma": ["4"],
                "Calarma potrerito De Lugo": ["1"],
                "Calarma yaguara": ["1"]
            },
            "Las Hermosas": {
                "Las Hermosas santa Barbara": ["2"],
                "Las Hermosas la Virginia": ["2"],
                "Las Hermosassan Jose De Las Hermosas": ["2"]
            },
            "La Marina": {
                "La Marina": ["4"]
            }
        },
        "Espinal": {
            "Patio Bonito": {
                "Patio Bonito": ["4"]
            },
            "Las Delicias": {
                "Las Delicias": ["2"]
            },
            "La Caimanera": {
                "La Caimanera": ["2"]
            },
            "Dindalito Ctro": {
                "Dindalito": ["4"]
            },
            "Paso Ancho": {
                "Paso Ancho": ["2"]
            },
            "Chicoral": {
                "Chicoral 1": ["15"],
                "Chicoral 2": ["5"]
            }
        },
        "Fresno": {
            "Betania": {
                "Betania": ["2"],
                "El Guayabo": ["3"]
            },
            "El Tablazo": {
                "El Tablazo": ["6"],
                "Pavas los Guayabos": ["1"]
            },
            "La Aguadita": {
                "La Aguadita": ["5"],
                "La Divisa": ["1"]
            },
            "Campeon": {
                "Campeon": ["2"]
            },
            "Aguas Claras": {
                "Aguas Claras": ["2"]
            },
            "Piedra Grande": {
                "Piedra Grande": ["2"],
                "Las Marias": ["2"]
            }
        },
        "Herveo": {
            "De Padua": {
                "Padua": ["4"]
            }
        },
        "Libano": {
            "El Convenio": {
                "El Convenio": ["8"]
            },
            "Tierradentro": {
                "Tierradentro": ["3"]
            },
            "Santa Teresa": {
                "Santa Teresa": ["4"]
            },
            "San Fernando": {
                "San Fernando": ["3"]
            }
        },
        "Planadas": {
            "Bilbao": {
                "Bilbao": ["6"],
                "La Ilusion": ["2"]
            },
            "Gaitania": {
                "Gaitania": ["11"],
                "Rio Claro": ["1"],
                "San Miguel": ["1"]
            }
        },
        "Rioblanco": {
            "01correg La Herrera": {
                "Herrera": ["10"],
                "Las Juntas": ["2"]
            }
        },
        "San Luis": {
            "Payande": {
                "El Salitre": ["1"],
                "Payande": ["9"]
            }
        },
        "Venadillo": {
            "Junin": {
                "Junin": ["4"]
            },
            "La Sierrita": {
                "La Sierrita": ["1"]
            },
            "Malabar": {
                "Malabar": ["2"]
            },
            "Palmarosa": {
                "Palmarosa": ["1"]
            }
        },
        "Alpujarra": {},
        "Alvarado": {},
        "Ambalema": {},
        "Anzoategui": {},
        "Armero": {},
        "Ataco": {},
        "Cajamarca": {},
        "Carmen De Apicala": {},
        "Casabianca": {},
        "Coello": {},
        "Coyaima": {},
        "Cunday": {},
        "Dolores": {},
        "El Espinal": {},
        "Falan": {},
        "Flandes": {},
        "Guamo": {},
        "Honda": {},
        "Icononzo": {},
        "Lerida": {},
        "Mariquita": {},
        "Melgar": {},
        "Murillo": {},
        "Natagaima": {},
        "Ortega": {},
        "Palocabildo": {},
        "Piedras": {},
        "Prado": {},
        "Purificacion": {},
        "Roncesvalles": {},
        "Rovira": {},
        "Saldana": {},
        "San Antonio": {},
        "Santa Isabel": {},
        "Suarez": {},
        "Valle De San Juan": {},
        "Villahermosa": {},
        "Villarrica": {}
    },
    "Valle": {
        "Cali": {
            "Comuna 13": {
                "Col Parroquial Senor De Los Mi": ["25"],
                "Escuela El Diamante": ["37"],
                "Escuela Rodrigo Lloreda": ["39"],
                "Escuela Miguel Camacho Perea": ["22"],
                "Centro De Capacitacion Don Bos": ["17"],
                "Colegio Comfandi Calipso": ["24"],
                "Escuela Santa Rosa": ["30"],
                "Colegio Los Lagos": ["20"],
                "Escuela Bartolome Loboguerrero": ["33"],
                "Sena Cdti": ["23"],
                "Col Santa Isabel De Hungria Comuneros": ["23"],
                "Colegio Enrique Olaya Herrera": ["13"]
            },
            "Felidia": {
                "Felidia": ["5"]
            },
            "La Buitrera": {
                "La Buitrera": ["15"],
                "La Sirena": ["12"]
            },
            "La Castilla": {
                "La Castilla": ["3"]
            },
            "La Elvira": {
                "La Elvira": ["3"]
            },
            "La Leonera": {
                "La Leonera": ["3"]
            },
            "La Paz": {
                "La Paz": ["2"]
            },
            "Golondrinas": {
                "Golondrinas": ["4"]
            },
            "Los Andes": {
                "Los Andes": ["4"]
            },
            "32corr Melendez villa Carmelo": {
                "Villa Carmelo": ["3"]
            },
            "Montebello": {
                "Montebello": ["21"]
            },
            "Navarro": {
                "Navarro": ["9"]
            },
            "Pance": {
                "Pance": ["6"]
            },
            "Pichinde": {
                "Pichinde": ["3"]
            },
            "El Saladito": {
                "El Saladito": ["6"]
            },
            "Hormiguero": {
                "Hormiguero A": ["8"],
                "Hormiguero B bochalema": ["3"]
            }
        },
        "Buenaventura": {
            "Isla Cascajal": {
                "Ie San Rafael": ["24"],
                "Ie Pascual De Andagoya": ["15"],
                "Terminal De Transporte": ["22"],
                "Ie Francisco Jose De Caldas": ["36"],
                "Fund Educ Y Social Ana Vic": ["21"],
                "Instituto Tecnico Comercial Piloto": ["2"],
                "Ie Ana Victoria": ["11"],
                "Ie Republica De Venezuela": ["19"],
                "Ie Policarpa Salavarrieta": ["15"],
                "Ie Urbano Tenorio": ["9"],
                "Ie La Anunciacion ifa": ["24"]
            },
            "Cont el Pailon": {
                "Ie Jose Ramon Bejarano": ["11"],
                "Caseta Comunal El Oriente": ["15"],
                "Ie Juan Jose Rondon": ["37"],
                "Colegio Patricio Simmens": ["12"],
                "Ie Teofilo Roberto Potes": ["40"],
                "Ie Termarit": ["11"],
                "Ie Liceo Del Pacifico": ["18"],
                "Ie San Martin De Porras": ["11"],
                "Ie Jose Maria Cabal": ["35"],
                "Ie Las Americas": ["10"],
                "Parroquia Cristo Redentor": ["24"],
                "Ie Simon Bolivar": ["35"],
                "Coleg Antonio Narino": ["14"],
                "Ie Los Granadinos": ["27"],
                "Caseta Comunal Union De Vivien": ["13"],
                "Ie Emilio Carvajal": ["21"],
                "Ie La Nueva Esperanza": ["6"],
                "Ctro Educ Eusebio Angulo": ["12"],
                "Sede Maria Auxiliadora": ["4"]
            },
            "Bajo Calima": {
                "Bajo Calima": ["6"]
            },
            "Punta Magdalena": {
                "Bocas Del San Juan": ["2"],
                "La Plata": ["2"],
                "Malaga": ["2"],
                "Puerto Espana": ["1"]
            },
            "punta Bazan": {
                "La Bocana": ["3"]
            },
            "Carretera Simon Boliva": {
                "Aguaclara": ["1"],
                "Ladrilleros": ["1"],
                "Llanobajo": ["1"],
                "San Marcos": ["2"],
                "Zabaletas": ["2"],
                "Zacarias": ["4"]
            },
            "rio Anchicaya": {
                "San Jose anchicaya": ["2"],
                "Taparal": ["2"]
            },
            " Rio Raposo": {
                "Caracoli cacoli": ["1"],
                "El Tigre": ["1"],
                "Calle Honda": ["1"],
                "San Francisco Javier": ["2"]
            },
            "rio Cajambre": {
                "El Pital": ["2"],
                "Mayorquin": ["2"],
                "Papayal": ["2"]
            },
            "25correg 13 rio Yurumangui": {
                "San Antonio yurumangui": ["2"],
                "Veneral": ["2"]
            },
            "Puerto Merizalde": {
                "El Pastico": ["2"],
                "Puerto Merizalde": ["5"],
                "San Pedro De Naya": ["2"]
            },
            "28correg 16 san Francisco": {
                "El Carmen": ["1"],
                "San Francisco De Naya": ["2"]
            },
            "29correg 17 la Concepcion": {
                "La Concepcion": ["2"],
                "Nicolas Ramos Hidalgo": ["1"],
                "Puerto Naya": ["1"],
                "San Lorenzo": ["1"]
            }
        },
        "Buga": {
            "Zajon Hondo": {
                "Zanjon Hondo": ["4"]
            },
            "Quebradaseca": {
                "Quebradaseca": ["4"]
            },
            "Nogales": {
                "Nogales": ["1"]
            },
            "Monterrey": {
                "Monterrey": ["2"]
            },
            "Los Bancos": {
                "Los Bancos": ["1"]
            },
            "La Maria": {
                "La Maria": ["2"]
            },
            "La Habana": {
                "La Habana": ["5"]
            },
            "Frisoles": {
                "Frisoles": ["1"]
            },
            "El Vinculo": {
                "El Vinculo": ["4"]
            },
            "El Rosario": {
                "El Rosario": ["1"]
            },
            "El Placer": {
                "El Placer": ["1"]
            },
            "El Salado": {
                "El Salado": ["1"]
            },
            "Pueblo Nuevo": {
                "Pueblo Nuevo": ["3"]
            },
            "Chambimbal": {
                "Chambimbal": ["5"]
            },
            "Miraflores": {
                "Vereda Miraflores": ["1"]
            },
            "El Porvenir": {
                "El Porvenir": ["2"]
            },
            "23correg  La Playa Del Buey": {
                "La Playa Del Buey": ["1"]
            },
            "Rio Loro": {
                "Rio Loro": ["1"]
            }
        },
        "Cartago": {
            "Cauca": {
                "Cauca": ["1"]
            },
            "Coloradas": {
                "Coloradas": ["2"]
            },
            "Modin": {
                "Modin": ["2"]
            },
            "12corregim 3 Piedra De Moler": {
                "Piedra De Moler": ["2"]
            },
            "Zaragoza": {
                "Zaragoza": ["12"]
            }
        },
        "Florida": {
            "Betania": {
                "Betania": ["1"]
            },
            "Caleno": {
                "Caleno": ["1"]
            },
            "Canas Abajo": {
                "Canas Abajo": ["1"]
            },
            "Canas Arriba": {
                "Canas Arriba": ["1"]
            },
            "Chocosito": {
                "Chococito": ["3"]
            },
            "El Libano": {
                "El Libano": ["1"]
            },
            "El Pedregal": {
                "El Pedregal": ["3"]
            },
            "La Sequia": {
                "La Acequia": ["1"]
            },
            "La Diana": {
                "La Diana": ["2"]
            },
            "La Palmera": {
                "La Palmera": ["1"]
            },
            "La Rivera": {
                "La Ribera": ["2"]
            },
            "La Samaria": {
                "La Samaria": ["1"]
            },
            "La Union": {
                "La Union": ["1"]
            },
            "Las Guacas": {
                "Las Guacas": ["2"]
            },
            "Parraga": {
                "Parraga": ["1"]
            },
            "Pueblo Nuevo": {
                "Pueblo Nuevo": ["1"]
            },
            "Remolino": {
                "Remolino": ["2"]
            },
            "Miravalles": {
                "Miravalles": ["1"]
            },
            "San Antonio": {
                "San Antonio": ["12"]
            },
            "San Francisco": {
                "San Francisco llanito": ["4"]
            },
            "Santa Rosa": {
                "Santa Rosa": ["1"]
            },
            "Santo Domingo": {
                "Santo Domingo": ["1"]
            },
            "Tarragona": {
                "Tarragona": ["3"]
            }
        },
        "Tulua": {
            "10uaf 1": {
                "Campoalegre": ["3"],
                "Narino": ["9"],
                "San Carlos": ["1"]
            },
            "11uaf 2": {
                "Bocas De Tulua": ["2"],
                "La Palmera": ["2"],
                "Tres Esquinas": ["5"]
            },
            "12uaf 3": {
                "Aguaclara": ["23"],
                "Los Caimos": ["1"]
            },
            "13uaf 4": {
                "El Picacho": ["2"],
                "La Iberia": ["2"],
                "La Marina": ["10"],
                "Mateguadua": ["1"],
                "San Lorenzo": ["2"]
            },
            "14uaf 5": {
                "La Moralia": ["2"],
                "Venus": ["1"]
            },
            "15uaf 6": {
                "Frazadas": ["2"],
                "San Rafael": ["2"]
            },
            "16uaf 7": {
                "La Diadema": ["1"],
                "Monteloro": ["2"],
                "Jicaramata": ["1"]
            },
            "17uaf 8": {
                "El Retiro": ["1"],
                "Quebradagrande": ["1"],
                "Tochecito": ["1"]
            },
            "18uaf 9": {
                "Barragan": ["3"]
            },
            "19uaf 10": {
                "Santa Lucia": ["1"]
            }
        },
        "Yumbo": {
            "Arroyohondo": {
                "Arroyohondo": ["7"]
            },
            "Dapa": {
                "Dapa": ["10"]
            },
            "El Pedregal": {
                "El Pedregal": ["4"]
            },
            "Mulalo": {
                "Mulalo": ["4"]
            },
            "San Marcos": {
                "San Marcos": ["4"],
                "Miravalle Norte": ["1"]
            },
            "Santa Ines": {
                "Santa Ines": ["4"]
            },
            "Yumbillo": {
                "Yumbillo": ["2"]
            },
            "La Olga": {
                "La Olga": ["2"]
            }
        }
    },
    "Arauca": {
        "Arauca": {
            "Raimundo Cisneros O": {
                "Colegio Simon Bolivar": ["39"]
            },
            "Josefa Canelones": {
                "Concentracion Camilo Torres": ["23"]
            },
            "Jose Antonio Benitez": {
                "Colegio Santander Primaria": ["20"],
                "Concescolar La Corocora": ["14"],
                "Concescolar Divino Nino": ["23"]
            },
            "Jose Laurencio Osio": {
                "Normal Maria Inmaculada": ["22"],
                "Colegio Tec Cristo Rey": ["29"]
            },
            "Juan Jose Rondon": {
                "Escuela Flor De Mi Llano": ["23"]
            },
            "Canas Bravas": {
                "Canas Bravas": ["3"]
            },
            "Maporillal": {
                "Maporillal": ["1"]
            },
            "Santa Barbara": {
                "Santa Barbara": ["4"]
            },
            "Caracol": {
                "Caracol": ["3"]
            },
            "Todos Los Santos": {
                "Todos Los Santos": ["4"]
            }
        },
        "Arauquita": {},
        "Cravo Norte": {},
        "Fortul": {},
        "Puerto Rondon": {},
        "Saravena": {},
        "Tame": {}
    },
    "Caqueta": {
        "Albania": {},
        "Belen De Los Andaquies": {},
        "Cartagena Del Chaira": {},
        "Curillo": {},
        "El Doncello": {},
        "El Paujil": {},
        "La Montanita": {},
        "Milan": {},
        "Morelia": {},
        "San Jose Del Fragua": {},
        "San Vicente Del Caguan": {},
        "Solano": {},
        "Solita": {},
        "Valparaiso": {},
        "Florencia": {
            "Occidental": {
                "Ie Juan Bautista La Salle": ["24"],
                "Ie Juan Bautista Migani": ["19"],
                "Ie San Francisco De Asis": ["20"],
                "Ie Sagrados Corazones": ["22"],
                "Ie Juan B De La Salle Sd Siete De Agosto": ["3"],
                "Ie Francisco De Asis Sede Circarcia": ["1"]
            },
            "Sur": {
                "Ie Antonio Ricaurte Sede Juan Xxiii": ["24"],
                "Ie Antonio Ricaurte": ["14"],
                "Ie Barrios Unidos Del Sur": ["21"],
                "I Tec": ["AGROPECUARIO DE LA AMAZONIA"]
            },
            "Norte": {
                "Ielos Pinos Sede La Paz": ["10"],
                "Universidad Unad": ["10"],
                "Instituto Tecnico Industrial": ["18"],
                "Iela Salle": ["15"],
                "Iebuinaima": ["15"],
                "Urbanizacion La Gloria": ["2"]
            },
            "Oriental": {
                "Iebussede Pueblo Nuevo": ["13"],
                "Iebussede Santa Ines": ["10"],
                "Ieciudsxxi Sede Triunfo": ["7"],
                "Iedivnino Sede Las Palmeras": ["9"],
                "Ie Ciudadela Siglo Xxi": ["28"],
                "Iebello Horizonte": ["16"]
            },
            "San Pedro Norcas": {
                "San Pedro norcasia": ["3"]
            },
            "Orteguaza": {
                "Orteguazasantana Las Hermosa": ["3"]
            },
            "El Danubio remo": {
                "El Danubio el Remolino": ["1"]
            },
            "El Carano": {
                "El Carano el Carano": ["3"]
            },
            "Santo Domingo": {
                "Santo Domingo santo Domingo": ["4"]
            },
            "San Martin camp": {
                "San Martin": ["1"]
            },
            "11correg Venecia Puerto Arango": {
                "Venecia puerto Arango": ["2"]
            }
        },
        "Puerto Rico": {
            "La Aguililla": {
                "La Aguililla": ["2"]
            },
            "La Esmeralda": {
                "La Esmeralda": ["3"]
            },
            "Lusitania": {
                "Lusitania": ["2"]
            },
            "Rio Negro": {
                "Rio Negro": ["4"]
            },
            "Santana Ramos": {
                "Santana Ramos": ["2"]
            },
            "La Paz": {
                "La Paz": ["2"]
            }
        }
    },
    "Casanare": {
        "Yopal": {
            "Ciro Reina": {
                "Ie Luis Hernandez Vargas": ["26"],
                "Ce Marco Fidel Suarez": ["13"],
                "Ie Centro Social": ["22"]
            },
            "Calixto Zambrano": {
                "Ie Carlos Lleras Restrepo": ["33"],
                "Ie Braulio Gonzalez Sd Simon Bolivar": ["16"],
                "Ie Braulio Gonzalez Sd Centro": ["26"]
            },
            "Clelia Riveros De Pri": {
                "I Tec Empresarial Yopal Itey": ["28"],
                "Ie Manuela Beltran": ["14"]
            },
            "Ciudad Campina": {
                "Ie El Campina": ["21"],
                "Ie El Paraiso": ["35"]
            },
            "Javier Manuel Vargas": {
                "I Tec Ambiental San Mateo": ["28"],
                "Megacolegio El Progreso Comuna Cinco": ["25"]
            },
            "06ciudadela Llano Lindo": {
                "Ie Emp Llano Lindo Sd A": ["5"],
                "Ie Emp Llano Lindo Sd B": ["3"]
            },
            "07alcaravan La Niata": {
                "Alcaravan La Niata": ["3"]
            },
            "08punto Nuevo": {
                "Punto Nuevo": ["2"]
            },
            "09matelimon": {
                "Matelimon": ["2"]
            },
            "10el Charte": {
                "El Charte": ["4"]
            },
            "11el Morro": {
                "El Morro": ["8"]
            },
            "12el Taladro": {
                "El Taladro": ["2"]
            },
            "13la Chaparrera": {
                "La Chaparrera": ["7"]
            },
            "14morichal": {
                "Morichal": ["6"]
            },
            "15tacarimena": {
                "Tacarimena": ["3"]
            },
            "16tilodiran": {
                "Tilodiran": ["4"]
            },
            "17quebradaseca": {
                "Quebradaseca": ["2"]
            }
        },
        "Tauramena": {
            "El Cusiana": {
                "Paso Cusiana": ["4"]
            },
            "El Raizal": {
                "El Raizal": ["2"]
            }
        },
        "Aguazul": {},
        "Chameza": {},
        "Hato Corozal": {},
        "La Salina": {},
        "Mani": {},
        "Monterrey": {},
        "Nunchia": {},
        "Orocue": {},
        "Paz De Ariporo": {},
        "Pore": {},
        "Recetor": {},
        "Sabanalarga": {},
        "Sacama": {},
        "San Luis De Palenque": {},
        "Tamara": {},
        "Trinidad": {},
        "Villanueva": {}
    },
    "La Guajira": {
        "Riohacha": {
            "Centro Historico": {
                "Inst Educ Divina Pastora": ["26"]
            },
            "Nuevo Centro": {
                "Ie Eusebio Septimio Mary": ["13"]
            },
            "Coquivacoa": {
                "Ie Liceo Almirante Padilla": ["33"],
                "Ielivio Reginaldo Fischione": ["17"],
                "Inst Educ Jose Antonio Galan": ["16"]
            },
            "Cooperativo": {
                "Ctro Educativo Nvo Horizonte": ["13"],
                "Ie Jose A Galan Sd Cooperativo": ["6"]
            },
            "Aer Almirante Padill": {
                "Inst Educ Ipc": ["38"]
            },
            "Ntra Sra De Los Remed": {
                "Ie Isabel Maria Cuesta": ["24"],
                "Iejose Arnoldo Marin": ["13"]
            },
            "Bocagrande": {
                "Ie Ecologica El Carmen": ["19"],
                "Ie Ecologica El Carmen Sd Ppal": ["13"]
            },
            "Eco Lagsalada Y Pat": {
                "Ie Maria Doraliza Lopez De Mej": ["27"],
                "Ie Helion Pinedo Rios": ["18"]
            },
            "Ecoturrio Rancheria": {
                "Ie Ntra Sta De Fatima": ["5"]
            },
            "El Dividivi": {
                "Ie Denzil Escolar Sd Ppal": ["32"]
            },
            " Camarones": {
                "Camarones": ["9"],
                "Boca De Camarones": ["2"],
                "Perico": ["2"]
            },
            "Barbacoas": {
                "Barbacoas": ["3"]
            },
            "Matitas": {
                "Ie Eugenia Herrera": ["4"]
            },
            "Tomarrazon": {
                "Tomarrazon": ["4"],
                "La Gloria": ["1"],
                "Cascajalito": ["1"]
            },
            "Mongui": {
                "Mongui": ["4"],
                "Cucurumana": ["4"]
            },
            "Cotoprix": {
                "Cotoprix": ["4"]
            },
            "Galan": {
                "Galan": ["3"]
            },
            "18corr Villa Martin machobacho": {
                "Villa Martin machobayo": ["4"]
            },
            "Juan Y Medio": {
                "Juan Y Medio": ["2"],
                "Los Moreneros": ["1"]
            },
            "Arroyo Arena": {
                "Arroyo Arena": ["1"],
                "El Abra": ["2"]
            },
            "Cerrillo": {
                "Cerrillo": ["2"]
            },
            "Choles": {
                "Choles": ["3"]
            },
            "Tigreras": {
                "Tigreras": ["4"],
                "Pelechua": ["3"]
            },
            "Las Palmas": {
                "Las Palmas A1": ["2"],
                "Las Palmas A2 sede Las Casitas": ["1"]
            }
        },
        "Maicao": {
            "De Carraipia": {
                "Carraipia": ["9"]
            },
            "De Majayura": {
                "Majayura": ["10"]
            },
            "De Limoncito": {
                "El Limoncito": ["6"],
                "Ipapure": ["4"]
            },
            "De Paraguachon": {
                "Paraguachon": ["15"]
            },
            "Yotojoroy": {
                "La Paz": ["6"],
                "Yotojoroy": ["3"]
            }
        },
        "Albania": {},
        "Barrancas": {},
        "Dibulla": {},
        "Distraccion": {},
        "El Molino": {},
        "Fonseca": {},
        "Hatonuevo": {},
        "La Jagua Del Pilar": {},
        "Manaure": {},
        "San Juan Del Cesar": {},
        "Uribia": {},
        "Urumita": {},
        "Villanueva": {}
    },
    "Meta": {
        "Lejanias": {
            "Cacayal": {
                "Cacayal": ["5"]
            },
            "La Venticuatro": {
                "La Veinticuatro": ["1"]
            }
        },
        "Acacias": {},
        "Barranca De Upia": {},
        "Cabuyaro": {},
        "Castilla La Nueva": {},
        "Cubarral": {},
        "Cumaral": {},
        "El Calvario": {},
        "El Castillo": {},
        "El Dorado": {},
        "Fuente De Oro": {},
        "Granada": {},
        "Guamal": {},
        "La Macarena": {},
        "La Uribe": {},
        "Mapiripan": {},
        "Mesetas": {},
        "Puerto Concordia": {},
        "Puerto Gaitan": {},
        "Puerto Lleras": {},
        "Puerto Lopez": {},
        "Puerto Rico": {},
        "Restrepo": {},
        "San Carlos De Guaroa": {},
        "San Juan De Arama": {},
        "San Juanito": {},
        "San Martin": {},
        "Villavicencio": {},
        "Vista Hermosa": {}
    },
    "Guaviare": {
        "San Jose Del Guaviare": {
            "El Capricho": {
                "El Capricho": ["8"]
            },
            "Charrasboqueron": {
                "Charras Boqueron": ["6"]
            }
        },
        "Calamar": {},
        "El Retorno": {},
        "Miraflores": {}
    },
    "Amazonas": {
        "El Encanto": {
            "01el Encanto": {
                "Departamental": ["3"]
            }
        },
        "La Chorrera": {
            "02la Chorrera": {
                "Departamental": ["4"]
            }
        },
        "La Pedrera": {
            "03la Pedrera": {
                "Departamental": ["4"]
            }
        },
        "La Victoria": {
            "09la Victoria": {
                "Departamental": ["1"]
            }
        },
        "Miriti Parana": {
            "04miriti Parana": {
                "Puesto Cabecera Municipal": ["2"],
                "Santa Isabel": ["1"]
            }
        },
        "Puerto Santander": {
            "05puerto Santander": {
                "Departamental": ["2"]
            }
        },
        "Tarapaca": {
            "06tarapaca": {
                "Departamental": ["5"]
            }
        },
        "Puerto Alegria": {
            "07puerto Alegria": {
                "Departamental": ["1"]
            }
        },
        "Puerto Arica": {
            "08puerto Arica": {
                "Departamental": ["2"]
            }
        },
        "Leticia": {},
        "Puerto Narino": {}
    },
    "Putumayo": {
        "Puerto Asis": {
            "Sur": {
                "Escuela Central De Varones": ["20"],
                "I": ["E. SANTA TERESA (SEDE PRIMAR"],
                "Colegio San Fernando": ["8"]
            },
            "Oriente": {
                "Iealvernia": ["15"],
                "Ieel Jardin": ["15"],
                "Ifluvial Del Amazonas": ["8"]
            },
            "Norte": {
                "Iesan Nicolas": ["15"],
                "Escuela El Prado": ["11"]
            },
            "Pinuna Blanco": {
                "Pinuna Blanco puerto Hacha": ["3"]
            },
            "La Carmelita": {
                "La Carmelita cuembi": ["7"],
                "Santa Maria alto Cuembi": ["3"]
            },
            "Santana": {
                "Santana": ["5"]
            },
            " Teteye": {
                "Teteye": ["3"]
            },
            "Villa Victoria": {
                "Villa Victoria": ["2"]
            }
        },
        "Puerto Leguizamo": {
            "La Tagua": {
                "La Tagua": ["2"]
            },
            " El Mecaya": {
                "El Mecaya": ["2"],
                "El Sencella": ["1"]
            },
            "Puerto Ospina": {
                "Puerto Ospina": ["4"],
                "Pinuna Negro": ["2"]
            }
        },
        "Colon": {
            "San Pedro": {
                "San Pedro": ["3"]
            }
        },
        "San Miguel la Dorada": {
            "01corr Puerto Colon san Miguel": {
                "Puerto Colon San Miguel": ["9"]
            }
        },
        "Mocoa": {},
        "Orito": {},
        "Puerto Caicedo": {},
        "Puerto Guzman": {},
        "San Francisco": {},
        "San Miguel": {},
        "Santiago": {},
        "Sibundoy": {},
        "Valle Del Guamuez": {},
        "Villagarzon": {}
    },
    "Cauca": {
        "Almaguer": {},
        "Argelia": {},
        "Balboa": {},
        "Bolivar": {},
        "Buenos Aires": {},
        "Cajibio": {},
        "Caldono": {},
        "Caloto": {},
        "Corinto": {},
        "El Tambo": {},
        "Florencia": {},
        "Guachene": {},
        "Guapi": {},
        "Inza": {},
        "Jambalo": {},
        "La Sierra": {},
        "La Vega": {},
        "Lopez De Micay": {},
        "Mercaderes": {},
        "Miranda": {},
        "Morales": {},
        "Padilla": {},
        "Paez": {},
        "Patia": {},
        "Piamonte": {},
        "Piendamo": {},
        "Popayan": {},
        "Puerto Tejada": {},
        "Purace": {},
        "Rosas": {},
        "San Sebastian": {},
        "Santa Rosa": {},
        "Santander De Quilichao": {},
        "Silvia": {},
        "Sotara": {},
        "Suarez": {},
        "Sucre": {},
        "Timbio": {},
        "Timbiqui": {},
        "Toribio": {},
        "Totoro": {},
        "Villa Rica": {}
    },
    "Guainia": {
        "Inirida": {}
    },
    "Norte De Santander": {
        "Abrego": {},
        "Arboledas": {},
        "Bochalema": {},
        "Bucarasica": {},
        "Cachira": {},
        "Cacota": {},
        "Chinacota": {},
        "Chitaga": {},
        "Convencion": {},
        "Cucuta": {},
        "Cucutilla": {},
        "Durania": {},
        "El Carmen": {},
        "El Tarra": {},
        "El Zulia": {},
        "Gramalote": {},
        "Hacari": {},
        "Herran": {},
        "La Esperanza": {},
        "La Playa De Belen": {},
        "Labateca": {},
        "Los Patios": {},
        "Lourdes": {},
        "Mutiscua": {},
        "Ocana": {},
        "Pamplona": {},
        "Pamplonita": {},
        "Puerto Santander": {},
        "Ragonvalia": {},
        "Salazar De Las Palmas": {},
        "San Calixto": {},
        "San Cayetano": {},
        "Santiago": {},
        "Santo Domingo De Silos": {},
        "Sardinata": {},
        "Teorama": {},
        "Tibu": {},
        "Toledo": {},
        "Villa Caro": {},
        "Villa Del Rosario": {}
    },
    "San Andres Y Providencia": {
        "Providencia Y Santa Catalina Islas": {},
        "San Andres": {}
    },
    "Valle Del Cauca": {
        "Alcala": {},
        "Andalucia": {},
        "Ansermanuevo": {},
        "Argelia": {},
        "Bolivar": {},
        "Buenaventura": {},
        "Buga": {},
        "Bugalagrande": {},
        "Caicedonia": {},
        "Cali": {},
        "Calima": {},
        "Candelaria": {},
        "Cartago": {},
        "Dagua": {},
        "El Aguila": {},
        "El Cairo": {},
        "El Cerrito": {},
        "El Dovio": {},
        "Florida": {},
        "Ginebra": {},
        "Guacari": {},
        "Jamundi": {},
        "La Cumbre": {},
        "La Union": {},
        "La Victoria": {},
        "Obando": {},
        "Palmira": {},
        "Pradera": {},
        "Restrepo": {},
        "Riofrio": {},
        "Roldanillo": {},
        "San Pedro": {},
        "Sevilla": {},
        "Toro": {},
        "Trujillo": {},
        "Tulua": {},
        "Ulloa": {},
        "Versalles": {},
        "Vijes": {},
        "Yotoco": {},
        "Yumbo": {},
        "Zarzal": {}
    },
    "Vaupes": {
        "Caruru": {},
        "Mitu": {},
        "Taraira": {}
    },
    "Vichada": {
        "Cumaribo": {},
        "La Primavera": {},
        "Puerto Carreno": {},
        "Santa Rosalia": {}
    }
};

regions.points = (dep, mun) => {
    dep = dep.toUpperCase();
    mun = mun.toUpperCase();
    return (!(dep in regions) || !(mun in regions[dep])) ? [] :
        Object.entries(regions[dep][mun]).reduce((all, [, points]) => {
            return all.concat(...Object.keys(points));
        }, []);
};
export default regions;