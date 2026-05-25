// Estructura de Datos de la Malla Curricular: CEA Herman Ortiz Camargo
const mallaCurricular = {
    "🎓 NIVEL: TÉCNICO BÁSICO": {
        "1er Semestre": {
            "MÓDULO I: TALLER DE SISTEMAS OPERATIVOS I": [
                "Tema 1: Introducción a los sistemas operativos",
                "Tema 2: Máquinas virtuales",
                "Tema 3: Administración de recursos de hardware",
                "Tema 4: Administración de plataforma Windows"
            ],
            "MÓDULO II: MATEMÁTICA PARA LA INFORMÁTICA": [
                "Tema 1: Fundamentos y Sistemas de Numeración",
                "Tema 2: Lógica Matemática y Álgebra Booleana",
                "Tema 3: Teoría de Conjuntos, Relaciones y Funciones",
                "Tema 4: Sucesiones y series numéricas"
            ],
            "MÓDULO III: PROGRAMACIÓN I-A": [
                "Tema 1: Diseño de algoritmos",
                "Tema 2: Lenguaje de programación e IDEs",
                "Tema 3: Estructuras básicas de control",
                "Tema 4: Resolución de Problemas y Pruebas de Escritorio"
            ],
            "MÓDULO IV: HARDWARE DE COMPUTADORAS I": [
                "Tema 1: Evolución y generación de computadoras",
                "Tema 2: Arquitectura y Partes de una computadora",
                "Tema 3: Instalación de sistemas operativos y software",
                "Tema 4: Internet de las cosas (IoT)"
            ],
            "MÓDULO V: EMERGENTE I (INTELIGENCIA ARTIFICIAL BÁSICA) 🤖": [
                "Tema 1: Fundamentos de la Inteligencia Artificial",
                "Tema 2: Uso incorrecto de la IA en la informática",
                "Tema 3: Limitaciones tecnológicas de la IA actual",
                "Tema 4: Uso responsable y ético como futuros profesionales"
            ]
        }
    },
    "🎓 NIVEL: TÉCNICO AUXILIAR": {
        "2do Semestre": {
            "MÓDULO VI: TALLER DE SISTEMAS OPERATIVOS II": [
                "Tema 1: Administración plataforma Linux",
                "Tema 2: Contenedores y Virtualización Ligera",
                "Tema 3: Utilitarios de Sistema",
                "Tema 4: Seguridad y Gestión de Redes en Linux"
            ],
            "MÓDULO VII: OFIMÁTICA Y TECNOLOGÍA MULTIMEDIA I": [
                "Tema 1: Procesador de texto avanzado",
                "Tema 2: Hoja de cálculo avanzado",
                "Tema 3: Presentaciones interactivas",
                "Tema 4: Herramientas Colaborativas en la Nube"
            ],
            "MÓDULO VIII: PROGRAMACIÓN I-B": [
                "Tema 1: Estructuras Iterativas (Bucles)",
                "Tema 2: Programación modular",
                "Tema 3: Estructuras de Datos Estáticas",
                "Tema 4: Introducción a la Programación Orientada a Objetos"
            ],
            "MÓDULO IX: HARDWARE DE COMPUTADORAS II": [
                "Tema 1: Software de mantenimiento e imágenes de sistema",
                "Tema 2: Mantenimiento preventivo",
                "Tema 3: Mantenimiento correctivo",
                "Tema 4: Principios de electrónica aplicados"
            ],
            "MÓDULO X: EMERGENTE II (PROMPTS BÁSICOS) 🤖": [
                "Tema 1: Fundamentos de Prompts",
                "Tema 2: Prompts para tareas ofimáticas y soporte técnico",
                "Tema 3: Errores comunes en Modelos de Lenguaje",
                "Tema 4: Buenas prácticas y refinamiento"
            ]
        }
    },
    "🎓 NIVEL: TÉCNICO MEDIO I": {
        "3er Semestre": {
            "MÓDULO XI: INGLÉS TÉCNICO": [
                "Tema 1: Estructuras Gramaticales y Entorno Personal",
                "Tema 2: Vocabulario de Informática e Internet",
                "Tema 3: Inglés para Programación y Sistemas de Medida",
                "Tema 4: Seguridad Industrial y Manuales Técnicos"
            ],
            "MÓDULO XII: DISEÑO Y PROGRAMACIÓN WEB I-A": [
                "Tema 1: Introducción al diseño web",
                "Tema 2: HTML (Lenguaje de marcas de hipertexto)",
                "Tema 3: CSS (Hojas de estilo en cascada)",
                "Tema 4: Diseño Responsivo y Frameworks Básicos"
            ],
            "MÓDULO XIII: PROGRAMACIÓN I-C": [
                "Tema 1: Programación Orientada a Objetos (POO Avanzada)",
                "Tema 2: Modelado de Software",
                "Tema 3: Estructuras de Datos Lineales",
                "Tema 4: Listas Enlazadas y Colecciones"
            ],
            "MÓDULO XIV: OFIMÁTICA Y TECNOLOGÍA MULTIMEDIA II": [
                "Tema 1: Edición de audio digital",
                "Tema 2: Edición de video",
                "Tema 3: Tratamiento de imágenes",
                "Tema 4: Producción multimedia integral"
            ],
            "MÓDULO XV: EMPRENDIMIENTO PRODUCTIVO E IA APLICADA 🤖": [
                "Tema 1: Emprendimiento Productivo en Tecnología",
                "Tema 2: Prompt Estructurado para Resolución Lógica",
                "Tema 3: Uso de IA en Programación y Desarrollo",
                "Tema 4: Mejora de Resultados mediante Técnicas de Prompting"
            ]
        }
    },
    "🎓 NIVEL: TÉCNICO MEDIO II": {
        "4to Semestre": {
            "MÓDULO XVI: REDES DE COMPUTADORAS I": [
                "Tema 1: Fundamentos y Topologías de Red",
                "Tema 2: Medios de Transmisión, Dispositivos y Modelos",
                "Tema 3: Direccionamiento IP y Subredes",
                "Tema 4: Protocolos y Servicios en TCP/IP"
            ],
            "MÓDULO XVII: DISEÑO Y PROGRAMACIÓN WEB I-B": [
                "Tema 1: Programación Frontend con JavaScript",
                "Tema 2: Desarrollo de aplicaciones Backend",
                "Tema 3: Consumo e Integración de APIs",
                "Tema 4: Administración y publicación de sitios web"
            ],
            "MÓDULO XVIII: BASE DE DATOS I": [
                "Tema 1: Introducción a Bases de Datos",
                "Tema 2: Diseño Conceptual: Modelo Entidad-Relación (E-R)",
                "Tema 3: Diseño Lógico y Normalización",
                "Tema 4: Lenguaje SQL y Software para Bases de Datos"
            ],
            "MÓDULO XIX: PROGRAMACIÓN MÓVIL I": [
                "Tema 1: Introducción a las Tecnologías Móviles",
                "Tema 2: Arquitectura y Componentes para el Desarrollo",
                "Tema 3: Diseño de Interfaz (UI) y Experiencia de Usuario (UX)",
                "Tema 4: Aplicación práctica y conexión IoT (Microcontroladores)"
            ],
            "MÓDULO XX: MODALIDADES DE GRADUACIÓN Y PROYECTO FINAL": [
                "Tema 1: Reglamentación y Elección de Modalidad",
                "Tema 2: Planificación del Proyecto Tecnológico asistido por IA",
                "Tema 3: Desarrollo y Generación Estructural con IA",
                "Tema 4: Iteración, Refinamiento y Defensa Final"
            ]
        }
    }
};

const selectNivel = document.getElementById('nivel');
const selectSemestre = document.getElementById('semestre');
const selectModulo = document.getElementById('modulo');
const selectTema = document.getElementById('tema');

for (let nivel in mallaCurricular) {
    let option = document.createElement('option');
    option.value = nivel;
    option.text = nivel;
    selectNivel.add(option);
}

function actualizarSemestres() {
    selectSemestre.innerHTML = '<option value="">-- Elige un Semestre --</option>';
    selectModulo.innerHTML = '<option value="">-- Elige un Módulo --</option>';
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';
    
    if (selectNivel.value) {
        const semestres = mallaCurricular[selectNivel.value];
        for (let semestre in semestres) {
            let option = document.createElement('option');
            option.value = semestre;
            option.text = semestre;
            selectSemestre.add(option);
        }
        selectSemestre.disabled = false;
        selectModulo.disabled = true;
        selectTema.disabled = true;
    } else {
        selectSemestre.disabled = true;
        selectModulo.disabled = true;
        selectTema.disabled = true;
    }
}

function actualizarModulos() {
    selectModulo.innerHTML = '<option value="">-- Elige un Módulo --</option>';
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';

    if (selectSemestre.value) {
        const modulos = mallaCurricular[selectNivel.value][selectSemestre.value];
        for (let modulo in modulos) {
            let option = document.createElement('option');
            option.value = modulo;
            option.text = modulo;
            selectModulo.add(option);
        }
        selectModulo.disabled = false;
        selectTema.disabled = true;
    } else {
        selectModulo.disabled = true;
        selectTema.disabled = true;
    }
}

function actualizarTemas() {
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';

    if (selectModulo.value) {
        const temas = mallaCurricular[selectNivel.value][selectSemestre.value][selectModulo.value];
        temas.forEach(tema => {
            let option = document.createElement('option');
            option.value = tema;
            option.text = tema;
            selectTema.add(option);
        });
        selectTema.disabled = false;
    } else {
        selectTema.disabled = true;
    }
}

function generarPrompt(plataforma) {
    const nivel = selectNivel.value;
    const semestre = selectSemestre.value;
    const modulo = selectModulo.value;
    const tema = selectTema.value;

    if (!nivel || !semestre || !modulo || !tema) {
        alert("⚠️ Por favor, selecciona todas las opciones antes de generar.");
        return;
    }

    const promptMaestro = `🛠️ PROMPT MAESTRO : GENERADOR DE TEMAS (10 PÁGINAS + LISTO PARA IMPRIMIR)
Actúa como un experto en diseño curricular técnico-tecnológico y redacta un módulo educativo completo para el CEA Herman Ortiz Camargo, dirigido a estudiantes de la carrera de Sistemas Informáticos.

ESTRUCTURA DE CABECERA OBLIGATORIA (REGLA ESTRICTA):
Inicia directamente con el tema y título. Tienes terminantemente prohibido incluir encabezados que mencionen el nivel o módulo.
El título debe estar CENTRADO y el texto de color VERDE. Escribe exactamente esto al inicio:

<div align="center" style="color: green;">
<h1><b>${tema}</b></h1>
</div>

DIRECTRICES DE LONGITUD Y FORMATO DE IMPRESIÓN (REGLAS ANTI-MUROS DE TEXTO):
- EXPANSIÓN MÁXIMA: El documento debe tener una profundidad técnica exhaustiva (MÍNIMO 10 PÁGINAS o la mayor cantidad de palabras). 
- 🛑 PROHIBIDO AGRUPAR TEXTO: Tienes estrictamente prohibido generar párrafos gigantes o densos. El documento debe estar "listo para imprimir" con un diseño aireado y fácil de leer.
- SEPARACIÓN OBLIGATORIA: Debes usar un doble salto de línea (espacio en blanco) entre cada párrafo y antes de cada subtítulo.
- LISTAS Y VIÑETAS: Toda enumeración, característica o pasos de actividad DEBEN presentarse utilizando viñetas (bullet points) o números listados, cada uno en su propia línea.

DIRECTRICES DE DISEÑO VISUAL Y EXCLUSIONES:
- ❌ CERO BIBLIOGRAFÍA.
- ✅ GLOSARIO OBLIGATORIO al final de la teoría (Momentos 2).

ESTRUCTURA DE LOS 4 MOMENTOS (OBLIGATORIO):
Aplica COLOR ROJO a los encabezados y deja un ESPACIO EN BLANCO DOBLE antes de escribirlos:

<br><br>
<span style="color: red;"><b>MOMENTO 1: PRÁCTICA</b></span>
(Inicia con una analogía y escenario local en Santa Cruz. Desarrolla la problemática a fondo en al menos 3 párrafos separados. No juntes el texto).

<br><br>
<span style="color: red;"><b>MOMENTO 2: TEORÍA</b></span>
(Desarrollo técnico riguroso. Usa múltiples subtítulos, tablas y viñetas para que no se vea denso. *AQUÍ DEBES GENERAR LA MAYOR CANTIDAD DE PÁGINAS*. Al finalizar, incluye el "Glosario de términos aplicados en el tema").

<br><br>
<span style="color: red;"><b>MOMENTO 3: VALORACIÓN</b></span>
(Reflexión analítica profunda orientada a la toma de decisiones. DEBES escribir mínimo 4 párrafos separados por doble salto de línea. PROHIBIDO hacer un solo párrafo gigante).

<br><br>
<span style="color: red;"><b>MOMENTO 4: PRODUCCIÓN</b></span>
(CUADERNO DE TRABAJO: TALLER. Genera 3 actividades. Los pasos de cada actividad DEBEN estar separados en líneas diferentes utilizando números. Ejemplo: Paso 1... [ENTER] Paso 2... [ENTER]).

REGLAS FINALES DE EJECUCIÓN:
1. Tono: Español de Bolivia. Técnico y riguroso.
2. 🔗 IMPRIMIR ENLACE (OBLIGATORIO): Exporta todo este documento directamente a Google Docs e IMPRIME EL ENLACE PÚBLICO AQUÍ MISMO.

¡Inicia la generación masiva ahora mismo exportándolo a Google Docs respetando las separaciones y no olvides darme el enlace!`;

    navigator.clipboard.writeText(promptMaestro).then(() => {
        const toast = document.getElementById("toast");
        const toastText = document.getElementById("toast-text");
        
        const nombrePlataforma = plataforma === 'gemini' ? 'Gemini' : 'ChatGPT';
        toastText.textContent = `¡Prompt copiado! Abriendo ${nombrePlataforma}...`;
        
        toast.classList.add("show");
        
        setTimeout(function(){ 
            toast.classList.remove("show"); 
        }, 3000);
        
        setTimeout(() => {
            if (plataforma === 'gemini') {
                window.open('https://gemini.google.com/app', '_blank');
            } else if (plataforma === 'chatgpt') {
                window.open('https://chatgpt.com/', '_blank');
            }
        }, 1200);
    }).catch(err => {
        alert('Hubo un error al intentar copiar el prompt. Asegúrate de dar permisos al navegador.');
        console.error(err);
    });
}