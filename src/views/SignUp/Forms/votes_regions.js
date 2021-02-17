const regions = {
    "ANTIOQUIA": {
        "MEDELLIN": {
            "POPULAR": {
                "SEC ESC LA ESPERANZA NO 2": ["35"],
                "INSTEDUC LA CANDELARIA": ["53"],
                "IEMARIA DE LOS ANGELES CANO MARQUEZ": ["20"],
                "SEC ESC MEDELLIN": ["24"],
                "IEFE Y ALEGRIA GRANIZAL": ["4"],
                "IE LA AVANZADA": ["2"],
                "SEC ESC CARPINELO AMAPOLITA": ["1"],
                "IE ANTONIO DERKA": ["3"],
                "SECESC PABLO VI": ["72"],
                "SEC ESC DIVINA PROVIDENCIA": ["36"],
                "SECESCAGRIPINA MONTES DEL VALLE": ["45"],
                "IEFEDERICO CARRASQUILLA": ["5"],
                "IEGUADALUPE": ["5"]
            },
            "SANTA CRUZ": {
                "INST EDUC ASIA IGNACIANA": ["39"],
                "SECESC  MANUEL URIBE ANGEL": ["36"],
                "SECESC REPUB DE NICARAGUA": ["24"],
                "IEFE Y ALEGRIA JMARIA VELAZ": ["6"],
                "IE BARRIO SANTA CRUZ": ["24"],
                "SEC ESC ARZOBISPO GARCIA": ["27"],
                "IE REPUBLICA DE HONDURAS": ["21"]
            },
            "MANRIQUE": {
                "IE REPUBLICA DE BARBADOS": ["41"],
                "IE SAN LORENZO DE ABURRA": ["25"],
                "IE MANUELA BELTRAN": ["53"],
                "SECESCSAN JOSEIE MAN BEL": ["35"],
                "IERAMON MUNERA LOPERA": ["7"],
                "IE BELLO ORIENTE": ["3"],
                "IE JOSE ROBERTO VASQUEZ": ["1"],
                "IE JOSE ANTONIO GALAN": ["33"],
                "IE HERNAN TORO AGUDELO": ["34"],
                "SEC ESC SUSANA DIAZIE RODRIGO L BONILLA": ["23"],
                "IE SAN JUAN BAUTISTA DE LA SALLE": ["3"]
            },
            "ARANJUEZ": {
                "COL AGUSTINIANO DE SAN NICOLA": ["43"],
                "IE MONSENOR FCO CRISTOBAL T": ["36"],
                "IE GILBERTO ALZATE AVENDANO": ["37"],
                "IE CAMPO VALDES": ["25"],
                "IESAN JUAN BOSCO": ["5"],
                "IE ALFONSO MORA NARANJO": ["33"],
                "IE JOSE MARIA BRAVO MARQUEZ": ["20"],
                "IE FRANCISCO MIRANDA": ["51"],
                "IE JAVIERA LONDONO": ["32"],
                "IE EL BOSQUE": ["10"],
                "IE FRANCISCO MIRANDA SD JULIO ARBOLEDA": ["3"]
            },
            "CASTILLA": {
                "IE JULIO CESAR GARCIA": ["34"],
                "SEC ESC EDUARDO URIBE BOTERO": ["30"],
                "IE PBRO ANTONIO JOSE BERNAL": ["51"],
                "IESEBASTIAN DE BELALCAZAR": ["6"],
                "IE TRICENTENARIO": ["23"],
                "SEC ESC TOSCANA": ["3"],
                "IE MARIA MONTESSORI": ["32"],
                "IE MAESTRO ARENAS BETANCUR": ["39"],
                "IE DINAMARCA": ["8"],
                "INST EDU REPUBLICA DE URUGUA": ["39"],
                "IE FELIX DE BEDOUT MORENO": ["5"]
            },
            "DOCE DE OCTUBRE": {
                "IE CIUDADELA LAS AMERICAS": ["30"],
                "COL VIDA Y PAZ PROGRESAR UNID": ["24"],
                "SEC ESC LEON DE GREIFF": ["23"],
                "IE DOCE DE OCTUBRE": ["24"],
                "CASD JOSE MARIA ESPINOSA PRIETO": ["4"],
                "IE EL TRIUNFO SANTA TERESA": ["4"],
                "IE SANTA JUANA DE LESTONACC": ["19"],
                "IE JESUS MARIA VALLE JARAMILLO": ["4"],
                "IEMAESTRO FERNANDO BOTERO": ["34"],
                "IEALFREDO COCK ARANGO": ["32"],
                "SECESCSAN MARTIN DE PORRES": ["20"],
                "IE KENNEDY": ["36"],
                "SECCONCENTRACION EDUCKENNEDY": ["19"],
                "IEJORGE ELIECER GAITANPPAL": ["6"],
                "SE ESC PEDREGAL": ["8"],
                "IELA ESPERANZA": ["6"]
            },
            "ROBLEDO": {
                "IE SAN VICENTE DE PAUL": ["33"],
                "SECESC EL DIAMANTE": ["32"],
                "IEEL DIAMANTE SEDE BTO": ["17"],
                "IEFE Y ALEGRIA VILLA DE LA C": ["40"],
                "IEFE Y ALEGRIA SAN JOSE": ["10"],
                "TECNOLOGICO DE ANTIOQUIA": ["18"],
                "IE JESUS REY": ["5"],
                "IE AURES": ["4"],
                "IEMON GERARDO VALENCIA CAN": ["12"],
                "IE JORGE ROBLEDO": ["41"],
                "IEMARISCAL ROBLEDO": ["23"],
                "SECESC SANTA MARGARITA": ["20"],
                "COLEGIO FERRINI": ["15"],
                "IECAMILO MORA CARRASQUILLA": ["6"],
                "COL MAYOR DE ANTIOQUIA": ["3"],
                "IE BARRIO OLAYA HERRERA": ["2"]
            },
            "VILLA HERMOSA": {
                "IE JUAN DE DIOS CARVAJAL": ["32"],
                "IE JUAN DE LA CRUZ POSADA": ["14"],
                "IEJOSE CELESTINO MUTIS": ["8"],
                "INSTMETROPOLITANO ITM": ["3"],
                "SECESCJULIA AGUDELO": ["66"],
                "SECESCNINO JESUS DE PRAGA": ["7"],
                "IESOL DEL ORIENTE": ["6"],
                "IE LUIS CARLOS GALAN SARMIENTO PPAL": ["2"],
                "IE VILLA TURBAY": ["12"],
                "SECESCUELA LAS ESTANCIAS": ["10"],
                "SECESCSOR MARIA LUISA COURB": ["25"],
                "IE SAN FRANCISCO DE ASIS": ["19"],
                "IE FELIX HENAO BOTERO": ["18"]
            },
            "BUENOS AIRES": {
                "IEGUADALUPANO LA SALLE": ["32"],
                "IE MERCEDITAS GOMEZ MARTINE": ["29"],
                "IE MANUEL JOSE CAICEDO": ["24"],
                "IE LA MILAGROSA": ["59"],
                "COLEGIO EUCARISTICO": ["4"],
                "SENA SD BUENOS AIRES": ["1"],
                "IE LORETO GABRIELA GOMEZ CA": ["19"],
                "INSTEDUCATIVA FEDERICO OZANA": ["44"],
                "ESCUELA NORMAL SUPERIOR ANT": ["21"],
                "SEC ESC JOSE DE SAN MARTIN": ["30"],
                "SEC ESC JUAN CANCIO RESTREPO": ["1"]
            },
            "LA CANDELARIA": {
                "IE TULIO OSPINA": ["40"],
                "SECESCAGUSTIN NIETO CABALLE": ["9"],
                "COLEGIO SALESIANO EL SUFRAGIO": ["51"],
                "IE CEFA": ["43"],
                "IE HECTOR ABAD GOMEZ": ["26"],
                "IE JAVIER A LONDONO": ["3"],
                "ITM PRADO CENTRO": ["3"],
                "CENTRO COMERCIAL SAN DIEGO": ["56"],
                "ALCALDIA MUNICIPAL SOTANO": ["41"],
                "SENA": ["19"],
                "UNIVERSIDAD CLARETIANA": ["3"]
            },
            "LAURELES": {
                "INSTITUTO JORGE ROBLEDO": ["27"],
                "INSTEDUC MATER DEI": ["37"],
                "IE MARCO FIDEL SUAREZ": ["35"],
                "COLEGIO CALASANZ FEMENINO": ["16"],
                "COL SAN IGNACIO SD MAYORES": ["3"],
                "SEC ESC CARLOS OBANDO VELASCO": ["2"],
                "SECESC AGRUPACION COLOMBIA": ["39"],
                "IE LUCRECIO JARAMILLO VELEZ": ["56"],
                "COLEGIO BETLEHEMITAS": ["10"],
                "COLSAN IGNACIO SECINFANTIL": ["6"],
                "UNIVERSIDAD ADVENTISTA": ["4"],
                "UNIVERSIDAD PONTIFICIA BOLIVARIANA": ["4"]
            },
            "LA AMERICA": {
                "SEC ESC SANTA LUCIA": ["37"],
                "IE CONCEJO DE MEDELLIN": ["66"],
                "INST EDUC LA PIEDAD": ["30"],
                "IESANTA ROSA DE LIMA": ["7"],
                "IE LOLA GONZALEZ": ["3"],
                "IE RAFAEL URIBE URIBE": ["32"],
                "SECESCRAFAEL URIBE URIBE": ["14"],
                "SEC ESC PEDRO DE CASTRO": ["44"],
                "IEFRANCISCO ANTONIO ZEA": ["10"],
                "IE AMERICA": ["6"],
                "IESAMUEL BARRIENTOS": ["3"],
                "LICEO SALAZAR Y HERRERA": ["4"]
            },
            "SAN JAVIER": {
                "IE BLANQUIZAL EN ADMON CR": ["14"],
                "SEC ESC REPUBLICA DE PANAMA": ["18"],
                "IE JUAN XXIII": ["7"],
                "SEC ESC MONSENOR PERDOMO": ["36"],
                "SECESCPIO XII": ["28"],
                "IESTELLA VELEZ LONDONO": ["4"],
                "IELA INDEPENDENCIA": ["44"],
                "SECESCEL SOCORRO": ["27"],
                "SECESCMIXTA BETANIA": ["26"],
                "IEEL CORAZON": ["6"],
                "IEEDUARDO SANTOS": ["6"],
                "IECARLOS VIECO": ["11"],
                "SEDE AMOR AL NINO": ["3"]
            },
            "EL POBLADO": {
                "COLSANTA MARIA DEL ROSARIO": ["26"],
                "COLMARYMOUNT": ["15"],
                "COLEGIO PALERMO DE SAN JOSE": ["43"],
                "COLEGIO SAN LUCAS": ["2"],
                "ESC GUILLERMO ECHAVARRIA MISAS": ["3"],
                "POLITECNICO JAIME ISAZA CADAVI": ["26"],
                "IEINEM JOSE FELIX DE RESTREP": ["35"],
                "UNIVERSIDAD EAFIT": ["53"],
                "COL DE LA CIA DE MARIA LA ENSE": ["6"],
                "SAN JOSE DE LAS VEGAS": ["3"]
            },
            "GUAYABAL": {
                "SECESCSANTISIMA TRINIDAD": ["21"],
                "IEBENJAMIN HERRERA": ["21"],
                "IECRISTO REY": ["38"],
                "SECCION ESC REPUBLICA DE COSTA RICA": ["25"],
                "SECESCLA COLINA": ["14"],
                "IE LA SALLE CAMPO AMOR": ["11"],
                "SEC ESC CRISTO REY APOLO": ["2"]
            },
            "BELEN": {
                "IE FATIMA NUTIBARA": ["27"],
                "ESCSOFIA OSPINA DE NAVARRO": ["22"],
                "IEJUAN MARIA CESPEDES": ["60"],
                "IE GUILLERMO VALENCIA": ["26"],
                "UNIDDEPORTIVA ANDRES ESCOBAR": ["6"],
                "LICEO SAN RAFAEL": ["15"],
                "COLEGIO SAN JUAN BOSCO": ["2"],
                "SECESCJACKELINE KENNEDY": ["20"],
                "IEJOSE MARIA BERNAL": ["28"],
                "INSTSAN CARLOS DE LA SALLE": ["41"],
                "IEALCALDIA DE MEDELLIN": ["39"],
                "COLEGIO PADRE MANYANET": ["14"],
                "IECAMPILLAS DEL ROSARIO": ["6"],
                "IE ANTONIO RICAURTE": ["3"],
                "IERAMON GIRALDO CEBALLOS": ["37"],
                "UNIVERSIDAD DE MEDELLIN": ["52"],
                "IE HORACIO MUNOZ SUESCUN": ["27"],
                "IEREPUBLICA DE VENEZUELA": ["24"],
                "I E SAN ROBERTO BELARMINO": ["5"],
                "INSTITUTO PEDRO JUSTO BERRIO": ["1"]
            },
            "ALTAVISTA": {
                "IE DEBORA ARANGO PEREZ": ["22"]
            },
            "SAN ANTONIO DE PRADO": {
                "IE FE Y ALEGRIA EL LIMONAR": ["23"],
                "IE SAN ANTONIO DE PRADO": ["55"],
                "IEMANUEL DE JBETANCUR": ["48"],
                "IE MONSENOR VICTOR WIEDEMANN": ["3"]
            },
            "PALMITAS": {
                "IE HECTOR ROGELIO MONTOYA": ["7"]
            },
            "SANTA ELENA": {
                "CASA DE GOBIERNO SANTA ELENA": ["17"]
            },
            "SAN CRISTOBAL": {
                "IE SAN CRISTOBAL": ["44"],
                "PARQUE BIBLIOTECA FERNANDO BOTERO": ["43"],
                "IE LUSITANIA": ["13"],
                "IE PRESBITERO JUAN J ESCOBAR": ["3"],
                "IE LOMA HERMOSA": ["4"]
            }
        },
        "APARTADO": {
            "BERNARDO JARAMILLO": {
                "IE ALFONSO LOPEZ": ["23"],
                "IE POLICARPA SALAVARRIETA": ["23"],
                "IE LA PAZ": ["13"],
                "IE LA PAZ 20 DE ENERO": ["5"]
            },
            "OCHO DE FEBRERO": {
                "I E SAN FRANCISCO DE ASIS": ["25"],
                "I E SAN PEDRO CLAVER": ["21"],
                "HOGAR INFANTIL LOS GIRASOLES": ["12"],
                "I E SANTA MARIA LA ANTIGUA": ["3"]
            },
            "PUEBLO NUEVO": {
                "IE HERACLIO MENA PADILLA": ["23"],
                "COLEGIO ADVENTISTA": ["15"],
                "IE CADENA LAS PLAYAS": ["2"]
            },
            "JOSE JOAQUIN VELEZ": {
                "IE CAMPO ALEGRE": ["5"],
                "IE MADRE LAURA": ["14"],
                "COL COOPERATIVO": ["18"],
                "IE JOSE JOAQUIN VELEZ": ["24"],
                "IE JOSE CELESTINO MUTIS": ["11"]
            },
            "CHURIDO PUEBLO": {
                "CHURIDO": ["4"]
            },
            "PUERTO GIRON": {
                "PUERTO GIRON": ["2"]
            },
            "SAN JOSE DE APARTADO": {
                "SAN JOSE DE APARTADO": ["5"]
            },
            "EL REPOSO": {
                "EL REPOSO": ["13"]
            }
        },
        "BARBOSA": {
            "EL HATILLO": {
                "EL HATILLO": ["14"]
            }
        },
        "BELLO": {
            "PARIS": {
                "IE BARRIO PARIS MEGACOLEGIO": ["16"],
                "IE ALBERTO DIAZ MUNOZ": ["16"],
                "IE ALB DIAZ MUNOZ SECCPRAD": ["7"],
                "CENTRO EDUCAT RAQUEL JARAMILLO": ["22"],
                "IE BARRIO PARIS": ["11"]
            },
            "MADERA": {
                "IE ATANASIO GIRARDOT": ["45"],
                "COL PARROQ SAN FCO DE ASIS": ["25"],
                "IE SUAREZ DE LA PRESENTACION": ["32"],
                "COL SAN BUENAVENTURA": ["20"]
            },
            "SANTA ANA": {
                "IE TOMAS CADAVID RESTREPO": ["25"],
                "COLEGIO LA SALLE": ["38"]
            },
            "LA CUMBRE": {
                "IE FERNANDO VELEZ": ["39"],
                "IE LA PRIMAVERA": ["20"],
                "IE NAZARETH": ["21"],
                "IE CARLOS PERES SEDE ROSALIA": ["3"]
            },
            "SUAREZ": {
                "INST UNIVERSITARIA MARCO FIDEL SUAREZ": ["27"],
                "COL JESUS DE LA BUENA ESPERANZ": ["45"],
                "IE SAGRADO CORAZON": ["19"],
                "IE JORGE ELIECER GAITAN": ["50"],
                "IE SANTA CATALINA": ["23"],
                "IE LA MILAGROSA": ["22"]
            },
            "BELLAVISTA": {
                "IE HERNAN VILLA BAENA": ["35"],
                "IE VILLA DEL SOL SEC 1": ["22"],
                "IE VILLA DEL SOL SEC 2": ["3"]
            },
            "ALTOS DE NIQUIA": {
                "IE GILBERTO ECHEVERRI MEJIA": ["19"],
                "IE CIAL ANTONIO ROLDAN": ["21"],
                "IE JOSEFA CAMPOS": ["16"]
            },
            "NIQUIA": {
                "IE CONCEJO DE BELLO": ["25"],
                "IE FE Y ALEGRIA NUEVA GENERAC": ["23"],
                "COL NUESTRA SENORA DE CHIQUINQ": ["20"],
                "BETSABE ESPINAL": ["15"]
            },
            "GUASIMALITO": {
                "IE NAVARRA": ["6"],
                "IE NAVARRA SD EL TREBOL": ["6"]
            },
            "FONTIDUENO": {
                "IE LAS VEGAS": ["13"],
                "IE FONTIDUENO JAIME ARANGO R": ["20"]
            },
            "ZAMORA": {
                "IE FEDERICO SIERRA ARANGO": ["33"],
                "IE LA GABRIELA": ["19"],
                "IE ZAMORA CENTENARIO": ["7"]
            },
            "SAN FELIX": {
                "SAN FELIX": ["7"]
            }
        },
        "CARMEN DE VIBORAL": {
            "LA ESPERANZA": {
                "LA ESPERANZA": ["1"]
            },
            "ALTO GRANDE": {
                "ALTO GRANDE": ["1"]
            },
            "LA CHAPA": {
                "LA CHAPA": ["3"]
            },
            "SANTA RITA": {
                "SANTA RITA": ["1"]
            },
            "SANTA INES": {
                "SANTA INES": ["1"]
            },
            "LA MADERA": {
                "LA MADERA": ["2"]
            },
            "AGUAS CLARAS": {
                "AGUAS CLARAS": ["4"]
            }
        },
        "EBEJICO": {
            "BRASIL": {
                "BRASIL": ["4"]
            },
            "EL ZARZAL": {
                "EL ZARZAL": ["1"]
            },
            "GUAYABAL": {
                "GUAYABAL": ["1"]
            },
            "LA CLARA": {
                "LA CLARA": ["2"]
            },
            "SEVILLA": {
                "SEVILLA": ["7"]
            }
        },
        "GOMEZ PLATA": {
            "EL SALTO": {
                "EL SALTO": ["2"]
            },
            "SAN MATIAS": {
                "SAN MATIAS": ["2"]
            },
            "LA ESTRELLA": {
                "LA ESTRELLA": ["1"]
            }
        },
        "GRANADA": {
            "SANTA ANA": {
                "SANTA ANA": ["2"]
            }
        },
        "ITAGUI": {
            "EL MANZANILLO": {
                "EL MANZANILLO": ["23"],
                "IE MARIA JOSEFA ESCOBAR": ["5"]
            }
        },
        "ITUANGO": {
            "SANTA RITA DE SINITAVE": {
                "SANTA RITA DE ITUANGO": ["7"]
            }
        },
        "LA CEJA": {
            "SAN JOSE": {
                "SAN JOSE": ["5"]
            }
        },
        "LA UNION": {
            "MESOPOTAMIA": {
                "MESOPOTAMIA": ["2"]
            }
        },
        "REMEDIOS": {
            "LA CRUZADAS": {
                "LA CRUZADA": ["10"]
            },
            "SANTA ISABEL": {
                "SANTA ISABEL": ["4"]
            }
        },
        "RIONEGRO": {
            "LIBONO MEJIA": {
                "IE JOSEFINA MUNOZ GONZALEZ": ["26"],
                "IE JULIO SANIN": ["25"],
                "COLISEO RUBEN DARIO QUINTERO": ["15"],
                "ESC JUAN MANUEL GONZALEZ": ["13"],
                "ESC UNIDA": ["17"],
                "COL QUEBRADA ARRIBA": ["12"],
                "COLISEO ALTO DEL MEDIO": ["13"]
            },
            "SAN ANTONIO": {
                "CONC EDU SAN ANTONIO": ["24"],
                "IT SANTIAGO DE ARMA": ["18"],
                "IE EL TRIANGULO": ["1"]
            },
            "MONS ALFONSO URIBE JARAMILLO": {
                "ESC CUATRO ESQUINAS": ["17"],
                "ESC CARMELA BIANCHETTI": ["9"]
            },
            "EL PORVENIR": {
                "ESC EDUARDO URIBE BOTERO": ["18"],
                "LIC CONSEJO MUNICIPAL": ["21"],
                "ESC PASCUALA MUNOZ": ["11"]
            },
            "DEL SUR": {
                "DEL SUR": ["18"],
                "COL CABECERAS CORREG DEL SUR": ["1"]
            },
            "JOSE MARIA CORDOVA MUNOZ": {
                "JOSE MARIA CORDOVA MUNOZ": ["7"],
                "AUDITORIO AEROPUERTO CORR JMC": ["9"]
            },
            "CENTRO CASIMIRO GARCIA": {
                "CENTRO": ["3"],
                "ESC SAN JOSE DE LAS CUCHILLAS": ["2"]
            },
            "NORTE NESTOR E SANINT ALV": {
                "NORTE": ["2"],
                "IE ANA GOMEZ DE SIERRA": ["10"]
            }
        },
        "SONSON": {
            "ALTO DE SABANAS": {
                "ALTO DE SABANAS": ["3"],
                "EL SALTO": ["1"],
                "LA LOMA": ["1"],
                "LLANADA SANTA CLARA": ["2"],
                "ROBLAL ARRIBA": ["1"]
            },
            "DANTAS": {
                "DANTAS": ["6"],
                "LA MESA": ["1"]
            },
            "SAN MIGUEL": {
                "SAN MIGUEL": ["4"]
            },
            "LOS MEDIOS": {
                "LOS MEDIOS": ["2"],
                "LAS CRUCES": ["1"],
                "ARENILLAL": ["1"]
            },
            "LOS POTREROS": {
                "LOS PLANES": ["1"],
                "LOS POTREROS": ["1"]
            },
            "RIO VERDE DE LOS HENAOS": {
                "EL SALADO": ["1"],
                "LA TORRE": ["1"],
                "RIOVERDE DE LOS HENAOS": ["1"]
            },
            "JERUSALEN LA FLORIDA": {
                "JERUSALEN LA FLORIDA": ["2"]
            },
            "RIOVERDE DE LOS MONTES": {
                "BRASILAL": ["1"],
                "RIOVERDE DE LOS MONTES": ["2"]
            }
        },
        "VEGACHI": {
            "EL TIGRE": {
                "EL TIGRE": ["3"]
            }
        },
        "ABEJORRAL": {},
        "ABRIAQUI": {},
        "ALEJANDRIA": {},
        "AMAGA": {},
        "AMALFI": {},
        "ANDES": {},
        "ANGELOPOLIS": {},
        "ANGOSTURA": {},
        "ANORI": {},
        "ANZA": {},
        "ARBOLETES": {},
        "ARGELIA": {},
        "ARMENIA": {},
        "BELMIRA": {},
        "BETANIA": {},
        "BETULIA": {},
        "BRICENO": {},
        "BURITICA": {},
        "CACERES": {},
        "CAICEDO": {},
        "CALDAS": {},
        "CAMPAMENTO": {},
        "CANASGORDAS": {},
        "CARACOLI": {},
        "CARAMANTA": {},
        "CAREPA": {},
        "CAROLINA DEL PRINCIPE": {},
        "CAUCASIA": {},
        "CHIGORODO": {},
        "CISNEROS": {},
        "CIUDAD BOLIVAR": {},
        "COCORNA": {},
        "CONCEPCION": {},
        "CONCORDIA": {},
        "COPACABANA": {},
        "DABEIBA": {},
        "DONMATIAS": {},
        "EL BAGRE": {},
        "EL CARMEN DE VIBORAL": {},
        "EL PENOL": {},
        "EL RETIRO": {},
        "EL SANTUARIO": {},
        "ENTRERRIOS": {},
        "ENVIGADO": {},
        "FREDONIA": {},
        "FRONTINO": {},
        "GIRALDO": {},
        "GIRARDOTA": {},
        "GUADALUPE": {},
        "GUARNE": {},
        "GUATAPE": {},
        "HELICONIA": {},
        "HISPANIA": {},
        "JARDIN": {},
        "JERICO": {},
        "LA ESTRELLA": {},
        "LA PINTADA": {},
        "LIBORINA": {},
        "MACEO": {},
        "MARINILLA": {},
        "MONTEBELLO": {},
        "MURINDO": {},
        "MUTATA": {},
        "NARINO": {},
        "NECHI": {},
        "NECOCLI": {},
        "OLAYA": {},
        "PEQUE": {},
        "PUEBLORRICO": {},
        "PUERTO BERRIO": {},
        "PUERTO NARE": {},
        "PUERTO TRIUNFO": {},
        "SABANALARGA": {},
        "SABANETA": {},
        "SALGAR": {},
        "SAN ANDRES DE CUERQUIA": {},
        "SAN CARLOS": {},
        "SAN FRANCISCO": {},
        "SAN JERONIMO": {},
        "SAN JOSE DE LA MONTANA": {},
        "SAN JUAN DE URABA": {},
        "SAN LUIS": {},
        "SAN PEDRO DE URABA": {},
        "SAN PEDRO DE LOS MILAGROS": {},
        "SAN RAFAEL": {},
        "SAN ROQUE": {},
        "SAN VICENTE": {},
        "SANTA BARBARA": {},
        "SANTA FE DE ANTIOQUIA": {},
        "SANTA ROSA DE OSOS": {},
        "SANTO DOMINGO": {},
        "SEGOVIA": {},
        "SOPETRAN": {},
        "TAMESIS": {},
        "TARAZA": {},
        "TARSO": {},
        "TITIRIBI": {},
        "TOLEDO": {},
        "TURBO": {},
        "URAMITA": {},
        "URRAO": {},
        "VALDIVIA": {},
        "VALPARAISO": {},
        "VENECIA": {},
        "VIGIA DEL FUERTE": {},
        "YALI": {},
        "YARUMAL": {},
        "YOLOMBO": {},
        "YONDO": {},
        "ZARAGOZA": {}
    },
    "ATLANTICO": {
        "BARRANQUILLA": {
            "SUR OCCIDENTE": {
                "INS DIS DESAR INTNVA GRANADA": ["34"],
                "IDETH SEDE PRINCIPAL SEDE II": ["15"],
                "COLDTAL OLAYAANT CEB108": ["15"],
                "COL HILDA MUNOZ": ["27"],
                "COLEGIO JORGE NICOLAS ABELLO": ["58"],
                "IDETH SEDE I PRIMARIA": ["25"],
                "INTEDUCATIVO DTALLOS PINOS": ["19"],
                "COLEGIO NAZARETH LUCERO": ["10"],
                "JORGE NICOLAS ABELLO SD 2": ["2"],
                "IE DISTRITAL LA MERCED": ["22"],
                "COL DTALJOSE EUSEBIO CARO": ["41"],
                "COLCAMILO TORRES": ["5"],
                "COL DTAL JUAN JOSE RONDON": ["34"],
                "IED JAVIER SANCHEZ": ["24"],
                "COL DISTRITAL MARIA INMACULAD": ["36"],
                "ESNORMAL SUPERIOR LA HACIENDA": ["39"],
                "COLEGIO AMERICANO": ["8"],
                "CDTALEL SILENCIOANT CEB 050": ["22"],
                "IEDINOCENCIO CHINCA": ["16"],
                "COLSOFIA CAMARGO DE LLERASB": ["35"],
                "COLSOFIA CAMARGO DE LLERASP": ["20"],
                "CDISTSARIT ARTETA DE VASQUEZ": ["38"],
                "INSTLAS MERCEDES COLSAN PABL": ["29"],
                "COLEGIO CRISTIANO PENIEL": ["24"],
                "IEDEL PUEBLO": ["31"],
                "COL ALBERTO ASSA": ["14"],
                "CENTRO DE EDUCACION BASICA CEB161": ["3"],
                "IEDSONIA AHUMADA": ["25"],
                "IEMUNDO BOLIVARIANO": ["33"],
                "ICLAS MALVINAS": ["32"],
                "IED ZAPATA OLIVELLA": ["29"],
                "JUAN ACOSTA SOLERA": ["36"],
                "COLTECSAN CARLOS BORROMEO": ["15"],
                "COLMANUEL ELKIN PATARROYO SD 2": ["20"],
                "COL MANUEL ELKIN PATARROYO SD 1": ["2"],
                "COLJOSE RAIMUNDO SOJO MEGA": ["4"],
                "EDEVARISTO SOURDIS SEDE 1": ["21"],
                "EDEVARISTO SOURDIS SEDE 2": ["22"],
                "IEDJOSE MARIA VELAZ SEDE 2": ["35"],
                "COLDTALLA SALLE": ["29"],
                "JUAN MINA": ["16"]
            },
            "METROPOLITANA": {
                "INSTECDISTCRUZADA SOCIAL": ["29"],
                "INST EDUC DIST SIMON BOLIVAR": ["22"],
                "CEBMEDIA NO103": ["24"],
                "COL DIST DE BQUILLA GABRIEL GARCIA M": ["35"],
                "IEDLA VICTORIA": ["9"],
                "NUEVO COL TEC DEL SANTUARIO": ["43"],
                "IDE COSTA CARIBE": ["24"],
                "JOSE CONSUEGRA HIGGINS": ["38"],
                "IDESTAMARIAMEGACOLEGIO": ["30"],
                "COLDISTDE BQUILLA SAN LUIS": ["39"],
                "IEDLAS AMERICAS": ["19"],
                "COLEGIO GOLDA MEIR": ["15"],
                "MEGACOLEGIO LAS CAYENAS": ["47"],
                "COLCOMUNITADTALPABLO NERUDA": ["44"],
                "IDECOLCIUDESTUDANT 186": ["10"],
                "IEDREUVEN FEUERSTEIN": ["5"],
                "COLMIGUEL ANGEL BUILES BLQ1": ["34"],
                "COLMIGUEL ANGEL BUILES BLQ2": ["18"],
                "IEDCIUDADELA 20 DE JULIO": ["50"],
                "MEGACOLEGIO CIUDADELA 20 JULIO": ["61"]
            },
            "SUR ORIENTE": {
                "IE DISTRITAL PAULO FREIRE": ["28"],
                "COLLA PRESENTACION": ["31"],
                "CENTRO SOCIAL DON BOSCO": ["51"],
                "COLTECDISTRDE REBOLO": ["6"],
                "CENTRO SOCIAL DON BOSCO SD 2": ["2"],
                "SENA SAN JOSE MULTIPLE BILINGUE": ["21"],
                "COL SAN JOSE SD 1": ["25"],
                "COLDTALSAN GABRIEL SEDE NO1": ["19"],
                "IEDLA UNION SEDE 2": ["3"],
                "IED DES HUMANO MARIA CANO": ["32"],
                "COLOCTAVIO PAZ": ["29"],
                "IEDLOS LAURELES": ["6"],
                "IEDMARCO FIDEL SUAREZ": ["32"],
                "IEDNTRASRA DE LAS NIEVES": ["17"],
                "COLEGIO SANTA TERESITA": ["26"],
                "IEDCALIXTO ALVAREZ": ["28"],
                "IED JOSE MARTI": ["33"],
                "INTDTALCASTILLO LA ALBORAYA": ["37"],
                "COLDTALBUENOS AIRESCODIBA": ["4"],
                "COLDTALMARIA AUXILIADORA": ["27"],
                "COLEGIO DE COMFAMILIAR": ["24"],
                "INSTELENA DE CHAUVIN": ["26"],
                "INSTITUTO PRESBITERIANO NAZARETH": ["24"],
                "COLLAS NIEVES SEDE 2": ["24"],
                "IED SAN MIGUEL ARCANGEL": ["27"],
                "IEDBARRIO SIMON BOLIVARBTO": ["27"],
                "IEDLUZ DEL CARIBE": ["16"],
                "COLDISTRITAL JORGE ISAAC": ["21"],
                "IDISTSIMON BOLIVAR PRIMARIA": ["20"]
            },
            "NORTE CENTRO HI": {
                "COLMAYORBQUILLA Y DEL CARIBE": ["30"],
                "IEDVILLANUEVA": ["10"],
                "ENORSUPERIOR DEL DTO BQUILLA": ["15"],
                "INSTLA SALLE": ["29"],
                "INST TECDE COMERCIO DE BARRANQUILLA": ["8"],
                "IT DE COMERCIO DE BQUILLA SD 2": ["1"],
                "IED NUESTRA SENORA DEL ROSA": ["26"],
                "IU ITSA SEDE BQUILLA": ["25"],
                "INST TEC NACIONAL DE COMERCI": ["25"],
                "ANTONIO JOSE DE SUCRE SEDE 2": ["22"],
                "INDEPORTES": ["2"],
                "IEDPESTALOZZI": ["19"],
                "NUEVO COLEGIO DEL PRADO": ["36"],
                "IED LA CONCEPCION": ["2"],
                "COLNTRASENORA DE NAZARETH": ["18"],
                "COLNTRASENORA DE LOURDES": ["24"],
                "COLBARRANQUILLA CODEBA": ["36"],
                "COLDISTRITAL BOSTON": ["8"],
                "COLSAGRADA FAMILIA": ["23"],
                "COLMILITAR ACOLSURE": ["35"],
                "SEMCONCILIAR SAN LUIS BELTRAN": ["26"],
                "COLINSTARIANO": ["4"],
                "COLJORGE ISAAC": ["12"],
                "COLHEBREO UNION": ["47"],
                "CORPORACION EL LITORAL SD II": ["6"]
            },
            "RIOMAR": {
                "COLLICEO CERVANTES": ["43"],
                "COLEL BUEN CONCEJO": ["23"],
                "COLLINDON B JOHNSON SCHOOL": ["31"],
                "UNIVERSIDAD AUTONOMA DEL CARIBE": ["3"],
                "INSTITUTO LAS AMERICAS": ["18"],
                "IEDSAN SALVADOR INEDISSA": ["14"],
                "CEDLIBERTADOR SIMON BOLIVAR": ["24"],
                "IE DISTRITAL IED SAN SALVADOR SD C": ["2"],
                "COLLA MEDALLA MILAGROSA": ["16"],
                "COLBIFI LA SALLE": ["45"],
                "COLLA ENSENANZA": ["28"],
                "LA PLAYA": ["38"]
            }
        }
    },
    "BOLIVAR": {
        "ACHI": {},
        "ALTOS DEL ROSARIO": {},
        "ARENAL": {},
        "ARROYOHONDO": {},
        "BARRANCO DE LOBA": {},
        "BRAZUELO DE PAPAYAL": {},
        "CALAMAR": {},
        "CANTAGALLO": {},
        "CICUCO": {},
        "CLEMENCIA": {},
        "CORDOBA": {},
        "EL CARMEN DE BOLIVAR": {},
        "EL GUAMO": {},
        "EL PENON": {},
        "HATILLO DE LOBA": {},
        "MAHATES": {},
        "MARGARITA": {},
        "MARIA LA BAJA": {},
        "MOMPOS": {},
        "MONTECRISTO": {},
        "MORALES": {},
        "NOROSI": {},
        "PINILLOS": {},
        "REGIDOR": {},
        "RIO VIEJO": {},
        "SAN CRISTOBAL": {},
        "SAN ESTANISLAO": {},
        "SAN FERNANDO": {},
        "SAN JACINTO DEL CAUCA": {},
        "SAN JACINTO": {},
        "SAN JUAN NEPOMUCENO": {},
        "SAN MARTIN DE LOBA": {},
        "SAN PABLO": {},
        "SANTA CATALINA": {},
        "SANTA ROSA": {},
        "SANTA ROSA DEL SUR": {},
        "SIMITI": {},
        "SOPLAVIENTO": {},
        "TALAIGUA NUEVO": {},
        "TIQUISIO": {},
        "TURBANA": {},
        "VILLANUEVA": {},
        "ZAMBRANO": {},
        "CARTAGENA DE INDIAS": {
            "HISTORICA Y DEL CARIBE": {
                "CENTRO COMERCIAL BOCAGRANDE": ["43"],
                "UNIV TECNOLG DE BOLIVAR  MA": ["43"],
                "LUDOTECA PARQUE CENTENARIO": ["3"],
                "COL EUCARISTICO DE SANTA TERESA": ["7"],
                "COLEGIO DE LA ESPERANZA": ["29"],
                "COLEGIO NAVAL DE CRESPO": ["40"],
                "COLEGIO EL CARMELO": ["16"],
                "COLEGIO BERVELLY HILLS": ["5"],
                "CLUB UNIVERSITARIO DE PROFESIONALES": ["3"],
                "COLEGIO LICEO BOLIVAR": ["31"],
                "IE STA MARIA SEDE SAGRADO CORAZON": ["31"],
                "IECORAZON DE MARIA": ["17"],
                "IE CORAZON DE MARIA S S J CLAV": ["14"],
                "IE SANTA MARIA": ["6"],
                "EUCARIST NTRA SRA DEL CARMEN DE TORICES": ["41"],
                "COLEGIO JOSE DE LA VEGA": ["44"],
                "IE HER ANTONIO RAMOS DE LA SALLE": ["6"],
                "INST ED ANA MARIA VELEZ DE TRUJILLO": ["8"],
                "CECON PIEDRA DE BOL UNIV CGENA": ["39"],
                "COLEGIO COMFENALCO": ["34"],
                "INST ED MADRE LAURA": ["9"],
                "SENA 4 VIENTOS": ["6"],
                "IE NUEVO BOSQUE": ["55"],
                "COL ALBERTO ELIAS FERNANDEZ": ["40"],
                "IE NUEVO BOSQUE SEDE JOSE MARIA CORDOBA": ["11"],
                "INST ED FERNANDO DE LA VEGA": ["6"],
                "E NORMAL SUPERIOR DE CARTAGENA D INDIAS": ["8"],
                "IE SAN JUAN DE DAMASCO": ["42"],
                "IE OLGA GONZALEZ ARRAUT": ["35"],
                "IE MANUELA BELTRAN  SED HIJOS": ["12"],
                "SEMINARIO CARTAGENA": ["5"],
                "UNIVERSIDAD ANTONIO NARINO": ["6"],
                "UNIVERSIDAD DE CARTAGENA CS": ["40"],
                "COL SALESIANOS SAN PEDRO CLAVE": ["18"],
                "IE ANTONIA SANTOS": ["41"],
                "UNIV DE CARTAGENA CLAUSTRO LA MERCED": ["2"],
                "FUNDACION UNIVERSITARIA LOS LIBERTADORES": ["10"],
                "COLMAYOR INST TECNOLOGICA": ["35"],
                "ESCUELA BELLAS ARTES": ["18"],
                "ESCUELAS PROFESIONALES SALESIANAS": ["15"],
                "SANTA CRUZ DEL ISLOTE": ["2"],
                "BARU": ["6"],
                "BOCACHICA": ["16"],
                "CANO DE LORO": ["6"],
                "ISLA FUERTE": ["3"],
                "ISLAS DEL ROSARIO": ["2"],
                "SANTA ANA": ["12"],
                "TIERRABOMBA": ["8"]
            },
            "LA VIRGEN Y TURISTICA": {
                "IE FE Y ALEGRIA LAS GAVIOTAS": ["55"],
                "IE LAS GAVIOTAS SEDE MOISES GO": ["13"],
                "IE LAS GAVIOTAS SEDE EL NINO JESUS": ["11"],
                "CENTRO DE ENSENANZA HIJOS DE BOLIVAR": ["8"],
                "IE FOCO ROJO": ["43"],
                "COLEGIO ALMIRANTE COLON S OLAYA": ["26"],
                "IE PLAYAS DE ACAPULCO": ["17"],
                "IE NUESTRA SENORA PERPETUO SOCORRO": ["3"],
                "IE FRANCISCO DE PAULA SANTANDE": ["35"],
                "IE MARIA REINA": ["26"],
                "ESCUELA CIUDAD DE TUNJA": ["37"],
                "IE CORAZON DE MARIA  LAZARO MARTINEZ": ["6"],
                "IE ANTONIO NARINO": ["9"],
                "IE PEDRO HEREDIA": ["8"],
                "IE CAMILO TORRES": ["53"],
                "CENTRO COLOMBIATON GUSTAVO PULECIO": ["37"],
                "IE LA LIBERTAD": ["10"],
                "IE NUESTRO ESFUERZO": ["9"],
                "IE CLEMENTE MANUEL ZABALA": ["3"],
                "IE JORGE GARCIA USTA": ["7"],
                "ESCUELA GABRIELA SAN MARTIN": ["52"],
                "COL FE Y ALEGRIA LAS AMERICAS": ["39"],
                "CENTRO CULTURAL LAS PALMERAS": ["15"],
                "IE DE FREDONIA": ["7"],
                "IE FULGENCIO LEQUERICA VELEZ": ["26"],
                "NUESTRA SENORA DEL CARMEN": ["33"],
                "IE FULGENCIO LEQUERICA VELEZ  ECUADOR": ["9"],
                "FUND UNIV COLOMBO INTERNACIONAL": ["6"],
                "ARROYO GRANDE": ["5"],
                "ARROYO DE PIEDRA": ["6"],
                "BAYUNCA": ["29"],
                "LA BOQUILLA": ["30"],
                "PONTEZUELA": ["5"],
                "PUNTA CANOA": ["3"]
            },
            "INDUSTRIAL DE LA BAHIA": {
                "COLEGIO INEM": ["43"],
                "CENT RECREACIONAL NAPOLEON PEREA": ["32"],
                "IE JOSE M RODRIGUEZ S ISABEL LA CATOLICA": ["13"],
                "IE JOSE MANUEL RJARDIN INF  CARACOLES": ["7"],
                "IE 20 DE JULIO": ["32"],
                "IE BERTHA GEDEON DE BALADI": ["32"],
                "COLEGIO ALMIRANTE COLON  VISTA HERMOSA": ["6"],
                "IE LUIS CARLOS LOPEZ": ["43"],
                "IE TERNERA": ["33"],
                "IE SOLEDAD ACOSTA DE SAMPER": ["4"],
                "UNIVERSIDAD SAN BUENAVENTURA": ["15"],
                "COL FE Y ALEGRIA EL PROGRESO": ["33"],
                "IE SAN FRANCISCO ASIS  HIJO DE LOS AGRI": ["25"],
                "CORPORACION MINUTO DE DIOS": ["4"],
                "IE POLICARPA SALAVARRIETA": ["3"],
                "IE MERCEDES ABREGO": ["62"],
                "COL SUENOS Y OPORTUNIDADES JES": ["34"],
                "IE MERCEDES ABREGO SEDE MEDELLIN": ["12"],
                "IE CIUDADELA 2000": ["6"],
                "IE SALVADOR MANDELA": ["8"],
                "IE ROSEDAL": ["8"],
                "IE JHON F KENNEDY": ["47"],
                "INST FEMENINO PROMOCION SOCIAL": ["47"],
                "IE NUESTRA SENORA DE LA CONSOLATA": ["6"],
                "IE JUAN JOSE NIETO": ["10"],
                "COLEGIO COMFAMILIAR": ["37"],
                "ESC ANA MARIA PEREZ OTERO": ["44"],
                "IE PROM SOCIAL DE CGENA SD LA CONSOLATA": ["5"],
                "IE AMBIENTALISTA CARTAGENA DE INDIAS": ["10"],
                "IE SEDE EMILIANO ALCALA ROMERO": ["3"],
                "PASACABALLOS": ["29"],
                "PASACABALLOS  MEMBRILLAL": ["3"]
            }
        },
        "ARJONA": {
            "05CORR PUERTO BADEL CANO SALADO": {
                "PUERTO BADEL CANO SALADO": ["4"]
            },
            "DE GAMBOTE": {
                "GAMBOTE": ["4"]
            },
            "DE ROCHA": {
                "ROCHA": ["7"]
            },
            "DE SINCERIN": {
                "SINCERIN": ["9"]
            }
        },
        "MAGANGUE": {
            "BARBOSA": {
                "BARBOSA": ["4"]
            },
            "BARRANCA DE YUCA": {
                "BARRANCA DE YUCA": ["6"]
            },
            "BETANIA": {
                "BETANIA": ["2"]
            },
            "BOCAS DE SAN ANT": {
                "BOCAS DE SAN ANTONIO": ["2"]
            },
            "10 CASCAJAL": {
                "CASCAJAL": ["11"]
            },
            "11  CEIBAL": {
                "CEIBAL": ["3"]
            },
            "12  COYONGAL": {
                "COYONGAL": ["3"]
            },
            "13  EL CUATRO": {
                "EL CUATRO": ["3"]
            },
            "14  GUAZO": {
                "GUAZO": ["2"]
            },
            "15 HENEQUEN": {
                "HENEQUEN": ["6"]
            },
            "16 EMAUS": {
                "EMAUS": ["1"]
            },
            "17 ISLA GRANDE": {
                "ISLA GRANDE": ["4"]
            },
            "18 JUAN ARIAS": {
                "JUAN ARIAS": ["5"]
            },
            "19 LA PASCUALA": {
                "LA PASCUALA": ["5"]
            },
            "20 LAS BRISAS": {
                "LAS BRISAS": ["2"]
            },
            "21 MADRID": {
                "MADRID": ["3"]
            },
            "22 PANSEGUITA": {
                "PANSEGUITA": ["3"]
            },
            "23 PALMARITO": {
                "PALMARITO": ["2"]
            },
            "24 PINALITO": {
                "PINALITO": ["4"]
            },
            "25 PLAYA DE LAS FL": {
                "PLAYA DE LAS FLORES": ["1"]
            },
            "26 PUERTO KENNEDY": {
                "PUERTO KENNEDY": ["2"]
            },
            "27 PUNTA DE CARTAG": {
                "PUNTA DE CARTAGENA": ["2"]
            },
            "28 EL RETIRO": {
                "EL RETIRO": ["5"]
            },
            "PUERTO NARINO": {
                "PUERTO NARINO": ["1"]
            },
            "ROMA": {
                "ROMA": ["1"]
            },
            "SAN ANTONITO": {
                "SAN ANTONITO": ["1"]
            },
            "32CORRE SAN JOSE DE LAS MARTAS": {
                "SAN JOSE DE LAS MARTAS": ["2"]
            },
            "33CORRE SAN RAFAEL DE CORTINA": {
                "SAN RAFAEL DE CORTINA": ["3"]
            },
            "34CORRE SAN SEBASTIAN DE BUENAV": {
                "SAN SEBASTIAN DE BUENAVISTA": ["2"]
            },
            "SANTA COITA": {
                "SANTA COITA": ["1"]
            },
            "SANTA FE": {
                "SANTA FE": ["5"]
            },
            "SANTA LUCIA": {
                "SANTA LUCIA": ["3"]
            },
            "SANTA MONICA": {
                "SANTA MONICA": ["1"]
            },
            "SANTA PABLA": {
                "SANTA PABLA": ["2"]
            },
            "SITIONUEVO": {
                "SITIONUEVO": ["3"]
            },
            "TACALOA": {
                "TACALOA": ["3"]
            },
            "TACASALUMA": {
                "TACASALUMA": ["3"]
            },
            "SABANETA": {
                "SABANETA": ["1"]
            },
            "TOLU": {
                "TOLU": ["2"]
            },
            "LA  VENTURA": {
                "LA VENTURA": ["4"]
            }
        },
        "TURBACO": {
            "07 CANAVERAL": {
                "CANAVERAL": ["7"]
            },
            "08 CORREG SAN JOSE DE CHIQUITO": {
                "CHIQUITO": ["1"]
            }
        }
    },
    "BOYACA": {
        "ALMEIDA": {},
        "AQUITANIA": {},
        "ARCABUCO": {},
        "BELEN": {},
        "BERBEO": {},
        "BETEITIVA": {},
        "BOAVITA": {},
        "BOYACA": {},
        "BRICENO": {},
        "BUENAVISTA": {},
        "BUSBANZA": {},
        "CALDAS": {},
        "CERINZA": {},
        "CHINAVITA": {},
        "CHIQUINQUIRA": {},
        "CHIQUIZA": {},
        "CHISCAS": {},
        "CHITA": {},
        "CHITARAQUE": {},
        "CHIVATA": {},
        "CHIVOR": {},
        "CIENEGA": {},
        "COMBITA": {},
        "COPER": {},
        "CORRALES": {},
        "COVARACHIA": {},
        "CUBARA": {},
        "CUCAITA": {},
        "CUITIVA": {},
        "DUITAMA": {},
        "EL COCUY": {},
        "EL ESPINO": {},
        "FIRAVITOBA": {},
        "FLORESTA": {},
        "GACHANTIVA": {},
        "GAMEZA": {},
        "GARAGOA": {},
        "GUACAMAYAS": {},
        "GUATEQUE": {},
        "GUAYATA": {},
        "GUICAN": {},
        "IZA": {},
        "JENESANO": {},
        "JERICO": {},
        "LA CAPILLA": {},
        "LA UVITA": {},
        "LA VICTORIA": {},
        "LABRANZAGRANDE": {},
        "MACANAL": {},
        "MARIPI": {},
        "MIRAFLORES": {},
        "MONGUA": {},
        "MONGUI": {},
        "MONIQUIRA": {},
        "MOTAVITA": {},
        "MUZO": {},
        "NOBSA": {},
        "NUEVO COLON": {},
        "OICATA": {},
        "OTANCHE": {},
        "PACHAVITA": {},
        "PAEZ": {},
        "PAJARITO": {},
        "PANQUEBA": {},
        "PAUNA": {},
        "PAYA": {},
        "PAZ DEL RIO": {},
        "PESCA": {},
        "PISBA": {},
        "QUIPAMA": {},
        "RAMIRIQUI": {},
        "RAQUIRA": {},
        "RONDON": {},
        "SABOYA": {},
        "SACHICA": {},
        "SAMACA": {},
        "SAN EDUARDO": {},
        "SAN JOSE DE PARE": {},
        "SAN LUIS DE GACENO": {},
        "SAN MATEO": {},
        "SAN MIGUEL DE SEMA": {},
        "SAN PABLO DE BORBUR": {},
        "SANTA MARIA": {},
        "SANTA ROSA DE VITERBO": {},
        "SANTA SOFIA": {},
        "SANTANA": {},
        "SATIVANORTE": {},
        "SATIVASUR": {},
        "SIACHOQUE": {},
        "SOATA": {},
        "SOCHA": {},
        "SOCOTA": {},
        "SOGAMOSO": {},
        "SOMONDOCO": {},
        "SORA": {},
        "SORACA": {},
        "SOTAQUIRA": {},
        "SUSACON": {},
        "SUTAMARCHAN": {},
        "SUTATENZA": {},
        "TASCO": {},
        "TENZA": {},
        "TIBANA": {},
        "TIBASOSA": {},
        "TINJACA": {},
        "TIPACOQUE": {},
        "TOCA": {},
        "TOGUI": {},
        "TOPAGA": {},
        "TOTA": {},
        "TUNJA": {},
        "TUNUNGUA": {},
        "TURMEQUE": {},
        "TUTA": {},
        "TUTAZA": {},
        "UMBITA": {},
        "VENTAQUEMADA": {},
        "VILLA DE LEYVA": {},
        "VIRACACHA": {},
        "ZETAQUIRA": {},
        "CAMPOHERMOSO": {
            "LOS CEDROS": {
                "LOS CEDROS": ["3"]
            }
        },
        "PAIPA": {
            "PALERMO": {
                "PALERMO": ["3"]
            }
        },
        "PUERTO BOYACA": {
            "VASCONIA": {
                "PUERTO PALAGUA": ["4"],
                "CENTRO CALDERON": ["3"],
                "VASCONIA PUERTO SERVIEZ": ["5"]
            },
            "GUANEGRO": {
                "GUANEGRO": ["2"]
            },
            "PTO GUTIERREZ": {
                "PUERTO GUTIERREZ": ["1"],
                "KILOMETRO 25": ["1"]
            },
            "PUERTO PINZON": {
                "PTO PINZON POZO BOYACA NO 2": ["3"]
            },
            "EL MARFIL": {
                "MARFIL": ["4"]
            },
            "PUERTO ROMERO": {
                "PUERTO ROMERO": ["2"]
            }
        }
    },
    "CALDAS": {
        "MANIZALES": {
            "ATARDECERES": {
                "IE LA LINDA": ["17"],
                "IECHIPRE": ["15"],
                "IE CHIPRE SEDE B": ["26"],
                "IE ADOLFO HOYOS OCAMPO": ["6"],
                "COLFILIPENSE NTRA SRA LOURDE": ["10"]
            },
            "SAN JOSE": {
                "IESAN AGUSTIN": ["13"],
                "IE INSTITUTO MANIZALES": ["24"],
                "IEDIVINA PROVIDENCIA": ["9"]
            },
            "CUMANDAY": {
                "IE MARCO FIDEL SUAREZ": ["21"],
                "EDIFICIO INDUSLICORDE CALDA": ["20"],
                "FAC DE BELLAS ARTESU CALDAS": ["16"],
                "IE GRAN COLOMBIA": ["16"],
                "LICEO ARQUIDIO DE NUESTRA SR": ["16"],
                "IE ISABEL LA CATOLICA": ["33"],
                "IE INSTITUTO UNIVER DE CAL": ["17"],
                "IETFRANCISCO JOSE DE CALDAS": ["14"]
            },
            "LA ESTACION": {
                "IE LA ASUNCION SEDE A": ["15"],
                "IE SAN JORGE": ["28"],
                "FACCIENCIAS PARA LA SALUD U": ["22"]
            },
            "CIUDADELA DEL NORTE": {
                "IEFE Y ALEGRIA LA PAZ SEDE": ["35"],
                "IE SINAI SEDE B": ["22"],
                "IE LA ASUNCION SEDE C": ["21"],
                "IE LICEO MIXTO SINAI SEDE A": ["18"],
                "IE BOSQUES DEL NORTE": ["26"]
            },
            "ECOTUR CERRO DE ORO": {
                "IE ESC NAL AUX DE ENFERMERIA SEDE A": ["16"],
                "IE LA SULTANA SEDE A": ["21"],
                "IE MARISCAL SUCRE SEDE B": ["10"],
                "IE MARISCAL SUCRE SEDE D": ["14"]
            },
            "TESORITO": {
                "IE SAN PIO X": ["24"],
                "IE SAN PIO X SEDE B": ["12"],
                "IE SAN PIO X SEDE A": ["12"],
                "IE MALTERIA": ["4"]
            },
            "PALOGRANDE": {
                "UNIVERSIDAD CATOLICA DE MANIZA": ["18"],
                "FAC DE CIENCIAS JUR Y SOC U": ["19"],
                "IENACIONAL AUXDE ENFERMERI": ["24"],
                "IENORMAL SUPERIOR DE MANIZA": ["11"]
            },
            "UNIVERSITARIA": {
                "IE ATANASIO GIRARDOT": ["19"],
                "IEEUGENIO PACELLISEDE PRIN": ["20"],
                "IE MALABAR SEDE A": ["16"],
                "IEARANJUEZ SEDE A": ["13"],
                "IE MALABAR SEDE B": ["6"]
            },
            "LA FUENTE": {
                "IEANDRES BELLO": ["19"],
                "IE PERPETUO SOCORRO": ["8"],
                "IE LEONARDO DAVINCI SEDE A": ["6"],
                "IE LEONARDO DAVINCI": ["28"],
                "IELATINOAMERICANO SEDE B": ["11"]
            },
            "LA MACARENA": {
                "COLMAYOR DE NUESTRA SENORA": ["27"],
                "IE LEON DE GREIFF": ["21"],
                "IE SIETE DE AGOSTO": ["28"],
                "IE ESTAMBUL": ["14"]
            },
            "COLOMBIA": {
                "COLOMBIA": ["5"]
            },
            "LA CRISTALINA": {
                "LA CRISTALINA": ["3"]
            },
            "EL REMANSO": {
                "EL REMANSO": ["10"]
            },
            "PANORAMA": {
                "PANORAMA": ["5"]
            },
            "CORREDOR  AGRO": {
                "AGROTURISTICO EL TABLAZO": ["13"]
            },
            "EL MANANTIAL": {
                "EL MANANTIAL": ["5"]
            },
            "RIOBLANCO": {
                "RIOBLANCO": ["1"]
            }
        },
        "AGUADAS": {
            "ARMA": {
                "ARMA": ["5"]
            }
        },
        "FILADELFIA": {
            "EL PINTADO": {
                "EL PINTADO": ["1"]
            },
            "EL VERSO": {
                "EL VERSO": ["1"]
            },
            "LA PAILA": {
                "LA PAILA": ["2"]
            },
            "MORRITOS": {
                "MORRITOS": ["1"]
            },
            "SAMARIA": {
                "SAMARIA": ["5"]
            },
            "SAN LUIS": {
                "SAN LUIS": ["2"]
            }
        },
        "MANZANARES": {
            "AGUABONITA": {
                "AGUA BONITA": ["2"],
                "LA CEIBA": ["1"],
                "SAN VICENTE": ["1"]
            },
            "LAS MARGARITAS": {
                "LAS MARGARITAS": ["2"]
            },
            "LOS PLANES": {
                "LOS PLANES": ["2"],
                "SAN JUAN LA SIRIA": ["1"]
            }
        },
        "MARMATO": {
            "SAN JUAN": {
                "SAN JUAN": ["4"]
            }
        },
        "MARQUETALIA": {
            "SANTA ELENA": {
                "SANTA ELENA": ["2"]
            }
        },
        "PACORA": {
            "CASTILLA": {
                "CASTILLA": ["3"]
            },
            "BUENOS AIRES": {
                "BUENOS AIRES": ["1"]
            },
            " LAS COLES": {
                "LAS COLES": ["3"]
            },
            " LOS MORROS": {
                "LOS MORROS": ["2"]
            },
            "SAN BARTOLOME": {
                "SAN BARTOLOME": ["3"]
            },
            "SAN LORENZO": {
                "SAN LORENZO": ["2"]
            }
        },
        "SALAMINA": {
            "SAN FELIX": {
                "IE SAN FELIX": ["3"]
            }
        },
        "ANSERMA": {},
        "ARANZAZU": {},
        "BELALCAZAR": {},
        "CHINCHINA": {},
        "LA DORADA": {},
        "LA MERCED": {},
        "MARULANDA": {},
        "NEIRA": {},
        "NORCASIA": {},
        "PALESTINA": {},
        "PENSILVANIA": {},
        "RIOSUCIO": {},
        "RISARALDA": {},
        "SAMANA": {},
        "SAN JOSE": {},
        "SUPIA": {},
        "VICTORIA": {},
        "VILLAMARIA": {},
        "VITERBO": {}
    },
    "CESAR": {
        "VALLEDUPAR": {
            "COMUNA 4": {
                "COL JOSE EUGENIO MARTINEZ": ["45"],
                "UNIV POPULAR DEL CESARSD SABANAS": ["6"],
                "COL NACIONALIZADO UPAR": ["37"],
                "INST TEC VILLA CORELCA": ["16"],
                "ESCUELA MIXTA NO 4": ["21"],
                "IE CONSUELO ARAUJO NOGUERA": ["25"]
            },
            "EL ALTO DE LA VUELTA": {
                "EL ALTO DE LA VUELTA": ["2"]
            },
            "08AGUAS BLANCAS": {
                "AGUAS BLANCAS": ["8"]
            },
            "09ATANQUEZ": {
                "ATANQUEZ": ["8"]
            },
            "10BADILLO": {
                "BADILLO": ["3"]
            },
            "11CARACOLI": {
                "CARACOLI": ["3"]
            },
            "12CHEMESQUEMENA": {
                "CHEMESQUEMENA": ["2"]
            },
            "13EL JABO": {
                "EL JABO": ["1"]
            },
            "14EL PERRO": {
                "EL PERRO": ["1"]
            },
            "15GUACOCHITO": {
                "GUACOCHITO": ["2"]
            },
            "16GUACOCHE": {
                "GUACOCHE": ["5"]
            },
            "17GUATAPURI": {
                "GUATAPURI": ["4"]
            },
            "18GUAIMARAL": {
                "GUAIMARAL": ["3"]
            },
            "19LA VEGA ARRIBA": {
                "LA VEGA ARRIBA": ["2"]
            },
            "20LA MINA": {
                "LA MINA": ["3"]
            },
            "21LOS CORAZONES": {
                "LOS CORAZONES": ["3"]
            },
            "22LOS HATICOS": {
                "LOS HATICOS": ["1"]
            },
            "23LOS VENADOS": {
                "LOS VENADOS": ["4"]
            },
            "24LAS RAICES": {
                "LAS RAICES": ["2"]
            },
            "25AZUCAR BUENA": {
                "AZUCAR BUENA": ["4"]
            },
            "26MARIANGOLA": {
                "MARIANGOLA": ["9"]
            },
            "27PATILLAL": {
                "PATILLAL": ["5"]
            },
            "28RIOSECO": {
                "RIOSECO": ["2"]
            },
            "29SABANA CRESPO": {
                "SABANA CRESPO": ["5"]
            },
            "30VALENCIA DE JESUS": {
                "VALENCIA DE JESUS": ["6"]
            },
            "31VILLA GERMANIA": {
                "VILLA GERMANIA": ["3"]
            }
        },
        "AGUACHICA": {},
        "AGUSTIN CODAZZI": {},
        "ASTREA": {},
        "BECERRIL": {},
        "BOSCONIA": {},
        "CHIMICHAGUA": {},
        "CHIRIGUANA": {},
        "CURUMANI": {},
        "EL COPEY": {},
        "EL PASO": {},
        "GAMARRA": {},
        "GONZALEZ": {},
        "LA GLORIA CESAR": {},
        "LA JAGUA DE IBIRICO": {},
        "LA PAZ": {},
        "MANAURE BALCON DEL CESAR": {},
        "PAILITAS": {},
        "PELAYA": {},
        "PUEBLO BELLO": {},
        "RIO DE ORO": {},
        "SAN ALBERTO": {},
        "SAN DIEGO": {},
        "SAN MARTIN": {},
        "TAMALAMEQUE": {}
    },
    "CORDOBA": {
        "AYAPEL": {},
        "BUENAVISTA": {},
        "CANALETE": {},
        "CERETE": {},
        "CHIMA": {},
        "CHINU": {},
        "CIENAGA DE ORO": {},
        "COTORRA": {},
        "LA APARTADA": {},
        "LORICA": {},
        "LOS CORDOBAS": {},
        "MOMIL": {},
        "MONTELIBANO": {},
        "MONITOS": {},
        "PLANETA RICA": {},
        "PUEBLO NUEVO": {},
        "PUERTO ESCONDIDO": {},
        "PURISIMA": {},
        "SAHAGUN": {},
        "SAN ANDRES DE SOTAVENTO": {},
        "SAN ANTERO": {},
        "SAN BERNARDO DEL VIENTO": {},
        "SAN CARLOS": {},
        "SAN JOSE DE URE": {},
        "SAN PELAYO": {},
        "TIERRALTA": {},
        "TUCHIN": {},
        "VALENCIA": {},
        "MONTERIA": {
            "MORINDO": {
                "MORINDO": ["5"]
            },
            "SANTA LUCIA": {
                "SANTA LUCIA": ["12"]
            },
            "SANTA CLARA": {
                "SANTA CLARA": ["7"]
            },
            "13CORREG 4 CANO VIEJO PALOTAL": {
                "CANO VIEJO PALOTAL": ["7"]
            },
            "NUEVO PARAISO": {
                "NUEVO PARAISO": ["3"]
            },
            "MARTINICA": {
                "MARTINICA": ["2"]
            },
            "LETICIA": {
                "LETICIA": ["7"]
            },
            "PUEBLO BUJO": {
                "PUEBLO BUJO": ["5"]
            },
            "LOMA VERDE": {
                "LOMA VERDE": ["8"]
            },
            "JARAQUIEL": {
                "JARAQUIEL": ["5"]
            },
            "LAS PALOMAS": {
                "LAS PALOMAS": ["9"]
            },
            "GUASIMAL": {
                "GUASIMAL": ["4"]
            },
            "EL SABANAL": {
                "EL SABANAL": ["17"]
            },
            "EL CERRITO": {
                "EL CERRITO": ["3"]
            },
            "PATIO BONITO": {
                "PATIO BONITO": ["7"]
            },
            "LA VICTORIA": {
                "LA VICTORIA": ["4"]
            },
            "GUATEQUE": {
                "GUATEQUE": ["3"]
            },
            "SAN ISIDRO": {
                "SAN ISIDRO": ["6"]
            },
            "SAN ANTERITO": {
                "SAN ANTERITO": ["10"]
            },
            "NUEVA LUCIA": {
                "NUEVA LUCIA": ["6"]
            },
            "SANTA ISABEL": {
                "SANTA ISABEL": ["5"]
            },
            "TRES PALMAS": {
                "TRES PALMAS": ["9"]
            },
            "TRES PIEDRAS": {
                "TRES PIEDRAS": ["5"]
            },
            "BUENOS AIRES": {
                "BUENOS AIRES": ["7"]
            },
            "LA MANTA": {
                "LA MANTA": ["4"]
            },
            "35CORREG 26 NUEVA ESPERANZA": {
                "NUEVA ESPERANZA": ["3"]
            },
            "GARZONES": {
                "GARZONES": ["24"]
            },
            "37CORREG 28 KILOMETRO 12": {
                "KILOMETRO 12": ["7"]
            }
        },
        "PUERTO LIBERTADOR": {
            "CENTRO AMERICA": {
                "CENTRO AMERICA": ["2"]
            },
            "PUERTO LOPEZ": {
                "PUERTO LOPEZ": ["1"]
            }
        }
    },
    "CUNDINAMARCA": {
        "FUSAGASUGA": {
            "NORTE": {
                "LA AGUADITA": ["5"]
            },
            "ORIENTAL": {
                "LOS SAUCES": ["5"]
            },
            "CENTRO": {
                "PARROQUIA NTRASRADE BELEN": ["20"],
                "COLEGIO SANTANDER": ["22"]
            },
            "SUR ORIENTAL": {
                "BOCHICA LA TRINIDAD": ["9"]
            },
            "OCCIDENTAL": {
                "CUCHARAL": ["12"]
            },
            "SUR OCCIDENTAL": {
                "EL TRIUNFO BOQUERON": ["3"],
                "LA PUERTA CHINAUTA": ["11"]
            }
        },
        "GIRARDOT": {
            "01CENTRO": {
                "COLEGIO AMERICANO": ["28"],
                "COLEGIO LA PRESENTACION": ["17"],
                "CTRO EDUC ESCUELA ANEXA": ["15"]
            },
            "02SUR": {
                "IE NUEVO HORIZONTE": ["28"],
                "LICEO LOS ANDES": ["6"]
            },
            "03OCCIDENTE": {
                "SEDE FRANCISCO J DE CALDAS": ["11"],
                "CTRO EDU ANTONIO NARINO": ["14"],
                "COL MAYOR MARTHA CATALINA": ["19"]
            },
            "04NORTE": {
                "ESC NORMAL SUPERIOR MARIA AUX": ["15"],
                "COLEGIO ATANASIO GIRARDOT": ["18"]
            },
            "05ORIENTE": {
                "COLISEO BARRIO SAN JORGE": ["15"],
                "COLISEO BARRIO KENNEDY": ["14"],
                "IE POLICARPA SALAVARRIETA": ["16"]
            },
            "BARZALOSA": {
                "BARZALOSA Y PIAMONTE": ["8"]
            },
            "SAN LORENZO": {
                "SAN LORENZO": ["1"]
            }
        },
        "GUADUAS": {
            "LA PAZ": {
                "LA PAZ": ["3"]
            },
            "PUERTO BOGOTA": {
                "CUATRO ESQUINAS": ["1"],
                "CEDRALES": ["1"],
                "PUERTO BOGOTA": ["10"],
                "MALAMBO": ["1"]
            }
        },
        "PACHO": {
            "PASUNCHA": {
                "PASUNCHA": ["3"]
            }
        },
        "YACOPI": {
            "IBAMA": {
                "IBAMA": ["2"]
            }
        },
        "AGUA DE DIOS": {},
        "ALBAN": {},
        "ANAPOIMA": {},
        "ANOLAIMA": {},
        "APULO": {},
        "ARBELAEZ": {},
        "BELTRAN": {},
        "BITUIMA": {},
        "BOGOTA": {},
        "BOJACA": {},
        "CABRERA": {},
        "CACHIPAY": {},
        "CAJICA": {},
        "CAPARRAPI": {},
        "CAQUEZA": {},
        "CARMEN DE CARUPA": {},
        "CHAGUANI": {},
        "CHIA": {},
        "CHIPAQUE": {},
        "CHOACHI": {},
        "CHOCONTA": {},
        "COGUA": {},
        "COTA": {},
        "CUCUNUBA": {},
        "EL COLEGIO": {},
        "EL PENON": {},
        "EL ROSAL": {},
        "FACATATIVA": {},
        "FOMEQUE": {},
        "FOSCA": {},
        "FUNZA": {},
        "FUQUENE": {},
        "GACHALA": {},
        "GACHANCIPA": {},
        "GACHETA": {},
        "GAMA": {},
        "GRANADA": {},
        "GUACHETA": {},
        "GUASCA": {},
        "GUATAQUI": {},
        "GUATAVITA": {},
        "GUAYABAL DE SIQUIMA": {},
        "GUAYABETAL": {},
        "GUTIERREZ": {},
        "JERUSALEN": {},
        "JUNIN": {},
        "LA CALERA": {},
        "LA MESA": {},
        "LA PALMA": {},
        "LA PENA": {},
        "LA VEGA": {},
        "LENGUAZAQUE": {},
        "MACHETA": {},
        "MADRID": {},
        "MANTA": {},
        "MEDINA": {},
        "MOSQUERA": {},
        "NARINO": {},
        "NEMOCON": {},
        "NILO": {},
        "NIMAIMA": {},
        "NOCAIMA": {},
        "PAIME": {},
        "PANDI": {},
        "PARATEBUENO": {},
        "PASCA": {},
        "PUERTO SALGAR": {},
        "PULI": {},
        "QUEBRADANEGRA": {},
        "QUETAME": {},
        "QUIPILE": {},
        "RICAURTE": {},
        "SAN ANTONIO DEL TEQUENDAMA": {},
        "SAN BERNARDO": {},
        "SAN CAYETANO": {},
        "SAN FRANCISCO": {},
        "SAN JUAN DE RIOSECO": {},
        "SASAIMA": {},
        "SESQUILE": {},
        "SIBATE": {},
        "SILVANIA": {},
        "SIMIJACA": {},
        "SOACHA": {},
        "SOPO": {},
        "SUBACHOQUE": {},
        "SUESCA": {},
        "SUPATA": {},
        "SUSA": {},
        "SUTATAUSA": {},
        "TABIO": {},
        "TAUSA": {},
        "TENA": {},
        "TENJO": {},
        "TIBACUY": {},
        "TIBIRITA": {},
        "TOCAIMA": {},
        "TOCANCIPA": {},
        "TOPAIPI": {},
        "UBALA": {},
        "UBAQUE": {},
        "UBATE": {},
        "UNE": {},
        "UTICA": {},
        "VENECIA": {},
        "VERGARA": {},
        "VIANI": {},
        "VILLAGOMEZ": {},
        "VILLAPINZON": {},
        "VILLETA": {},
        "VIOTA": {},
        "ZIPACON": {},
        "ZIPAQUIRA": {}
    },
    "BOGOTA DC": {
        "BOGOTA DC": {
            "USAQUEN": {
                "USAQUEN": ["99"],
                "SERVITA": ["78"],
                "CALAZANS": ["33"],
                "AQUILEO PARRA": ["48"],
                "LIJACA": ["38"],
                "SAN ANTONIO UNION COLOMBIA": ["37"],
                "BARRANCAS": ["38"],
                "LOS CEDRITOS 151": ["71"],
                "UNIVERSIDAD DEL BOSQUE": ["58"],
                "SANTO TOMAS DE AQUINO": ["56"],
                "INSTITUTO PEDAGOGICO": ["47"],
                "UNICENTRO": ["109"],
                "PLAZA MEXICO": ["42"],
                "SANTA PAULA": ["35"],
                "HACIENDA SANTA BARBARA": ["43"],
                "ALTOS DE SAN ISIDRO": ["8"],
                "LAS ORQUIDEAS": ["46"],
                "LOS CEDRITOS": ["40"],
                "CEDRO GOLF": ["37"],
                "BUENAVISTA": ["25"],
                "CANAIMA": ["15"],
                "ALESSANDRO VOLTA": ["11"],
                "LA CAROLINA": ["9"],
                "CRISTOBAL COLON": ["13"],
                "DIVINO MAESTRO A": ["14"],
                "DIVINO MAESTRO B": ["9"],
                "LAS MARGARITAS": ["29"],
                "ALTA BLANCA": ["8"],
                "COLEGIO TOBERIN B": ["10"],
                "EL PITE": ["3"],
                "EL CODITO": ["7"],
                "VERBENAL SANTA MARIA": ["14"],
                "SALUDCOOP NORTE": ["10"],
                "TORCA": ["1"],
                "CARULLA 140": ["27"],
                "COLEGIO SAN FRANCISCO CL 186": ["3"],
                "BUEN CONSEJO": ["5"],
                "PLAZOLETA SANTA BARBARA": ["7"],
                "UNIVERSIDAD MILITAR": ["2"],
                "LA ESTRELLITA": ["2"],
                "ESCLAVAS DEL SAGRADO CORAZON": ["3"],
                "CARDENAL SANCHA": ["5"],
                "SIERVAS SAN JOSE LA CALLEJA": ["3"],
                "COLEGIO PROVINMA": ["7"],
                "COLEGIO SANS FACON": ["2"],
                "ANGLO AMERICANO": ["2"],
                "PUREZA DE MARIA": ["2"]
            },
            "CHAPINERO": {
                "CHICO NORTE": ["73"],
                "CHICO RESERVADO": ["47"],
                "CHICO LICEO FRANCES LOUIS PAST": ["43"],
                "ANTIGUO COUNTRY PLAZOLETA CARU": ["37"],
                "UNIVERSIDAD EAN": ["27"],
                "UNIVERSIDAD SERGIO ARBOLEDA": ["17"],
                "UNIVERSIDAD PEDAGOGICA NACIONA": ["22"],
                "GRANADA COLEGIO SIMON RODRIGUEZ SD B": ["13"],
                "SENA CALLE 65": ["25"],
                "UNIVERSIDAD KONRAD LORENZ": ["32"],
                "SENA CALLE 52": ["32"],
                "UNIVERSIDAD PILOTO": ["21"],
                "COLEGIO CAMPESTRE MONTEVERDE S": ["16"],
                "COLEGIO SIMON RODRIGUEZ SEDE A": ["20"],
                "UNIVERSIDAD DISTRITAL": ["27"],
                "CENTRO COMERCIAL DE LA 93": ["12"],
                "MUSEO DEL CHICO": ["5"],
                "COLEGIO SAN MARTIN DE PORRES": ["3"],
                "MARISCAL SUCRE SEDE B": ["2"],
                "BETHLEMITASCALLE 65": ["3"],
                "U SANTO TOMAS CLAUSTRO": ["3"],
                "EL AQUINATE U SANTO TOMAS": ["2"],
                "COLEGIO NUEVO GIMNASIO": ["2"],
                "UNIVERSIDAD CATOLICA": ["3"],
                "UNIVERSIDAD DE LA SALLE": ["3"]
            },
            "SANTA FE": {
                "CAMILO TORRES": ["22"],
                "LA PERSEVERANCIA": ["19"],
                "POLICARPA SALAVARRIETA": ["15"],
                "PALACIO SAN FRANCISCO": ["33"],
                "BIBLIOTECA DISTRITAL ANTONIO N": ["13"],
                "LOS LACHES": ["20"],
                "CENTRO ORIENTE": ["12"],
                "SAN BERNARDO": ["15"],
                "LAS CRUCES": ["31"],
                "GIRARDOT": ["12"],
                "EL CONSUELO": ["20"],
                "MEDICINA LEGAL": ["8"],
                "LAS AGUAS": ["14"],
                "LAS NIEVES": ["21"],
                "EL VERJON": ["2"],
                "EL GRAN SAN": ["3"],
                "COLEGIO RAMON JIMENO": ["1"],
                "COLEGIO LA GIRALDA": ["4"],
                "UNIVERSIDAD JORGE TADEO LOZANO": ["6"],
                "UNIVERSIDAD INCCA DE COLOMBIA": ["2"]
            },
            "SAN CRISTOBAL": {
                "LAS BRISAS": ["17"],
                "SANTA ANA SUR": ["26"],
                "SAN CRISTOBAL SUR": ["41"],
                "LAS MERCEDES": ["27"],
                "SAN BLAS": ["41"],
                "PRIMERA DE MAYO": ["20"],
                "SOSIEGO": ["18"],
                "JUAN DEL RIZZO": ["47"],
                "MONTEBELLO": ["36"],
                "RAMAJAL": ["16"],
                "BELLO HORIZONTE": ["31"],
                "SAN ISIDRO": ["35"],
                "PARQUEADERO GUACAMAYAS": ["21"],
                "SAN MARTIN DE LOBA SUR": ["32"],
                "BELLAVISTA SAN CRISTOBAL": ["25"],
                "LA VICTORIA A": ["63"],
                "ALTAMIRA": ["38"],
                "EL QUINDIO": ["13"],
                "REPUBLICA DEL CANADA": ["18"],
                "LA GLORIA": ["28"],
                "JUAN REY": ["26"],
                "VILLA DE LOS ALPES": ["30"],
                "LOS LIBERTADORES": ["25"],
                "SAN PEDRO SUR ORIENTAL": ["16"],
                "VILLA DEL CERRO": ["13"],
                "CANADA GUIRA": ["8"],
                "ARBOLEDA SUR": ["19"],
                "20 DE JULIO SEDE B": ["15"],
                "SAN JUAN BOSCO SANTA ANA": ["7"],
                "SAN GERONIMO": ["3"],
                "SURAMERICA": ["4"],
                "SAN VICENTE COLSUBSIDIO": ["5"],
                "GUACAMAYAS II": ["7"],
                "ESCUELA LA VICTORIA B": ["9"],
                "JUANA ESCOBAR SEDE A": ["4"],
                "ROMA COLSUBSIDIO": ["1"],
                "LA GLORIA ESCUELA ALTAMIRA": ["5"],
                "RAMAJAL AMAPOLAS": ["2"],
                "EL RODEO SEDE B LA GLORIA": ["2"],
                "EL PORTAL": ["4"],
                "LA CASTANA": ["1"],
                "ATENAS": ["2"],
                "VILLA JAVIER LA MARIA": ["1"],
                "LA BELLEZA": ["2"],
                "AGUAS CLARAS": ["3"]
            },
            "USME": {
                "USME": ["37"],
                "EL DESTINO": ["6"],
                "MONTEBLANCO": ["33"],
                "SANTA MARTA": ["22"],
                "SANTA LIBRADA": ["50"],
                "ALMIRANTE PADILLA": ["41"],
                "USMINIA": ["22"],
                "MARICHUELA": ["35"],
                "LA AURORA": ["50"],
                "CHUNIZA": ["32"],
                "LA FLORA": ["15"],
                "EL HATO": ["8"],
                "LOS COMUNEROS": ["33"],
                "EL VIRREY": ["33"],
                "EL DANUBIO AZUL": ["26"],
                "JUAN JOSE RONDON": ["12"],
                "LA FORTALEZA": ["23"],
                "EL BOSQUE": ["24"],
                "VILLA HERMOSA": ["23"],
                "VALLES DE CAFAM": ["14"],
                "LA FISCALA": ["22"],
                "PORTAL USME": ["21"],
                "BRASILIA": ["11"],
                "EL CORTIJO": ["6"],
                "TENERIFE": ["4"],
                "GRAN YOMASA": ["11"],
                "CABANAS": ["4"],
                "TEJARES": ["5"],
                "COL FERNANDO GONZALEZ OCHOA": ["3"],
                "ALFONSO LOPEZ": ["14"],
                "LA ALBORADA": ["4"],
                "UVAL  PUERTA AL LLANO": ["7"],
                "VILLA ALEMANIA": ["6"],
                "USME  CENTRO": ["3"],
                "BRAZUELOS": ["2"],
                "CDC JULIO CESAR SANCHEZ": ["2"],
                "VIA AL LLANO": ["1"],
                "NUSADAL": ["3"]
            },
            "TUNJUELITO": {
                "TUNJUELITO A": ["39"],
                "FATIMA A": ["39"],
                "ABRAHAM LINCOLN": ["17"],
                "SAN CARLOS": ["40"],
                "SAN BENITO": ["33"],
                "EL TUNAL A": ["44"],
                "EL CARMEN SUR A": ["31"],
                "SAN VICENTE FERRER": ["37"],
                "VENECIA A": ["45"],
                "NUEVO MUZU  A": ["17"],
                "ISLA DEL SOL": ["24"],
                "VENECIA B": ["15"],
                "TUNJUELITO B": ["6"],
                "EL TUNAL B": ["18"],
                "EL CARMEN SUR B": ["10"],
                "FATIMA B": ["14"],
                "NUEVO  MUZO B": ["5"],
                "JARDIN INFANTIL ISLA DEL SOL": ["3"],
                "LICEO SANTA BERNARDITA": ["2"],
                "COL COOPERATIVO VENECIA": ["5"],
                "COOPERATIVO NUEVO MUZU": ["1"],
                "LICEO CAMPESTRE CAFAM": ["1"],
                "NUESTRA SENORA LAS VICTORIAS": ["1"],
                "SANTA CECILIA DE TUNJUELITO": ["1"],
                "ALCALDIA LOCAL DE TUNJUELITO": ["2"],
                "PORFIRIO BARBA JACOB": ["4"]
            },
            "BOSA": {
                "BOSA": ["90"],
                "VILLA DEL RIO": ["38"],
                "JOSE ANTONIO GALAN": ["34"],
                "LA AMISTAD": ["33"],
                "CARLOS ALBAN": ["47"],
                "LA LIBERTAD": ["73"],
                "PIAMONTE": ["52"],
                "LA ESTACION": ["45"],
                "LAURELES": ["38"],
                "PALESTINA": ["31"],
                "ORLANDO HIGUITA": ["41"],
                "BOSA PAULO VI": ["26"],
                "BOSA BRASILIA": ["38"],
                "ISLANDIA": ["18"],
                "JIMENEZ DE QUESADA": ["19"],
                "SAN BERNARDINO": ["27"],
                "BOSA SAN JOSE": ["23"],
                "SURBANA": ["13"],
                "NUEVO CHILE": ["35"],
                "SANTA FE DE BOSA": ["22"],
                "EL PORVENIR": ["45"],
                "EL RECREO": ["42"],
                "LA ESPERANZA": ["32"],
                "FRANCISCO DE PAULA SANTANDER": ["13"],
                "PABLO DE TARSO": ["26"],
                "ATALAYAS": ["31"],
                "EL RECUERDO SANTAFE": ["12"],
                "FE Y ALEGRIA SAN IGNACIO": ["25"],
                "CIUDADELA EL PORVENIR": ["25"],
                "CARLOS PIZARRO LEON GOMEZ": ["24"],
                "NUEVO CARLOS ALBAN": ["7"],
                "LAURELES II": ["13"],
                "NUEVA ESTACION": ["11"],
                "LA INDEPENDECIA": ["12"],
                "BOSANOVA": ["9"],
                "LLANO ORIENTAL": ["7"],
                "CARBONELL": ["10"],
                "NUEVA GRANADA": ["7"],
                "NARANJOS": ["10"],
                "CAMPO VERDE  POTRERITOS": ["12"],
                "CLARETIANO": ["14"],
                "VILLA DEL RIO II": ["8"],
                "HOLANDA": ["9"],
                "PORTAL DE BRASIL": ["5"],
                "RECREO MICHELSEN": ["19"],
                "CEDID SAN PABLO": ["9"],
                "LA ACUARELA": ["5"],
                "MIGUEL ANGEL ASTURIAS": ["2"],
                "COLISEO LA PALESTINA": ["2"],
                "NUESTRA SRA DE NAZARETH": ["1"],
                "MANUEL ELKIN PATARROYO": ["4"],
                "ALMACEN METRO AUTOPISTA SUR": ["3"],
                "JARDIN INFANTIL OLARTE": ["2"],
                "GIMNASIO LOS SAUCES": ["3"],
                "CLARETIANO EL LIBERTADOR": ["2"],
                "GIMNASIO REAL AMERICANO": ["4"],
                "LICEO CIUDAD CAPITAL": ["5"],
                "JUAN MAXIMILIANO AMBROSIO": ["3"],
                "INSTITUTO GUIMARC": ["2"],
                "COLEGIO COLSUBSIDIO CHICALA": ["5"],
                "COLEGIO CIUDADANOS DEL FUTURO": ["4"],
                "CC GRAN PLAZA BOSA": ["13"]
            },
            "KENNEDY": {
                "CLASS": ["39"],
                "ROMA": ["66"],
                "PERPETUO SOCORRO": ["30"],
                "CATALINA": ["33"],
                "CASABLANCA 32": ["47"],
                "BRITALIA": ["44"],
                "GRAN COLOMBIANO": ["30"],
                "LOS PERIODISTAS": ["25"],
                "AVENIDA BOYACA SUR": ["25"],
                "LA CHUCUA": ["24"],
                "CARIMAGUA": ["31"],
                "TIMIZA": ["46"],
                "LA UBA": ["23"],
                "SANTA MARTA DE PASTRANA": ["25"],
                "LA MACARENA": ["25"],
                "EL JAPON": ["51"],
                "ESTADOS UNIDOS SUPER 13": ["31"],
                "EL SAUCEDAL": ["19"],
                "PATIO BONITO": ["74"],
                "FRANCISCO JOSE DE CALDAS": ["29"],
                "BANDERAS": ["24"],
                "PROSPERO PINZON": ["28"],
                "KENNEDY LEY": ["39"],
                "LOS HEROES": ["17"],
                "COLEGIO OEA": ["21"],
                "FLORALIA": ["22"],
                "CARVAJAL II": ["19"],
                "VILLA ADRIANA": ["16"],
                "LAS AMERICAS": ["46"],
                "LA FLORESTA SUR": ["32"],
                "MARSELLA": ["35"],
                "ALOHA": ["9"],
                "MANDALAY  COLEGIO KENNEDY": ["27"],
                "PIO XII": ["23"],
                "CASTILLA": ["58"],
                "VILLANUEVA": ["18"],
                "JAIRO ANIBAL NINO": ["62"],
                "FAVIDI VISION DE COLOMBIA": ["38"],
                "ALMENAR": ["17"],
                "ALQUERIA DE LA FRAGUA": ["31"],
                "BOITA": ["25"],
                "COL DE TIMIZA": ["21"],
                "TINTALITO": ["34"],
                "LAS PALMERAS": ["21"],
                "DINDALITO": ["33"],
                "VALLADOLID": ["14"],
                "MILENIO PLAZA": ["21"],
                "COL GABRIEL BETANCOURT MEJIA": ["57"],
                "MARIA PAZ": ["22"],
                "COLEGIO NELSON MANDELA": ["18"],
                "COLEGIO GUSTAVO ROJAS PINILLA": ["25"],
                "COLEGIO CLASS IED SEDE B ROM": ["10"],
                "GEMA": ["3"],
                "VILLA RICA": ["9"],
                "COLEGIO JAIME GARZON": ["20"],
                "COLEGIO DEBORA ARANGO": ["6"],
                "CAMPO BELLO": ["18"],
                "PATIOS": ["22"],
                "MANUEL CEPEDA": ["21"],
                "BAZAAR ALSACIA": ["30"],
                "SANTA MARIA DE KENNEDY": ["24"],
                "TEQUENDAMA PAULO VI SD A": ["7"],
                "CENTRO DESARROLLO COMUNITARIO": ["11"],
                "COLEGIO RODRIGO TRIANA": ["15"],
                "COLEGIO DARIO ECHANDIA": ["16"],
                "SAN FRANCISCO EN EL TINTAL": ["16"],
                "CENTRO COMERCIAL CIUDAD TINTAL": ["15"],
                "TAGASTE": ["8"],
                "TIERRA DE CASTILLOS": ["19"],
                "COLEGIO FE Y ALEGRIA": ["9"],
                "COLEGIO JEAN PIAGET": ["6"],
                "METRO": ["5"],
                "COLEGIO SAN PEDRO CLAVER SEDE A": ["7"],
                "COLEGIO LA MAGDALENA": ["3"],
                "COLEGIO DISTRITAL JACKELINE": ["1"],
                "COLEGIO LUZ Y VIDA": ["2"],
                "COLEGIO RAFAEL GOBERNA": ["1"],
                "FERNANDO SOTO APARICIO SEDE B": ["2"],
                "LICEO EL CASTILLO": ["2"],
                "CENTRO COMERCIAL TINTAL PLAZA": ["11"],
                "SAGRADO CORAZON": ["2"],
                "CODEMA": ["4"],
                "SALON COMUNAL ROMA IV": ["2"],
                "KENNEDY CENTRAL": ["2"],
                "FERNANDO SOTO APARICIO": ["1"],
                "ROSA MARIA DE GORDILLO": ["2"],
                "SALON COMUNAL CARVAJAL OSORIO": ["2"],
                "CARLOS ARANGO VELEZ": ["3"],
                "NICOLAS ESGUERRA": ["1"],
                "SALON COMUNAL MARSELLA": ["4"],
                "ISABEL II": ["2"],
                "LICEO REYNEL": ["3"],
                "COLEGIO OEA ANTONIA SANTOS": ["1"],
                "SALON COMUNAL BOITA II SECTOR": ["2"],
                "SALON COMUNAL SANTA CATALINA": ["2"],
                "COLEGIO INTEGRACION MODERNA": ["1"]
            },
            "FONTIBON": {
                "FONTIBON": ["82"],
                "VILLEMAR": ["39"],
                "HAYUELOS CENTRO COMERCIAL": ["39"],
                "BELEN": ["32"],
                "SAN PABLO LA PERLA": ["21"],
                "VERSALLES": ["49"],
                "VERACRUZ": ["36"],
                "MODELIA SUR": ["35"],
                "SANTA CECILIA  MODELIA": ["26"],
                "CENTRO A": ["20"],
                "LA LAGUNA": ["35"],
                "BATAVIA": ["17"],
                "LA GIRALDA": ["28"],
                "PUERTA DE TEJA": ["10"],
                "AGUSTINIANO SALITRE": ["42"],
                "TRES ELEFANTES  LA ESPERANZA": ["22"],
                "PUENTE GRANDE": ["16"],
                "ZONA FRANCA": ["39"],
                "RECODO": ["26"],
                "SANTA TERESA CENTRO": ["11"],
                "LA FELICIDAD": ["14"],
                "NAVARRA MODELIA": ["13"],
                "MODELIA REAL": ["11"],
                "LA ALDEA": ["10"],
                "VAN UDEN CALLE 13": ["3"],
                "ATAHUALPA": ["8"],
                "HAYUELOS JUMBO": ["44"],
                "INTEGRADO SEDE B": ["1"],
                "ACUNAR": ["1"],
                "CASA PENSAMIENTO INTERCULTURAL": ["1"],
                "COLEGIO LUIS ANGEL ARANGO": ["2"],
                "FERROCAJA": ["1"],
                "EL CHARCO": ["1"],
                "MULTIPLAZA": ["3"],
                "SALITRE PLAZA": ["10"],
                "PABLO NERUDA": ["2"],
                "CACIQUE HYNTIBA": ["3"],
                "TRES ESTANCIAS": ["4"]
            },
            "ENGATIVA": {
                "BOYACA": ["49"],
                "ENGATIVA": ["69"],
                "NORMANDIA": ["43"],
                "BOSQUE POPULAR": ["24"],
                "EL GUALI": ["14"],
                "EL LUJAN": ["30"],
                "VILLA LUZ": ["40"],
                "LOS ALAMOS": ["29"],
                "VILLA AMALIA": ["41"],
                "VILLAS DE GRANADA": ["52"],
                "GARCES NAVAS": ["47"],
                "BOCHICA": ["54"],
                "LOS ALAMOS NORTE": ["41"],
                "LA SALINA": ["34"],
                "LA FLORIDA": ["20"],
                "SANTA HELENITA": ["39"],
                "LA EUROPA": ["15"],
                "LA ESTRADA": ["34"],
                "LA ESTRADITA": ["31"],
                "LAS FERIAS": ["29"],
                "BONANZA": ["35"],
                "STA MARIA DEL LAGO": ["21"],
                "LA GRANJA": ["28"],
                "FLORENCIA": ["16"],
                "SANTA ROSITA": ["38"],
                "QUIRIGUA": ["46"],
                "LA ESPANOLA": ["22"],
                "MINUTO DE DIOS": ["41"],
                "LA SERENA": ["19"],
                "BACHUE": ["42"],
                "QUIRIGUA PLAZA DE MERCADO": ["29"],
                "BACHUE II  BOCHICA I": ["27"],
                "VILLA GLADYS": ["31"],
                "EL CORTIJO LOCALIDAD 10": ["51"],
                "SAN MARCOS": ["41"],
                "SAN IGNACIO": ["10"],
                "TABORA": ["26"],
                "EL MORISCO": ["12"],
                "LOS CEREZOS": ["18"],
                "CIUDADELA COLSUBSIDIO": ["59"],
                "FERIAS II": ["16"],
                "EL MUELLE": ["46"],
                "LA CABANA": ["14"],
                "TISQUESUSA": ["6"],
                "SANTA CECILIA": ["11"],
                "PLAZUELAS DEL VIRREY": ["23"],
                "CIUDAD DE HONDA": ["6"],
                "ZARZAMORA": ["21"],
                "VILLA CONSTANZA": ["8"],
                "MORTINO": ["9"],
                "PALO BLANCO": ["5"],
                "SAN JOAQUIN": ["4"],
                "PRIMAVERA": ["5"],
                "BOLIVIA": ["17"],
                "GRAN GRANADA": ["31"],
                "EL CEDRO": ["6"],
                "TORQUIGUA": ["20"],
                "ALMAZAN ENGATIVA": ["24"],
                "UNICENTRO DE OCCIDENTE": ["9"],
                "SALON COMUNAL ALAMOS": ["2"],
                "LEON VALENCIA": ["1"],
                "LA CLARITA": ["3"],
                "CENTRO EDUCATIVO SCALAS": ["1"],
                "NACIONES UNIDAS SEDE B": ["1"],
                "COLEGIO NORTE ADVENTISTA": ["1"],
                "ALCALA SEDE B": ["1"],
                "DIVERPLAZA": ["6"],
                "MARGARITA BOSCO": ["4"],
                "COLEGIO COPES": ["2"]
            },
            "SUBA": {
                "PARQUE FUNDACION DE SUBA": ["111"],
                "COLEGIO SAN JOSE DE CALASANZ": ["39"],
                "COLEGIO VILLA ELISA SEDES C Y D": ["29"],
                "EL RINCON": ["70"],
                "COLEGIO ALBERTO LLERAS CAMARGO": ["53"],
                "TIBABUYES UNIVERSAL": ["36"],
                "CASABLANCA SUBA": ["16"],
                "VILLA DEL PRADOUNI AGRARIA": ["53"],
                "PRADO PINZON": ["28"],
                "PRADO CIUDAD JARDIN": ["24"],
                "CENTRO COMERCIAL BULEVAR NIZA": ["65"],
                "PONTEVEDRA": ["40"],
                "SAN NICOLASAGUSTINIANO NORTE": ["30"],
                "LA CONEJERA": ["7"],
                "PRADO VERANIEGO": ["34"],
                "NIZA IX": ["26"],
                "LA ALHAMBRA CARULLA": ["49"],
                "PUENTE LARGOEMMANUEL DALZON": ["24"],
                "FLORESTA NORTEJULIO FLOREZ": ["30"],
                "PASADENALOS TRES ELEFANTES": ["29"],
                "NUEVA ZELANDIA": ["32"],
                "SAN LUIS SUBA": ["41"],
                "SAN CIPRIANO": ["26"],
                "FUNDACION UNIVERSI LUIS AMIGO": ["17"],
                "LA GAITANA": ["46"],
                "SABANA DE TIBABUYES": ["63"],
                "COLEGIOHIJAS DE CRISTO REY": ["65"],
                "CENTRO COMERCIAL MAZUREN": ["48"],
                "TEJARES NORTE": ["31"],
                "COLEGIO CELESTIN FREINET": ["26"],
                "COLEGIO ALVARO GOMEZ": ["57"],
                "COLEGIO DELIA ZAPATA OLIVELLA": ["30"],
                "LA AGUADITA": ["11"],
                "BOSQUES DE SUBA": ["19"],
                "COL REPUBLICA DOMINICANA": ["47"],
                "LISBOACOLEGIO DISTRITAL LISBOA": ["35"],
                "UNIVERSIDAD UDCA": ["4"],
                "COLEGIO LA KHUMBRE": ["6"],
                "PRADO SUR": ["17"],
                "SUPERCADE SUBA": ["43"],
                "COLEGIO NICOLAS BUENAVENTURA": ["39"],
                "SUBA SAN FRANCISCO": ["6"],
                "FUNDACION SAN FELIPE NERI": ["4"],
                "COLEGIO SIMON BOLIVAR SUBA": ["25"],
                "COLEGIO EUCARISTICO MERCEDARIO": ["24"],
                "ALDEA LA PALMA": ["7"],
                "RAMON DE ZUBIRIA SEDE A": ["22"],
                "COLEGIO VIRGINIA GUTIERREZ": ["12"],
                "COLEGIO GONZALO ARANGO": ["16"],
                "CORINTOCOLEGIO NUEVA COLOMBIA": ["19"],
                "LA TOSCANACOLFE Y ALEGRIA": ["23"],
                "COLEGIO PEDAGOGICO DULCE MARIA": ["28"],
                "INSTITUCION EDUCATIVA COMPARTIR SUBA": ["37"],
                "COLEGIO GERARDO MOLINA": ["28"],
                "EL BATAN": ["16"],
                "NIZA CENTRO COMERCIAL NIZA": ["38"],
                "CENTRO COMERCIAL PASEO SAN RAF": ["23"],
                "ALMACEN EXITO LA COLINA": ["37"],
                "CARULLA RINCON DE LA COLINA": ["26"],
                "COLSUBSIDIO MAZUREN": ["33"],
                "COLEGIO SANTA ISABEL DE HUNGRIA": ["15"],
                "BIBLIOTECA JULIO MARIO SANTO D": ["34"],
                "COLEGIO RAFAEL MAYA": ["9"],
                "SUBA SANTA CECILIA": ["8"],
                "INSTITUTO SAN BASILIO": ["8"],
                "COLEGIO JORGE MARIO BERGOGLIO": ["5"],
                "COLEGIO VEINTIUN ANGELES": ["1"],
                "CHORRILLOS": ["1"],
                "HUNZA SEDE A": ["1"],
                "MAXIMINO POITIERS": ["5"],
                "SALON COMUNAL AURES II": ["5"],
                "SALON COMUNAL VILLA MARIA": ["5"],
                "SALON COMUNAL VILLA CINDY": ["3"],
                "FLORESTA OUTLET": ["3"],
                "COLEGIO JOHN DEWEY": ["2"],
                "COLEGIO CARO Y CUERVO": ["4"],
                "CC PORTOALEGRE": ["6"],
                "CC PARQUE LA COLINA": ["9"],
                "LICEO DE LONDRES": ["1"],
                "COLEGIO MARYMOUNT": ["2"],
                "SAN JOSE BAVARIAABRAHAM LINCOLN": ["3"],
                "COLEGIO DEL BOSQUE": ["1"],
                "COLEGIO SANTIAGO ALBERIONI": ["2"],
                "COLEGIO VISTA BELLA": ["4"],
                "MIRANDELA  NUEVA ZELANDIA": ["4"],
                "CENTRO COMERCIAL SANTAFE": ["13"]
            },
            "BARRIOS UNIDOS": {
                "LA CASTELLANA": ["32"],
                "RIONEGRO": ["31"],
                "PATRIA": ["9"],
                "GAITAN": ["20"],
                "ENTRE RIOS": ["15"],
                "METROPOLIS": ["35"],
                "SIMON BOLIVAR": ["41"],
                "JOSE JOAQUIN VARGAS": ["32"],
                "SAN FERNANDO": ["32"],
                "POPULAR MODELO": ["36"],
                "12 DE OCTUBRE": ["12"],
                "SANTA SOFIA": ["17"],
                "POLO CLUB": ["19"],
                "SAN FELIPE": ["11"],
                "LOS ALCAZARES": ["17"],
                "LA PAZ": ["11"],
                "COLOMBIA": ["13"],
                "LA MUEQUETA": ["9"],
                "SIETE DE AGOSTO": ["24"],
                "BENJAMIN HERRERA": ["11"],
                "POLIDEPORTIVO  POLO": ["5"],
                "ISERRA 100": ["9"],
                "SAN MIGUEL": ["1"],
                "PLAZA DE LOS ARTESANOS": ["1"],
                "CAFAM AV 68": ["3"]
            },
            "TEUSAQUILLO": {
                "DIVINO SALVADOR": ["21"],
                "SAN LUIS": ["19"],
                "EL CAMPIN": ["20"],
                "NICOLAS DE FEDERMAN": ["18"],
                "PABLO VI": ["31"],
                "EL SALITRE": ["13"],
                "LA ESMERALDA": ["18"],
                "CAFAM CALLE 51": ["24"],
                "PALERMO": ["36"],
                "COLEGIO AMERICANO": ["35"],
                "BELALCAZAR": ["16"],
                "QUINTA PAREDES  A": ["15"],
                "QUINTA PAREDES B": ["25"],
                "CENTRO NARINO": ["20"],
                "RESIDENCIAS BCH": ["15"],
                "SANTA TERESITA": ["8"],
                "LA MAGDALENA": ["15"],
                "TEUSAQUILLO": ["25"],
                "PABLO VI II ETAPA": ["10"],
                "RAFAEL NUNEZ": ["16"],
                "CIUDAD SALITRE": ["30"],
                "CORPUS CHRISTI": ["8"],
                "LICEO PARROQUIAL SARA ZAPATA": ["8"],
                "ACEVEDO TEJADA": ["7"],
                "BIBLIOTECA VIRGILIO BARCO": ["6"],
                "IMPRENTA NACIONAL": ["17"],
                "COLEGIO DEL PILAR": ["1"],
                "UNIVERSIDAD ECCI": ["1"],
                "GIMNASIO CENTRO NARINO": ["1"],
                "COLEGIO SANTA CLARA": ["4"]
            },
            "MARTIRES": {
                "SANTA FE": ["29"],
                "SAMPER MENDOZA": ["20"],
                "COLSEGUROS": ["15"],
                "ESTACION DE LA SABANA": ["17"],
                "RICAURTE": ["27"],
                "LA ESTANZUELA": ["32"],
                "VERAGUAS": ["17"],
                "CENTRO CRECER": ["26"],
                "EL VERGEL": ["16"],
                "EDUARDO SANTOS": ["19"],
                "SAN FASON": ["11"],
                "LA REBECA": ["6"],
                "PANAMERICANO": ["6"],
                "ANTONIO RICAURTE": ["4"],
                "SAN FRANCISCO DE ASIS": ["4"],
                "CENTRO DE MEMORIA": ["7"],
                "SALON COMUNAL SANTA ISABEL": ["8"]
            },
            "ANTONIO NARINO": {
                "POLICARPA": ["27"],
                "CIUDAD BERNA": ["18"],
                "SAN ANTONIO": ["23"],
                "LUNA PARK": ["12"],
                "CIUDAD JARDIN": ["35"],
                "RESTREPO A": ["35"],
                "RESTREPO B": ["45"],
                "LA FRAGUITA": ["12"],
                "LA FRAGUA": ["17"],
                "SANTANDER": ["14"],
                "SANTANDER SUR": ["12"],
                "VILLA MAYOR": ["29"],
                "SENA": ["23"],
                "LA VALVANERA": ["8"],
                "SALON COMUNAL SAN ANTONIO": ["3"],
                "COLEGIO ADVENTISTA EMMANUEL": ["1"],
                "SALON COMUNAL VILLA MAYOR": ["4"],
                "CINCO DE NOVIEMBRE": ["2"],
                "CASA COMUNAL CIUDAD JARDIN": ["3"]
            },
            "PUENTE ARANDA": {
                "DELICIAS MUZU": ["34"],
                "CIUDAD MONTES": ["38"],
                "SANTA MATILDE": ["26"],
                "LA ASUNCION": ["23"],
                "ALCALDIA PUENTE ARANDA": ["33"],
                "LA PRIMAVERA": ["33"],
                "CUNDINAMARCA": ["9"],
                "LA FRANCIA": ["14"],
                "PUENTE ARANDA": ["15"],
                "SALAZAR GOMEZ": ["17"],
                "LA TRINIDAD": ["14"],
                "LA PRADERA": ["16"],
                "COLON": ["41"],
                "SAN RAFAEL": ["24"],
                "EL JAZMIN": ["25"],
                "LA PONDEROSA": ["21"],
                "GALAN": ["35"],
                "MILENTA": ["19"],
                "EL TEJAR": ["26"],
                "ALQUERIA": ["29"],
                "ALCALA": ["27"],
                "SANTA RITA": ["32"],
                "AUTOPISTA SUR": ["12"],
                "LOS SAUCES": ["18"],
                "CARRERA CENTRO COMERCIAL": ["5"],
                "SAN ANDRESITO": ["8"],
                "SALON COMUNAL COLON": ["9"],
                "COLONIA ORIENTAL": ["7"],
                "SALON COMUNAL LA TRINIDAD": ["3"],
                "PRIMAVERA Y GORGONZOLA": ["6"],
                "EL REMANZO": ["3"],
                "COLEGIO ROMULO GALLEGO": ["2"],
                "SALON COMUNAL VERAGUAS": ["4"],
                "INSTITUTO DE INTEGRACION CULTURAL": ["1"],
                "COLEGIO DISTRITAL SORRENTO": ["2"],
                "LUIS CARLOS GALAN SARMIENTO": ["1"],
                "CULTURA POPULAR": ["1"],
                "SAN EUSEBIO": ["2"],
                "LOS ANGELES": ["1"],
                "PLAZA CENTRAL": ["4"],
                "JORGE GAITAN CORTES": ["1"],
                "CTRO DE REHABIL PARA ADULTOS CIEGOS": ["1"]
            },
            "CANDELARIA": {
                "LA CONCORDIA": ["31"],
                "ALCALDIA MAYOR": ["41"],
                "EGIPTO": ["19"],
                "ARCHIVO DISTRITAL": ["21"],
                "MURILLO TORO": ["13"],
                "COLEGIO MAYOR SAN BARTOLOME": ["2"],
                "AUTONOMA DE COLOMBIA": ["2"],
                "EGIPTO ESCUELA QUINTA DIAZ": ["2"],
                "LA SALLE CANDELARIA": ["2"]
            },
            "RAFAEL URIBE URIB": {
                "CLARET": ["28"],
                "INGLES": ["30"],
                "BRAVO PAEZ": ["17"],
                "LIBERTADOR II": ["17"],
                "CENTENARIO": ["22"],
                "OLAYA": ["23"],
                "SAN JOSE": ["25"],
                "ALEJANDRO OBREGON GUSTAVO REST": ["22"],
                "QUIROGA": ["21"],
                "ALCALDIA QUIROGA": ["34"],
                "CENTRAL QUIROGA": ["14"],
                "SANTA LUCIA": ["25"],
                "LAS COLINAS": ["15"],
                "COUNTRY SUR": ["31"],
                "LAS LOMAS": ["25"],
                "ALEXANDER FLEMING SAN JORGE": ["25"],
                "REINO DE HOLANDA": ["16"],
                "MARCO FIDEL SUAREZ": ["25"],
                "EL SOCORRO SUR": ["13"],
                "MOLINOS DEL SUR": ["54"],
                "CIUDAD BOCHICA SUR": ["34"],
                "LOS MOLINOS II SECTOR": ["28"],
                "PALERMO SUR": ["22"],
                "VILLA MAYOR LA NUEVA": ["14"],
                "GRANJAS DE SAN PABLO": ["13"],
                "RESURRECCION": ["12"],
                "RAFAEL URIBE LA PAZ": ["11"],
                "SAN AGUSTIN SUR": ["28"],
                "COVIVIENDA DEL SURORIENTE": ["25"],
                "MARRUECOS APARTAMENTOS": ["14"],
                "SALON COMUNAL LA MARQUEZA": ["7"],
                "MIRADOR DE MARROCOS": ["4"],
                "SAN JUANITO": ["6"],
                "PROVIDENCIA": ["4"],
                "GUSTAVO RESTREPO": ["10"],
                "SALON COMUNAL INGLES": ["6"],
                "SALON COMUNAL CLARET": ["6"],
                "SAN JORGE": ["8"],
                "LICEO SAN PABLO": ["4"],
                "SALON COMUNAL CEBADAL": ["2"],
                "LA MARQUEZA": ["3"],
                "RAFAEL DELGADO SEDE C": ["2"],
                "SALON COMUNAL LA PAZ NARANJOS": ["3"],
                "INTEG RAFAEL DELGADO SALGUERO": ["1"],
                "PARROQUIAL SAN JOSE": ["1"],
                "LICEO PSICOPEDAGOGICO MARCO FIDEL SUAREZ": ["1"],
                "MARIA CANO": ["4"],
                "CAFAM SANTA LUCIA": ["1"],
                "DIANA TURBAY": ["2"],
                "ALIANZA QUIROGA": ["2"],
                "ESTADOS UNIDOS DE AMERICA": ["1"],
                "TORRE MAYOR": ["1"]
            },
            "CIUDAD BOLIVAR": {
                "LUCERO DEL SUR": ["45"],
                "SAN JOAQUIN DEL VATICANO": ["29"],
                "PASQUILLA": ["6"],
                "EL TESORO": ["27"],
                "MEXICO": ["36"],
                "LUCERO MEDIO": ["22"],
                "VISTAHERMOSA": ["43"],
                "LA ACACIA": ["37"],
                "JERUSALEN EL TANQUE": ["31"],
                "JUAN PABLO II": ["27"],
                "SAN FRANCISCO": ["61"],
                "CANDELARIA LA NUEVA": ["67"],
                "ARBORIZADORA BAJA": ["44"],
                "MADELENA": ["47"],
                "ISMAEL PERDOMO": ["59"],
                "MOCHUELO ALTO": ["4"],
                "MOCHUELO BAJO": ["7"],
                "CORDILLERA": ["6"],
                "NUEVA ARGENTINA": ["10"],
                "LA ESTANCIA": ["64"],
                "EL PARAISO": ["25"],
                "VEREDA QUIBA": ["3"],
                "MANUELA BELTRAN": ["15"],
                "SIERRA MORENA": ["43"],
                "SOTAVENTO": ["27"],
                "SANTO DOMINGO": ["25"],
                "VILLA GLORIA SUR": ["9"],
                "GALICIA": ["61"],
                "ARBORIZADORA ALTA": ["33"],
                "CASAVIANCA": ["14"],
                "CASONA DEL LIBERTADOR": ["38"],
                "MEISSEN": ["17"],
                "POTOSI LA LAGUNA": ["18"],
                "ALTOS DE JALISCO": ["5"],
                "ESTRELLA DEL SUR": ["19"],
                "CARACOLI": ["9"],
                "SANTA ROSA": ["1"],
                "BRISAS DEL VOLADOR": ["5"],
                "DIVINO NINO": ["6"],
                "CASA GRANDE": ["10"],
                "MONTREAL": ["6"],
                "UNION EUROPEA": ["4"],
                "SAN FRANCISCO SEDE B": ["15"],
                "SAN FRANCISCO SEDE A": ["9"],
                "CANDELARIA LA NUEVA DOS": ["23"],
                "BONAVISTA": ["18"],
                "BELLA FLOR": ["3"],
                "EL MIRADOR": ["7"],
                "LAS QUINTAS": ["2"],
                "COLEGIO FANNY MIKEY": ["2"],
                "MARANDU": ["1"],
                "LAS MANAS": ["1"],
                "BALMORAL": ["1"],
                "LA CORUNA  LICEO CONTADORA": ["2"],
                "TANQUESIERRA MORENA": ["1"],
                "ICES LAS BRISAS": ["1"],
                "ALTOS DE LA ESTANCIA": ["1"],
                "MILLAN": ["1"],
                "GRAN PLAZA EL ENSUENO": ["26"],
                "CASA LINDA TUNAL UNIDAD 2": ["7"]
            },
            "SUMAPAZ": {
                "SAN JUAN DE SUMAPAZ": ["3"],
                "NAZARETH": ["4"],
                "BETANIA": ["3"],
                "LA UNION": ["2"],
                "LA YE SANTA ROSA": ["2"]
            }
        }
    },
    "CHOCO": {
        "ACANDI": {},
        "ALTO BAUDO": {},
        "BAGADO": {},
        "BAHIA SOLANO": {},
        "BAJO BAUDO": {},
        "BOJAYA": {},
        "CANTON DE SAN PABLO": {},
        "CERTEGUI": {},
        "CONDOTO": {},
        "EL ATRATO": {},
        "EL CARMEN DE ATRATO": {},
        "EL CARMEN DEL DARIEN": {},
        "ISTMINA": {},
        "JURADO": {},
        "LITORAL DE SAN JUAN": {},
        "LLORO": {},
        "MEDIO ATRATO": {},
        "MEDIO BAUDO": {},
        "MEDIO SAN JUAN": {},
        "NOVITA": {},
        "NUQUI": {},
        "RIO IRO": {},
        "RIO QUITO": {},
        "RIOSUCIO": {},
        "SAN JOSE DEL PALMAR": {},
        "SIPI": {},
        "TADO": {},
        "UNION PANAMERICANA": {},
        "UNGUIA": {},
        "QUIBDO": {
            "ALTAGRACIA": {
                "ALTAGRACIA": ["1"]
            },
            "BARRANCO": {
                "BARRANCO": ["1"]
            },
            "BELLA LUZ": {
                "BELLALUZ": ["1"]
            },
            "ALTO MUNGUIDO": {
                "EL JAGUO ALTO MUNGUIDO": ["1"]
            },
            "BOCA DE TANANDO": {
                "BOCA DE TANANDO": ["1"]
            },
            "CABI": {
                "PACURITA": ["1"]
            },
            "BOCA DE NAURITA": {
                "BOCA DE NAURITA": ["1"]
            },
            "CALAHORRA": {
                "CALAHORRA": ["1"]
            },
            "CAMPOBONITO": {
                "CAMPOBONITO": ["1"]
            },
            "GUARANDO": {
                "GUARANDO": ["1"]
            },
            "GUADALUPE": {
                "GUADALUPE": ["1"]
            },
            "GUAYABAL": {
                "GUAYABAL": ["1"]
            },
            "19CORRESAN FRANCISCO DE ICHO": {
                "SAN FRANCISCO DE ICHO": ["2"]
            },
            "EL TAMBO": {
                "EL TAMBO": ["1"]
            },
            "21CORREJITRADO PUEBLO NUEVO": {
                "GITRADO": ["1"]
            },
            "EL FUERTE": {
                "STA LUCIA DEL FUERTE": ["1"]
            },
            "LAS MERCEDES": {
                "LAS MERCEDES": ["1"]
            },
            "MOJAUDO": {
                "SAN PEDRO CLAVER MOJAUDO": ["1"]
            },
            "LA TROJE": {
                "LA TROJE": ["1"]
            },
            "NAURITA": {
                "VILLA DEL ROSARIO": ["1"]
            },
            "NEGUA": {
                "SAN RAFAEL DE NEGUA": ["1"]
            },
            "NEMOTA": {
                "BOCA DE NEMOTA": ["1"]
            },
            "PUERTO MURILLO": {
                "SAN ANTONIO DE ICHOPTO MURILLO": ["1"]
            },
            "SANCENO": {
                "SANCENO": ["1"]
            },
            "TAGACHI": {
                "TAGACHI": ["2"]
            },
            "TUTUNENDO": {
                "TUTUNENDO": ["4"]
            },
            "WINANDO": {
                "WINANDO": ["1"]
            }
        }
    },
    "HUILA": {
        "NEIVA": {
            "VEGA LARGA": {
                "VEGALARGA": ["6"]
            },
            "RIO LAS CEIBAS": {
                "RIO LAS CEIBAS": ["2"]
            },
            "CAGUAN": {
                "CAGUAN": ["13"]
            },
            "FORTALECILLAS": {
                "FORTALECILLAS": ["7"]
            },
            "GUACIRCO": {
                "GUACIRCO": ["3"]
            },
            "SAN LUIS": {
                "SAN LUIS": ["4"]
            },
            "CHAPINERO": {
                "CHAPINERO": ["2"]
            },
            "AIPECITO": {
                "AIPECITO": ["3"]
            }
        },
        "PITALITO": {
            "OCCIDENTAL": {
                "IENORMAL SUPERIOR PITALITO": ["17"],
                "IENACIONAL": ["26"],
                "IE N S SEDE RODRIGO LARA BON": ["5"],
                "IE HUMBERTO MUNOZ SD PPAL": ["12"]
            },
            "ORIENTAL": {
                "IE MARIA MONTESSORI": ["14"],
                "IE HUMBERTO MUNOZ SEDE NOGALES": ["12"],
                "CIC VENECIA": ["2"]
            },
            "CENTRO": {
                "COLLA PRESENTACION": ["22"],
                "ESCCENTRAL": ["15"],
                "IEWINNIPEG": ["13"],
                "IEVICTOR MANUEL MENESES": ["10"]
            },
            "SUR": {
                "IEMPALMONTESSORI": ["24"],
                "COLISEO CUBIERTO": ["1"]
            },
            "BRUSELAS": {
                "BRUSELAS": ["31"]
            },
            "CHILLURCO": {
                "CHILLURCO": ["8"]
            },
            "GUACACALLO": {
                "GUACACALLO": ["7"]
            },
            "LA LAGUNA": {
                "LA LAGUNA": ["5"]
            },
            "CRIOLLO": {
                "CRIOLLO": ["12"]
            },
            "PALMARITO": {
                "PALMARITO": ["5"]
            },
            "REGUEROS": {
                "REGUEROS": ["6"]
            },
            "CHARGUAYACO": {
                "CHARGUAYACO": ["10"]
            }
        },
        "ACEVEDO": {},
        "AGRADO": {},
        "AIPE": {},
        "ALGECIRAS": {},
        "ALTAMIRA": {},
        "BARAYA": {},
        "CAMPOALEGRE": {},
        "COLOMBIA": {},
        "EL PITAL": {},
        "ELIAS": {},
        "GARZON": {},
        "GIGANTE": {},
        "GUADALUPE": {},
        "HOBO": {},
        "IQUIRA": {},
        "ISNOS": {},
        "LA ARGENTINA": {},
        "LA PLATA": {},
        "NATAGA": {},
        "OPORAPA": {},
        "PAICOL": {},
        "PALERMO": {},
        "PALESTINA": {},
        "RIVERA": {},
        "SALADOBLANCO": {},
        "SAN AGUSTIN": {},
        "SANTA MARIA": {},
        "SUAZA": {},
        "TARQUI": {},
        "TELLO": {},
        "TERUEL": {},
        "TESALIA": {},
        "TIMANA": {},
        "VILLAVIEJA": {},
        "YAGUARA": {}
    },
    "MAGDALENA": {
        "SANTA MARTA": {
            "01LOC1TAYRONA SPEDRO ALEJANDR": {
                "IED LICEO DEL SUR VICTOR DE LIMA": ["19"],
                "IED TEC DEL SUR VICTOR DE LIMA SD 3 MM": ["15"],
                "IED JACQUELINE KENNEDY": ["30"],
                "IED JACQUELINE KENNEDY SD 2 PRE LA CAND": ["17"],
                "IEDEL PANDO": ["37"],
                "SD JOSE CELEDON GARCIA  IED EL PANDO": ["16"],
                "IEDEL PARQUE": ["47"],
                "IED LIBANO": ["29"],
                "IEDSAN FCOJAVIER DE GARAGO": ["32"],
                "UNIVERSIDAD ANTONIO NARINO": ["2"],
                "UNIVERSIDAD DEL MAGDALENA": ["7"],
                "IED 11 DE NOVIEMBRE": ["5"],
                "IED NORMAL SUPERIOR SAN PEDRO": ["35"],
                "IED JUAN MIGUEL DE OSUNA": ["25"],
                "IEDALUNA MEGA COLEGIO CISNE": ["21"],
                "BONDA": ["22"],
                "GUACHACA": ["18"],
                "CALABAZO": ["4"]
            },
            "02LOC2HISTRODRIGO DE BASTIDAS": {
                "IEDHUGO J BERMUDEZ": ["27"],
                "IEDHUGO JBERMUDEZ SLAESP": ["23"],
                "IEDLICEO SAMARIO": ["23"],
                "LICEO SAMARIO SD2 BAVBOSTON": ["20"],
                "INSTITUTO LA MILAGROSA": ["24"],
                "IED LICEO CELEDON": ["18"],
                "IED LA INDUSTRIAL": ["14"],
                "IEDFCODE PAULA SANTANDER": ["20"],
                "IEDMAGDALENA": ["33"],
                "IEDMAGDSD3 ESCMIXMPAL": ["14"],
                "IED RODRIGO BASTIDAS": ["40"],
                "HOGAR INFANTIL BASTIDAS": ["16"],
                "IED RODRIGO DE BASTIDAS SD 17 DE DIC": ["12"],
                "IEDNICOLAS BUENAVENTURA": ["18"],
                "IED ONDAS DEL CARIBE": ["6"],
                "IED LAURA VICUNA": ["20"],
                "IEDESCNORMAL SUPMARIA AUX": ["18"],
                "IED DEL CARMEN": ["21"],
                "IED RODRIGO GALVAN DE BASTIDAS": ["4"],
                "IEDMADRE LAURA": ["21"],
                "IEDLICEO DEL NORTE": ["37"],
                "IED ALFONSO LOPEZ": ["26"],
                "TAGANGA": ["10"]
            },
            "03LOC3TURISTICA PERLA DEL CARIB": {
                "IEDJOSE LABORDE GNECCO": ["34"],
                "IED CAMILO TORRES DE GAIRA": ["32"],
                "IED CAMILO TORRES DE GAIRA SD ISABEL PF": ["21"],
                "IEDLA PAZ": ["MEGA COL. LA PAZ"],
                "IED CRISTO REY": ["5"],
                "MUSEO MUNDO MARINO": ["5"],
                "MINCA": ["4"],
                "LA TAGUA": ["2"],
                "EL CAMPANO": ["2"]
            }
        },
        "CIENAGA": {
            "MAR CARIBE": {
                "IE ISAAC J PEREIRA": ["27"],
                "INFOTEP": ["19"],
                "COL VIRGINIA GOMEZ SD CUATRO": ["14"],
                "IELA MARIA": ["12"],
                "IELA ALIANZA": ["3"]
            },
            "SAN JUAN DE CORDOBA": {
                "IE SAN JUAN DEL CORDOBA": ["31"],
                "IETCOMERCIO VIRGINIA GOMEZ": ["19"],
                "IEENOC MENDOZA RIASCOS": ["16"]
            },
            "CIENAGA GRANDE": {
                "IELICEO MODERNO DEL SUR": ["20", "SD.4"],
                "IEEL CARMEN": ["12"],
                "IE 12 DE OCTUBRE": ["3"]
            },
            "NUEVO HORIZONTE": {
                "IEMANUEL J DEL CASTILLO": ["20"]
            },
            "05CORRG  SN PEDRO DE LA SIERRA": {
                "SAN PEDRO DE LA SIERRA": ["4"]
            },
            "PALMOR": {
                "PALMOR": ["7"]
            },
            "SIBERIA": {
                "SIBERIA": ["2"]
            },
            "SEVILLANO": {
                "SEVILLANO": ["6"]
            },
            "CORDOBITA": {
                "CORDOBITA": ["3"]
            },
            "SAN JAVIER": {
                "SAN JAVIER": ["2"]
            }
        },
        "EL BANCO": {
            "SUR": {
                "COL FCO JOSE DE CALDAS": ["21"]
            },
            "CENTRAL": {
                "COL SANTA TERESA DE JESUS": ["19"]
            },
            "NORTE": {
                "IED JOSE BENITO BARROS PALO": ["25"],
                "COL ARCESIO CALIS AMADOR": ["11"]
            },
            "AGUAESTRADA": {
                "AGUAESTRADA": ["3"]
            },
            "ALGARROBAL": {
                "ALGARROBAL": ["4"]
            },
            "06CORREG 3 BARRANCO DE CHILLOA": {
                "BARRANCO DE CHILLOA": ["3"],
                "BOTILLERO": ["2"]
            },
            "BELEN": {
                "BELEN": ["6"]
            },
            "CANO DE PALMA": {
                "CANO DE PALMA": ["4"]
            },
            "EL CEDRO": {
                "EL CEDRO": ["3"]
            },
            "EL CERRITO": {
                "EL CERRITO": ["4"]
            },
            "EL TREBOL": {
                "EL TREBOL": ["3"]
            },
            "12CORR 9 HATILLO DE LA SABANA": {
                "HATILLO DE LA SABANA": ["3"]
            },
            "13CORREGIMIE 10 LOS NEGRITOS": {
                "LOS NEGRITOS BASTIDAS": ["3"],
                "MATA DE CANA": ["1"]
            },
            "MENCHIQUEJO": {
                "MENCHIQUEJO": ["4"]
            },
            "SAN FELIPE EDUARDO": {
                "SAN FELIPE EDUARDO": ["4"]
            },
            "SAN JOSE": {
                "SAN JOSE": ["2"]
            },
            "SAN ROQUE": {
                "SAN ROQUE": ["3"]
            },
            "TAMALAMEQUITO": {
                "TAMALAMEQUITO": ["4"],
                "SABANAS DE MALPICA": ["2"]
            }
        },
        "ALGARROBO": {},
        "ARACATACA": {},
        "ARIGUANI": {},
        "CERRO DE SAN ANTONIO": {},
        "CHIBOLO": {},
        "CONCORDIA": {},
        "EL PINON": {},
        "EL RETEN": {},
        "FUNDACION": {},
        "GUAMAL": {},
        "NUEVA GRANADA": {},
        "PEDRAZA": {},
        "PIJINO DEL CARMEN": {},
        "PIVIJAY": {},
        "PLATO": {},
        "PUEBLO VIEJO": {},
        "REMOLINO": {},
        "SABANAS DE SAN ANGEL": {},
        "SALAMINA": {},
        "SAN SEBASTIAN DE BUENAVISTA": {},
        "SAN ZENON": {},
        "SANTA ANA": {},
        "SANTA BARBARA DE PINTO": {},
        "SITIONUEVO": {},
        "TENERIFE": {},
        "ZAPAYAN": {},
        "ZONA BANANERA": {}
    },
    "NARINO": {
        "PASTO": {
            "CATAMBUCO": {
                "CATAMBUCO": ["23"],
                "ALTO CASANARE": ["2"],
                "CAMPANERO": ["2"],
                "LA VICTORIA": ["2"]
            },
            "GENOY": {
                "GENOY": ["8"]
            },
            "MAPACHICO": {
                "MAPACHICO": ["3"],
                "ANGANOY": ["11"],
                "VILLA MARIA": ["1"]
            },
            "CABRERA": {
                "CABRERA": ["4"]
            },
            "OBONUCO": {
                "OBONUCO": ["9"]
            },
            "SANTA BARBARA": {
                "SANTA BARBARA": ["4"],
                "JURADO CENTRO": ["2"],
                "LOS ANGELES": ["2"],
                "LA ESPERANZA": ["2"],
                "LAS ENCINAS": ["2"],
                "LA CONCEPCION": ["2"]
            },
            "EL SOCORRO": {
                "BAJO CASANARE": ["2"],
                "EL SOCORRO": ["3"],
                "SAN GABRIEL": ["1"]
            },
            "LA LAGUNA": {
                "LA LAGUNA": ["7"]
            },
            "JAMONDINO": {
                "EL ROSARIO": ["6"],
                "JAMONDINO": ["6"]
            },
            "BUESAQUILLO": {
                "BUESAQUILLO": ["10"],
                "CUJACAL CENTRO": ["2"],
                "CUJACAL": ["1"],
                "SAN FRANCISCO": ["2"]
            },
            "MORASURCO": {
                "MORASURCO": ["3"]
            },
            "EL ENCANO": {
                "EL ENCANO": ["8"],
                "MOTILON": ["1"],
                "SANTA LUCIA": ["1"],
                "SANTA ROSA DEL ENCANO": ["1"]
            },
            "GUALMATAN": {
                "GUALMATAN": ["3"]
            },
            "LA CALDERA": {
                "LA CALDERA": ["2"],
                "PRADERA BAJO": ["1"]
            },
            "MOCONDINO": {
                "MOCONDINO": ["7"],
                "CANCHALA": ["3"]
            },
            "JONGOVITO": {
                "JONGOVITO": ["6"]
            },
            "SAN FERNANDO": {
                "SAN FERNANDO": ["5"]
            }
        },
        "GUALMATAN": {
            "DE CUATIS": {
                "CUATIS": ["2"]
            }
        },
        "IPIALES": {
            "LA VICTORIA": {
                "LA VICTORIA": ["12"]
            }
        },
        "ALDANA": {},
        "ANCUYA": {},
        "ARBOLEDA": {},
        "BARBACOAS": {},
        "BELEN": {},
        "BUESACO": {},
        "CHACHAGUI": {},
        "COLON": {},
        "CONSACA": {},
        "CONTADERO": {},
        "CUASPUD": {},
        "CUMBAL": {},
        "CUMBITARA": {},
        "EL CHARCO": {},
        "EL PENOL": {},
        "EL ROSARIO": {},
        "EL TABLON": {},
        "EL TAMBO": {},
        "FRANCISCO PIZARRO": {},
        "FUNES": {},
        "GUACHUCAL": {},
        "GUAITARILLA": {},
        "ILES": {},
        "IMUES": {},
        "LA CRUZ": {},
        "LA FLORIDA": {},
        "LA LLANADA": {},
        "LA TOLA": {},
        "LA UNION": {},
        "LEIVA": {},
        "LINARES": {},
        "LOS ANDES": {},
        "MAGUI PAYAN": {},
        "MALLAMA": {},
        "MOSQUERA": {},
        "NARINO": {},
        "OLAYA HERRERA": {},
        "OSPINA": {},
        "POLICARPA": {},
        "POTOSI": {},
        "PROVIDENCIA": {},
        "PUERRES": {},
        "PUPIALES": {},
        "RICAURTE": {},
        "ROBERTO PAYAN": {},
        "SAMANIEGO": {},
        "SAN BERNARDO": {},
        "SAN JOSE DE ALBAN": {},
        "SAN LORENZO": {},
        "SAN PABLO": {},
        "SAN PEDRO DE CARTAGO": {},
        "SANDONA": {},
        "SANTA BARBARA": {},
        "SANTACRUZ": {},
        "SAPUYES": {},
        "TAMINANGO": {},
        "TANGUA": {},
        "TUMACO": {},
        "TUQUERRES": {},
        "YACUANQUER": {}
    },
    "RISARALDA": {
        "PEREIRA": {
            "VILLA SANTANA": {
                "INSTEDUCVILLASANTANA": ["27"],
                "IE COMPARTIR LAS BRISAS": ["10"],
                "IE JAIME SALAZAR ROBLEDO": ["12"]
            },
            "ORIENTE": {
                "CTROEDUJORGE ELIECER GAITAN": ["25"],
                "INSTITUTO KENNEDY": ["31"],
                "ESC GRAL MOSQUERA SD 2 IE H VELEZ M": ["10"]
            },
            "VILLAVICENCIO": {
                "IE MARCO FIDEL SUAREZ": ["17"],
                "COLEGIO BASICO CENTENARIO": ["16"]
            },
            "RIO OTUN": {
                "INSTEDUCARLOTA SANCHEZ": ["29"],
                "INSTEDUCALFREDO GARCIA": ["39"],
                "COLEGIO SAN JOSE": ["19"],
                "INSTEDUCARLOTA SANCHEZ 2": ["21"],
                "INSTEDUCARLOTA SANCHEZ 3": ["15"],
                "IE AUGUSTO ZULUAGA TRUJILLO": ["2"]
            },
            "UNIVERSIDAD": {
                "COLEGIO GIMNASIO PEREIRA": ["19"],
                "COMPLEJO EDUC LA JULITA": ["13"],
                "UNIVTECNOLOGICA DE PEREIRA": ["18"]
            },
            "CENTRO": {
                "INSTEDUCATIVA BOYACA": ["18"],
                "CENTRO CULTURAL LUCY TEJADA": ["51"],
                "COLOFICIAL LA INMACULADA": ["33"],
                "SENA": ["38"],
                "GOBERNACION DE RISARALDA": ["40"],
                "IE PABLO EMILIO CARDONA": ["2"],
                "IE MARIA DOLOROSA": ["3"]
            },
            "SAN NICOLAS": {
                "COLEGIO SAN NICOLAS": ["23"]
            },
            "EL JARDIN": {
                "COLEGIO NORMAL SUPERIOR": ["19"]
            },
            "BOSTON": {
                "COLEGIO SUR ORIENTAL": ["24"],
                "INSTEDUCATIVA PROVIDENCIA": ["16"]
            },
            "EL ROCIO": {
                "CENTRO EDUCEL ROCIO": ["6"]
            },
            "DEL CAFE": {
                "INSTEDUCATIVA CIUDAD BOQUIA": ["43"],
                "IE HUGO ANGEL JARAMILLO": ["5"]
            },
            "FERROCARRIL": {
                "LICEO CIAL AQUILINO BEDOYA": ["22"]
            },
            "EL POBLADO": {
                "IE REMIGIO ANTONIO CANARTE": ["21"],
                "IESAMARIA": ["27"]
            },
            "CONSOTA": {
                "CENTRO EDUCNARANJITO": ["25"],
                "CASETA COMUNAL": ["8"]
            },
            "EL OSO": {
                "COLEGIO OFICIAL CIUDADELA CUBA": ["37"],
                "COL RODRIGO ARENAS BETANCUR": ["6"]
            },
            "PERLA DEL OTUN": {
                "CTRO EDUCBAYRON GAVIRIA": ["42"]
            },
            "SAN JOAQUIN": {
                "COLEGIO BASICO SAN JOAQUIN": ["29"],
                "COLSOFFY HERNANDEZ MARIN": ["13"],
                "IE HANS DREWS ARANGO": ["5"]
            },
            "OLIMPICA": {
                "UNILIBRE DE PEREIRA BELMONTE": ["21"],
                "CTRO EDUCLUIS CARLOS GONZALEZ": ["19"],
                "COLBASICO ALFONSO JARAMILLO": ["31"]
            },
            "CUBA": {
                "INSTEDUCESCOLAR SAN FERNANDO": ["39"],
                "CENTRO EDUCATIVO JUAN XXIII": ["24"],
                "IE JESUS MARIA ORMAZA": ["2"]
            },
            "ALTAGRACIA": {
                "ALTAGRACIA": ["14"]
            },
            "LA FLORIDA": {
                "LA FLORIDA": ["7"],
                "SAN JOSE": ["3"]
            },
            "LA BELLA": {
                "EL CHOCHO": ["3"],
                "LA BELLA": ["5"],
                "MUNDO NUEVO": ["4"]
            },
            "23CORRTRIBUNAS CORCEGA": {
                "LA GRAMINEA": ["3"],
                "EL MANZANO": ["2"],
                "IE JOSE ANTONIO GALAN": ["13"]
            },
            "ARABIA": {
                "ARABIA": ["7"],
                "BETULIA": ["3"],
                "YARUMAL": ["2"]
            },
            "25COR PUERTO CALDASPUENTE BOL": {
                "PUERTO CALDAS PUENTE BOLIVAR": ["9"]
            },
            "CAIMALITO": {
                "CAIMALITO": ["10"]
            },
            "COMBIA BAJA": {
                "COMBIA BAJA": ["9"],
                "LA HONDA": ["2"]
            },
            "COMBIA ALTA": {
                "LA CONVENCION": ["3"],
                "COMBIA ALTA": ["6"]
            },
            "MORELIA": {
                "MORELIA": ["7"]
            },
            "31CORR LA ESTRELLA LA PALMILLA": {
                "LA ESTRELLA LA PALMILLA": ["5"]
            },
            "CERRITOS": {
                "CERRITOS": ["19"],
                "CE 30 DE AGOSTO": ["3"]
            }
        },
        "BELEN DE UMBRIA": {
            "TAPARCAL": {
                "BALDELOMAR": ["1"],
                "TAPARCAL": ["4"]
            },
            "COLUMBIA": {
                "COLUMBIA O LA FLORIDA": ["3"]
            }
        },
        "DOSQUEBRADAS": {
            "COMUNA 2": {
                "INT SANTA SOFIA": ["32"],
                "ESCUELA LA AURORA": ["2"],
                "COLEGIO VILLA FANNY": ["2"],
                "INST AGUSTIN NIETO CABALLERO": ["22"]
            },
            "COMUNA 3": {
                "MEGACOLEGIO BERNARDO LOPEZ PEREZ": ["17"],
                "ESCUELA POLICARPA SALAVARRIET": ["16"],
                "COLEGIO NUEVA REPUBLICA": ["16"]
            },
            "COMUNA 4": {
                "IE SANTA ISABEL": ["20"]
            },
            "COMUNA 6": {
                "IE MARIA AUXILIADORA": ["13"]
            },
            "COMUNA 7": {
                "COLEGIO PABLO VI": ["27"]
            },
            "COMUNA 8": {
                "ESCUELA SAN DIEGO": ["15"],
                "COLEGIO NUEVA GRANADA": ["6"],
                "CASA DE LA CULTURA": ["1"]
            },
            "COMUNA 11": {
                "COLEGIO JUAN MANUEL GONZALEZ": ["28"],
                "COLEGIO HOGAR NAZARETH": ["2"],
                "COLEGIO CRISTO REY": ["7"]
            },
            "COMUNA 12": {
                "COLNTRA SRA DE GUADALUPE": ["27"],
                "COLEGIO SALESIANO": ["46"]
            },
            "13CORRSERRANIA ALTO DEL NUDO": {
                "SERRANIA ALTO NUDO LA UNION": ["5"]
            },
            "LAS MARCADAS": {
                "LAS MARCADAS ALTO DEL TORO": ["1"],
                "LAS MARCADAS  FRAILES": ["6"]
            }
        },
        "LA CELIA": {
            "PATIO BONITO": {
                "PATIO BONITO": ["2"]
            }
        },
        "SANTA ROSA DE CABAL": {
            "EL ESPANOL": {
                "EL ESPANOL": ["5"]
            },
            "SANTA BARBARA": {
                "SANTA BARBARA": ["3"]
            },
            "EL MANZANILLO": {
                "EL MANZANILLO": ["2"]
            },
            "09CORR LAS MANGAS  EL CEDRALITO": {
                "DEL SUR LAS MANGASCEDRALITO": ["2"]
            },
            "10CORRLA CAPILLA SAN JUAN": {
                "LA CAPILLA SAN JUAN": ["2"]
            }
        },
        "APIA": {},
        "BALBOA": {},
        "GUATICA": {},
        "LA VIRGINIA": {},
        "MARSELLA": {},
        "MISTRATO": {},
        "PUEBLO RICO": {},
        "QUINCHIA": {},
        "SANTUARIO": {}
    },
    "NORTE DE SAN": {
        "CUCUTA": {
            "CENTRO": {
                "COL SAN JOSE SEDE MERCEDES ABREGO": ["48"],
                "COL SAGRADO SEDE ANTONIA SANTO": ["32"],
                "COL SAGRADO CORAZON DE JESUS": ["40"],
                "COLEGIO ANTONIO NARINO": ["16"]
            },
            "CENTRO ORIENTAL": {
                "SALESIANO": ["54"],
                "MERCEDES ABREGO SEDE JARDIN NACIONAL": ["46"],
                "UNIVERSIDAD FRANCISCO DE PAULA SANTANDER": ["31"],
                "COLEGIO LA SALLE": ["27"],
                "INSTITUTO BILINGUE LONDRES": ["21"]
            },
            "SUR ORIENTAL": {
                "COL PABLO CORREA SEDE CLUB DE": ["28"],
                "COLFRANCISCO JOSE CALDAS": ["39"],
                "CLUB DE LEONES SEDE IEBOCONO": ["16"],
                "ESCUELA SAN MATEO": ["35"],
                "FCO JOSE DE CALDAS SEDE SAN PE": ["11"]
            },
            "ORIENTAL": {
                "ESCMARCO FIDEL SUAREZ": ["18"],
                "COL PABLO CORREA SEDE MARIA AU": ["29"],
                "COLEGIO SIMON BOLIVAR": ["30"],
                "COLEGIO PADRE LUIS VARIARA": ["32"],
                "COL BAS CLUB DE LEONES NO 29": ["12"],
                "IEMONJAIME PRIETO AMAYA": ["7"],
                "COLCARLOS PEREZ ESCALANTE": ["19"],
                "CENTRO INT CIUDADANA PRADOS DEL ESTE": ["9"]
            },
            "NORORIENTAL": {
                "SENA": ["33"],
                "GUAIMARAL SHERMOGENES MAZA": ["36"],
                "INEM": ["52"],
                "COL ANDRES BELLO": ["22"],
                "COL ORIENTAL NO 26": ["24"],
                "INEM SEDE MIGUEL MULLER": ["17"],
                "COLBASICO GUAIMARAL NRO 25": ["12"]
            },
            "NORTE": {
                "COL ANDRES BELLO SEDE LAURA VI": ["30"],
                "COL MUNICIPAL AEROPUERTO": ["44"],
                "COL EUSTORGIO COLMENARES BAUTI": ["30"],
                "ESCUELA EL CERRITO": ["4"],
                "INST EDUCATIVA SAN JOSE": ["27"],
                "COL TOLEDO PLATA": ["25"]
            },
            "NOR OCCIDENTAL": {
                "SANTOS APOSTOLES SEDE KENNEDY": ["35"],
                "COL SAN BARTOLOME": ["26"],
                "COL INTEGRADO JUAN ATALAYA": ["31"],
                "COL MARIANO OSPINA RODRIGUEZ": ["44"],
                "COL BUENOS AIRES": ["19"],
                "COL BASICO CAMILO DAZA": ["11"],
                "CENTRO TECNOLOGICO DE CUCUTA": ["15"],
                "COLCONCEJO DE CUCUTA": ["19"]
            },
            "OCCIDENTAL": {
                "ESCNO38 TEODORO GUTIERREZ C": ["29"],
                "IE PADRE MANUEL BRICENO JAUREGUI": ["46"],
                "COL RAFAEL URIBE URIBE": ["41"],
                "INST TECN CARLOS RAMIREZ PARIS": ["39"],
                "COL HERMANO RODULFO ELOY": ["25"],
                "CARLOS RAMIREZ SEDE NTRA SRA DE MONGUI": ["21"],
                "IEEL RODEO": ["13"],
                "IE PEDRO CUADRO HERRERA": ["1"]
            },
            "SUR OCCIDENTAL": {
                "COL NTRA SRA DE BELEN 23 VARON": ["41"],
                "COL JULIO PEREZ FERRERO": ["32"],
                "CMANUEL ANTONIO FERNANDEZ DE": ["24"],
                "COL NTRA SRA DE BELEN LA DIVINA PASTORA": ["17"],
                "COL GARCIA HERREROS SEDE ESC 28 FEBRERO": ["16"],
                "COLBASICO LOS ALPES": ["10"]
            },
            "SUR": {
                "SANTO ANGEL SEDE JOSE EUSEBIO": ["19"],
                "COL LUIS CARLOS GALAN SARMIENT": ["30"],
                "CTRO EDU FCO DE PAULA ANDRADE NO 9": ["40"],
                "ALEJANDRO GUTIERREZ SEDE SAN J": ["13"]
            },
            " SECTOR NORTE": {
                "PUERTO VILLAMIZAR": ["1"]
            },
            "12CORREG SECTOR NOROCCIDENTAL": {
                "BANCO DE ARENA": ["2"],
                "PALMARITO": ["2"]
            },
            "13CORREG SECTOR OCCIDENTAL": {
                "LA BUENA ESPERANZA": ["11"],
                "LIMONCITO": ["2"]
            },
            "SECTOR CENTRAL": {
                "AGUACLARA": ["11"]
            },
            "SECTOR ORIENTAL": {
                "GUARAMITO": ["3"],
                "RICAURTE": ["2"],
                "SAN FAUSTINO": ["3"]
            },
            "SECTOR SUR": {
                "EL CARMEN DE TONCHALA": ["2"],
                "SAN PEDRO": ["3"]
            }
        },
        "OCANA": {
            "CENTRAL JOSE E CARO": {
                "ESCUELA NORMAL DE SENORITAS": ["16"],
                "COMPLEJO HISTORICO": ["13"],
                "SEDE DAVID HADDAD SALCEDO": ["12"]
            },
            "NORORIENTAL CRISTO REY": {
                "POLIDEPORTIVO CRISTO REY": ["16"]
            },
            "SURORIENTAL OLAYA H": {
                "POLIDEPORTIVO LA MONUMENTAL": ["15"],
                "CONCENTRACION ANGELINO DURAN": ["19"]
            },
            "SUROCCIDENTAL ADOLFO M": {
                "ESCUELA MARABEL": ["11"],
                "CANCHA JUAN XXIII": ["12"],
                "CANCHA MARABEL": ["13"],
                "COLEGIO ALFONSO LOPEZ": ["9"]
            },
            "FCO FERNANDEZ DE CONT": {
                "INSTITUTO TECNICO INDUSTRIAL": ["14"]
            },
            "CIUDADELA NORTE": {
                "ESCUELA SANTA CLARA": ["17"],
                "COLEGIO LA SALLE": ["11"]
            },
            "AGUAS CLARAS": {
                "AGUAS CLARAS": ["4"]
            },
            "AGUA DE LA VIRGE": {
                "AGUA DE LA VIRGEN": ["2"]
            },
            "BUENAVISTA": {
                "BUENAVISTA": ["3"]
            },
            "OTARE": {
                "OTARE": ["3"]
            },
            "CERRO LAS FLORES": {
                "CERRO DE LAS FLORES": ["1"]
            },
            "ESPIRITUSANTO": {
                "ESPIRITUSANTO": ["1"]
            },
            "13CORREG ALTO PATIOSPALOGRANDE": {
                "ALTO DE LOS PATIOS": ["1"],
                "PALOGRANDE": ["1"]
            },
            "LA ERMITA": {
                "LA ERMITA": ["2"]
            },
            "LA FLORESTA": {
                "LA FLORESTA": ["1"]
            },
            "LAS CHIRCAS": {
                "LAS CHIRCAS": ["1"]
            },
            "LAS LISCAS": {
                "LAS LISCAS": ["1"]
            },
            "18CORREG LLANO DE LOS TRIGOS": {
                "LLANO DE LOS TRIGOS": ["1"]
            },
            "MARIQUITA": {
                "MARIQUITA": ["1"]
            },
            "PORTACHUELO": {
                "PORTACHUELO": ["1"]
            },
            "PUEBLO NUEVO": {
                "PUEBLO NUEVO": ["2"]
            },
            "QUEBRADA LA ESPE": {
                "QUEBRADA DE LA ESPERANZA": ["2"]
            },
            "VENADILLO": {
                "VENADILLO": ["1"]
            }
        }
    },
    "QUINDIO": {
        "BUENAVISTA": {},
        "CIRCASIA": {},
        "CORDOBA": {},
        "GENOVA": {},
        "LA TEBAIDA": {},
        "MONTENEGRO": {},
        "PIJAO": {},
        "QUIMBAYA": {},
        "SALENTO": {},
        "ARMENIA": {
            "CENTENARIO": {
                "IE TERESITA MONTES": ["24"],
                "IE LAURA VICUNA": ["21"],
                "IE INSTITUTO TECNICO INDUSTRIA": ["9"],
                "IE SIMON RODRIGUEZ": ["7"],
                "COLISEO DEL SUR": ["2"]
            },
            "RUFINO JOSE CUERVO": {
                "IE RUFINO SUR SEDE MADRE MARCE": ["28"],
                "IE ROSANA LONDONO": ["16"],
                "IE MARCELINO CHAMPAGNAT": ["17"],
                "IE ZULDEMAYDA": ["16"],
                "IE LOS QUINDOS": ["21"],
                "IE CIUDADELA DEL SUR": ["23"],
                "IE JUAN XXIII": ["11"]
            },
            "ALFONSO LOPEZ": {
                "IE NUESTRA SENORA DE BELEN": ["21"],
                "IE LA ADIELA SEDE LA CECILIA": ["27"],
                "IE CIUDAD DORADA": ["12"],
                "IE LAS COLINAS": ["8"]
            },
            "FRANCISCO DE PAULA S": {
                "IE JESUS MARIA OCAMPO": ["20"],
                "IE CAMILO TORRES": ["15"],
                "IE LUIS BERNAL GIRALDO": ["7"]
            },
            "EL BOSQUE": {
                "IE GUSTAVO MATAMOROS D COSTA": ["25"],
                "IE RUFINO CUERVO CENT SEDE ANT": ["9"]
            },
            "SAN JOSE": {
                "IE RUFINO JOSE CUERVO CENTRO": ["22"],
                "IE ESCUELA NORMAL SUPERIOR": ["15"],
                "IE CAMARA JUNIOR": ["19"],
                "IE CAMARA JUNIOR SEDE LA PAVON": ["8"],
                "IE CIUDADELA DE OCCIDENTE": ["10"],
                "HOGAR INFANTIL CDV LA UNION": ["15"]
            },
            "CAFETERO": {
                "IE CIUDAD ARMENIA": ["20"],
                "CENTRO ADMINISTRATIVO MUNICIPA": ["38"],
                "COL SAGRADO CORAZON DE JESUS B": ["20"],
                "CENTRO MARCELINO CHAMPAGNAT": ["3"]
            },
            "LIBERTADORES": {
                "IE CRISTOBAL COLON": ["20"],
                "IE GRAN COLOMBIA": ["12"],
                "CDC LOS LIBERTADORES": ["1"]
            },
            "FUNDADORES": {
                "COLEGIO JORGE ISAAC": ["23"],
                "IE INEM JOSE CELESTINO MUTIS": ["16"],
                "IE CASD SEDE SANTA EUFRACIA": ["27"]
            },
            "QUIMBAYA": {
                "COLISEO SENA": ["26"],
                "UNIVERSIDAD DEL QUINDIO": ["40"],
                "IE REPUBLICA DE FRANCIA": ["10"],
                "ESCUELA DE ADMINISTRA EAM": ["15"],
                "FUNDACION QUINDIANA DE ATENCION INTEGRAL": ["5"],
                "SENA CENTRO AGROINDUTRIAL": ["3"],
                "IE EUDORO GRANADA SD FUNDADORES": ["1"],
                "IE SANTA TERESA DE JESUS SD LA FLORIDA": ["1"]
            },
            "EL CAIMO": {
                "EL CAIMO": ["6"]
            }
        },
        "CALARCA": {
            "BARCELONA": {
                "BARCELONA": ["17"]
            }
        },
        "FILANDIA": {
            "LA INDIA": {
                "LA INDIA": ["2"]
            }
        }
    },
    "SANTANDER": {
        "BUCARAMANGA": {
            "NORTE": {
                "IE MAIPORE SEDE B": ["24"],
                "IE TEC RAFAEL GARCIA HERREROS": ["28"],
                "IE CAFE MADRID": ["26"],
                "IE LOS COLORADOS": ["22"],
                "SALON COMUNAL  EL PABLON": ["2"],
                "IE MAIPORE SEDE C": ["14"],
                "IE SANTO ANGEL": ["3"]
            },
            "NORORIENTAL": {
                "INST DE PROM SOC DEL NORTE SED": ["32"],
                "ORDEN DE LOS CLERIGOS REG SOMASCOS": ["24"],
                "IE DAMASO ZAPATA SEDE C": ["4"],
                "IE RURAL BOSCONIA": ["1"],
                "IE LA JUVENTUD SEDE A": ["2"]
            },
            "SAN FRANCISCO": {
                "IE DAMASO ZAPATA SEDE A": ["40"],
                "COL FRANCISCANO DEL VIRREY SOL": ["33"],
                "COL SANTANDER SEDE A": ["44"],
                "CORP EDUCATIVA ASED": ["12"],
                "COL AMERICANO": ["18"],
                "IE COMUNEROS": ["32"],
                "IE PILOTO SIMON BOLIVAR": ["24"],
                "COL SANTANDER SEDE C": ["5"],
                "IE CLUB UNION SEDE A": ["2"]
            },
            "OCCIDENTAL": {
                "INST TEC SALESIANO ELOY VALENZ": ["41"],
                "I INTEGRADO JORGE ELIECER GAITAN SEDE A": ["14"],
                "COL FRANCISCO DE PAULA SDER S A": ["9"],
                "COL FRANCISCO DE PAULA SDER S B": ["8"],
                "CENTRAL DE ABASTOS": ["11"]
            },
            "GARCIA ROVIRA": {
                "IE ANDRES PAEZ DE SOTOMAYOR": ["19"],
                "COL COOPERATIVO DE BUCARAMANGA": ["31"],
                "SENA SEDE SALUD": ["28"],
                "IE CAMPO HERMOSO": ["8"]
            },
            "LA CONCORDIA": {
                "COL JORGE ARDILA DUARTE SEDE A": ["22"],
                "INST SAN JOSE DE LA SALLE": ["26"],
                "COL TEC EMPRESARIAL JOSE MARIA": ["16"],
                "COL AURELIO MARTINEZ MUTIS SED B": ["10"],
                "GIMNASIO SUPERIOR EMPRESARIAL": ["18"]
            },
            "LA CIUDADELA": {
                "COL AURELIO MARTINEZ MUTIS SED A": ["15"],
                "IE NUESTRA SENORA DEL PILAR SE A": ["27"],
                "UNIDADES TECNOLOGICAS  DE SANT": ["25"]
            },
            "SUR OCCIDENTE": {
                "IE NUESTRA SENORA DEL PILAR SE B": ["16"],
                "IE NUESTRA SENORA DEL PILAR SE E": ["12"],
                "IE INEM CUSTODIO GARCIA ROV SD H": ["11"]
            },
            "LA PEDREGOZA": {
                "INST LA LIBERTAD": ["20"],
                "COL INEM SEDE G": ["8"],
                "COL INTEGRADO JORGE ISAAC": ["7"]
            },
            "PROVENZA": {
                "IE PROVENZA": ["18"],
                "IE INEM CUSTODIO GARCIA ROV SD E": ["29"],
                "JARDIN INFANTIL CASITA DE CHOC": ["6"],
                "IE INEM CUSTODIO GARCIA ROV SD A": ["53"]
            },
            "SUR": {
                "COL ADVENTISTA LIBERTAD": ["40"],
                "IE MEDALLA MILAGROSA": ["11"]
            },
            "CABECERA DEL LLANO": {
                "COL DE LAS AMERICAS": ["16"],
                "COL SAN PEDRITO": ["23"],
                "UNIVERSIDAD AUTONOMA DE BUCARAMANGA": ["32"],
                "COL SAN PEDRO CLAVER": ["43"],
                "EFORSALUD": ["6"],
                "COLEGIO LA PRESENTACION": ["5"]
            },
            "ORIENTAL": {
                "ESC NORMAL SUPERIOR SEDE A": ["49"],
                "ESC NORMAL SUPERIOR SEDE C": ["19"],
                "COL PSICOPEDAG CARL ROGERS": ["14"],
                "COOP ESPECIALIZ DE EDUC DE COMFENALCO": ["25"],
                "UNIVERSIDAD COOP DE COLOMBIA": ["41"],
                "IE LAS AMERICAS": ["28"],
                "CENT EDUC CAJASAN BICENTENARIO SEDE B": ["6"]
            },
            "MORRORICO": {
                "IE ORIENTE MIRAFLORES SEDE A": ["24"],
                "IE ORIENTE MIRAFLORES SEDE C": ["7"]
            },
            "CENTRO": {
                "GOBERNACION DE SANTANDER": ["23"],
                "CORP UNIVERSITARIA UNICIENCIA": ["28"],
                "COL NUESTRA SENORA DE FATIMA": ["14"]
            },
            "LAGOS DEL CACIQUE": {
                "INST CALDAS": ["43"],
                "COL NUESTRA SENORA DEL ROSARIO": ["5"]
            },
            "MUTIS": {
                "IE JOSE CELESTINO MUTIS": ["44"],
                "IE LUIS CARLOS GALAN SARMIENTO": ["13"],
                "IE NUESTRA SENORA DEL PILAR SE C": ["6"]
            }
        },
        "BARRANCABERMEJA": {
            "10CORREG LA FORTUNA AUTOPISTA": {
                "LA FORTUNA AUTOPISTA": ["5"]
            },
            "11CORRE MESETA DE SAN RAFAEL": {
                "ESC MESETA DE SAN RAFAEL SEDE A": ["2"]
            },
            "12CORREG SAN RAFAEL DE CHUCURI": {
                "COL SAN RAFAEL DE CHUCURI": ["2"]
            },
            "13CORREG CIENAGA DEL OPON": {
                "ESCUELA CIENAGA DE OPON": ["1"]
            },
            "EL CENTRO": {
                "COL BLANCA DURAN DE PADILLA SEDE A": ["23"]
            },
            "EL LLANITO": {
                "EL LLANITO": ["6", "1"]
            }
        },
        "FLORIDABLANCA": {
            "01COM1 FLORIDACASCO ANTIGUO": {
                "INSTITUTO GABRIELA MISTRAL": ["46"],
                "POLIDEP JOSE ELIAS PUYANA": ["22"],
                "COL JOSE ELIAS PUYANA SEDE A": ["29"],
                "COL JOSE ELIAS PUYANA SED B": ["17"]
            },
            "CANAVERALVERSALLES": {
                "COLEGIO REINA DE LA PAZ": ["18"],
                "COLEGIO NUEVO CAMBRIDGE": ["42"],
                "COLEGIO PANAMERICANO": ["3"],
                "COLEGIO VICENTE AZUERO SD D RIO FRIO": ["2"],
                "UNAB CAMPUS EL BOSQUE": ["11"]
            },
            "BUCARICACARACOLI": {
                "INSTITUTO CARACOLI": ["11"],
                "INSTITUTO GABRIEL GARCIA MARQ": ["20"]
            },
            "CALDAS REPOSO": {
                "COLEGIO ISIDRO CABALLERO SEDEB": ["12"],
                "INSTITUTO ANTONIO JOSE DE SUC": ["17"],
                "INSTITUTO SAN BERNARDO": ["13"],
                "FRANCISCO JOSE D CALDAS I MINCA SEDE B": ["5"],
                "INSTITUTO JOSE ANTONIO GALAN": ["4"],
                "INSTITUTO LA TRINIDAD SEDE B": ["9"],
                "INSTITUTO FE Y ALEGRIA": ["18"]
            },
            "BOSQUE MOLINOS": {
                "INSTITUTO EL PROGRESO SEDE D": ["8"],
                "SALON COMUNAL BBARRIO MOLINOS BAJOS": ["2"]
            },
            "LAGOS BELLAVISTA": {
                "INSTITUTO RAFAEL POMBO": ["16"],
                "COLEGIO CAJASAN": ["21"],
                "COLEGIO VICENTE AZUERO SEDE B": ["5"],
                "COLEGIO VICENTE AZUERO SEDE C": ["5"],
                "COLEGIO VICENTE AZUERO SEDE A": ["13"]
            },
            "07COM 7 VILLABELSANTA ANA": {
                "INSTITUTO DOMINGO SABIO": ["18"],
                "COLEGIO METROPOLITANO DEL SUR": ["12"],
                "INSTITUTO MADRE DEL BUEN CONS": ["17"],
                "COLEGIO METROPOLITANO SANTA A": ["19"]
            },
            "LA CUMBRE EL CARMEN": {
                "COLEGIO GONZALO JIMENEZ NAVAS": ["30"],
                "COL MICROEMPRESARIAL EL CARME SD C": ["13"],
                "INSTITUTO LA CUMBRE": ["33"],
                "COL JOSE ELIAS PUYANA SED C": ["10"],
                "COL MICROEMPRESARIAL EL CARME SD B": ["14"]
            }
        },
        "GAMBITA": {
            "LA PALMA": {
                "CORREG LA PALMA": ["2"]
            }
        },
        "OIBA": {
            "PUENTE LLANO": {
                "PUENTE DE LLANO": ["2"]
            }
        },
        "SUAITA": {
            "DEL SECTOR 2": {
                "OLIVAL": ["3"],
                "VADO REAL": ["5"],
                "TOLOTA": ["2"]
            },
            "DEL SECTOR 1": {
                "SAN JOSE DE SUAITA": ["3"]
            }
        },
        "VELEZ": {
            "01CORR ALTO JORDAN  GUALILO": {
                "ALTO JORDAN": ["2"],
                "GUALILO": ["2"]
            }
        },
        "AGUADA": {},
        "ALBANIA": {},
        "ARATOCA": {},
        "BARBOSA": {},
        "BARICHARA": {},
        "BETULIA": {},
        "CABRERA": {},
        "CALIFORNIA": {},
        "CAPITANEJO": {},
        "CARCASI": {},
        "CEPITA": {},
        "CERRITO": {},
        "CHARALA": {},
        "CHARTA": {},
        "CHIMA": {},
        "CHIPATA": {},
        "CIMITARRA": {},
        "CONCEPCION": {},
        "CONFINES": {},
        "CONTRATACION": {},
        "COROMORO": {},
        "CURITI": {},
        "EL CARMEN DE CHUCURI": {},
        "EL GUACAMAYO": {},
        "EL PENON": {},
        "EL PLAYON": {},
        "EL SOCORRO": {},
        "ENCINO": {},
        "ENCISO": {},
        "FLORIAN": {},
        "GALAN": {},
        "GIRON": {},
        "GUACA": {},
        "GUADALUPE": {},
        "GUAPOTA": {},
        "GUAVATA": {},
        "GUEPSA": {},
        "HATO": {},
        "JESUS MARIA": {},
        "JORDAN": {},
        "LA BELLEZA": {},
        "LA PAZ": {},
        "LANDAZURI": {},
        "LEBRIJA": {},
        "LOS SANTOS": {},
        "MACARAVITA": {},
        "MALAGA": {},
        "MATANZA": {},
        "MOGOTES": {},
        "MOLAGAVITA": {},
        "OCAMONTE": {},
        "ONZAGA": {},
        "PALMAR": {},
        "PALMAS DEL SOCORRO": {},
        "PARAMO": {},
        "PIEDECUESTA": {},
        "PINCHOTE": {},
        "PUENTE NACIONAL": {},
        "PUERTO PARRA": {},
        "PUERTO WILCHES": {},
        "RIONEGRO": {},
        "SABANA DE TORRES": {},
        "SAN ANDRES": {},
        "SAN BENITO": {},
        "SAN GIL": {},
        "SAN JOAQUIN": {},
        "SAN JOSE DE MIRANDA": {},
        "SAN MIGUEL": {},
        "SAN VICENTE DE CHUCURI": {},
        "SANTA BARBARA": {},
        "SANTA HELENA DEL OPON": {},
        "SIMACOTA": {},
        "SUCRE": {},
        "SURATA": {},
        "TONA": {},
        "VALLE DE SAN JOSE": {},
        "VETAS": {},
        "VILLANUEVA": {},
        "ZAPATOCA": {}
    },
    "SUCRE": {
        "SINCELEJO": {
            "NOR ESTE": {
                "IE ROGELIO RODRIGUEZ SEVERICHELEONCITO": ["21"],
                "COL NTRA STA DE FATIMA": ["41"],
                "IE PEDAGOGICO DE VENECIA": ["27"],
                "IE PARA POBLACIONES ESPECIALES": ["4"]
            },
            "OESTE": {
                "IE NORMAL SUPERIOR DE SINCELEJO": ["35"],
                "IE JUANITA GARCIA MANJARRES": ["20"],
                "INST TECNICO INDUSTRIAL ANTONIO PRIETO": ["17"]
            },
            "SUR OESTE": {
                "IE NUESTRA SENORA DEL CARMEN": ["26"],
                "INSTEDC20 DE ENERO": ["20"],
                "IE MADRE AMALIA": ["27"]
            },
            "CENTRAL  OESTE": {
                "IE ANTONIO LENIS": ["43"],
                "IE SAN JOSE CIPCDV": ["21"]
            },
            "CENTRAL": {
                "IE JOSE IGNACIO LOPEZ": ["13"],
                "IE FRANCISCO DE PAULA SANTANDER": ["17"],
                "IELUIS CARLOS GALAN": ["9"]
            },
            "NORTE": {
                "IE SAN ROQUE": ["21"],
                "IE ANTONIO NARINO SEDE JUANITA": ["10"],
                "IE CUARTA EL SALVADOR": ["18"],
                "IE ALTOS DE LA SABANA": ["4"]
            },
            "SUR": {
                "INST NACIONAL SIMON ARAUJO": ["44"],
                "COLEGIO LA ESPERANZA": ["34"]
            },
            "SUR ESTE": {
                "IE SAN JOSE": ["28"]
            },
            "10CORREGIMIENTOS AREA 1": {
                "CASTANEDA": ["4"],
                "CHOCHO": ["14"],
                "LAS PALMAS": ["3"]
            },
            "11CORREGIMIENTOS AREA 2": {
                "LA ARENA": ["5"],
                "LA CHIVERA": ["1"],
                "LA PENATA": ["3"],
                "LAS MAJAGUAS": ["1"],
                "SAN RAFAEL EL ZANJON": ["1"]
            },
            "12CORREGIMIENTOS AREA 3": {
                "CRUZ DEL BEQUE": ["2"],
                "EL CERRITO": ["3"],
                "LAGUNA FLOR": ["2"],
                "LAS HUERTAS": ["2"],
                "SAN ANTONIO": ["3"]
            },
            "13CORREGIMIENTOS AREA 4": {
                "BUENAVISTA": ["3"],
                "LA GALLERA": ["7"],
                "SAN JACINTO MOCHA": ["2"],
                "SABANAS DEL POTRERO": ["4"],
                "VILLA DE SAN MARTIN": ["3"],
                "BABILONIA": ["2"],
                "BUENAVISTICA": ["1"],
                "CERRO DEL NARANJO": ["1"]
            }
        },
        "BUENAVISTA": {},
        "CAIMITO": {},
        "CHALAN": {},
        "COLOSO": {},
        "COROZAL": {},
        "COVENAS": {},
        "EL ROBLE": {},
        "GALERAS": {},
        "GUARANDA": {},
        "LA UNION": {},
        "LOS PALMITOS": {},
        "MAJAGUAL": {},
        "MORROA": {},
        "OVEJAS": {},
        "SAMPUES": {},
        "SAN ANTONIO DE PALMITO": {},
        "SAN BENITO ABAD": {},
        "SAN JUAN DE BETULIA": {},
        "SAN MARCOS": {},
        "SAN ONOFRE": {},
        "SAN PEDRO": {},
        "SINCE": {},
        "SUCRE": {},
        "TOLU": {},
        "TOLU VIEJO": {}
    },
    "TOLIMA": {
        "IBAGUE": {
            "DANTAS": {
                "IE LAURELES SD DANTAS": ["1"]
            },
            "LAURELES": {
                "IE LAURELES": ["1"]
            },
            "COELLOCOCORA": {
                "IE COELLOCOCORA": ["5"]
            },
            "GAMBOA": {
                "ESC GAMBOA": ["2"]
            },
            "TAPIAS": {
                "ESC CAMILO TORRES": ["3"]
            },
            "TOCHE": {
                "IE TAPIAS SD TOCHE": ["1"]
            },
            "JUNTAS": {
                "IE JUNTAS": ["2"]
            },
            "VILLA RESTREPO": {
                "CASA DE LA CULTURA": ["6"]
            },
            "CAY": {
                "IE TEC AGROPECUARIA SD CAY": ["4"]
            },
            "CALAMBEO": {
                "ZONA RURAL ESC LOS CRISTALES": ["2"]
            },
            "24CORR  11 SAN JUAN DE LA CHINA": {
                "IE SAN JUAN DE LA CHINA": ["4"]
            },
            "SAN BERNARDO": {
                "IE SAN BERNARDO": ["4"]
            },
            "EL SALADO": {
                "IE VDA LA ESPERANZA": ["2"]
            },
            "BUENOS AIRES": {
                "IE NVA ESPERANZA LA PALMA": ["4"]
            },
            "28CORR 15 CARMEN DE BULIRA": {
                "IE FERNANDO VILLALOBOS SD CARMEN BULIRA": ["2"]
            },
            "EL TOTUMO": {
                "IE FERNANDO VILLALOBOS SD TOTUMO": ["6"]
            },
            "LA FLORIDA": {
                "IE SAN FRANCISCO": ["2"]
            }
        },
        "CHAPARRAL": {
            "DE AMOYA": {
                "AMOYA  LAS CRUCES": ["2"],
                "AMOYA LA CORTES": ["2"],
                "AMOYA  COPETE": ["1"]
            },
            "EL LIMON": {
                "EL LIMON": ["8"],
                "EL LIMON LA PROFUNDA": ["1"]
            },
            "DE CALARMA": {
                "CALARMA RISALDA  CALARMA": ["4"],
                "CALARMA POTRERITO DE LUGO": ["1"],
                "CALARMA YAGUARA": ["1"]
            },
            "LAS HERMOSAS": {
                "LAS HERMOSAS SANTA BARBARA": ["2"],
                "LAS HERMOSAS LA VIRGINIA": ["2"],
                "LAS HERMOSASSAN JOSE DE LAS HERMOSAS": ["2"]
            },
            "LA MARINA": {
                "LA MARINA": ["4"]
            }
        },
        "ESPINAL": {
            "PATIO BONITO": {
                "PATIO BONITO": ["4"]
            },
            "LAS DELICIAS": {
                "LAS DELICIAS": ["2"]
            },
            "LA CAIMANERA": {
                "LA CAIMANERA": ["2"]
            },
            "DINDALITO CTRO": {
                "DINDALITO": ["4"]
            },
            "PASO ANCHO": {
                "PASO ANCHO": ["2"]
            },
            "CHICORAL": {
                "CHICORAL 1": ["15"],
                "CHICORAL 2": ["5"]
            }
        },
        "FRESNO": {
            "BETANIA": {
                "BETANIA": ["2"],
                "EL GUAYABO": ["3"]
            },
            "EL TABLAZO": {
                "EL TABLAZO": ["6"],
                "PAVAS LOS GUAYABOS": ["1"]
            },
            "LA AGUADITA": {
                "LA AGUADITA": ["5"],
                "LA DIVISA": ["1"]
            },
            "CAMPEON": {
                "CAMPEON": ["2"]
            },
            "AGUAS CLARAS": {
                "AGUAS CLARAS": ["2"]
            },
            "PIEDRA GRANDE": {
                "PIEDRA GRANDE": ["2"],
                "LAS MARIAS": ["2"]
            }
        },
        "HERVEO": {
            "DE PADUA": {
                "PADUA": ["4"]
            }
        },
        "LIBANO": {
            "EL CONVENIO": {
                "EL CONVENIO": ["8"]
            },
            "TIERRADENTRO": {
                "TIERRADENTRO": ["3"]
            },
            "SANTA TERESA": {
                "SANTA TERESA": ["4"]
            },
            "SAN FERNANDO": {
                "SAN FERNANDO": ["3"]
            }
        },
        "PLANADAS": {
            "BILBAO": {
                "BILBAO": ["6"],
                "LA ILUSION": ["2"]
            },
            "GAITANIA": {
                "GAITANIA": ["11"],
                "RIO CLARO": ["1"],
                "SAN MIGUEL": ["1"]
            }
        },
        "RIOBLANCO": {
            "01CORREG LA HERRERA": {
                "HERRERA": ["10"],
                "LAS JUNTAS": ["2"]
            }
        },
        "SAN LUIS": {
            "PAYANDE": {
                "EL SALITRE": ["1"],
                "PAYANDE": ["9"]
            }
        },
        "VENADILLO": {
            "JUNIN": {
                "JUNIN": ["4"]
            },
            "LA SIERRITA": {
                "LA SIERRITA": ["1"]
            },
            "MALABAR": {
                "MALABAR": ["2"]
            },
            "PALMAROSA": {
                "PALMAROSA": ["1"]
            }
        },
        "ALPUJARRA": {},
        "ALVARADO": {},
        "AMBALEMA": {},
        "ANZOATEGUI": {},
        "ARMERO": {},
        "ATACO": {},
        "CAJAMARCA": {},
        "CARMEN DE APICALA": {},
        "CASABIANCA": {},
        "COELLO": {},
        "COYAIMA": {},
        "CUNDAY": {},
        "DOLORES": {},
        "EL ESPINAL": {},
        "FALAN": {},
        "FLANDES": {},
        "GUAMO": {},
        "HONDA": {},
        "ICONONZO": {},
        "LERIDA": {},
        "MARIQUITA": {},
        "MELGAR": {},
        "MURILLO": {},
        "NATAGAIMA": {},
        "ORTEGA": {},
        "PALOCABILDO": {},
        "PIEDRAS": {},
        "PRADO": {},
        "PURIFICACION": {},
        "RONCESVALLES": {},
        "ROVIRA": {},
        "SALDANA": {},
        "SAN ANTONIO": {},
        "SANTA ISABEL": {},
        "SUAREZ": {},
        "VALLE DE SAN JUAN": {},
        "VILLAHERMOSA": {},
        "VILLARRICA": {}
    },
    "VALLE DEL CAUCA": {
        "ALCALA": {},
        "ANDALUCIA": {},
        "ANSERMANUEVO": {},
        "ARGELIA": {},
        "BOLIVAR": {},
        "BUGALAGRANDE": {},
        "CAICEDONIA": {},
        "CALIMA": {},
        "CANDELARIA": {},
        "DAGUA": {},
        "EL AGUILA": {},
        "EL CAIRO": {},
        "EL CERRITO": {},
        "EL DOVIO": {},
        "GINEBRA": {},
        "GUACARI": {},
        "JAMUNDI": {},
        "LA CUMBRE": {},
        "LA UNION": {},
        "LA VICTORIA": {},
        "OBANDO": {},
        "PALMIRA": {},
        "PRADERA": {},
        "RESTREPO": {},
        "RIOFRIO": {},
        "ROLDANILLO": {},
        "SAN PEDRO": {},
        "SEVILLA": {},
        "TORO": {},
        "TRUJILLO": {},
        "ULLOA": {},
        "VERSALLES": {},
        "VIJES": {},
        "YOTOCO": {},
        "ZARZAL": {},
        "CALI": {
            "COMUNA 13": {
                "COL PARROQUIAL SENOR DE LOS MI": ["25"],
                "ESCUELA EL DIAMANTE": ["37"],
                "ESCUELA RODRIGO LLOREDA": ["39"],
                "ESCUELA MIGUEL CAMACHO PEREA": ["22"],
                "CENTRO DE CAPACITACION DON BOS": ["17"],
                "COLEGIO COMFANDI CALIPSO": ["24"],
                "ESCUELA SANTA ROSA": ["30"],
                "COLEGIO LOS LAGOS": ["20"],
                "ESCUELA BARTOLOME LOBOGUERRERO": ["33"],
                "SENA CDTI": ["23"],
                "COL SANTA ISABEL DE HUNGRIA COMUNEROS": ["23"],
                "COLEGIO ENRIQUE OLAYA HERRERA": ["13"]
            },
            "FELIDIA": {
                "FELIDIA": ["5"]
            },
            "LA BUITRERA": {
                "LA BUITRERA": ["15"],
                "LA SIRENA": ["12"]
            },
            "LA CASTILLA": {
                "LA CASTILLA": ["3"]
            },
            "LA ELVIRA": {
                "LA ELVIRA": ["3"]
            },
            "LA LEONERA": {
                "LA LEONERA": ["3"]
            },
            "LA PAZ": {
                "LA PAZ": ["2"]
            },
            "GOLONDRINAS": {
                "GOLONDRINAS": ["4"]
            },
            "LOS ANDES": {
                "LOS ANDES": ["4"]
            },
            "32CORR MELENDEZ VILLA CARMELO": {
                "VILLA CARMELO": ["3"]
            },
            "MONTEBELLO": {
                "MONTEBELLO": ["21"]
            },
            "NAVARRO": {
                "NAVARRO": ["9"]
            },
            "PANCE": {
                "PANCE": ["6"]
            },
            "PICHINDE": {
                "PICHINDE": ["3"]
            },
            "EL SALADITO": {
                "EL SALADITO": ["6"]
            },
            "HORMIGUERO": {
                "HORMIGUERO A": ["8"],
                "HORMIGUERO B BOCHALEMA": ["3"]
            }
        },
        "BUENAVENTURA": {
            "ISLA CASCAJAL": {
                "IE SAN RAFAEL": ["24"],
                "IE PASCUAL DE ANDAGOYA": ["15"],
                "TERMINAL DE TRANSPORTE": ["22"],
                "IE FRANCISCO JOSE DE CALDAS": ["36"],
                "FUND EDUC Y SOCIAL ANA VIC": ["21"],
                "INSTITUTO TECNICO COMERCIAL PILOTO": ["2"],
                "IE ANA VICTORIA": ["11"],
                "IE REPUBLICA DE VENEZUELA": ["19"],
                "IE POLICARPA SALAVARRIETA": ["15"],
                "IE URBANO TENORIO": ["9"],
                "IE LA ANUNCIACION IFA": ["24"]
            },
            "CONT EL PAILON": {
                "IE JOSE RAMON BEJARANO": ["11"],
                "CASETA COMUNAL EL ORIENTE": ["15"],
                "IE JUAN JOSE RONDON": ["37"],
                "COLEGIO PATRICIO SIMMENS": ["12"],
                "IE TEOFILO ROBERTO POTES": ["40"],
                "IE TERMARIT": ["11"],
                "IE LICEO DEL PACIFICO": ["18"],
                "IE SAN MARTIN DE PORRAS": ["11"],
                "IE JOSE MARIA CABAL": ["35"],
                "IE LAS AMERICAS": ["10"],
                "PARROQUIA CRISTO REDENTOR": ["24"],
                "IE SIMON BOLIVAR": ["35"],
                "COLEG ANTONIO NARINO": ["14"],
                "IE LOS GRANADINOS": ["27"],
                "CASETA COMUNAL UNION DE VIVIEN": ["13"],
                "IE EMILIO CARVAJAL": ["21"],
                "IE LA NUEVA ESPERANZA": ["6"],
                "CTRO EDUC EUSEBIO ANGULO": ["12"],
                "SEDE MARIA AUXILIADORA": ["4"]
            },
            "BAJO CALIMA": {
                "BAJO CALIMA": ["6"]
            },
            "PUNTA MAGDALENA": {
                "BOCAS DEL SAN JUAN": ["2"],
                "LA PLATA": ["2"],
                "MALAGA": ["2"],
                "PUERTO ESPANA": ["1"]
            },
            "PUNTA BAZAN": {
                "LA BOCANA": ["3"]
            },
            "CARRETERA SIMON BOLIVA": {
                "AGUACLARA": ["1"],
                "LADRILLEROS": ["1"],
                "LLANOBAJO": ["1"],
                "SAN MARCOS": ["2"],
                "ZABALETAS": ["2"],
                "ZACARIAS": ["4"]
            },
            "RIO ANCHICAYA": {
                "SAN JOSE ANCHICAYA": ["2"],
                "TAPARAL": ["2"]
            },
            " RIO RAPOSO": {
                "CARACOLI CACOLI": ["1"],
                "EL TIGRE": ["1"],
                "CALLE HONDA": ["1"],
                "SAN FRANCISCO JAVIER": ["2"]
            },
            "RIO CAJAMBRE": {
                "EL PITAL": ["2"],
                "MAYORQUIN": ["2"],
                "PAPAYAL": ["2"]
            },
            "25CORREG 13 RIO YURUMANGUI": {
                "SAN ANTONIO YURUMANGUI": ["2"],
                "VENERAL": ["2"]
            },
            "PUERTO MERIZALDE": {
                "EL PASTICO": ["2"],
                "PUERTO MERIZALDE": ["5"],
                "SAN PEDRO DE NAYA": ["2"]
            },
            "28CORREG 16 SAN FRANCISCO": {
                "EL CARMEN": ["1"],
                "SAN FRANCISCO DE NAYA": ["2"]
            },
            "29CORREG 17 LA CONCEPCION": {
                "LA CONCEPCION": ["2"],
                "NICOLAS RAMOS HIDALGO": ["1"],
                "PUERTO NAYA": ["1"],
                "SAN LORENZO": ["1"]
            }
        },
        "BUGA": {
            "ZAJON HONDO": {
                "ZANJON HONDO": ["4"]
            },
            "QUEBRADASECA": {
                "QUEBRADASECA": ["4"]
            },
            "NOGALES": {
                "NOGALES": ["1"]
            },
            "MONTERREY": {
                "MONTERREY": ["2"]
            },
            "LOS BANCOS": {
                "LOS BANCOS": ["1"]
            },
            "LA MARIA": {
                "LA MARIA": ["2"]
            },
            "LA HABANA": {
                "LA HABANA": ["5"]
            },
            "FRISOLES": {
                "FRISOLES": ["1"]
            },
            "EL VINCULO": {
                "EL VINCULO": ["4"]
            },
            "EL ROSARIO": {
                "EL ROSARIO": ["1"]
            },
            "EL PLACER": {
                "EL PLACER": ["1"]
            },
            "EL SALADO": {
                "EL SALADO": ["1"]
            },
            "PUEBLO NUEVO": {
                "PUEBLO NUEVO": ["3"]
            },
            "CHAMBIMBAL": {
                "CHAMBIMBAL": ["5"]
            },
            "MIRAFLORES": {
                "VEREDA MIRAFLORES": ["1"]
            },
            "EL PORVENIR": {
                "EL PORVENIR": ["2"]
            },
            "23CORREG  LA PLAYA DEL BUEY": {
                "LA PLAYA DEL BUEY": ["1"]
            },
            "RIO LORO": {
                "RIO LORO": ["1"]
            }
        },
        "CARTAGO": {
            "CAUCA": {
                "CAUCA": ["1"]
            },
            "COLORADAS": {
                "COLORADAS": ["2"]
            },
            "MODIN": {
                "MODIN": ["2"]
            },
            "12CORREGIM 3 PIEDRA DE MOLER": {
                "PIEDRA DE MOLER": ["2"]
            },
            "ZARAGOZA": {
                "ZARAGOZA": ["12"]
            }
        },
        "FLORIDA": {
            "BETANIA": {
                "BETANIA": ["1"]
            },
            "CALENO": {
                "CALENO": ["1"]
            },
            "CANAS ABAJO": {
                "CANAS ABAJO": ["1"]
            },
            "CANAS ARRIBA": {
                "CANAS ARRIBA": ["1"]
            },
            "CHOCOSITO": {
                "CHOCOCITO": ["3"]
            },
            "EL LIBANO": {
                "EL LIBANO": ["1"]
            },
            "EL PEDREGAL": {
                "EL PEDREGAL": ["3"]
            },
            "LA SEQUIA": {
                "LA ACEQUIA": ["1"]
            },
            "LA DIANA": {
                "LA DIANA": ["2"]
            },
            "LA PALMERA": {
                "LA PALMERA": ["1"]
            },
            "LA RIVERA": {
                "LA RIBERA": ["2"]
            },
            "LA SAMARIA": {
                "LA SAMARIA": ["1"]
            },
            "LA UNION": {
                "LA UNION": ["1"]
            },
            "LAS GUACAS": {
                "LAS GUACAS": ["2"]
            },
            "PARRAGA": {
                "PARRAGA": ["1"]
            },
            "PUEBLO NUEVO": {
                "PUEBLO NUEVO": ["1"]
            },
            "REMOLINO": {
                "REMOLINO": ["2"]
            },
            "MIRAVALLES": {
                "MIRAVALLES": ["1"]
            },
            "SAN ANTONIO": {
                "SAN ANTONIO": ["12"]
            },
            "SAN FRANCISCO": {
                "SAN FRANCISCO LLANITO": ["4"]
            },
            "SANTA ROSA": {
                "SANTA ROSA": ["1"]
            },
            "SANTO DOMINGO": {
                "SANTO DOMINGO": ["1"]
            },
            "TARRAGONA": {
                "TARRAGONA": ["3"]
            }
        },
        "TULUA": {
            "10UAF 1": {
                "CAMPOALEGRE": ["3"],
                "NARINO": ["9"],
                "SAN CARLOS": ["1"]
            },
            "11UAF 2": {
                "BOCAS DE TULUA": ["2"],
                "LA PALMERA": ["2"],
                "TRES ESQUINAS": ["5"]
            },
            "12UAF 3": {
                "AGUACLARA": ["23"],
                "LOS CAIMOS": ["1"]
            },
            "13UAF 4": {
                "EL PICACHO": ["2"],
                "LA IBERIA": ["2"],
                "LA MARINA": ["10"],
                "MATEGUADUA": ["1"],
                "SAN LORENZO": ["2"]
            },
            "14UAF 5": {
                "LA MORALIA": ["2"],
                "VENUS": ["1"]
            },
            "15UAF 6": {
                "FRAZADAS": ["2"],
                "SAN RAFAEL": ["2"]
            },
            "16UAF 7": {
                "LA DIADEMA": ["1"],
                "MONTELORO": ["2"],
                "JICARAMATA": ["1"]
            },
            "17UAF 8": {
                "EL RETIRO": ["1"],
                "QUEBRADAGRANDE": ["1"],
                "TOCHECITO": ["1"]
            },
            "18UAF 9": {
                "BARRAGAN": ["3"]
            },
            "19UAF 10": {
                "SANTA LUCIA": ["1"]
            }
        },
        "YUMBO": {
            "ARROYOHONDO": {
                "ARROYOHONDO": ["7"]
            },
            "DAPA": {
                "DAPA": ["10"]
            },
            "EL PEDREGAL": {
                "EL PEDREGAL": ["4"]
            },
            "MULALO": {
                "MULALO": ["4"]
            },
            "SAN MARCOS": {
                "SAN MARCOS": ["4"],
                "MIRAVALLE NORTE": ["1"]
            },
            "SANTA INES": {
                "SANTA INES": ["4"]
            },
            "YUMBILLO": {
                "YUMBILLO": ["2"]
            },
            "LA OLGA": {
                "LA OLGA": ["2"]
            }
        }
    },
    "ARAUCA": {
        "ARAUCA": {
            "RAIMUNDO CISNEROS O": {
                "COLEGIO SIMON BOLIVAR": ["39"]
            },
            "JOSEFA CANELONES": {
                "CONCENTRACION CAMILO TORRES": ["23"]
            },
            "JOSE ANTONIO BENITEZ": {
                "COLEGIO SANTANDER PRIMARIA": ["20"],
                "CONCESCOLAR LA COROCORA": ["14"],
                "CONCESCOLAR DIVINO NINO": ["23"]
            },
            "JOSE LAURENCIO OSIO": {
                "NORMAL MARIA INMACULADA": ["22"],
                "COLEGIO TEC CRISTO REY": ["29"]
            },
            "JUAN JOSE RONDON": {
                "ESCUELA FLOR DE MI LLANO": ["23"]
            },
            "CANAS BRAVAS": {
                "CANAS BRAVAS": ["3"]
            },
            "MAPORILLAL": {
                "MAPORILLAL": ["1"]
            },
            "SANTA BARBARA": {
                "SANTA BARBARA": ["4"]
            },
            "CARACOL": {
                "CARACOL": ["3"]
            },
            "TODOS LOS SANTOS": {
                "TODOS LOS SANTOS": ["4"]
            }
        },
        "ARAUQUITA": {},
        "CRAVO NORTE": {},
        "FORTUL": {},
        "PUERTO RONDON": {},
        "SARAVENA": {},
        "TAME": {}
    },
    "CAQUETA": {
        "ALBANIA": {},
        "BELEN DE LOS ANDAQUIES": {},
        "CARTAGENA DEL CHAIRA": {},
        "CURILLO": {},
        "EL DONCELLO": {},
        "EL PAUJIL": {},
        "LA MONTANITA": {},
        "MILAN": {},
        "MORELIA": {},
        "SAN JOSE DEL FRAGUA": {},
        "SAN VICENTE DEL CAGUAN": {},
        "SOLANO": {},
        "SOLITA": {},
        "VALPARAISO": {},
        "FLORENCIA": {
            "OCCIDENTAL": {
                "IE JUAN BAUTISTA LA SALLE": ["24"],
                "IE JUAN BAUTISTA MIGANI": ["19"],
                "IE SAN FRANCISCO DE ASIS": ["20"],
                "IE SAGRADOS CORAZONES": ["22"],
                "IE JUAN B DE LA SALLE SD SIETE DE AGOSTO": ["3"],
                "IE FRANCISCO DE ASIS SEDE CIRCARCIA": ["1"]
            },
            "SUR": {
                "IE ANTONIO RICAURTE SEDE JUAN XXIII": ["24"],
                "IE ANTONIO RICAURTE": ["14"],
                "IE BARRIOS UNIDOS DEL SUR": ["21"],
                "I TEC": ["AGROPECUARIO DE LA AMAZONIA"]
            },
            "NORTE": {
                "IELOS PINOS SEDE LA PAZ": ["10"],
                "UNIVERSIDAD UNAD": ["10"],
                "INSTITUTO TECNICO INDUSTRIAL": ["18"],
                "IELA SALLE": ["15"],
                "IEBUINAIMA": ["15"],
                "URBANIZACION LA GLORIA": ["2"]
            },
            "ORIENTAL": {
                "IEBUSSEDE PUEBLO NUEVO": ["13"],
                "IEBUSSEDE SANTA INES": ["10"],
                "IECIUDSXXI SEDE TRIUNFO": ["7"],
                "IEDIVNINO SEDE LAS PALMERAS": ["9"],
                "IE CIUDADELA SIGLO XXI": ["28"],
                "IEBELLO HORIZONTE": ["16"]
            },
            "SAN PEDRO NORCAS": {
                "SAN PEDRO NORCASIA": ["3"]
            },
            "ORTEGUAZA": {
                "ORTEGUAZASANTANA LAS HERMOSA": ["3"]
            },
            "EL DANUBIO REMO": {
                "EL DANUBIO EL REMOLINO": ["1"]
            },
            "EL CARANO": {
                "EL CARANO EL CARANO": ["3"]
            },
            "SANTO DOMINGO": {
                "SANTO DOMINGO SANTO DOMINGO": ["4"]
            },
            "SAN MARTIN CAMP": {
                "SAN MARTIN": ["1"]
            },
            "11CORREG VENECIA PUERTO ARANGO": {
                "VENECIA PUERTO ARANGO": ["2"]
            }
        },
        "PUERTO RICO": {
            "LA AGUILILLA": {
                "LA AGUILILLA": ["2"]
            },
            "LA ESMERALDA": {
                "LA ESMERALDA": ["3"]
            },
            "LUSITANIA": {
                "LUSITANIA": ["2"]
            },
            "RIO NEGRO": {
                "RIO NEGRO": ["4"]
            },
            "SANTANA RAMOS": {
                "SANTANA RAMOS": ["2"]
            },
            "LA PAZ": {
                "LA PAZ": ["2"]
            }
        }
    },
    "CASANARE": {
        "YOPAL": {
            "CIRO REINA": {
                "IE LUIS HERNANDEZ VARGAS": ["26"],
                "CE MARCO FIDEL SUAREZ": ["13"],
                "IE CENTRO SOCIAL": ["22"]
            },
            "CALIXTO ZAMBRANO": {
                "IE CARLOS LLERAS RESTREPO": ["33"],
                "IE BRAULIO GONZALEZ SD SIMON BOLIVAR": ["16"],
                "IE BRAULIO GONZALEZ SD CENTRO": ["26"]
            },
            "CLELIA RIVEROS DE PRI": {
                "I TEC EMPRESARIAL YOPAL ITEY": ["28"],
                "IE MANUELA BELTRAN": ["14"]
            },
            "CIUDAD CAMPINA": {
                "IE EL CAMPINA": ["21"],
                "IE EL PARAISO": ["35"]
            },
            "JAVIER MANUEL VARGAS": {
                "I TEC AMBIENTAL SAN MATEO": ["28"],
                "MEGACOLEGIO EL PROGRESO COMUNA CINCO": ["25"]
            },
            "06CIUDADELA LLANO LINDO": {
                "IE EMP LLANO LINDO SD A": ["5"],
                "IE EMP LLANO LINDO SD B": ["3"]
            },
            "07ALCARAVAN LA NIATA": {
                "ALCARAVAN LA NIATA": ["3"]
            },
            "08PUNTO NUEVO": {
                "PUNTO NUEVO": ["2"]
            },
            "09MATELIMON": {
                "MATELIMON": ["2"]
            },
            "10EL CHARTE": {
                "EL CHARTE": ["4"]
            },
            "11EL MORRO": {
                "EL MORRO": ["8"]
            },
            "12EL TALADRO": {
                "EL TALADRO": ["2"]
            },
            "13LA CHAPARRERA": {
                "LA CHAPARRERA": ["7"]
            },
            "14MORICHAL": {
                "MORICHAL": ["6"]
            },
            "15TACARIMENA": {
                "TACARIMENA": ["3"]
            },
            "16TILODIRAN": {
                "TILODIRAN": ["4"]
            },
            "17QUEBRADASECA": {
                "QUEBRADASECA": ["2"]
            }
        },
        "TAURAMENA": {
            "EL CUSIANA": {
                "PASO CUSIANA": ["4"]
            },
            "EL RAIZAL": {
                "EL RAIZAL": ["2"]
            }
        },
        "AGUAZUL": {},
        "CHAMEZA": {},
        "HATO COROZAL": {},
        "LA SALINA": {},
        "MANI": {},
        "MONTERREY": {},
        "NUNCHIA": {},
        "OROCUE": {},
        "PAZ DE ARIPORO": {},
        "PORE": {},
        "RECETOR": {},
        "SABANALARGA": {},
        "SACAMA": {},
        "SAN LUIS DE PALENQUE": {},
        "TAMARA": {},
        "TRINIDAD": {},
        "VILLANUEVA": {}
    },
    "LA GUAJIRA": {
        "RIOHACHA": {
            "CENTRO HISTORICO": {
                "INST EDUC DIVINA PASTORA": ["26"]
            },
            "NUEVO CENTRO": {
                "IE EUSEBIO SEPTIMIO MARY": ["13"]
            },
            "COQUIVACOA": {
                "IE LICEO ALMIRANTE PADILLA": ["33"],
                "IELIVIO REGINALDO FISCHIONE": ["17"],
                "INST EDUC JOSE ANTONIO GALAN": ["16"]
            },
            "COOPERATIVO": {
                "CTRO EDUCATIVO NVO HORIZONTE": ["13"],
                "IE JOSE A GALAN SD COOPERATIVO": ["6"]
            },
            "AER ALMIRANTE PADILL": {
                "INST EDUC IPC": ["38"]
            },
            "NTRA SRA DE LOS REMED": {
                "IE ISABEL MARIA CUESTA": ["24"],
                "IEJOSE ARNOLDO MARIN": ["13"]
            },
            "BOCAGRANDE": {
                "IE ECOLOGICA EL CARMEN": ["19"],
                "IE ECOLOGICA EL CARMEN SD PPAL": ["13"]
            },
            "ECO LAGSALADA Y PAT": {
                "IE MARIA DORALIZA LOPEZ DE MEJ": ["27"],
                "IE HELION PINEDO RIOS": ["18"]
            },
            "ECOTURRIO RANCHERIA": {
                "IE NTRA STA DE FATIMA": ["5"]
            },
            "EL DIVIDIVI": {
                "IE DENZIL ESCOLAR SD PPAL": ["32"]
            },
            " CAMARONES": {
                "CAMARONES": ["9"],
                "BOCA DE CAMARONES": ["2"],
                "PERICO": ["2"]
            },
            "BARBACOAS": {
                "BARBACOAS": ["3"]
            },
            "MATITAS": {
                "IE EUGENIA HERRERA": ["4"]
            },
            "TOMARRAZON": {
                "TOMARRAZON": ["4"],
                "LA GLORIA": ["1"],
                "CASCAJALITO": ["1"]
            },
            "MONGUI": {
                "MONGUI": ["4"],
                "CUCURUMANA": ["4"]
            },
            "COTOPRIX": {
                "COTOPRIX": ["4"]
            },
            "GALAN": {
                "GALAN": ["3"]
            },
            "18CORR VILLA MARTIN MACHOBACHO": {
                "VILLA MARTIN MACHOBAYO": ["4"]
            },
            "JUAN Y MEDIO": {
                "JUAN Y MEDIO": ["2"],
                "LOS MORENEROS": ["1"]
            },
            "ARROYO ARENA": {
                "ARROYO ARENA": ["1"],
                "EL ABRA": ["2"]
            },
            "CERRILLO": {
                "CERRILLO": ["2"]
            },
            "CHOLES": {
                "CHOLES": ["3"]
            },
            "TIGRERAS": {
                "TIGRERAS": ["4"],
                "PELECHUA": ["3"]
            },
            "LAS PALMAS": {
                "LAS PALMAS A1": ["2"],
                "LAS PALMAS A2 SEDE LAS CASITAS": ["1"]
            }
        },
        "MAICAO": {
            "DE CARRAIPIA": {
                "CARRAIPIA": ["9"]
            },
            "DE MAJAYURA": {
                "MAJAYURA": ["10"]
            },
            "DE LIMONCITO": {
                "EL LIMONCITO": ["6"],
                "IPAPURE": ["4"]
            },
            "DE PARAGUACHON": {
                "PARAGUACHON": ["15"]
            },
            "YOTOJOROY": {
                "LA PAZ": ["6"],
                "YOTOJOROY": ["3"]
            }
        },
        "ALBANIA": {},
        "BARRANCAS": {},
        "DIBULLA": {},
        "DISTRACCION": {},
        "EL MOLINO": {},
        "FONSECA": {},
        "HATONUEVO": {},
        "LA JAGUA DEL PILAR": {},
        "MANAURE": {},
        "SAN JUAN DEL CESAR": {},
        "URIBIA": {},
        "URUMITA": {},
        "VILLANUEVA": {}
    },
    "META": {
        "LEJANIAS": {
            "CACAYAL": {
                "CACAYAL": ["5"]
            },
            "LA VENTICUATRO": {
                "LA VEINTICUATRO": ["1"]
            }
        },
        "ACACIAS": {},
        "BARRANCA DE UPIA": {},
        "CABUYARO": {},
        "CASTILLA LA NUEVA": {},
        "CUBARRAL": {},
        "CUMARAL": {},
        "EL CALVARIO": {},
        "EL CASTILLO": {},
        "EL DORADO": {},
        "FUENTE DE ORO": {},
        "GRANADA": {},
        "GUAMAL": {},
        "LA MACARENA": {},
        "LA URIBE": {},
        "MAPIRIPAN": {},
        "MESETAS": {},
        "PUERTO CONCORDIA": {},
        "PUERTO GAITAN": {},
        "PUERTO LLERAS": {},
        "PUERTO LOPEZ": {},
        "PUERTO RICO": {},
        "RESTREPO": {},
        "SAN CARLOS DE GUAROA": {},
        "SAN JUAN DE ARAMA": {},
        "SAN JUANITO": {},
        "SAN MARTIN": {},
        "VILLAVICENCIO": {},
        "VISTA HERMOSA": {}
    },
    "GUAVIARE": {
        "SAN JOSE DEL GUAVIARE": {
            "EL CAPRICHO": {
                "EL CAPRICHO": ["8"]
            },
            "CHARRASBOQUERON": {
                "CHARRAS BOQUERON": ["6"]
            }
        },
        "CALAMAR": {},
        "EL RETORNO": {},
        "MIRAFLORES": {}
    },
    "AMAZONAS": {
        "EL ENCANTO": {
            "01EL ENCANTO": {
                "DEPARTAMENTAL": ["3"]
            }
        },
        "LA CHORRERA": {
            "02LA CHORRERA": {
                "DEPARTAMENTAL": ["4"]
            }
        },
        "LA PEDRERA": {
            "03LA PEDRERA": {
                "DEPARTAMENTAL": ["4"]
            }
        },
        "LA VICTORIA": {
            "09LA VICTORIA": {
                "DEPARTAMENTAL": ["1"]
            }
        },
        "MIRITI PARANA": {
            "04MIRITI PARANA": {
                "PUESTO CABECERA MUNICIPAL": ["2"],
                "SANTA ISABEL": ["1"]
            }
        },
        "PUERTO SANTANDER": {
            "05PUERTO SANTANDER": {
                "DEPARTAMENTAL": ["2"]
            }
        },
        "TARAPACA": {
            "06TARAPACA": {
                "DEPARTAMENTAL": ["5"]
            }
        },
        "PUERTO ALEGRIA": {
            "07PUERTO ALEGRIA": {
                "DEPARTAMENTAL": ["1"]
            }
        },
        "PUERTO ARICA": {
            "08PUERTO ARICA": {
                "DEPARTAMENTAL": ["2"]
            }
        },
        "LETICIA": {},
        "PUERTO NARINO": {}
    },
    "PUTUMAYO": {
        "PUERTO ASIS": {
            "SUR": {
                "ESCUELA CENTRAL DE VARONES": ["20"],
                "I": ["E. SANTA TERESA (SEDE PRIMAR"],
                "COLEGIO SAN FERNANDO": ["8"]
            },
            "ORIENTE": {
                "IEALVERNIA": ["15"],
                "IEEL JARDIN": ["15"],
                "IFLUVIAL DEL AMAZONAS": ["8"]
            },
            "NORTE": {
                "IESAN NICOLAS": ["15"],
                "ESCUELA EL PRADO": ["11"]
            },
            "PINUNA BLANCO": {
                "PINUNA BLANCO PUERTO HACHA": ["3"]
            },
            "LA CARMELITA": {
                "LA CARMELITA CUEMBI": ["7"],
                "SANTA MARIA ALTO CUEMBI": ["3"]
            },
            "SANTANA": {
                "SANTANA": ["5"]
            },
            " TETEYE": {
                "TETEYE": ["3"]
            },
            "VILLA VICTORIA": {
                "VILLA VICTORIA": ["2"]
            }
        },
        "PUERTO LEGUIZAMO": {
            "LA TAGUA": {
                "LA TAGUA": ["2"]
            },
            " EL MECAYA": {
                "EL MECAYA": ["2"],
                "EL SENCELLA": ["1"]
            },
            "PUERTO OSPINA": {
                "PUERTO OSPINA": ["4"],
                "PINUNA NEGRO": ["2"]
            }
        },
        "COLON": {
            "SAN PEDRO": {
                "SAN PEDRO": ["3"]
            }
        },
        "SAN MIGUEL LA DORADA": {
            "01CORR PUERTO COLON SAN MIGUEL": {
                "PUERTO COLON SAN MIGUEL": ["9"]
            }
        },
        "MOCOA": {},
        "ORITO": {},
        "PUERTO CAICEDO": {},
        "PUERTO GUZMAN": {},
        "SAN FRANCISCO": {},
        "SAN MIGUEL": {},
        "SANTIAGO": {},
        "SIBUNDOY": {},
        "VALLE DEL GUAMUEZ": {},
        "VILLAGARZON": {}
    },
    "CAUCA": {
        "ALMAGUER": {},
        "ARGELIA": {},
        "BALBOA": {},
        "BOLIVAR": {},
        "BUENOS AIRES": {},
        "CAJIBIO": {},
        "CALDONO": {},
        "CALOTO": {},
        "CORINTO": {},
        "EL TAMBO": {},
        "FLORENCIA": {},
        "GUACHENE": {},
        "GUAPI": {},
        "INZA": {},
        "JAMBALO": {},
        "LA SIERRA": {},
        "LA VEGA": {},
        "LOPEZ DE MICAY": {},
        "MERCADERES": {},
        "MIRANDA": {},
        "MORALES": {},
        "PADILLA": {},
        "PAEZ": {},
        "PATIA": {},
        "PIAMONTE": {},
        "PIENDAMO": {},
        "POPAYAN": {},
        "PUERTO TEJADA": {},
        "PURACE": {},
        "ROSAS": {},
        "SAN SEBASTIAN": {},
        "SANTA ROSA": {},
        "SANTANDER DE QUILICHAO": {},
        "SILVIA": {},
        "SOTARA": {},
        "SUAREZ": {},
        "SUCRE": {},
        "TIMBIO": {},
        "TIMBIQUI": {},
        "TORIBIO": {},
        "TOTORO": {},
        "VILLA RICA": {}
    },
    "GUAINIA": {
        "INIRIDA": {}
    },
    "NORTE DE SANTANDER": {
        "ABREGO": {},
        "ARBOLEDAS": {},
        "BOCHALEMA": {},
        "BUCARASICA": {},
        "CACHIRA": {},
        "CACOTA": {},
        "CHINACOTA": {},
        "CHITAGA": {},
        "CONVENCION": {},
        "CUCUTA": {},
        "CUCUTILLA": {},
        "DURANIA": {},
        "EL CARMEN": {},
        "EL TARRA": {},
        "EL ZULIA": {},
        "GRAMALOTE": {},
        "HACARI": {},
        "HERRAN": {},
        "LA ESPERANZA": {},
        "LA PLAYA DE BELEN": {},
        "LABATECA": {},
        "LOS PATIOS": {},
        "LOURDES": {},
        "MUTISCUA": {},
        "OCANA": {},
        "PAMPLONA": {},
        "PAMPLONITA": {},
        "PUERTO SANTANDER": {},
        "RAGONVALIA": {},
        "SALAZAR DE LAS PALMAS": {},
        "SAN CALIXTO": {},
        "SAN CAYETANO": {},
        "SANTIAGO": {},
        "SANTO DOMINGO DE SILOS": {},
        "SARDINATA": {},
        "TEORAMA": {},
        "TIBU": {},
        "TOLEDO": {},
        "VILLA CARO": {},
        "VILLA DEL ROSARIO": {}
    },
    "SAN ANDRES Y PROVIDENCIA": {
        "PROVIDENCIA Y SANTA CATALINA ISLAS": {},
        "SAN ANDRES": {}
    },
    "VAUPES": {
        "CARURU": {},
        "MITU": {},
        "TARAIRA": {}
    },
    "VICHADA": {
        "CUMARIBO": {},
        "LA PRIMAVERA": {},
        "PUERTO CARRENO": {},
        "SANTA ROSALIA": {}
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