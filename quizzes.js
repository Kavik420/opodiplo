// Definición de los datos de los quizzes para cada tema
const quizzesData = [
    // DERECHO INTERNACIONAL PÚBLICO
    { 
        id: 'tema1', 
        title: 'Tema 1: Derecho Internacional Público. Fuentes.', 
        questions: [
            { q: '¿Qué artículo del Estatuto del TIJ es la base tradicional de las fuentes del Derecho Internacional?', a: ['Art. 38.1 del Estatuto del TIJ', 'Art. 2.4 de la Carta de la ONU', 'Art. 53 de la Convención de Viena', 'Art. 103 de la Carta de la ONU'], correct: 0, rationale: 'El Artículo 38.1 del Estatuto del TIJ enumera las convenciones, la costumbre, los principios generales, la doctrina y la jurisprudencia.' },
            { q: '¿Qué criterio de prelación de fuentes establece el Art. 38.1 del Estatuto del TIJ en caso de conflicto?', a: ['Lex posterior derogat legi priori', 'Lex superior derogat legi inferiori', 'Lex specialis derogat legi generali', 'No existe un orden o prelación entre ellas, salvo ius cogens'], correct: 3, rationale: 'El Artículo 38.1 no establece un orden jerárquico entre las fuentes principales (a, b, c), sino que se aplican los principios generales de derecho.' },
            { q: '¿Cuál de los siguientes NO es un medio auxiliar según el Estatuto del TIJ?', a: ['La Doctrina', 'La Jurisprudencia', 'La Costumbre Internacional', 'Las decisiones judiciales'], correct: 2, rationale: 'La Costumbre Internacional es una fuente principal (literal b), mientras que la doctrina y la jurisprudencia son medios auxiliares (literal d).' },
            { q: '¿Cuáles son los dos elementos constitutivos de la Costumbre Internacional?', a: ['La práctica general y la voluntad expresa', 'El elemento material y la opinio iuris', 'El acto unilateral y la jurisprudencia', 'El consenso y la notificación'], correct: 1, rationale: 'La Costumbre se compone del elemento material u objetivo (práctica constante y uniforme) y el elemento subjetivo o psicológico (opinio iuris).' },
            { q: '¿Qué característica esencial tienen las normas de ius cogens?', a: ['Son normas dispositivas que admiten acuerdo en contrario.', 'Son normas de Derecho Internacional particular.', 'Son normas que prevalecen siempre y no admiten acuerdo en contrario.', 'Son normas cuya existencia debe ser probada por quien las alega.'], correct: 2, rationale: 'Las normas de ius cogens son normas imperativas que protegen valores esenciales de la comunidad internacional y prevalecen sobre cualquier otra norma.' },
            { q: '¿Qué es un acto unilateral del Estado?', a: ['Una declaración de voluntad con intención de producir efectos jurídicos obligatorios.', 'Un acuerdo entre dos Estados.', 'Una resolución de una Organización Internacional.', 'Una sentencia de un tribunal internacional.'], correct: 0, rationale: 'Un acto unilateral es una manifestación de voluntad de un solo sujeto de DI, cuya validez no depende de otros actos jurídicos y que tiende a producir efectos para el sujeto que la emite.'},
            { q: '¿Cuál de estos es un ejemplo de acto unilateral?', a: ['La ratificación de un tratado.', 'La protesta diplomática.', 'Una sentencia del TIJ.', 'La adhesión a una organización internacional.'], correct: 1, rationale: 'La protesta, la notificación, la promesa, el reconocimiento o la renuncia son ejemplos clásicos de actos unilaterales.'},
            { q: '¿Qué son los principios generales del Derecho?', a: ['Normas consuetudinarias de ámbito universal.', 'Principios extraídos de los ordenamientos internos y adaptados al DI.', 'Las disposiciones de la Carta de la ONU.', 'Las opiniones de la doctrina más cualificada.'], correct: 1, rationale: 'Son principios comunes a los distintos ordenamientos estatales que, por su generalidad, pueden aplicarse en el orden internacional.'},
            { q: 'La equidad "contra legem" (contra la ley), ¿puede ser aplicada por el TIJ?', a: ['Sí, siempre que lo considere oportuno.', 'No, en ningún caso.', 'Solo si las partes en la controversia así lo acuerdan.', 'Sí, pero solo para controversias territoriales.'], correct: 2, rationale: 'El Art. 38.2 del Estatuto del TIJ permite al tribunal decidir un litigio "ex aequo et bono" (según la equidad) si las partes así lo convienen, lo que incluye la equidad contra legem.'},
            { q: '¿Qué es el "soft law" o derecho blando?', a: ['Normas de ius cogens.', 'Tratados internacionales no ratificados.', 'Instrumentos que no crean obligaciones jurídicas vinculantes pero que pueden guiar la conducta de los Estados.', 'La jurisprudencia de los tribunales arbitrales.'], correct: 2, rationale: 'El soft law se refiere a resoluciones no vinculantes, declaraciones, etc., que aunque carecen de obligatoriedad formal, tienen relevancia política y pueden influir en el desarrollo del derecho vinculante.'},
            { q: '¿La jurisprudencia del TIJ crea precedentes vinculantes para casos futuros?', a: ['Sí, como en el sistema del Common Law.', 'No, sus sentencias solo son obligatorias para las partes y respecto del caso decidido.', 'Sí, pero solo para los 5 miembros permanentes del CS.', 'No, la jurisprudencia no es fuente de DI.'], correct: 1, rationale: 'El Art. 59 del Estatuto del TIJ establece la regla de la cosa juzgada relativa: la sentencia es vinculante solo para las partes en litigio y para el caso concreto.'},
            { q: '¿Qué implica el principio de "Estoppel" o de los actos propios?', a: ['Un Estado no puede contradecir su propia conducta anterior si ello lesiona los derechos o expectativas de otro Estado.', 'Los Estados deben cumplir de buena fe sus obligaciones.', 'Los tratados prevalecen sobre el derecho interno.', 'Las normas especiales priman sobre las generales.'], correct: 0, rationale: 'El Estoppel impide que un Estado vaya en contra de sus propios actos cuando con su conducta ha inducido a otro a actuar de una determinada manera, generando expectativas legítimas.'},
            { q: '¿Qué es la aquiescencia?', a: ['La aceptación expresa de una norma.', 'El silencio o pasividad de un Estado ante un comportamiento de otro que normalmente exigiría una protesta.', 'La firma de un tratado ad referéndum.', 'La objeción persistente a una costumbre.'], correct: 1, rationale: 'La aquiescencia equivale a un reconocimiento tácito manifestado mediante un comportamiento unilateral que la otra parte puede interpretar como un consentimiento.'},
            { q: '¿Qué diferencia a un principio general del Derecho de una norma consuetudinaria?', a: ['Los principios no requieren práctica estatal (elemento material).', 'La costumbre es escrita y los principios no.', 'Los principios solo se aplican en ausencia de tratado.', 'No hay ninguna diferencia.'], correct: 0, rationale: 'Mientras la costumbre requiere una práctica y una opinio iuris, los principios generales se derivan de la lógica jurídica de los sistemas internos y no necesitan una práctica estatal previa.'},
            { q: 'El objetor persistente es una figura relacionada con:', a: ['Los tratados internacionales.', 'La costumbre internacional.', 'Los actos unilaterales.', 'Las resoluciones de la AGNU.'], correct: 1, rationale: 'Un Estado que se opone de forma clara, constante e inequívoca a una norma consuetudinaria mientras esta se encuentra en proceso de formación no quedará vinculado por ella.'}
        ],
        diagram: `
        graph TD
            A[FUENTES DEL D.I. (Art. 38 TIJ)] --> B{Fuentes Principales}
            A --> C{Medios Auxiliares}
            
            B --> B1[Tratados Internacionales]
            B --> B2[Costumbre Internacional]
            B --> B3[Principios Generales del Derecho]
            
            C --> C1[Jurisprudencia]
            C --> C2[Doctrina]
            
            B2 --> D1(Elemento Material: Práctica)
            B2 --> D2(Elemento Espiritual: Opinio Iuris)
            
            E[Otras Fuentes] --> F[Actos Unilaterales]
            E --> G[Resoluciones O.I.]
            
            style A fill:#e1f5fe,stroke:#01579b
            style B fill:#e8f5e9,stroke:#2e7d32
            style C fill:#fff3e0,stroke:#ef6c00
        `
    },
    { 
        id: 'tema2', 
        title: 'Tema 2: Tratados Internacionales (I). Celebración.', 
        questions: [
            { q: 'Según la CVDT, ¿qué NO es un requisito esencial para un Tratado Internacional?', a: ['Ser un acuerdo por escrito', 'Estar regido por el Derecho Internacional', 'Tener un número ilimitado de partes', 'Ser celebrado entre sujetos de Derecho Internacional'], correct: 2, rationale: 'La CVDT se aplica a tratados entre Estados y no impone un límite al número de partes.' },
            { q: '¿Qué fase de la celebración de tratados tiene por objeto acordar que el texto adoptado es el "auténtico y definitivo"?', a: ['Negociación', 'Adopción', 'Autenticación', 'Manifestación del consentimiento'], correct: 2, rationale: 'La Autenticación (mediante firma, firma ad referéndum o rúbrica) es el acto por el que se establece el texto como auténtico y definitivo.' },
            { q: '¿Quién tiene la competencia general en España para dirigir la política exterior y la iniciativa de la negociación de tratados?', a: ['El Rey, como Jefe del Estado.', 'El Consejo de Estado.', 'El Gobierno (Consejo de Ministros y MAEUEC).', 'Las Cortes Generales.'], correct: 2, rationale: 'El Gobierno dirige la política exterior (Art. 97 CE) y corresponde al MAEUEC la competencia general en la materia.' },
            { q: 'En la adopción del texto de un tratado en el seno de una conferencia internacional, ¿qué mayoría se requiere por regla general?', 'a': ['Unanimidad', 'Mayoría de dos tercios de los Estados presentes y votantes', 'Mayoría simple', 'La mayoría de los Estados negociadores'], correct: 1, rationale: 'El Art. 9.2 de la CVDT establece la mayoría de dos tercios, a menos que se decida aplicar una regla diferente.' },
            { q: '¿Qué se necesita en España para la manifestación del consentimiento de los tratados que afecten a la integridad territorial?', a: ['Ley Ordinaria', 'Ley Orgánica', 'Mayoría de cada una de las Cámaras (Art. 94.1 CE)', 'La sola firma del Rey con refrendo del Ministro'], correct: 2, rationale: 'El Art. 94.1 CE requiere la previa autorización de las Cortes Generales (aprobación por mayoría de cada Cámara) para los tratados de carácter político, militar, territorial, etc.' },
            { q: '¿Qué es la "plenipotencia" o plenos poderes?', a: ['La capacidad inherente del Jefe de Estado para firmar tratados.', 'Un documento que emana de la autoridad competente de un Estado y por el que se designa a una o varias personas para representar al Estado.', 'La fase de negociación de un tratado multilateral.', 'El acto de depósito del instrumento de ratificación.'], correct: 1, rationale: 'El Art. 2.1.c de la CVDT lo define como el documento que acredita la representación de un Estado para las distintas fases de celebración de un tratado.'},
            { q: '¿Quiénes NO necesitan presentar plenos poderes según el Art. 7.2 de la CVDT?', a: ['Los embajadores para la adopción del texto de un tratado con el país receptor.', 'Los Jefes de Estado, Jefes de Gobierno y Ministros de Asuntos Exteriores.', 'Los representantes acreditados ante una conferencia internacional.', 'Todos ellos necesitan plenos poderes.'], correct: 1, rationale: 'Los Jefes de Estado, de Gobierno y Ministros de AAEE tienen capacidad inherente para representar al Estado en todos los actos relativos a la celebración de un tratado.'},
            { q: '¿Qué significa la "firma ad referéndum"?', a: ['Una firma definitiva que no requiere ratificación.', 'Una firma sujeta a confirmación posterior por el Estado.', 'El acto de autenticación mediante rúbrica.', 'La firma de un tratado por un representante sin plenos poderes.'], correct: 1, rationale: 'Es una firma cuyo efecto definitivo depende de su confirmación por la autoridad competente del Estado, actuando como una firma condicionada.'},
            { q: 'En España, ¿qué órgano califica la naturaleza de un tratado a efectos de su tramitación parlamentaria (Art. 93, 94.1 o 94.2 CE)?', a: ['El Tribunal Constitucional.', 'El Consejo de Estado, con carácter vinculante.', 'El Gobierno, previo dictamen del Consejo de Estado.', 'Las Cortes Generales.'], correct: 2, rationale: 'El Gobierno, con el dictamen preceptivo pero no vinculante del Consejo de Estado, es quien califica el tratado para determinar la vía parlamentaria a seguir.'},
            { q: '¿Qué tipo de tratado requiere autorización mediante Ley Orgánica en España?', a: ['Los que impliquen obligaciones financieras para la Hacienda Pública.', 'Los de carácter militar.', 'Aquellos por los que se atribuya a una organización o institución internacional el ejercicio de competencias derivadas de la Constitución.', 'Todos los tratados de la UE.'], correct: 2, rationale: 'El Art. 93 de la Constitución Española reserva la Ley Orgánica para los tratados de cesión de competencias soberanas, como fue el caso de la adhesión a las Comunidades Europeas.'},
            { q: '¿Qué implica el "depósito" de un tratado?', a: ['La custodia del texto original del tratado y la centralización de todos los actos relativos a él.', 'La publicación del tratado en el diario oficial.', 'La fase de negociación en secreto.', 'La entrada en vigor provisional.'], correct: 0, rationale: 'El depositario (un Estado, varios, o una OI) es el custodio del texto auténtico y centraliza la recepción de instrumentos de ratificación, adhesión, reservas, etc.'},
            { q: 'Un tratado produce efectos jurídicos para terceros Estados sin su consentimiento?', a: ['Sí, siempre.', 'No, como regla general (pacta tertiis nec nocent nec prosunt).', 'Solo si les impone obligaciones.', 'Solo si son miembros de la ONU.'], correct: 1, rationale: 'El Art. 34 de la CVDT consagra el principio del efecto relativo de los tratados: no crean obligaciones ni derechos para un tercer Estado sin su consentimiento.'},
            { q: '¿Cuándo puede un tratado crear una obligación para un tercer Estado?', a: ['Cuando el tercer Estado lo acepta expresamente y por escrito.', 'Cuando el tratado tiene carácter humanitario.', 'Automáticamente si el tratado es adoptado por la AGNU.', 'Nunca.'], correct: 0, rationale: 'El Art. 35 de la CVDT exige que las partes tengan esa intención y que el tercer Estado acepte expresamente y por escrito dicha obligación.'},
            { q: '¿Qué es la "aplicación provisional" de un tratado?', a: ['La aplicación del tratado antes de su entrada en vigor, si así se ha convenido.', 'La aplicación del tratado solo a una parte del territorio.', 'La aplicación retroactiva de sus disposiciones.', 'Un sinónimo de entrada en vigor.'], correct: 0, rationale: 'El Art. 25 de la CVDT permite que un tratado o parte de él se aplique provisionalmente antes de su entrada en vigor si el propio tratado lo dispone o los negociadores lo han convenido.'},
            { q: 'En el sistema español, ¿quién manifiesta formalmente el consentimiento del Estado en obligarse por un tratado (ratificación, adhesión, etc.)?', a: ['El Presidente del Gobierno.', 'El Ministro de Asuntos Exteriores.', 'Las Cortes Generales.', 'El Rey.'], correct: 3, rationale: 'El Art. 63.2 de la CE establece que corresponde al Rey manifestar el consentimiento del Estado para obligarse internacionalmente por medio de tratados, con el refrendo del Ministro de Asuntos Exteriores.'}
        ],
        diagram: `
        graph LR
            A[FASES TRATADOS] --> B[Negociación]
            B --> C[Adopción del Texto]
            C --> D[Autenticación]
            D --> E[Manifestación Consentimiento]
            E --> F[Entrada en Vigor]
            
            subgraph Derecho Español
            E1[Gobierno: Iniciativa]
            E2{Cortes Generales}
            E3[Rey: Firma]
            
            E1 --> D
            D --> E2
            E2 -- Art 93: L.O. --> E3
            E2 -- Art 94.1: Autorización --> E3
            E2 -- Art 94.2: Información --> E3
            end
        `
    },
    { 
        id: 'tema3', 
        title: 'Tema 3: Tratados Internacionales (II). Reservas, entrada en vigor y crisis.', 
        questions: [
            { q: '¿Qué distingue una **reserva** de una declaración interpretativa?', a: ['La reserva busca excluir o modificar efectos jurídicos de ciertas disposiciones.', 'La reserva puede ser tácita.', 'La reserva se puede formular en cualquier momento.', 'La declaración interpretativa tiene efectos jurídicos obligatorios.'], correct: 0, rationale: 'La reserva (Art. 2.1.d CVDT) busca excluir o modificar los efectos jurídicos, mientras la declaración interpretativa solo busca precisar el sentido o alcance.' },
            { q: '¿Cuál es el **efecto** de una reserva que ha sido **aceptada** por otro Estado Parte?', 'a': ['El tratado no regirá entre ellos.', 'El tratado regirá en la medida determinada por la reserva.', 'El tratado se aplica en su integridad.', 'La reserva se considera nula.'], correct: 1, rationale: 'El Art. 21.1 CVDT establece que, en las relaciones entre el Estado reservante y el Estado aceptante, el tratado regirá en la medida determinada por la reserva.' },
            { q: '¿Qué ocurre si un Estado **objetante** opta por la **no entrada en vigor** del tratado con el Estado reservante?', a: ['El tratado regirá en su integridad.', 'El tratado regirá en la medida determinada por la reserva.', 'Ninguno de los dos Estados se encuentra obligado por el tratado inter se.', 'El Estado objetante debe retirarse del tratado.'], correct: 2, rationale: 'Si un Estado objetante manifiesta inequívocamente su intención de que el tratado no entre en vigor, este no regirá entre el reservante y el objetante (Art. 20.4.b CVDT).' },
            { q: '¿Cuál de las siguientes **no** es una causa de **Nulidad** de un tratado según la CVDT?', a: ['El error sobre una situación esencial del consentimiento.', 'El cambio fundamental de circunstancias.', 'El consentimiento obtenido por coacción sobre el representante.', 'La oposición a una norma de ius cogens.'], correct: 1, rationale: 'El cambio fundamental de circunstancias (Art. 62) es una causa de Terminación o Suspensión, no de Nulidad.' },
            { q: '¿Qué principio de efectos de los tratados se enuncia en el artículo 26 de la CVDT?', a: ['Irretroactividad de los tratados', 'Pacta sunt servanda', 'Efectos para terceros Estados', 'Lex posterior derogat lex anterior'], correct: 1, rationale: 'El Art. 26 CVDT establece: "Todo tratado en vigor obliga a las partes y debe ser cumplido por ellas de buena fe" (pacta sunt servanda).' }
        ],
        diagram: `
        graph TD
            A[CRISIS DE LOS TRATADOS]
            
            A --> B[Nulidad]
            B --> B1[Absoluta]
            B1 --> B1a(Coacción S/Representante)
            B1 --> B1b(Coacción S/Estado)
            B1 --> B1c(Contra Ius Cogens)
            
            B --> B2[Relativa]
            B2 --> B2a(Error, Dolo, Corrupción)
            B2 --> B2b(Violación D.Interno)
            
            A --> C[Terminación]
            C --> C1[Voluntad Partes]
            C --> C2[Denuncia/Retirada]
            C --> C3[Violación Grave]
            C --> C4[Cambio Fund. Circunstancias]
            
            A --> D[Suspensión]
        `
    },
    { 
        id: 'tema4', 
        title: 'Tema 4: Derecho Internacional y Derechos Internos.', 
        questions: [
            { q: 'En el plano internacional, ¿qué establece el Art. 27 de la CVDT respecto al Derecho interno?', a: ['El Derecho interno prevalece sobre el tratado.', 'El Estado puede invocar su Derecho interno para justificar el incumplimiento de un tratado.', 'El Derecho interno no puede invocarse para justificar el incumplimiento de un tratado.', 'El tratado se adapta automáticamente al Derecho interno.'], correct: 2, rationale: 'El Art. 27 CVDT establece la regla de primacía del Derecho Internacional en el plano internacional: un Estado no puede invocar su Derecho interno para justificar el incumplimiento de un tratado.' },
            { q: '¿Cómo es el sistema de **recepción** del **Derecho Internacional General o consuetudinario** en el Derecho español?', a: ['Dualista (requiere acto específico)', 'Monista (incorporación automática)', 'De publicación formal', 'De reenvío legislativo'], correct: 1, rationale: 'La costumbre internacional se incorpora al ordenamiento jurídico español sin necesidad de un acto específico de recepción, por lo que el sistema es monista.' },
            { q: '¿Cuál es el requisito indispensable para la **recepción** de los **Tratados Internacionales** en el ordenamiento español?', a: ['Ratificación por el Rey', 'Publicación íntegra en el Boletín Oficial del Estado (BOE)', 'Ley de conversión', 'Aprobación por Ley Orgánica'], correct: 1, rationale: 'Según el Art. 96.1 CE y el Art. 1.5 CC, la publicación íntegra en el BOE es el requisito de recepción (sistema dualista moderado).' },
            { q: '¿Qué **rango jerárquico** tienen los Tratados Internacionales válidamente celebrados y publicados en el Derecho español?', 'a': ['Supraconstitucional', 'Legal', 'Supralegal e infraconstitucional', 'Infralegal'], correct: 2, rationale: 'El Art. 31 de la Ley 25/2014 establece que prevalecen sobre cualquier otra norma interna, salvo las de rango constitucional (supralegal e infraconstitucional).' },
            { q: '¿Cómo acceden al Derecho español los actos normativos de la **Unión Europea** que gozan de eficacia directa?', a: ['Mediante Ley Orgánica (Art. 93 CE).', 'Mediante publicación en el BOE (Art. 96 CE).', 'Con la mera publicación oficial en el Diario Oficial de la Unión Europea (Art. 93 CE).', 'Requieren un Real Decreto de transposición.'], correct: 2, rationale: 'En el caso de la UE, el Art. 93 CE (cesión de competencias) permite que las normas de Derecho derivado (como los reglamentos) surtan efectos con la mera publicación en el DOUE, sin necesidad de publicación en el BOE.' }
        ],
        diagram: `
        graph TD
            A[RELACIONES DI - D.INTERNO]
            
            A --> B{Recepción en España}
            
            B --> C[Costumbre]
            C --> C1(Automática / Monista)
            
            B --> D[Tratados]
            D --> D1(Publicación BOE / Art 96 CE)
            
            B --> E[Derecho UE]
            E --> E1(Publicación DOUE / Art 93 CE)
            
            A --> F{Jerarquía en España}
            F --> G[1. Constitución]
            F --> H[2. Tratados Internacionales]
            F --> I[3. Leyes Internas]
            
            style H fill:#fff9c4,stroke:#fbc02d
        `
    },
    { 
        id: 'tema5', 
        title: 'Tema 5: Sujetos de Derecho Internacional. El Estado.', 
        questions: [
            { q: '¿Cuáles son los tres elementos constitutivos del **Estado** como sujeto principal del Derecho Internacional?', a: ['Gobierno, Soberanía y Reconocimiento.', 'Territorio, Población y Organización política (Gobierno).', 'Poder Legislativo, Ejecutivo y Judicial.', 'Nacionalidad, Sucesión y Territorio.'], correct: 1, rationale: 'Los elementos son el territorio, la población que habita en él, y una organización política que ejerce sus poderes.' },
            { q: '¿Qué principio se aplica para determinar la adquisición, delimitación y conservación del territorio, según el material de referencia?', a: ['Principio *uti possidetis iuris*.', 'Principio de Efectividad.', 'Principio de no intervención.', 'Principio *res nullius*.'], correct: 1, rationale: 'El Derecho Internacional rige por el principio de efectividad, según el cual el territorio se encuentra bajo la soberanía del Estado que efectivamente lo administra o controla.' },
            { q: '¿Qué tipo de acto es el **Reconocimiento de un Estado**, en cuanto a su naturaleza jurídica, según la doctrina dominante?', a: ['Acto constitutivo de la personalidad jurídica internacional.', 'Acto unilateral y voluntario, de naturaleza política, con efectos declarativos.', 'Acto obligatorio que concede la soberanía.', 'Acto regido por la Convención de Viena de 1969.'], correct: 1, rationale: 'El reconocimiento es político y declarativo, pues el Estado nace cuando reúne los elementos constitutivos, no con el reconocimiento.' },
            { q: '¿Qué doctrina en materia de **Reconocimiento de Gobiernos** implica sustituir el reconocimiento expreso por el tácito, limitándose a mantener o retirar a los agentes diplomáticos?', a: ['Doctrina Tobar o de la Legalidad.', 'Doctrina Larreta.', 'Doctrina Estrada o de la Efectividad.', 'Doctrina Wilson.'], correct: 2, rationale: 'La Doctrina Estrada (o de la Efectividad) se orienta a no emitir juicio de valor sobre el régimen político de otros Estados, limitándose a mantener o retirar a los agentes diplomáticos.' },
            { q: '¿Cuál de las siguientes **no** es una manifestación de la soberanía estatal *ad extra*?', a: ['Mantener relaciones internacionales con otros Estados.', 'Elegir la forma de gobierno interna.', 'Participar en la creación de normas internacionales.', 'Asumir obligaciones internacionales.'], correct: 1, rationale: 'La elección de la forma de gobierno y el ejercicio de poderes dentro del territorio son manifestaciones de la soberanía *ad intra*.' }
        ],
        diagram: `
        graph TD
            A[EL ESTADO] --> B{Elementos Constitutivos}
            B --> C[Territorio]
            B --> D[Población]
            B --> E[Gobierno / Org. Política]
            
            A --> F{Reconocimiento}
            F --> G[De Estados]
            G --> G1(Acto Declarativo)
            G --> G2(Político / Discrecional)
            
            F --> H[De Gobiernos]
            H --> H1(Doctrina Tobar / Legalidad)
            H --> H2(Doctrina Estrada / Efectividad)
        `
    },
    { 
        id: 'tema6', 
        title: 'Tema 6: La inmunidad del Estado.', 
        questions: [
            { q: '¿Cuál es el **fundamento** de las inmunidades estatales?', a: ['El principio de no injerencia.', 'La costumbre de los Estados.', 'El principio de igualdad soberana de los Estados (Art. 2.1 Carta de la ONU).', 'La necesidad funcional de la diplomacia.'], correct: 2, rationale: 'Las inmunidades estatales se basan en el principio de igualdad soberana, que implica que un Estado no puede ser juzgado por los tribunales de otro.' },
            { q: '¿Qué implica la **Inmunidad de Jurisdicción**?', a: ['La imposibilidad de ejecutar sentencias contra el Estado extranjero.', 'La imposibilidad de ejercer jurisdicción sobre un Estado extranjero por los tribunales de otro.', 'La inviolabilidad de los locales de la misión diplomática.', 'La exención de impuestos del Estado extranjero.'], correct: 1, rationale: 'La inmunidad de jurisdicción (iure imperii) impide el ejercicio de la jurisdicción del Estado del foro sobre el Estado extranjero.' },
            { q: '¿A qué se refiere la Inmunidad de Jurisdicción **restringida**?', a: ['Se aplica solo a los actos *iure gestionis*.', 'Se aplica solo a los actos *iure imperii*.', 'Se aplica a ambos, pero solo en la Zona Contigua.', 'Se aplica a los actos *iure imperii*, pero no a los *iure gestionis* (actos de gestión comercial/privada).'], correct: 3, rationale: 'La inmunidad restringida solo se mantiene para los actos de poder público (*iure imperii*), permitiendo juzgar al Estado extranjero por actos de gestión o comerciales (*iure gestionis*).' },
            { q: '¿Cuál de los siguientes **bienes** está **especialmente protegido** y no puede ser objeto de ejecución forzosa según la Convención de 2005?', a: ['Bienes de una empresa pública para fines comerciales.', 'Bienes que formen parte de un patrimonio cultural y no estén destinados a ser puestos en venta.', 'Cuentas bancarias personales del embajador.', 'Bienes inmuebles adquiridos por el Estado extranjero para inversión.'], correct: 1, rationale: 'El Art. 21 de la Convención de 2005 protege bienes como los del patrimonio cultural del Estado y los del banco central.' },
            { q: 'Según la práctica española (STC 107/1992), ¿la inmunidad de ejecución vulnera el derecho a la tutela judicial efectiva (Art. 24.1 CE)?', a: ['Sí, siempre.', 'No, es una limitación legítima derivada del Derecho Internacional.', 'Sí, salvo que el Estado extranjero renuncie a ella.', 'Solo si la ejecución recae sobre bienes *iure gestionis*.'], correct: 1, rationale: 'La STC 107/1992 establece que la inmunidad es una limitación legítima, siempre que no se le dé una extensión indebida o ampliada por los tribunales ordinarios.' }
        ],
        diagram: `
        graph LR
            A[INMUNIDAD DEL ESTADO]
            A --> B{Fundamento}
            B --> B1[Igualdad Soberana]
            B --> B2(Par in parem non habet imperium)
            
            A --> C{Tipos}
            C --> D[De Jurisdicción]
            D --> D1(Absoluta)
            D --> D2(Restringida - Doctrina Actual)
            
            D2 -- Protege --> E[Actos Iure Imperii]
            D2 -- No protege --> F[Actos Iure Gestionis]
            
            C --> G[De Ejecución]
            G --> H[Regla General: Inmunidad]
            H --> I[Excepción: Bienes comerciales]
        `
    },
    { 
        id: 'tema7', 
        title: 'Tema 7: Otros sujetos de Derecho Internacional.', 
        questions: [
            { q: '¿Cuál es el fundamento de la **subjetividad internacional** de las **Organizaciones Internacionales** según la jurisprudencia del TIJ?', a: ['El reconocimiento de cada Estado fundador.', 'Su base territorial.', 'La teoría de los poderes implícitos.', 'Su personalidad jurídica plena, igual a la del Estado.'], correct: 2, rationale: 'El TIJ, en el Dictamen de 1949 (Reparación de daños), aplicó la teoría de los poderes implícitos, reconociendo las competencias necesarias para alcanzar sus objetivos.' },
            { q: '¿Qué doble **legitimación** ha adquirido el **individuo** en el Derecho Internacional?', a: ['Activa (DDHH) y pasiva (DIPenal).', 'Activa (Asilo) y pasiva (Extradición).', 'Interna (Nacionalidad) y externa (Libre Circulación).', 'Convencional y consuetudinaria.'], correct: 0, rationale: 'El individuo tiene legitimación activa (ius standi) en DDHH (ej. TEDH) y pasiva (responsabilidad penal individual) en DIPenal (ej. CPI).' },
            { q: '¿A qué se refiere la **dimensión externa** del **derecho a la libre determinación de los pueblos**?', a: ['Al derecho al autogobierno y la participación democrática.', 'A la creación de un Estado soberano e independiente (o libre asociación/integración).', 'Al derecho de las minorías a proteger su cultura.', 'A la condena de los regímenes racistas.'], correct: 1, rationale: 'La dimensión externa se centra en la libre elección del estatus político: independencia, libre asociación o integración (especialmente para pueblos coloniales).' },
            { q: '¿Cuál de los siguientes es considerado un **sujeto de tradición histórica**?', 'a': ['Amnistía Internacional', 'La Organización Mundial del Comercio (OMC)', 'La Santa Sede', 'El Comité Internacional de la Cruz Roja (CICR)'], correct: 2, rationale: 'La Santa Sede y la Soberana Orden de Malta son sujetos de tradición histórica, que actúan en calidad de sujetos internacionales (ius ad tractatum, ius legationis).' },
            { q: '¿La **prohibición de la secesión** es una cláusula de salvaguardia de qué principio en la Resolución 2625 (XXV)?', a: ['El principio de igualdad soberana.', 'El principio de integridad territorial de los Estados.', 'El principio *uti possidetis iuris*.', 'El principio de no intervención.'], correct: 1, rationale: 'La Resolución 2625 (XXV) establece que el derecho a la libre determinación no debe interpretarse en el sentido de quebrantar la integridad territorial de Estados soberanos e independientes.' }
        ],
        diagram: `
        graph TD
            A[SUJETOS DE D.I.]
            
            A --> B[ESTADO]
            B --> B1(Sujeto Pleno y Originario)
            
            A --> C[Organizaciones Internacionales]
            C --> C1(Sujeto Funcional y Derivado)
            
            A --> D[Pueblos]
            D --> D1(Libre Determinación)
            
            A --> E[Individuo]
            E --> E1(Subjetividad Limitada)
            E1 --> E1a[Activa: DDHH]
            E1 --> E1b[Pasiva: Crimenes Int.]
            
            A --> F[Sujetos Históricos]
            F --> F1[Santa Sede]
            F --> F2[Orden de Malta]
        `
    },
    { 
        id: 'tema8', 
        title: 'Tema 8: Órganos centrales y diplomacia ad hoc.', 
        questions: [
            { q: '¿Qué concepto se utiliza para explicar la dualidad de funciones (internas e internacionales) de los órganos centrales del Estado?', a: ['Principio de soberanía plena', 'Teoría del desdoblamiento funcional', 'Principio de efectividad', 'Inmunidad *ratione personae*'], correct: 1, rationale: 'La teoría del desdoblamiento funcional (Scelle) explica que un órgano estatal actúa simultáneamente bajo Derecho interno e internacional.' },
            { q: 'Según la CVDT, ¿qué órgano **no** necesita presentar plenos poderes para la realización de todos los actos relativos a la celebración de un tratado?', a: ['El Jefe de Misión diplomática', 'El Ministro de Asuntos Exteriores', 'El Jefe de una delegación en una conferencia internacional', 'Cualquier representante autorizado'], correct: 1, rationale: 'El Art. 7.2 CVDT concede esta capacidad general al Jefe de Estado, Jefe de Gobierno y Ministro de Asuntos Exteriores.' },
            { q: '¿Qué tipo de inmunidad gozan el Jefe de Estado, Jefe de Gobierno y Ministro de AA.EE. **mientras ejercen su cargo**, cubriendo todos los actos, oficiales y privados?', a: ['Inmunidad *ratione materiae* (funcional)', 'Inviolabilidad personal', 'Inmunidad *ratione personae* (personal)', 'Inmunidad de jurisdicción civil'], correct: 2, rationale: 'La inmunidad personal (*ratione personae*) es absoluta en alcance, pero temporal, y protege a las personas mientras están en el cargo.' },
            { q: '¿Cuál es la **característica esencial** de una **Misión Especial** según la Convención de Viena de 1969?', a: ['Su carácter permanente', 'Su representatividad y temporalidad', 'Su inmunidad absoluta de jurisdicción', 'Su dependencia del Jefe de Misión permanente'], correct: 1, rationale: 'La Misión Especial es una misión **temporal** que tenga carácter **representativo** del Estado, enviada para tratar asuntos determinados.' },
            { q: '¿Cuál es la **excepción** a la inmunidad de jurisdicción penal de un Jefe de Estado en ejercicio?', a: ['La renuncia de su propio Estado.', 'La comisión de un delito grave.', 'Los crímenes internacionales.', 'La comisión de un acto *ultra vires*.'], correct: 0, rationale: 'La inmunidad *ratione personae* solo puede levantarse por renuncia del Estado al que representa. No cesa por crímenes internacionales ante tribunales nacionales extranjeros mientras dure el cargo.' }
        ],
        diagram: `
        graph TD
            A[ÓRGANOS DEL ESTADO RR.II.]
            
            A --> B[Centrales]
            B --> B1[Jefe de Estado]
            B --> B2[Jefe de Gobierno]
            B --> B3[Ministro AA.EE.]
            
            B --> C{Privilegios e Inmunidades}
            C --> C1[Inviolabilidad]
            C --> C2[Inmunidad de Jurisdicción]
            C2 --> D1(Ratione Personae: Absoluta/Temporal)
            C2 --> D2(Ratione Materiae: Actos Oficiales/Perpetua)
            
            A --> E[Diplomacia Ad Hoc]
            E --> E1[Misiones Especiales]
            E1 --> E1a(Temporal + Representativa)
        `
    },
    { 
        id: 'tema9', 
        title: 'Tema 9: Misiones Diplomáticas (CVDT 1961).', 
        questions: [
            { q: '¿Cuál es el **fundamento** generalmente aceptado de los privilegios e inmunidades de las misiones y agentes diplomáticos según la Convención de Viena de 1961?', a: ['La teoría de la extraterritorialidad.', 'El principio de igualdad soberana.', 'El fundamento funcional (Principio *ne impediatur legatio*).', 'El principio de cortesía internacional.'], correct: 2, rationale: 'El Art. 3 de la CVDT de 1961 establece que las inmunidades y privilegios se conceden no en interés de las personas, sino para garantizar el desempeño eficaz de las funciones de la misión.' },
            { q: '¿Qué implica la **Inviolabilidad de los locales de la misión** según el Art. 22.1 de la Convención de Viena de 1961?', a: ['La exención de impuestos del Estado receptor.', 'Que el Estado receptor puede entrar en caso de incendio o siniestro sin consentimiento.', 'Que los agentes del Estado receptor no pueden entrar sin el consentimiento del Jefe de la misión.', 'La inmunidad de ejecución de los bienes de la misión.'], correct: 2, rationale: 'El Art. 22.1 establece la inviolabilidad, requiriendo el consentimiento del Jefe de la misión para la entrada de agentes del Estado receptor.' },
            { q: '¿Qué documento debe obtener el Estado acreditante antes de nombrar al **Jefe de la misión**?', a: ['El Agregación.', 'El plácet del Estado receptor.', 'La aprobación del Ministro de Asuntos Exteriores del Estado receptor.', 'La ratificación del Parlamento del Estado receptor.'], correct: 1, rationale: 'El Estado acreditante debe asegurarse del *plácet* del Estado receptor, quien no está obligado a explicar los motivos de una eventual negativa.' },
            { q: '¿Qué tipo de **jurisdicción** goza de inmunidad **absoluta** para el agente diplomático en el Estado receptor?', a: ['Civil y Administrativa.', 'Penal.', 'Comercial.', 'Laboral (para el personal de servicio).'], correct: 1, rationale: 'Los agentes diplomáticos gozan de inmunidad de jurisdicción penal absoluta. En jurisdicción civil y administrativa hay excepciones (Art. 31.1).' },
            { q: '¿Qué sucede si un agente diplomático comete un delito grave en el Estado receptor, según la CVDT?', a: ['Puede ser detenido y juzgado si su Estado lo autoriza.', 'El Estado receptor puede declararle *persona non grata* y obligarle a abandonar el país.', 'Pierde inmediatamente su inmunidad.', 'Solo puede ser juzgado por tribunales internacionales.'], correct: 1, rationale: 'La única acción que puede tomar el Estado receptor es declararle *persona non grata* (Art. 9) y obligarle a salir del país, sin juzgarle.' }
        ],
        diagram: `
        graph TD
            A[MISIONES DIPLOMÁTICAS CVDT 1961]
            
            A --> B[Establecimiento]
            B --> B1(Consentimiento Mutuo)
            B --> B2(Plácet para Jefe Misión)
            
            A --> C[Privilegios e Inmunidades]
            C --> C1{De la Misión}
            C1 --> D1[Inviolabilidad Locales/Archivos]
            C1 --> D2[Libertad Comunicación]
            C1 --> D3[Exención Fiscal]
            
            C --> C2{Del Agente Diplomático}
            C2 --> E1[Inviolabilidad Personal]
            C2 --> E2[Inmunidad Jurisdicción]
            E2 --> E2a(Penal: Absoluta)
            E2 --> E2b(Civil/Admin: Excepciones)
        `
    },
    { 
        id: 'tema12', 
        title: 'Tema 12: Derecho del Mar (I). Espacios Marinos.', 
        questions: [
            { q: '¿Cuál es la anchura máxima del **Mar Territorial** de un Estado ribereño según la CNUDM?', a: ['3 millas marinas', '6 millas marinas', '12 millas marinas', '24 millas marinas'], correct: 2, rationale: 'El artículo $3$ de la CNUDM establece la ampliación de la anchura del mar territorial hasta las $12$ millas marinas actuales.' },
            { q: '¿Cuál es la regla general respecto al **Derecho de Paso Inocente** en las **Aguas Interiores** de un Estado ribereño?', a: ['Se aplica de manera irrestricta.', 'Se aplica solo a buques mercantes.', 'No se aplica.', 'Se aplica de manera no suspendible.'], correct: 2, rationale: 'Como regla general, el Estado ribereño ejerce soberanía territorial plena sobre las Aguas Interiores y no se aplica el derecho de paso inocente en ellas, salvo excepciones específicas.' },
            { q: 'El **régimen de paso en tránsito** se aplica a los estrechos utilizados para la navegación internacional cuando estos conectan:', a: ['Una parte de alta mar o ZEE con el mar territorial de otro Estado.', 'Dos mares territoriales.', 'Una parte de alta mar o ZEE con otra parte de alta mar o ZEE.', 'Aguas interiores con mar territorial.'], correct: 2, rationale: 'El artículo $37$ de la CNUDM establece que el régimen de paso en tránsito se aplica a los estrechos que conectan una parte de alta mar o de ZEE con otra parte de alta mar o de ZEE.' },
            { q: '¿Cuál es la **extensión máxima** de la **Zona Contigua** de un Estado ribereño?', a: ['$12$ millas marinas.', '$24$ millas marinas.', '$200$ millas marinas.', '$350$ millas marinas.'], correct: 1, rationale: 'El artículo $33$ de la CNUDM establece que la Zona Contigua no podrá extenderse más allá de las $24$ millas marinas contadas desde las líneas de base.' },
            { q: 'Según la CNUDM, un submarino extranjero que pasa por el Mar Territorial debe para que su paso se considere inocente:', a: ['Tener una autorización previa del Estado ribereño.', 'Navegar en superficie y enarbolar su pabellón.', 'Limitarse a atravesar el mar sin entrar en aguas interiores.', 'Declarar su carga y destino al Estado ribereño.'], correct: 1, rationale: 'La CNUDM establece que los submarinos deben navegar en superficie y enarbolar su pabellón para que su paso se considere inocente, lo que constituye una condición esencial del paso.' }
        ],
        diagram: `
        graph LR
            LB[Línea de Base]
            
            LB -- 12 mn --> MT[Mar Territorial]
            subgraph Soberania
            MT
            end
            
            LB -- 24 mn --> ZC[Zona Contigua]
            subgraph Competencias Funcionales
            ZC
            end
            
            LB -- 200 mn --> ZEE[Zona Económica Exclusiva]
            subgraph Derechos Soberanos Rec.
            ZEE
            end
            
            ZEE -- Más allá --> AM[Alta Mar]
            subgraph Libertad
            AM
            end
            
            style LB fill:#000,stroke:#fff,stroke-width:4px
            style MT fill:#e3f2fd
            style ZC fill:#bbdefb
            style ZEE fill:#90caf9
            style AM fill:#64b5f6
        `
    },
    { 
        id: 'tema15', 
        title: 'Tema 15: Protección Internacional de los DDHH.', 
        questions: [
            { q: '¿Qué tres características fundamentales definen la protección internacional de los **Derechos Humanos**?', a: ['Jerarquía, especificidad y obligatoriedad.', 'Subsidiariedad, bilateralidad y coercibilidad.', 'Universalidad, indivisibilidad e interdependencia.', 'Naturaleza civil, política y económica.'], correct: 2, rationale: 'La Declaración de Viena de 1993 subraya la universalidad, indivisibilidad e interdependencia de los DDHH.' },
            { q: '¿Qué órgano de la ONU sustituyó a la **Comisión de Derechos Humanos** en 2006?', 'a': ['El Consejo de Seguridad', 'El ECOSOC', 'El Consejo de Derechos Humanos', 'La Secretaría General'], correct: 2, rationale: 'La Asamblea General, mediante su Resolución 60/251, creó el Consejo de Derechos Humanos para reemplazar a la Comisión.' },
            { q: '¿Cuál es la naturaleza jurídica de la **Declaración Universal de DDHH** (1948) en el momento actual?', a: ['Es un tratado internacional con efectos vinculantes.', 'Es un documento sin valor jurídico, meramente político.', 'Se considera que muchos de sus derechos forman parte del Derecho Internacional General (vinculante).', 'Es una recomendación aplicable solo a los Estados miembros originales de la ONU.'], correct: 2, rationale: 'Aunque se aprobó como Resolución, su contenido ha cristalizado en gran parte como Derecho Internacional General consuetudinario, por lo que es vinculante.' },
            { q: '¿Qué sistema de protección regional utiliza el **Tribunal Europeo de Derechos Humanos (TEDH)**?', a: ['El sistema de la Unión Europea.', 'El sistema del Consejo de Europa.', 'El sistema de la OSCE.', 'El sistema interamericano.'], correct: 1, rationale: 'El TEDH es la institución judicial del Consejo de Europa y aplica el Convenio Europeo de Derechos Humanos (CEDH).' },
            { q: 'En la acción de la ONU, ¿qué tipo de mecanismo son las comunicaciones o denuncias presentadas por particulares o grupos contra Estados?', a: ['Mecanismos Convencionales (basados en tratados).', 'Mecanismos de Arreglo Judicial.', 'Mecanismos Extra-convencionales (basados en la Carta).', 'Mecanismos de Seguridad Colectiva.'], correct: 0, rationale: 'Los procedimientos de comunicaciones (ej. ante el Comité de DDHH) son mecanismos convencionales, ya que dependen de la aceptación de un Protocolo Facultativo al Pacto o Convenio.' }
        ],
        diagram: `
        graph TD
            A[PROTECCIÓN DDHH]
            
            A --> B{Sistemas Universales (ONU)}
            B --> B1[Convencionales / Tratados]
            B1 --> B1a(Comités: CDH, CEDAW...)
            B --> B2[Extraconvencionales / Carta]
            B2 --> B2a(Consejo de DDHH: EPU)
            
            A --> C{Sistemas Regionales}
            C --> C1[Europeo: Cons. Europa]
            C1 --> C1a(TEDH)
            C --> C2[Interamericano: OEA]
            C2 --> C2a(Comisión + Corte IDH)
            C --> C3[Africano]
        `
    },
    { 
        id: 'tema23', 
        title: 'Tema 23: Naciones Unidas (I). Creación y Principios.', 
        questions: [
            { q: '¿Cuál es el **primer propósito** de las Naciones Unidas según el Artículo 1 de la Carta?', a: ['Fomento de las relaciones de amistad.', 'La cooperación para el desarrollo.', 'Mantenimiento de la paz y seguridad internacionales.', 'La libre determinación de los pueblos.'], correct: 2, rationale: 'El Artículo 1.1 establece como primer propósito: "Mantener la paz y la seguridad internacionales".' },
            { q: '¿Cuál es la principal **diferencia** en la composición y funcionamiento entre la Asamblea General y el Consejo de Seguridad?', a: ['La AG se reúne de forma permanente, el CS de forma anual.', 'La AG es restringida (15 miembros), el CS es plenario (todos los miembros).', 'La AG es plenario con un voto por miembro; el CS es restringido, con 5 miembros permanentes y derecho de veto.', 'El CS solo puede emitir recomendaciones, la AG resoluciones vinculantes.'], correct: 2, rationale: 'La Asamblea es plenario y el Consejo es restringido (15 miembros), con la peculiaridad del voto de los 5 miembros permanentes.' },
            { q: '¿Qué órgano de la ONU tiene, en principio, **jurisdicción consultiva y contenciosa**?', a: ['El Consejo de Seguridad', 'La Asamblea General', 'El Tribunal Internacional de Justicia (TIJ)', 'El Consejo Económico y Social (ECOSOC)'], correct: 2, rationale: 'El TIJ es el órgano judicial principal y tiene ambas jurisdicciones (Art. 92 de la Carta).' },
            { q: '¿Qué tipo de mayoría se requiere en el Consejo de Seguridad para una decisión sobre **cuestiones importantes**?', a: ['Mayoría de dos tercios de la Asamblea General.', 'Voto afirmativo de 9 miembros, incluidos los 5 miembros permanentes.', 'Mayoría de dos tercios de los miembros votantes.', 'Mayoría simple de los miembros presentes.'], correct: 1, rationale: 'El Art. 27.3 de la Carta impone el requisito de la unanimidad de las grandes potencias (5 permanentes) para las decisiones sobre cuestiones importantes (derecho de veto).' },
            { q: '¿Qué principio de la Carta fue ampliado en su contenido por la **Resolución 2625 (XXV)** de la Asamblea General?', a: ['El principio de la jurisdicción interna de los Estados.', 'La igualdad de derechos y la libre determinación de los pueblos.', 'El principio de la buena fe.', 'Todos los principios enunciados explícitamente en la Carta.'], correct: 3, rationale: 'La Resolución 2625 (XXV) desarrolló y amplió el contenido de todos los principios de la Carta.' }
        ],
        diagram: `
        graph TD
            A[NACIONES UNIDAS]
            
            A --> B{Órganos Principales}
            
            B --> C[Asamblea General]
            C --> C1(Plenario / 1 Voto)
            
            B --> D[Consejo Seguridad]
            D --> D1(15 Miembros)
            D1 --> D2(5 Permanentes con Veto)
            
            B --> E[ECOSOC]
            B --> F[TIJ]
            B --> G[Secretaría General]
            
            A --> H{Propósitos}
            H --> H1(Paz y Seguridad)
            H --> H2(Amistad y Cooperación)
        `
    },
    { 
        id: 'tema27', 
        title: 'Tema 27: Organizaciones en el ámbito americano.', 
        questions: [
            { q: '¿Cuál es el **propósito principal** de la **OEA** según el Artículo 1 de su Carta?', a: ['Establecer un mercado común en el continente.', 'Lograr un orden de paz y de justicia, fomentar su solidaridad y robustecer su colaboración.', 'Reforzar la política de defensa y seguridad colectiva de América del Norte.', 'La erradicación de la pobreza crítica en el hemisferio.'], correct: 1, rationale: 'El Art. 1 de la Carta de la OEA establece fines generales que incluyen la paz, la justicia, la solidaridad y la defensa de la soberanía.' },
            { q: '¿Qué órgano de la OEA tiene a su cargo el **desarrollo progresivo y la codificación del Derecho Internacional**?', 'a': ['El Consejo Permanente', 'La Asamblea General', 'El Comité Jurídico Interamericano', 'La Reunión de Consulta de Ministros de Relaciones Exteriores'], correct: 2, rationale: 'El Comité Jurídico Interamericano tiene funciones consultivas en asuntos jurídicos y trabaja en la codificación, similar a la CDI de la ONU.' },
            { q: '¿En qué se diferencia el acceso del **individuo** a la justicia en el sistema interamericano (OEA) respecto al sistema europeo (TEDH)?', a: ['El individuo no tiene acceso directo a la Corte Interamericana de DDHH.', 'En el sistema interamericano no existe la figura del individuo como sujeto de derechos.', 'En el sistema interamericano, el individuo solo puede presentar denuncias ante la Asamblea General.', 'El sistema interamericano es exclusivamente para Estados.'], correct: 0, rationale: 'En el sistema interamericano, el acceso a la Corte Interamericana de DDHH está reservado a los Estados parte y a la CIDH (Comisión Interamericana de DDHH), no al individuo.' },
            { q: '¿Qué documento creó la **CELAC**?', a: ['El Protocolo de San Salvador.', 'El Tratado de Tlatelolco.', 'La Declaración de Caracas (2011).', 'El Tratado de Asunción (MERCOSUR).'], correct: 2, rationale: 'La Comunidad de Estados Latinoamericanos y Caribeños (CELAC) fue creada en el marco de la III Cumbre de América Latina y el Caribe sobre Integración y Desarrollo, a través de la Declaración de Caracas.' },
            { q: '¿Cuál de las siguientes organizaciones tiene como **objetivo principal** la **integración económica** para eliminar la desigualdad socioeconómica?', a: ['CARICOM', 'OEA', 'UNASUR', 'MERCOSUR'], correct: 2, rationale: 'La UNASUR tiene como objetivo "construir un espacio de integración y unión en lo cultural, social y económico y político entre sus pueblos..." con miras a eliminar la desigualdad socioeconómica.' }
        ],
        diagram: `
        graph TD
            A[ORGANIZACIONES AMERICANAS]
            
            A --> B[OEA]
            B --> B1(Sistema Regional General)
            B --> B2(CIDH + CorteIDH)
            
            A --> C[Integración / Concertación]
            C --> D[CELAC]
            D --> D1(Mecanismo de diálogo político)
            
            C --> E[Subregionales]
            E --> E1[MERCOSUR]
            E --> E2[Comunidad Andina]
            E --> E3[SICA]
            E --> E4[CARICOM]
        `
    },
    { 
        id: 'tema32', 
        title: 'Tema 32: Derecho de Familia. Matrimonio y Crisis.', 
        questions: [
            { q: '¿Cuál es el **principio rector** del régimen económico matrimonial en el Código Civil español?', a: ['El principio de igualdad de bienes.', 'La libre administración de los bienes gananciales.', 'La libertad de configuración en capitulaciones matrimoniales.', 'La subsistencia de la potestad doméstica.'], correct: 2, rationale: 'El Art. 1315 CC establece la libertad de pacto en capitulaciones matrimoniales como principio rector.' },
            { q: 'A falta de pacto, ¿cuál es el **régimen económico matrimonial supletorio de primer grado** en Derecho común español?', a: ['Régimen de Separación de Bienes.', 'Régimen de Participación.', 'Sociedad de Gananciales.', 'Régimen de Comunidad Universal.'], correct: 2, rationale: 'La Sociedad de Gananciales es el régimen supletorio de primer grado (Art. 1344 CC).' },
            { q: '¿Qué se necesita para que un matrimonio celebrado en **forma religiosa** (no canónica) en España produzca efectos civiles?', a: ['La disolución del vínculo matrimonial (es un efecto), la suspensión de la vida en común, o la cesación de la posibilidad de vincular bienes del otro cónyuge en ejercicio de la potestad doméstica (estos son efectos de la separación, que también aplican al divorcio). A: *El subsistir del vínculo matrimonial*'], correct: 0, rationale: 'Para que los matrimonios religiosos (Art. 49 y 60 CC) tengan efectos civiles es necesaria su inscripción en el Registro Civil.' },
            { q: '¿Qué implica la **Separación** matrimonial en cuanto al vínculo jurídico?', a: ['La disolución del vínculo.', 'La suspensión de la vida en común, subsistiendo el vínculo matrimonial.', 'La nulidad de los efectos del matrimonio.', 'La cesación inmediata de la patria potestad.'], correct: 1, rationale: 'La separación suspende la vida en común y cesa la posibilidad de vincular bienes del otro cónyuge, pero el vínculo matrimonial subsiste (Art. 84 CC).' },
            { q: 'En supuestos intracomunitarios, ¿cuál de los siguientes **NO** es un foro de competencia judicial internacional en crisis matrimoniales según el Reglamento Bruselas II bis?', a: ['La residencia habitual del demandante durante al menos un año.', 'El lugar de la nacionalidad de ambos cónyuges.', 'El lugar donde el matrimonio fue celebrado.', 'El lugar de residencia habitual del demandado.'], correct: 2, rationale: 'El lugar de celebración del matrimonio no es un foro de competencia en el R. Bruselas II bis; la Ley aplicable al divorcio y separación (R. Roma III) sí permite elegir la ley del lugar de celebración como opción de ley.' }
        ],
        diagram: `
        graph TD
            A[MATRIMONIO]
            
            A --> B[Régimen Económico]
            B --> B1[Libertad de Pacto / Capitulaciones]
            B --> B2[Supletorio 1º: Gananciales]
            B --> B3[Supletorio 2º: Separación Bienes]
            
            A --> C[Crisis Matrimoniales]
            C --> C1[Nulidad]
            C1 --> C1a(Vínculo inválido ab initio)
            C --> C2[Separación]
            C2 --> C2a(Suspensión vida común / Vínculo subsiste)
            C --> C3[Divorcio]
            C3 --> C3a(Disolución del vínculo)
        `
    },
    { 
        id: 'tema36', 
        title: 'Tema 36: Nacionalidad Española.', 
        questions: [
            { q: '¿Cuál es el **criterio principal** de atribución de la **nacionalidad española de origen** según el Art. 17.1 del Código Civil?', a: ['Ius soli (nacimiento en España).', 'Ius sanguinis (nacidos de padre o madre españoles).', 'Carta de naturaleza.', 'Residencia legal y continuada.'], correct: 1, rationale: 'El *ius sanguinis* es el criterio primordial (Art. 17.1.a CC).' },
            { q: '¿Cuál es el **plazo general de residencia legal** exigido para la adquisición de la nacionalidad española por residencia?', a: ['Un año', 'Cinco años', 'Diez años', 'Dos años'], correct: 2, rationale: 'La regla general es de diez años de residencia legal, continuada e inmediatamente anterior a la petición (Art. 22.1 CC).' },
            { q: '¿Qué efecto tiene la **adquisición** de la nacionalidad de países **iberoamericanos** (con convenio) sobre la nacionalidad española de origen?', a: ['Se pierde la nacionalidad española, salvo renuncia expresa a la otra.', 'Se mantiene la doble nacionalidad (no se pierde la española de origen).', 'Se requiere la previa habilitación del Gobierno.', 'La pérdida se produce a los tres años si no se inscribe la voluntad de conservación.'], correct: 1, rationale: 'El Art. 11.3 CE permite que los españoles se naturalicen en países iberoamericanos o con particular vinculación sin perder su nacionalidad de origen (doble nacionalidad automática).' },
            { q: '¿Cuál es la **finalidad** de la **Consolidación** de la nacionalidad española (Art. 18 CC)?', a: ['Permitir la doble nacionalidad con países no iberoamericanos.', 'Evitar cambios bruscos de nacionalidad cuando se anula el título que la originó.', 'Facilitar la recuperación de la nacionalidad perdida.', 'Sancionar el uso exclusivo de la nacionalidad extranjera.'], correct: 1, rationale: 'La consolidación se da por la posesión y utilización continuada durante 10 años, protegiendo al ciudadano de buena fe de la nulidad del título original.' },
            { q: '¿Qué regla aplica el Art. 9.9 del CC español a la **plurinacionalidad patológica** (sin tratado) cuando **una de ellas es la española**?', a: ['Se aplica la ley del lugar de residencia habitual.', 'Prevalece la nacionalidad adquirida en último lugar.', 'Prevalece la ley personal de la otra nacionalidad.', 'Prevalece la nacionalidad española.'], correct: 3, rationale: 'El Art. 9.9 CC establece que si una persona ostenta varias nacionalidades y una de ellas es la española, esta será la que prevalezca.' }
        ],
        diagram: `
        graph TD
            A[NACIONALIDAD ESPAÑOLA]
            
            A --> B{Adquisición}
            B --> B1[Originaria]
            B1 --> B1a(Ius Sanguinis)
            B1 --> B1b(Ius Soli / Apatridia)
            B1 --> B1c(Adopción)
            
            B --> B2[Derivada]
            B2 --> B2a(Opción)
            B2 --> B2b(Carta Naturaleza)
            B2 --> B2c(Residencia)
            
            A --> C{Pérdida}
            C --> C1[Voluntaria / Renuncia]
            C --> C2[Sanción solo derivada]
            
            A --> D[Recuperación]
        `
    },
    { 
        id: 'tema39', 
        title: 'Tema 39: Visados de Corta Duración (I).', 
        questions: [
            { q: '¿Cuál es la **duración máxima de estancia** autorizada por un **visado uniforme (visado "C")** en el espacio Schengen?', a: ['30 días por semestre.', '90 días dentro de cualquier período de 180 días.', 'Tres meses por año.', '60 días al año.'], correct: 1, rationale: 'El visado uniforme autoriza una estancia de corta duración no superior a 90 días dentro de un período de 180 días.' },
            { q: '¿Qué documento regula el régimen de **exigencia o exención** de visado de estancia para los nacionales de terceros países en el espacio Schengen?', a: ['El Código de Fronteras Schengen.', 'El Código de visados (Reglamento 810/2009).', 'El Reglamento (UE) 2018/1806 (listas negativa/positiva).', 'El Convenio de Schengen.'], correct: 2, rationale: 'El Reglamento (UE) 2018/1806 contiene la lista común de terceros países cuyos nacionales están sujetos o exentos del visado de estancia.' },
            { q: '¿Cuál de los siguientes es un requisito de entrada en el espacio Schengen según el Artículo 6.1 del Código de Fronteras Schengen?', a: ['Tener un billete de avión cerrado de ida y vuelta.', 'Estar inscrito en el Registro de Viajeros.', 'No suponer una amenaza para el orden público o la seguridad nacional.', 'Haber pasado una entrevista en la MDOC.'], correct: 2, rationale: 'El Artículo 6.1 requiere, entre otros, no suponer una amenaza para el orden público, la seguridad interior o la salud pública.' },
            { q: '¿Qué permite un **Visado de Tránsito Aeroportuario (visado "A")** a su titular?', a: ['El tránsito por el territorio Schengen sin superar las 24 horas.', 'El paso a través de la zona internacional de tránsito de un aeropuerto, sin acceder al territorio nacional.', 'El acceso a las Aguas Interiores para fines de escala técnica.', 'La entrada en el espacio Schengen con carácter de validez territorial limitada.'], correct: 1, rationale: 'El VTA permite pasar por la zona de tránsito internacional de aeropuertos, sin franquear la frontera exterior (sin entrar en el territorio).' },
            { q: '¿Cuál es el **régimen de circulación** en el espacio Schengen para los **titulares de un visado de larga duración (visado "D")**?', a: ['Solo pueden circular por el Estado que lo expidió.', 'Pueden circular libremente por el territorio de los demás Estados miembros por un máximo de 3 meses en cualquier período de 6 meses.', 'Deben solicitar un visado "C" adicional para circular.', 'Tienen libre circulación irrestricta.'], correct: 1, rationale: 'El visado "D" permite la circulación en los demás Estados Parte por 3 meses en cualquier período de 6 meses (equivalencia a un permiso de residencia).' }
        ],
        diagram: `
        graph TD
            A[VISADOS SCHENGEN]
            
            A --> B[Tipo A: Tránsito Aeroportuario]
            B --> B1(Zona Internacional / NO entra en territorio)
            
            A --> C[Tipo C: Estancia / Uniforme]
            C --> C1(Regla 90/180 días)
            C --> C2(Turismo, Negocios, Visita)
            
            A --> D[VTL: Validez Territorial Limitada]
            D --> D1(Excepcional / Humanitario)
            
            A --> E[Tipo D: Larga Duración]
            E --> E1(Nacional + Circulación Schengen 90/180)
        `
    },
    { 
        id: 'tema43', 
        title: 'Tema 43: Derecho Mercantil. Contratos.', 
        questions: [
            { q: '¿Cuál es la **fuente principal** del Derecho Mercantil español en defecto de la Ley mercantil, según el Código de Comercio?', a: ['La jurisprudencia del Tribunal Supremo.', 'El Derecho común (Código Civil).', 'Los usos y costumbres en el comercio ("usos del comercio").', 'Los principios generales del Derecho.'], correct: 2, rationale: 'El Art. 2 CCom establece la prelación: 1º Ley Mercantil, 2º Usos del Comercio, 3º Derecho Común.' },
            { q: '¿Cuál es la principal **diferencia** entre una **sucursal** y una **filial** en el exterior?', a: ['La filial tiene personalidad jurídica diferenciada, la sucursal no.', 'La sucursal está regulada por la LSC, la filial por el CCom.', 'La sucursal responde con su capital, la filial con el de la matriz.', 'La filial no puede desarrollar el mismo objeto social que la matriz.'], correct: 0, rationale: 'La sucursal es una extensión de la matriz (sin personalidad jurídica propia), mientras que la filial es una sociedad con personalidad jurídica propia y capital diferenciado.' },
            { q: '¿Cuál es el **capital social mínimo** para la constitución de una **Sociedad Anónima (SA)** en España?', a: ['3.000 euros', '60.000 euros', 'El fijado en los estatutos', 'No existe mínimo legal'], correct: 1, rationale: 'El capital mínimo para la SA es de 60.000 euros (Art. 4.3 LSC), mientras que para la S.L. es de 3.000 euros.' },
            { q: '¿Qué principio fundamental del **Convenio de Viena de 1980** sobre Compraventa Internacional de Mercaderías permite a las partes alterar sus disposiciones?', 'a': ['Principio *pacta sunt servanda*.', 'Principio de autonomía de la voluntad.', 'Principio de equivalencia de formas.', 'Principio *lex mercatoria*.'], correct: 1, rationale: 'El Art. 6 del Convenio consagra la autonomía de la voluntad, permitiendo a las partes excluir su aplicación o modificar sus disposiciones.' },
            { q: '¿Qué regulan los **Incoterms** en una compraventa internacional de mercaderías?', 'a': ['El medio de pago y las garantías bancarias.', 'La determinación de la ley aplicable al contrato.', 'La interpretación de los términos comerciales (entrega, riesgo, gastos).', 'El régimen de seguros y la responsabilidad extracontractual.'], correct: 2, rationale: 'Los Incoterms regulan la interpretación uniforme de los términos comerciales relacionados con la entrega de mercancías, la transmisión de riesgos y la distribución de gastos.' }
        ],
        diagram: `
        graph TD
            A[DERECHO MERCANTIL]
            
            A --> B{Fuentes Art 2 CCom}
            B --> B1[1. Ley Mercantil]
            B --> B2[2. Usos del Comercio]
            B --> B3[3. Derecho Común Civil]
            
            A --> C{Sociedades Capital}
            C --> C1[S.A. - 60.000 Eur]
            C --> C2[S.L. - 3.000 Eur]
            
            A --> D{Contratación Int.}
            D --> D1[Conv. Viena 1980]
            D --> D2[Incoterms CCI]
            D2 --> D2a(Entrega / Riesgo / Gastos)
        `
    },
    { 
        id: 'tema46', 
        title: 'Tema 46: Ley Aplicable a la Forma. Legalización.', 
        questions: [
            { q: '¿Qué principio establece el **Artículo 11.1 del Código Civil** como regla general para la ley aplicable a la forma de los actos jurídicos?', a: ['La ley personal del disponente.', 'La ley del país de residencia habitual.', 'La ley del país en que se otorguen (*lex loci actus*).', 'La ley aplicable al contenido del acto.'], correct: 2, rationale: 'La regla general es *lex loci actus*, aunque el precepto es espiritualista al permitir alternativas (ley del contenido, ley personal, etc.).' },
            { q: '¿Cuál es la **función** de la **Legalización en vía diplomática** de un documento público extranjero?', a: ['Certificar la legalidad del fondo del documento.', 'Certificar la autenticidad de la firma y la calidad de la autoridad firmante.', 'Sustituir la necesidad de inscripción registral.', 'Acreditar la capacidad de obrar del otorgante.'], correct: 1, rationale: 'La legalización es un acto administrativo que verifica la autenticidad de la firma y la calidad en que actúa la autoridad, sin entrar en el fondo del documento.' },
            { q: '¿Cuál es el **trámite simplificado** de legalización de documentos públicos previsto por el Convenio de La Haya de 1961?', a: ['El Exequátur.', 'La Notificación.', 'La homologación.', 'La Apostilla.'], correct: 3, rationale: 'La Convención de La Haya de 1961 sustituye la cadena de legalizaciones por el trámite único de la Apostilla, si el Estado de origen y de destino son parte.' },
            { q: '¿Qué se debe probar ante un juez español al aplicar Derecho extranjero, según el Art. 281.2 LEC?', a: ['Solo el contenido de la norma.', 'Solo la vigencia de la norma.', 'El contenido, la vigencia, su interpretación correcta y su aplicabilidad al caso concreto.', 'El Derecho extranjero no debe probarse (*iura novit curia*).'], correct: 2, rationale: 'El Derecho extranjero debe ser probado por las partes en cuanto a su contenido, vigencia y cómo sería aplicado por los tribunales del país de origen.' },
            { q: 'Según la teoría de la equivalencia de formas, ¿qué tipo de documento español puede ser equiparado a un documento público extranjero?', a: ['El documento público extranjero que cumpla con el control de legalidad y se legalice.', 'Cualquier documento privado con firma notarial.', 'Solo las resoluciones judiciales extranjeras.', 'Solo los documentos notariales con apostilla.'], correct: 0, rationale: 'La teoría de la equivalencia de formas admite el documento público extranjero si ha sido autorizado por un funcionario con fe pública, se legaliza/apostilla y ha ejercido un control de legalidad equivalente.' }
        ],
        diagram: `
        graph TD
            A[DOCUMENTOS PÚBLICOS EXTRANJEROS]
            
            A --> B{Validez Formal}
            B --> B1[Regla: Lex Loci Actus]
            B --> B2[Alternativas Art 11 CC]
            
            A --> C{Eficacia Probatoria}
            
            C --> D[Legalización Diplomática]
            D --> D1(Cadena de Firmas)
            
            C --> E[Apostilla Haya 1961]
            E --> E1(Sello Único / Simplificada)
            
            C --> F[Exención Total]
            F --> F1(Reglamentos UE / Convenios)
        `
    },
    // Rellenar con los demás temas
    { id: 'tema10', title: 'Tema 10: Oficinas Consulares (CVDT 1963).', questions: [], diagram: '' },
    { id: 'tema11', title: 'Tema 11: Competencias territoriales del Estado.', questions: [], diagram: '' },
    { id: 'tema13', title: 'Tema 13: Derecho del Mar (II). ZEE y Plataforma Continental.', questions: [], diagram: '' },
    { id: 'tema14', title: 'Tema 14: Competencias personales. Nacionalidad y Extranjería.', questions: [], diagram: '' },
    { id: 'tema16', title: 'Tema 16: Aplicación del DI (I). Protección Diplomática.', questions: [], diagram: '' },
    { id: 'tema17', title: 'Tema 17: Aplicación del DI (II). Arreglo Pacífico de Controversias.', questions: [], diagram: '' },
    { id: 'tema18', title: 'Tema 18: Prohibición del uso de la fuerza. Legítima Defensa.', questions: [], diagram: '' },
    { id: 'tema19', title: 'Tema 19: Derecho Internacional Humanitario.', questions: [], diagram: '' },
    { id: 'tema20', title: 'Tema 20: Derecho Internacional Penal. CPI.', questions: [], diagram: '' },
    { id: 'tema21', title: 'Tema 21: Responsabilidad Internacional del Estado.', questions: [], diagram: '' },
    { id: 'tema22', title: 'Tema 22: Organizaciones Internacionales: Concepto y Estructura.', questions: [], diagram: '' },
    { id: 'tema24', title: 'Tema 24: Naciones Unidas (II). Funciones y Sistema de Seguridad Colectiva.', questions: [], diagram: '' },
    { id: 'tema25', title: 'Tema 25: Naciones Unidas (III). Organismos especializados (I).', questions: [], diagram: '' },
    { id: 'tema26', title: 'Tema 26: Naciones Unidas (IV). Organismos especializados (II).', questions: [], diagram: '' },
    { id: 'tema28', title: 'Tema 28: Organizaciones en el ámbito árabe y musulmán.', questions: [], diagram: '' },
    { id: 'tema29', title: 'Tema 29: Organizaciones de cooperación política y militar.', questions: [], diagram: '' },
    { id: 'tema30', title: 'Tema 30: Derecho Civil Español y Derechos Forales.', questions: [], diagram: '' },
    { id: 'tema31', title: 'Tema 31: Personas físicas y jurídicas. Capacidad.', questions: [], diagram: '' },
    { id: 'tema33', title: 'Tema 33: Derecho de Sucesiones. Testada e Intestata.', questions: [], diagram: '' },
    { id: 'tema34', title: 'El Registro Civil y Función Registral Consular.', questions: [], diagram: '' },
    { id: 'tema35', title: 'Tema 35: La Función Notarial y el Instrumento Público.', questions: [], diagram: '' },
    { id: 'tema37', title: 'Tema 37: Españoles en el Exterior. Asistencia Consular.', questions: [], diagram: '' },
    { id: 'tema38', title: 'Tema 38: Sistema Español de Extranjería.', questions: [], diagram: '' },
    { id: 'tema40', title: 'Tema 40: Visados de Corta Duración (II). Tramitación.', questions: [], diagram: '' },
    { id: 'tema41', title: 'Tema 41: Visado familiar de Ciudadano UE.', questions: [], diagram: '' },
    { id: 'tema42', title: 'Tema 42: Visados de Larga Duración.', questions: [], diagram: '' },
    { id: 'tema44', title: 'Tema 44: Derecho Marítimo. Buque y Funciones Consulares.', questions: [], diagram: '' },
    { id: 'tema45', title: 'Tema 45: Derecho Internacional Privado (I). Jurisdicción y Ley Aplicable.', questions: [], diagram: '' },
    { id: 'tema47', title: 'Tema 47: Familia en el Tráfico Externo (I). Matrimonio Internacional.', questions: [], diagram: '' },
    { id: 'tema48', title: 'Tema 48: Familia en el Tráfico Externo (II). Menores y Sustracción.', questions: [], diagram: '' },
    { id: 'tema49', title: 'Tema 49: Cooperación Jurídica Internacional y Extradición.', questions: [], diagram: '' }
];