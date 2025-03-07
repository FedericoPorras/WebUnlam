import re

text = """
		Materias
		1° Año
3621	3,05	Matemática Discreta
3622	4,02	Análisis Matemático I
3623	2,52	Programación Inicial
3624	1,27	Introducción a los Sistemas de Información
3625	1,07	Sistemas de Numeración
3626	1,33	Principios de Calidad de Software
3627	2,84	Álgebra y Geometría Analítica I
3628	4,24	Física I
3629	2,85	Programación Estructurada Básica
3630	1,84	Introducción a la Gestión de Requisitos
3631	3,33	Fundamentos de Sistemas Embebidos
3632	1,80	Introducción a los Proyectos Informáticos
	#VALUE!	2° Año
3633	2,82	Análisis Matemático II
3634	4,50	Física II
3635	4,58	Tópicos de Programación
3636	3,60	Bases de Datos
3637	4,31	Análisis de Sistemas
3638	3,00	Arquitectura de Computadoras
3676	1,33	Responsabilidad Social Universitaria
3639	1,79	Análisis Matemático III
3640	3,67	Algoritmos y Estructuras de Datos
3641	3,00	Bases de Datos Aplicadas
3642	1,00	Principios de Diseño de Sistemas
3643	4,00	Redes de Computadoras
3644	4,31	Gestión de las Organizaciones
3680	#DIV/0!	Taller de Integración
	#VALUE!	3° Año
3645	3,69	Álgebra y Geometría Analítica II
3646	2,50	Paradigmas de Programación
3647	#DIV/0!	Requisitos Avanzados
3648	#DIV/0!	Diseño de Software
3649	4,50	Sistemas Operativos
3650	#DIV/0!	Seguridad de la Información
3675	#DIV/0!	Práctica Profesional Supervisada
3651	4,10	Probabilidad y Estadística
3652	#DIV/0!	Programación Avanzada
3653	#DIV/0!	Arquitectura de Sistemas Software
3654	#DIV/0!	Virtualización de Hardware
3655	#DIV/0!	Auditoria y Legislación
	#VALUE!	4° Año
3656	1,00	Estadística Aplicada
3657	1,67	Autómatas y Gramáticas
3658	#DIV/0!	Programación Concurrente
3659	#DIV/0!	Gestión Aplic. al Des. de Software I
3660	1,00	Sistemas Operativos Avanzados
3661	#DIV/0!	Gestión de Proyectos
3662	2,00	Matemática Aplicada
3663	#DIV/0!	Lenguajes y Compiladores
3664	4,00	Inteligencia Artificial
3665	#DIV/0!	Gestión Aplicada al Desarrollo de Software II
3666	1,00	Seguridad Aplicada y Forensia
3667	#DIV/0!	Gestión de la Calidad en Procesos de Sistemas
	#VALUE!	5° Año
3668	#DIV/0!	Inteligencia Artificial Aplicada
3669	#DIV/0!	Innovacion y Emprendedorismo
3670	#DIV/0!	Ciencia de Datos
3671	#DIV/0!	Proyecto Final de Carrera
3672	#DIV/0!	Electiva I
3673	#DIV/0!	Electiva II
3674	#DIV/0!	Electiva III
	#VALUE!	Transversales
901	1,32	Inglés Transversal Nivel I
902	1,61	Inglés Transversal Nivel II
903	2,00	Inglés Transversal Nivel III
904	1,67	Inglés Transversal Nivel IV
905	1,18	Computación Transversal Nivel I
906	1,22	Computación Transversal Nivel II
"""

# for i in text.split("\n"):
#     print(
#         i,
#         bool(re.search("\d+\w+[0-9,]+", i))
#     )

regex = "(\d+)\s([\d,]+|#DIV/0!)[\s\\t]+([\w\s]+)\n"

destructured = re.findall(regex, text)

for materia in destructured:
    print(f"""{{"cod":"{materia[0]}", "dif":"{materia[1]}", "name":"{materia[2]}" }}""", end=",")

# print(
#     list(filter(
#         lambda elem: re.search("\d+\w+[\d,]+\w*[.]+", elem),
#         text.split("\n")
#     ))
# )
