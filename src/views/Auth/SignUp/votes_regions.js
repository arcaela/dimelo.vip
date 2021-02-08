const regions = {
    "ANTIOQUIA": {
        "MEDELLIN": {
            "POPULAR": {
                "SEC. ESC. LA ESPERANZA No 2": ["35"],
                "INST.EDUC. LA CANDELARIA": ["53"],
                "IE.MARIA DE LOS ANGELES CANO MARQUEZ": ["20"],
                "SEC. ESC. MEDELLIN": ["24"],
                "I.E.FE Y ALEGRIA GRANIZAL": ["4"],
                "IE LA AVANZADA": ["2"],
                "SEC. ESC. CARPINELO AMAPOLITA": ["1"],
                "IE ANTONIO DERKA": ["3"],
                "SEC.ESC. PABLO VI": ["72"],
                "SEC. ESC. DIVINA PROVIDENCIA": ["36"],
                "SEC.ESC.AGRIPINA MONTES DEL VALLE": ["45"],
                "I.E.FEDERICO CARRASQUILLA": ["5"],
                "I.E.GUADALUPE": ["5"]
            },
            "SANTA CRUZ": {
                "INST. EDUC. ASIA IGNACIANA": ["39"],
                "SEC.ESC.  MANUEL URIBE ANGEL": ["36"],
                "SEC.ESC. REPUB. DE NICARAGUA": ["24"],
                "I.E.FE Y ALEGRIA J.MARIA VELAZ": ["6"],
                "I.E. BARRIO SANTA CRUZ": ["24"],
                "SEC. ESC. ARZOBISPO GARCIA": ["27"],
                "I.E. REPUBLICA DE HONDURAS": ["21"]
            },
            "MANRIQUE": {
                "I.E. REPUBLICA DE BARBADOS": ["41"],
                "I.E. SAN LORENZO DE ABURRA": ["25"],
                "I.E. MANUELA BELTRAN": ["53"],
                "SEC.ESC.SAN JOSE(I.E. MAN BEL": ["35"],
                "I.E.RAMON MUNERA LOPERA": ["7"],
                "IE BELLO ORIENTE": ["3"],
                "IE JOSE ROBERTO VASQUEZ": ["1"],
                "I.E. JOSE ANTONIO GALAN": ["33"],
                "I.E. HERNAN TORO AGUDELO": ["34"],
                "SEC ESC SUSANA DIAZ(IE RODRIGO L BONILLA": ["23"],
                "IE SAN JUAN BAUTISTA DE LA SALLE": ["3"]
            },
            "ARANJUEZ": {
                "COL AGUSTINIANO DE SAN NICOLA": ["43"],
                "I.E. MONSEÑOR FCO. CRISTOBAL T": ["36"],
                "I.E. GILBERTO ALZATE AVENDAÑO": ["37"],
                "I.E. CAMPO VALDES": ["25"],
                "I.E.SAN JUAN BOSCO": ["5"],
                "I.E. ALFONSO MORA NARANJO": ["33"],
                "I.E. JOSE MARIA BRAVO MARQUEZ": ["20"],
                "I.E. FRANCISCO MIRANDA": ["51"],
                "I.E. JAVIERA LONDOÑO": ["32"],
                "I.E. EL BOSQUE": ["10"],
                "IE FRANCISCO MIRANDA SD JULIO ARBOLEDA": ["3"]
            },
            "CASTILLA": {
                "I.E. JULIO CESAR GARCIA": ["34"],
                "SEC. ESC. EDUARDO URIBE BOTERO": ["30"],
                "I.E. PBRO. ANTONIO JOSE BERNAL": ["51"],
                "I.E.SEBASTIAN DE BELALCAZAR": ["6"],
                "IE TRICENTENARIO": ["23"],
                "SEC ESC TOSCANA": ["3"],
                "I.E. MARIA MONTESSORI": ["32"],
                "I.E. MAESTRO ARENAS BETANCUR": ["39"],
                "I.E. DINAMARCA": ["8"],
                "INST. EDU REPUBLICA DE URUGUA": ["39"],
                "IE FELIX DE BEDOUT MORENO": ["5"]
            },
            "DOCE DE OCTUBRE": {
                "I.E. CIUDADELA LAS AMERICAS": ["30"],
                "COL VIDA Y PAZ PROGRESAR UNID": ["24"],
                "SEC. ESC. LEON DE GREIFF": ["23"],
                "I.E. DOCE DE OCTUBRE": ["24"],
                "CASD JOSE MARIA ESPINOSA PRIETO": ["4"],
                "I.E. EL TRIUNFO SANTA TERESA": ["4"],
                "IE SANTA JUANA DE LESTONACC": ["19"],
                "IE JESUS MARIA VALLE JARAMILLO": ["4"],
                "I.E.MAESTRO FERNANDO BOTERO": ["34"],
                "I.E.ALFREDO COCK ARANGO": ["32"],
                "SEC.ESC.SAN MARTIN DE PORRES": ["20"],
                "I.E. KENNEDY": ["36"],
                "SEC.CONCENTRACION EDUC.KENNEDY": ["19"],
                "I.E.JORGE ELIECER GAITAN(PPAL)": ["6"],
                "SE. ESC. PEDREGAL": ["8"],
                "I.E.LA ESPERANZA": ["6"]
            },
            "ROBLEDO": {
                "I.E. SAN VICENTE DE PAUL": ["33"],
                "SEC.ESC. EL DIAMANTE": ["32"],
                "I.E.EL DIAMANTE (SEDE BTO)": ["17"],
                "I.E.FE Y ALEGRIA VILLA DE LA C": ["40"],
                "I.E.FE Y ALEGRIA SAN JOSE": ["10"],
                "TECNOLOGICO DE ANTIOQUIA": ["18"],
                "IE JESUS REY": ["5"],
                "IE AURES": ["4"],
                "I.E.MON. GERARDO VALENCIA CAN": ["12"],
                "I.E. JORGE ROBLEDO": ["41"],
                "I.E.MARISCAL ROBLEDO": ["23"],
                "SEC.ESC. SANTA MARGARITA": ["20"],
                "COLEGIO FERRINI": ["15"],
                "I.E.CAMILO MORA CARRASQUILLA": ["6"],
                "COL MAYOR DE ANTIOQUIA": ["3"],
                "IE BARRIO OLAYA HERRERA": ["2"]
            },
            "VILLA HERMOSA": {
                "I.E. JUAN DE DIOS CARVAJAL": ["32"],
                "I.E. JUAN DE LA CRUZ POSADA": ["14"],
                "I.E.JOSE CELESTINO MUTIS": ["8"],
                "INST.METROPOLITANO (I.T.M)": ["3"],
                "SEC.ESC.JULIA AGUDELO": ["66"],
                "SEC.ESC.NIÑO JESUS DE PRAGA": ["7"],
                "I.E.SOL DEL ORIENTE": ["6"],
                "IE LUIS CARLOS GALAN SARMIENTO PPAL": ["2"],
                "I.E. VILLA TURBAY": ["12"],
                "SEC.ESCUELA LAS ESTANCIAS": ["10"],
                "SEC.ESC.SOR MARIA LUISA COURB": ["25"],
                "I.E. SAN FRANCISCO DE ASIS": ["19"],
                "IE FELIX HENAO BOTERO": ["18"]
            },
            "BUENOS AIRES": {
                "I.E.GUADALUPANO LA SALLE": ["32"],
                "I.E. MERCEDITAS GOMEZ MARTINE": ["29"],
                "I.E. MANUEL JOSE CAICEDO": ["24"],
                "I.E. LA MILAGROSA": ["59"],
                "COLEGIO EUCARISTICO": ["4"],
                "SENA SD BUENOS AIRES": ["1"],
                "I.E. LORETO GABRIELA GOMEZ CA": ["19"],
                "INST.EDUCATIVA FEDERICO OZANA": ["44"],
                "ESCUELA NORMAL SUPERIOR ANT.": ["21"],
                "SEC. ESC. JOSE DE SAN MARTIN": ["30"],
                "SEC. ESC. JUAN CANCIO RESTREPO": ["1"]
            },
            "LA CANDELARIA": {
                "I.E. TULIO OSPINA": ["40"],
                "SEC.ESC.AGUSTIN NIETO CABALLE": ["9"],
                "COLEGIO SALESIANO EL SUFRAGIO": ["51"],
                "I.E. CEFA": ["43"],
                "I.E. HECTOR ABAD GOMEZ": ["26"],
                "IE JAVIER A LONDOÑO": ["3"],
                "I.T.M. (PRADO CENTRO)": ["3"],
                "CENTRO COMERCIAL SAN DIEGO": ["56"],
                "ALCALDIA MUNICIPAL (SOTANO)": ["41"],
                "SENA": ["19"],
                "UNIVERSIDAD CLARETIANA": ["3"]
            },
            "LAURELES": {
                "INSTITUTO JORGE ROBLEDO": ["27"],
                "INST.EDUC. MATER DEI": ["37"],
                "I.E. MARCO FIDEL SUAREZ": ["35"],
                "COLEGIO CALASANZ FEMENINO": ["16"],
                "COL SAN IGNACIO SD MAYORES": ["3"],
                "SEC. ESC. CARLOS OBANDO VELASCO": ["2"],
                "SEC.ESC. AGRUPACION COLOMBIA": ["39"],
                "I.E. LUCRECIO JARAMILLO VELEZ": ["56"],
                "COLEGIO BETLEHEMITAS": ["10"],
                "COL.SAN IGNACIO (SEC.INFANTIL)": ["6"],
                "UNIVERSIDAD ADVENTISTA": ["4"],
                "UNIVERSIDAD PONTIFICIA BOLIVARIANA": ["4"]
            },
            "LA AMERICA": {
                "SEC. ESC. SANTA LUCIA": ["37"],
                "I.E. CONCEJO DE MEDELLIN": ["66"],
                "INST EDUC. LA PIEDAD": ["30"],
                "I.E.SANTA ROSA DE LIMA": ["7"],
                "IE LOLA GONZALEZ": ["3"],
                "I.E. RAFAEL URIBE URIBE": ["32"],
                "SEC.ESC.RAFAEL URIBE URIBE": ["14"],
                "SEC. ESC. PEDRO DE CASTRO": ["44"],
                "I.E.FRANCISCO ANTONIO ZEA": ["10"],
                "I.E AMERICA": ["6"],
                "I.E.SAMUEL BARRIENTOS": ["3"],
                "LICEO SALAZAR Y HERRERA": ["4"]
            },
            "SAN JAVIER": {
                "I.E. BLANQUIZAL (EN ADMON) CR": ["14"],
                "SEC. ESC. REPUBLICA DE PANAMA": ["18"],
                "I.E JUAN XXIII": ["7"],
                "SEC. ESC. MONSEÑOR PERDOMO": ["36"],
                "SEC.ESC.PIO XII": ["28"],
                "I.E.STELLA VELEZ LONDOÑO": ["4"],
                "I.E.LA INDEPENDENCIA": ["44"],
                "SEC.ESC.EL SOCORRO": ["27"],
                "SEC.ESC.MIXTA BETANIA": ["26"],
                "I.E.EL CORAZON": ["6"],
                "I.E.EDUARDO SANTOS": ["6"],
                "I.E.CARLOS VIECO": ["11"],
                "SEDE AMOR AL NIÑO": ["3"]
            },
            "EL POBLADO": {
                "COL.SANTA MARIA DEL ROSARIO": ["26"],
                "COL.MARYMOUNT": ["15"],
                "COLEGIO PALERMO DE SAN JOSE": ["43"],
                "COLEGIO SAN LUCAS": ["2"],
                "ESC GUILLERMO ECHAVARRIA MISAS": ["3"],
                "POLITECNICO JAIME ISAZA CADAVI": ["26"],
                "I.E.INEM JOSE FELIX DE RESTREP": ["35"],
                "UNIVERSIDAD EAFIT": ["53"],
                "COL DE LA CIA DE MARIA LA ENSE": ["6"],
                "SAN JOSE DE LAS VEGAS": ["3"]
            },
            "GUAYABAL": {
                "SEC.ESC.SANTISIMA TRINIDAD": ["21"],
                "I.E.BENJAMIN HERRERA": ["21"],
                "I.E.CRISTO REY": ["38"],
                "SECCION ESC REPUBLICA DE COSTA RICA": ["25"],
                "SEC.ESC.LA COLINA": ["14"],
                "I.E. LA SALLE CAMPO AMOR": ["11"],
                "SEC ESC CRISTO REY APOLO": ["2"]
            },
            "BELEN": {
                "I.E. FATIMA NUTIBARA": ["27"],
                "ESC.SOFIA OSPINA DE NAVARRO": ["22"],
                "I.E.JUAN MARIA CESPEDES": ["60"],
                "I.E. GUILLERMO VALENCIA": ["26"],
                "UNID.DEPORTIVA ANDRES ESCOBAR": ["6"],
                "LICEO SAN RAFAEL": ["15"],
                "COLEGIO SAN JUAN BOSCO": ["2"],
                "SEC.ESC.JACKELINE KENNEDY": ["20"],
                "I.E.JOSE MARIA BERNAL": ["28"],
                "INST.SAN CARLOS DE LA SALLE": ["41"],
                "I.E.ALCALDIA DE MEDELLIN": ["39"],
                "COLEGIO PADRE MANYANET": ["14"],
                "I.E.CAMPILLAS DEL ROSARIO": ["6"],
                "IE ANTONIO RICAURTE": ["3"],
                "I.E.RAMON GIRALDO CEBALLOS": ["37"],
                "UNIVERSIDAD DE MEDELLIN": ["52"],
                "I.E HORACIO MUÑOZ SUESCUN": ["27"],
                "I.E.REPUBLICA DE VENEZUELA": ["24"],
                "I. E. SAN ROBERTO BELARMINO": ["5"],
                "INSTITUTO PEDRO JUSTO BERRIO": ["1"]
            },
            "ALTAVISTA": {
                "I.E. DEBORA ARANGO PEREZ": ["22"]
            },
            "18CORR.  SAN ANTONIO DE PRADO": {
                "IE FE Y ALEGRIA EL LIMONAR": ["23"],
                "IE SAN ANTONIO DE PRADO": ["55"],
                "I.E.MANUEL DE J.BETANCUR": ["48"],
                "IE MONSEÑOR VICTOR WIEDEMANN": ["3"]
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
                "IE PRESBITERO JUAN J. ESCOBAR": ["3"],
                "IE LOMA HERMOSA": ["4"]
            }
        },
        "APARTADO": {
            "BERNARDO JARAMILLO": {
                "I.E ALFONSO LOPEZ": ["23"],
                "I.E. POLICARPA SALAVARRIETA": ["23"],
                "I. E. LA PAZ": ["13"],
                "\"I.E LA PAZ \"\"S 20 DE ENERO\"\"\"": ["5"]
            },
            "OCHO DE FEBRERO": {
                "I. E. SAN FRANCISCO DE ASIS": ["25"],
                "I. E. SAN PEDRO CLAVER": ["21"],
                "HOGAR INFANTIL LOS GIRASOLES": ["12"],
                "I. E. SANTA MARIA LA ANTIGUA": ["3"]
            },
            "PUEBLO NUEVO": {
                "I.E. HERACLIO MENA PADILLA": ["23"],
                "COLEGIO ADVENTISTA": ["15"],
                "I.E CADENA LAS PLAYAS": ["2"]
            },
            "JOSE JOAQUIN VELEZ": {
                "I. E. CAMPO ALEGRE": ["5"],
                "IE MADRE LAURA": ["14"],
                "COL COOPERATIVO": ["18"],
                "IE JOSE JOAQUIN VELEZ": ["24"],
                "I.E JOSE CELESTINO MUTIS": ["11"]
            },
            "CHURIDO PUEBLO": {
                "CHURIDO": ["4"]
            },
            "PUERTO GIRON": {
                "PUERTO GIRON": ["2"]
            },
            "07CORR SAN JOSE DE APARTADO": {
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
                "I.E. ALBERTO DIAZ MUÑOZ": ["16"],
                "I.E ALB. DIAZ MUÑOZ SECC.PRAD": ["7"],
                "CENTRO EDUCAT RAQUEL JARAMILLO": ["22"],
                "IE BARRIO PARIS": ["11"]
            },
            "MADERA": {
                "I.E. ATANASIO GIRARDOT": ["45"],
                "COL. PARROQ. SAN FCO DE ASIS": ["25"],
                "IE SUAREZ DE LA PRESENTACION": ["32"],
                "COL SAN BUENAVENTURA": ["20"]
            },
            "SANTA ANA": {
                "I.E. TOMAS CADAVID RESTREPO": ["25"],
                "COLEGIO LA SALLE": ["38"]
            },
            "LA CUMBRE": {
                "I.E. FERNANDO VELEZ": ["39"],
                "I.E. LA PRIMAVERA": ["20"],
                "I.E. NAZARETH": ["21"],
                "I.E. CARLOS PERES SEDE ROSALIA": ["3"]
            },
            "SUAREZ": {
                "INST. UNIVERSITARIA MARCO FIDEL SUAREZ": ["27"],
                "COL JESUS DE LA BUENA ESPERANZ": ["45"],
                "IE SAGRADO CORAZON": ["19"],
                "IE JORGE ELIECER GAITAN": ["50"],
                "I.E. SANTA CATALINA": ["23"],
                "I.E. LA MILAGROSA": ["22"]
            },
            "BELLAVISTA": {
                "I.E. HERNAN VILLA BAENA": ["35"],
                "IE VILLA DEL SOL SEC 1": ["22"],
                "IE VILLA DEL SOL SEC 2": ["3"]
            },
            "ALTOS DE NIQUIA": {
                "I.E. GILBERTO ECHEVERRI MEJIA": ["19"],
                "I.E. CIAL ANTONIO ROLDAN": ["21"],
                "IE JOSEFA CAMPOS": ["16"]
            },
            "NIQUIA": {
                "I.E. CONCEJO DE BELLO": ["25"],
                "I.E FE Y ALEGRIA NUEVA GENERAC": ["23"],
                "COL NUESTRA SEÑORA DE CHIQUINQ": ["20"],
                "BETSABE ESPINAL": ["15"]
            },
            "GUASIMALITO": {
                "I.E. NAVARRA": ["6"],
                "IE NAVARRA SD EL TREBOL": ["6"]
            },
            "FONTIDUEÑO": {
                "I.E. LAS VEGAS": ["13"],
                "I.E FONTIDUEÑO JAIME ARANGO R": ["20"]
            },
            "ZAMORA": {
                "I.E FEDERICO SIERRA ARANGO": ["33"],
                "I.E. LA GABRIELA": ["19"],
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
            "01CORR SANTA RITA DE SINITAVE": {
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
            "01LIBONO MEJIA": {
                "I.E. JOSEFINA MUÑOZ GONZALEZ": ["26"],
                "I.E. JULIO SANIN": ["25"],
                "COLISEO RUBEN DARIO QUINTERO": ["15"],
                "ESC JUAN MANUEL GONZALEZ": ["13"],
                "ESCUELA UNIDA": ["17"],
                "COL QUEBRADA ARRIBA": ["12"],
                "COLISEO ALTO DEL MEDIO": ["13"]
            },
            "02SAN ANTONIO": {
                "CONC EDU SAN ANTONIO": ["24"],
                "IT SANTIAGO DE ARMA": ["18"],
                "IE EL TRIANGULO": ["1"]
            },
            "03MONS. ALFONOS URIBE JARAMILLO": {
                "ESC CUATRO ESQUINAS": ["17"],
                "ESC CARMELA BIANCHETTI": ["9"]
            },
            "04EL PORVENIR": {
                "ESC EDUARDO URIBE BOTERO": ["18"],
                "LIC CONSEJO MUNICIPAL": ["21"],
                "ESC PASCUALA MUÑOZ": ["11"]
            },
            "DEL SUR": {
                "DEL SUR": ["18"],
                "COL. CABECERAS (CORREG. DEL SUR)": ["1"]
            },
            "06CTO JOSE MARIA CORDOVA M": {
                "JOSE MARIA CORDOVA MUÑOZ": ["7"],
                "AUDITORIO AEROPUERTO CORR. J.M.C.": ["9"]
            },
            "07CTO CENTRO CASIMIRO GARCIA": {
                "CENTRO": ["3"],
                "ESC SAN JOSE DE LAS CUCHILLAS": ["2"]
            },
            "08CTO NORTE NESTOR E. SANINT ALV": {
                "NORTE": ["2"],
                "IE ANA GOMEZ DE SIERRA": ["10"]
            }
        },
        "SONSON": {
            "01CORR ALTO DE SABANAS": {
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
            "06CORR RIO VERDE DE LOS HENAOS": {
                "EL SALADO": ["1"],
                "LA TORRE": ["1"],
                "RIOVERDE DE LOS HENAOS": ["1"]
            },
            "07CORR JERUSALEN LA FLORIDA": {
                "JERUSALEN LA FLORIDA": ["2"]
            },
            "08CORR RIO VERDE DE LOS MONTES": {
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
        "ABRIAQUÍ": {},
        "ALEJANDRÍA": {},
        "AMAGÁ": {},
        "AMALFI": {},
        "ANDES": {},
        "ANGELÓPOLIS": {},
        "ANGOSTURA": {},
        "ANORÍ": {},
        "ANZÁ": {},
        "APARTADÓ": {},
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
        "EBÉJICO": {},
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
        "GÓMEZ PLATA": {},
        "GUADALUPE": {},
        "GUARNE": {},
        "GUATAPÉ": {},
        "HELICONIA": {},
        "HISPANIA": {},
        "ITAGÜÍ": {},
        "JARDÍN": {},
        "JERICÓ": {},
        "LA ESTRELLA": {},
        "LA PINTADA": {},
        "LA UNIÓN": {},
        "LIBORINA": {},
        "MACEO": {},
        "MARINILLA": {},
        "MEDELLÍN": {},
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
        "SONSÓN": {},
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
        "VALPARAÍSO": {},
        "VEGACHÍ": {},
        "VENECIA": {},
        "VIGÍA DEL FUERTE": {},
        "YALÍ": {},
        "YARUMAL": {},
        "YOLOMBÓ": {},
        "YONDÓ": {},
        "ZARAGOZA": {}
    },
    "ATLANTICO": {
        "BARRANQUILLA": {
            "SUR OCCIDENTE": {
                "INS.DIS.DESAR.INT.NVA GRANADA": ["34"],
                "IDETH SEDE PRINCIPAL SEDE II": ["15"],
                "COL.DTAL OLAYA(ANT C.E.B.108)": ["15"],
                "COL HILDA MUÑOZ": ["27"],
                "COLEGIO JORGE NICOLAS ABELLO": ["58"],
                "IDETH SEDE I PRIMARIA": ["25"],
                "INT.EDUCATIVO DTAL.LOS PINOS": ["19"],
                "COLEGIO NAZARETH LUCERO": ["10"],
                "JORGE NICOLAS ABELLO SD 2": ["2"],
                "IE DISTRITAL LA MERCED": ["22"],
                "COL. DTAL.JOSE EUSEBIO CARO": ["41"],
                "COL.CAMILO TORRES": ["5"],
                "COL. DTAL. JUAN JOSE RONDON": ["34"],
                "I.E.D. JAVIER SANCHEZ": ["24"],
                "COL DISTRITAL MARIA INMACULAD": ["36"],
                "ES.NORMAL SUPERIOR LA HACIENDA": ["39"],
                "COLEGIO AMERICANO": ["8"],
                "C.DTAL.EL SILENCIO(ANT CEB 050": ["22"],
                "I.E.D.INOCENCIO CHINCA": ["16"],
                "COL.SOFIA CAMARGO DE LLERAS(B": ["35"],
                "COL.SOFIA CAMARGO DE LLERAS(P)": ["20"],
                "C.DIST.SARIT ARTETA DE VASQUEZ": ["38"],
                "INST.LAS MERCEDES COL.SAN PABL": ["29"],
                "COLEGIO CRISTIANO PENIEL": ["24"],
                "I.E.D.EL PUEBLO": ["31"],
                "COL ALBERTO ASSA": ["14"],
                "CENTRO DE EDUCACION BASICA C.E.B.161": ["3"],
                "I.E.D.SONIA AHUMADA": ["25"],
                "I.E.MUNDO BOLIVARIANO": ["33"],
                "I.C.LAS MALVINAS": ["32"],
                "I.E.D. ZAPATA OLIVELLA": ["29"],
                "JUAN ACOSTA SOLERA": ["36"],
                "Col.Tec.San Carlos Borromeo": ["15"],
                "COL.MANUEL ELKIN PATARROYO SD 2": ["20"],
                "COL MANUEL ELKIN PATARROYO SD 1": ["2"],
                "Col.Jose Raimundo Sojo (mega)": ["4"],
                "E.D.EVARISTO SOURDIS SEDE 1": ["21"],
                "E.D.EVARISTO SOURDIS SEDE 2": ["22"],
                "I.E.D.JOSE MARIA VELAZ SEDE 2": ["35"],
                "COL.DTAL.LA SALLE": ["29"],
                "JUAN MINA": ["16"]
            },
            "METROPOLITANA": {
                "INS.TEC.DIST.CRUZADA SOCIAL": ["29"],
                "INST EDUC DIST SIMON BOLIVAR": ["22"],
                "C.E.B.MEDIA No.103": ["24"],
                "COL DIST DE B/QUILLA GABRIEL GARCIA M": ["35"],
                "I.E.D.LA VICTORIA": ["9"],
                "Nuevo Col. tec. del Santuario": ["43"],
                "I.D.E. COSTA CARIBE": ["24"],
                "JOSE CONSUEGRA HIGGINS": ["38"],
                "I.D.E.STA.MARIA(MEGACOLEGIO)": ["30"],
                "COL.DIST.DE BQUILLA SAN LUIS": ["39"],
                "I.E.D.LAS AMERICAS": ["19"],
                "Colegio Golda Meir": ["15"],
                "Megacolegio Las cayenas": ["47"],
                "COL.COMUNITA.DTAL.PABLO NERUDA": ["44"],
                "I.D.E.COL.CIUD.ESTUD.(ANT 186)": ["10"],
                "I.E.D.Reuven Feuerstein": ["5"],
                "COL.MIGUEL ANGEL BUILES BLQ1": ["34"],
                "COL.MIGUEL ANGEL BUILES BLQ2": ["18"],
                "I.E.D.CIUDADELA 20 DE JULIO": ["50"],
                "MEGACOLEGIO CIUDADELA 20 JULIO": ["61"]
            },
            "SUR ORIENTE": {
                "IE DISTRITAL PAULO FREIRE": ["28"],
                "COL.LA PRESENTACION": ["31"],
                "CENTRO SOCIAL DON BOSCO": ["51"],
                "COL.TEC.DISTR.DE REBOLO": ["6"],
                "CENTRO SOCIAL DON BOSCO SD 2": ["2"],
                "SENA SAN JOSE MULTIPLE BILINGUE": ["21"],
                "COL SAN JOSE SD 1": ["25"],
                "COL.DTAL.SAN GABRIEL SEDE No1": ["19"],
                "I.E.D.LA UNION SEDE 2": ["3"],
                "I.E.D DES HUMANO MARIA CANO": ["32"],
                "COL.OCTAVIO PAZ": ["29"],
                "I.E.D.LOS LAURELES": ["6"],
                "I.E.D.MARCO FIDEL SUAREZ": ["32"],
                "I.E.D.NTRA.SRA. DE LAS NIEVES": ["17"],
                "COLEGIO SANTA TERESITA": ["26"],
                "I.E.D.CALIXTO ALVAREZ": ["28"],
                "IED JOSE MARTI": ["33"],
                "INT.DTAL.CASTILLO LA ALBORAYA": ["37"],
                "\"COL.DTAL.BUENOS AIRES\"\"CODIBA\"\"\"": ["4"],
                "COL.DTAL.MARIA AUXILIADORA": ["27"],
                "COLEGIO DE COMFAMILIAR": ["24"],
                "INST.ELENA DE CHAUVIN": ["26"],
                "INSTITUTO PRESBITERIANO NAZARETH": ["24"],
                "COL.LAS NIEVES SEDE 2": ["24"],
                "IED SAN MIGUEL ARCANGEL": ["27"],
                "I.E.D.Barrio Simon Bolivar.Bto": ["27"],
                "I.E.D.LUZ DEL CARIBE": ["16"],
                "COL.DISTRITAL JORGE ISAAC": ["21"],
                "I.DIST.SIMON BOLIVAR PRIMARIA": ["20"]
            },
            "NORTE CENTRO HI": {
                "COL.MAYOR.BQUILLA Y DEL CARIBE": ["30"],
                "I.E.D.VILLANUEVA": ["10"],
                "E.NOR.SUPERIOR DEL DTO BQUILLA": ["15"],
                "INST.LA SALLE": ["29"],
                "INST. TEC.DE COMERCIO DE BARRANQUILLA": ["8"],
                "IT DE COMERCIO DE BQUILLA SD 2": ["1"],
                "I.E.D. NUESTRA SEÑORA DEL ROSA": ["26"],
                "IU ITSA SEDE BQUILLA": ["25"],
                "INST. TEC. NACIONAL DE COMERCI": ["25"],
                "ANTONIO JOSE DE SUCRE SEDE 2": ["22"],
                "INDEPORTES": ["2"],
                "I.E.D.PESTALOZZI": ["19"],
                "NUEVO COLEGIO DEL PRADO": ["36"],
                "IED LA CONCEPCION": ["2"],
                "COL.NTRA.SEÑORA DE NAZARETH": ["18"],
                "COL.NTRA.SEÑORA DE LOURDES": ["24"],
                "COL.BARRANQUILLA CODEBA": ["36"],
                "COL.DISTRITAL BOSTON": ["8"],
                "COL.SAGRADA FAMILIA": ["23"],
                "COL.MILITAR ACOLSURE": ["35"],
                "SEM.CONCILIAR SAN LUIS BELTRAN": ["26"],
                "COL.INST.ARIANO": ["4"],
                "COL.JORGE ISAAC": ["12"],
                "COL.HEBREO UNION": ["47"],
                "CORPORACION EL LITORAL SD II": ["6"]
            },
            "RIOMAR": {
                "COL.LICEO CERVANTES": ["43"],
                "COL.EL BUEN CONCEJO": ["23"],
                "COL.LINDON B JOHNSON SCHOOL": ["31"],
                "UNIVERSIDAD AUTONOMA DEL CARIBE": ["3"],
                "INSTITUTO LAS AMERICAS": ["18"],
                "I.E.D.SAN SALVADOR (INEDISSA)": ["14"],
                "C.E.D.LIBERTADOR SIMON BOLIVAR": ["24"],
                "IE DISTRITAL IED SAN SALVADOR SD C": ["2"],
                "COL.LA MEDALLA MILAGROSA": ["16"],
                "COL.BIFI LA SALLE": ["45"],
                "COL.LA ENSEÑANZA": ["28"],
                "LA PLAYA": ["38"]
            }
        }
    },
    "BOLIVAR": {
        "CARTAGENA": {
            "HISTORICA Y DEL CARIBE": {
                "CENTRO COMERCIAL BOCAGRANDE": ["43"],
                "UNIV. TECNOLG. DE BOLIVAR - MA": ["43"],
                "LUDOTECA PARQUE CENTENARIO": ["3"],
                "COL. EUCARÍSTICO DE SANTA TERESA": ["7"],
                "COLEGIO DE LA ESPERANZA": ["29"],
                "COLEGIO NAVAL DE CRESPO": ["40"],
                "COLEGIO EL CARMELO": ["16"],
                "COLEGIO BERVELLY HILLS": ["5"],
                "CLUB UNIVERSITARIO DE PROFESIONALES": ["3"],
                "COLEGIO LICEO BOLIVAR": ["31"],
                "IE STA MARIA SEDE SAGRADO CORAZON": ["31"],
                "I.E.CORAZON DE MARIA": ["17"],
                "IE CORAZON DE MARIA S S J CLAV": ["14"],
                "I.E. SANTA MARIA": ["6"],
                "EUCARIST. NTRA SRA DEL CARMEN DE TORICES": ["41"],
                "COLEGIO JOSE DE LA VEGA": ["44"],
                "IE HER. ANTONIO RAMOS DE LA SALLE": ["6"],
                "INST. ED. ANA MARIA VELEZ DE TRUJILLO": ["8"],
                "C.ECON. PIEDRA DE BOL UNIV. C/GENA": ["39"],
                "COLEGIO COMFENALCO": ["34"],
                "INST. ED. MADRE LAURA": ["9"],
                "SENA 4 VIENTOS": ["6"],
                "IE NUEVO BOSQUE": ["55"],
                "COL ALBERTO ELIAS FERNANDEZ": ["40"],
                "I.E NUEVO BOSQUE SEDE JOSE MARIA CORDOBA": ["11"],
                "INST. ED. FERNANDO DE LA VEGA": ["6"],
                "E. NORMAL SUPERIOR DE CARTAGENA D INDIAS": ["8"],
                "IE SAN JUAN DE DAMASCO": ["42"],
                "IE OLGA GONZALEZ ARRAUT": ["35"],
                "IE MANUELA BELTRAN - SED HIJOS": ["12"],
                "SEMINARIO CARTAGENA": ["5"],
                "UNIVERSIDAD ANTONIO NARIÑO": ["6"],
                "UNIVERSIDAD DE CARTAGENA C.S.": ["40"],
                "COL SALESIANOS SAN PEDRO CLAVE": ["18"],
                "IE ANTONIA SANTOS": ["41"],
                "UNIV. DE CARTAGENA CLAUSTRO LA MERCED": ["2"],
                "FUNDACION UNIVERSITARIA LOS LIBERTADORES": ["10"],
                "COL.MAYOR INST. TECNOLOGICA": ["35"],
                "ESCUELA BELLAS ARTES": ["18"],
                "ESCUELAS PROFESIONALES SALESIANAS": ["15"],
                "SANTA CRUZ DEL ISLOTE": ["2"],
                "BARU": ["6"],
                "BOCACHICA": ["16"],
                "CAÑO DE LORO": ["6"],
                "ISLA FUERTE": ["3"],
                "ISLAS DEL ROSARIO": ["2"],
                "SANTA ANA": ["12"],
                "TIERRABOMBA": ["8"]
            },
            "LA VIRGEN Y TURISTICA": {
                "IE FE Y ALEGRIA LAS GAVIOTAS": ["55"],
                "IE LAS GAVIOTAS SEDE MOISES GO": ["13"],
                "I.E. LAS GAVIOTAS SEDE EL NIÑO JESUS": ["11"],
                "CENTRO DE ENSEÑANZA HIJOS DE BOLIVAR": ["8"],
                "IE FOCO ROJO": ["43"],
                "COLEGIO ALMIRANTE COLON S. OLAYA": ["26"],
                "I.E. PLAYAS DE ACAPULCO": ["17"],
                "IE. NUESTRA SEÑORA PERPETUO SOCORRO": ["3"],
                "IE FRANCISCO DE PAULA SANTANDE": ["35"],
                "IE MARIA REINA": ["26"],
                "ESCUELA CIUDAD DE TUNJA": ["37"],
                "I.E. CORAZON DE MARIA - LAZARO MARTINEZ": ["6"],
                "I.E. ANTONIO NARIÑO": ["9"],
                "I.E. PEDRO HEREDIA": ["8"],
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
                "NUESTRA SEÑORA DEL CARMEN": ["33"],
                "IE FULGENCIO LEQUERICA VELEZ-  ECUADOR": ["9"],
                "FUND. UNIV. COLOMBO INTERNACIONAL": ["6"],
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
                "IE JOSE MANUEL R-JARDIN INF  CARACOLES": ["7"],
                "IE 20 DE JULIO": ["32"],
                "IE BERTHA GEDEON DE BALADI": ["32"],
                "COLEGIO ALMIRANTE COLON  VISTA HERMOSA": ["6"],
                "IE LUIS CARLOS LOPEZ": ["43"],
                "IE TERNERA": ["33"],
                "IE SOLEDAD ACOSTA DE SAMPER": ["4"],
                "UNIVERSIDAD SAN BUENAVENTURA": ["15"],
                "COL FE Y ALEGRIA EL PROGRESO": ["33"],
                "IE SAN FRANCISCO ASIS - HIJO DE LOS AGRI": ["25"],
                "CORPORACION MINUTO DE DIOS": ["4"],
                "IE POLICARPA SALAVARRIETA": ["3"],
                "IE MERCEDES ABREGO": ["62"],
                "COL SUEÑOS Y OPORTUNIDADES JES": ["34"],
                "IE MERCEDES ABREGO SEDE MEDELLIN": ["12"],
                "I.E. CIUDADELA 2000": ["6"],
                "I.E. SALVADOR MANDELA": ["8"],
                "I.E. ROSEDAL": ["8"],
                "IE JHON F KENNEDY": ["47"],
                "INST FEMENINO PROMOCION SOCIAL": ["47"],
                "I.E. NUESTRA SEÑORA DE LA CONSOLATA": ["6"],
                "I.E. JUAN JOSE NIETO": ["10"],
                "COLEGIO COMFAMILIAR": ["37"],
                "ESC ANA MARIA PEREZ OTERO": ["44"],
                "IE PROM SOCIAL DE C/GENA SD LA CONSOLATA": ["5"],
                "IE AMBIENTALISTA CARTAGENA DE INDIAS": ["10"],
                "IE SEDE EMILIANO ALCALA ROMERO": ["3"],
                "PASACABALLOS": ["29"],
                "PASACABALLOS - MEMBRILLAL": ["3"]
            }
        },
        "ARJONA": {
            "05CORR. PUERTO BADEL CAÑO SALADO": {
                "PUERTO BADEL (CAÑO SALADO)": ["4"]
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
            "24 PIÑALITO": {
                "PIÑALITO": ["4"]
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
            "PUERTO NARIÑO": {
                "PUERTO NARIÑO": ["1"]
            },
            "ROMA": {
                "ROMA": ["1"]
            },
            "SAN ANTOÑITO": {
                "SAN ANTOÑITO": ["1"]
            },
            "32CORRE. SAN JOSE DE LAS MARTAS": {
                "SAN JOSE DE LAS MARTAS": ["2"]
            },
            "33CORRE. SAN RAFAEL DE CORTINA": {
                "SAN RAFAEL DE CORTINA": ["3"]
            },
            "34CORRE. SAN SEBASTIAN DE BUENAV": {
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
            "07 CAÑAVERAL": {
                "CAÑAVERAL": ["7"]
            },
            "08 CORREG SAN JOSE DE CHIQUITO": {
                "CHIQUITO": ["1"]
            }
        }
    },
    "BOYACA": {
        "CAMPOHERMOSO": {
            "01LOS CEDROS": {
                "LOS CEDROS": ["3"]
            }
        },
        "PAIPA": {
            "01CORREGIMIENTIO PALERMO": {
                "PALERMO": ["3"]
            }
        },
        "PUERTO BOYACA": {
            "VASCONIA": {
                "PUERTO PALAGUA": ["4"],
                "CENTRO CALDERON": ["3"],
                "VASCONIA (PUERTO SERVIEZ)": ["5"]
            },
            "GUANEGRO": {
                "GUANEGRO": ["2"]
            },
            "PTO GUTIERREZ": {
                "PUERTO GUTIERREZ": ["1"],
                "KILOMETRO 25": ["1"]
            },
            "PUERTO PINZON": {
                "PTO. PINZON (POZO BOYACA No 2": ["3"]
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
                "I.E.CHIPRE": ["15"],
                "I.E. CHIPRE SEDE B": ["26"],
                "I.E. ADOLFO HOYOS OCAMPO": ["6"],
                "COL.FILIPENSE NTRA SRA LOURDE": ["10"]
            },
            "SAN JOSE": {
                "I.E.SAN AGUSTIN": ["13"],
                "I.E. INSTITUTO MANIZALES": ["24"],
                "I.E.DIVINA PROVIDENCIA": ["9"]
            },
            "CUMANDAY": {
                "I.E. MARCO FIDEL SUAREZ": ["21"],
                "EDIFICIO INDUS.LICOR.DE CALDA": ["20"],
                "FAC. DE BELLAS ARTES(U CALDAS": ["16"],
                "I.E. GRAN COLOMBIA": ["16"],
                "LICEO ARQUIDIO. DE NUESTRA SR": ["16"],
                "I.E. ISABEL LA CATOLICA": ["33"],
                "I.E. INSTITUTO UNIVER. DE CAL": ["17"],
                "I.E.T.FRANCISCO JOSE DE CALDAS": ["14"]
            },
            "LA ESTACION": {
                "I.E. LA ASUNCION SEDE A": ["15"],
                "I.E. SAN JORGE": ["28"],
                "FAC.CIENCIAS PARA LA SALUD U.": ["22"]
            },
            "CIUDADELA DEL NORTE": {
                "I.E.FE Y ALEGRIA LA PAZ SEDE": ["35"],
                "IE SINAI SEDE B": ["22"],
                "IE LA ASUNCIÓN SEDE C": ["21"],
                "I.E. LICEO MIXTO SINAI SEDE A": ["18"],
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
                "UNIVERSIDAD CATOLICA DE MANIZA": ["18"],
                "FAC. DE CIENCIAS JUR Y SOC U": ["19"],
                "I.E.NACIONAL AUX.DE ENFERMERI": ["24"],
                "I.E.NORMAL SUPERIOR DE MANIZA": ["11"]
            },
            "UNIVERSITARIA": {
                "I.E. ATANASIO GIRARDOT": ["19"],
                "I.E.EUGENIO PACELLI-SEDE PRIN": ["20"],
                "I.E. MALABAR SEDE A": ["16"],
                "I.E.ARANJUEZ SEDE A": ["13"],
                "I.E. MALABAR SEDE B": ["6"]
            },
            "LA FUENTE": {
                "I.E.ANDRES BELLO": ["19"],
                "I.E. PERPETUO SOCORRO": ["8"],
                "I.E. LEONARDO DAVINCI SEDE A": ["6"],
                "I.E. LEONARDO DAVINCI": ["28"],
                "I.E.LATINOAMERICANO SEDE B": ["11"]
            },
            "LA MACARENA": {
                "COL.MAYOR DE NUESTRA SEÑORA": ["27"],
                "I.E. LEON DE GREIFF": ["21"],
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
        "BELALCÁZAR": {},
        "CHINCHINÁ": {},
        "LA DORADA": {},
        "LA MERCED": {},
        "MARULANDA": {},
        "NEIRA": {},
        "NORCASIA": {},
        "PÁCORA": {},
        "PALESTINA": {},
        "PENSILVANIA": {},
        "RIOSUCIO": {},
        "RISARALDA": {},
        "SAMANÁ": {},
        "SAN JOSÉ": {},
        "SUPÍA": {},
        "VICTORIA": {},
        "VILLAMARÍA": {},
        "VITERBO": {}
    },
    "CESAR": {
        "VALLEDUPAR": {
            "04  COMUNA 4": {
                "COL. JOSE EUGENIO MARTINEZ": ["45"],
                "UNIV. POPULAR DEL CESAR(SD SABANAS)": ["6"],
                "COL. NACIONALIZADO UPAR": ["37"],
                "INST. TEC. VILLA CORELCA": ["16"],
                "ESCUELA MIXTA NO 4": ["21"],
                "I.E. CONSUELO ARAUJO NOGUERA": ["25"]
            },
            "07EL ALTO DE LA VUELTA": {
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
        "AGUSTÍN CODAZZI": {},
        "ASTREA": {},
        "BECERRIL": {},
        "BOSCONIA": {},
        "CHIMICHAGUA": {},
        "CHIRIGUANÁ": {},
        "CURUMANÍ": {},
        "EL COPEY": {},
        "EL PASO": {},
        "GAMARRA": {},
        "GONZÁLEZ": {},
        "LA GLORIA (CESAR)": {},
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
    "CORDOBA": {
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
            "13CORREG 4 CAÑO VIEJO PALOTAL": {
                "CAÑO VIEJO PALOTAL": ["7"]
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
                "PARROQUIA NTRA.SRA.DE BELEN": ["20"],
                "COLEGIO SANTANDER": ["22"]
            },
            "SUR ORIENTAL": {
                "BOCHICA (LA TRINIDAD)": ["9"]
            },
            "OCCIDENTAL": {
                "CUCHARAL": ["12"]
            },
            "SUR OCCIDENTAL": {
                "EL TRIUNFO (BOQUERON)": ["3"],
                "LA PUERTA (CHINAUTA)": ["11"]
            }
        },
        "GIRARDOT": {
            "01CENTRO": {
                "COLEGIO AMERICANO": ["28"],
                "COLEGIO LA PRESENTACION": ["17"],
                "CTRO EDUC ESCUELA ANEXA": ["15"]
            },
            "02SUR": {
                "I.E. NUEVO HORIZONTE": ["28"],
                "LICEO LOS ANDES": ["6"]
            },
            "03OCCIDENTE": {
                "SEDE FRANCISCO J DE CALDAS": ["11"],
                "CTRO EDU ANTONIO NARIÑO": ["14"],
                "COL MAYOR MARTHA CATALINA": ["19"]
            },
            "04NORTE": {
                "ESC. NORMAL SUPERIOR MARIA AUX": ["15"],
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
        "CAPARRAPÍ": {},
        "CÁQUEZA": {},
        "CARMEN DE CARUPA": {},
        "CHAGUANÍ": {},
        "CHÍA": {},
        "CHIPAQUE": {},
        "CHOACHÍ": {},
        "CHOCONTÁ": {},
        "COGUA": {},
        "COTA": {},
        "CUCUNUBÁ": {},
        "EL COLEGIO": {},
        "EL PEÑÓN": {},
        "EL ROSAL": {},
        "FACATATIVÁ": {},
        "FÓMEQUE": {},
        "FOSCA": {},
        "FUNZA": {},
        "FÚQUENE": {},
        "FUSAGASUGÁ": {},
        "GACHALÁ": {},
        "GACHANCIPÁ": {},
        "GACHETÁ": {},
        "GAMA": {},
        "GRANADA": {},
        "GUACHETÁ": {},
        "GUASCA": {},
        "GUATAQUÍ": {},
        "GUATAVITA": {},
        "GUAYABAL DE SÍQUIMA": {},
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
        "PULÍ": {},
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
        "SESQUILÉ": {},
        "SIBATÉ": {},
        "SILVANIA": {},
        "SIMIJACA": {},
        "SOACHA": {},
        "SOPÓ": {},
        "SUBACHOQUE": {},
        "SUESCA": {},
        "SUPATÁ": {},
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
        "ÚTICA": {},
        "VENECIA": {},
        "VERGARA": {},
        "VIANÍ": {},
        "VILLAGÓMEZ": {},
        "VILLAPINZÓN": {},
        "VILLETA": {},
        "VIOTÁ": {},
        "YACOPÍ": {},
        "ZIPACÓN": {},
        "ZIPAQUIRÁ": {}
    },
    "BOGOTA D.C.": {
        "BOGOTA. D.C.": {
            "USAQUEN": {
                "USAQUÉN": ["99"],
                "SERVITA": ["78"],
                "CALAZANS": ["33"],
                "AQUILEO PARRA": ["48"],
                "LIJACA": ["38"],
                "SAN ANTONIO UNIÓN COLOMBIA": ["37"],
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
                "\"DIVINO MAESTRO \"\"A\"\"\"": ["14"],
                "\"DIVINO MAESTRO \"\"B\"\"\"": ["9"],
                "LAS MARGARITAS": ["29"],
                "ALTA BLANCA": ["8"],
                "\"COLEGIO TOBERIN \"\"B\"\"\"": ["10"],
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
                "PUREZA DE MARÍA": ["2"]
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
                "BETHLEMITAS-CALLE 65": ["3"],
                "U. SANTO TOMAS CLAUSTRO": ["3"],
                "EL AQUINATE U. SANTO TOMAS": ["2"],
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
                "LA GLORIA- ESCUELA ALTAMIRA": ["5"],
                "RAMAJAL AMAPOLAS": ["2"],
                "EL RODEO SEDE B LA GLORIA": ["2"],
                "EL PORTAL": ["4"],
                "LA CASTAÑA": ["1"],
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
                "CABAÑAS": ["4"],
                "TEJARES": ["5"],
                "COL. FERNANDO GONZALEZ OCHOA": ["3"],
                "ALFONSO LOPEZ": ["14"],
                "LA ALBORADA": ["4"],
                "UVAL - PUERTA AL LLANO": ["7"],
                "VILLA ALEMANIA": ["6"],
                "USME - CENTRO": ["3"],
                "BRAZUELOS": ["2"],
                "CDC JULIO CESAR SANCHEZ": ["2"],
                "VIA AL LLANO": ["1"],
                "NUSADAL": ["3"]
            },
            "TUNJUELITO": {
                "TUNJUELITO A": ["39"],
                "\"FATIMA \"\"A\"\"\"": ["39"],
                "ABRAHAM LINCOLN": ["17"],
                "SAN CARLOS": ["40"],
                "SAN BENITO": ["33"],
                "\"EL TUNAL \"\"A\"\"\"": ["44"],
                "\"EL CARMEN SUR \"\"A\"\"\"": ["31"],
                "SAN VICENTE FERRER": ["37"],
                "VENECIA A": ["45"],
                "\"NUEVO MUZU  \"\"A\"\"\"": ["17"],
                "ISLA DEL SOL": ["24"],
                "VENECIA B": ["15"],
                "TUNJUELITO B": ["6"],
                "\"El Tunal \"\"B\"\"\"": ["18"],
                "\"El Carmen Sur \"\"B\"\"\"": ["10"],
                "\"FATIMA \"\"B\"\"\"": ["14"],
                "\"Nuevo  Muzo \"\"B\"\"\"": ["5"],
                "JARDIN INFANTIL ISLA DEL SOL": ["3"],
                "LICEO SANTA BERNARDITA": ["2"],
                "COL COOPERATIVO VENECIA": ["5"],
                "COOPERATIVO NUEVO MUZU": ["1"],
                "LICEO CAMPESTRE CAFAM": ["1"],
                "NUESTRA SEÑORA LAS VICTORIAS": ["1"],
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
                "CAMPO VERDE - POTRERITOS": ["12"],
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
                "MANDALAY - COLEGIO KENNEDY": ["27"],
                "PIO XII": ["23"],
                "CASTILLA": ["58"],
                "VILLANUEVA": ["18"],
                "JAIRO ANIBAL NIÑO": ["62"],
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
                "COL. GABRIEL BETANCOURT MEJIA": ["57"],
                "MARIA PAZ": ["22"],
                "COLEGIO NELSON MANDELA": ["18"],
                "COLEGIO GUSTAVO ROJAS PINILLA": ["25"],
                "COLEGIO CLASS I.E.D SEDE B ROM": ["10"],
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
                "SANTA CECILIA - MODELIA": ["26"],
                "CENTRO A": ["20"],
                "LA LAGUNA": ["35"],
                "BATAVIA": ["17"],
                "LA GIRALDA": ["28"],
                "PUERTA DE TEJA": ["10"],
                "Agustiniano Salitre": ["42"],
                "Tres Elefantes - La Esperanza": ["22"],
                "PUENTE GRANDE": ["16"],
                "ZONA FRANCA": ["39"],
                "RECODO": ["26"],
                "Santa Teresa Centro": ["11"],
                "La Felicidad": ["14"],
                "Navarra Modelia": ["13"],
                "Modelia Real": ["11"],
                "La Aldea": ["10"],
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
                "STA. MARIA DEL LAGO": ["21"],
                "LA GRANJA": ["28"],
                "FLORENCIA": ["16"],
                "SANTA ROSITA": ["38"],
                "QUIRIGUA": ["46"],
                "LA ESPAÑOLA": ["22"],
                "MINUTO DE DIOS": ["41"],
                "LA SERENA": ["19"],
                "BACHUE": ["42"],
                "QUIRIGUA (PLAZA DE MERCADO)": ["29"],
                "BACHUE II - BOCHICA I": ["27"],
                "VILLA GLADYS": ["31"],
                "EL CORTIJO (LOCALIDAD 10)": ["51"],
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
                "MORTIÑO": ["9"],
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
                "VILLA DEL PRADO-UNI. AGRARIA": ["53"],
                "PRADO PINZON": ["28"],
                "PRADO CIUDAD JARDIN": ["24"],
                "CENTRO COMERCIAL BULEVAR NIZA": ["65"],
                "PONTEVEDRA": ["40"],
                "SAN NICOLAS-AGUSTINIANO NORTE": ["30"],
                "LA CONEJERA": ["7"],
                "PRADO VERANIEGO": ["34"],
                "NIZA IX": ["26"],
                "LA ALHAMBRA CARULLA": ["49"],
                "PUENTE LARGO-EMMANUEL D.ALZON": ["24"],
                "FLORESTA NORTE-JULIO FLOREZ": ["30"],
                "PASADENA-LOS TRES ELEFANTES": ["29"],
                "NUEVA ZELANDIA": ["32"],
                "SAN LUIS SUBA": ["41"],
                "SAN CIPRIANO": ["26"],
                "FUNDACION UNIVERSI. LUIS AMIGO": ["17"],
                "LA GAITANA": ["46"],
                "SABANA DE TIBABUYES": ["63"],
                "COLEGIO-HIJAS DE CRISTO REY": ["65"],
                "CENTRO COMERCIAL MAZUREN": ["48"],
                "TEJARES NORTE": ["31"],
                "COLEGIO CELESTIN FREINET": ["26"],
                "COLEGIO ALVARO GOMEZ": ["57"],
                "COLEGIO DELIA ZAPATA OLIVELLA": ["30"],
                "LA AGUADITA": ["11"],
                "BOSQUES DE SUBA": ["19"],
                "COL REPUBLICA DOMINICANA": ["47"],
                "LISBOA-COLEGIO DISTRITAL LISBOA": ["35"],
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
                "CORINTO-COLEGIO NUEVA COLOMBIA": ["19"],
                "LA TOSCANA-COL.FE Y ALEGRIA": ["23"],
                "COLEGIO PEDAGOGICO DULCE MARIA": ["28"],
                "INSTITUCION EDUCATIVA COMPARTIR SUBA": ["37"],
                "COLEGIO GERARDO MOLINA": ["28"],
                "EL BATAN": ["16"],
                "NIZA CENTRO COMERCIAL NIZA": ["38"],
                "CENTRO COMERCIAL PASEO SAN RAF": ["23"],
                "ALMACEN ÉXITO LA COLINA": ["37"],
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
                "SAN JOSE BAVARIA-ABRAHAM LINCOLN": ["3"],
                "COLEGIO DEL BOSQUE": ["1"],
                "COLEGIO SANTIAGO ALBERIONI": ["2"],
                "COLEGIO VISTA BELLA": ["4"],
                "MIRANDELA - NUEVA ZELANDIA": ["4"],
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
                "CAFAM AV. 68": ["3"]
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
                "CENTRO NARIÑO": ["20"],
                "RESIDENCIAS B.C.H.": ["15"],
                "SANTA TERESITA": ["8"],
                "LA MAGDALENA": ["15"],
                "TEUSAQUILLO": ["25"],
                "PABLO VI II ETAPA": ["10"],
                "RAFAEL NUÑEZ": ["16"],
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
            "ANTONIO NARIÑO": {
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
                "SALÓN COMUNAL SAN ANTONIO": ["3"],
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
                "SALÓN COMUNAL COLÓN": ["9"],
                "COLONIA ORIENTAL": ["7"],
                "SALÓN COMUNAL LA TRINIDAD": ["3"],
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
                "CTRO DE REHABIL. PARA ADULTOS CIEGOS": ["1"]
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
                "SALÓN COMUNAL INGLES": ["6"],
                "SALÓN COMUNAL CLARET": ["6"],
                "SAN JORGE": ["8"],
                "LICEO SAN PABLO": ["4"],
                "SALÓN COMUNAL CEBADAL": ["2"],
                "LA MARQUEZA": ["3"],
                "RAFAEL DELGADO SEDE C": ["2"],
                "SALÓN COMUNAL LA PAZ NARANJOS": ["3"],
                "INTEG. RAFAEL DELGADO SALGUERO": ["1"],
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
                "JERUSALEN (EL TANQUE)": ["31"],
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
                "POTOSI (LA LAGUNA)": ["18"],
                "ALTOS DE JALISCO": ["5"],
                "ESTRELLA DEL SUR": ["19"],
                "CARACOLI": ["9"],
                "SANTA ROSA": ["1"],
                "BRISAS DEL VOLADOR": ["5"],
                "DIVINO NIÑO": ["6"],
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
                "LA CORUÑA - LICEO CONTADORA": ["2"],
                "TANQUE-SIERRA MORENA": ["1"],
                "ICES LAS BRISAS": ["1"],
                "ALTOS DE LA ESTANCIA": ["1"],
                "MILLAN": ["1"],
                "GRAN PLAZA EL ENSUEÑO": ["26"],
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
                "EL JAGUO (ALTO MUNGUIDO)": ["1"]
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
            "19CORRE.SAN FRANCISCO DE ICHO": {
                "SAN FRANCISCO DE ICHO": ["2"]
            },
            "EL TAMBO": {
                "EL TAMBO": ["1"]
            },
            "21CORRE.JITRADO (PUEBLO NUEVO)": {
                "GITRADO": ["1"]
            },
            "EL FUERTE": {
                "STA LUCIA DEL FUERTE": ["1"]
            },
            "LAS MERCEDES": {
                "LAS MERCEDES": ["1"]
            },
            "MOJAUDO": {
                "SAN PEDRO CLAVER (MOJAUDO)": ["1"]
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
                "SAN ANTONIO DE ICHO(PTO MURILLO)": ["1"]
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
                "I.E.NORMAL SUPERIOR PITALITO": ["17"],
                "I.E.NACIONAL": ["26"],
                "IE N. S. SEDE RODRIGO LARA BON": ["5"],
                "IE HUMBERTO MUÑOZ SD PPAL": ["12"]
            },
            "ORIENTAL": {
                "IE MARIA MONTESSORI": ["14"],
                "IE HUMBERTO MUÑOZ SEDE NOGALES": ["12"],
                "C.I.C. VENECIA": ["2"]
            },
            "CENTRO": {
                "COL.LA PRESENTACION": ["22"],
                "ESC.CENTRAL": ["15"],
                "I.E.WINNIPEG": ["13"],
                "I.E.VICTOR MANUEL MENESES": ["10"]
            },
            "SUR": {
                "I.E.MPAL.MONTESSORI": ["24"],
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
        "ÍQUIRA": {},
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
        "VILLAVIEJA": {},
        "YAGUARÁ": {}
    },
    "MAGDALENA": {
        "SANTA MARTA": {
            "01LOC.1TAYRONA S.PEDRO ALEJANDR": {
                "I.E.D. LICEO DEL SUR VICTOR DE LIMA": ["19"],
                "IED TEC. DEL SUR VICTOR DE LIMA SD 3 M.M": ["15"],
                "I.E.D JACQUELINE KENNEDY": ["30"],
                "IED JACQUELINE KENNEDY SD 2 PRE LA CAND.": ["17"],
                "I.E.D.EL PANDO": ["37"],
                "SD JOSE CELEDON GARCIA - IED EL PANDO": ["16"],
                "I.E.D.EL PARQUE": ["47"],
                "I.E.D LIBANO": ["29"],
                "I.E.D.SAN FCO.JAVIER DE GARAGO": ["32"],
                "UNIVERSIDAD ANTONIO NARIÑO": ["2"],
                "UNIVERSIDAD DEL MAGDALENA": ["7"],
                "I.E.D. 11 DE NOVIEMBRE": ["5"],
                "I.E.D. NORMAL SUPERIOR SAN PEDRO": ["35"],
                "IED JUAN MIGUEL DE OSUNA": ["25"],
                "I.E.D.ALUNA MEGA COLEGIO CISNE": ["21"],
                "BONDA": ["22"],
                "GUACHACA": ["18"],
                "CALABAZO": ["4"]
            },
            "02LOC.2HIST.RODRIGO DE BASTIDAS": {
                "I.E.D.HUGO J. BERMUDEZ": ["27"],
                "I.E.D.HUGO J.BERMUDEZ S.LA.ESP": ["23"],
                "I.E.D.LICEO SAMARIO": ["23"],
                "LICEO SAMARIO SD.2 BAV.BOSTON": ["20"],
                "INSTITUTO LA MILAGROSA": ["24"],
                "IED LICEO CELEDON": ["18"],
                "IED LA INDUSTRIAL": ["14"],
                "I.E.D.FCO.DE PAULA SANTANDER": ["20"],
                "I.E.D.MAGDALENA": ["33"],
                "I.E.D.MAGD.SD.3 ESC.MIX.MPAL": ["14"],
                "I.E.D. RODRIGO BASTIDAS": ["40"],
                "HOGAR INFANTIL BASTIDAS": ["16"],
                "IED RODRIGO DE BASTIDAS SD 17 DE DIC": ["12"],
                "I.E.D.NICOLAS BUENAVENTURA": ["18"],
                "I.E.D. ONDAS DEL CARIBE": ["6"],
                "I.E.D LAURA VICUÑA": ["20"],
                "I.E.D.ESC.NORMAL SUP.MARIA AUX": ["18"],
                "I.E.D. DEL CARMEN": ["21"],
                "IED RODRIGO GALVAN DE BASTIDAS": ["4"],
                "I.E.D.MADRE LAURA": ["21"],
                "I.E.D.LICEO DEL NORTE": ["37"],
                "I.E.D. ALFONSO LOPEZ": ["26"],
                "TAGANGA": ["10"]
            },
            "03LOC.3TURISTICA PERLA DEL CARIB": {
                "I.E.D.JOSE LABORDE GNECCO": ["34"],
                "I.E.D CAMILO TORRES DE GAIRA": ["32"],
                "IED CAMILO TORRES DE GAIRA SD ISABEL P.F": ["21"],
                "\"I.E.D.LA PAZ": ["MEGA COL. LA PAZ\""],
                "IED CRISTO REY": ["5"],
                "MUSEO MUNDO MARINO": ["5"],
                "MINCA": ["4"],
                "LA TAGUA": ["2"],
                "EL CAMPANO": ["2"]
            }
        },
        "CIENAGA": {
            "MAR CARIBE": {
                "I.E. ISAAC J. PEREIRA": ["27"],
                "INFOTEP": ["19"],
                "COL VIRGINIA GOMEZ SD CUATRO": ["14"],
                "I.E.LA MARIA": ["12"],
                "I.E.LA ALIANZA": ["3"]
            },
            "SAN JUAN DE CORDOBA": {
                "I.E. SAN JUAN DEL CORDOBA": ["31"],
                "I.E.T.COMERCIO VIRGINIA GOMEZ": ["19"],
                "I.E.ENOC MENDOZA RIASCOS": ["16"]
            },
            "CIENAGA GRANDE": {
                "I.E.LICEO MODERNO DEL SUR": ["20"],
                "\"I.E.LICEO MODERNO DEL SUR": ["SD.4\""],
                "I.E.EL CARMEN": ["12"],
                "I.E. 12 DE OCTUBRE": ["3"]
            },
            "NUEVO HORIZONTE": {
                "I.E.MANUEL J. DEL CASTILLO": ["20"]
            },
            "05CORRG.  SN PEDRO DE LA SIERRA": {
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
                "COL. FCO. JOSE DE CALDAS": ["21"]
            },
            "CENTRAL": {
                "COL. SANTA TERESA DE JESUS": ["19"]
            },
            "NORTE": {
                "I.E.D. JOSE BENITO BARROS PALO": ["25"],
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
            "BELEN": {
                "BELEN": ["6"]
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
            "EL TREBOL": {
                "EL TREBOL": ["3"]
            },
            "12CORR 9 HATILLO DE LA SABANA": {
                "HATILLO DE LA SABANA": ["3"]
            },
            "13CORREGIMIE. 10 LOS NEGRITOS": {
                "LOS NEGRITOS (BASTIDAS)": ["3"],
                "MATA DE CAÑA": ["1"]
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
        "ARIGUANÍ": {},
        "CERRO DE SAN ANTONIO": {},
        "CHIBOLO": {},
        "CIÉNAGA": {},
        "CONCORDIA": {},
        "EL PIÑÓN": {},
        "EL RETÉN": {},
        "FUNDACIÓN": {},
        "GUAMAL": {},
        "NUEVA GRANADA": {},
        "PEDRAZA": {},
        "PIJIÑO DEL CARMEN": {},
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
        "ANCUYÁ": {},
        "ARBOLEDA": {},
        "BARBACOAS": {},
        "BELÉN": {},
        "BUESACO": {},
        "CHACHAGÜÍ": {},
        "COLÓN": {},
        "CONSACÁ": {},
        "CONTADERO": {},
        "CÓRDOBA": {},
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
        "GUALMATÁN": {},
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
        "SANDONÁ": {},
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
                "INST.EDUC.VILLASANTANA": ["27"],
                "I.E. COMPARTIR LAS BRISAS": ["10"],
                "I.E. JAIME SALAZAR ROBLEDO": ["12"]
            },
            "ORIENTE": {
                "CTRO.EDU.JORGE ELIECER GAITAN": ["25"],
                "INSTITUTO KENNEDY": ["31"],
                "ESC GRAL MOSQUERA SD 2 IE H. VELEZ M": ["10"]
            },
            "VILLAVICENCIO": {
                "IE MARCO FIDEL SUAREZ": ["17"],
                "COLEGIO BASICO CENTENARIO": ["16"]
            },
            "RIO OTUN": {
                "INST.EDU.CARLOTA SANCHEZ": ["29"],
                "INST.EDUC.ALFREDO GARCIA": ["39"],
                "COLEGIO SAN JOSE": ["19"],
                "INST.EDU.CARLOTA SANCHEZ 2": ["21"],
                "INST.EDU.CARLOTA SANCHEZ 3": ["15"],
                "IE AUGUSTO ZULUAGA TRUJILLO": ["2"]
            },
            "UNIVERSIDAD": {
                "COLEGIO GIMNASIO PEREIRA": ["19"],
                "COMPLEJO EDUC LA JULITA": ["13"],
                "UNIV.TECNOLOGICA DE PEREIRA": ["18"]
            },
            "CENTRO": {
                "INST.EDUCATIVA BOYACA": ["18"],
                "CENTRO CULTURAL LUCY TEJADA": ["51"],
                "COL.OFICIAL LA INMACULADA": ["33"],
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
                "INST.EDUCATIVA PROVIDENCIA": ["16"]
            },
            "EL ROCIO": {
                "CENTRO EDUC.EL ROCÍO": ["6"]
            },
            "DEL CAFE": {
                "INST.EDUCATIVA CIUDAD BOQUIA": ["43"],
                "IE HUGO ANGEL JARAMILLO": ["5"]
            },
            "FERROCARRIL": {
                "LICEO CIAL AQUILINO BEDOYA": ["22"]
            },
            "EL POBLADO": {
                "IE REMIGIO ANTONIO CAÑARTE": ["21"],
                "I.E.SAMARIA": ["27"]
            },
            "CONSOTA": {
                "CENTRO EDUC.NARANJITO": ["25"],
                "CASETA COMUNAL": ["8"]
            },
            "EL OSO": {
                "COLEGIO OFICIAL CIUDADELA CUBA": ["37"],
                "COL RODRIGO ARENAS BETANCUR": ["6"]
            },
            "PERLA DEL OTUN": {
                "CTRO EDUC.BAYRON GAVIRIA": ["42"]
            },
            "SAN JOAQUIN": {
                "COLEGIO BASICO SAN JOAQUIN": ["29"],
                "COL.SOFFY HERNANDEZ MARIN": ["13"],
                "IE HANS DREWS ARANGO": ["5"]
            },
            "OLIMPICA": {
                "UNI.LIBRE DE PEREIRA BELMONTE": ["21"],
                "CTRO EDUC.LUIS CARLOS GONZALEZ": ["19"],
                "COL.BASICO ALFONSO JARAMILLO": ["31"]
            },
            "19 COMUNA 19 CUBA": {
                "INST.EDUC.ESCOLAR SAN FERNANDO": ["39"],
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
            "23CORR.TRIBUNAS CORCEGA": {
                "LA GRAMINEA": ["3"],
                "EL MANZANO": ["2"],
                "IE JOSÉ ANTONIO GALÁN": ["13"]
            },
            "ARABIA": {
                "ARABIA": ["7"],
                "BETULIA": ["3"],
                "YARUMAL": ["2"]
            },
            "25COR. PUERTO CALDAS(PUENTE BOL)": {
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
            "31CORR. LA ESTRELLA LA PALMILLA": {
                "LA ESTRELLA LA PALMILLA": ["5"]
            },
            "CERRITOS": {
                "CERRITOS": ["19"],
                "C.E. 30 DE AGOSTO": ["3"]
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
            "02  COMUNA  2": {
                "INT. SANTA SOFIA": ["32"],
                "ESCUELA LA AURORA": ["2"],
                "COLEGIO VILLA FANNY": ["2"],
                "INST. AGUSTIN NIETO CABALLERO": ["22"]
            },
            "03 COMUNA 3": {
                "MEGACOLEGIO BERNARDO LOPEZ PEREZ": ["17"],
                "ESCUELA POLICARPA SALAVARRIET": ["16"],
                "COLEGIO NUEVA REPUBLICA": ["16"]
            },
            "04 COMUNA  4": {
                "IE SANTA ISABEL": ["20"]
            },
            "06 COMUNA 6": {
                "IE MARIA AUXILIADORA": ["13"]
            },
            "07 COMUNA 7": {
                "COLEGIO PABLO VI": ["27"]
            },
            "08 COMUNA  8": {
                "ESCUELA SAN DIEGO": ["15"],
                "COLEGIO NUEVA GRANADA": ["6"],
                "CASA DE LA CULTURA": ["1"]
            },
            "11 COMUNA 11": {
                "COL.JUAN MANUEL GONZALEZ": ["28"],
                "COL HOGAR NAZARETH": ["2"],
                "COLEGIO CRISTO REY": ["7"]
            },
            "12 COMUNA 12": {
                "COL.NTRA SRA DE GUADALUPE": ["27"],
                "COLEGIO SALESIANO": ["46"]
            },
            "13CORR.SERRANIA ALTO DEL NUDO": {
                "SERRANIA ALTO NUDO (LA UNION)": ["5"]
            },
            "LAS MARCADAS": {
                "LAS MARCADAS (ALTO DEL TORO)": ["1"],
                "LAS MARCADAS ( FRAILES)": ["6"]
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
            "SANTA BARBARA": {
                "SANTA BARBARA": ["3"]
            },
            "EL MANZANILLO": {
                "EL MANZANILLO": ["2"]
            },
            "09CORR. LAS MANGAS  EL CEDRALITO": {
                "DEL SUR LAS MANGAS-CEDRALITO": ["2"]
            },
            "10CORR.LA CAPILLA (SAN JUAN)": {
                "LA CAPILLA (SAN JUAN)": ["2"]
            }
        },
        "APÍA": {},
        "BALBOA": {},
        "BELÉN DE UMBRÍA": {},
        "GUÁTICA": {},
        "LA VIRGINIA": {},
        "MARSELLA": {},
        "MISTRATÓ": {},
        "PUEBLO RICO": {},
        "QUINCHÍA": {},
        "SANTUARIO": {}
    },
    "NORTE DE SAN": {
        "CUCUTA": {
            "01 COMUNA 1 CENTRO": {
                "COL SAN JOSE sede MERCEDES ABREGO": ["48"],
                "COL SAGRADO sede ANTONIA SANTO": ["32"],
                "COL SAGRADO CORAZON DE JESUS": ["40"],
                "COLEGIO ANTONIO NARIÑO": ["16"]
            },
            "CENTRO ORIENTAL": {
                "SALESIANO": ["54"],
                "MERCEDES ABREGO sede JARDIN NACIONAL": ["46"],
                "UNIVERSIDAD FRANCISCO DE PAULA SANTANDER": ["31"],
                "COLEGIO LA SALLE": ["27"],
                "INSTITUTO BILINGUE LONDRES": ["21"]
            },
            "SUR ORIENTAL": {
                "COL PABLO CORREA sede CLUB DE": ["28"],
                "COL.FRANCISCO JOSE CALDAS": ["39"],
                "CLUB DE LEONES sede I.E.BOCONO": ["16"],
                "ESCUELA SAN MATEO": ["35"],
                "FCO JOSE DE CALDAS sede SAN PE": ["11"]
            },
            "ORIENTAL": {
                "ESC.MARCO FIDEL SUAREZ": ["18"],
                "COL PABLO CORREA sede MARIA AU": ["29"],
                "COLEGIO SIMON BOLIVAR": ["30"],
                "COLEGIO PADRE LUIS VARIARA": ["32"],
                "COL BAS CLUB DE LEONES No 29": ["12"],
                "I.E.MON.JAIME PRIETO AMAYA": ["7"],
                "COL.CARLOS PEREZ ESCALANTE": ["19"],
                "CENTRO INT. CIUDADANA PRADOS DEL ESTE": ["9"]
            },
            "NORORIENTAL": {
                "SENA": ["33"],
                "GUAIMARAL S.HERMOGENES MAZA": ["36"],
                "INEM": ["52"],
                "COL ANDRES BELLO": ["22"],
                "COL ORIENTAL No. 26": ["24"],
                "INEM sede MIGUEL MULLER": ["17"],
                "COL.BASICO GUAIMARAL NRO 25": ["12"]
            },
            "NORTE": {
                "COL ANDRES BELLO sede LAURA VI": ["30"],
                "COL MUNICIPAL AEROPUERTO": ["44"],
                "COL EUSTORGIO COLMENARES BAUTI": ["30"],
                "ESCUELA EL CERRITO": ["4"],
                "INST EDUCATIVA SAN JOSE": ["27"],
                "COL TOLEDO PLATA": ["25"]
            },
            "NOR OCCIDENTAL": {
                "SANTOS APOSTOLES sede KENNEDY": ["35"],
                "COL SAN BARTOLOME": ["26"],
                "COL INTEGRADO JUAN ATALAYA": ["31"],
                "COL MARIANO OSPINA RODRIGUEZ": ["44"],
                "COL BUENOS AIRES": ["19"],
                "COL BASICO CAMILO DAZA": ["11"],
                "CENTRO TECNOLOGICO DE CUCUTA": ["15"],
                "COL.CONCEJO DE CUCUTA": ["19"]
            },
            "OCCIDENTAL": {
                "ESC.No38 TEODORO GUTIERREZ C.": ["29"],
                "I.E. PADRE MANUEL BRICEÑO JAUREGUI": ["46"],
                "COL RAFAEL URIBE URIBE": ["41"],
                "INST TECN CARLOS RAMIREZ PARIS": ["39"],
                "COL HERMANO RODULFO ELOY": ["25"],
                "CARLOS RAMIREZ sede NTRA SRA DE MONGUI": ["21"],
                "I.E.EL RODEO": ["13"],
                "I.E. PEDRO CUADRO HERRERA": ["1"]
            },
            "SUR OCCIDENTAL": {
                "COL NTRA SRA DE BELEN 23 VARON": ["41"],
                "COL JULIO PEREZ FERRERO": ["32"],
                "C.MANUEL ANTONIO FERNANDEZ DE": ["24"],
                "COL NTRA SRA DE BELEN LA DIVINA PASTORA": ["17"],
                "COL GARCIA HERREROS sede ESC 28 FEBRERO": ["16"],
                "COL.BASICO LOS ALPES": ["10"]
            },
            "SUR": {
                "SANTO ANGEL sede JOSE EUSEBIO": ["19"],
                "COL LUIS CARLOS GALAN SARMIENT": ["30"],
                "CTRO EDU. FCO DE PAULA ANDRADE No 9": ["40"],
                "ALEJANDRO GUTIERREZ sede SAN J": ["13"]
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
        "OCAÑA": {
            "CENTRAL JOSE E. CARO": {
                "ESCUELA NORMAL DE SEÑORITAS": ["16"],
                "COMPLEJO HISTORICO": ["13"],
                "SEDE DAVID HADDAD SALCEDO": ["12"]
            },
            "02COMUNA2 NORORIENTAL CRISTO REY": {
                "POLIDEPORTIVO CRISTO REY": ["16"]
            },
            "SURORIENTAL OLAYA H.": {
                "POLIDEPORTIVO LA MONUMENTAL": ["15"],
                "CONCENTRACION ANGELINO DURAN": ["19"]
            },
            "04COMUNA4 SUROCCIDENTAL ADOLFO M": {
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
            "13CORREG ALTO PATIOS-PALOGRANDE": {
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
        "ARMENIA": {
            "CENTENARIO": {
                "IE TERESITA MONTES": ["24"],
                "IE LAURA VICUÑA": ["21"],
                "IE INSTITUTO TECNICO INDUSTRIA": ["9"],
                "IE SIMÓN RODRIGUEZ": ["7"],
                "COLISEO DEL SUR": ["2"]
            },
            "RUFINO JOSE CUERVO": {
                "IE RUFINO SUR SEDE MADRE MARCE": ["28"],
                "I.E. ROSANA LONDOÑO": ["16"],
                "IE MARCELINO CHAMPAGNAT": ["17"],
                "IE ZULDEMAYDA": ["16"],
                "IE LOS QUINDOS": ["21"],
                "IE CIUDADELA DEL SUR": ["23"],
                "IE JUAN XXIII": ["11"]
            },
            "ALFONSO LOPEZ": {
                "IE NUESTRA SEÑORA DE BELEN": ["21"],
                "IE LA ADIELA SEDE LA CECILIA": ["27"],
                "IE CIUDAD DORADA": ["12"],
                "IE LAS COLINAS": ["8"]
            },
            "FRANCISCO DE PAULA S": {
                "IE JESÚS MARÍA OCAMPO": ["20"],
                "IE CAMILO TORRES": ["15"],
                "IE LUIS BERNAL GIRALDO": ["7"]
            },
            "EL BOSQUE": {
                "IE GUSTAVO MATAMOROS D. COSTA": ["25"],
                "IE RUFINO CUERVO CENT SEDE ANT": ["9"]
            },
            "SAN JOSE": {
                "IE RUFINO JOSE CUERVO CENTRO": ["22"],
                "IE ESCUELA NORMAL SUPERIOR": ["15"],
                "IE CÁMARA JUNIOR": ["19"],
                "IE CÁMARA JUNIOR SEDE LA PAVON": ["8"],
                "IE CIUDADELA DE OCCIDENTE": ["10"],
                "HOGAR INFANTIL CDV LA UNION": ["15"]
            },
            "CAFETERO": {
                "IE CIUDAD ARMENIA": ["20"],
                "CENTRO ADMINISTRATIVO MUNICIPA": ["38"],
                "COL SAGRADO CORAZÓN DE JESÚS B": ["20"],
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
                "IE REPÚBLICA DE FRANCIA": ["10"],
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
                "IE MAIPORÉ SEDE B": ["24"],
                "IE TEC RAFAEL GARCIA HERREROS": ["28"],
                "IE CAFÉ MADRID": ["26"],
                "IE LOS COLORADOS": ["22"],
                "SALON COMUNAL  EL PABLON": ["2"],
                "IE MAIPORE SEDE C": ["14"],
                "I.E. SANTO ANGEL": ["3"]
            },
            "NORORIENTAL": {
                "INST DE PROM SOC DEL NORTE SED": ["32"],
                "ORDEN DE LOS CLÉRIGOS REG SOMASCOS": ["24"],
                "IE DÁMASO ZAPATA SEDE C": ["4"],
                "IE RURAL BOSCONIA": ["1"],
                "I.E. LA JUVENTUD SEDE A": ["2"]
            },
            "SAN FRANCISCO": {
                "IE DÁMASO ZAPATA SEDE A": ["40"],
                "COL FRANCISCANO DEL VIRREY SOL": ["33"],
                "COL SANTANDER SEDE A": ["44"],
                "CORP EDUCATIVA ASED": ["12"],
                "COL AMERICANO": ["18"],
                "IE COMUNEROS": ["32"],
                "IE PILOTO SIMON BOLIVAR": ["24"],
                "COL SANTANDER SEDE C": ["5"],
                "I.E. CLUB UNION SEDE A": ["2"]
            },
            "OCCIDENTAL": {
                "INST TEC SALESIANO ELOY VALENZ": ["41"],
                "I. INTEGRADO JORGE ELIECER GAITAN SEDE A": ["14"],
                "COL FRANCISCO DE PAULA S/DER S A": ["9"],
                "COL FRANCISCO DE PAULA S/DER S B": ["8"],
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
                "INST SAN JOSÉ DE LA SALLE": ["26"],
                "COL TEC EMPRESARIAL JOSE MARIA": ["16"],
                "COL AURELIO MARTINEZ MUTIS SED B": ["10"],
                "GIMNASIO SUPERIOR EMPRESARIAL": ["18"]
            },
            "LA CIUDADELA": {
                "COL AURELIO MARTINEZ MUTIS SED A": ["15"],
                "IE NUESTRA SEÑORA DEL PILAR SE A": ["27"],
                "UNIDADES TECNOLOGICAS  DE SANT": ["25"]
            },
            "SUR OCCIDENTE": {
                "IE NUESTRA SEÑORA DEL PILAR SE B": ["16"],
                "IE NUESTRA SEÑORA DEL PILAR SE E": ["12"],
                "IE INEM CUSTODIO GARCIA ROV SD H": ["11"]
            },
            "LA PEDREGOZA": {
                "INST LA LIBERTAD": ["20"],
                "COL INEM SEDE G": ["8"],
                "COL. INTEGRADO JORGE ISAAC": ["7"]
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
                "I.E. LAS AMERICAS": ["28"],
                "CENT. EDUC. CAJASAN BICENTENARIO SEDE B": ["6"]
            },
            "MORRORICO": {
                "I.E. ORIENTE MIRAFLORES SEDE A": ["24"],
                "I.E. ORIENTE MIRAFLORES SEDE C": ["7"]
            },
            "CENTRO": {
                "GOBERNACION DE SANTANDER": ["23"],
                "CORP UNIVERSITARIA UNICIENCIA": ["28"],
                "COL NUESTRA SEÑORA DE FATIMA": ["14"]
            },
            "LAGOS DEL CACIQUE": {
                "INST CALDAS": ["43"],
                "COL NUESTRA SEÑORA DEL ROSARIO": ["5"]
            },
            "MUTIS": {
                "I.E. JOSE CELESTINO MUTIS": ["44"],
                "I.E. LUIS CARLOS GALAN SARMIENTO": ["13"],
                "I.E. NUESTRA SEÑORA DEL PILAR SE C": ["6"]
            }
        },
        "BARRANCABERMEJA": {
            "10CORREG. LA FORTUNA AUTOPISTA": {
                "LA FORTUNA AUTOPISTA": ["5"]
            },
            "11CORRE. MESETA DE SAN RAFAEL": {
                "ESC. MESETA DE SAN RAFAEL SEDE A": ["2"]
            },
            "12CORREG. SAN RAFAEL DE CHUCURI": {
                "COL. SAN RAFAEL DE CHUCURI": ["2"]
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
            "01COM1 FLORIDA-CASCO ANTIGUO": {
                "INSTITUTO GABRIELA MISTRAL": ["46"],
                "POLIDEP. JOSE ELIAS PUYANA": ["22"],
                "COL. JOSE ELIAS PUYANA SEDE A": ["29"],
                "COL JOSE ELIAS PUYANA SED B": ["17"]
            },
            "CAÑAVERAL-VERSALLES": {
                "COLEGIO REINA DE LA PAZ": ["18"],
                "COLEGIO NUEVO CAMBRIDGE": ["42"],
                "COLEGIO PANAMERICANO": ["3"],
                "COLEGIO VICENTE AZUERO SD D RIO FRIO": ["2"],
                "UNAB CAMPUS EL BOSQUE": ["11"]
            },
            "BUCARICA-CARACOLI": {
                "INSTITUTO CARACOLI": ["11"],
                "INSTITUTO. GABRIEL GARCIA MARQ": ["20"]
            },
            "CALDAS- REPOSO": {
                "COLEGIO ISIDRO CABALLERO SEDEB": ["12"],
                "INSTITUTO. ANTONIO JOSE DE SUC": ["17"],
                "INSTITUTO SAN BERNARDO": ["13"],
                "FRANCISCO JOSE D CALDAS/ I. MINCA SEDE B": ["5"],
                "INSTITUTO JOSE ANTONIO GALAN": ["24"],
                "INSTITUTO LA TRINIDAD SEDE B": ["9"],
                "INSTITUTO. JOSE ANTONIO GALAN": ["4"],
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
            "07COM. 7 VILLABEL-SANTA ANA": {
                "INSTITUTO DOMINGO SABIO": ["18"],
                "COLEGIO METROPOLITANO DEL SUR": ["12"],
                "INSTITUTO. MADRE DEL BUEN CONS": ["17"],
                "COLEGIO. METROPOLITANO SANTA A": ["19"]
            },
            "LA CUMBRE- EL CARMEN": {
                "COLEGIO GONZALO JIMENEZ NAVAS": ["30"],
                "COL MICROEMPRESARIAL EL CARME SD C": ["13"],
                "INSTITUTO LA CUMBRE": ["33"],
                "COL JOSE ELIAS PUYANA SED C": ["10"],
                "COL MICROEMPRESARIAL EL CARME SD B": ["14"]
            }
        },
        "GAMBITA": {
            "LA PALMA": {
                "CORREG. LA PALMA": ["2"]
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
            "01CORR. ALTO JORDAN - GUALILO": {
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
        "BOLÍVAR": {},
        "CABRERA": {},
        "CALIFORNIA": {},
        "CAPITANEJO": {},
        "CARCASÍ": {},
        "CEPITÁ": {},
        "CERRITO": {},
        "CHARALÁ": {},
        "CHARTA": {},
        "CHIMA": {},
        "CHIPATÁ": {},
        "CIMITARRA": {},
        "CONCEPCIÓN": {},
        "CONFINES": {},
        "CONTRATACIÓN": {},
        "COROMORO": {},
        "CURITÍ": {},
        "EL CARMEN DE CHUCURÍ": {},
        "EL GUACAMAYO": {},
        "EL PEÑÓN": {},
        "EL PLAYÓN": {},
        "EL SOCORRO": {},
        "ENCINO": {},
        "ENCISO": {},
        "FLORIÁN": {},
        "GALÁN": {},
        "GÁMBITA": {},
        "GIRÓN": {},
        "GUACA": {},
        "GUADALUPE": {},
        "GUAPOTÁ": {},
        "GUAVATÁ": {},
        "GÜEPSA": {},
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
        "VÉLEZ": {},
        "VETAS": {},
        "VILLANUEVA": {},
        "ZAPATOCA": {}
    },
    "SUCRE": {
        "SINCELEJO": {
            "NOR ESTE": {
                "IE ROGELIO RODRIGUEZ SEVERICHE(LEONCITO)": ["21"],
                "COL. NTRA STA DE FATIMA": ["41"],
                "IE PEDAGOGICO DE VENECIA": ["27"],
                "IE PARA POBLACIONES ESPECIALES": ["4"]
            },
            "OESTE": {
                "IE NORMAL SUPERIOR DE SINCELEJO": ["35"],
                "I.E. JUANITA GARCIA MANJARRES": ["20"],
                "INST. TECNICO INDUSTRIAL ANTONIO PRIETO": ["17"]
            },
            "03 COMUNA 3  SUR OESTE": {
                "IE NUESTRA SEÑORA DEL CARMEN": ["26"],
                "INST.EDC.20 DE ENERO": ["20"],
                "IE MADRE AMALIA": ["27"]
            },
            "CENTRAL - OESTE": {
                "IE ANTONIO LENIS": ["43"],
                "IE SAN JOSE C.I.P(CDV)": ["21"]
            },
            "CENTRAL": {
                "IE JOSE IGNACIO LOPEZ": ["13"],
                "IE FRANCISCO DE PAULA SANTANDER": ["17"],
                "I.E.LUIS CARLOS GALAN": ["9"]
            },
            "NORTE": {
                "IE SAN ROQUE": ["21"],
                "IE ANTONIO NARIÑO SEDE JUANITA": ["10"],
                "IE CUARTA EL SALVADOR": ["18"],
                "IE ALTOS DE LA SABANA": ["4"]
            },
            "SUR": {
                "INST. NACIONAL SIMON ARAUJO": ["44"],
                "COLEGIO LA ESPERANZA": ["34"]
            },
            "SUR ESTE": {
                "IE SAN JOSE": ["28"]
            },
            "10CORREGIMIENTOS AREA 1": {
                "CASTAÑEDA": ["4"],
                "CHOCHO": ["14"],
                "LAS PALMAS": ["3"]
            },
            "11CORREGIMIENTOS AREA 2": {
                "LA ARENA": ["5"],
                "LA CHIVERA": ["1"],
                "LA PEÑATA": ["3"],
                "LAS MAJAGUAS": ["1"],
                "SAN RAFAEL (EL ZANJON)": ["1"]
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
                "SAN JACINTO (MOCHA)": ["2"],
                "SABANAS DEL POTRERO": ["4"],
                "VILLA DE SAN MARTIN": ["3"],
                "BABILONIA": ["2"],
                "BUENAVISTICA": ["1"],
                "CERRO DEL NARANJO": ["1"]
            }
        },
        "BUENAVISTA": {},
        "CAIMITO": {},
        "CHALÁN": {},
        "COLOSÓ": {},
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
        "SINCÉ": {},
        "SUCRE": {},
        "TOLÚ": {},
        "TOLÚ VIEJO": {}
    },
    "TOLIMA": {
        "IBAGUE": {
            "DANTAS": {
                "IE LAURELES SD DANTAS": ["1"]
            },
            "LAURELES": {
                "IE LAURELES": ["1"]
            },
            "COELLO-COCORA": {
                "IE COELLO-COCORA": ["5"]
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
                "AMOYA ( LAS CRUCES)": ["2"],
                "AMOYA (LA CORTES)": ["2"],
                "AMOYA ( COPETE)": ["1"]
            },
            "EL LIMON": {
                "EL LIMON": ["8"],
                "EL LIMON (LA PROFUNDA)": ["1"]
            },
            "DE CALARMA": {
                "CALARMA (RISALDA - CALARMA)": ["4"],
                "CALARMA (POTRERITO DE LUGO)": ["1"],
                "CALARMA (YAGUARA)": ["1"]
            },
            "LAS HERMOSAS": {
                "LAS HERMOSAS (SANTA BARBARA)": ["2"],
                "LAS HERMOSAS (LA VIRGINIA)": ["2"],
                "LAS HERMOSAS(SAN JOSE DE LAS HERMOSAS)": ["2"]
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
                "PAVAS (LOS GUAYABOS)": ["1"]
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
            "01CORREG. LA HERRERA": {
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
        "IBAGUÉ": {},
        "ICONONZO": {},
        "LÉRIDA": {},
        "LÍBANO": {},
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
        "SALDAÑA": {},
        "SAN ANTONIO": {},
        "SANTA ISABEL": {},
        "SUÁREZ": {},
        "VALLE DE SAN JUAN": {},
        "VILLAHERMOSA": {},
        "VILLARRICA": {}
    },
    "VALLE": {
        "CALI": {
            "13 COMUNA 13": {
                "COL PARROQUIAL SEÑOR DE LOS MI": ["25"],
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
            "32CORR. MELENDEZ (VILLA CARMELO)": {
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
                "HORMIGUERO B (BOCHALEMA)": ["3"]
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
                "I.E. ANA VICTORIA": ["11"],
                "IE REPUBLICA DE VENEZUELA": ["19"],
                "I.E. POLICARPA SALAVARRIETA": ["15"],
                "IE URBANO TENORIO": ["9"],
                "IE LA ANUNCIACION (IFA)": ["24"]
            },
            "CONT. (EL PAILON)": {
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
                "COLEG. ANTONIO NARIÑO": ["14"],
                "IE LOS GRANADINOS": ["27"],
                "CASETA COMUNAL UNION DE VIVIEN": ["13"],
                "IE EMILIO CARVAJAL": ["21"],
                "IE LA NUEVA ESPERANZA": ["6"],
                "CTRO EDUC. EUSEBIO ANGULO": ["12"],
                "SEDE MARIA AUXILIADORA": ["4"]
            },
            "BAJO CALIMA": {
                "BAJO CALIMA": ["6"]
            },
            "PUNTA MAGDALENA": {
                "BOCAS DEL SAN JUAN": ["2"],
                "LA PLATA": ["2"],
                "MALAGA": ["2"],
                "PUERTO ESPAÑA": ["1"]
            },
            "(PUNTA BAZAN)": {
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
            "(RIO ANCHICAYA": {
                "SAN JOSE (ANCHICAYA)": ["2"],
                "TAPARAL": ["2"]
            },
            "( RIO RAPOSO)": {
                "CARACOLI (CACOLI)": ["1"],
                "EL TIGRE": ["1"],
                "CALLE HONDA": ["1"],
                "SAN FRANCISCO JAVIER": ["2"]
            },
            "(RIO CAJAMBRE": {
                "EL PITAL": ["2"],
                "MAYORQUIN": ["2"],
                "PAPAYAL": ["2"]
            },
            "25CORREG 13 (RIO YURUMANGUI)": {
                "SAN ANTONIO (YURUMANGUI)": ["2"],
                "VENERAL": ["2"]
            },
            "PUERTO MERIZALDE": {
                "EL PASTICO": ["2"],
                "PUERTO MERIZALDE": ["5"],
                "SAN PEDRO DE NAYA": ["2"]
            },
            "28CORREG 16 (SAN FRANCISCO)": {
                "EL CARMEN": ["1"],
                "SAN FRANCISCO DE NAYA": ["2"]
            },
            "29CORREG 17 (LA CONCEPCION)": {
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
            "CALEÑO": {
                "CALEÑO": ["1"]
            },
            "CAÑAS ABAJO": {
                "CAÑAS ABAJO": ["1"]
            },
            "CAÑAS ARRIBA": {
                "CAÑAS ARRIBA": ["1"]
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
                "SAN FRANCISCO (LLANITO)": ["4"]
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
                "NARIÑO": ["9"],
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
            "RAIMUNDO CISNEROS O.": {
                "COLEGIO SIMON BOLIVAR": ["39"]
            },
            "JOSEFA CANELONES": {
                "CONCENTRACION CAMILO TORRES": ["23"]
            },
            "JOSE ANTONIO BENITEZ": {
                "COLEGIO SANTANDER PRIMARIA": ["20"],
                "CONC.ESCOLAR LA COROCORA": ["14"],
                "CONC.ESCOLAR DIVINO NIÑO": ["23"]
            },
            "JOSE LAURENCIO OSIO": {
                "NORMAL MARIA INMACULADA": ["22"],
                "COLEGIO TEC. CRISTO REY": ["29"]
            },
            "JUAN JOSE RONDON": {
                "ESCUELA FLOR DE MI LLANO": ["23"]
            },
            "CAÑAS BRAVAS": {
                "CAÑAS BRAVAS": ["3"]
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
        "PUERTO RONDÓN": {},
        "SARAVENA": {},
        "TAME": {}
    },
    "CAQUETA": {
        "FLORENCIA": {
            "OCCIDENTAL": {
                "I.E. JUAN BAUTISTA LA SALLE": ["24"],
                "I.E. JUAN BAUTISTA MIGANI": ["19"],
                "I.E. SAN FRANCISCO DE ASIS": ["20"],
                "I.E. SAGRADOS CORAZONES": ["22"],
                "IE JUAN B DE LA SALLE SD SIETE DE AGOSTO": ["3"],
                "IE FRANCISCO DE ASIS SEDE CIRCARCIA": ["1"]
            },
            "SUR": {
                "I.E. ANTONIO RICAURTE SEDE JUAN XXIII": ["24"],
                "I.E. ANTONIO RICAURTE": ["14"],
                "I.E. BARRIOS UNIDOS DEL SUR": ["21"],
                "\"I. TEC": ["AGROPECUARIO DE LA AMAZONIA\""]
            },
            "NORTE": {
                "I.E.LOS PINOS SEDE LA PAZ": ["10"],
                "UNIVERSIDAD UNAD": ["10"],
                "INSTITUTO TECNICO INDUSTRIAL": ["18"],
                "I.E.LA SALLE": ["15"],
                "I.E.BUINAIMA": ["15"],
                "URBANIZACION LA GLORIA": ["2"]
            },
            "ORIENTAL": {
                "I.E.B.U.S.SEDE PUEBLO NUEVO": ["13"],
                "I.E.B.U.S.SEDE SANTA INES": ["10"],
                "I.E.CIUD.SXXI SEDE TRIUNFO": ["7"],
                "I.E.DIV.NIÑO SEDE LAS PALMERAS": ["9"],
                "I.E. CIUDADELA SIGLO XXI": ["28"],
                "I.E.BELLO HORIZONTE": ["16"]
            },
            "SAN PEDRO NORCAS": {
                "SAN PEDRO (NORCASIA)": ["3"]
            },
            "ORTEGUAZA": {
                "ORTEGUAZA(SANTANA LAS HERMOSA": ["3"]
            },
            "EL DANUBIO (REMO": {
                "EL DANUBIO (EL REMOLINO)": ["1"]
            },
            "EL CARANO": {
                "EL CARAÑO (EL CARAÑO)": ["3"]
            },
            "SANTO DOMINGO": {
                "SANTO DOMINGO (SANTO DOMINGO)": ["4"]
            },
            "SAN MARTIN (CAMP": {
                "SAN MARTIN": ["1"]
            },
            "11CORREG VENECIA PUERTO ARANGO": {
                "VENECIA (PUERTO ARANGO)": ["2"]
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
                "I.E. LUIS HERNANDEZ VARGAS": ["26"],
                "C.E. MARCO FIDEL SUAREZ": ["13"],
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
            "CIUDAD CAMPIÑA": {
                "IE EL CAMPIÑA": ["21"],
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
        "CHÁMEZA": {},
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
            "CENTRO HISTORICO": {
                "INST. EDUC. DIVINA PASTORA": ["26"]
            },
            "NUEVO CENTRO": {
                "I.E. EUSEBIO SEPTIMIO MARY": ["13"]
            },
            "COQUIVACOA": {
                "I.E. LICEO ALMIRANTE PADILLA": ["33"],
                "I.E.LIVIO REGINALDO FISCHIONE": ["17"],
                "INST. EDUC. JOSE ANTONIO GALAN": ["16"]
            },
            "COOPERATIVO": {
                "CTRO EDUCATIVO NVO HORIZONTE": ["13"],
                "IE JOSE A GALAN SD COOPERATIVO": ["6"]
            },
            "AER. ALMIRANTE PADILL": {
                "INST. EDUC. I.P.C": ["38"]
            },
            "NTRA SRA DE LOS REMED": {
                "I.E. ISABEL MARIA CUESTA": ["24"],
                "I.E.JOSE ARNOLDO MARIN": ["13"]
            },
            "BOCAGRANDE": {
                "IE ECOLOGICA EL CARMEN": ["19"],
                "IE ECOLOGICA EL CARMEN SD PPAL": ["13"]
            },
            "ECO. LAG.SALADA Y PAT": {
                "IE MARIA DORALIZA LOPEZ DE MEJ": ["27"],
                "IE HELION PINEDO RIOS": ["18"]
            },
            "ECOTUR.RIO RANCHERIA": {
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
            "18CORR VILLA MARTIN (MACHOBACHO)": {
                "VILLA MARTIN (MACHOBAYO)": ["4"]
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
                "LAS PALMAS A2 (SEDE LAS CASITAS)": ["1"]
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
        "LEJANIAS": {
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
        "LEJANÍAS": {},
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
        "SAN JOSE DEL GUAVIARE": {
            "EL CAPRICHO": {
                "EL CAPRICHO": ["8"]
            },
            "CHARRAS-BOQUERON": {
                "CHARRAS BOQUERON": ["6"]
            }
        },
        "CALAMAR": {},
        "EL RETORNO": {},
        "MIRAFLORES": {},
        "SAN JOSÉ DEL GUAVIARE": {}
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
        "PUERTO NARIÑO": {}
    },
    "PUTUMAYO": {
        "PUERTO ASIS": {
            "SUR": {
                "ESCUELA CENTRAL DE VARONES": ["20"],
                "\"I": ["E. SANTA TERESA (SEDE PRIMAR\""],
                "COLEGIO SAN FERNANDO": ["8"]
            },
            "ORIENTE": {
                "I.E.ALVERNIA": ["15"],
                "I.E.EL JARDIN": ["15"],
                "I.FLUVIAL DEL AMAZONAS": ["8"]
            },
            "NORTE": {
                "I.E.SAN NICOLAS": ["15"],
                "ESCUELA EL PRADO": ["11"]
            },
            "PIÑUÑA BLANCO": {
                "PIÑUÑA BLANCO (PUERTO HACHA)": ["3"]
            },
            "LA CARMELITA": {
                "LA CARMELITA (CUEMBI)": ["7"],
                "SANTA MARIA (ALTO CUEMBI)": ["3"]
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
                "PIÑUÑA NEGRO": ["2"]
            }
        },
        "COLON": {
            "SAN PEDRO": {
                "SAN PEDRO": ["3"]
            }
        },
        "SAN MIGUEL (LA DORADA)": {
            "01CORR. PUERTO COLON -SAN MIGUEL": {
                "PUERTO COLON SAN MIGUEL": ["9"]
            }
        },
        "COLÓN": {},
        "MOCOA": {},
        "ORITO": {},
        "PUERTO ASÍS": {},
        "PUERTO CAICEDO": {},
        "PUERTO GUZMÁN": {},
        "PUERTO LEGUÍZAMO": {},
        "SAN FRANCISCO": {},
        "SAN MIGUEL": {},
        "SANTIAGO": {},
        "SIBUNDOY": {},
        "VALLE DEL GUAMUEZ": {},
        "VILLAGARZÓN": {}
    },
    "ATLÁNTICO": {
        "BARANOA": {},
        "BARRANQUILLA": {},
        "CAMPO DE LA CRUZ": {},
        "CANDELARIA": {},
        "GALAPA": {},
        "JUAN DE ACOSTA": {},
        "LURUACO": {},
        "MALAMBO": {},
        "MANATÍ": {},
        "PALMAR DE VARELA": {},
        "PIOJÓ": {},
        "POLONUEVO": {},
        "PONEDERA": {},
        "PUERTO COLOMBIA": {},
        "REPELÓN": {},
        "SABANAGRANDE": {},
        "SABANALARGA": {},
        "SANTA LUCÍA": {},
        "SANTO TOMÁS": {},
        "SOLEDAD": {},
        "SUÁN": {},
        "TUBARÁ": {},
        "USIACURÍ": {}
    },
    "BOLÍVAR": {
        "ACHÍ": {},
        "ALTOS DEL ROSARIO": {},
        "ARENAL": {},
        "ARJONA": {},
        "ARROYOHONDO": {},
        "BARRANCO DE LOBA": {},
        "BRAZUELO DE PAPAYAL": {},
        "CALAMAR": {},
        "CANTAGALLO": {},
        "CARTAGENA DE INDIAS": {},
        "CICUCO": {},
        "CLEMENCIA": {},
        "CÓRDOBA": {},
        "EL CARMEN DE BOLÍVAR": {},
        "EL GUAMO": {},
        "EL PEÑÓN": {},
        "HATILLO DE LOBA": {},
        "MAGANGUÉ": {},
        "MAHATES": {},
        "MARGARITA": {},
        "MARÍA LA BAJA": {},
        "MOMPÓS": {},
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
        "TURBACO": {},
        "TURBANÁ": {},
        "VILLANUEVA": {},
        "ZAMBRANO": {}
    },
    "BOYACÁ": {
        "ALMEIDA": {},
        "AQUITANIA": {},
        "ARCABUCO": {},
        "BELÉN": {},
        "BERBEO": {},
        "BETÉITIVA": {},
        "BOAVITA": {},
        "BOYACÁ": {},
        "BRICEÑO": {},
        "BUENAVISTA": {},
        "BUSBANZÁ": {},
        "CALDAS": {},
        "CAMPOHERMOSO": {},
        "CERINZA": {},
        "CHINAVITA": {},
        "CHIQUINQUIRÁ": {},
        "CHÍQUIZA": {},
        "CHISCAS": {},
        "CHITA": {},
        "CHITARAQUE": {},
        "CHIVATÁ": {},
        "CHIVOR": {},
        "CIÉNEGA": {},
        "CÓMBITA": {},
        "COPER": {},
        "CORRALES": {},
        "COVARACHÍA": {},
        "CUBARÁ": {},
        "CUCAITA": {},
        "CUÍTIVA": {},
        "DUITAMA": {},
        "EL COCUY": {},
        "EL ESPINO": {},
        "FIRAVITOBA": {},
        "FLORESTA": {},
        "GACHANTIVÁ": {},
        "GÁMEZA": {},
        "GARAGOA": {},
        "GUACAMAYAS": {},
        "GUATEQUE": {},
        "GUAYATÁ": {},
        "GÜICÁN": {},
        "IZA": {},
        "JENESANO": {},
        "JERICÓ": {},
        "LA CAPILLA": {},
        "LA UVITA": {},
        "LA VICTORIA": {},
        "LABRANZAGRANDE": {},
        "MACANAL": {},
        "MARIPÍ": {},
        "MIRAFLORES": {},
        "MONGUA": {},
        "MONGUÍ": {},
        "MONIQUIRÁ": {},
        "MOTAVITA": {},
        "MUZO": {},
        "NOBSA": {},
        "NUEVO COLÓN": {},
        "OICATÁ": {},
        "OTANCHE": {},
        "PACHAVITA": {},
        "PÁEZ": {},
        "PAIPA": {},
        "PAJARITO": {},
        "PANQUEBA": {},
        "PAUNA": {},
        "PAYA": {},
        "PAZ DEL RÍO": {},
        "PESCA": {},
        "PISBA": {},
        "PUERTO BOYACÁ": {},
        "QUÍPAMA": {},
        "RAMIRIQUÍ": {},
        "RÁQUIRA": {},
        "RONDÓN": {},
        "SABOYÁ": {},
        "SÁCHICA": {},
        "SAMACÁ": {},
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
        "SATIVANORTE": {},
        "SATIVASUR": {},
        "SIACHOQUE": {},
        "SOATÁ": {},
        "SOCHA": {},
        "SOCOTÁ": {},
        "SOGAMOSO": {},
        "SOMONDOCO": {},
        "SORA": {},
        "SORACÁ": {},
        "SOTAQUIRÁ": {},
        "SUSACÓN": {},
        "SUTAMARCHÁN": {},
        "SUTATENZA": {},
        "TASCO": {},
        "TENZA": {},
        "TIBANÁ": {},
        "TIBASOSA": {},
        "TINJACÁ": {},
        "TIPACOQUE": {},
        "TOCA": {},
        "TOGÜÍ": {},
        "TÓPAGA": {},
        "TOTA": {},
        "TUNJA": {},
        "TUNUNGUÁ": {},
        "TURMEQUÉ": {},
        "TUTA": {},
        "TUTAZÁ": {},
        "ÚMBITA": {},
        "VENTAQUEMADA": {},
        "VILLA DE LEYVA": {},
        "VIRACACHÁ": {},
        "ZETAQUIRA": {}
    },
    "CAQUETÁ": {
        "ALBANIA": {},
        "BELÉN DE LOS ANDAQUÍES": {},
        "CARTAGENA DEL CHAIRÁ": {},
        "CURILLO": {},
        "EL DONCELLO": {},
        "EL PAUJIL": {},
        "FLORENCIA": {},
        "LA MONTAÑITA": {},
        "MILÁN": {},
        "MORELIA": {},
        "PUERTO RICO": {},
        "SAN JOSÉ DEL FRAGUA": {},
        "SAN VICENTE DEL CAGUÁN": {},
        "SOLANO": {},
        "SOLITA": {},
        "VALPARAÍSO": {}
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
        "GUAPÍ": {},
        "INZÁ": {},
        "JAMBALÓ": {},
        "LA SIERRA": {},
        "LA VEGA": {},
        "LÓPEZ DE MICAY": {},
        "MERCADERES": {},
        "MIRANDA": {},
        "MORALES": {},
        "PADILLA": {},
        "PÁEZ": {},
        "PATÍA": {},
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
        "TOTORÓ": {},
        "VILLA RICA": {}
    },
    "CHOCÓ": {
        "ACANDÍ": {},
        "ALTO BAUDÓ": {},
        "BAGADÓ": {},
        "BAHÍA SOLANO": {},
        "BAJO BAUDÓ": {},
        "BOJAYÁ": {},
        "CANTÓN DE SAN PABLO": {},
        "CÉRTEGUI": {},
        "CONDOTO": {},
        "EL ATRATO": {},
        "EL CARMEN DE ATRATO": {},
        "EL CARMEN DEL DARIÉN": {},
        "ISTMINA": {},
        "JURADÓ": {},
        "LITORAL DE SAN JUAN": {},
        "LLORÓ": {},
        "MEDIO ATRATO": {},
        "MEDIO BAUDÓ": {},
        "MEDIO SAN JUAN": {},
        "NÓVITA": {},
        "NUQUÍ": {},
        "QUIBDÓ": {},
        "RÍO IRÓ": {},
        "RÍO QUITO": {},
        "RIOSUCIO": {},
        "SAN JOSÉ DEL PALMAR": {},
        "SIPÍ": {},
        "TADÓ": {},
        "UNIÓN PANAMERICANA": {},
        "UNGUÍA": {}
    },
    "CÓRDOBA": {
        "AYAPEL": {},
        "BUENAVISTA": {},
        "CANALETE": {},
        "CERETÉ": {},
        "CHIMÁ": {},
        "CHINÚ": {},
        "CIÉNAGA DE ORO": {},
        "COTORRA": {},
        "LA APARTADA": {},
        "LORICA": {},
        "LOS CÓRDOBAS": {},
        "MOMIL": {},
        "MONTELÍBANO": {},
        "MONTERÍA": {},
        "MOÑITOS": {},
        "PLANETA RICA": {},
        "PUEBLO NUEVO": {},
        "PUERTO ESCONDIDO": {},
        "PUERTO LIBERTADOR": {},
        "PURÍSIMA": {},
        "SAHAGÚN": {},
        "SAN ANDRÉS DE SOTAVENTO": {},
        "SAN ANTERO": {},
        "SAN BERNARDO DEL VIENTO": {},
        "SAN CARLOS": {},
        "SAN JOSÉ DE URÉ": {},
        "SAN PELAYO": {},
        "TIERRALTA": {},
        "TUCHÍN": {},
        "VALENCIA": {}
    },
    "GUAINÍA": {
        "INÍRIDA": {}
    },
    "NORTE DE SANTANDER": {
        "ÁBREGO": {},
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
        "DURANÍA": {},
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
    "QUINDÍO": {
        "ARMENIA": {},
        "BUENAVISTA": {},
        "CALARCÁ": {},
        "CIRCASIA": {},
        "CÓRDOBA": {},
        "FILANDIA": {},
        "GÉNOVA": {},
        "LA TEBAIDA": {},
        "MONTENEGRO": {},
        "PIJAO": {},
        "QUIMBAYA": {},
        "SALENTO": {}
    },
    "SAN ANDRÉS Y PROVIDENCIA": {
        "PROVIDENCIA Y SANTA CATALINA ISLAS": {},
        "SAN ANDRÉS": {}
    },
    "VALLE DEL CAUCA": {
        "ALCALÁ": {},
        "ANDALUCÍA": {},
        "ANSERMANUEVO": {},
        "ARGELIA": {},
        "BOLÍVAR": {},
        "BUENAVENTURA": {},
        "BUGA": {},
        "BUGALAGRANDE": {},
        "CAICEDONIA": {},
        "CALI": {},
        "CALIMA": {},
        "CANDELARIA": {},
        "CARTAGO": {},
        "DAGUA": {},
        "EL ÁGUILA": {},
        "EL CAIRO": {},
        "EL CERRITO": {},
        "EL DOVIO": {},
        "FLORIDA": {},
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
        "TULUÁ": {},
        "ULLOA": {},
        "VERSALLES": {},
        "VIJES": {},
        "YOTOCO": {},
        "YUMBO": {},
        "ZARZAL": {}
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
}
regions.points = (dep, mun)=>{
    dep = dep.toUpperCase();
    mun = mun.toUpperCase();
    return (!(dep in regions) || !(mun in regions[dep])) ? []
    :Object.entries(regions[dep][mun]).reduce((all, [,points])=>{
        return all.concat(...Object.keys(points));
    },[]);
};
export default regions;