import { get } from 'lodash'
const data = {
    "ANTIOQUIA": {
        "MEDELLÍN": {
            "POPULAR": {
                "SEC. ESC. LA ESPERANZA NO. 2": ["35"],
                "INST. EDUC. LA CANDELARIA": ["53"],
                "I.E. MARÍA DE LOS ÁNGELES CANO MÁRQUEZ": ["20"],
                "SEC. ESC. MEDELLÍN": ["24"],
                "I.E. FE Y ALEGRÍA GRANIZAL": ["4"],
                "I.E. LA AVANZADA": ["2"],
                "SEC. ESC. CARPINELO AMAPOLITA": ["1"],
                "I.E. ANTONIO DERKA": ["3"],
                "SEC. ESC. PABLO VI": ["72"],
                "SEC. ESC. DIVINA PROVIDENCIA": ["36"],
                "SEC.ESC. AGRIPINA MONTES DEL VALLE": ["45"],
                "I.E. FEDERICO CARRASQUILLA": ["5"],
                "I.E. GUADALUPE": ["5"]
            },
            "SANTA CRUZ": {
                "INST. EDUC. ASIA IGNACIANA": ["39"],
                "SEC. ESC. MANUEL URIBE ÁNGEL": ["36"],
                "SEC. ESC. REPÚBLICA. DE NICARAGUA": ["24"],
                "I.E. FE Y ALEGRÍA J. MARÍA VELAZ": ["6"],
                "I.E. BARRIO SANTA CRUZ": ["24"],
                "SEC. ESC. ARZOBISPO GARCÍA": ["27"],
                "I.E. REPÚBLICA DE HONDURAS": ["21"]
            },
            "MANRIQUE": {
                "I.E. REPÚBLICA DE BARBADOS": ["41"],
                "I.E. SAN LORENZO DE ABURRÁ": ["25"],
                "I.E. MANUELA BELTRÁN": ["53"],
                "SEC. ESC. SAN JOSÉ I.E. MAN. BEL.": ["35"],
                "I.E. RAMÓN MÚNERA LOPERA": ["7"],
                "I.E. BELLO ORIENTE": ["3"],
                "I.E. JOSÉ ROBERTO VÁSQUEZ": ["1"],
                "I.E. JOSÉ ANTONIO GALÁN": ["33"],
                "I.E. HERNÁN TORO AGUDELO": ["34"],
                "SEC. ESC. SUSANA DIAZIE RODRIGO L. BONILLA": ["23"],
                "I.E. SAN JUAN BAUTISTA DE LA SALLE": ["3"]
            },
            "ARANJUEZ": {
                "COL. AGUSTÍNIANO DE SAN NICOLÁS": ["43"],
                "I.E. MONSEÑOR FCO. CRISTÓBAL T.": ["36"],
                "I.E. GILBERTO ALZATE AVENDAÑO": ["37"],
                "I.E. CAMPO VALDÉS": ["25"],
                "I.E. SAN JUAN BOSCO": ["5"],
                "I.E. ALFONSO MORA NARANJO": ["33"],
                "I.E. JOSÉ MARÍA BRAVO MÁRQUEZ": ["20"],
                "I.E. FRANCISCO MIRANDA": ["51"],
                "I.E. JAVIERA LONDOÑO": ["32"],
                "I.E. EL BOSQUE": ["10"],
                "I.E. FRANCISCO MIRANDA SD JULIO ARBOLEDA": ["3"]
            },
            "CASTILLA": {
                "I.E. JULIO CÉSAR GARCÍA": ["34"],
                "SEC. ESC. EDUARDO URIBE BOTERO": ["30"],
                "I.E. PBRO. ANTONIO JOSÉ BERNAL": ["51"],
                "I.E. SEBASTIÁN DE BELALCÁZAR": ["6"],
                "I.E. TRICENTENARIO": ["23"],
                "SEC. ESC. TOSCANA": ["3"],
                "I.E. MARÍA MONTESSORI": ["32"],
                "I.E. MAESTRO ARENAS BETANCUR": ["39"],
                "I.E. DINAMARCA": ["8"],
                "INST. EDU. REPÚBLICA DE URUGUAY": ["39"],
                "I.E. FÉLIX DE BEDOUT MORENO": ["5"]
            },
            "DOCE DE OCTUBRE": {
                "I.E. CIUDADELA LAS AMÉRICAS": ["30"],
                "COL. VIDA Y PAZ PROGRESAR UNID": ["24"],
                "SEC. ESC. LEÓN DE GREIFF": ["23"],
                "I.E. DOCE DE OCTUBRE": ["24"],
                "CASD JOSÉ MARÍA ESPINOSA PRI.E.TO": ["4"],
                "I.E. EL TRIUNFO SANTA TERESA": ["4"],
                "I.E. SANTA JUANA DE LESTONACC": ["19"],
                "I.E. JESÚS MARÍA VALLE JARAMILLO": ["4"],
                "I.E. MAESTRO FERNANDO BOTERO": ["34"],
                "I.E. ALFREDO COCK ARANGO": ["32"],
                "SEC.ESC. SAN MARTÍN DE PORRES": ["20"],
                "I.E. KENNEDY": ["36"],
                "SEC.CONCENTRACIÓN EDUC. KENNEDY": ["19"],
                "I.E. JORGE ELIÉCER GAITÁN PPAL.": ["6"],
                "SEC. ESC. PEDREGAL": ["8"],
                "I.E. LA ESPERANZA": ["6"]
            },
            "ROBLEDO": {
                "I.E. SAN VICENTE DE PAUL": ["33"],
                "SEC. ESC. EL DIAMANTE": ["32"],
                "I.E. EL DIAMANTE SEDE BTO.": ["17"],
                "I.E. FE Y ALEGRÍA VILLA DE LA C.": ["40"],
                "I.E. FE Y ALEGRÍA SAN JOSÉ": ["10"],
                "TECNOLÓGICO DE ANTIOQUIA": ["18"],
                "I.E. JESÚS REY": ["5"],
                "I.E. AURES": ["4"],
                "I.E. MONSEÑOR GERARDO VALENCIA CANO": ["12"],
                "I.E. JORGE ROBLEDO": ["41"],
                "I.E. MARISCAL ROBLEDO": ["23"],
                "SEC. ESC. SANTA MARGARITA": ["20"],
                "COLEGIO FERRINI": ["15"],
                "I.E. CAMILO MORA CARRASQUILLA": ["6"],
                "COL. MAYOR DE ANTIOQUIA": ["3"],
                "I.E. BARRIO OLAYA HERRERA": ["2"]
            },
            "VILLA HERMOSA": {
                "I.E. JUAN DE DIOS CARVAJAL": ["32"],
                "I.E. JUAN DE LA CRUZ POSADA": ["14"],
                "I.E. JOSÉ CELESTINO MUTIS": ["8"],
                "INST. METROPOLITANO ITM": ["3"],
                "SEC. ESC. JULIA AGUDELO": ["66"],
                "SEC. ESC. NIÑO JESÚS DE PRAGA": ["7"],
                "I.E. SOL DEL ORIENTE": ["6"],
                "I.E. LUIS CARLOS GALÁN SARMIENTO PPAL.": ["2"],
                "I.E. VILLA TURBAY": ["12"],
                "SEC. ESCUELA LAS ESTANCIAS": ["10"],
                "SEC.ESC. SOR MARÍA LUISA COURBIN": ["25"],
                "I.E. SAN FRANCISCO DE ASÍS": ["19"],
                "I.E. FÉLIX HENAO BOTERO": ["18"]
            },
            "BUENOS AIRES": {
                "I.E. GUADALUPANO LA SALLE": ["32"],
                "I.E. MERCEDITAS GÓMEZ MARTÍNEZ": ["29"],
                "I.E. MANUEL JOSÉ CAICEDO": ["24"],
                "I.E. LA MILAGROSA": ["59"],
                "COLEGIO EUCARÍSTICO": ["4"],
                "SENA SD BUENOS AIRES": ["1"],
                "I.E. LORETO GABRIELA GÓMEZ CARVAJAL": ["19"],
                "INST. EDUCATIVA FEDERICO OZANAM": ["44"],
                "ESCUELA NORMAL SUPERIOR ANT.": ["21"],
                "SEC. ESC. JOSÉ DE SAN MARTÍN": ["30"],
                "SEC. ESC. JUAN CANCIO RESTREPO": ["1"]
            },
            "LA CANDELARIA": {
                "I.E. TULIO OSPINA": ["40"],
                "SEC. ESC. AGUSTÍN NIETO CABALLERO": ["9"],
                "COLEGIO SALESIANO EL SUFRAGIO": ["51"],
                "I.E. CEFA": ["43"],
                "I.E. HECTOR ABAD GÓMEZ": ["26"],
                "I.E. JAVIERA LONDOÑO": ["3"],
                "ITM PRADO CENTRO": ["3"],
                "CENTRO COMERCIAL SAN DIEGO": ["56"],
                "ALCALDÍA MUNICIPAL SÓTANO": ["41"],
                "SENA": ["19"],
                "UNIVERSIDAD CLARETIANA": ["3"]
            },
            "LAURELES": {
                "INSTITUTO JORGE ROBLEDO": ["27"],
                "INST. EDUC. MATER DEI": ["37"],
                "I.E. MARCO FIDEL SUÁREZ": ["35"],
                "COLEGIO CALASANZ FEMENINO": ["16"],
                "COL. SAN IGNACIO SD MAYORES": ["3"],
                "SEC. ESC. CARLOS OBANDO VELASCO": ["2"],
                "SEC. ESC. AGRUPACIÓN COLOMBIA": ["39"],
                "I.E. LUCRECIO JARAMILLO VÉLEZ": ["56"],
                "COLEGIO BETLEHEMITAS": ["10"],
                "COL. SAN IGNACIO SEC. INFANTIL": ["6"],
                "UNIVERSIDAD ADVENTISTA": ["4"],
                "UNIVERSIDAD PONTIFICIA BOLÍVARIANA": ["4"]
            },
            "LA AMÉRICA": {
                "SEC. ESC. SANTA LUCÍA": ["37"],
                "I.E. CONCEJO DE MEDELLÍN": ["66"],
                "INST. EDUC. LA PIEDAD": ["30"],
                "I.E. SANTA ROSA DE LIMA": ["7"],
                "I.E. LOLA GONZÁLEZ": ["3"],
                "I.E. RAFAEL URIBE URIBE": ["32"],
                "SEC. ESC. RAFAEL URIBE URIBE": ["14"],
                "SEC. ESC. PEDRO DE CASTRO": ["44"],
                "I.E. FRANCISCO ANTONIO ZEA": ["10"],
                "I.E. AMÉRICA": ["6"],
                "I.E. SAMUEL BARRIENTOS": ["3"],
                "LICEO SALAZAR Y HERRERA": ["4"]
            },
            "SAN JAVIER": {
                "I.E. BLANQUIZAL EN ADMON. CR.": ["14"],
                "SEC. ESC. REPÚBLICA DE PANAMÁ": ["18"],
                "I.E. JUAN XXIII": ["7"],
                "SEC. ESC. MONSEÑOR PERDOMO": ["36"],
                "SEC. ESC. PIO XII": ["28"],
                "I.E. STELLA VÉLEZ LONDOÑO": ["4"],
                "I.E. LA INDEPENDENCIA": ["44"],
                "SEC. ESC. EL SOCORRO": ["27"],
                "SEC. ESC. MIXTA BETANIA": ["26"],
                "I.E. EL CORAZÓN": ["6"],
                "I.E.EDUARDO SANTOS": ["6"],
                "I.E.CARLOS VIECO": ["11"],
                "SEDE AMOR AL NIÑO": ["3"]
            },
            "EL POBLADO": {
                "COL. SANTA MARÍA DEL ROSARIO": ["26"],
                "COL. MARYMOUNT": ["15"],
                "COLEGIO PALERMO DE SAN JOSÉ": ["43"],
                "COLEGIO SAN LUCAS": ["2"],
                "ESC. GUILLERMO ECHAVARRÍA MISAS": ["3"],
                "POLITÉCNICO JAIME ISAZA CADAVID": ["26"],
                "I.E. INEM JOSÉ FÉLIX DE RESTREPO": ["35"],
                "UNIVERSIDAD EAFIT": ["53"],
                "COL. DE LA CIA. DE MARÍA LA ENSEÑANZA": ["6"],
                "SAN JOSÉ DE LAS VEGAS": ["3"]
            },
            "GUAYABAL": {
                "SEC. ESC. SANTÍSIMA TRINIDAD": ["21"],
                "I.E. BENJAMÍN HERRERA": ["21"],
                "I.E. CRISTO REY": ["38"],
                "SECCIÓN ESC. REPÚBLICA DE COSTA RICA": ["25"],
                "SEC.ESC. LA COLINA": ["14"],
                "I.E. LA SALLE CAMPO AMOR": ["11"],
                "SEC. ESC. CRISTO REY APOLO": ["2"]
            },
            "BELÉN": {
                "I.E. FÁTIMA NUTIBARA": ["27"],
                "ESC. SOFÍA OSPINA DE NAVARRO": ["22"],
                "I.E. JUAN MARÍA CÉSPEDES": ["60"],
                "I.E. GUILLERMO VALENCIA": ["26"],
                "UNID. DEPORTIVA ANDRÉS ESCOBAR": ["6"],
                "LICEO SAN RAFAEL": ["15"],
                "COLEGIO SAN JUAN BOSCO": ["2"],
                "SEC. ESC. JACKELINE KENNEDY": ["20"],
                "I.E. JOSÉ MARÍA BERNAL": ["28"],
                "INST. SAN CARLOS DE LA SALLE": ["41"],
                "I.E. ALCALDÍA DE MEDELLÍN": ["39"],
                "COLEGIO PADRE MANYANET": ["14"],
                "I.E. CAMPILLAS DEL ROSARIO": ["6"],
                "I.E. ANTONIO RICAURTE": ["3"],
                "I.E. RAMÓN GIRALDO CEBALLOS": ["37"],
                "UNIVERSIDAD DE MEDELLÍN": ["52"],
                "I.E. HORACIO MUÑOZ SUESCÚN": ["27"],
                "I.E. REPÚBLICA DE VENEZUELA": ["24"],
                "I.E. SAN ROBERTO BELARMINO": ["5"],
                "INSTITUTO PEDRO JUSTO BERRIO": ["1"]
            },
            "ALTAVISTA": {
                "I.E. DÉBORA ARANGO PÉREZ": ["22"]
            },
            "SAN ANTONIO DE PRADO": {
                "I.E. FE Y ALEGRÍA EL LIMONAR": ["23"],
                "I.E. SAN ANTONIO DE PRADO": ["55"],
                "I.E. MANUEL DE J. BETANCUR": ["48"],
                "I.E. MONSEÑOR VÍCTOR WIEDEMANN": ["3"]
            },
            "PALMITAS": {
                "I.E. HÉCTOR ROGELIO MONTOYA": ["7"]
            },
            "SANTA ELENA": {
                "CASA DE GOBIERNO SANTA ELENA": ["17"]
            },
            "SAN CRISTÓBAL": {
                "I.E. SAN CRISTÓBAL": ["44"],
                "PARQUE BIBLIOTECA FERNANDO BOTERO": ["43"],
                "I.E. LUSITANIA": ["13"],
                "I.E. PRESBÍTERO JUAN J. ESCOBAR": ["3"],
                "I.E. LOMA HERMOSA": ["4"]
            }
        },
        "APARTADÓ": {
            "BERNARDO JARAMILLO": {
                "I.E. ALFONSO LÓPEZ": ["23"],
                "I.E. POLICARPA SALAVARRIETA": ["23"],
                "I.E. LA PAZ": ["13"],
                "I.E. LA PAZ 20 DE ENERO": ["5"]
            },
            "OCHO DE FEBRERO": {
                "I.E. SAN FRANCISCO DE ASÍS": ["25"],
                "I.E. SAN PEDRO CLAVER": ["21"],
                "HOGAR INFANTIL LOS GIRASOLES": ["12"],
                "I.E. SANTA MARÍA LA ANTIGUA": ["3"]
            },
            "PUEBLO NUEVO": {
                "I.E. HERACLIO MENA PADILLA": ["23"],
                "COLEGIO ADVENTISTA": ["15"],
                "I.E. CADENA LAS PLAYAS": ["2"]
            },
            "JOSÉ JOAQUÍN VÉLEZ": {
                "I.E. CAMPO ALEGRE": ["5"],
                "I.E. MADRE LAURA": ["14"],
                "COL. COOPERATIVO": ["18"],
                "I.E. JOSÉ JOAQUÍN VÉLEZ": ["24"],
                "I.E. JOSÉ CELESTINO MUTIS": ["11"]
            },
            "CHURIDO PUEBLO": {
                "CHURIDO": ["4"]
            },
            "PUERTO GIRÓN": {
                "PUERTO GIRÓN": ["2"]
            },
            "SAN JOSÉ DE APARTADÓ": {
                "SAN JOSÉ DE APARTADÓ": ["5"]
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
            "PARÍS": {
                "I.E. BARRIO PARÍS MEGACOLEGIO": ["16"],
                "I.E. ALBERTO DÍAZ MUÑOZ": ["16"],
                "I.E. ALBERTO DÍAZ MUÑOZ SEC. CPRAD.": ["7"],
                "CENTRO EDUCAT. RAQUEL JARAMILLO": ["22"],
                "I.E. BARRIO PARÍS": ["11"]
            },
            "MADERA": {
                "I.E. ATANASIO GIRARDOT": ["45"],
                "COL. PARROQ. SAN FCO DE. ASÍS": ["25"],
                "I.E. SUÁREZ DE LA PRESENTACIÓN": ["32"],
                "COL. SAN BUENAVENTURA": ["20"]
            },
            "SANTA ANA": {
                "I.E. TOMÁS CADAVID RESTREPO": ["25"],
                "COLEGIO LA SALLE": ["38"]
            },
            "LA CUMBRE": {
                "I.E. FERNANDO VÉLEZ": ["39"],
                "I.E. LA PRIMAVERA": ["20"],
                "I.E. NAZARETH": ["21"],
                "I.E. CARLOS PÉREZ SEDE ROSALÍA": ["3"]
            },
            "SUÁREZ": {
                "INST. UNIVERSITARIA MARCO FIDEL SUÁREZ": ["27"],
                "COL. JESÚS DE LA BUENA ESPERANZA": ["45"],
                "I.E. SAGRADO CORAZÓN": ["19"],
                "I.E. JORGE ELIÉCER GAITÁN": ["50"],
                "I.E. SANTA CATALINA": ["23"],
                "I.E. LA MILAGROSA": ["22"]
            },
            "BELLAVISTA": {
                "I.E. HERNÁN VILLA BAENA": ["35"],
                "I.E. VILLA DEL SOL SEC. 1": ["22"],
                "I.E. VILLA DEL SOL SEC. 2": ["3"]
            },
            "ALTOS DE NIQUÍA": {
                "I.E. GILBERTO ECHEVERRI MEJÍA": ["19"],
                "I.E. CIAL ANTONIO ROLDÁN": ["21"],
                "I.E. JOSEFA CAMPOS": ["16"]
            },
            "NIQUÍA": {
                "I.E. CONCEJO DE BELLO": ["25"],
                "I.E. FE Y ALEGRÍA NUEVA GENERAC.": ["23"],
                "COL. NUESTRA SEÑORA DE CHIQUINQ.": ["20"],
                "BETSABÉ ESPINAL": ["15"]
            },
            "GUASIMALITO": {
                "I.E. NAVARRA": ["6"],
                "I.E. NAVARRA SD EL TRÉBOL": ["6"]
            },
            "FONTIDUEÑO": {
                "I.E. LAS VEGAS": ["13"],
                "I.E. FONTIDUEÑO JAIME ARANGO R.": ["20"]
            },
            "ZAMORA": {
                "I.E. FEDERICO SIERRA ARANGO": ["33"],
                "I.E. LA GABRIELA": ["19"],
                "I.E. ZAMORA CENTENARIO": ["7"]
            },
            "SAN FÉLIX": {
                "SAN FÉLIX": ["7"]
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
            "SANTA INÉS": {
                "SANTA INÉS": ["1"]
            },
            "LA MADERA": {
                "LA MADERA": ["2"]
            },
            "AGUAS CLARAS": {
                "AGUAS CLARAS": ["4"]
            }
        },
        "EBÉJICO": {
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
        "GÓMEZ PLATA": {
            "EL SALTO": {
                "EL SALTO": ["2"]
            },
            "SAN MATÍAS": {
                "SAN MATÍAS": ["2"]
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
        "ITAGÜÍ": {
            "EL MANZANILLO": {
                "EL MANZANILLO": ["23"],
                "I.E. MARÍA JOSEFA ESCOBAR": ["5"]
            }
        },
        "ITUANGO": {
            "SANTA RITA DE SINITAVE": {
                "SANTA RITA DE ITUANGO": ["7"]
            }
        },
        "LA CEJA": {
            "SAN JOSÉ": {
                "SAN JOSÉ": ["5"]
            }
        },
        "LA UNIÓN": {
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
            "LIBONO MEJÍA": {
                "I.E. JOSEFINA MUÑOZ GONZÁLEZ": ["26"],
                "I.E. JULIO SANÍN": ["25"],
                "COLISEO RUBÉN DARÍO QUINTERO": ["15"],
                "ESC. JUAN MANUEL GONZÁLEZ": ["13"],
                "ESC. UNIDA": ["17"],
                "COL. QUEBRADA ARRIBA": ["12"],
                "COLISEO ALTO DEL MEDIO": ["13"]
            },
            "SAN ANTONIO": {
                "CONC. EDU. SAN ANTONIO": ["24"],
                "I.T. SANTIAGO DE ARMA": ["18"],
                "I.E. EL TRIÁNGULO": ["1"]
            },
            "MONS. ALFONSO URIBE JARAMILLO": {
                "ESC. CUATRO ESQUINAS": ["17"],
                "ESC. CARMELA BIANCHETTI": ["9"]
            },
            "EL PORVENIR": {
                "ESC. EDUARDO URIBE BOTERO": ["18"],
                "LIC CONSEJO MUNICIPAL": ["21"],
                "ESC. PASCUALA MUÑOZ": ["11"]
            },
            "DEL SUR": {
                "DEL SUR": ["18"],
                "COL. CABECERAS CORREG. DEL SUR": ["1"]
            },
            "JOSÉ MARÍA CÓRDOVA MUÑOZ": {
                "JOSÉ MARÍA CÓRDOVA MUÑOZ": ["7"],
                "AUDITORIO AEROPUERTO CORR. JMC.": ["9"]
            },
            "CENTRO CASIMIRO GARCÍA": {
                "CENTRO": ["3"],
                "ESC. SAN JOSÉ DE LAS CUCHILLAS": ["2"]
            },
            "NORTE NESTOR E. SANINT ALV.": {
                "NORTE": ["2"],
                "I.E. ANA GÓMEZ DE SIERRA": ["10"]
            }
        },
        "SONSÓN": {
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
            "RÍO VERDE DE LOS HENAOS": {
                "EL SALADO": ["1"],
                "LA TORRE": ["1"],
                "RÍO VERDE DE LOS HENAOS": ["1"]
            },
            "JERUSALÉN LA FLORIDA": {
                "JERUSALÉN LA FLORIDA": ["2"]
            },
            "RÍO VERDE DE LOS MONTES": {
                "BRASILAL": ["1"],
                "RÍO VERDE DE LOS MONTES": ["2"]
            }
        },
        "VEGACHÍ": {
            "EL TIGRE": {
                "EL TIGRE": ["3"]
            }
        },
        "ABEJORRAL": {},
        "ABRIAQUÍ": {},
        "ALEJANDRÍA": {},
        "AMAGÁ": {},
        "AMALFI": {},
        "ANDES": {},
        "ÁNGELÓPOLIS": {},
        "ANGOSTURA": {},
        "ANORÍ": {},
        "ANZÁ": {},
        "ARBOLETES": {},
        "ARGELIA": {},
        "ARMENIA": {},
        "BELMIRA": {},
        "BETANIA": {},
        "BETULIA": {},
        "BRICEÑO": {},
        "BURITICÁ": {},
        "CÁCERES": {},
        "CAICEDO": {},
        "CALDAS": {},
        "CAMPAMENTO": {},
        "CAÑASGORDAS": {},
        "CARACOLÍ": {},
        "CARAMANTA": {},
        "CAREPA": {},
        "CAROLINA DEL PRÍNCIPE": {},
        "CAUCASIA": {},
        "CHIGORODÓ": {},
        "CISNEROS": {},
        "CIUDAD BOLÍVAR": {},
        "COCORNÁ": {},
        "CONCEPCIÓN": {},
        "CONCORDIA": {},
        "COPACABANA": {},
        "DABEIBA": {},
        "DONMATÍAS": {},
        "EL BAGRE": {},
        "EL CARMEN DE VIBORAL": {},
        "EL PEÑOL": {},
        "EL RETIRO": {},
        "EL SANTUARIO": {},
        "ENTRERRÍOS": {},
        "ENVIGADO": {},
        "FREDONIA": {},
        "FRONTINO": {},
        "GIRALDO": {},
        "GIRARDOTA": {},
        "GUADALUPE": {},
        "GUARNE": {},
        "GUATAPÉ": {},
        "HELICONIA": {},
        "HISPANIA": {},
        "JARDÍN": {},
        "JERICÓ": {},
        "LA ESTRELLA": {},
        "LA PINTADA": {},
        "LIBORINA": {},
        "MACEO": {},
        "MARINILLA": {},
        "MONTEBELLO": {},
        "MURINDÓ": {},
        "MUTATÁ": {},
        "NARIÑO": {},
        "NECHÍ": {},
        "NECOCLÍ": {},
        "OLAYA": {},
        "PEQUE": {},
        "PUEBLORRICO": {},
        "PUERTO BERRÍO": {},
        "PUERTO NARE": {},
        "PUERTO TRIUNFO": {},
        "SABANALARGA": {},
        "SABANETA": {},
        "SALGAR": {},
        "SAN ANDRÉS DE CUERQUIA": {},
        "SAN CARLOS": {},
        "SAN FRANCISCO": {},
        "SAN JERÓNIMO": {},
        "SAN JOSÉ DE LA MONTAÑA": {},
        "SAN JUAN DE URABÁ": {},
        "SAN LUIS": {},
        "SAN PEDRO DE URABÁ": {},
        "SAN PEDRO DE LOS MILAGROS": {},
        "SAN RAFAEL": {},
        "SAN ROQUE": {},
        "SAN VICENTE": {},
        "SANTA BÁRBARA": {},
        "SANTA FE DE ANTIOQUIA": {},
        "SANTA ROSA DE OSOS": {},
        "SANTO DOMINGO": {},
        "SEGOVIA": {},
        "SOPETRÁN": {},
        "TÁMESIS": {},
        "TARAZÁ": {},
        "TARSO": {},
        "TITIRIBÍ": {},
        "TOLEDO": {},
        "TURBO": {},
        "URAMITA": {},
        "URRAO": {},
        "VALDIVIA": {},
        "VALPARAISO": {},
        "VENECIA": {},
        "VIGÍA DEL FUERTE": {},
        "YALÍ": {},
        "YARUMAL": {},
        "YOLOMBÓ": {},
        "YONDÓ": {},
        "ZARAGOZA": {}
    },
    "ATLÁNTICO": {
        "BARRANQUILLA": {
            "SUR OCCIDENTE": {
                "INS. DIS. DESAR INTNVA GRANADA": ["34"],
                "IDETH SEDE PRINCIPAL SEDE II": ["15"],
                "COL. DTAL. OLAYAANT CEB108": ["15"],
                "COL. HILDA MUÑOZ": ["27"],
                "COLEGIO JORGE NICOLÁS ABELLO": ["58"],
                "IDETH SEDE I PRIMARIA": ["25"],
                "INT. EDUCATIVO DTAL. LOS PINOS": ["19"],
                "COLEGIO NAZARETH LUCERO": ["10"],
                "JORGE NICOLÁS ABELLO SD 2": ["2"],
                "I.E. DISTRITAL LA MERCED": ["22"],
                "COL. DTAL. JOSÉ EUSEBIO CARO": ["41"],
                "COL. CAMILO TORRES": ["5"],
                "COL. DTAL. JUAN JOSÉ RONDON": ["34"],
                "I.E.D. JAVIER SÁNCHEZ": ["24"],
                "COL. DISTRITAL MARÍA INMACULADA": ["36"],
                "ESC. NORMAL SUPERIOR LA HACIENDA": ["39"],
                "COLEGIO AMERICANO": ["8"],
                "C. DTAL. EL SILENCIO ANT CEB 050": ["22"],
                "I.E. DINOCENCIO CHINCA": ["16"],
                "COL. SOFÍA CAMARGO DE LLERASB": ["35"],
                "COL. SOFÍA CAMARGO DE LLERASP": ["20"],
                "C. DIST. SARIT ARTETA DE VÁSQUEZ": ["38"],
                "INST. LAS MERCEDES COLSAN PABL": ["29"],
                "COLEGIO CRISTIANO PENIEL": ["24"],
                "I.E. DEL PUEBLO": ["31"],
                "COL. ALBERTO ASSA": ["14"],
                "CENTRO DE EDUCACIÓN BÁSICA CEB161": ["3"],
                "I.E.D. SONIA AHUMADA": ["25"],
                "I.E. MUNDO BOLÍVARIANO": ["33"],
                "I.C. LAS MALVINAS": ["32"],
                "I.E.D. ZAPATA OLIVELLA": ["29"],
                "JUAN ACOSTA SOLERA": ["36"],
                "COL. TEC. SAN CARLOS BORROMEO": ["15"],
                "COL. MANUEL ELKIN PATARROYO SD 2": ["20"],
                "COL. MANUEL ELKIN PATARROYO SD 1": ["2"],
                "COL. JOSÉ RAIMUNDO SOJO MEGA": ["4"],
                "EDEVARISTO SOURDIS SEDE 1": ["21"],
                "EDEVARISTO SOURDIS SEDE 2": ["22"],
                "I.E.D. JOSÉ MARÍA VELAZ. SEDE 2": ["35"],
                "COL. DTAL. LA SALLE": ["29"],
                "JUAN MINA": ["16"]
            },
            "METROPOLITANA": {
                "INS. TEC. DIST. CRUZADA SOCIAL": ["29"],
                "INST. EDUC. DIST. SIMÓN BOLÍVAR": ["22"],
                "CEBMEDIA NO. 103": ["24"],
                "COL. DIST. DE BQUILLA GABRIEL GARCÍA M": ["35"],
                "I.E.D. LA VÍCTORIA": ["9"],
                "NUEVO COL. TEC. DEL SANTUARIO": ["43"],
                "I.E.D. COSTA CARIBE": ["24"],
                "JOSÉ CONSUEGRA HIGGINS": ["38"],
                "I.E.D. STA. MARÍA MEGACOLEGIO": ["30"],
                "COL. DIST. DE BQUILLA SAN LUIS": ["39"],
                "I.E.D. LAS AMÉRICAS": ["19"],
                "COLEGIO GOLDA MEIR": ["15"],
                "MEGACOLEGIO LAS CAYENAS": ["47"],
                "COL. COMUNITA. DTAL. PABLO NERUDA": ["44"],
                "I.D.E. COL. CIUD. ESTUDANT. 186": ["10"],
                "I.E.D. REUVEN FEUERSTEIN": ["5"],
                "COL. MIGUEL ÁNGEL BUILES BLQ1": ["34"],
                "COL. MIGUEL ÁNGEL BUILES BLQ2": ["18"],
                "I.E.D. CIUDADELA 20 DE JULIO": ["50"],
                "MEGACOLEGIO CIUDADELA 20 JULIO": ["61"]
            },
            "SUR ORIENTE": {
                "I.E. DISTRITAL PAULO FREIRE": ["28"],
                "COL. LA PRESENTACIÓN": ["31"],
                "CENTRO SOCIAL DON BOSCO": ["51"],
                "COL.TEC. DISTR. DE REBOLO": ["6"],
                "CENTRO SOCIAL DON BOSCO SD 2": ["2"],
                "SENA SAN JOSÉ MÚLTIPLE BILINGÜE": ["21"],
                "COL. SAN JOSÉ SD 1": ["25"],
                "COL. DTAL. SAN GABRIEL SEDE NO1": ["19"],
                "I.E.D. LA UNIÓN SEDE 2": ["3"],
                "I.E.D. DES. HUMANO MARÍA CANO": ["32"],
                "COL. OCTAVIO PAZ": ["29"],
                "I.E.D. LOS LAURELES": ["6"],
                "I.E.D. MARCO FIDEL SUÁREZ": ["32"],
                "I.E.D. NTRA. SRA. DE LAS NIEVES": ["17"],
                "COLEGIO SANTA TERESITA": ["26"],
                "I.E.D. CALIXTO ALVAREZ": ["28"],
                "I.E.D. JOSÉ MARTÍ": ["33"],
                "INT. DTAL. CASTILLO LA ALBORAYA": ["37"],
                "COL. DTAL. BUENOS AIRES CODIBA": ["4"],
                "COL. DTAL. MARÍA AUXILIADORA": ["27"],
                "COLEGIO DE COMFAMILIAR": ["24"],
                "INST. ELENA DE CHAUVIN": ["26"],
                "INSTITUTO PRESBITERIANO NAZARETH": ["24"],
                "COL. LAS NIEVES SEDE 2": ["24"],
                "I.E.D. SAN MIGUEL ARCÁNGEL": ["27"],
                "I.E.D. BARRIO SIMÓN BOLÍVARBTO": ["27"],
                "I.E.D. LUZ DEL CARIBE": ["16"],
                "COL. DISTRITAL JORGE ISAAC": ["21"],
                "I. DIST. SIMÓN BOLÍVAR PRIMARIA": ["20"]
            },
            "NORTE CENTRO HI": {
                "COL. MAYOR BQUILLA Y DEL CARIBE": ["30"],
                "I.E.D. VILLANUEVA": ["10"],
                "E. NOR. SUPERIOR DEL DTO. BQUILLA": ["15"],
                "INST. LA SALLE": ["29"],
                "INST. TEC. DE COMERCIO DE BARRANQUILLA": ["8"],
                "I.T. DE COMERCIO DE BQUILLA SD 2": ["1"],
                "I.E.D. NUESTRA SEÑORA DEL ROSA.": ["26"],
                "I.U. ITSA SEDE BQUILLA": ["25"],
                "INST. TEC. NACIONAL DE COMERCIO": ["25"],
                "ANTONIO JOSÉ DE SUCRE SEDE 2": ["22"],
                "INDEPORTES": ["2"],
                "I.E.D. PESTALOZZI": ["19"],
                "NUEVO COLEGIO DEL PRADO": ["36"],
                "I.E.D. LA CONCEPCIÓN": ["2"],
                "COL. NTRA. SEÑORA DE NAZARETH": ["18"],
                "COL. NTRA. SEÑORA DE LOURDES": ["24"],
                "COL. BARRANQUILLA CODEBA": ["36"],
                "COL. DISTRITAL BOSTON": ["8"],
                "COL. SAGRADA FAMILIA": ["23"],
                "COL. MILITAR ACOLSURE": ["35"],
                "SEMCONCILIAR SAN LUIS BELTRAN": ["26"],
                "COL. INST. ARIANO": ["4"],
                "COL. JORGE ISAAC": ["12"],
                "COL. HEBREO UNIÓN": ["47"],
                "CORPORACIÓN EL LITORAL SD II": ["6"]
            },
            "RIOMAR": {
                "COL. LICEO CERVANTES": ["43"],
                "COL. EL BUEN CONCEJO": ["23"],
                "COL. LINDON B JOHNSON SCHOOL": ["31"],
                "UNIVERSIDAD AUTÓNOMA DEL CARIBE": ["3"],
                "INSTITUTO LAS AMÉRICAS": ["18"],
                "I.E.D. SAN SALVADOR INEDISSA": ["14"],
                "CED. LIBERTADOR SIMÓN BOLÍVAR": ["24"],
                "I.E. DISTRITAL I.E.D. SAN SALVADOR SD C": ["2"],
                "COL. LA MEDALLA MILAGROSA": ["16"],
                "COL. BIFI LA SALLE": ["45"],
                "COL. LA ENSEÑANZA": ["28"],
                "LA PLAYA": ["38"]
            }
        }
    },
    "BOLÍVAR": {
        "ACHÍ": {},
        "ALTOS DEL ROSARIO": {},
        "ARENAL": {},
        "ARROYOHONDO": {},
        "BARRANCO DE LOBA": {},
        "BRAZUELO DE PAPAYAL": {},
        "CALAMAR": {},
        "CANTAGALLO": {},
        "CICUCO": {},
        "CLEMENCIA": {},
        "CÓRDOBA": {},
        "EL CARMEN DE BOLÍVAR": {},
        "EL GUAMO": {},
        "EL PEÑÓN": {},
        "HATILLO DE LOBA": {},
        "MAHATES": {},
        "MARGARITA": {},
        "MARÍA LA BAJA": {},
        "MOMPOS": {},
        "MONTECRISTO": {},
        "MORALES": {},
        "NOROSÍ": {},
        "PINILLOS": {},
        "REGIDOR": {},
        "RÍO VIEJO": {},
        "SAN CRISTÓBAL": {},
        "SAN ESTANISLAO": {},
        "SAN FERNANDO": {},
        "SAN JACINTO DEL CAUCA": {},
        "SAN JACINTO": {},
        "SAN JUAN NEPOMUCENO": {},
        "SAN MARTÍN DE LOBA": {},
        "SAN PABLO": {},
        "SANTA CATALINA": {},
        "SANTA ROSA": {},
        "SANTA ROSA DEL SUR": {},
        "SIMITÍ": {},
        "SOPLAVIENTO": {},
        "TALAIGUA NUEVO": {},
        "TIQUISIO": {},
        "TURBANÁ": {},
        "VILLANUEVA": {},
        "ZAMBRANO": {},
        "CARTAGENA DE INDIAS": {
            "HISTÓRICA Y DEL CARIBE": {
                "CENTRO COMERCIAL BOCAGRANDE": ["43"],
                "UNIV. TECNOLG. DE BOLÍVAR  MA.": ["43"],
                "LUDOTECA PARQUE CENTENARIO": ["3"],
                "COL. EUCARÍSTICO DE SANTA TERESA": ["7"],
                "COLEGIO DE LA ESPERANZA": ["29"],
                "COLEGIO NAVAL DE CRESPO": ["40"],
                "COLEGIO EL CARMELO": ["16"],
                "COLEGIO BERVELLY HILLS": ["5"],
                "CLUB UNIVERSITARIO DE PROFESIONALES": ["3"],
                "COLEGIO LICEO BOLÍVAR": ["31"],
                "I.E. STA. MARÍA SEDE SAGRADO CORAZÓN": ["31"],
                "I.E. CORAZÓN DE MARÍA": ["17"],
                "I.E. CORAZÓN DE MARÍA S S J CLAV.": ["14"],
                "I.E. SANTA MARÍA": ["6"],
                "EUCARIST. NTRA. SRA DEL CARMÉN DE TORICES": ["41"],
                "COLEGIO JOSÉ DE LA VEGA": ["44"],
                "I.E. HER. ANTONIO RAMOS DE LA SALLE": ["6"],
                "INST. ED. ANA MARÍA VÉLEZ DE TRUJILLO": ["8"],
                "CECON PIEDRA DE BOL. UNIV. CGENA.": ["39"],
                "COLEGIO COMFENALCO": ["34"],
                "INST. ED. MADRE LAURA": ["9"],
                "SENA 4 VIENTOS": ["6"],
                "I.E. NUEVO BOSQUE": ["55"],
                "COL. ALBERTO ELÍAS FERNÁNDEZ": ["40"],
                "I.E. NUEVO BOSQUE SEDE JOSÉ MARÍA CÓRDOBA": ["11"],
                "INST. ED. FERNANDO DE LA VEGA": ["6"],
                "ESC. NORMAL SUPERIOR DE CARTAGENA DE INDIAS": ["8"],
                "I.E. SAN JUAN DE DAMASCO": ["42"],
                "I.E. OLGA GONZÁLEZ ARRAUT": ["35"],
                "I.E. MANUELA BELTRÁN  SED HIJOS": ["12"],
                "SEMINARIO CARTAGENA": ["5"],
                "UNIVERSIDAD ANTONIO NARIÑO": ["6"],
                "UNIVERSIDAD DE CARTAGENA CS": ["40"],
                "COL. SALESIANOS SAN PEDRO CLAVE": ["18"],
                "I.E. ANTONIA SANTOS": ["41"],
                "UNIV. DE CARTAGENA CLAUSTRO LA MERCED": ["2"],
                "FUNDACIÓN UNIVERSITARIA LOS LIBERTADORES": ["10"],
                "COL. MAYOR INST. TECNOLÓGICA": ["35"],
                "ESCUELA BELLAS ARTES": ["18"],
                "ESCUELAS PROFESIONALES SALESIANAS": ["15"],
                "SANTA CRUZ DEL ISLOTE": ["2"],
                "BARÚ": ["6"],
                "BOCACHICA": ["16"],
                "CAÑO DEL ORO": ["6"],
                "ISLA FUERTE": ["3"],
                "ISLAS DEL ROSARIO": ["2"],
                "SANTA ANA": ["12"],
                "TIERRABOMBA": ["8"]
            },
            "LA VIRGEN Y TURÍSTICA": {
                "I.E. FE Y ALEGRÍA LAS GAVIOTAS": ["55"],
                "I.E. LAS GAVIOTAS SEDE MOISES GOSSAÍN": ["13"],
                "I.E. LAS GAVIOTAS SEDE EL NIÑO JESÚS": ["11"],
                "CENTRO DE ENSEÑANZA HIJOS DE BOLÍVAR": ["8"],
                "I.E. FOCO ROJO": ["43"],
                "COLEGIO ALMIRANTE COLÓN S. OLAYA": ["26"],
                "I.E. PLAYAS DE ACAPULCO": ["17"],
                "I.E. NUESTRA SEÑORA PERPETUO SOCORRO": ["3"],
                "I.E. FRANCISCO DE PAULA SANTANDER": ["35"],
                "I.E. MARÍA REINA": ["26"],
                "ESCUELA CIUDAD DE TUNJA": ["37"],
                "I.E. CORAZÓN DE MARÍA  LAZARO MARTÍNEZ": ["6"],
                "I.E. ANTONIO NARIÑO": ["9"],
                "I.E. PEDRO HEREDIA": ["8"],
                "I.E. CAMILO TORRES": ["53"],
                "CENTRO ED. COLOMBIATON GUSTAVO PULECIO": ["37"],
                "I.E. LA LIBERTAD": ["10"],
                "I.E. NUESTRO ESFUERZO": ["9"],
                "I.E. CLEMENTE MANUEL ZABALA": ["3"],
                "I.E. JORGE GARCÍA USTA": ["7"],
                "ESCUELA GABRIELA SAN MARTÍN": ["52"],
                "COL. FE Y ALEGRÍA LAS AMÉRICAS": ["39"],
                "CENTRO CULTURAL LAS PALMERAS": ["15"],
                "I.E. DE FREDONIA": ["7"],
                "I.E. FULGENCIO LEQUERICA VÉLEZ": ["26"],
                "NUESTRA SEÑORA DEL CARMEN": ["33"],
                "I.E. FULGENCIO LEQUERICA VÉLEZ  ECUADOR": ["9"],
                "FUND. UNIV. COLOMBO INTERNACIONAL": ["6"],
                "ARROYO GRANDE": ["5"],
                "ARROYO DE PIEDRA": ["6"],
                "BAYUNCA": ["29"],
                "LA BOQUILLA": ["30"],
                "PONTEZUELA": ["5"],
                "PUNTA CANOA": ["3"]
            },
            "INDUSTRIAL DE LA BAHÍA": {
                "COLEGIO INEM": ["43"],
                "CENT. RECREACIONAL NAPOLEÓN PEREA": ["32"],
                "I.E. JOSÉ M. RODRÍGUEZ S. ISABEL LA CATÓLICA": ["13"],
                "I.E. JOSÉ MANUEL RJARDÍN INF.  CARACOLES": ["7"],
                "I.E. 20 DE JULIO": ["32"],
                "I.E. BERTHA GEDEON DE BALADÍ": ["32"],
                "COLEGIO ALMIRANTE COLÓN  VISTA HERMOSA": ["6"],
                "I.E. LUIS CARLOS LÓPEZ": ["43"],
                "I.E. TERNERA": ["33"],
                "I.E. SOLEDAD ACOSTA DE SAMPER": ["4"],
                "UNIVERSIDAD SAN BUENAVENTURA": ["15"],
                "COL. FE Y ALEGRÍA EL PROGRESO": ["33"],
                "I.E. SAN FRANCISCO ASÍS  HIJO DE LOS AGRI.": ["25"],
                "CORPORACIÓN MINUTO DE DIOS": ["4"],
                "I.E. POLICARPA SALAVARRIETA": ["3"],
                "I.E. MERCEDES ABREGO": ["62"],
                "COL. SUEÑOS Y OPORTUNIDADES JES.": ["34"],
                "I.E. MERCEDES ABREGO SEDE MEDELLÍN": ["12"],
                "I.E. CIUDADELA 2000": ["6"],
                "I.E. SALVADOR MANDELA": ["8"],
                "I.E. ROSEDAL": ["8"],
                "I.E. JHON F. KENNEDY": ["47"],
                "INST. FEMENINO PROMOCIÓN SOCIAL": ["47"],
                "I.E. NUESTRA SEÑORA DE LA CONSOLATA": ["6"],
                "I.E. JUAN JOSÉ NIETO": ["10"],
                "COLEGIO COMFAMILIAR": ["37"],
                "ESC. ANA MARÍA PÉREZ OTERO": ["44"],
                "I.E. PROM. SOCIAL DE CGENA. SD LA CONSOLATA": ["5"],
                "I.E. AMBIENTALISTA CARTAGENA DE INDIAS": ["10"],
                "I.E. SEDE EMILIANO ALCALÁ ROMERO": ["3"],
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
        "MAGANGUÉ": {
            "BARBOSA": {
                "BARBOSA": ["4"]
            },
            "BARRANCA DE YUCA": {
                "BARRANCA DE YUCA": ["6"]
            },
            "BETANIA": {
                "BETANIA": ["2"]
            },
            "BOCAS DE SAN ANTONIO": {
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
            "16 EMAÚS": {
                "EMAÚS": ["1"]
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
            "25 PLAYA DE LAS FLORES": {
                "PLAYA DE LAS FLORES": ["1"]
            },
            "26 PUERTO KENNEDY": {
                "PUERTO KENNEDY": ["2"]
            },
            "27 PUNTA DE CARTAGENA": {
                "PUNTA DE CARTAGENA": ["2"]
            },
            "28 EL RETIRO": {
                "EL RETIRO": ["5"]
            },
            "PUERTO NARIÑO": {
                "PUERTO NARIÑO": ["1"]
            },
            "ROMA": {
                "ROMA": ["1"]
            },
            "SAN ANTONITO": {
                "SAN ANTONITO": ["1"]
            },
            "32CORRE SAN JOSÉ DE LAS MARTAS": {
                "SAN JOSÉ DE LAS MARTAS": ["2"]
            },
            "33CORRE SAN RAFAEL DE CORTINA": {
                "SAN RAFAEL DE CORTINA": ["3"]
            },
            "34CORRE SAN SEBASTIÁN DE BUENAVISTA": {
                "SAN SEBASTIÁN DE BUENAVISTA": ["2"]
            },
            "SANTA COITA": {
                "SANTA COITA": ["1"]
            },
            "SANTA FE": {
                "SANTA FE": ["5"]
            },
            "SANTA LUCÍA": {
                "SANTA LUCÍA": ["3"]
            },
            "SANTA MÓNICA": {
                "SANTA MÓNICA": ["1"]
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
            "TOLÚ": {
                "TOLÚ": ["2"]
            },
            "LA  VENTURA": {
                "LA VENTURA": ["4"]
            }
        },
        "TURBACO": {
            "07 CAÑAVERAL": {
                "CAÑAVERAL": ["7"]
            },
            "08 CORREG SAN JOSÉ DE CHIQUITO": {
                "CHIQUITO": ["1"]
            }
        }
    },
    "BOYACA": {
        "ALMEIDA": {},
        "AQUITANIA": {},
        "ARCABUCO": {},
        "BELÉN": {},
        "BERBEO": {},
        "BETEITIVA": {},
        "BOAVITA": {},
        "BOYACÁ": {},
        "BRICEÑO": {},
        "BUENAVISTA": {},
        "BUSBANZA": {},
        "CALDAS": {},
        "CERINZA": {},
        "CHINAVITA": {},
        "CHIQUINQUIRÁ": {},
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
        "GUICÁN": {},
        "IZA": {},
        "JENESANO": {},
        "JERICÓ": {},
        "LA CAPILLA": {},
        "LA UVITA": {},
        "LA VÍCTORIA": {},
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
        "NUEVO COLÓN": {},
        "OICATA": {},
        "OTANCHE": {},
        "PACHAVITA": {},
        "PAEZ": {},
        "PAJARITO": {},
        "PANQUEBA": {},
        "PAUNA": {},
        "PAYA": {},
        "PAZ DEL RÍO": {},
        "PESCA": {},
        "PISBA": {},
        "QUIPAMA": {},
        "RAMIRIQUI": {},
        "RAQUIRA": {},
        "RONDÓN": {},
        "SABOYA": {},
        "SACHICA": {},
        "SAMACA": {},
        "SAN EDUARDO": {},
        "SAN JOSÉ DE PARE": {},
        "SAN LUIS DE GACENO": {},
        "SAN MATEO": {},
        "SAN MIGUEL DE SEMA": {},
        "SAN PABLO DE BORBUR": {},
        "SANTA MARÍA": {},
        "SANTA ROSA DE VITERBO": {},
        "SANTA SOFÍA": {},
        "SANTANA": {},
        "SATIVA NORTE": {},
        "SATIVA SUR": {},
        "SIACHOQUE": {},
        "SOATA": {},
        "SOCHA": {},
        "SOCOTA": {},
        "SOGAMOSO": {},
        "SOMONDOCO": {},
        "SORA": {},
        "SORACA": {},
        "SOTAQUIRA": {},
        "SUSACÓN": {},
        "SUTAMARCHÁN": {},
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
        "VIRACACHÁ": {},
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
        "PUERTO BOYACÁ": {
            "VASCONIA": {
                "PUERTO PALAGUA": ["4"],
                "CENTRO CALDERÓN": ["3"],
                "VASCONIA PUERTO SERVIEZ": ["5"]
            },
            "GUANEGRO": {
                "GUANEGRO": ["2"]
            },
            "PTO. GUTIÉRREZ": {
                "PUERTO GUTIÉRREZ": ["1"],
                "KILÓMETRO 25": ["1"]
            },
            "PUERTO PINZÓN": {
                "PTO. PINZÓN POZO BOYACA NO 2": ["3"]
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
                "I.E. LA LINDA": ["17"],
                "I.E. CHIPRE": ["15"],
                "I.E. CHIPRE SEDE B": ["26"],
                "I.E. ADOLFO HOYOS OCAMPO": ["6"],
                "COL. FILIPENSE NTRA. SRA. LOURDES": ["10"]
            },
            "SAN JOSÉ": {
                "I.E. SAN AGUSTÍN": ["13"],
                "I.E. INSTITUTO MANIZALES": ["24"],
                "I.E. DIVINA PROVIDENCIA": ["9"]
            },
            "CUMANDAY": {
                "I.E. MARCO FIDEL SUÁREZ": ["21"],
                "EDIFICIO INDUSLICORDE CALDAS": ["20"],
                "FAC. DE BELLAS ARTES U. CALDAS": ["16"],
                "I.E. GRAN COLOMBIA": ["16"],
                "LICEO ARQUIDIO DE NUESTRA SR.": ["16"],
                "I.E. ISABEL LA CATÓLICA": ["33"],
                "I.E. INSTITUTO UNIVER. DE CAL.": ["17"],
                "I.E.T. FRANCISCO JOSÉ DE CALDAS": ["14"]
            },
            "LA ESTACIÓN": {
                "I.E. LA ASUNCIÓN SEDE A": ["15"],
                "I.E. SAN JORGE": ["28"],
                "FAC. CIENCIAS PARA LA SALUD U": ["22"]
            },
            "CIUDADELA DEL NORTE": {
                "I.E. FE Y ALEGRÍA LA PAZ SEDE": ["35"],
                "I.E. SINAÍ SEDE B": ["22"],
                "I.E. LA ASUNCIÓN SEDE C": ["21"],
                "I.E. LICEO MIXTO SINAÍ SEDE A": ["18"],
                "I.E. BOSQUES DEL NORTE": ["26"]
            },
            "ECOTUR CERRO DE ORO": {
                "I.E. ESC. NAL. AUX. DE ENFERMERÍA SEDE A": ["16"],
                "I.E. LA SULTANA SEDE A": ["21"],
                "I.E. MARISCAL SUCRE SEDE B": ["10"],
                "I.E. MARISCAL SUCRE SEDE D": ["14"]
            },
            "TESORITO": {
                "I.E. SAN PIO X": ["24"],
                "I.E. SAN PIO X SEDE B": ["12"],
                "I.E. SAN PIO X SEDE A": ["12"],
                "I.E. MALTERIA": ["4"]
            },
            "PALOGRANDE": {
                "UNIVERSIDAD CATÓLICA DE MANIZALES": ["18"],
                "FAC DE CIENCIAS JUR. Y SOC. U.": ["19"],
                "I.E. NACIONAL AUX. DE ENFERMERÍA": ["24"],
                "I.E. NORMAL SUPERIOR DE MANIZALES": ["11"]
            },
            "UNIVERSITARIA": {
                "I.E. ATANASIO GIRARDOT": ["19"],
                "I.E. EUGENIO PACELLI SEDE PRIN.": ["20"],
                "I.E. MALABAR SEDE A": ["16"],
                "I.E. ARANJUEZ SEDE A": ["13"],
                "I.E. MALABAR SEDE B": ["6"]
            },
            "LA FUENTE": {
                "I.E. ANDRÉS BELLO": ["19"],
                "I.E. PERPETUO SOCORRO": ["8"],
                "I.E. LEÓNARDO DAVINCI SEDE A": ["6"],
                "I.E. LEÓNARDO DAVINCI": ["28"],
                "I.E. LATINOAMERICANO SEDE B": ["11"]
            },
            "LA MACARENA": {
                "COL. MAYOR DE NUESTRA SEÑORA": ["27"],
                "I.E. LEÓN DE GREIFF": ["21"],
                "I.E. SIETE DE AGOSTO": ["28"],
                "I.E. ESTAMBUL": ["14"]
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
            "CORREDOR AGRO": {
                "AGROTURÍSTICO EL TABLAZO": ["13"]
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
        "PÁCORA": {
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
            "SAN BARTOLOMÉ": {
                "SAN BARTOLOMÉ": ["3"]
            },
            "SAN LORENZO": {
                "SAN LORENZO": ["2"]
            }
        },
        "SALAMINA": {
            "SAN FÉLIX": {
                "I.E. SAN FÉLIX": ["3"]
            }
        },
        "ANSERMA": {},
        "ARANZAZU": {},
        "BELALCÁZAR": {},
        "CHINCHINÁ": {},
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
        "SAN JOSÉ": {},
        "SUPIA": {},
        "VÍCTORIA": {},
        "VILLAMARÍA": {},
        "VITERBO": {}
    },
    "CESAR": {
        "VALLEDUPAR": {
            "COMUNA 4": {
                "COL. JOSÉ EUGENIO MARTÍNEZ": ["45"],
                "UNIV. POPULAR DEL CESARSD SABANAS": ["6"],
                "COL. NACIONALIZADO UPAR": ["37"],
                "INST. TEC. VILLA CORELCA": ["16"],
                "ESCUELA MIXTA NO 4": ["21"],
                "I.E. CONSUELO ARAUJO NOGUERA": ["25"]
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
            "11CARACOLÍ": {
                "CARACOLÍ": ["3"]
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
            "17GUATAPURÍ": {
                "GUATAPURÍ": ["4"]
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
            "24LAS RAÍCES": {
                "LAS RAÍCES": ["2"]
            },
            "25AZÚCAR BUENA": {
                "AZÚCAR BUENA": ["4"]
            },
            "26MARÍANGOLA": {
                "MARÍANGOLA": ["9"]
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
            "30VALENCIA DE JESÚS": {
                "VALENCIA DE JESÚS": ["6"]
            },
            "31VILLA GERMANIA": {
                "VILLA GERMANIA": ["3"]
            }
        },
        "AGUACHICA": {},
        "AGUSTÍN CODAZZI": {},
        "ASTREA": {},
        "BECERRIL": {},
        "BOSCONIA": {},
        "CHIMICHAGUA": {},
        "CHIRIGUANA": {},
        "CURUMANÍ": {},
        "EL COPEY": {},
        "EL PASO": {},
        "GAMARRA": {},
        "GONZÁLEZ": {},
        "LA GLORIA CESAR": {},
        "LA JAGUA DE IBIRICO": {},
        "LA PAZ": {},
        "MANAURE BALCÓN DEL CESAR": {},
        "PAILITAS": {},
        "PELAYA": {},
        "PUEBLO BELLO": {},
        "RÍO DE ORO": {},
        "SAN ALBERTO": {},
        "SAN DIEGO": {},
        "SAN MARTÍN": {},
        "TAMALAMEQUE": {}
    },
    "CÓRDOBA": {
        "AYAPEL": {},
        "BUENAVISTA": {},
        "CANALETE": {},
        "CERETE": {},
        "CHIMA": {},
        "CHINÚ": {},
        "CIÉNAGA DE ORO": {},
        "COTORRA": {},
        "LA APARTADA": {},
        "LORICA": {},
        "LOS CÓRDOBAS": {},
        "MOMIL": {},
        "MONTELÍBANO": {},
        "MONITOS": {},
        "PLANETA RICA": {},
        "PUEBLO NUEVO": {},
        "PUERTO ESCONDIDO": {},
        "PURÍSIMA": {},
        "SAHAGÚN": {},
        "SAN ANDRÉS DE SOTAVENTO": {},
        "SAN ANTERO": {},
        "SAN BERNARDO DEL VIENTO": {},
        "SAN CARLOS": {},
        "SAN JOSÉ DE URE": {},
        "SAN PELAYO": {},
        "TIERRALTA": {},
        "TUCHÍN": {},
        "VALENCIA": {},
        "MONTERÍA": {
            "MORINDO": {
                "MORINDO": ["5"]
            },
            "SANTA LUCÍA": {
                "SANTA LUCÍA": ["12"]
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
            "LA VÍCTORIA": {
                "LA VÍCTORIA": ["4"]
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
            "NUEVA LUCÍA": {
                "NUEVA LUCÍA": ["6"]
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
            "37CORREG 28 KILÓMETRO 12": {
                "KILÓMETRO 12": ["7"]
            }
        },
        "PUERTO LIBERTADOR": {
            "CENTRO AMÉRICA": {
                "CENTRO AMÉRICA": ["2"]
            },
            "PUERTO LÓPEZ": {
                "PUERTO LÓPEZ": ["1"]
            }
        }
    },
    "CUNDINAMARCA": {
        "FUSAGASUGÁ": {
            "NORTE": {
                "LA AGUADITA": ["5"]
            },
            "ORIENTAL": {
                "LOS SAUCES": ["5"]
            },
            "CENTRO": {
                "PARROQUIA NTRA. SRA. DE BELÉN": ["20"],
                "COLEGIO SANTANDER": ["22"]
            },
            "SUR ORIENTAL": {
                "BOCHICA LA TRINIDAD": ["9"]
            },
            "OCCIDENTAL": {
                "CUCHARAL": ["12"]
            },
            "SUR OCCIDENTAL": {
                "EL TRIUNFO BOQUERÓN": ["3"],
                "LA PUERTA CHINAUTA": ["11"]
            }
        },
        "GIRARDOT": {
            "01CENTRO": {
                "COLEGIO AMERICANO": ["28"],
                "COLEGIO LA PRESENTACIÓN": ["17"],
                "CTRO. EDUC. ESCUELA ANEXA": ["15"]
            },
            "02SUR": {
                "I.E. NUEVO HORIZONTE": ["28"],
                "LICEO LOS ANDES": ["6"]
            },
            "03OCCIDENTE": {
                "SEDE FRANCISCO J. DE CALDAS": ["11"],
                "CTRO. EDU. ANTONIO NARIÑO": ["14"],
                "COL. MAYOR MARTHA CATALINA": ["19"]
            },
            "04NORTE": {
                "ESC. NORMAL SUPERIOR MARÍA AUX.": ["15"],
                "COLEGIO ATANASIO GIRARDOT": ["18"]
            },
            "05ORIENTE": {
                "COLISEO BARRIO SAN JORGE": ["15"],
                "COLISEO BARRIO KENNEDY": ["14"],
                "I.E. POLICARPA SALAVARRIETA": ["16"]
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
            "PUERTO BOGOTÁ": {
                "CUATRO ESQUINAS": ["1"],
                "CEDRALES": ["1"],
                "PUERTO BOGOTÁ": ["10"],
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
        "ALBÁN": {},
        "ANAPOIMA": {},
        "ANOLAIMA": {},
        "APULO": {},
        "ARBELÁEZ": {},
        "BELTRÁN": {},
        "BITUIMA": {},
        "BOGOTÁ": {},
        "BOJACÁ": {},
        "CABRERA": {},
        "CACHIPAY": {},
        "CAJICÁ": {},
        "CAPARRAPI": {},
        "CÁQUEZA": {},
        "CARMEN DE CARUPA": {},
        "CHAGUANÍ": {},
        "CHÍA": {},
        "CHIPAQUE": {},
        "CHOACHÍ": {},
        "CHOCONTÁ": {},
        "COGUA": {},
        "COTA": {},
        "CUCUNUBA": {},
        "EL COLEGIO": {},
        "EL PEÑÓN": {},
        "EL ROSAL": {},
        "FACATATIVÁ": {},
        "FÓMEQUE": {},
        "FOSCA": {},
        "FUNZA": {},
        "FÚQUENE": {},
        "GACHALA": {},
        "GACHANCIPÁ": {},
        "GACHETÁ": {},
        "GAMA": {},
        "GRANADA": {},
        "GUACHETÁ": {},
        "GUASCA": {},
        "GUATAQUÍ": {},
        "GUATAVITA": {},
        "GUAYABAL DE SIQUIMA": {},
        "GUAYABETAL": {},
        "GUTIÉRREZ": {},
        "JERUSALÉN": {},
        "JUNÍN": {},
        "LA CALERA": {},
        "LA MESA": {},
        "LA PALMA": {},
        "LA PEÑA": {},
        "LA VEGA": {},
        "LENGUAZAQUE": {},
        "MACHETÁ": {},
        "MADRID": {},
        "MANTA": {},
        "MEDINA": {},
        "MOSQUERA": {},
        "NARIÑO": {},
        "NEMOCÓN": {},
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
        "SIBATÉ": {},
        "SILVANIA": {},
        "SIMIJACA": {},
        "SOACHA": {},
        "SOPÓ": {},
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
        "TOCANCIPÁ": {},
        "TOPAIPÍ": {},
        "UBALÁ": {},
        "UBAQUE": {},
        "UBATÉ": {},
        "UNE": {},
        "UTICA": {},
        "VENECIA": {},
        "VERGARA": {},
        "VIANI": {},
        "VILLA GÓMEZ": {},
        "VILLA PINZÓN": {},
        "VILLETA": {},
        "VIOTA": {},
        "ZIPACÓN": {},
        "ZIPAQUIRÁ": {}
    },
    "BOGOTÁ DC": {
        "BOGOTÁ DC": {
            "USAQUEN": {
                "USAQUEN": ["99"],
                "SERVITA": ["78"],
                "CALAZANS": ["33"],
                "AQUILEO PARRA": ["48"],
                "LIJACÁ": ["38"],
                "SAN ANTONIO UNIÓN COLOMBIA": ["37"],
                "BARRANCAS": ["38"],
                "LOS CEDRITOS 151": ["71"],
                "UNIVERSIDAD DEL BOSQUE": ["58"],
                "SANTO TOMÁS DE AQUINO": ["56"],
                "INSTITUTO PEDAGÓGICO": ["47"],
                "UNICENTRO": ["109"],
                "PLAZA MÉXICO": ["42"],
                "SANTA PAULA": ["35"],
                "HACIENDA SANTA BÁRBARA": ["43"],
                "ALTOS DE SAN ISIDRO": ["8"],
                "LAS ORQUIDEAS": ["46"],
                "LOS CEDRITOS": ["40"],
                "CEDRO GOLF": ["37"],
                "BUENAVISTA": ["25"],
                "CANAIMA": ["15"],
                "ALESSANDRO VOLTA": ["11"],
                "LA CAROLINA": ["9"],
                "CRISTÓBAL COLÓN": ["13"],
                "DIVINO MAESTRO A": ["14"],
                "DIVINO MAESTRO B": ["9"],
                "LAS MARGARITAS": ["29"],
                "ALTA BLANCA": ["8"],
                "COLEGIO TOBERÍN B": ["10"],
                "EL PITE": ["3"],
                "EL CODITO": ["7"],
                "VERBENAL SANTA MARÍA": ["14"],
                "SALUDCOOP NORTE": ["10"],
                "TORCA": ["1"],
                "CARULLA 140": ["27"],
                "COLEGIO SAN FRANCISCO CL 186": ["3"],
                "BUEN CONSEJO": ["5"],
                "PLAZOLETA SANTA BÁRBARA": ["7"],
                "UNIVERSIDAD MILITAR": ["2"],
                "LA ESTRELLITA": ["2"],
                "ESCLAVAS DEL SAGRADO CORAZÓN": ["3"],
                "CARDENAL SANCHA": ["5"],
                "SIERVAS SAN JOSÉ LA CALLEJA": ["3"],
                "COLEGIO PROVINMA": ["7"],
                "COLEGIO SANS FACON": ["2"],
                "ANGLO AMERICANO": ["2"],
                "PUREZA DE MARÍA": ["2"]
            },
            "CHAPINERO": {
                "CHICÓ NORTE": ["73"],
                "CHICÓ RESERVADO": ["47"],
                "CHICÓ LICEO FRANCES LOUIS PAST.": ["43"],
                "ANTIGUO COUNTRY PLAZOLETA CARU.": ["37"],
                "UNIVERSIDAD EAN": ["27"],
                "UNIVERSIDAD SERGIO ARBOLEDA": ["17"],
                "UNIVERSIDAD PEDAGÓGICA NACIONAL": ["22"],
                "GRANADA COLEGIO SIMÓN RODRÍGUEZ SD B": ["13"],
                "SENA CALLE 65": ["25"],
                "UNIVERSIDAD KONRAD LORENZ": ["32"],
                "SENA CALLE 52": ["32"],
                "UNIVERSIDAD PILOTO": ["21"],
                "COLEGIO CAMPESTRE MONTEVERDE S": ["16"],
                "COLEGIO SIMÓN RODRÍGUEZ SEDE A": ["20"],
                "UNIVERSIDAD DISTRITAL": ["27"],
                "CENTRO COMERCIAL DE LA 93": ["12"],
                "MUSEO DEL CHICÓ": ["5"],
                "COLEGIO SAN MARTÍN DE PORRES": ["3"],
                "MARISCAL SUCRE SEDE B": ["2"],
                "BETHLEMITAS CALLE 65": ["3"],
                "U. SANTO TOMÁS CLAUSTRO": ["3"],
                "EL AQUINATE U. SANTO TOMÁS": ["2"],
                "COLEGIO NUEVO GIMNASIO": ["2"],
                "UNIVERSIDAD CATÓLICA": ["3"],
                "UNIVERSIDAD DE LA SALLE": ["3"]
            },
            "SANTA FE": {
                "CAMILO TORRES": ["22"],
                "LA PERSEVERANCIA": ["19"],
                "POLICARPA SALAVARRIETA": ["15"],
                "PALACIO SAN FRANCISCO": ["33"],
                "BIBLIOTECA DISTRITAL ANTONIO N.": ["13"],
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
                "COLEGIO RAMÓN JIMENO": ["1"],
                "COLEGIO LA GIRALDA": ["4"],
                "UNIVERSIDAD JORGE TADEO LOZANO": ["6"],
                "UNIVERSIDAD INCCA DE COLOMBIA": ["2"]
            },
            "SAN CRISTÓBAL": {
                "LAS BRISAS": ["17"],
                "SANTA ANA SUR": ["26"],
                "SAN CRISTÓBAL SUR": ["41"],
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
                "SAN MARTÍN DE LOBA SUR": ["32"],
                "BELLAVISTA SAN CRISTÓBAL": ["25"],
                "LA VÍCTORIA A": ["63"],
                "ALTAMIRA": ["38"],
                "EL QUINDÍO": ["13"],
                "REPÚBLICA DEL CANADA": ["18"],
                "LA GLORIA": ["28"],
                "JUAN REY": ["26"],
                "VILLA DE LOS ALPES": ["30"],
                "LOS LIBERTADORES": ["25"],
                "SAN PEDRO SUR ORIENTAL": ["16"],
                "VILLA DEL CERRO": ["13"],
                "CANADA GUIRÁ": ["8"],
                "ARBOLEDA SUR": ["19"],
                "20 DE JULIO SEDE B": ["15"],
                "SAN JUAN BOSCO SANTA ANA": ["7"],
                "SAN GERÓNIMO": ["3"],
                "SURAMÉRICA": ["4"],
                "SAN VICENTE COLSUBSIDIO": ["5"],
                "GUACAMAYAS II": ["7"],
                "ESCUELA LA VÍCTORIA B": ["9"],
                "JUANA ESCOBAR SEDE A": ["4"],
                "ROMA COLSUBSIDIO": ["1"],
                "LA GLORIA ESCUELA ALTAMIRA": ["5"],
                "RAMAJAL AMAPOLAS": ["2"],
                "EL RODEO SEDE B LA GLORIA": ["2"],
                "EL PORTAL": ["4"],
                "LA CASTANA": ["1"],
                "ATENAS": ["2"],
                "VILLA JAVIER LA MARÍA": ["1"],
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
                "JUAN JOSÉ RONDON": ["12"],
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
                "CABAÑAS": ["4"],
                "TEJARES": ["5"],
                "COL. FERNANDO GONZÁLEZ OCHOA": ["3"],
                "ALFONSO LÓPEZ": ["14"],
                "LA ALBORADA": ["4"],
                "UVAL PUERTA AL LLANO": ["7"],
                "VILLA ALEMANIA": ["6"],
                "USME CENTRO": ["3"],
                "BRAZUELOS": ["2"],
                "CDC JULIO CÉSAR SÁNCHEZ": ["2"],
                "VIA AL LLANO": ["1"],
                "NUSADAL": ["3"]
            },
            "TUNJUELITO": {
                "TUNJUELITO A": ["39"],
                "FÁTIMA A": ["39"],
                "ABRAHAM LINCOLN": ["17"],
                "SAN CARLOS": ["40"],
                "SAN BENITO": ["33"],
                "EL TUNAL A": ["44"],
                "EL CARMEN SUR A": ["31"],
                "SAN VICENTE FERRER": ["37"],
                "VENECIA A": ["45"],
                "NUEVO MUZU A": ["17"],
                "ISLA DEL SOL": ["24"],
                "VENECIA B": ["15"],
                "TUNJUELITO B": ["6"],
                "EL TUNAL B": ["18"],
                "EL CARMEN SUR B": ["10"],
                "FÁTIMA B": ["14"],
                "NUEVO MUZO B": ["5"],
                "JARDÍN INFANTIL ISLA DEL SOL": ["3"],
                "LICEO SANTA BERNARDITA": ["2"],
                "COL. COOPERATIVO VENECIA": ["5"],
                "COOPERATIVO NUEVO MUZU": ["1"],
                "LICEO CAMPESTRE CAFAM": ["1"],
                "NUESTRA SEÑORA LAS VÍCTORIAS": ["1"],
                "SANTA CECILIA DE TUNJUELITO": ["1"],
                "ALCALDÍA LOCAL DE TUNJUELITO": ["2"],
                "PORFIRIO BARBA JACOB": ["4"]
            },
            "BOSA": {
                "BOSA": ["90"],
                "VILLA DEL RIO": ["38"],
                "JOSÉ ANTONIO GALÁN": ["34"],
                "LA AMISTAD": ["33"],
                "CARLOS ALBÁN": ["47"],
                "LA LIBERTAD": ["73"],
                "PIAMONTE": ["52"],
                "LA ESTACIÓN": ["45"],
                "LAURELES": ["38"],
                "PALESTINA": ["31"],
                "ORLANDO HIGUITA": ["41"],
                "BOSA PAULO VI": ["26"],
                "BOSA BRASILIA": ["38"],
                "ISLANDIA": ["18"],
                "JIMÉNEZ DE QUESADA": ["19"],
                "SAN BERNARDINO": ["27"],
                "BOSA SAN JOSÉ": ["23"],
                "SURBANA": ["13"],
                "NUEVO CHILE": ["35"],
                "SANTA FE DE BOSA": ["22"],
                "EL PORVENIR": ["45"],
                "EL RECREO": ["42"],
                "LA ESPERANZA": ["32"],
                "FRANCISCO DE PAULA SANTANDER": ["13"],
                "PABLO DE TARSO": ["26"],
                "ATALAYAS": ["31"],
                "EL RECUERDO SANTAFÉ": ["12"],
                "FE Y ALEGRÍA SAN IGNACIO": ["25"],
                "CIUDADELA EL PORVENIR": ["25"],
                "CARLOS PIZARRO LEÓN GÓMEZ": ["24"],
                "NUEVO CARLOS ALBÁN": ["7"],
                "LAURELES II": ["13"],
                "NUEVA ESTACIÓN": ["11"],
                "LA INDEPENDECIA": ["12"],
                "BOSANOVA": ["9"],
                "LLANO ORIENTAL": ["7"],
                "CARBONELL": ["10"],
                "NUEVA GRANADA": ["7"],
                "NARANJOS": ["10"],
                "CAMPO VERDE POTRERITOS": ["12"],
                "CLARETIANO": ["14"],
                "VILLA DEL RÍO II": ["8"],
                "HOLANDA": ["9"],
                "PORTAL DE BRASIL": ["5"],
                "RECREO MICHELSEN": ["19"],
                "CEDID SAN PABLO": ["9"],
                "LA ACUARELA": ["5"],
                "MIGUEL ÁNGEL ASTURIAS": ["2"],
                "COLISEO LA PALESTINA": ["2"],
                "NUESTRA SRA. DE NAZARETH": ["1"],
                "MANUEL ELKIN PATARROYO": ["4"],
                "ALMACÉN METRO AUTOPISTA SUR": ["3"],
                "JARDÍN INFANTIL OLARTE": ["2"],
                "GIMNASIO LOS SAUCES": ["3"],
                "CLARETIANO EL LIBERTADOR": ["2"],
                "GIMNASIO REAL AMERICANO": ["4"],
                "LICEO CIUDAD CAPITAL": ["5"],
                "JUAN MAXIMILIANO AMBROSIO": ["3"],
                "INSTITUTO GUIMARC": ["2"],
                "COLEGIO COLSUBSIDIO CHICALÁ": ["5"],
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
                "AVENIDA BOYACÁ SUR": ["25"],
                "LA CHUCUA": ["24"],
                "CARIMAGUA": ["31"],
                "TIMIZA": ["46"],
                "LA UBA": ["23"],
                "SANTA MARTA DE PASTRANA": ["25"],
                "LA MACARENA": ["25"],
                "EL JAPÓN": ["51"],
                "ESTADOS UNIDOS SUPER 13": ["31"],
                "EL SAUCEDAL": ["19"],
                "PATIO BONITO": ["74"],
                "FRANCISCO JOSÉ DE CALDAS": ["29"],
                "BANDERAS": ["24"],
                "PRÓSPERO PINZÓN": ["28"],
                "KENNEDY LEY": ["39"],
                "LOS HÉROES": ["17"],
                "COLEGIO OEA": ["21"],
                "FLORALIA": ["22"],
                "CARVAJAL II": ["19"],
                "VILLA ADRIANA": ["16"],
                "LAS AMÉRICAS": ["46"],
                "LA FLORESTA SUR": ["32"],
                "MARSELLA": ["35"],
                "ALOHA": ["9"],
                "MANDALAY COLEGIO KENNEDY": ["27"],
                "PIO XII": ["23"],
                "CASTILLA": ["58"],
                "VILLANUEVA": ["18"],
                "JAIRO ANÍBAL NIÑO": ["62"],
                "FAVIDI VISIÓN DE COLOMBIA": ["38"],
                "ALMENAR": ["17"],
                "ALQUERIA DE LA FRAGUA": ["31"],
                "BOITA": ["25"],
                "COL. DE TIMIZA": ["21"],
                "TINTALITO": ["34"],
                "LAS PALMERAS": ["21"],
                "DINDALITO": ["33"],
                "VALLADOLID": ["14"],
                "MILENIO PLAZA": ["21"],
                "COL. GABRIEL BETANCOURT MEJÍA": ["57"],
                "MARÍA PAZ": ["22"],
                "COLEGIO NELSON MANDELA": ["18"],
                "COLEGIO GUSTAVO ROJAS PINILLA": ["25"],
                "COLEGIO CLASS I.E.D. SEDE B ROM": ["10"],
                "GEMA": ["3"],
                "VILLA RICA": ["9"],
                "COLEGIO JAIME GARZÓN": ["20"],
                "COLEGIO DÉBORA ARANGO": ["6"],
                "CAMPO BELLO": ["18"],
                "PATIOS": ["22"],
                "MANUEL CEPEDA": ["21"],
                "BAZAAR ALSACIA": ["30"],
                "SANTA MARÍA DE KENNEDY": ["24"],
                "TEQUENDAMA PAULO VI SD A": ["7"],
                "CENTRO DESARROLLO COMUNITARIO": ["11"],
                "COLEGIO RODRIGO TRIANA": ["15"],
                "COLEGIO DARIO ECHANDÍA": ["16"],
                "SAN FRANCISCO EN EL TINTAL": ["16"],
                "CENTRO COMERCIAL CIUDAD TINTAL": ["15"],
                "TAGASTE": ["8"],
                "TIERRA DE CASTILLOS": ["19"],
                "COLEGIO FE Y ALEGRÍA": ["9"],
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
                "SAGRADO CORAZÓN": ["2"],
                "CODEMA": ["4"],
                "SALÓN COMUNAL ROMA IV": ["2"],
                "KENNEDY CENTRAL": ["2"],
                "FERNANDO SOTO APARICIO": ["1"],
                "ROSA MARÍA DE GORDILLO": ["2"],
                "SALÓN COMUNAL CARVAJAL OSORIO": ["2"],
                "CARLOS ARANGO VÉLEZ": ["3"],
                "NICOLÁS ESGUERRA": ["1"],
                "SALÓN COMUNAL MARSELLA": ["4"],
                "ISABEL II": ["2"],
                "LICEO REYNEL": ["3"],
                "COLEGIO OEA ANTONIA SANTOS": ["1"],
                "SALÓN COMUNAL BOITA II SECTOR": ["2"],
                "SALÓN COMUNAL SANTA CATALINA": ["2"],
                "COLEGIO INTEGRACIÓN MODERNA": ["1"]
            },
            "FONTIBÓN": {
                "FONTIBÓN": ["82"],
                "VILLEMAR": ["39"],
                "HAYUELOS CENTRO COMERCIAL": ["39"],
                "BELÉN": ["32"],
                "SAN PABLO LA PERLA": ["21"],
                "VERSALLES": ["49"],
                "VERACRUZ": ["36"],
                "MODELIA SUR": ["35"],
                "SANTA CECILIA MODELIA": ["26"],
                "CENTRO A": ["20"],
                "LA LAGUNA": ["35"],
                "BATAVIA": ["17"],
                "LA GIRALDA": ["28"],
                "PUERTA DE TEJA": ["10"],
                "AGUSTÍNIANO SALITRE": ["42"],
                "TRES ELEFANTES LA ESPERANZA": ["22"],
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
                "COLEGIO LUIS ÁNGEL ARANGO": ["2"],
                "FERROCAJA": ["1"],
                "EL CHARCO": ["1"],
                "MULTIPLAZA": ["3"],
                "SALITRE PLAZA": ["10"],
                "PABLO NERUDA": ["2"],
                "CACIQUE HYNTIBA": ["3"],
                "TRES ESTANCIAS": ["4"]
            },
            "ENGATIVÁ": {
                "BOYACÁ": ["49"],
                "ENGATIVÁ": ["69"],
                "NORMANDÍA": ["43"],
                "BOSQUE POPULAR": ["24"],
                "EL GUALÍ": ["14"],
                "EL LUJÁN": ["30"],
                "VILLA LUZ": ["40"],
                "LOS ÁLAMOS": ["29"],
                "VILLA AMALIA": ["41"],
                "VILLAS DE GRANADA": ["52"],
                "GARCÉS NAVAS": ["47"],
                "BOCHICA": ["54"],
                "LOS ÁLAMOS NORTE": ["41"],
                "LA SALINA": ["34"],
                "LA FLORIDA": ["20"],
                "SANTA HELENITA": ["39"],
                "LA EUROPA": ["15"],
                "LA ESTRADA": ["34"],
                "LA ESTRADITA": ["31"],
                "LAS FERIAS": ["29"],
                "BONANZA": ["35"],
                "STA. MARÍA DEL LAGO": ["21"],
                "LA GRANJA": ["28"],
                "FLORENCIA": ["16"],
                "SANTA ROSITA": ["38"],
                "QUIRIGUA": ["46"],
                "LA ESPANOLA": ["22"],
                "MINUTO DE DIOS": ["41"],
                "LA SERENA": ["19"],
                "BACHUÉ": ["42"],
                "QUIRIGUA PLAZA DE MERCADO": ["29"],
                "BACHUE II BOCHICA I": ["27"],
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
                "LA CABAÑA": ["14"],
                "TISQUESUSA": ["6"],
                "SANTA CECILIA": ["11"],
                "PLAZUELAS DEL VIRREY": ["23"],
                "CIUDAD DE HONDA": ["6"],
                "ZARZAMORA": ["21"],
                "VILLA CONSTANZA": ["8"],
                "MORTINO": ["9"],
                "PALO BLANCO": ["5"],
                "SAN JOAQUÍN": ["4"],
                "PRIMAVERA": ["5"],
                "BOLIVIA": ["17"],
                "GRAN GRANADA": ["31"],
                "EL CEDRO": ["6"],
                "TORQUIGUA": ["20"],
                "ALMAZAN ENGATIVÁ": ["24"],
                "UNICENTRO DE OCCIDENTE": ["9"],
                "SALÓN COMUNAL ALAMOS": ["2"],
                "LEÓN VALENCIA": ["1"],
                "LA CLARITA": ["3"],
                "CENTRO EDUCATIVO SCALAS": ["1"],
                "NACIONES UNIDAS SEDE B": ["1"],
                "COLEGIO NORTE ADVENTISTA": ["1"],
                "ALCALÁ SEDE B": ["1"],
                "DIVERPLAZA": ["6"],
                "MARGARITA BOSCO": ["4"],
                "COLEGIO COPES": ["2"]
            },
            "SUBA": {
                "PARQUE FUNDACIÓN DE SUBA": ["111"],
                "COLEGIO SAN JOSÉ DE CALASANZ": ["39"],
                "COLEGIO VILLA ELISA SEDES C Y D": ["29"],
                "EL RINCÓN": ["70"],
                "COLEGIO ALBERTO LLERAS CAMARGO": ["53"],
                "TIBABUYES UNIVERSAL": ["36"],
                "CASABLANCA SUBA": ["16"],
                "VILLA DEL PRADOUNI AGRARIA": ["53"],
                "PRADO PINZÓN": ["28"],
                "PRADO CIUDAD JARDÍN": ["24"],
                "CENTRO COMERCIAL BULEVAR NIZA": ["65"],
                "PONTEVEDRA": ["40"],
                "SAN NICOLÁS AGUSTÍNIANO NORTE": ["30"],
                "LA CONEJERA": ["7"],
                "PRADO VERANIEGO": ["34"],
                "NIZA IX": ["26"],
                "LA ALHAMBRA CARULLA": ["49"],
                "PUENTE LARGO EMMANUEL D ALZON": ["24"],
                "FLORESTA NORTEJULIO FLÓREZ": ["30"],
                "PASADENALOS TRES ELEFANTES": ["29"],
                "NUEVA ZELANDIA": ["32"],
                "SAN LUIS SUBA": ["41"],
                "SAN CIPRIANO": ["26"],
                "FUNDACIÓN UNIVERSI. LUIS AMIGÓ": ["17"],
                "LA GAITANA": ["46"],
                "SABANA DE TIBABUYES": ["63"],
                "COLEGIO HIJAS DE CRISTO REY": ["65"],
                "CENTRO COMERCIAL MAZURÉN": ["48"],
                "TEJARES NORTE": ["31"],
                "COLEGIO CELESTIN FREINET": ["26"],
                "COLEGIO ALVARO GÓMEZ": ["57"],
                "COLEGIO DELIA ZAPATA OLIVELLA": ["30"],
                "LA AGUADITA": ["11"],
                "BOSQUES DE SUBA": ["19"],
                "COL. REPÚBLICA DOMINICANA": ["47"],
                "LISBOA COLEGIO DISTRITAL LISBOA": ["35"],
                "UNIVERSIDAD UDCA": ["4"],
                "COLEGIO LA KHUMBRE": ["6"],
                "PRADO SUR": ["17"],
                "SUPERCADE SUBA": ["43"],
                "COLEGIO NICOLÁS BUENAVENTURA": ["39"],
                "SUBA SAN FRANCISCO": ["6"],
                "FUNDACIÓN SAN FELIPE NERI": ["4"],
                "COLEGIO SIMÓN BOLÍVAR SUBA": ["25"],
                "COLEGIO EUCARÍSTICO MERCEDARIO": ["24"],
                "ALDEA LA PALMA": ["7"],
                "RAMÓN DE ZUBIRIA SEDE A": ["22"],
                "COLEGIO VIRGINIA GUTIÉRREZ": ["12"],
                "COLEGIO GONZALO ARANGO": ["16"],
                "CORINTO COLEGIO NUEVA COLOMBIA": ["19"],
                "LA TOSCANA COL. FE Y ALEGRÍA": ["23"],
                "COLEGIO PEDAGÓGICO DULCE MARÍA": ["28"],
                "INSTITUCIÓN EDUCATIVA COMPARTIR SUBA": ["37"],
                "COLEGIO GERARDO MOLINA": ["28"],
                "EL BATÁN": ["16"],
                "NIZA CENTRO COMERCIAL NIZA": ["38"],
                "CENTRO COMERCIAL PASEO SAN RAF.": ["23"],
                "ALMACÉN ÉXITO LA COLINA": ["37"],
                "CARULLA RINCON DE LA COLINA": ["26"],
                "COLSUBSIDIO MAZURÉN": ["33"],
                "COLEGIO SANTA ISABEL DE HUNGRÍA": ["15"],
                "BIBLIOTECA JULIO MARIO SANTO D.": ["34"],
                "COLEGIO RAFAEL MAYA": ["9"],
                "SUBA SANTA CECILIA": ["8"],
                "INSTITUTO SAN BASILIO": ["8"],
                "COLEGIO JORGE MARIO BERGOGLIO": ["5"],
                "COLEGIO VEINTIÚN ÁNGELES": ["1"],
                "CHORRILLOS": ["1"],
                "HUNZA SEDE A": ["1"],
                "MAXIMINO POITIERS": ["5"],
                "SALÓN COMUNAL AURES II": ["5"],
                "SALÓN COMUNAL VILLA MARÍA": ["5"],
                "SALÓN COMUNAL VILLA CINDY": ["3"],
                "FLORESTA OUTLET": ["3"],
                "COLEGIO JOHN DEWEY": ["2"],
                "COLEGIO CARO Y CUERVO": ["4"],
                "CC PORTOALEGRE": ["6"],
                "CC PARQUE LA COLINA": ["9"],
                "LICEO DE LONDRES": ["1"],
                "COLEGIO MARYMOUNT": ["2"],
                "SAN JOSÉ BAVARIA ABRAHAM LINCOLN": ["3"],
                "COLEGIO DEL BOSQUE": ["1"],
                "COLEGIO SANTIAGO ALBERIONI": ["2"],
                "COLEGIO VISTA BELLA": ["4"],
                "MIRANDELA NUEVA ZELANDIA": ["4"],
                "CENTRO COMERCIAL SANTAFÉ": ["13"]
            },
            "BARRIOS UNIDOS": {
                "LA CASTELLANA": ["32"],
                "RIONEGRO": ["31"],
                "PATRIA": ["9"],
                "GAITÁN": ["20"],
                "ENTRE RÍOS": ["15"],
                "METRÓPOLIS": ["35"],
                "SIMÓN BOLÍVAR": ["41"],
                "JOSÉ JOAQUÍN VARGAS": ["32"],
                "SAN FERNANDO": ["32"],
                "POPULAR MODELO": ["36"],
                "12 DE OCTUBRE": ["12"],
                "SANTA SOFÍA": ["17"],
                "POLO CLUB": ["19"],
                "SAN FELIPE": ["11"],
                "LOS ALCÁZARES": ["17"],
                "LA PAZ": ["11"],
                "COLOMBIA": ["13"],
                "LA MUEQUETA": ["9"],
                "SIETE DE AGOSTO": ["24"],
                "BENJAMÍN HERRERA": ["11"],
                "POLIDEPORTIVO POLO": ["5"],
                "ISERRA 100": ["9"],
                "SAN MIGUEL": ["1"],
                "PLAZA DE LOS ARTESANOS": ["1"],
                "CAFAM AV 68": ["3"]
            },
            "TEUSAQUILLO": {
                "DIVINO SALVADOR": ["21"],
                "SAN LUIS": ["19"],
                "EL CAMPÍN": ["20"],
                "NICOLÁS DE FEDERMAN": ["18"],
                "PABLO VI": ["31"],
                "EL SALITRE": ["13"],
                "LA ESMERALDA": ["18"],
                "CAFAM CALLE 51": ["24"],
                "PALERMO": ["36"],
                "COLEGIO AMERICANO": ["35"],
                "BELALCÁZAR": ["16"],
                "QUINTA PAREDES A": ["15"],
                "QUINTA PAREDES B": ["25"],
                "CENTRO NARIÑO": ["20"],
                "RESIDENCIAS BCH": ["15"],
                "SANTA TERESITA": ["8"],
                "LA MAGDALENA": ["15"],
                "TEUSAQUILLO": ["25"],
                "PABLO VI II ETAPA": ["10"],
                "RAFAEL NÚÑEZ": ["16"],
                "CIUDAD SALITRE": ["30"],
                "CORPUS CHRISTI": ["8"],
                "LICEO PARROQUIAL SARA ZAPATA": ["8"],
                "ACEVEDO TEJADA": ["7"],
                "BIBLIOTECA VIRGILIO BARCO": ["6"],
                "IMPRENTA NACIONAL": ["17"],
                "COLEGIO DEL PILAR": ["1"],
                "UNIVERSIDAD ECCI": ["1"],
                "GIMNASIO CENTRO NARIÑO": ["1"],
                "COLEGIO SANTA CLARA": ["4"]
            },
            "MÁRTIRES": {
                "SANTA FE": ["29"],
                "SAMPER MENDOZA": ["20"],
                "COLSEGUROS": ["15"],
                "ESTACIÓN DE LA SABANA": ["17"],
                "RICAURTE": ["27"],
                "LA ESTANZUELA": ["32"],
                "VERAGUAS": ["17"],
                "CENTRO CRECER": ["26"],
                "EL VERGEL": ["16"],
                "EDUARDO SANTOS": ["19"],
                "SAN FASÓN": ["11"],
                "LA REBECA": ["6"],
                "PANAMERICANO": ["6"],
                "ANTONIO RICAURTE": ["4"],
                "SAN FRANCISCO DE ASÍS": ["4"],
                "CENTRO DE MEMORIA": ["7"],
                "SALÓN COMUNAL SANTA ISABEL": ["8"]
            },
            "ANTONIO NARIÑO": {
                "POLICARPA": ["27"],
                "CIUDAD BERNA": ["18"],
                "SAN ANTONIO": ["23"],
                "LUNA PARK": ["12"],
                "CIUDAD JARDÍN": ["35"],
                "RESTREPO A": ["35"],
                "RESTREPO B": ["45"],
                "LA FRAGUITA": ["12"],
                "LA FRAGUA": ["17"],
                "SANTANDER": ["14"],
                "SANTANDER SUR": ["12"],
                "VILLA MAYOR": ["29"],
                "SENA": ["23"],
                "LA VALVANERA": ["8"],
                "SALÓN COMUNAL SAN ANTONIO": ["3"],
                "COLEGIO ADVENTISTA EMMANUEL": ["1"],
                "SALÓN COMUNAL VILLA MAYOR": ["4"],
                "CINCO DE NOVIEMBRE": ["2"],
                "CASA COMUNAL CIUDAD JARDÍN": ["3"]
            },
            "PUENTE ARANDA": {
                "DELICIAS MUZÚ": ["34"],
                "CIUDAD MONTES": ["38"],
                "SANTA MATILDE": ["26"],
                "LA ASUNCIÓN": ["23"],
                "ALCALDÍA PUENTE ARANDA": ["33"],
                "LA PRIMAVERA": ["33"],
                "CUNDINAMARCA": ["9"],
                "LA FRANCIA": ["14"],
                "PUENTE ARANDA": ["15"],
                "SALAZAR GÓMEZ": ["17"],
                "LA TRINIDAD": ["14"],
                "LA PRADERA": ["16"],
                "COLÓN": ["41"],
                "SAN RAFAEL": ["24"],
                "EL JAZMÍN": ["25"],
                "LA PONDEROSA": ["21"],
                "GALÁN": ["35"],
                "MILENTA": ["19"],
                "EL TEJAR": ["26"],
                "ALQUERÍA": ["29"],
                "ALCALÁ": ["27"],
                "SANTA RITA": ["32"],
                "AUTOPISTA SUR": ["12"],
                "LOS SAUCES": ["18"],
                "CARRERA CENTRO COMERCIAL": ["5"],
                "SAN ANDRESITO": ["8"],
                "SALÓN COMUNAL COLÓN": ["9"],
                "COLONIA ORIENTAL": ["7"],
                "SALÓN COMUNAL LA TRINIDAD": ["3"],
                "PRIMAVERA Y GORGONZOLA": ["6"],
                "EL REMANZO": ["3"],
                "COLEGIO RÓMULO GALLEGO": ["2"],
                "SALÓN COMUNAL VERAGUAS": ["4"],
                "INSTITUTO DE INTEGRACIÓN CULTURAL": ["1"],
                "COLEGIO DISTRITAL SORRENTO": ["2"],
                "LUIS CARLOS GALÁN SARMIENTO": ["1"],
                "CULTURA POPULAR": ["1"],
                "SAN EUSEBIO": ["2"],
                "LOS ÁNGELES": ["1"],
                "PLAZA CENTRAL": ["4"],
                "JORGE GAITÁN CORTÉS": ["1"],
                "CTRO. DE REHABIL. PARA ADULTOS CIEGOS": ["1"]
            },
            "CANDELARIA": {
                "LA CONCORDIA": ["31"],
                "ALCALDÍA MAYOR": ["41"],
                "EGIPTO": ["19"],
                "ARCHIVO DISTRITAL": ["21"],
                "MURILLO TORO": ["13"],
                "COLEGIO MAYOR SAN BARTOLOMÉ": ["2"],
                "AUTÓNOMA DE COLOMBIA": ["2"],
                "EGIPTO ESCUELA QUINTA DÍAZ": ["2"],
                "LA SALLE CANDELARIA": ["2"]
            },
            "RAFAEL URIBE URIBE": {
                "CLARET": ["28"],
                "INGLÉS": ["30"],
                "BRAVO PAEZ": ["17"],
                "LIBERTADOR II": ["17"],
                "CENTENARIO": ["22"],
                "OLAYA": ["23"],
                "SAN JOSÉ": ["25"],
                "ALEJANDRO OBREGÓN GUSTAVO REST.": ["22"],
                "QUIROGA": ["21"],
                "ALCALDÍA QUIROGA": ["34"],
                "CENTRAL QUIROGA": ["14"],
                "SANTA LUCÍA": ["25"],
                "LAS COLINAS": ["15"],
                "COUNTRY SUR": ["31"],
                "LAS LOMAS": ["25"],
                "ALEXÁNDER FLEMING SAN JORGE": ["25"],
                "REINO DE HOLANDA": ["16"],
                "MARCO FIDEL SUÁREZ": ["25"],
                "EL SOCORRO SUR": ["13"],
                "MOLINOS DEL SUR": ["54"],
                "CIUDAD BOCHICA SUR": ["34"],
                "LOS MOLINOS II SECTOR": ["28"],
                "PALERMO SUR": ["22"],
                "VILLA MAYOR LA NUEVA": ["14"],
                "GRANJAS DE SAN PABLO": ["13"],
                "RESURRECCIÓN": ["12"],
                "RAFAEL URIBE LA PAZ": ["11"],
                "SAN AGUSTÍN SUR": ["28"],
                "COVIVIENDA DEL SURORIENTE": ["25"],
                "MARRUECOS APARTAMENTOS": ["14"],
                "SALÓN COMUNAL LA MARQUEZA": ["7"],
                "MIRADOR DE MARROCOS": ["4"],
                "SAN JUANITO": ["6"],
                "PROVIDENCIA": ["4"],
                "GUSTAVO RESTREPO": ["10"],
                "SALÓN COMUNAL INGLÉS": ["6"],
                "SALÓN COMUNAL CLARET": ["6"],
                "SAN JORGE": ["8"],
                "LICEO SAN PABLO": ["4"],
                "SALÓN COMUNAL CEBADAL": ["2"],
                "LA MARQUEZA": ["3"],
                "RAFAEL DELGADO SEDE C": ["2"],
                "SALÓN COMUNAL LA PAZ NARANJOS": ["3"],
                "INTEG. RAFAEL DELGADO SALGUERO": ["1"],
                "PARROQUIAL SAN JOSÉ": ["1"],
                "LICEO PSICOPEDAGÓGICO MARCO FIDEL SUÁREZ": ["1"],
                "MARÍA CANO": ["4"],
                "CAFAM SANTA LUCÍA": ["1"],
                "DIANA TURBAY": ["2"],
                "ALIANZA QUIROGA": ["2"],
                "ESTADOS UNIDOS DE AMÉRICA": ["1"],
                "TORRE MAYOR": ["1"]
            },
            "CIUDAD BOLÍVAR": {
                "LUCERO DEL SUR": ["45"],
                "SAN JOAQUÍN DEL VATICANO": ["29"],
                "PASQUILLA": ["6"],
                "EL TESORO": ["27"],
                "MÉXICO": ["36"],
                "LUCERO MEDIO": ["22"],
                "VISTAHERMOSA": ["43"],
                "LA ACACIA": ["37"],
                "JERUSALÉN EL TANQUE": ["31"],
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
                "MANUELA BELTRÁN": ["15"],
                "SIERRA MORENA": ["43"],
                "SOTAVENTO": ["27"],
                "SANTO DOMINGO": ["25"],
                "VILLA GLORIA SUR": ["9"],
                "GALICIA": ["61"],
                "ARBORIZADORA ALTA": ["33"],
                "CASAVIANCA": ["14"],
                "CASONA DEL LIBERTADOR": ["38"],
                "MEISSEN": ["17"],
                "POTOSÍ LA LAGUNA": ["18"],
                "ALTOS DE JALISCO": ["5"],
                "ESTRELLA DEL SUR": ["19"],
                "CARACOLÍ": ["9"],
                "SANTA ROSA": ["1"],
                "BRISAS DEL VOLADOR": ["5"],
                "DIVINO NIÑO": ["6"],
                "CASA GRANDE": ["10"],
                "MONTREAL": ["6"],
                "UNIÓN EUROPEA": ["4"],
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
                "LA CORUNA LICEO CONTADORA": ["2"],
                "TANQUE SIERRA MORENA": ["1"],
                "ICES LAS BRISAS": ["1"],
                "ALTOS DE LA ESTANCIA": ["1"],
                "MILLÁN": ["1"],
                "GRAN PLAZA EL ENSUENO": ["26"],
                "CASA LINDA TUNAL UNIDAD 2": ["7"]
            },
            "SUMAPAZ": {
                "SAN JUAN DE SUMAPAZ": ["3"],
                "NAZARETH": ["4"],
                "BETANIA": ["3"],
                "LA UNIÓN": ["2"],
                "LA YE SANTA ROSA": ["2"]
            }
        }
    },
    "CHOCÓ": {
        "ACANDÍ": {},
        "ALTO BAUDO": {},
        "BAGADO": {},
        "BAHÍA SOLANO": {},
        "BAJO BAUDO": {},
        "BOJAYÁ": {},
        "CANTÓN DE SAN PABLO": {},
        "CÉRTEGUI": {},
        "CONDOTO": {},
        "EL ATRATO": {},
        "EL CARMEN DE ATRATO": {},
        "EL CARMEN DEL DARIÉN": {},
        "ISTMINA": {},
        "JURADO": {},
        "LITORAL DE SAN JUAN": {},
        "LLORÓ": {},
        "MEDIO ATRATO": {},
        "MEDIO BAUDO": {},
        "MEDIO SAN JUAN": {},
        "NOVITA": {},
        "NUQUÍ": {},
        "RÍO IRO": {},
        "RÍO QUITO": {},
        "RIOSUCIO": {},
        "SAN JOSÉ DEL PALMAR": {},
        "SIPÍ": {},
        "TADÓ": {},
        "UNIÓN PANAMERICANA": {},
        "UNGUIA": {},
        "QUIBDÓ": {
            "ALTAGRACIA": {
                "ALTAGRACIA": ["1"]
            },
            "BARRANCO": {
                "BARRANCO": ["1"]
            },
            "BELLA LUZ": {
                "BELLA LUZ": ["1"]
            },
            "ALTO MUNGUIDÓ": {
                "EL JAGUO ALTO MUNGUIDÓ": ["1"]
            },
            "BOCA DE TANANDO": {
                "BOCA DE TANANDO": ["1"]
            },
            "CABÍ": {
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
            "GUARANDÓ": {
                "GUARANDÓ": ["1"]
            },
            "GUADALUPE": {
                "GUADALUPE": ["1"]
            },
            "GUAYABAL": {
                "GUAYABAL": ["1"]
            },
            "19CORRE. SAN FRANCISCO DE ICHÓ": {
                "SAN FRANCISCO DE ICHÓ": ["2"]
            },
            "EL TAMBO": {
                "EL TAMBO": ["1"]
            },
            "21CORRE. GITRADO PUEBLO NUEVO": {
                "GITRADO": ["1"]
            },
            "EL FUERTE": {
                "STA. LUCÍA DEL FUERTE": ["1"]
            },
            "LAS MERCEDES": {
                "LAS MERCEDES": ["1"]
            },
            "MOJAUDÓ": {
                "SAN PEDRO CLAVER MOJAUDÓ": ["1"]
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
            "TAGACHÍ": {
                "TAGACHÍ": ["2"]
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
                "VEGA LARGA": ["6"]
            },
            "RÍO LAS CEIBAS": {
                "RÍO LAS CEIBAS": ["2"]
            },
            "CAGUÁN": {
                "CAGUÁN": ["13"]
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
                "I.E. NORMAL SUPERIOR PITALITO": ["17"],
                "I.E. NACIONAL": ["26"],
                "I.E. N. S. SEDE RODRIGO LARA BON.": ["5"],
                "I.E. HUMBERTO MUÑOZ SD PPAL.": ["12"]
            },
            "ORIENTAL": {
                "I.E. MARÍA MONTESSORI": ["14"],
                "I.E. HUMBERTO MUÑOZ SEDE NOGALES": ["12"],
                "CIC VENECIA": ["2"]
            },
            "CENTRO": {
                "COL. LA PRESENTACIÓN": ["22"],
                "ESC. CENTRAL": ["15"],
                "I.E. WINNIPEG": ["13"],
                "I.E. VÍCTOR MANUEL MENESES": ["10"]
            },
            "SUR": {
                "I.E. MPAL. MONTESSORI": ["24"],
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
        "ELÍAS": {},
        "GARZÓN": {},
        "GIGANTE": {},
        "GUADALUPE": {},
        "HOBO": {},
        "IQUIRA": {},
        "ISNOS": {},
        "LA ARGENTINA": {},
        "LA PLATA": {},
        "NÁTAGA": {},
        "OPORAPA": {},
        "PAICOL": {},
        "PALERMO": {},
        "PALESTINA": {},
        "RIVERA": {},
        "SALADOBLANCO": {},
        "SAN AGUSTÍN": {},
        "SANTA MARÍA": {},
        "SUAZA": {},
        "TARQUI": {},
        "TELLO": {},
        "TERUEL": {},
        "TESALIA": {},
        "TIMANÁ": {},
        "VILLA VIEJA": {},
        "YAGUARÁ": {}
    },
    "MAGDALENA": {
        "SANTA MARTA": {
            "01LOC1 TAYRONA SAN PEDRO ALEJANDRINO": {
                "I.E.D. LICEO DEL SUR VÍCTOR DE LIMA": ["19"],
                "I.E.D. TEC. DEL SUR VÍCTOR DE LIMA SD 3 MM": ["15"],
                "I.E.D. JACQUELINE KENNEDY": ["30"],
                "I.E.D. JACQUELINE KENNEDY SD 2 PRE. LA CAND.": ["17"],
                "I.E. DEL PANDO": ["37"],
                "SD JOSÉ CELEDON GARCÍA I.E.D. EL PANDO": ["16"],
                "I.E. DEL PARQUE": ["47"],
                "I.E.D. LÍBANO": ["29"],
                "I.E.D. SAN FCO. JAVIER DE GARAGO": ["32"],
                "UNIVERSIDAD ANTONIO NARIÑO": ["2"],
                "UNIVERSIDAD DEL MAGDALENA": ["7"],
                "I.E.D. 11 DE NOVIEMBRE": ["5"],
                "I.E.D. NORMAL SUPERIOR SAN PEDRO": ["35"],
                "I.E.D. JUAN MIGUEL DE OSUNA": ["25"],
                "I.E. DALUNA MEGA COLEGIO CISNE": ["21"],
                "BONDA": ["22"],
                "GUACHACA": ["18"],
                "CALABAZO": ["4"]
            },
            "02LOC2 HIST. RODRIGO DE BASTIDAS": {
                "I.E.D. HUGO J. BERMUDEZ": ["27"],
                "I.E.D. HUGO J. BERMÚDEZ S. LA. ESP": ["23"],
                "I.E.D. LICEO SAMARIO": ["23"],
                "LICEO SAMARIO SD2 BAV BOSTON": ["20"],
                "INSTITUTO LA MILAGROSA": ["24"],
                "I.E.D. LICEO CELEDÓN": ["18"],
                "I.E.D. LA INDUSTRIAL": ["14"],
                "I.E.D. FCO. DE PAULA SANTANDER": ["20"],
                "I.E.D. MAGDALENA": ["33"],
                "I.E.D. MAGD. SD3 ESC. MIX. MPAL.": ["14"],
                "I.E.D. RODRIGO BASTIDAS": ["40"],
                "HOGAR INFANTIL BASTIDAS": ["16"],
                "I.E.D. RODRIGO DE BASTIDAS SD 17 DE DIC.": ["12"],
                "I.E.D. NICOLÁS BUENAVENTURA": ["18"],
                "I.E.D. ONDAS DEL CARIBE": ["6"],
                "I.E.D. LAURA VICUNA": ["20"],
                "I.E.D. ESC. NORMAL SUP. MARÍA AUX.": ["18"],
                "I.E.D. DEL CARMEN": ["21"],
                "I.E.D. RODRIGO GALVÁN DE BASTIDAS": ["4"],
                "I.E.D. MADRE LAURA": ["21"],
                "I.E.D. LICEO DEL NORTE": ["37"],
                "I.E.D. ALFONSO LÓPEZ": ["26"],
                "TAGANGA": ["10"]
            },
            "03LOC3 TURÍSTICA PERLA DEL CARIBE": {
                "I.E.D. JOSÉ LABORDE GNECCO": ["34"],
                "I.E.D. CAMILO TORRES DE GAIRA": ["32"],
                "I.E.D. CAMILO TORRES DE GAIRA SD ISABEL PF": ["21"],
                "I.E.D. LA PAZ": ["MEGA COL. LA PAZ"],
                "I.E.D. CRISTO REY": ["5"],
                "MUSEO MUNDO MARINO": ["5"],
                "MINCA": ["4"],
                "LA TAGUA": ["2"],
                "EL CAMPANO": ["2"]
            }
        },
        "CIÉNAGA": {
            "MAR CARIBE": {
                "I.E. ISAAC J. PEREIRA": ["27"],
                "INFOTEP": ["19"],
                "COL. VIRGINIA GÓMEZ SD CUATRO": ["14"],
                "I.E. LA MARÍA": ["12"],
                "I.E. LA ALIANZA": ["3"]
            },
            "SAN JUAN DE CÓRDOBA": {
                "I.E. SAN JUAN DEL CÓRDOBA": ["31"],
                "I.E.T. COMERCIO VIRGINIA GÓMEZ": ["19"],
                "I.E. ENOC MENDOZA RIASCOS": ["16"]
            },
            "CIÉNAGA GRANDE": {
                "I.E. LICEO MODERNO DEL SUR": ["20", "SD.4"],
                "I.E. EL CARMEN": ["12"],
                "I.E. 12 DE OCTUBRE": ["3"]
            },
            "NUEVO HORIZONTE": {
                "I.E. MANUEL J. DEL CASTILLO": ["20"]
            },
            "05CORRG SAN PEDRO DE LA SIERRA": {
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
                "COL. FCO. JOSÉ DE CALDAS": ["21"]
            },
            "CENTRAL": {
                "COL. SANTA TERESA DE JESÚS": ["19"]
            },
            "NORTE": {
                "I.E.D. JOSÉ BENITO BARROS PALO": ["25"],
                "COL. ARCESIO CALIS AMADOR": ["11"]
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
            "BELÉN": {
                "BELÉN": ["6"]
            },
            "CAÑO DE PALMA": {
                "CAÑO DE PALMA": ["4"]
            },
            "EL CEDRO": {
                "EL CEDRO": ["3"]
            },
            "EL CERRITO": {
                "EL CERRITO": ["4"]
            },
            "EL TRÉBOL": {
                "EL TRÉBOL": ["3"]
            },
            "12CORR 9 HATILLO DE LA SABANA": {
                "HATILLO DE LA SABANA": ["3"]
            },
            "13CORREGIMIENTO 10 LOS NEGRITOS": {
                "LOS NEGRITOS BASTIDAS": ["3"],
                "MATA DE CAÑA": ["1"]
            },
            "MENCHIQUEJO": {
                "MENCHIQUEJO": ["4"]
            },
            "SAN FELIPE EDUARDO": {
                "SAN FELIPE EDUARDO": ["4"]
            },
            "SAN JOSÉ": {
                "SAN JOSÉ": ["2"]
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
        "ARIGUANÍ": {},
        "CERRO DE SAN ANTONIO": {},
        "CHIBOLO": {},
        "CONCORDIA": {},
        "EL PIÑÓN": {},
        "EL RETÉN": {},
        "FUNDACIÓN": {},
        "GUAMAL": {},
        "NUEVA GRANADA": {},
        "PEDRAZA": {},
        "PIJINO DEL CARMEN": {},
        "PIVIJAY": {},
        "PLATO": {},
        "PUEBLO VIEJO": {},
        "REMOLINO": {},
        "SABANAS DE SAN ÁNGEL": {},
        "SALAMINA": {},
        "SAN SEBASTIÁN DE BUENAVISTA": {},
        "SAN ZENÓN": {},
        "SANTA ANA": {},
        "SANTA BÁRBARA DE PINTO": {},
        "SITIONUEVO": {},
        "TENERIFE": {},
        "ZAPAYÁN": {},
        "ZONA BANANERA": {}
    },
    "NARIÑO": {
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
                "VILLA MARÍA": ["1"]
            },
            "CABRERA": {
                "CABRERA": ["4"]
            },
            "OBONUCO": {
                "OBONUCO": ["9"]
            },
            "SANTA BÁRBARA": {
                "SANTA BÁRBARA": ["4"],
                "JURADO CENTRO": ["2"],
                "LOS ÁNGELES": ["2"],
                "LA ESPERANZA": ["2"],
                "LAS ENCINAS": ["2"],
                "LA CONCEPCIÓN": ["2"]
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
                "MOTILÓN": ["1"],
                "SANTA LUCÍA": ["1"],
                "SANTA ROSA DEL ENCANO": ["1"]
            },
            "GUALMATÁN": {
                "GUALMATÁN": ["3"]
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
        "GUALMATÁN": {
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
        "BELÉN": {},
        "BUESACO": {},
        "CHACHAGÜÍ": {},
        "COLÓN": {},
        "CONSACA": {},
        "CONTADERO": {},
        "CUASPUD": {},
        "CUMBAL": {},
        "CUMBITARA": {},
        "EL CHARCO": {},
        "EL PEÑOL": {},
        "EL ROSARIO": {},
        "EL TABLÓN": {},
        "EL TAMBO": {},
        "FRANCISCO PIZARRO": {},
        "FUNES": {},
        "GUACHUCAL": {},
        "GUAITARILLA": {},
        "ILES": {},
        "IMUÉS": {},
        "LA CRUZ": {},
        "LA FLORIDA": {},
        "LA LLANADA": {},
        "LA TOLA": {},
        "LA UNIÓN": {},
        "LEIVA": {},
        "LINARES": {},
        "LOS ANDES": {},
        "MAGÜÍ PAYÁN": {},
        "MALLAMA": {},
        "MOSQUERA": {},
        "NARIÑO": {},
        "OLAYA HERRERA": {},
        "OSPINA": {},
        "POLICARPA": {},
        "POTOSÍ": {},
        "PROVIDENCIA": {},
        "PUERRES": {},
        "PUPIALES": {},
        "RICAURTE": {},
        "ROBERTO PAYÁN": {},
        "SAMANIEGO": {},
        "SAN BERNARDO": {},
        "SAN JOSÉ DE ALBÁN": {},
        "SAN LORENZO": {},
        "SAN PABLO": {},
        "SAN PEDRO DE CARTAGO": {},
        "SANDONA": {},
        "SANTA BÁRBARA": {},
        "SANTACRUZ": {},
        "SAPUYES": {},
        "TAMINANGO": {},
        "TANGUA": {},
        "TUMACO": {},
        "TÚQUERRES": {},
        "YACUANQUER": {}
    },
    "RISARALDA": {
        "PEREIRA": {
            "VILLA SANTANA": {
                "INST. EDUC. VILLA SANTANA": ["27"],
                "I.E. COMPARTIR LAS BRISAS": ["10"],
                "I.E. JAIME SALAZAR ROBLEDO": ["12"]
            },
            "ORIENTE": {
                "CTRO. EDU. JORGE ELIÉCER GAITÁN": ["25"],
                "INSTITUTO KENNEDY": ["31"],
                "ESC. GRAL. MOSQUERA SD 2 I.E. H VÉLEZ M": ["10"]
            },
            "VILLAVICENCIO": {
                "I.E. MARCO FIDEL SUÁREZ": ["17"],
                "COLEGIO BÁSICO CENTENARIO": ["16"]
            },
            "RÍO OTÚN": {
                "INST. EDU. CARLOTA SÁNCHEZ": ["29"],
                "INST. EDUC. ALFREDO GARCÍA": ["39"],
                "COLEGIO SAN JOSÉ": ["19"],
                "INST. EDU. CARLOTA SÁNCHEZ 2": ["21"],
                "INST. EDU. CARLOTA SÁNCHEZ 3": ["15"],
                "I.E. AUGUSTO ZULUAGA TRUJILLO": ["2"]
            },
            "UNIVERSIDAD": {
                "COLEGIO GIMNASIO PEREIRA": ["19"],
                "COMPLEJO EDUC. LA JULITA": ["13"],
                "UNIV. TECNOLÓGICA DE PEREIRA": ["18"]
            },
            "CENTRO": {
                "INST. EDUCATIVA BOYACÁ": ["18"],
                "CENTRO CULTURAL LUCY TEJADA": ["51"],
                "COL. OFICIAL LA INMACULADA": ["33"],
                "SENA": ["38"],
                "GOBERNACIÓN DE RISARALDA": ["40"],
                "I.E. PABLO EMILIO CARDONA": ["2"],
                "I.E. MARÍA DOLOROSA": ["3"]
            },
            "SAN NICOLÁS": {
                "COLEGIO SAN NICOLÁS": ["23"]
            },
            "EL JARDÍN": {
                "COLEGIO NORMAL SUPERIOR": ["19"]
            },
            "BOSTON": {
                "COLEGIO SUR ORIENTAL": ["24"],
                "INST. EDUCATIVA PROVIDENCIA": ["16"]
            },
            "EL ROCÍO": {
                "CENTRO EDUC. EL ROCÍO": ["6"]
            },
            "DEL CAFÉ": {
                "INST. EDUCATIVA CIUDAD BOQUÍA": ["43"],
                "I.E. HUGO ÁNGEL JARAMILLO": ["5"]
            },
            "FERROCARRIL": {
                "LICEO CIAL. AQUILINO BEDOYA": ["22"]
            },
            "EL POBLADO": {
                "I.E. REMIGIO ANTONIO CANARTE": ["21"],
                "I.E. SAMARIA": ["27"]
            },
            "CONSOTA": {
                "CENTRO EDUC. NARANJITO": ["25"],
                "CASETA COMUNAL": ["8"]
            },
            "EL OSO": {
                "COLEGIO OFICIAL CIUDADELA CUBA": ["37"],
                "COL. RODRIGO ARENAS BETANCUR": ["6"]
            },
            "PERLA DEL OTÚN": {
                "CTRO. EDUC. BAYRON GAVIRIA": ["42"]
            },
            "SAN JOAQUÍN": {
                "COLEGIO BÁSICO SAN JOAQUÍN": ["29"],
                "COL. SOFFY HERNÁNDEZ MARÍN": ["13"],
                "I.E. HANS DREWS ARANGO": ["5"]
            },
            "OLÍMPICA": {
                "UNILIBRE DE PEREIRA BELMONTE": ["21"],
                "CTRO. EDUC. LUIS CARLOS GONZÁLEZ": ["19"],
                "COL. BÁSICO ALFONSO JARAMILLO": ["31"]
            },
            "CUBA": {
                "INST. EDUC. ESCOLAR SAN FERNANDO": ["39"],
                "CENTRO EDUCATIVO JUAN XXIII": ["24"],
                "I.E. JESÚS MARÍA ORMAZA": ["2"]
            },
            "ALTAGRACIA": {
                "ALTAGRACIA": ["14"]
            },
            "LA FLORIDA": {
                "LA FLORIDA": ["7"],
                "SAN JOSÉ": ["3"]
            },
            "LA BELLA": {
                "EL CHOCHO": ["3"],
                "LA BELLA": ["5"],
                "MUNDO NUEVO": ["4"]
            },
            "23CORR TRIBUNAS CORCEGA": {
                "LA GRAMINEA": ["3"],
                "EL MANZANO": ["2"],
                "I.E. JOSÉ ANTONIO GALÁN": ["13"]
            },
            "ARABIA": {
                "ARABIA": ["7"],
                "BETULIA": ["3"],
                "YARUMAL": ["2"]
            },
            "25COR PUERTO CALDAS PUENTE BOLÍVAR": {
                "PUERTO CALDAS PUENTE BOLÍVAR": ["9"]
            },
            "CAIMALITO": {
                "CAIMALITO": ["10"]
            },
            "COMBIA BAJA": {
                "COMBIA BAJA": ["9"],
                "LA HONDA": ["2"]
            },
            "COMBIA ALTA": {
                "LA CONVENCIÓN": ["3"],
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
        "BELÉN DE UMBRÍA": {
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
                "INT. SANTA SOFÍA": ["32"],
                "ESCUELA LA AURORA": ["2"],
                "COLEGIO VILLA FANNY": ["2"],
                "INST AGUSTÍN NIETO CABALLERO": ["22"]
            },
            "COMUNA 3": {
                "MEGACOLEGIO BERNARDO LÓPEZ PÉREZ": ["17"],
                "ESCUELA POLICARPA SALAVARRIETA": ["16"],
                "COLEGIO NUEVA REPÚBLICA": ["16"]
            },
            "COMUNA 4": {
                "I.E. SANTA ISABEL": ["20"]
            },
            "COMUNA 6": {
                "I.E. MARÍA AUXILIADORA": ["13"]
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
                "COLEGIO JUAN MANUEL GONZÁLEZ": ["28"],
                "COLEGIO HOGAR NAZARETH": ["2"],
                "COLEGIO CRISTO REY": ["7"]
            },
            "COMUNA 12": {
                "COL. NTRA. SRA. DE GUADALUPE": ["27"],
                "COLEGIO SALESIANO": ["46"]
            },
            "13CORR SERRANÍA ALTO DEL NUDO": {
                "SERRANÍA ALTO NUDO LA UNIÓN": ["5"]
            },
            "LAS MARCADAS": {
                "LAS MARCADAS ALTO DEL TORO": ["1"],
                "LAS MARCADAS FRAILES": ["6"]
            }
        },
        "LA CELIA": {
            "PATIO BONITO": {
                "PATIO BONITO": ["2"]
            }
        },
        "SANTA ROSA DE CABAL": {
            "EL ESPAÑOL": {
                "EL ESPAÑOL": ["5"]
            },
            "SANTA BÁRBARA": {
                "SANTA BÁRBARA": ["3"]
            },
            "EL MANZANILLO": {
                "EL MANZANILLO": ["2"]
            },
            "09CORR LAS MANGAS EL CEDRALITO": {
                "DEL SUR LAS MANGAS CEDRALITO": ["2"]
            },
            "10CORR LA CAPILLA SAN JUAN": {
                "LA CAPILLA SAN JUAN": ["2"]
            }
        },
        "APIA": {},
        "BALBOA": {},
        "GUÁTICA": {},
        "LA VIRGINIA": {},
        "MARSELLA": {},
        "MISTRATO": {},
        "PUEBLO RICO": {},
        "QUINCHÍA": {},
        "SANTUARIO": {}
    },
    "NORTE DE SAN": {
        "CÚCUTA": {
            "CENTRO": {
                "COL. SAN JOSÉ SEDE MERCEDES ABREGO": ["48"],
                "COL. SAGRADO SEDE ANTONIA SANTOS": ["32"],
                "COL. SAGRADO CORAZÓN DE JESÚS": ["40"],
                "COLEGIO ANTONIO NARIÑO": ["16"]
            },
            "CENTRO ORIENTAL": {
                "SALESIANO": ["54"],
                "MERCEDES ABREGO SEDE JARDÍN NACIONAL": ["46"],
                "UNIVERSIDAD FRANCISCO DE PAULA SANTANDER": ["31"],
                "COLEGIO LA SALLE": ["27"],
                "INSTITUTO BILINGÜE LONDRES": ["21"]
            },
            "SUR ORIENTAL": {
                "COL. PABLO CORREA SEDE CLUB DE": ["28"],
                "COL. FRANCISCO JOSÉ CALDAS": ["39"],
                "CLUB DE LEÓNES SEDE I.E. BOCONO": ["16"],
                "ESCUELA SAN MATEO": ["35"],
                "FCO. JOSÉ DE CALDAS SEDE SAN PEDRO": ["11"]
            },
            "ORIENTAL": {
                "ESC. MARCO FIDEL SUÁREZ": ["18"],
                "COL. PABLO CORREA SEDE MARÍA AUX.": ["29"],
                "COLEGIO SIMÓN BOLÍVAR": ["30"],
                "COLEGIO PADRE LUIS VARIARA": ["32"],
                "COL. BAS. CLUB DE LEONES NO 29": ["12"],
                "I.E. MON. JAIME PRIETO AMAYA": ["7"],
                "COL. CARLOS PÉREZ ESCALANTE": ["19"],
                "CENTRO INT. CIUDADANA PRADOS DEL ESTE": ["9"]
            },
            "NORORIENTAL": {
                "SENA": ["33"],
                "GUAIMARAL SHERMOGENES MAZA": ["36"],
                "INEM": ["52"],
                "COL. ANDRÉS BELLO": ["22"],
                "COL. ORIENTAL NO 26": ["24"],
                "INEM SEDE MIGUEL MULLER": ["17"],
                "COL. BASICO GUAIMARAL NRO. 25": ["12"]
            },
            "NORTE": {
                "COL. ANDRÉS BELLO SEDE LAURA VI": ["30"],
                "COL. MUNICIPAL AEROPUERTO": ["44"],
                "COL. EUSTORGIO COLMENARES BAPTISTA": ["30"],
                "ESCUELA EL CERRITO": ["4"],
                "INST. EDUCATIVA SAN JOSÉ": ["27"],
                "COL. TOLEDO PLATA": ["25"]
            },
            "NOROCCIDENTAL": {
                "SANTOS APÓSTOLES SEDE KENNEDY": ["35"],
                "COL. SAN BARTOLOMÉ": ["26"],
                "COL. INTEGRADO JUAN ATALAYA": ["31"],
                "COL. MARIANO OSPINA RODRÍGUEZ": ["44"],
                "COL. BUENOS AIRES": ["19"],
                "COL. BÁSICO CAMILO DAZA": ["11"],
                "CENTRO TECNOLÓGICO DE CÚCUTA": ["15"],
                "COL. CONCEJO DE CÚCUTA": ["19"]
            },
            "OCCIDENTAL": {
                "ESC.NO38 TEODORO GUTIERREZ C": ["29"],
                "I.E. PADRE MANUEL BRICEÑO JÁUREGUI": ["46"],
                "COL. RAFAEL URIBE URIBE": ["41"],
                "INST. TECN. CARLOS RAMÍREZ PARÍS": ["39"],
                "COL. HERMANO RODULFO ELOY": ["25"],
                "CARLOS RAMÍREZ SEDE NTRA. SRA. DE MONGUÍ": ["21"],
                "I.E. EL RODEO": ["13"],
                "I.E. PEDRO CUADRO HERRERA": ["1"]
            },
            "SUROCCIDENTAL": {
                "COL. NTRA. SRA. DE BELÉN 23 VARONES": ["41"],
                "COL. JULIO PÉREZ FERRERO": ["32"],
                "C. MANUEL ANTONIO FERNÁNDEZ DE": ["24"],
                "COL. NTRA. SRA. DE BELÉN LA DIVINA PASTORA": ["17"],
                "COL. GARCÍA HERREROS SEDE ESC. 28 FEBRERO": ["16"],
                "COL. BÁSICO LOS ALPES": ["10"]
            },
            "SUR": {
                "SANTO ÁNGEL SEDE JOSÉ EUSEBIO": ["19"],
                "COL. LUIS CARLOS GALÁN SARMIENTO": ["30"],
                "CTRO. EDU. FCO. DE PAULA ANDRADE NO 9": ["40"],
                "ALEJANDRO GUTIÉRREZ SEDE SAN J.": ["13"]
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
            "CENTRAL JOSÉ E. CARO": {
                "ESCUELA NORMAL DE SEÑORITAS": ["16"],
                "COMPLEJO HISTÓRICO": ["13"],
                "SEDE DAVID HADDAD SALCEDO": ["12"]
            },
            "NORORIENTAL CRISTO REY": {
                "POLIDEPORTIVO CRISTO REY": ["16"]
            },
            "SURORIENTAL OLAYA H.": {
                "POLIDEPORTIVO LA MONUMENTAL": ["15"],
                "CONCENTRACIÓN ÁNGELINO DURÁN": ["19"]
            },
            "SUROCCIDENTAL ADOLFO M.": {
                "ESCUELA MARABEL": ["11"],
                "CANCHA JUAN XXIII": ["12"],
                "CANCHA MARABEL": ["13"],
                "COLEGIO ALFONSO LÓPEZ": ["9"]
            },
            "FCO. FERNÁNDEZ DE CONT.": {
                "INSTITUTO TÉCNICO INDUSTRIAL": ["14"]
            },
            "CIUDADELA NORTE": {
                "ESCUELA SANTA CLARA": ["17"],
                "COLEGIO LA SALLE": ["11"]
            },
            "AGUAS CLARAS": {
                "AGUAS CLARAS": ["4"]
            },
            "AGUA DE LA VIRGEN": {
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
            "ESPÍRITU SANTO": {
                "ESPÍRITU SANTO": ["1"]
            },
            "13CORREG ALTO PATIOS PALOGRANDE": {
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
            "QUEBRADA LA ESPERANZA": {
                "QUEBRADA DE LA ESPERANZA": ["2"]
            },
            "VENADILLO": {
                "VENADILLO": ["1"]
            }
        }
    },
    "QUINDÍO": {
        "BUENAVISTA": {},
        "CIRCASIA": {},
        "CÓRDOBA": {},
        "GÉNOVA": {},
        "LA TEBAIDA": {},
        "MONTENEGRO": {},
        "PIJAO": {},
        "QUIMBAYA": {},
        "SALENTO": {},
        "ARMENIA": {
            "CENTENARIO": {
                "I.E. TERESITA MONTES": ["24"],
                "I.E. LAURA VICUÑA": ["21"],
                "I.E. INSTITUTO TÉCNICO INDUSTRIAL": ["9"],
                "I.E. SIMÓN RODRÍGUEZ": ["7"],
                "COLISEO DEL SUR": ["2"]
            },
            "RUFINO JOSÉ CUERVO": {
                "I.E. RUFINO SUR SEDE MADRE MARCE": ["28"],
                "I.E. ROSANA LONDOÑO": ["16"],
                "I.E. MARCELINO CHAMPAGNAT": ["17"],
                "I.E. ZULDEMAYDA": ["16"],
                "I.E. LOS QUINDOS": ["21"],
                "I.E. CIUDADELA DEL SUR": ["23"],
                "I.E. JUAN XXIII": ["11"]
            },
            "ALFONSO LÓPEZ": {
                "I.E. NUESTRA SEÑORA DE BELÉN": ["21"],
                "I.E. LA ADIELA SEDE LA CECILIA": ["27"],
                "I.E. CIUDAD DORADA": ["12"],
                "I.E. LAS COLINAS": ["8"]
            },
            "FRANCISCO DE PAULA S.": {
                "I.E. JESÚS MARÍA OCAMPO": ["20"],
                "I.E. CAMILO TORRES": ["15"],
                "I.E. LUIS BERNAL GIRALDO": ["7"]
            },
            "EL BOSQUE": {
                "I.E. GUSTAVO MATAMOROS D. COSTA": ["25"],
                "I.E. RUFINO CUERVO CENT. SEDE ANT.": ["9"]
            },
            "SAN JOSÉ": {
                "I.E. RUFINO JOSÉ CUERVO CENTRO": ["22"],
                "I.E. ESCUELA NORMAL SUPERIOR": ["15"],
                "I.E. CÁMARA JUNIOR": ["19"],
                "I.E. CÁMARA JUNIOR SEDE LA PAVÓN": ["8"],
                "I.E. CIUDADELA DE OCCIDENTE": ["10"],
                "HOGAR INFANTIL CDV LA UNIÓN": ["15"]
            },
            "CAFETERO": {
                "I.E. CIUDAD ARMENIA": ["20"],
                "CENTRO ADMINISTRATIVO MUNICIPAL": ["38"],
                "COL. SAGRADO CORAZÓN DE JESÚS B": ["20"],
                "CENTRO MARCELINO CHAMPAGNAT": ["3"]
            },
            "LIBERTADORES": {
                "I.E. CRISTÓBAL COLÓN": ["20"],
                "I.E. GRAN COLOMBIA": ["12"],
                "CDC LOS LIBERTADORES": ["1"]
            },
            "FUNDADORES": {
                "COLEGIO JORGE ISAAC": ["23"],
                "I.E. INEM JOSÉ CELESTINO MUTIS": ["16"],
                "I.E. CASD SEDE SANTA EUFRACIA": ["27"]
            },
            "QUIMBAYA": {
                "COLISEO SENA": ["26"],
                "UNIVERSIDAD DEL QUINDÍO": ["40"],
                "I.E. REPÚBLICA DE FRANCIA": ["10"],
                "ESCUELA DE ADMINISTRACIÓN EAM": ["15"],
                "FUNDACIÓN QUINDIANA DE ATENCIÓN INTEGRAL": ["5"],
                "SENA CENTRO AGROINDUTRIAL": ["3"],
                "I.E. EUDORO GRANADA SD FUNDADORES": ["1"],
                "I.E. SANTA TERESA DE JESÚS SD LA FLORIDA": ["1"]
            },
            "EL CAIMO": {
                "EL CAIMO": ["6"]
            }
        },
        "CALARCÁ": {
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
                "I.E. MAIPORE SEDE B": ["24"],
                "I.E. TEC. RAFAEL GARCÍA HERREROS": ["28"],
                "I.E. CAFÉ MADRID": ["26"],
                "I.E. LOS COLORADOS": ["22"],
                "SALÓN COMUNAL EL PABLON": ["2"],
                "I.E. MAIPORE SEDE C": ["14"],
                "I.E. SANTO ÁNGEL": ["3"]
            },
            "NORORIENTAL": {
                "INST. DE PROM. SOC. DEL NORTE SED": ["32"],
                "ORDEN DE LOS CLÉRIGOS REG. SOMASCOS": ["24"],
                "I.E. DAMASO ZAPATA SEDE C": ["4"],
                "I.E. RURAL BOSCONIA": ["1"],
                "I.E. LA JUVENTUD SEDE A": ["2"]
            },
            "SAN FRANCISCO": {
                "I.E. DAMASO ZAPATA SEDE A": ["40"],
                "COL. FRANCISCANO DEL VIRREY SOLÍS": ["33"],
                "COL. SANTANDER SEDE A": ["44"],
                "CORP. EDUCATIVA ASED": ["12"],
                "COL. AMERICANO": ["18"],
                "I.E. COMUNEROS": ["32"],
                "I.E. PILOTO SIMÓN BOLÍVAR": ["24"],
                "COL. SANTANDER SEDE C": ["5"],
                "I.E. CLUB UNIÓN SEDE A": ["2"]
            },
            "OCCIDENTAL": {
                "INST. TEC. SALESIANO ELOY VALENZ": ["41"],
                "I. INTEGRADO JORGE ELIÉCER GAITÁN SEDE A": ["14"],
                "COL. FRANCISCO DE PAULA SDER. S A": ["9"],
                "COL. FRANCISCO DE PAULA SDER. S B": ["8"],
                "CENTRAL DE ABASTOS": ["11"]
            },
            "GARCÍA ROVIRA": {
                "I.E. ANDRÉS PAEZ DE SOTOMAYOR": ["19"],
                "COL. COOPERATIVO DE BUCARAMANGA": ["31"],
                "SENA SEDE SALUD": ["28"],
                "I.E. CAMPO HERMOSO": ["8"]
            },
            "LA CONCORDIA": {
                "COL. JORGE ARDILA DUARTE SEDE A": ["22"],
                "INST. SAN JOSÉ DE LA SALLE": ["26"],
                "COL. TEC. EMPRESARIAL JOSÉ MARÍA": ["16"],
                "COL. AURELIO MARTÍNEZ MUTIS SED B": ["10"],
                "GIMNASIO SUPERIOR EMPRESARIAL": ["18"]
            },
            "LA CIUDADELA": {
                "COL. AURELIO MARTÍNEZ MUTIS SEDE A": ["15"],
                "I.E. NUESTRA SEÑORA DEL PILAR SEDE A": ["27"],
                "UNIDADES TECNOLÓGICAS DE SANT.": ["25"]
            },
            "SUROCCIDENTE": {
                "I.E. NUESTRA SEÑORA DEL PILAR SD B": ["16"],
                "I.E. NUESTRA SEÑORA DEL PILAR SD E": ["12"],
                "I.E. INEM CUSTODIO GARCÍA ROV. SD H": ["11"]
            },
            "LA PEDREGOZA": {
                "INST. LA LIBERTAD": ["20"],
                "COL. INEM SEDE G": ["8"],
                "COL. INTEGRADO JORGE ISAAC": ["7"]
            },
            "PROVENZA": {
                "I.E. PROVENZA": ["18"],
                "I.E. INEM CUSTODIO GARCÍA ROV. SD E": ["29"],
                "JARDÍN INFANTIL CASITA DE CHOC.": ["6"],
                "I.E. INEM CUSTODIO GARCÍA ROV. SD A": ["53"]
            },
            "SUR": {
                "COL. ADVENTISTA LIBERTAD": ["40"],
                "I.E. MEDALLA MILAGROSA": ["11"]
            },
            "CABECERA DEL LLANO": {
                "COL. DE LAS AMÉRICAS": ["16"],
                "COL. SAN PEDRITO": ["23"],
                "UNIVERSIDAD AUTÓNOMA DE BUCARAMANGA": ["32"],
                "COL. SAN PEDRO CLAVER": ["43"],
                "EFORSALUD": ["6"],
                "COLEGIO LA PRESENTACIÓN": ["5"]
            },
            "ORIENTAL": {
                "ESC. NORMAL SUPERIOR SEDE A": ["49"],
                "ESC. NORMAL SUPERIOR SEDE C": ["19"],
                "COL. PSICOPEDAG. CARL ROGERS": ["14"],
                "COOP. ESPECIALIZ. DE EDUC. DE COMFENALCO": ["25"],
                "UNIVERSIDAD COOP. DE COLOMBIA": ["41"],
                "I.E. LAS AMÉRICAS": ["28"],
                "CENT. EDUC. CAJA SAN BICENTENARIO SEDE B": ["6"]
            },
            "MORRORICO": {
                "I.E. ORIENTE MIRAFLORES SEDE A": ["24"],
                "I.E. ORIENTE MIRAFLORES SEDE C": ["7"]
            },
            "CENTRO": {
                "GOBERNACIÓN DE SANTANDER": ["23"],
                "CORP. UNIVERSITARIA UNICIENCIA": ["28"],
                "COL. NUESTRA SEÑORA DE FÁTIMA": ["14"]
            },
            "LAGOS DEL CACIQUE": {
                "INST. CALDAS": ["43"],
                "COL. NUESTRA SEÑORA DEL ROSARIO": ["5"]
            },
            "MUTIS": {
                "I.E. JOSÉ CELESTINO MUTIS": ["44"],
                "I.E. LUIS CARLOS GALÁN SARMIENTO": ["13"],
                "I.E. NUESTRA SEÑORA DEL PILAR SD C": ["6"]
            }
        },
        "BARRANCABERMEJA": {
            "10CORREG LA FORTUNA AUTOPISTA": {
                "LA FORTUNA AUTOPISTA": ["5"]
            },
            "11CORRE MESETA DE SAN RAFAEL": {
                "ESC. MESETA DE SAN RAFAEL SEDE A": ["2"]
            },
            "12CORREG SAN RAFAEL DE CHUCURÍ": {
                "COL. SAN RAFAEL DE CHUCURÍ": ["2"]
            },
            "13CORREG CIÉNAGA DEL OPÓN": {
                "ESCUELA CIÉNAGA DEL OPÓN": ["1"]
            },
            "EL CENTRO": {
                "COL. BLANCA DURÁN DE PADILLA SEDE A": ["23"]
            },
            "EL LLANITO": {
                "EL LLANITO": ["6", "1"]
            }
        },
        "FLORIDABLANCA": {
            "01COM1 FLORIDACASCO ANTIGUO": {
                "INSTITUTO GABRIELA MISTRAL": ["46"],
                "POLIDEP. JOSÉ ELIAS PUYANA": ["22"],
                "COL. JOSÉ ELIAS PUYANA SEDE A": ["29"],
                "COL. JOSÉ ELIAS PUYANA SEDE B": ["17"]
            },
            "CAÑAVERAL VERSALLES": {
                "COLEGIO REINA DE LA PAZ": ["18"],
                "COLEGIO NUEVO CAMBRIDGE": ["42"],
                "COLEGIO PANAMERICANO": ["3"],
                "COLEGIO VICENTE AZUERO SD DE RÍO FRÍO": ["2"],
                "UNAB CAMPUS EL BOSQUE": ["11"]
            },
            "BUCARICACARACOLI": {
                "INSTITUTO CARACOLÍ": ["11"],
                "INSTITUTO GABRIEL GARCÍA MÁRQUEZ": ["20"]
            },
            "CALDAS REPOSO": {
                "COLEGIO ISIDRO CABALLERO SEDE B": ["12"],
                "INSTITUTO ANTONIO JOSÉ DE SUC.": ["17"],
                "INSTITUTO SAN BERNARDO": ["13"],
                "FRANCISCO JOSÉ DE CALDAS I MINCA SEDE B": ["5"],
                "INSTITUTO JOSÉ ANTONIO GALÁN": ["4"],
                "INSTITUTO LA TRINIDAD SEDE B": ["9"],
                "INSTITUTO FE Y ALEGRÍA": ["18"]
            },
            "BOSQUE MOLINOS": {
                "INSTITUTO EL PROGRESO SEDE D": ["8"],
                "SALÓN COMUNAL BARRIO MOLINOS BAJOS": ["2"]
            },
            "LAGOS BELLAVISTA": {
                "INSTITUTO RAFAEL POMBO": ["16"],
                "COLEGIO CAJASAN": ["21"],
                "COLEGIO VICENTE AZUERO SEDE B": ["5"],
                "COLEGIO VICENTE AZUERO SEDE C": ["5"],
                "COLEGIO VICENTE AZUERO SEDE A": ["13"]
            },
            "07COM 7 VILLABEL SANTA ANA": {
                "INSTITUTO DOMINGO SABIO": ["18"],
                "COLEGIO METROPOLITANO DEL SUR": ["12"],
                "INSTITUTO MADRE DEL BUEN CONS.": ["17"],
                "COLEGIO METROPOLITANO SANTA A": ["19"]
            },
            "LA CUMBRE EL CARMEN": {
                "COLEGIO GONZALO JIMÉNEZ NAVAS": ["30"],
                "COL. MICROEMPRESARIAL EL CARMEN SD C": ["13"],
                "INSTITUTO LA CUMBRE": ["33"],
                "COL. JOSÉ ELIAS PUYANA SED C": ["10"],
                "COL. MICROEMPRESARIAL EL CARME SD B": ["14"]
            }
        },
        "GÁMBITA": {
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
                "SAN JOSÉ DE SUAITA": ["3"]
            }
        },
        "VÉLEZ": {
            "01CORR ALTO JORDÁN GUALILO": {
                "ALTO JORDÁN": ["2"],
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
        "CARCASÍ": {},
        "CEPITA": {},
        "CERRITO": {},
        "CHARALÁ": {},
        "CHARTA": {},
        "CHIMÁ": {},
        "CHIPATÁ": {},
        "CIMITARRA": {},
        "CONCEPCIÓN": {},
        "CONFINES": {},
        "CONTRATACIÓN": {},
        "COROMORO": {},
        "CURITÍ": {},
        "EL CARMEN DE CHUCURÍ": {},
        "EL GUACAMAYO": {},
        "EL PEÑON": {},
        "EL PLAYÓN": {},
        "EL SOCORRO": {},
        "ENCINO": {},
        "ENCISO": {},
        "FLORIAN": {},
        "GALÁN": {},
        "GIRÓN": {},
        "GUACA": {},
        "GUADALUPE": {},
        "GUAPOTA": {},
        "GUAVATA": {},
        "GUEPSA": {},
        "HATO": {},
        "JESÚS MARÍA": {},
        "JORDÁN": {},
        "LA BELLEZA": {},
        "LA PAZ": {},
        "LANDÁZURI": {},
        "LEBRIJA": {},
        "LOS SANTOS": {},
        "MACARAVITA": {},
        "MÁLAGA": {},
        "MATANZA": {},
        "MOGOTES": {},
        "MOLAGAVITA": {},
        "OCAMONTE": {},
        "ONZAGA": {},
        "PALMAR": {},
        "PALMAS DEL SOCORRO": {},
        "PÁRAMO": {},
        "PIEDECUESTA": {},
        "PINCHOTE": {},
        "PUENTE NACIONAL": {},
        "PUERTO PARRA": {},
        "PUERTO WILCHES": {},
        "RIONEGRO": {},
        "SABANA DE TORRES": {},
        "SAN ANDRÉS": {},
        "SAN BENITO": {},
        "SAN GIL": {},
        "SAN JOAQUÍN": {},
        "SAN JOSÉ DE MIRANDA": {},
        "SAN MIGUEL": {},
        "SAN VICENTE DE CHUCURÍ": {},
        "SANTA BÁRBARA": {},
        "SANTA HELENA DEL OPÓN": {},
        "SIMACOTA": {},
        "SUCRE": {},
        "SURATÁ": {},
        "TONA": {},
        "VALLE DE SAN JOSÉ": {},
        "VETAS": {},
        "VILLANUEVA": {},
        "ZAPATOCA": {}
    },
    "SUCRE": {
        "SINCELEJO": {
            "NORESTE": {
                "I.E. ROGELIO RODRÍGUEZ SEVERICHE LEONCITO": ["21"],
                "COL. NTRA. STA. DE FÁTIMA": ["41"],
                "I.E. PEDAGÓGICO DE VENECIA": ["27"],
                "I.E. PARA POBLACIONES ESPECIALES": ["4"]
            },
            "OESTE": {
                "I.E. NORMAL SUPERIOR DE SINCELEJO": ["35"],
                "I.E. JUANITA GARCÍA MANJARRÉS": ["20"],
                "INST. TÉCNICO INDUSTRIAL ANTONIO PRIETO": ["17"]
            },
            "SUROESTE": {
                "I.E. NUESTRA SEÑORA DEL CARMEN": ["26"],
                "INST. EDC. 20 DE ENERO": ["20"],
                "I.E. MADRE AMALIA": ["27"]
            },
            "CENTRAL  OESTE": {
                "I.E. ANTONIO LENIS": ["43"],
                "I.E. SAN JOSÉ CIPCDV": ["21"]
            },
            "CENTRAL": {
                "I.E. JOSÉ IGNACIO LÓPEZ": ["13"],
                "I.E. FRANCISCO DE PAULA SANTANDER": ["17"],
                "I.E. LUIS CARLOS GALÁN": ["9"]
            },
            "NORTE": {
                "I.E. SAN ROQUE": ["21"],
                "I.E. ANTONIO NARIÑO SEDE JUANITA": ["10"],
                "I.E. CUARTA EL SALVADOR": ["18"],
                "I.E. ALTOS DE LA SABANA": ["4"]
            },
            "SUR": {
                "INST. NACIONAL SIMÓN ARAUJO": ["44"],
                "COLEGIO LA ESPERANZA": ["34"]
            },
            "SUR ESTE": {
                "I.E. SAN JOSÉ": ["28"]
            },
            "10CORREGIMIENTOS ÁREA 1": {
                "CASTAÑEDA": ["4"],
                "CHOCHO": ["14"],
                "LAS PALMAS": ["3"]
            },
            "11CORREGIMIENTOS ÁREA 2": {
                "LA ARENA": ["5"],
                "LA CHIVERA": ["1"],
                "LA PEÑATA": ["3"],
                "LAS MAJAGUAS": ["1"],
                "SAN RAFAEL EL ZANJÓN": ["1"]
            },
            "12CORREGIMIENTOS ÁREA 3": {
                "CRUZ DEL BEQUE": ["2"],
                "EL CERRITO": ["3"],
                "LAGUNA FLOR": ["2"],
                "LAS HUERTAS": ["2"],
                "SAN ANTONIO": ["3"]
            },
            "13CORREGIMIENTOS ÁREA 4": {
                "BUENAVISTA": ["3"],
                "LA GALLERA": ["7"],
                "SAN JACINTO MOCHA": ["2"],
                "SABANAS DEL POTRERO": ["4"],
                "VILLA DE SAN MARTÍN": ["3"],
                "BABILONIA": ["2"],
                "BUENAVISTICA": ["1"],
                "CERRO DEL NARANJO": ["1"]
            }
        },
        "BUENAVISTA": {},
        "CAIMITO": {},
        "CHALÁN": {},
        "COLOSO": {},
        "COROZAL": {},
        "COVEÑAS": {},
        "EL ROBLE": {},
        "GALERAS": {},
        "GUARANDA": {},
        "LA UNIÓN": {},
        "LOS PALMITOS": {},
        "MAJAGUAL": {},
        "MORROA": {},
        "OVEJAS": {},
        "SAMPUÉS": {},
        "SAN ANTONIO DE PALMITO": {},
        "SAN BENITO ABAD": {},
        "SAN JUAN DE BETULIA": {},
        "SAN MARCOS": {},
        "SAN ONOFRE": {},
        "SAN PEDRO": {},
        "SINCE": {},
        "SUCRE": {},
        "TOLÚ": {},
        "TOLÚ VIEJO": {}
    },
    "TOLIMA": {
        "IBAGUÉ": {
            "DANTAS": {
                "I.E. LAURELES SD DANTAS": ["1"]
            },
            "LAURELES": {
                "I.E. LAURELES": ["1"]
            },
            "COELLO COCORA": {
                "I.E. COELLO COCORA": ["5"]
            },
            "GAMBOA": {
                "ESC. GAMBOA": ["2"]
            },
            "TAPIAS": {
                "ESC. CAMILO TORRES": ["3"]
            },
            "TOCHE": {
                "I.E. TAPIAS SD TOCHE": ["1"]
            },
            "JUNTAS": {
                "I.E. JUNTAS": ["2"]
            },
            "VILLA RESTREPO": {
                "CASA DE LA CULTURA": ["6"]
            },
            "CAY": {
                "I.E. TEC. AGROPECUARIA SD CAY": ["4"]
            },
            "CALAMBEO": {
                "ZONA RURAL ESC. LOS CRISTALES": ["2"]
            },
            "24CORR  11 SAN JUAN DE LA CHINA": {
                "I.E. SAN JUAN DE LA CHINA": ["4"]
            },
            "SAN BERNARDO": {
                "I.E. SAN BERNARDO": ["4"]
            },
            "EL SALADO": {
                "I.E. VDA. LA ESPERANZA": ["2"]
            },
            "BUENOS AIRES": {
                "I.E. NVA. ESPERANZA LA PALMA": ["4"]
            },
            "28CORR 15 CARMEN DE BULIRA": {
                "I.E. FERNANDO VILLALOBOS SD CARMEN BULIRA": ["2"]
            },
            "EL TOTUMO": {
                "I.E. FERNANDO VILLALOBOS SD TOTUMO": ["6"]
            },
            "LA FLORIDA": {
                "I.E. SAN FRANCISCO": ["2"]
            }
        },
        "CHAPARRAL": {
            "DE AMOYA": {
                "AMOYA LAS CRUCES": ["2"],
                "AMOYA LA CORTÉS": ["2"],
                "AMOYA COPETE": ["1"]
            },
            "EL LIMÓN": {
                "EL LIMÓN": ["8"],
                "EL LIMÓN LA PROFUNDA": ["1"]
            },
            "DE CALARMA": {
                "CALARMA RISALDA  CALARMA": ["4"],
                "CALARMA POTRERITO DE LUGO": ["1"],
                "CALARMA YAGUARA": ["1"]
            },
            "LAS HERMOSAS": {
                "LAS HERMOSAS SANTA BÁRBARA": ["2"],
                "LAS HERMOSAS LA VIRGINIA": ["2"],
                "LAS HERMOSAS SAN JOSÉ DE LAS HERMOSAS": ["2"]
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
            "DINDALITO CTRO.": {
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
            "CAMPEÓN": {
                "CAMPEÓN": ["2"]
            },
            "AGUAS CLARAS": {
                "AGUAS CLARAS": ["2"]
            },
            "PIEDRA GRANDE": {
                "PIEDRA GRANDE": ["2"],
                "LAS MARÍAS": ["2"]
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
                "LA ILUSIÓN": ["2"]
            },
            "GAITANIA": {
                "GAITANIA": ["11"],
                "RÍO CLARO": ["1"],
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
            "PAYANDÉ": {
                "EL SALITRE": ["1"],
                "PAYANDE": ["9"]
            }
        },
        "VENADILLO": {
            "JUNÍN": {
                "JUNÍN": ["4"]
            },
            "LA SI.ERRITA": {
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
        "ANZOÁTEGUI": {},
        "ARMERO": {},
        "ATACO": {},
        "CAJAMARCA": {},
        "CARMEN DE APICALÁ": {},
        "CASABIANCA": {},
        "COELLO": {},
        "COYAIMA": {},
        "CUNDAY": {},
        "DOLORES": {},
        "EL ESPINAL": {},
        "FALÁN": {},
        "FLANDES": {},
        "GUAMO": {},
        "HONDA": {},
        "ICONONZO": {},
        "LÉRIDA": {},
        "MARIQUITA": {},
        "MELGAR": {},
        "MURILLO": {},
        "NATAGAIMA": {},
        "ORTEGA": {},
        "PALOCABILDO": {},
        "PIEDRAS": {},
        "PRADO": {},
        "PURIFICACIÓN": {},
        "RONCESVALLES": {},
        "ROVIRA": {},
        "SALDANA": {},
        "SAN ANTONIO": {},
        "SANTA ISABEL": {},
        "SUÁREZ": {},
        "VALLE DE SAN JUAN": {},
        "VILLAHERMOSA": {},
        "VILLARRICA": {}
    },
    "VALLE DEL CAUCA": {
        "ALCALÁ": {},
        "ANDALUCÍA": {},
        "ANSERMANUEVO": {},
        "ARGELIA": {},
        "BOLÍVAR": {},
        "BUGALAGRANDE": {},
        "CAICEDONIA": {},
        "CALIMA": {},
        "CANDELARIA": {},
        "DAGUA": {},
        "EL ÁGUILA": {},
        "EL CAIRO": {},
        "EL CERRITO": {},
        "EL DOVIO": {},
        "GINEBRA": {},
        "GUACARÍ": {},
        "JAMUNDÍ": {},
        "LA CUMBRE": {},
        "LA UNIÓN": {},
        "LA VICTORIA": {},
        "OBANDO": {},
        "PALMIRA": {},
        "PRADERA": {},
        "RESTREPO": {},
        "RIOFRÍO": {},
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
                "COL. PARROQUIAL SEÑOR DE LOS MI.": ["25"],
                "ESCUELA EL DIAMANTE": ["37"],
                "ESCUELA RODRIGO LLOREDA": ["39"],
                "ESCUELA MIGUEL CAMACHO PEREA": ["22"],
                "CENTRO DE CAPACITACIÓN DON BOS.": ["17"],
                "COLEGIO COMFANDI CALIPSO": ["24"],
                "ESCUELA SANTA ROSA": ["30"],
                "COLEGIO LOS LAGOS": ["20"],
                "ESCUELA BARTOLOMÉ LOBO GUERRERO": ["33"],
                "SENA CDTI": ["23"],
                "COL. SANTA ISABEL DE HUNGRÍA COMUNEROS": ["23"],
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
            "32CORR MELÉNDEZ VILLA CARMELO": {
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
                "I.E. SAN RAFAEL": ["24"],
                "I.E. PASCUAL DE ANDAGOYA": ["15"],
                "TERMINAL DE TRANSPORTE": ["22"],
                "I.E. FRANCISCO JOSÉ DE CALDAS": ["36"],
                "FUND. EDUC. Y SOCIAL ANA VIC.": ["21"],
                "INSTITUTO TÉCNICO COMERCIAL PILOTO": ["2"],
                "I.E. ANA VICTORIA": ["11"],
                "I.E. REPÚBLICA DE VENEZUELA": ["19"],
                "I.E. POLICARPA SALAVARRIETA": ["15"],
                "I.E. URBANO TENORIO": ["9"],
                "I.E. LA ANUNCIACIÓN IFA": ["24"]
            },
            "CONT. EL PAILÓN": {
                "I.E. JOSÉ RAMÓN BEJARANO": ["11"],
                "CASETA COMUNAL EL ORIENTE": ["15"],
                "I.E. JUAN JOSÉ RONDÓN": ["37"],
                "COLEGIO PATRICIO SIMMENS": ["12"],
                "I.E. TEÓFILO ROBERTO POTES": ["40"],
                "I.E. TERMARIT": ["11"],
                "I.E. LICEO DEL PACÍFICO": ["18"],
                "I.E. SAN MARTÍN DE PORRAS": ["11"],
                "I.E. JOSÉ MARÍA CABAL": ["35"],
                "I.E. LAS AMÉRICAS": ["10"],
                "PARROQUIA CRISTO REDENTOR": ["24"],
                "I.E. SIMÓN BOLÍVAR": ["35"],
                "COLEGIO ANTONIO NARIÑO": ["14"],
                "I.E. LOS GRANADINOS": ["27"],
                "CASETA COMUNAL UNIÓN DE VIVIENDA": ["13"],
                "I.E. EMILIO CARVAJAL": ["21"],
                "I.E. LA NUEVA ESPERANZA": ["6"],
                "CTRO. EDUC. EUSEBIO ANGULO": ["12"],
                "SEDE MARÍA AUXILIADORA": ["4"]
            },
            "BAJO CALIMA": {
                "BAJO CALIMA": ["6"]
            },
            "PUNTA MAGDALENA": {
                "BOCAS DEL SAN JUAN": ["2"],
                "LA PLATA": ["2"],
                "MÁLAGA": ["2"],
                "PUERTO ESPAÑA": ["1"]
            },
            "PUNTA BAZÁN": {
                "LA BOCANA": ["3"]
            },
            "CARRETERA SIMÓN BOLÍVAR": {
                "AGUACLARA": ["1"],
                "LADRILLEROS": ["1"],
                "LLANOBAJO": ["1"],
                "SAN MARCOS": ["2"],
                "ZABALETAS": ["2"],
                "ZACARÍAS": ["4"]
            },
            "RÍO ANCHICAYA": {
                "SAN JOSÉ ANCHICAYA": ["2"],
                "TAPARAL": ["2"]
            },
            " RÍO RAPOSO": {
                "CARACOLÍ CACOLI": ["1"],
                "EL TIGRE": ["1"],
                "CALLE HONDA": ["1"],
                "SAN FRANCISCO JAVIER": ["2"]
            },
            "RÍO CAJAMBRE": {
                "EL PITAL": ["2"],
                "MAYORQUÍN": ["2"],
                "PAPAYAL": ["2"]
            },
            "25CORREG 13 RÍO YURUMANGUÍ": {
                "SAN ANTONIO YURUMANGUÍ": ["2"],
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
            "29CORREG 17 LA CONCEPCIÓN": {
                "LA CONCEPCIÓN": ["2"],
                "NICOLÁS RAMOS HIDALGO": ["1"],
                "PUERTO NAYA": ["1"],
                "SAN LORENZO": ["1"]
            }
        },
        "BUGA": {
            "ZANJÓN HONDO": {
                "ZANJÓN HONDO": ["4"]
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
            "LA MARÍA": {
                "LA MARÍA": ["2"]
            },
            "LA HABANA": {
                "LA HABANA": ["5"]
            },
            "FRISOLES": {
                "FRISOLES": ["1"]
            },
            "EL VÍNCULO": {
                "EL VÍNCULO": ["4"]
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
            "RÍO LORO": {
                "RÍO LORO": ["1"]
            }
        },
        "CARTAGO": {
            "CAUCA": {
                "CAUCA": ["1"]
            },
            "COLORADAS": {
                "COLORADAS": ["2"]
            },
            "MODÍN": {
                "MODÍN": ["2"]
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
            "CAÑAS ABAJO": {
                "CAÑAS ABAJO": ["1"]
            },
            "CAÑAS ARRIBA": {
                "CAÑAS ARRIBA": ["1"]
            },
            "CHOCOCITO": {
                "CHOCOCITO": ["3"]
            },
            "EL LÍBANO": {
                "EL LÍBANO": ["1"]
            },
            "EL PEDREGAL": {
                "EL PEDREGAL": ["3"]
            },
            "LA ACEQUIA": {
                "LA ACEQUIA": ["1"]
            },
            "LA DIANA": {
                "LA DIANA": ["2"]
            },
            "LA PALMERA": {
                "LA PALMERA": ["1"]
            },
            "LA RIVERA": {
                "LA RIVERA": ["2"]
            },
            "LA SAMARIA": {
                "LA SAMARIA": ["1"]
            },
            "LA UNIÓN": {
                "LA UNIÓN": ["1"]
            },
            "LAS GUACAS": {
                "LAS GUACAS": ["2"]
            },
            "PÁRRAGA": {
                "PÁRRAGA": ["1"]
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
        "TULUÁ": {
            "10UAF 1": {
                "CAMPOALEGRE": ["3"],
                "NARIÑO": ["9"],
                "SAN CARLOS": ["1"]
            },
            "11UAF 2": {
                "BOCAS DE TULUÁ": ["2"],
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
                "QUEBRADA GRANDE": ["1"],
                "TOCHECITO": ["1"]
            },
            "18UAF 9": {
                "BARRAGÁN": ["3"]
            },
            "19UAF 10": {
                "SANTA LUCÍA": ["1"]
            }
        },
        "YUMBO": {
            "ARROYO HONDO": {
                "ARROYO HONDO": ["7"]
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
            "SANTA INÉS": {
                "SANTA INÉS": ["4"]
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
            "RAIMUNDO CISNEROS O.": {
                "COLEGIO SIMÓN BOLÍVAR": ["39"]
            },
            "JOSEFA CANELONES": {
                "CONCENTRACIÓN CAMILO TORRES": ["23"]
            },
            "JOSÉ ANTONIO BENÍTEZ": {
                "COLEGIO SANTANDER PRIMARIA": ["20"],
                "CONC. ESCOLAR LA COROCORA": ["14"],
                "CONC. ESCOLAR DIVINO NIÑO": ["23"]
            },
            "JOSÉ LAURENCIO OSIO": {
                "NORMAL MARÍA INMACULADA": ["22"],
                "COLEGIO TEC. CRISTO REY": ["29"]
            },
            "JUAN JOSÉ RONDÓN": {
                "ESCUELA FLOR DE MI LLANO": ["23"]
            },
            "CAÑAS BRAVAS": {
                "CAÑAS BRAVAS": ["3"]
            },
            "MAPORILLAL": {
                "MAPORILLAL": ["1"]
            },
            "SANTA BÁRBARA": {
                "SANTA BÁRBARA": ["4"]
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
        "PUERTO RONDÓN": {},
        "SARAVENA": {},
        "TAME": {}
    },
    "CAQUETÁ": {
        "ALBANIA": {},
        "BELÉN DE LOS ANDAQUÍES": {},
        "CARTAGENA DEL CHAIRÁ": {},
        "CURILLO": {},
        "EL DONCELLO": {},
        "EL PAUJIL": {},
        "LA MONTAÑITA": {},
        "MILÁN": {},
        "MORELIA": {},
        "SAN JOSÉ DEL FRAGUA": {},
        "SAN VICENTE DEL CAGUÁN": {},
        "SOLANO": {},
        "SOLITA": {},
        "VALPARAISO": {},
        "FLORENCIA": {
            "OCCIDENTAL": {
                "I.E. JUAN BAUTISTA LA SALLE": ["24"],
                "I.E. JUAN BAUTISTA MIGANI": ["19"],
                "I.E. SAN FRANCISCO DE ASÍS": ["20"],
                "I.E. SAGRADOS CORAZONES": ["22"],
                "I.E. JUAN B DE LA SALLE SD SIETE DE AGOSTO": ["3"],
                "I.E. FRANCISCO DE ASÍS SEDE CIRCARCIA": ["1"]
            },
            "SUR": {
                "I.E. ANTONIO RICAURTE SEDE JUAN XXIII": ["24"],
                "I.E. ANTONIO RICAURTE": ["14"],
                "I.E. BARRIOS UNIDOS DEL SUR": ["21"],
                "I TEC.": ["AGROPECUARIO DE LA AMAZONÍA"]
            },
            "NORTE": {
                "I.E. LOS PINOS SEDE LA PAZ": ["10"],
                "UNIVERSIDAD UNAD": ["10"],
                "INSTITUTO TÉCNICO INDUSTRIAL": ["18"],
                "I.E. LA SALLE": ["15"],
                "I.E. BUINAIMA": ["15"],
                "URBANIZACIÓN LA GLORIA": ["2"]
            },
            "ORIENTAL": {
                "I.E. BUS SEDE PUEBLO NUEVO": ["13"],
                "I.E. BUS SEDE SANTA INÉS": ["10"],
                "I.E. CIUDADELA SIGLO XXI SEDE TRIUNFO": ["7"],
                "I.E. DIV. NIÑO SEDE LAS PALMERAS": ["9"],
                "I.E. CIUDADELA SIGLO XXI": ["28"],
                "I.E. BELLO HORIZONTE": ["16"]
            },
            "SAN PEDRO NORCASIA": {
                "SAN PEDRO NORCASIA": ["3"]
            },
            "ORTEGUAZA": {
                "ORTEGUAZA SANTANA LAS HERMOSAS": ["3"]
            },
            "EL DANUBIO REMOLINO": {
                "EL DANUBIO EL REMOLINO": ["1"]
            },
            "EL CARANO": {
                "EL CARANO EL CARANO": ["3"]
            },
            "SANTO DOMINGO": {
                "SANTO DOMINGO SANTO DOMINGO": ["4"]
            },
            "SAN MARTÍN CAMP.": {
                "SAN MARTÍN": ["1"]
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
            "RÍO NEGRO": {
                "RÍO NEGRO": ["4"]
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
                "I.E. LUIS HERNÁNDEZ VARGAS": ["26"],
                "C.E. MARCO FIDEL SUÁREZ": ["13"],
                "I.E. CENTRO SOCIAL": ["22"]
            },
            "CALIXTO ZAMBRANO": {
                "I.E. CARLOS LLERAS RESTREPO": ["33"],
                "I.E. BRAULIO GONZÁLEZ SD SIMÓN BOLÍVAR": ["16"],
                "I.E. BRAULIO GONZÁLEZ SD CENTRO": ["26"]
            },
            "CLELIA RIVEROS DE PRI.": {
                "I. TEC. EMPRESARIAL YOPAL ITEY": ["28"],
                "I.E. MANUELA BELTRÁN": ["14"]
            },
            "CIUDAD CAMPIÑA": {
                "I.E. LA CAMPIÑA": ["21"],
                "I.E. EL PARAISO": ["35"]
            },
            "JAVIER MANUEL VARGAS": {
                "I. TEC. AMBIENTAL SAN MATEO": ["28"],
                "MEGACOLEGIO EL PROGRESO COMUNA CINCO": ["25"]
            },
            "06CIUDADELA LLANO LINDO": {
                "I.E. EMP. LLANO LINDO SD A": ["5"],
                "I.E. EMP. LLANO LINDO SD B": ["3"]
            },
            "07ALCARAVÁN LA NIATA": {
                "ALCARAVÁN LA NIATA": ["3"]
            },
            "08PUNTO NUEVO": {
                "PUNTO NUEVO": ["2"]
            },
            "09MATELIMÓN": {
                "MATELIMÓN": ["2"]
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
            "16TILODIRÁN": {
                "TILODIRÁN": ["4"]
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
        "MANÍ": {},
        "MONTERREY": {},
        "NUNCHÍA": {},
        "OROCUÉ": {},
        "PAZ DE ARIPORO": {},
        "PORE": {},
        "RECETOR": {},
        "SABANALARGA": {},
        "SÁCAMA": {},
        "SAN LUIS DE PALENQUE": {},
        "TÁMARA": {},
        "TRINIDAD": {},
        "VILLANUEVA": {}
    },
    "LA GUAJIRA": {
        "RIOHACHA": {
            "CENTRO HISTÓRICO": {
                "INST. EDUC. DIVINA PASTORA": ["26"]
            },
            "NUEVO CENTRO": {
                "I.E. EUSEBIO SEPTIMIO MARY": ["13"]
            },
            "COQUIVACOA": {
                "I.E. LICEO ALMIRANTE PADILLA": ["33"],
                "I.E. LIVIO REGINALDO FISCHIONE": ["17"],
                "INST. EDUC. JOSÉ ANTONIO GALÁN": ["16"]
            },
            "COOPERATIVO": {
                "CTRO. EDUCATIVO NVO. HORIZONTE": ["13"],
                "I.E. JOSÉ A GALÁN SD COOPERATIVO": ["6"]
            },
            "AER ALMIRANTE PADILLA": {
                "INST. EDUC. IPC": ["38"]
            },
            "NTRA. SRA. DE LOS REMEDIOS": {
                "I.E. ISABEL MARÍA CUESTA": ["24"],
                "I.E. JOSÉ ARNOLDO MARÍN": ["13"]
            },
            "BOCAGRANDE": {
                "I.E. ECOLÓGICA EL CARMEN": ["19"],
                "I.E. ECOLÓGICA EL CARMEN SD PPAL": ["13"]
            },
            "ECO. LAG. SALADA Y PAT.": {
                "I.E. MARÍA DORALIZA LÓPEZ DE MEJÍA": ["27"],
                "I.E. HELIÓN PINEDO RÍOS": ["18"]
            },
            "ECOTURRIO RANCHERÍA": {
                "I.E. NTRA. STA. DE FÁTIMA": ["5"]
            },
            "EL DIVIDIVI": {
                "I.E. DENZIL ESCOLAR SD PPAL.": ["32"]
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
                "I.E. EUGENIA HERRERA": ["4"]
            },
            "TOMARRAZÓN": {
                "TOMARRAZÓN": ["4"],
                "LA GLORIA": ["1"],
                "CASCAJALITO": ["1"]
            },
            "MONGUÍ": {
                "MONGUÍ": ["4"],
                "CUCURUMANA": ["4"]
            },
            "COTOPRIX": {
                "COTOPRIX": ["4"]
            },
            "GALÁN": {
                "GALÁN": ["3"]
            },
            "18CORR VILLA MARTÍN MACHOBACHO": {
                "VILLA MARTÍN MACHOBAYO": ["4"]
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
            "DE CARRAIPÍA": {
                "CARRAIPÍA": ["9"]
            },
            "DE MAJAYURA": {
                "MAJAYURA": ["10"]
            },
            "DE LIMONCITO": {
                "EL LIMONCITO": ["6"],
                "IPAPURE": ["4"]
            },
            "DE PARAGUACHÓN": {
                "PARAGUACHÓN": ["15"]
            },
            "YOTOJOROY": {
                "LA PAZ": ["6"],
                "YOTOJOROY": ["3"]
            }
        },
        "ALBANIA": {},
        "BARRANCAS": {},
        "DIBULLA": {},
        "DISTRACCIÓN": {},
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
        "LEJANÍAS": {
            "CACAYAL": {
                "CACAYAL": ["5"]
            },
            "LA VENTICUATRO": {
                "LA VEINTICUATRO": ["1"]
            }
        },
        "ACACÍAS": {},
        "BARRANCA DE UPÍA": {},
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
        "MAPIRIPÁN": {},
        "MESETAS": {},
        "PUERTO CONCORDIA": {},
        "PUERTO GAITÁN": {},
        "PUERTO LLERAS": {},
        "PUERTO LÓPEZ": {},
        "PUERTO RICO": {},
        "RESTREPO": {},
        "SAN CARLOS DE GUAROA": {},
        "SAN JUAN DE ARAMA": {},
        "SAN JUANITO": {},
        "SAN MARTÍN": {},
        "VILLAVICENCIO": {},
        "VISTA HERMOSA": {}
    },
    "GUAVIARE": {
        "SAN JOSÉ DEL GUAVIARE": {
            "EL CAPRICHO": {
                "EL CAPRICHO": ["8"]
            },
            "CHARRAS BOQUERÓN": {
                "CHARRAS BOQUERÓN": ["6"]
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
        "MIRITÍ PARANÁ": {
            "04MIRITÍ PARANÁ": {
                "PUESTO CABECERA MUNICIPAL": ["2"],
                "SANTA ISABEL": ["1"]
            }
        },
        "PUERTO SANTANDER": {
            "05PUERTO SANTANDER": {
                "DEPARTAMENTAL": ["2"]
            }
        },
        "TARAPACÁ": {
            "06TARAPACÁ": {
                "DEPARTAMENTAL": ["5"]
            }
        },
        "PUERTO ALEGRÍA": {
            "07PUERTO ALEGRÍA": {
                "DEPARTAMENTAL": ["1"]
            }
        },
        "PUERTO ARICA": {
            "08PUERTO ARICA": {
                "DEPARTAMENTAL": ["2"]
            }
        },
        "LETICIA": {},
        "PUERTO NARIÑO": {}
    },
    "PUTUMAYO": {
        "PUERTO ASÍS": {
            "SUR": {
                "ESCUELA CENTRAL DE VARONES": ["20"],
                "I.E. SANTA TERESA (SEDE PRIMARIA":["1"],
                "COLEGIO SAN FERNANDO": ["8"]
            },
            "ORIENTE": {
                "I.E. ALVERNIA": ["15"],
                "I.E. EL JARDÍN": ["15"],
                "I. FLUVIAL DEL AMAZONAS": ["8"]
            },
            "NORTE": {
                "I.E. SAN NICOLÁS": ["15"],
                "ESCUELA EL PRADO": ["11"]
            },
            "PINUNA BLANCO": {
                "PINUNA BLANCO PUERTO HACHA": ["3"]
            },
            "LA CARMELITA": {
                "LA CARMELITA CUEMBÍ": ["7"],
                "SANTA MARÍA ALTO CUEMBÍ": ["3"]
            },
            "SANTANA": {
                "SANTANA": ["5"]
            },
            " TETEYÉ": {
                "TETEYÉ": ["3"]
            },
            "VILLA VICTORIA": {
                "VILLA VICTORIA": ["2"]
            }
        },
        "PUERTO LEGUÍZAMO": {
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
        "COLÓN": {
            "SAN PEDRO": {
                "SAN PEDRO": ["3"]
            }
        },
        "SAN MIGUEL LA DORADA": {
            "01CORR PUERTO COLÓN SAN MIGUEL": {
                "PUERTO COLÓN SAN MIGUEL": ["9"]
            }
        },
        "MOCOA": {},
        "ORITO": {},
        "PUERTO CAICEDO": {},
        "PUERTO GUZMÁN": {},
        "SAN FRANCISCO": {},
        "SAN MIGUEL": {},
        "SANTIAGO": {},
        "SIBUNDOY": {},
        "VALLE DEL GUAMUEZ": {},
        "VILLAGARZÓN": {}
    },
    "CAUCA": {
        "ALMAGUER": {},
        "ARGELIA": {},
        "BALBOA": {},
        "BOLÍVAR": {},
        "BUENOS AIRES": {},
        "CAJIBÍO": {},
        "CALDONO": {},
        "CALOTO": {},
        "CORINTO": {},
        "EL TAMBO": {},
        "FLORENCIA": {},
        "GUACHENÉ": {},
        "GUAPI": {},
        "INZÁ": {},
        "JAMBALO": {},
        "LA SIERRA": {},
        "LA VEGA": {},
        "LÓPEZ DE MICAY": {},
        "MERCADERES": {},
        "MIRANDA": {},
        "MORALES": {},
        "PADILLA": {},
        "PÁEZ": {},
        "PATIA": {},
        "PIAMONTE": {},
        "PIENDAMÓ": {},
        "POPAYÁN": {},
        "PUERTO TEJADA": {},
        "PURACÉ": {},
        "ROSAS": {},
        "SAN SEBASTIÁN": {},
        "SANTA ROSA": {},
        "SANTANDER DE QUILICHAO": {},
        "SILVIA": {},
        "SOTARÁ": {},
        "SUÁREZ": {},
        "SUCRE": {},
        "TIMBÍO": {},
        "TIMBIQUÍ": {},
        "TORIBÍO": {},
        "TOTORO": {},
        "VILLA RICA": {}
    },
    "GUAINÍA": {
        "INÍRIDA": {}
    },
    "NORTE DE SANTANDER": {
        "ABREGO": {},
        "ARBOLEDAS": {},
        "BOCHALEMA": {},
        "BUCARASICA": {},
        "CÁCHIRA": {},
        "CÁCOTA": {},
        "CHINÁCOTA": {},
        "CHITAGÁ": {},
        "CONVENCIÓN": {},
        "CÚCUTA": {},
        "CUCUTILLA": {},
        "DURANIA": {},
        "EL CARMEN": {},
        "EL TARRA": {},
        "EL ZULIA": {},
        "GRAMALOTE": {},
        "HACARÍ": {},
        "HERRÁN": {},
        "LA ESPERANZA": {},
        "LA PLAYA DE BELÉN": {},
        "LABATECA": {},
        "LOS PATIOS": {},
        "LOURDES": {},
        "MUTISCUA": {},
        "OCAÑA": {},
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
        "TIBÚ": {},
        "TOLEDO": {},
        "VILLA CARO": {},
        "VILLA DEL ROSARIO": {}
    },
    "SAN ANDRÉS Y PROVIDENCIA": {
        "PROVIDENCIA Y SANTA CATALINA ISLAS": {},
        "SAN ANDRÉS": {}
    },
    "VAUPÉS": {
        "CARURÚ": {},
        "MITÚ": {},
        "TARAIRA": {}
    },
    "VICHADA": {
        "CUMARIBO": {},
        "LA PRIMAVERA": {},
        "PUERTO CARREÑO": {},
        "SANTA ROSALÍA": {}
    }
};


const regions = {
    json:()=>data,
    all:Object.keys(data),
    flat(p){ return this.deep(p,0)},
    deep(path='', _=1, __=0){
        return this.path(path).reduce((arr, key)=>(
            arr.concat(this[__<_?'deep':'path'](`${path}.${key}`, _, (__+1)))
        ),[]);
    },
    path:(path='')=>{
        const r=((path && path.toString().match(/^.*\.$/))&&{})||get(data, path.toUpperCase(),{});
        return Array.isArray(r)?r:Object.keys(r);
    },
};
export default regions;