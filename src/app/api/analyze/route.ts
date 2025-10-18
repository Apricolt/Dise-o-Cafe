import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    console.log("🔍 Iniciando análisis de imagen...");

    const { image, mimeType } = await req.json();

    if (!image || !mimeType) {
      console.error("❌ Falta imagen o mimeType");
      return NextResponse.json(
        { error: "Imagen y tipo MIME son requeridos" },
        { status: 400 }
      );
    }

    console.log("📁 Datos recibidos:", {
      imageLength: image.length,
      mimeType: mimeType
    });

    // Simular tiempo de procesamiento (1-2 segundos)
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Análisis simulados para diferentes tipos de granos
    const analisisSimulados = [
      {
        clasificacion: "Grano de café verde de alta calidad - Arábica",
        descripcion: "Los granos presentan un color verde uniforme con tonalidades azuladas características de café arábica de altura. La textura es consistente y el tamaño es uniforme, sin defectos visibles significativos. El grano muestra buena densidad y forma ovalada típica de variedades de alta calidad.",
        recomendacion: "Estos granos son ideales para un tostado medio que resalte sus características naturales. Se recomienda un proceso de secado cuidadoso para preservar los azúcares naturales. Perfecto para métodos de preparación como pour-over o chemex que destaquen su perfil ácido y afrutado.",
        nivel_confianza: "Alto"
      },
      {
        clasificacion: "Grano de café verde con defectos menores - Calidad comercial",
        descripcion: "Se observan granos de color verde con ligeras variaciones de tono, algunos presentan decoloración menor en los bordes. La uniformidad del tamaño es aceptable aunque se detectan algunos granos más pequeños. La textura general es buena pero hay presencia de algunos granos quebrados (menos del 5%).",
        recomendacion: "Apropiado para tostado medio-oscuro que compense las variaciones de calidad. Se sugiere mezclar con granos de mejor calidad para mejorar el perfil final. Recomendado para preparaciones con leche o métodos que suavicen posibles notas amargas.",
        nivel_confianza: "Medio"
      },
      {
        clasificacion: "Grano de café verde premium - Variedad especial",
        descripcion: "Excepcional uniformidad en color verde jade intenso. Los granos muestran un tamaño consistente (screen 17-18) y forma perfectamente ovalada. Sin defectos visibles, excelente densidad que indica maduración óptima en la planta. El surco central es profundo y bien definido, característica de granos de altura cultivados sobre 1,500 msnm.",
        recomendacion: "Ideal para tostado claro a medio-claro para preservar los delicados perfiles florales y afrutados. Perfecto para métodos de extracción que resalten complejidad como V60 o Aeropress. Considere un proceso de fermentación controlada para añadir notas únicas. Este grano tiene potencial para mercados de especialidad.",
        nivel_confianza: "Alto"
      },
      {
        clasificacion: "Grano de café verde - Necesita clasificación adicional",
        descripcion: "Se observa mezcla de granos de diferentes tamaños y tonalidades que van desde verde claro hasta amarillo verdoso. Algunos granos presentan manchas que podrían indicar fermentación irregular o secado no uniforme. La densidad varía entre los granos, lo que sugiere diferentes grados de maduración al momento de la cosecha.",
        recomendacion: "Se recomienda realizar una clasificación manual o mecánica adicional para separar los granos por calidad. Los granos de mejor calidad pueden procesarse para café de especialidad, mientras que los de menor calidad son apropiados para blends comerciales con tostado oscuro. Mejorar prácticas de cosecha selectiva.",
        nivel_confianza: "Medio"
      },
      {
        clasificacion: "Grano de café verde tipo Caturra - Buena calidad",
        descripcion: "Granos de tamaño mediano (screen 15-16) con color verde característico de la variedad Caturra. Presentan buena uniformidad y densidad apropiada. Se observa muy bajo porcentaje de defectos (<2%). La forma redonda típica de esta variedad es consistente en toda la muestra.",
        recomendacion: "Excelente para tostado medio que resalte su balance entre acidez y cuerpo. Esta variedad responde bien a diferentes perfiles de tostado. Ideal para espresso por su buen cuerpo y crema. Considere un proceso de beneficio húmedo para maximizar sus características cítricas y dulzor natural.",
        nivel_confianza: "Alto"
      },
      {
        clasificacion: "Grano de café verde recién despulpado - Calidad estándar",
        descripcion: "Granos de color verde pálido típico de café recién procesado. La apariencia general es limpia aunque hay presencia de pergamino residual en algunos granos. El tamaño es relativamente uniforme con predominio de pantalla 14-15. No se observan daños por insectos o fermentación excesiva.",
        recomendacion: "Completar el proceso de secado hasta alcanzar 10-12% de humedad para almacenamiento óptimo. Una vez seco, realizar clasificación para remover granos con defectos. Apropiado para tostado medio-oscuro. Con el procesamiento adecuado, puede alcanzar calidades comerciales buenas para mezclas de café.",
        nivel_confianza: "Medio"
      }
    ];

    // Seleccionar un análisis aleatorio
    const resultado = analisisSimulados[Math.floor(Math.random() * analisisSimulados.length)];

    console.log("✅ Análisis completado (simulado)");

    return NextResponse.json(resultado);

  } catch (error: any) {
    console.error("💥 Error en API route:", error);
    return NextResponse.json(
      { 
        error: error?.message || "Error interno del servidor",
        clasificacion: "Error en el análisis",
        descripcion: "No se pudo procesar la imagen correctamente",
        recomendacion: "Intente nuevamente más tarde",
        nivel_confianza: "Bajo",
        detalle: error?.toString()
      },
      { status: 500 }
    );
  }
}
