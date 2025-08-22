// Espera a que el DOM esté completamente cargado para ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {

    // --- DATOS SIMULADOS (MOCK DATA) ---
    const mockEmpresas = [
        { id: 'emp1', ruc: '20609607395', razonSocial: 'IJG Inversiones Janampa Guevara S.A.C.', direccion: 'Av. Victor Malasquez Mza. B2 Lote. 09 A.H. Huertos De Manchay', distrito: 'Pachacamac', provincia: 'Lima', departamento: 'Lima' },
        { id: 'emp2', ruc: '20609518562', razonSocial: 'ICM Inversiones Cortez Maldonado S.A.C.', direccion: 'Ch. Pachac. Iv Et. Parc. 3a Manzana Z1 Lote 25', distrito: 'Pachacamac', provincia: 'Lima', departamento: 'Lima' },
        { id: 'emp3', ruc: '20546449573', razonSocial: 'Lo De Juan Chicken Grill S.R.L', direccion: 'Av. Victor Malasquez Mza. B2 Lote. 09 A.H. Huertos De Manchay', distrito: 'Pachacamac', provincia: 'Lima', departamento: 'Lima' },
        { id: 'emp4', ruc: '20610392017', razonSocial: 'Tucfer S.A.C.', direccion: 'Grupo Residencial 27a Mza. I Lote. 21 sec. 3', distrito: 'Villa El Salvador', provincia: 'Lima', departamento: 'Lima' },
        { id: 'emp5', ruc: '20608779532', razonSocial: 'Alero Inversiones S.A.C.', direccion: 'Av. Talara Con Los Alamos Mza. A Lote. 13 Sec. 3 - Grupo 24', distrito: 'Villa El Salvador', provincia: 'Lima', departamento: 'Lima' },
    ];

    // Lista de productos actualizada y reordenada
    let mockProductos = [  
        // VERDURAS
        { category: 'VERDURAS', descripcion: 'LECHUGA AMERICANA', unidad: 'DOC', itemsPerUnit: 12.0 },
        { category: 'VERDURAS', descripcion: 'LECHUGA CRESPA', unidad: 'DOC', itemsPerUnit: 12.0 },
        { category: 'VERDURAS', descripcion: 'LIMON', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'MANZANA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'PALTA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'PAPA BLANCA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'PECANA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'PEPINO', unidad: 'DOC', itemsPerUnit: 12 },
        { category: 'VERDURAS', descripcion: 'PIMIENTO', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'PIÑA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'ROMERO', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'TOMATE', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'VAINITA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'ZANAHORIA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'AJO', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'BETERRAGA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'CEBOLLA BLANCA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'CHAMPIGÑON', unidad: 'BANDEJA', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'CHOCLO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'ESPINACA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'HUEVO DE CODORNIZ', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'CEBOLLA CHINA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'CEBOLLA CHINA PROCESADA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'NARANJA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'BRÓCOLI', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'AJI AMARILLO', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'AJI LIMO', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'AJI PANCA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'ALVERJA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'CARAMBOLA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'CEBOLLA ROJA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'CULANTRO', unidad: 'UNIDAD', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'HIERBA LUISA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'HUACATAY', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'KION', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'MAIZ MORADO', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'MANZANA AGUA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'MARACUYA', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'MEMBRILLO', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'MENTA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'MUÑA', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'OREGANO', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'PAPA YUNGAY', unidad: 'KILO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'PEREJIL', unidad: 'ATADO', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'QUESO', unidad: 'UNIDAD', itemsPerUnit: 1.0 },
        { category: 'VERDURAS', descripcion: 'WANTAN', unidad: 'KILO', itemsPerUnit: 1.0 },
        // ABARROTES
        { category: 'ABARROTES', descripcion: 'ACEITE MONTESOL X 18 Lt.', unidad: 'LATA', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'ACEITE DE OLIVA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'ANÍS', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'ARROZ', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'AZÚCAR SACHET', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'AZÚCAR BLANCA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'AZÚCAR RUBIA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'CAFÉ GRANEL', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'GUANTES DE CUERO', unidad: 'PAR', itemsPerUnit: 2.0 },
        { category: 'ABARROTES', descripcion: 'KETCHUP GRANEL', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'KETCHUP SACHET', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'LECHE EVAPORADA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'MANZANILLA', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'MOSTAZA GRANEL', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'MOSTAZA SACHET', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'PIÑA EN CONSERVA', unidad: 'LATA', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'SAL', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'SALSA BBQ', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'TÉ', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'PIMIENTA NEGRA', unidad: 'FRASCO', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'SERVILLETAS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'SODA CAUSTICA ESCAMAS', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'SORBETE ESPECIAL PLANCHA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'PAPEL MANTECA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'LIGAS DE POLLO', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'LIGAS', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'HUEVO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'ABARROTES', descripcion: 'ACEITE DE AJONJOLI', unidad: 'BOT', itemsPerUnit: 1.0 },
        // CARNES
        { category: 'CARNES', descripcion: 'FILETE DE PECHUGA x 30', unidad: 'UND', itemsPerUnit: 30 },
        { category: 'CARNES', descripcion: 'MOLLEJA DE POLLO x 25', unidad: 'PORC', itemsPerUnit: 25 },
        { category: 'CARNES', descripcion: 'LOMO X 200 GR x 20', unidad: 'UND', itemsPerUnit: 20},
        { category: 'CARNES', descripcion: 'CHULETA x 20', unidad: 'UND', itemsPerUnit: 20 },
        { category: 'CARNES', descripcion: 'RACHI x 20', unidad: 'PORC', itemsPerUnit: 20 },
        { category: 'CARNES', descripcion: 'ANTICUCHO x 40', unidad: 'PAL', itemsPerUnit: 40 },
        { category: 'CARNES', descripcion: 'BIFE x 20', unidad: 'UND', itemsPerUnit: 20 },
        { category: 'CARNES', descripcion: 'CHURRASCO x 15', unidad: 'UND', itemsPerUnit: 15 },
        { category: 'CARNES', descripcion: 'CHORIZO x 60', unidad: 'UND', itemsPerUnit: 60 },
        { category: 'CARNES', descripcion: 'COSTILLA x 15', unidad: 'UND', itemsPerUnit: 15 },
        { category: 'CARNES', descripcion: 'MORCILLA', unidad: 'UND', itemsPerUnit: 12 },
        // BEBIDAS
        { category: 'BEBIDAS', descripcion: 'GASEOSA INCA KOLA DE 1.5 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'GASEOSA INCA KOLA DE 1 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'GASEOSA INCA KOLA DE 1/2 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'GASEOSA COCA COLA DE 1.5 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'GASEOSA COCA COLA DE 1 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'GASEOSA COCA COLA DE 1/2 LITRO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'CERVEZA PILSEN', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'CERVEZA CUSQUEÑA NEGRA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'CERVEZA CUSQUEÑA DORADA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'CERVEZA CUSQUEÑA TRIGO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'AGUA MINERAL 3 LITROS', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'AGUA SAN LUIS CON GAS 600 ML', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS', descripcion: 'AGUA SAN LUIS SIN GAS 600 ML', unidad: 'UND', itemsPerUnit: 1.0 },
        // LICORES
        { category: 'LICORES', descripcion: 'ALGARROBINA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'AMARGO DE ANGOSTURA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'CREMA DE COCO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'CREMA DE MENTA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'EVERVESS', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'JARABE DE GOMA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'JARABE DE GRANDINA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'JUGO DE PIÑA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'JUGO DE NARANJA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'LICOR DE CACAO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'MARRASQUINO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'PISCO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'RON BLANCO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'RON RUBIO', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'VINO BORGOÑA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'VINO MAGDALENA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'VINO PEDRAS NEGRAS', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'VINO ROSÉ', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'VINO INTIKALPA', unidad: 'BOT', itemsPerUnit: 1.0 },
        { category: 'LICORES', descripcion: 'VINO BLANCO (gato negro)', unidad: 'UND', itemsPerUnit: 1.0 },
        // CREMAS
        { category: 'CREMAS', descripcion: 'CREMA MAYONESA', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'CREMA AJÍ', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'CREMA VINAGRETA', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'TEQUEÑOS', unidad: 'PORC', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'ALITAS', unidad: 'PORC', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'ARROZ CHAUFA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'SALSA ACEVICHADO', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'SALSA BBQ LJD', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'SALSA PICANTE AJI LIMO', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'CHIMICHURRI', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'SALSA ANTICUCHERA X 1', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'SAL PARRILLERA PREPARADA X 2', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'ALIÑO DE PARRILLA 1', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'CREMAS', descripcion: 'SALSA DE ORÉGANO X 250', unidad: 'GR', itemsPerUnit: 1.0 },
        // LIMPIEZA
        { category: 'LIMPIEZA', descripcion: 'DETERGENTE', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'ESCOBA DE MADERA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'ESCOBA DE PARRILLA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'ESCOBA DE PLÁSTICO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'ESPONJA DUO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'ESPONJA MÁQUINA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'ESPONJA VERDE', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'JALADOR', unidad: 'GL', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'LIMPIAVIDRIOS', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'MATAMOSCAS', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'RECOGEDOR', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'SECADORES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'TOALLA DE MANO', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'LIMPIEZA', descripcion: 'TRAPEADOR', unidad: 'CAJA', itemsPerUnit: 1.0 },
        // DESCARTABLE
        { category: 'DESCARTABLE', descripcion: 'ENVACE AJICEROS X 2400 UNID', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'TAPA AJICEROS X 2400 UNID', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'PALITOS DE BROCHETAS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'BOLSAS 12X16', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'BOLSAS 16X19', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'BOLSAS 19X20', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'BOLSAS 20X30', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'BOLSAS 220 LT', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'BOLSAS 8X12', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'BOLSAS 50 LT', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'TAPER ENSALADA DE POLLO', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'TAPER ENSALADA DE MEDIO', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'CUCHARITAS', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'GORROS DESCARTABLES', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'GUANTES QUIRURGICOS', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'LIGAS DE DESPACHO', unidad: 'CAJA', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'MONDADIENTES', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'REMOVEDORES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'SERVILLETAS DOBLADAS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'SORBETES X 50 BLANCOS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'SORBETES NEGROS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'VASOS DESCARTABLES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'TENEDORES DESCARTABLES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'PLATOS DESCARTABLES GRANDES', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'PLATOS DESCARTABLES CHICOS', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'TAPER 500 ML', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'POLIGRASA', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'ENVASE POLLERO', unidad: 'PQT', itemsPerUnit: 1.0 },
        { category: 'DESCARTABLE', descripcion: 'CUCHILLO DESCARTABLE', unidad: 'UND', itemsPerUnit: 1.0 },
        // POSTRE
        { category: 'POSTRE', descripcion: 'TRES LECHES', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'POSTRE', descripcion: 'MOUSE DE CHOCOLATE', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'POSTRE', descripcion: 'DERRUMBADO DE LÚCUMA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'POSTRE', descripcion: 'DERRUMBADO DE FRUTOS ROJOS', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'POSTRE', descripcion: 'CREMA VOLTEADA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'POSTRE', descripcion: 'TORTA DE CHOCOLATE', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'POSTRE', descripcion: 'POSTRES CUMPLEAÑOS', unidad: 'UND', itemsPerUnit: 1.0 },
        // BEBIDAS NATURALES
        { category: 'BEBIDAS NATURALES', descripcion: 'CHICHA MORADA', unidad: 'BAL', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS NATURALES', descripcion: 'MARACUYÁ', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS NATURALES', descripcion: 'DESHIDRATADO DE LIMON', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS NATURALES', descripcion: 'DESHIDRATADO DE NARANJA', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS NATURALES', descripcion: 'DESHIDRATADO DE PIÑA', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS NATURALES', descripcion: 'ARANDANO CONGELADO', unidad: 'BOL', itemsPerUnit: 1.0 },
        { category: 'BEBIDAS NATURALES', descripcion: 'PIÑA CONGELADO', unidad: 'BOL', itemsPerUnit: 1.0 },
        { 'category': 'BEBIDAS NATURALES', 'descripcion': 'FRESA CONGELADO', 'unidad': 'BOL', 'itemsPerUnit': 1.0 },
        // HORNO
        { category: 'HORNO', descripcion: 'POLLO A LA BRASA', unidad: 'UND', itemsPerUnit: 1.0 },
        { category: 'HORNO', descripcion: 'CARBÓN', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'HORNO', descripcion: 'LEÑA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'HORNO', descripcion: 'PAPA PROCESADA', unidad: 'KG', itemsPerUnit: 1.0 },
        { category: 'HORNO', descripcion: 'LIGAS DE POLLO X 1000', unidad: 'BOL', itemsPerUnit: 1000 },
    ];

    // Asignar IDs numéricos a todos los productos
    mockProductos.forEach((producto, index) => {
        producto.id = `prod${index + 1}`;
    });


    // --- FUNCIONES AUXILIARES ---

    /**
     * Crea un array de direcciones únicas a partir de la lista de empresas.
     */
    const getUniqueAddresses = () => {
        const uniqueAddresses = {};
        let addressIdCounter = 1;
        mockEmpresas.forEach(emp => {
            const addressKey = `${emp.direccion}-${emp.distrito}`;
            if (!uniqueAddresses[addressKey]) {
                uniqueAddresses[addressKey] = {
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
     */
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const localDate = new Date(dateString.replace(/-/g, '/'));
        return localDate.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };
    
    /**
     * Rellena un elemento <select> con opciones a partir de un array de datos.
     */
    const populateSelect = (selectId, data, valueKey, displayKeys) => {
        const select = document.getElementById(selectId);
        if (!select) return;
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
     * @param {Array<Object>} productsToRender - La lista de productos a mostrar.
     */
    const renderProductAccordion = (productsToRender) => {
        const container = document.getElementById('productosContainer');
        container.innerHTML = '';

        const productsByCategory = productsToRender.reduce((acc, product) => {
            const category = product.category || 'Sin Categoría';
            if (!acc[category]) acc[category] = [];
            acc[category].push(product);
            return acc;
        }, {});
        
        // --- INICIO DE LA LÓGICA DE ORDENAMIENTO DE CATEGORÍAS ---
        const categoryOrder = [
            'VERDURAS', 'ABARROTES', 'CARNES', 'BEBIDAS', 'LICORES', 'CREMAS',
            'LIMPIEZA', 'DESCARTABLE', 'POSTRE', 'BEBIDAS NATURALES', 'HORNO'
        ];

        const allCategoriesInApp = Object.keys(productsByCategory);
        
        // Ordena las categorías según la lista 'categoryOrder'
        const orderedCategories = allCategoriesInApp.sort((a, b) => {
            const indexA = categoryOrder.indexOf(a);
            const indexB = categoryOrder.indexOf(b);
            // Si ambas categorías están en la lista de orden, las ordena según su posición
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB;
            }
            // Si solo A está en la lista, A va primero
            if (indexA !== -1) return -1;
            // Si solo B está en la lista, B va primero
            if (indexB !== -1) return 1;
            // Si ninguna está en la lista, se ordenan alfabéticamente entre ellas
            return a.localeCompare(b);
        });
        // --- FIN DE LA LÓGICA DE ORDENAMIENTO DE CATEGORÍAS ---

        orderedCategories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.innerHTML = `
                <div class="category-header">
                    <span>${category}</span>
                    <span class="icon">+</span>
                </div>
                <div class="product-list">
                    <div class="product-table-header">
                        <div>Producto</div>
                        <div>Unidad</div>
                        <div>Cantidad</div>
                    </div>
                </div>
            `;
            const productListDiv = categoryDiv.querySelector('.product-list');
            
            // --- INICIO DE LA LÓGICA DE ORDENAMIENTO DE PRODUCTOS ---
            let sortedProducts;
            if (category === 'CARNES') {
                const customOrder = ['FILETE', 'MOLLEJA', 'LOMO', 'CHULETA', 'RACHI', 'ANTICUCHO', 'BIFE', 'CHURRASCO', 'CHORIZO', 'COSTILLA', 'MORCILLA'];
                sortedProducts = productsByCategory[category].sort((a, b) => {
                    const descA = a.descripcion.split(' ')[0].toUpperCase();
                    const descB = b.descripcion.split(' ')[0].toUpperCase();
                    const indexA = customOrder.indexOf(descA);
                    const indexB = customOrder.indexOf(descB);

                    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                    if (indexA !== -1) return -1;
                    if (indexB !== -1) return 1;
                    return a.descripcion.localeCompare(b.descripcion);
                });
            } else if (category === 'CREMAS') {
                const customOrder = ['MAYONESA', 'AJÍ', 'VINAGRETA', 'TEQUEÑOS', 'ALITAS', 'CHAUFA', 'ACEVICHADO', 'BBQ LJD', 'LIMO', 'CHIMICHURRI', 'ANTICUCHERA', 'SAL PARRILLERA', 'ALIÑO DE PARRILLA', 'ORÉGANO'];
                sortedProducts = productsByCategory[category].sort((a, b) => {
                    const getOrderIndex = (desc) => {
                        const upperDesc = desc.toUpperCase();
                        for (let i = 0; i < customOrder.length; i++) {
                            if (upperDesc.includes(customOrder[i])) {
                                return i;
                            }
                        }
                        return -1; // No encontrado en la lista de orden
                    };
                    const indexA = getOrderIndex(a.descripcion);
                    const indexB = getOrderIndex(b.descripcion);

                    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                    if (indexA !== -1) return -1;
                    if (indexB !== -1) return 1;
                    return a.descripcion.localeCompare(b.descripcion);
                });
            } else {
                // Para el resto de las categorías, se mantiene el orden alfabético
                sortedProducts = productsByCategory[category].sort((a, b) => a.descripcion.localeCompare(b.descripcion));
            }
            // --- FIN DE LA LÓGICA DE ORDENAMIENTO DE PRODUCTOS ---

            sortedProducts.forEach(prod => {
                const productRow = document.createElement('div');
                productRow.className = 'product-row';
                productRow.innerHTML = `
                    <div title="${prod.descripcion}">${prod.descripcion}</div>
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
            <div class="category-header"><span>OTROS</span></div>
            <div class="product-list expanded">
                <div id="manual-rows-container"></div>
                <button type="button" id="add-manual-product-btn">Añadir Producto</button>
            </div>
        `;
        addManualProductRow(true);
    };

    /**
     * Añade una nueva fila para ingresar un producto manualmente.
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

    /**
     * Resetea el formulario a su estado inicial.
     */
    const clearForm = () => {
        document.getElementById('guideForm').reset();
        document.querySelectorAll('.product-quantity').forEach(input => { input.value = 0; });
        document.getElementById('manual-rows-container').innerHTML = '';
        addManualProductRow(true);
        document.querySelectorAll('.category-header.expanded').forEach(header => {
            header.classList.remove('expanded');
            header.nextElementSibling.classList.remove('expanded');
        });
        renderProductAccordion(mockProductos);
        document.getElementById('guideForm').scrollIntoView({ behavior: 'smooth' });
    };

    // --- MANEJADORES DE EVENTOS ---

    // Acordeón de productos
    document.getElementById('productosContainer').addEventListener('click', (e) => {
        const header = e.target.closest('.category-header');
        if (header) {
            header.classList.toggle('expanded');
            header.nextElementSibling.classList.toggle('expanded');
        }
    });

    // Productos manuales
    document.getElementById('otrosContainer').addEventListener('click', (e) => {
        if (e.target.id === 'add-manual-product-btn') addManualProductRow();
        if (e.target.classList.contains('remove-manual-row-btn')) e.target.closest('.manual-product-row').remove();
    });
    
    // Autocompletar direcciones
    document.getElementById('remitente').addEventListener('change', (e) => {
        const company = mockEmpresas.find(emp => emp.id === e.target.value);
        if (company) {
            const address = mockDirecciones.find(dir => dir.direccionCompleta === company.direccion && dir.distrito === company.distrito);
            if (address) document.getElementById('direccionPartida').value = address.id;
        }
    });

    document.getElementById('destinatario').addEventListener('change', (e) => {
        const company = mockEmpresas.find(emp => emp.id === e.target.value);
        if (company) {
            const address = mockDirecciones.find(dir => dir.direccionCompleta === company.direccion && dir.distrito === company.distrito);
            if (address) document.getElementById('direccionLlegada').value = address.id;
        }
    });
    
    // Envío del formulario principal
    document.getElementById('guideForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        let productsWithDetails = [];
        document.querySelectorAll('.product-quantity').forEach(input => {
            const cantidad = parseFloat(input.value);
            if (cantidad > 0) {
                const productDetail = mockProductos.find(p => p.id === input.dataset.productId);
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

        document.querySelectorAll('.manual-product-row').forEach(row => {
            const descripcion = row.querySelector('.manual-descripcion').value.trim();
            const unidad = row.querySelector('.manual-unidad').value.trim();
            const cantidad = parseFloat(row.querySelector('.manual-cantidad').value);
            if (descripcion && unidad && cantidad > 0) {
                productsWithDetails.push({
                    nro: productsWithDetails.length + 1,
                    cantidad,
                    unidad,
                    descripcion,
                    totalUnidadesIndividuales: cantidad,
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
            numeroGuia: `GR-${Date.now().toString().slice(-6)}`,
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

    // Manejo del modal
    document.getElementById('closeModalBtn').addEventListener('click', () => document.getElementById('guiaModal').classList.add('hidden'));
    document.getElementById('closeModalBtnBottom').addEventListener('click', () => document.getElementById('guiaModal').classList.add('hidden'));
    document.getElementById('guiaModal').addEventListener('click', (e) => { if (e.target.id === 'guiaModal') e.target.classList.add('hidden'); });
    
    // Lógica de impresión
    document.getElementById('printGuideBtn').addEventListener('click', () => {
        const guideContent = document.getElementById('guia-content').innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`<html><head><title>Imprimir Guía</title><style>body{font-family: 'Inter', sans-serif; margin: 20px;} table{width: 100%; border-collapse: collapse;} th, td{border: 1px solid #ccc; padding: 5px; text-align: left;}</style></head><body>${guideContent}</body></html>`);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    });

    document.getElementById('clearFormBtn').addEventListener('click', clearForm);

    // --- INICIALIZACIÓN DE LA PÁGINA ---
    const initializeApp = () => {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('fechaEmision').value = today;
        document.getElementById('fechaTraslado').value = today;
        
        populateSelect('remitente', mockEmpresas, 'id', ['razonSocial', 'ruc']);
        populateSelect('destinatario', mockEmpresas, 'id', ['razonSocial', 'ruc']);
        populateSelect('direccionPartida', mockDirecciones, 'id', ['direccionCompleta', 'distrito']);
        populateSelect('direccionLlegada', mockDirecciones, 'id', ['direccionCompleta', 'distrito']);
        
        renderProductAccordion(mockProductos);
        renderManualProductSection();
    };

    initializeApp();
});
