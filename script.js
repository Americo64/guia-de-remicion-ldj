// Espera a que el DOM esté completamente cargado para ejecutar el script.
// Esto previene errores al intentar manipular elementos que aún no existen.
document.addEventListener('DOMContentLoaded', () => {

    // --- DATOS SIMULADOS (MOCK DATA) ---
    // En una aplicación real, estos datos vendrían de una base de datos o una API.

    /**
     * @const {Array<Object>} mockEmpresas
     * Contiene una lista de objetos, donde cada objeto representa una empresa con sus datos.
     */
    const mockEmpresas = [
        { id: 'emp1', ruc: '20609607395', razonSocial: 'IJG Inversiones Janampa Guevara S.A.C.', direccion: 'Av. Victor Malasquez Mza. B2 Lote. 09 A.H. Huertos De Manchay', distrito: 'Pachacamac', provincia: 'Lima', departamento: 'Lima' },
        { id: 'emp2', ruc: '20609518562', razonSocial: 'ICM Inversiones Cortez Maldonado S.A.C.', direccion: 'Ch. Pachac. Iv Et. Parc. 3a Manzana Z1 Lote 25', distrito: 'Pachacamac', provincia: 'Lima', departamento: 'Lima' },
        { id: 'emp3', ruc: '20546449573', razonSocial: 'Lo De Juan Chicken Grill S.R.L', direccion: 'Av. Victor Malasquez Mza. B2 Lote. 09 A.H. Huertos De Manchay', distrito: 'Pachacamac', provincia: 'Lima', departamento: 'Lima' },
        { id: 'emp4', ruc: '20610392017', razonSocial: 'Tucfer S.A.C.', direccion: 'Grupo Residencial 27a Mza. I Lote. 21 sec. 3', distrito: 'Villa El Salvador', provincia: 'Lima', departamento: 'Lima' },
        { id: 'emp5', ruc: '20608779532', razonSocial: 'Alero Inversiones S.A.C.', direccion: 'Av. Talara Con Los Alamos Mza. A Lote. 13 Sec. 3 - Grupo 24', distrito: 'Villa El Salvador', provincia: 'Lima', departamento: 'Lima' },
    ];

    /**
     * @const {Array<Object>} mockProductos
     * Contiene el catálogo completo de productos. La numeración ha sido corregida.
     */
    let mockProductos = [
        // La numeración de ID será corregida automáticamente por el script.
        { id: 'prod1', category: 'VERDURAS', descripcion: 'LECHUGA AMERICANA', unidad: 'DOC', itemsPerUnit: 12.0 },
        { id: 'prod2', category: 'VERDURAS', descripcion: 'LECHUGA CRESPA', unidad: 'DOC', itemsPerUnit: 12.0 },
        { id: 'prod3', category: 'VERDURAS', descripcion: 'LIMON', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod4', category: 'VERDURAS', descripcion: 'MANZANA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod5', category: 'VERDURAS', descripcion: 'PALTA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod6', category: 'VERDURAS', descripcion: 'PAPA BLANCA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod7', category: 'VERDURAS', descripcion: 'PECANA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod8', category: 'VERDURAS', descripcion: 'PEPINO', unidad: 'DOC', itemsPerUnit: 12 },
        { id: 'prod9', category: 'VERDURAS', descripcion: 'PIMIENTO', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod10', category: 'VERDURAS', descripcion: 'PIÑA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod11', category: 'VERDURAS', descripcion: 'ROMERO', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { id: 'prod12', category: 'VERDURAS', descripcion: 'TOMATE', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod13', category: 'VERDURAS', descripcion: 'VAINITA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod14', category: 'VERDURAS', descripcion: 'ZANAHORIA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod15', category: 'VERDURAS', descripcion: 'AJO', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod16', category: 'VERDURAS', descripcion: 'BETERRAGA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod17', category: 'VERDURAS', descripcion: 'CEBOLLA BLANCA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod18', category: 'VERDURAS', descripcion: 'CHAMPIGÑON', unidad: 'BANDEJA', itemsPerUnit: 1.0 },
        { id: 'prod19', category: 'VERDURAS', descripcion: 'CHOCLO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod20', category: 'VERDURAS', descripcion: 'ESPINACA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { id: 'prod21', category: 'VERDURAS', descripcion: 'HUEVO DE CODORNIZ', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod22', category: 'VERDURAS', descripcion: 'CEBOLLA CHINA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { id: 'prod23', category: 'VERDURAS', descripcion: 'CEBOLLA CHINA PROCESADA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod24', category: 'VERDURAS', descripcion: 'NARANJA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod25', category: 'VERDURAS', descripcion: 'BRÓCOLI', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod26', category: 'VERDURAS', descripcion: 'AJI AMARILLO', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod27', category: 'VERDURAS', descripcion: 'AJI LIMO', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod28', category: 'VERDURAS', descripcion: 'AJI PANCA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod29', category: 'VERDURAS', descripcion: 'ALVERJA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod30', category: 'VERDURAS', descripcion: 'CARAMBOLA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod31', category: 'VERDURAS', descripcion: 'CEBOLLA ROJA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod32', category: 'VERDURAS', descripcion: 'CULANTRO', unidad: 'UNIDAD', itemsPerUnit: 1.0 },
        { id: 'prod33', category: 'VERDURAS', descripcion: 'HIERBA LUISA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { id: 'prod34', category: 'VERDURAS', descripcion: 'HUACATAY', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { id: 'prod35', category: 'VERDURAS', descripcion: 'KION', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod36', category: 'VERDURAS', descripcion: 'MAIZ MORADO', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod37', category: 'VERDURAS', descripcion: 'MANZANA AGUA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod38', category: 'VERDURAS', descripcion: 'MARACUYA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod39', category: 'VERDURAS', descripcion: 'MEMBRILLO', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod40', category: 'VERDURAS', descripcion: 'MENTA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { id: 'prod41', category: 'VERDURAS', descripcion: 'MUÑA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { id: 'prod42', category: 'VERDURAS', descripcion: 'OREGANO', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { id: 'prod43', category: 'VERDURAS', descripcion: 'PAPA YUNGAY', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod44', category: 'VERDURAS', descripcion: 'PEREJIL', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { id: 'prod45', category: 'VERDURAS', descripcion: 'QUESO', unidad: 'UNIDAD', itemsPerUnit: 1.0 },
        { id: 'prod46', category: 'VERDURAS', descripcion: 'WANTAN', unidad: 'KILO', itemsPerUnit: 1.0 },
        { id: 'prod47', category: 'ABARROTES', descripcion: 'ACEITE MONTESOL X 18 Lt.', unidad: 'LATA', itemsPerUnit: 1.0 },
        { id: 'prod48', category: 'ABARROTES', descripcion: 'ACEITE DE OLIVA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod49', category: 'ABARROTES', descripcion: 'ANÍS', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod50', category: 'ABARROTES', descripcion: 'ARROZ', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod51', category: 'ABARROTES', descripcion: 'AZÚCAR SACHET', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod52', category: 'ABARROTES', descripcion: 'AZÚCAR BLANCA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod53', category: 'ABARROTES', descripcion: 'AZÚCAR RUBIA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod54', category: 'ABARROTES', descripcion: 'CAFÉ GRANEL', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod55', category: 'ABARROTES', descripcion: 'GUANTES DE CUERO', unidad: 'PAR', itemsPerUnit: 2.0 },
        { id: 'prod56', category: 'ABARROTES', descripcion: 'KETCHUP GRANEL', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod57', category: 'ABARROTES', descripcion: 'KETCHUP SACHET', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod58', category: 'ABARROTES', descripcion: 'LECHE EVAPORADA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod59', category: 'ABARROTES', descripcion: 'MANZANILLA', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod60', category: 'ABARROTES', descripcion: 'MOSTAZA GRANEL', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod61', category: 'ABARROTES', descripcion: 'MOSTAZA SACHET', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod62', category: 'ABARROTES', descripcion: 'PIÑA EN CONSERVA', unidad: 'LATA', itemsPerUnit: 1.0 },
        { id: 'prod63', category: 'ABARROTES', descripcion: 'SAL', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod64', category: 'ABARROTES', descripcion: 'SALSA BBQ', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod65', category: 'ABARROTES', descripcion: 'TÉ', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod66', category: 'ABARROTES', descripcion: 'PIMIENTA NEGRA', unidad: 'FRASCO', itemsPerUnit: 1.0 },
        { id: 'prod67', category: 'ABARROTES', descripcion: 'SERVILLETAS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod68', category: 'ABARROTES', descripcion: 'SODA CAUSTICA ESCAMAS', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod69', category: 'ABARROTES', descripcion: 'SORBETE ESPECIAL PLANCHA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod70', category: 'ABARROTES', descripcion: 'PAPEL MANTECA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod71', category: 'ABARROTES', descripcion: 'LIGAS DE POLLO', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod72', category: 'ABARROTES', descripcion: 'LIGAS', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod73', category: 'ABARROTES', descripcion: 'HUEVO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod74', category: 'ABARROTES', descripcion: 'ACEITE DE AJONJOLI', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod75', category: 'CARNES', descripcion: 'FILETE DE PECHUGA x 30', unidad: 'UND', itemsPerUnit: 30 },
        { id: 'prod76', category: 'CARNES', descripcion: 'MOLLEJA DE POLLO x 25', unidad: 'PORC', itemsPerUnit: 25 },
        { id: 'prod77', category: 'CARNES', descripcion: 'LOMO X 200 GR x 20', unidad: 'UND', itemsPerUnit: 20},
        { id: 'prod78', category: 'CARNES', descripcion: 'CHULETA x 20', unidad: 'UND', itemsPerUnit: 20 },
        { id: 'prod79', category: 'CARNES', descripcion: 'RACHI x 20', unidad: 'PORC', itemsPerUnit: 20 },
        { id: 'prod80', category: 'CARNES', descripcion: 'ANTICUCHO x 40', unidad: 'PAL', itemsPerUnit: 40 },
        { id: 'prod81', category: 'CARNES', descripcion: 'BIFE x 20', unidad: 'UND', itemsPerUnit: 20 },
        { id: 'prod82', category: 'CARNES', descripcion: 'CHURRASCO x 15', unidad: 'UND', itemsPerUnit: 15 },
        { id: 'prod83', category: 'CARNES', descripcion: 'CHORIZO x 60', unidad: 'UND', itemsPerUnit: 60 },
        { id: 'prod84', category: 'CARNES', descripcion: 'COSTILLA x 15', unidad: 'UND', itemsPerUnit: 15 },
        { id: 'prod85', category: 'CARNES', descripcion: 'MORCILLA', unidad: 'UND', itemsPerUnit: 12 },
        { id: 'prod86', category: 'BEBIDAS', descripcion: 'GASEOSA INCA KOLA DE 1.5 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod87', category: 'BEBIDAS', descripcion: 'GASEOSA INCA KOLA DE 1 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod88', category: 'BEBIDAS', descripcion: 'GASEOSA INCA KOLA DE 1/2 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod89', category: 'BEBIDAS', descripcion: 'GASEOSA COCA COLA DE 1.5 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod90', category: 'BEBIDAS', descripcion: 'GASEOSA COCA COLA DE 1 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod91', category: 'BEBIDAS', descripcion: 'GASEOSA COCA COLA DE 1/2 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod92', category: 'BEBIDAS', descripcion: 'CERVEZA PILSEN', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod93', category: 'BEBIDAS', descripcion: 'CERVEZA CUSQUEÑA NEGRA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod94', category: 'BEBIDAS', descripcion: 'CERVEZA CUSQUEÑA DORADA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod95', category: 'BEBIDAS', descripcion: 'CERVEZA CUSQUEÑA TRIGO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod96', category: 'BEBIDAS', descripcion: 'AGUA MINERAL 3 LITROS', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod97', category: 'BEBIDAS', descripcion: 'AGUA SAN LUIS CON GAS 600 ML', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod98', category: 'BEBIDAS', descripcion: 'AGUA SAN LUIS SIN GAS 600 ML', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod99', category: 'LICORES', descripcion: 'ALGARROBINA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod100', category: 'LICORES', descripcion: 'AMARGO DE ANGOSTURA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod101', category: 'LICORES', descripcion: 'CREMA DE COCO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod102', category: 'LICORES', descripcion: 'CREMA DE MENTA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod103', category: 'LICORES', descripcion: 'EVERVESS', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod104', category: 'LICORES', descripcion: 'JARABE DE GOMA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod105', category: 'LICORES', descripcion: 'JARABE DE GRANDINA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod106', category: 'LICORES', descripcion: 'JUGO DE PIÑA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod107', category: 'LICORES', descripcion: 'JUGO DE NARANJA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod108', category: 'LICORES', descripcion: 'LICOR DE CACAO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod109', category: 'LICORES', descripcion: 'MARRASQUINO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod110', category: 'LICORES', descripcion: 'PISCO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod111', category: 'LICORES', descripcion: 'RON BLANCO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod112', category: 'LICORES', descripcion: 'RON RUBIO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod113', category: 'LICORES', descripcion: 'VINO BORGOÑA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod114', category: 'LICORES', descripcion: 'VINO MAGDALENA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod115', category: 'LICORES', descripcion: 'VINO PEDRAS NEGRAS', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod116', category: 'LICORES', descripcion: 'VINO ROSÉ', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod117', category: 'LICORES', descripcion: 'VINO INTIKALPA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { id: 'prod118', category: 'LICORES', descripcion: 'VINO BLANCO (gato negro)', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod119', category: 'CREMAS', descripcion: 'CREMA MAYONESA', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod120', category: 'CREMAS', descripcion: 'CREMA AJÍ', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod121', category: 'CREMAS', descripcion: 'CREMA VINAGRETA', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod122', category: 'CREMAS', descripcion: 'CHIMICHURRI', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod123', category: 'CREMAS', descripcion: 'ACEVICHADO', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod124', category: 'CREMAS', descripcion: 'BBQ ROCOTO', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod125', category: 'CREMAS', descripcion: 'BBQ AJI LIMO', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod126', category: 'CREMAS', descripcion: 'BBQ LJD', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod127', category: 'CREMAS', descripcion: 'CHIMUCHIRI x 2', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod128', category: 'CREMAS', descripcion: 'SALSA ANTICUCHERA X 1', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod129', category: 'CREMAS', descripcion: 'SAL PREPARADA X 2', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod130', category: 'CREMAS', descripcion: 'ADEREZO PARRILLA 1', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod131', category: 'CREMAS', descripcion: 'SALSA DE OREGANO X 250', unidad: 'GR', itemsPerUnit: 1.0 },
        { id: 'prod132', category: 'CREMAS', descripcion: 'AHUMADO PARA CHAUFA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod133', category: 'CREMAS', descripcion: 'TEQUEÑOS', unidad: 'PORC', itemsPerUnit: 1.0 },
        { id: 'prod134', category: 'CREMAS', descripcion: 'ARRROZ CHAUFA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod135', category: 'CREMAS', descripcion: 'ALITAS', unidad: 'PORC', itemsPerUnit: 1.0 },
        { id: 'prod136', category: 'LIMPIEZA', descripcion: 'DETERGENTE', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod137', category: 'LIMPIEZA', descripcion: 'ESCOBA DE MADERA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod138', category: 'LIMPIEZA', descripcion: 'ESCOBA DE PARRILLA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod139', category: 'LIMPIEZA', descripcion: 'ESCOBA DE PLÁSTICO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod140', category: 'LIMPIEZA', descripcion: 'ESPONJA DUO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod141', category: 'LIMPIEZA', descripcion: 'ESPONJA MÁQUINA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod142', category: 'LIMPIEZA', descripcion: 'ESPONJA VERDE', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod143', category: 'LIMPIEZA', descripcion: 'JALADOR', unidad: 'GL', itemsPerUnit: 1.0 },
        { id: 'prod144', category: 'LIMPIEZA', descripcion: 'LIMPIAVIDRIOS', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod145', category: 'LIMPIEZA', descripcion: 'MATAMOSCAS', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod146', category: 'LIMPIEZA', descripcion: 'RECOGEDOR', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod147', category: 'LIMPIEZA', descripcion: 'SECADORES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod148', category: 'LIMPIEZA', descripcion: 'TOALLA DE MANO', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod149', category: 'LIMPIEZA', descripcion: 'TRAPEADOR', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod150', category: 'DESCARTABLE', descripcion: 'ENVACE AJICEROS X 2400 UNID', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod151', category: 'DESCARTABLE', descripcion: 'TAPA AJICEROS X 2400 UNID', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod152', category: 'DESCARTABLE', descripcion: 'PALITOS DE BROCHETAS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod153', category: 'DESCARTABLE', descripcion: 'BOLSAS 12X16', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod154', category: 'DESCARTABLE', descripcion: 'BOLSAS 16X19', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod155', category: 'DESCARTABLE', descripcion: 'BOLSAS 19X20', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod156', category: 'DESCARTABLE', descripcion: 'BOLSAS 20X30', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod157', category: 'DESCARTABLE', descripcion: 'BOLSAS 220 LT', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod158', category: 'DESCARTABLE', descripcion: 'BOLSAS 8X12', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod159', category: 'DESCARTABLE', descripcion: 'BOLSAS 50 LT', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod160', category: 'DESCARTABLE', descripcion: 'TAPER ENSALADA DE POLLO', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod161', category: 'DESCARTABLE', descripcion: 'TAPER ENSALADA DE MEDIO', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod162', category: 'DESCARTABLE', descripcion: 'CUCHARITAS', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod163', category: 'DESCARTABLE', descripcion: 'GORROS DESCARTABLES', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod164', category: 'DESCARTABLE', descripcion: 'GUANTES QUIRURGICOS', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod165', category: 'DESCARTABLE', descripcion: 'LIGAS DE DESPACHO', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { id: 'prod166', category: 'DESCARTABLE', descripcion: 'MONDADIENTES', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod167', category: 'DESCARTABLE', descripcion: 'REMOVEDORES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod168', category: 'DESCARTABLE', descripcion: 'SERVILLETAS DOBLADAS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod169', category: 'DESCARTABLE', descripcion: 'SORBETES X 50 BLANCOS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod170', category: 'DESCARTABLE', descripcion: 'SORBETES NEGROS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod171', category: 'DESCARTABLE', descripcion: 'VASOS DESCARTABLES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod172', category: 'DESCARTABLE', descripcion: 'TENEDORES DESCARTABLES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod173', category: 'DESCARTABLE', descripcion: 'PLATOS DESCARTABLES GRANDES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod174', category: 'DESCARTABLE', descripcion: 'PLATOS DESCARTABLES CHICOS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod175', category: 'DESCARTABLE', descripcion: 'TAPER 500 ML', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod176', category: 'DESCARTABLE', descripcion: 'POLIGRASA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod177', category: 'DESCARTABLE', descripcion: 'ENVASE POLLERO', unidad: 'PQT', itemsPerUnit: 1.0 },
        { id: 'prod178', category: 'DESCARTABLE', descripcion: 'CUCHILLO DESCARTABLE', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod179', category: 'POSTRE', descripcion: 'TRES LECHES', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod180', category: 'POSTRE', descripcion: 'MOUSE DE CHOCOLATE', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod181', category: 'POSTRE', descripcion: 'DERRUMBADO DE LÚCUMA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod182', category: 'POSTRE', descripcion: 'DERRUMBADO DE FRUTOS ROJOS', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod183', category: 'POSTRE', descripcion: 'CREMA VOLTEADA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod184', category: 'POSTRE', descripcion: 'TORTA DE CHOCOLATE', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod185', category: 'POSTRE', descripcion: 'POSTRES CUMPLEAÑOS', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod186', category: 'BEBIDAS NATURALES', descripcion: 'CHICHA MORADA', unidad: 'BAL', itemsPerUnit: 1.0 },
        { id: 'prod187', category: 'BEBIDAS NATURALES', descripcion: 'MARACUYÁ', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod188', category: 'BEBIDAS NATURALES', descripcion: 'DESHIDRATADO DE LIMON', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod189', category: 'BEBIDAS NATURALES', descripcion: 'DESHIDRATADO DE NARANJA', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod190', category: 'BEBIDAS NATURALES', descripcion: 'DESHIDRATADO DE PIÑA', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod191', category: 'BEBIDAS NATURALES', descripcion: 'ARANDANO CONGELADO', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod192', category: 'BEBIDAS NATURALES', descripcion: 'PIÑA CONGELADO', unidad: 'BOL', itemsPerUnit: 1.0 },
        { id: 'prod193', 'category': 'BEBIDAS NATURALES', 'descripcion': 'FRESA CONGELADO', 'unidad': 'BOL', 'itemsPerUnit': 1.0 },
        { id: 'prod194', category: 'HORNO', descripcion: 'POLLO A LA BRASA', unidad: 'UND', itemsPerUnit: 1.0 },
        { id: 'prod195', category: 'HORNO', descripcion: 'CARBÓN', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod196', category: 'HORNO', descripcion: 'LEÑA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod197', category: 'HORNO', descripcion: 'PAPA PROCESADA', unidad: 'KG', itemsPerUnit: 1.0 },
        { id: 'prod198', category: 'HORNO', descripcion: 'LIGAS DE POLLO X 1000', unidad: 'BOL', itemsPerUnit: 1000 },
    ];


    // --- FUNCIONES AUXILIARES ---

    /**
     * Crea un array de direcciones únicas a partir de la lista de empresas para evitar duplicados.
     * @returns {Array<Object>} Un array con objetos de dirección únicos.
     */
    const getUniqueAddresses = () => {
        const uniqueAddresses = {};
        let addressIdCounter = 1;
        mockEmpresas.forEach(emp => {
            if (!Object.values(uniqueAddresses).some(addr => addr.direccionCompleta === emp.direccion && addr.distrito === emp.distrito)) {
                uniqueAddresses[`dir${addressIdCounter}`] = {
                    id: `dir${addressIdCounter++}`,
                    direccionCompleta: emp.direccion,
                    distrito: emp.distrito,
                    provincia: emp.provincia,
                    departamento: emp.departamento
                };
            }
        });
        return Object.values(uniqueAddresses);
    };
    const mockDirecciones = getUniqueAddresses();

    /**
     * Formatea una cadena de fecha (YYYY-MM-DD) a un formato localizado (DD/MM/YYYY).
     * Corrige el problema de la zona horaria (UTC) que puede causar que la fecha retroceda un día.
     * @param {string} dateString - La fecha en formato 'YYYY-MM-DD'.
     * @returns {string} La fecha formateada como 'DD/MM/YYYY'.
     */
    const formatDate = (dateString) => {
        // Reemplazar guiones con slashes para que JavaScript lo interprete como fecha local y no UTC.
        const localDate = new Date(dateString.replace(/-/g, '/'));
        return localDate.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };
    
    /**
     * Rellena un elemento <select> con opciones a partir de un array de datos.
     * @param {string} selectId - El ID del elemento <select> a rellenar.
     * @param {Array<Object>} data - El array de objetos para generar las opciones.
     * @param {string} valueKey - La clave del objeto que se usará como el `value` de la opción.
     * @param {Array<string>} displayKeys - Las claves del objeto que se usarán para el texto visible de la opción.
     */
    const populateSelect = (selectId, data, valueKey, displayKeys) => {
        const select = document.getElementById(selectId);
        select.innerHTML = '<option value="">Seleccione una opción</option>';
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item[valueKey];
            option.textContent = Array.isArray(displayKeys) ? 
                (selectId.includes('remitente') || selectId.includes('destinatario') ? `${item.razonSocial} (RUC: ${item.ruc})` : `${item.direccionCompleta}, ${item.distrito}`) :
                item[displayKeys];
            select.appendChild(option);
        });
    };

    /**
     * Renderiza la sección de productos como un acordeón interactivo.
     * Cada categoría es un panel que se puede expandir para ver los productos.
     */
    const renderProductAccordion = () => {
        const container = document.getElementById('productosContainer');
        container.innerHTML = '';

        // Corregir la numeración de los IDs antes de hacer cualquier otra cosa
        mockProductos.forEach((product, index) => {
            product.id = `prod${index + 1}`;
        });

        const productsByCategory = mockProductos.reduce((acc, product) => {
            const category = product.category || 'Sin Categoría';
            if (!acc[category]) acc[category] = [];
            acc[category].push(product);
            return acc;
        }, {});
        
        // --- CAMBIO PRINCIPAL: Obtener el orden original de las categorías ---
        const orderedCategories = [];
        mockProductos.forEach(product => {
            const category = product.category || 'Sin Categoría';
            if (!orderedCategories.includes(category)) {
                orderedCategories.push(category);
            }
        });

        // Renderizar las categorías en su orden original, no alfabéticamente
        orderedCategories.forEach(category => {
            const isExpanded = false; // Ninguna categoría se expande por defecto
            
            const categoryDiv = document.createElement('div');
            categoryDiv.innerHTML = `
                <div class="category-header ${isExpanded ? 'expanded' : ''}">
                    <span>${category}</span>
                    <span class="icon">+</span>
                </div>
                <div class="product-list ${isExpanded ? 'expanded' : ''}">
                    <div class="product-table-header">
                        <div>Producto</div>
                        <div>Unidad</div>
                        <div>Cantidad</div>
                    </div>
                </div>
            `;
            const productListDiv = categoryDiv.querySelector('.product-list');

            // Ordenar productos DENTRO de la categoría alfabéticamente (esto sí es útil)
            const sortedProducts = productsByCategory[category].sort((a, b) => a.descripcion.localeCompare(b.descripcion));

            sortedProducts.forEach(prod => {
                const productRow = document.createElement('div');
                productRow.className = 'product-row';
                productRow.innerHTML = `
                    <div>${prod.descripcion}</div>
                    <div>${prod.unidad}</div>
                    <div><input type="number" data-product-id="${prod.id}" min="0" step="any" value="0" class="product-quantity"></div>
                `;
                productListDiv.appendChild(productRow);
            });
            container.appendChild(categoryDiv);
        });
    };

    /**
     * Renderiza la sección para añadir productos manualmente.
     */
    const renderManualProductSection = () => {
        const container = document.getElementById('otrosContainer');
        container.innerHTML = `
            <div class="category-header">
                <span>OTROS</span>
            </div>
            <div class="product-list expanded">
                <div id="manual-rows-container">
                </div>
                <button type="button" id="add-manual-product-btn">Añadir Producto</button>
            </div>
        `;
        addManualProductRow(true); // Añade la primera fila sin botón de eliminar
    };

    /**
     * Añade una nueva fila para ingresar un producto manualmente.
     * @param {boolean} isFirst - Indica si es la primera fila (para ocultar el botón de eliminar).
     */
    const addManualProductRow = (isFirst = false) => {
        const container = document.getElementById('manual-rows-container');
        const row = document.createElement('div');
        row.className = 'manual-product-row';
        row.innerHTML = `
            <input type="text" placeholder="Descripción del producto" class="manual-descripcion">
            <input type="text" placeholder="Unidad (ej. KG, UND)" class="manual-unidad">
            <input type="number" placeholder="Cantidad" min="0" step="any" class="manual-cantidad">
            <button type="button" class="remove-manual-row-btn" ${isFirst ? 'style="display:none;"' : ''}>-</button>
        `;
        container.appendChild(row);
    };

    // --- MANEJADORES DE EVENTOS ---

    // Event listener para el acordeón de productos predefinidos.
    document.getElementById('productosContainer').addEventListener('click', (e) => {
        const header = e.target.closest('.category-header');
        if (header) {
            header.classList.toggle('expanded');
            const productList = header.nextElementSibling;
            productList.classList.toggle('expanded');
        }
    });

    // Event listener para la sección de productos manuales.
    document.getElementById('otrosContainer').addEventListener('click', (e) => {
        if (e.target.id === 'add-manual-product-btn') {
            addManualProductRow();
        }
        if (e.target.classList.contains('remove-manual-row-btn')) {
            e.target.closest('.manual-product-row').remove();
        }
    });
    
    // Autocompletar direcciones al seleccionar remitente/destinatario.
    document.getElementById('remitente').addEventListener('change', (e) => {
        const company = mockEmpresas.find(emp => emp.id === e.target.value);
        if(company) {
            const address = mockDirecciones.find(dir => dir.direccionCompleta === company.direccion && dir.distrito === company.distrito);
            if(address) document.getElementById('direccionPartida').value = address.id;
        }
    });

    document.getElementById('destinatario').addEventListener('change', (e) => {
         const company = mockEmpresas.find(emp => emp.id === e.target.value);
        if(company) {
            const address = mockDirecciones.find(dir => dir.direccionCompleta === company.direccion && dir.distrito === company.distrito);
            if(address) document.getElementById('direccionLlegada').value = address.id;
        }
    });
    
    // Envío del formulario principal.
    document.getElementById('guideForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        let productsWithDetails = [];

        // Recopilar productos predefinidos
        document.querySelectorAll('.product-quantity').forEach(input => {
            const cantidad = parseFloat(input.value); // Cambiado a parseFloat para decimales
            if (cantidad > 0) {
                const productId = input.dataset.productId;
                const productDetail = mockProductos.find(p => p.id === productId);
                if (productDetail) {
                    productsWithDetails.push({
                        nro: productsWithDetails.length + 1,
                        cantidad,
                        unidad: productDetail.unidad,
                        descripcion: productDetail.descripcion,
                        totalUnidadesIndividuales: cantidad * (productDetail.itemsPerUnit || 1),
                    });
                }
            }
        });

        // Recopilar productos manuales
        document.querySelectorAll('.manual-product-row').forEach(row => {
            const descripcion = row.querySelector('.manual-descripcion').value.trim();
            const unidad = row.querySelector('.manual-unidad').value.trim();
            const cantidad = parseFloat(row.querySelector('.manual-cantidad').value); // Cambiado a parseFloat para decimales

            if (descripcion && unidad && cantidad > 0) {
                productsWithDetails.push({
                    nro: productsWithDetails.length + 1,
                    cantidad,
                    unidad,
                    descripcion,
                    totalUnidadesIndividuales: cantidad, // Para manuales, las unidades son la cantidad
                });
            }
        });

        if (productsWithDetails.length === 0) {
            alert('Debe ingresar una cantidad para al menos un producto.');
            return;
        }
        
        const guiaGenerada = {
            remitente: mockEmpresas.find(emp => emp.id === document.getElementById('remitente').value),
            destinatario: mockEmpresas.find(emp => emp.id === document.getElementById('destinatario').value),
            direccionPartida: mockDirecciones.find(dir => dir.id === document.getElementById('direccionPartida').value),
            direccionLlegada: mockDirecciones.find(dir => dir.id === document.getElementById('direccionLlegada').value),
            fechaEmision: document.getElementById('fechaEmision').value,
            fechaTraslado: document.getElementById('fechaTraslado').value,
            motivoTraslado: document.getElementById('motivoTraslado').value,
            modalidadTraslado: document.querySelector('input[name="modalidadTraslado"]:checked').value,
            placaVehiculo: document.getElementById('placaVehiculo').value,
            nombreConductor: document.getElementById('nombreConductor').value,
            dniConductor: document.getElementById('dniConductor').value,
            licenciaConducir: document.getElementById('licenciaConducir').value,
            productos: productsWithDetails,
            numeroGuia: `GR-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
        };

        const isVentaChecked = guiaGenerada.motivoTraslado === 'Venta' ? 'X' : ' ';
        const isTrasladoChecked = guiaGenerada.motivoTraslado === 'Traslado' ? 'X' : ' ';
        const isOtrosChecked = guiaGenerada.motivoTraslado === 'Otros' ? 'X' : ' ';

        document.getElementById('guia-content').innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.2rem; padding-bottom: 0.2rem; border-bottom: 1px solid #e2e8f0;">
                <div style="flex-grow: 1; font-size: 0.8rem;">
                    <h2 style="font-size: 1rem; font-weight: bold; color: #1f2937; margin-bottom: 0;">${guiaGenerada.remitente.razonSocial}</h2>
                    <p style="color: #4b5563; margin-bottom: 0;">RUC: ${guiaGenerada.remitente.ruc}</p>
                    <p style="color: #4b5563; margin-bottom: 0;">${guiaGenerada.remitente.direccion}</p>
                </div>
                <div style="text-align: right; font-size: 0.8rem;">
                    <p style="font-size: 1.1rem; font-weight: bolder; color: #dc2626; margin-bottom: 0.1rem;">GUIA DE REMISION</p>
                    <p style="font-size: 0.9rem; font-weight: bold; color: #1f2937; margin-bottom: 0.1rem;">Nro. ${guiaGenerada.numeroGuia}</p>
                    <p style="color: #374151; margin-bottom: 0;">Fecha de emisión: ${formatDate(guiaGenerada.fechaEmision)}</p>
                    <p style="color: #374151; margin-bottom: 0;">Fecha de inicio de Traslado: ${formatDate(guiaGenerada.fechaTraslado)}</p>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.1rem; margin-bottom: 0.2rem; padding-bottom: 0.2rem; border-bottom: 1px solid #e2e8f0; font-size: 0.8rem;">
                <div><p style="font-weight: bold;">Punto de Partida:</p><p>${guiaGenerada.direccionPartida.direccionCompleta}</p><p>${guiaGenerada.direccionPartida.distrito}</p></div>
                <div><p style="font-weight: bold;">Punto de llegada:</p><p>${guiaGenerada.direccionLlegada.direccionCompleta}</p><p>${guiaGenerada.direccionLlegada.distrito}</p></div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.1rem; margin-bottom: 0.2rem; padding-bottom: 0.2rem; border-bottom: 1px solid #e2e8f0; font-size: 0.8rem;">
                <div><p style="font-weight: bold;">Motivo de Traslado:</p><p>[${isVentaChecked}] Venta &nbsp; [${isTrasladoChecked}] Traslado &nbsp; [${isOtrosChecked}] Otros</p></div>
                <div><p style="font-weight: bold;">Datos del Destinatario:</p><p>RUC: ${guiaGenerada.destinatario.ruc}</p><p>Razón Social: ${guiaGenerada.destinatario.razonSocial}</p></div>
            </div>
            <h3 style="font-size: 0.9rem; font-weight: bold; margin-bottom: 0.2rem;">Detalle de Productos:</h3>
            <div style="overflow-x: auto; margin-bottom: 0.2rem;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead><tr style="text-align: left; font-size: 0.65rem; font-weight: bold; text-transform: uppercase; background-color: #f8f8f8;">
                        <th style="padding: 3px 6px; border: 1px solid #e2e8f0;">Nro.</th><th style="padding: 3px 6px; border: 1px solid #e2e8f0;">Cantidad</th>
                        <th style="padding: 3px 6px; border: 1px solid #e2e8f0;">Unidades</th><th style="padding: 3px 6px; border: 1px solid #e2e8f0;">Medida</th>
                        <th style="padding: 3px 6px; border: 1px solid #e2e8f0;">Descripción</th>
                    </tr></thead>
                    <tbody>${guiaGenerada.productos.map(p => `<tr>
                        <td style="padding: 3px 6px; font-size: 0.75rem; border: 1px solid #e2e8f0;">${p.nro}</td>
                        <td style="padding: 3px 6px; font-size: 0.75rem; border: 1px solid #e2e8f0;">${p.cantidad}</td>
                        <td style="padding: 3px 6px; font-size: 0.75rem; border: 1px solid #e2e8f0;">${p.totalUnidadesIndividuales.toFixed(2)}</td>
                        <td style="padding: 3px 6px; font-size: 0.75rem; border: 1px solid #e2e8f0;">${p.unidad}</td>
                        <td style="padding: 3px 6px; font-size: 0.75rem; border: 1px solid #e2e8f0;">${p.descripcion}</td>
                    </tr>`).join('')}</tbody>
                </table>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.1rem; margin-top: 1.5rem; font-size: 0.8rem;">
                <div>
                    <p><span style="font-weight: bold;">Modalidad:</span> ${guiaGenerada.modalidadTraslado}</p>
                    <p><span style="font-weight: bold;">Vehículo:</span> Placa: ${guiaGenerada.placaVehiculo}</p>
                    <p><span style="font-weight: bold;">Conductor:</span> ${guiaGenerada.nombreConductor}</p>
                    <p><span style="font-weight: bold;">DNI:</span> ${guiaGenerada.dniConductor}</p>
                    <p><span style="font-weight: bold;">Licencia:</span> ${guiaGenerada.licenciaConducir}</p>
                </div>
                <div style="text-align: left; margin-top: 0.5rem;">
                    <p><span style="font-weight: bold;">Conformidad cliente:</span></p>
                    <p><span style="font-weight: bold;">Nombre:</span> __________________</p>
                    <p><span style="font-weight: bold;">DNI:</span> ______________________</p>
                </div>
            </div>`;
        document.getElementById('guiaModal').classList.remove('hidden');
    });

    // Manejo del modal.
    document.getElementById('closeModalBtn').addEventListener('click', () => document.getElementById('guiaModal').classList.add('hidden'));
    document.getElementById('closeModalBtnBottom').addEventListener('click', () => document.getElementById('guiaModal').classList.add('hidden'));
    document.getElementById('guiaModal').addEventListener('click', (e) => { if(e.target.id === 'guiaModal') e.target.classList.add('hidden'); });
    
    // Lógica de impresión definitiva.
    document.getElementById('printGuideBtn').addEventListener('click', () => {
        const guideContent = document.getElementById('guia-content').innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Imprimir Guía de Remisión</title>
                    <style>
                        body { 
                            font-family: 'Inter', sans-serif; 
                            margin: 20px;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th, td {
                            border: 1px solid #ccc;
                            padding: 5px;
                            text-align: left;
                        }
                    </style>
                </head>
                <body>
                    ${guideContent}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus(); // Necesario para algunos navegadores.
        printWindow.print();
    });

    /**
     * Resetea el formulario a su estado inicial.
     */
    const clearForm = () => {
        // Obtiene el elemento del formulario
        const guideForm = document.getElementById('guideForm');
        // Resetea todos los campos del formulario a sus valores por defecto.
        guideForm.reset();

        // Resetea específicamente los campos de cantidad de productos a 0.
        document.querySelectorAll('.product-quantity').forEach(input => {
            input.value = 0;
        });

        // Limpia y reinicia la sección de productos manuales.
        const manualRowsContainer = document.getElementById('manual-rows-container');
        manualRowsContainer.innerHTML = '';
        addManualProductRow(true);

        // Colapsa todas las categorías de productos que puedan estar abiertas.
        document.querySelectorAll('.category-header.expanded').forEach(header => {
            header.classList.remove('expanded');
            header.nextElementSibling.classList.remove('expanded');
        });

        // Opcional: Desplazarse al inicio del formulario para una mejor experiencia de usuario.
        guideForm.scrollIntoView({ behavior: 'smooth' });
    };

    // Event listener para el nuevo botón de limpiar.
    document.getElementById('clearFormBtn').addEventListener('click', clearForm);


    // --- INICIALIZACIÓN DE LA PÁGINA ---
    // Se ejecuta una vez que el DOM está listo.
    
    // Establece la fecha actual en los campos de fecha.
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fechaEmision').value = today;
    document.getElementById('fechaTraslado').value = today;
    
    // Rellena todos los menús desplegables con los datos correspondientes.
    populateSelect('remitente', mockEmpresas, 'id', ['razonSocial', 'ruc']);
    populateSelect('destinatario', mockEmpresas, 'id', ['razonSocial', 'ruc']);
    populateSelect('direccionPartida', mockDirecciones, 'id', ['direccionCompleta', 'distrito']);
    populateSelect('direccionLlegada', mockDirecciones, 'id', ['direccionCompleta', 'distrito']);
    
    // Crea y muestra el acordeón de productos predefinidos.
    renderProductAccordion();
    // Crea y muestra la sección para productos manuales.
    renderManualProductSection();
});
