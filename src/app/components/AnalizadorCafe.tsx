"use client";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';

interface AnalisisResult {
  clasificacion: string;
  descripcion: string;
  recomendacion: string;
  nivel_confianza: string;
}

export default function AnalizadorCafe() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalisisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar formato
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setErrorMessage('Formato de imagen no válido. Use JPG, PNG o WEBP.');
      setShowErrorModal(true);
      return;
    }

    // Validar tamaño (máximo 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('La imagen es demasiado grande. Máximo 10MB.');
      setShowErrorModal(true);
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setErrorMessage('Por favor seleccione una imagen primero');
      setShowErrorModal(true);
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      console.log('🚀 Iniciando análisis...');

      // Convertir imagen a base64
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(selectedFile);
      });

      const base64Image = await base64Promise;
      console.log('✅ Imagen convertida a base64');

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          image: base64Image,
          mimeType: selectedFile.type
        }),
      });

      console.log('📡 Respuesta:', res.status, res.statusText);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Error desconocido");
      }

      const data = await res.json();
      console.log('✅ Resultado:', data);

      setAnalysisResult(data);
      setShowModal(true);
    } catch (error: any) {
      console.error("❌ Error:", error);
      setErrorMessage(`Error: ${error.message}`);
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    if (!analysisResult || !previewUrl) return;

    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    
    // Título
    pdf.setFontSize(20);
    pdf.setTextColor(139, 69, 19);
    pdf.text('Análisis de Grano de Café', pageWidth / 2, 30, { align: 'center' });
    
    // Fecha
    pdf.setFontSize(12);
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Fecha: ${new Date().toLocaleString('es-CO')}`, pageWidth / 2, 45, { align: 'center' });
    
    let yPos = 70;
    
    // Clasificación
    pdf.setFontSize(16);
    pdf.setTextColor(139, 69, 19);
    pdf.text('Clasificación:', 20, yPos);
    yPos += 10;
    
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    const clasificacionLines = pdf.splitTextToSize(analysisResult.clasificacion, pageWidth - 40);
    pdf.text(clasificacionLines, 20, yPos);
    yPos += clasificacionLines.length * 5 + 15;
    
    // Descripción
    pdf.setFontSize(16);
    pdf.setTextColor(139, 69, 19);
    pdf.text('Descripción:', 20, yPos);
    yPos += 10;
    
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    const descripcionLines = pdf.splitTextToSize(analysisResult.descripcion, pageWidth - 40);
    pdf.text(descripcionLines, 20, yPos);
    yPos += descripcionLines.length * 5 + 15;
    
    // Recomendación
    pdf.setFontSize(16);
    pdf.setTextColor(139, 69, 19);
    pdf.text('Recomendación:', 20, yPos);
    yPos += 10;
    
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    const recomendacionLines = pdf.splitTextToSize(analysisResult.recomendacion, pageWidth - 40);
    pdf.text(recomendacionLines, 20, yPos);
    yPos += recomendacionLines.length * 5 + 15;
    
    // Nivel de confianza
    pdf.setFontSize(16);
    pdf.setTextColor(139, 69, 19);
    pdf.text('Nivel de Confianza:', 20, yPos);
    yPos += 10;
    
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(analysisResult.nivel_confianza, 20, yPos);
    
    pdf.save(`analisis-cafe-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl shadow-xl p-8 border border-yellow-200 flex flex-col justify-center items-center">
        <header className="text-2xl font-bold text-yellow-900 mb-8 flex items-center">
          <span className="mr-3">📸</span>
          Suba la foto de su grano de café
        </header>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id="file-input"
        />

        <motion.div 
          className="w-full h-64 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-dashed border-yellow-400 rounded-xl flex items-center justify-center mb-8 hover:border-yellow-500 transition-colors cursor-pointer"
          onClick={() => document.getElementById('file-input')?.click()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg" />
          ) : (
            <div className="text-center">
              <motion.div 
                className="text-4xl mb-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📁
              </motion.div>
              <p className="text-yellow-600 text-lg font-medium">Subir imagen</p>
              <p className="text-yellow-500 text-sm mt-1">Haga clic para seleccionar</p>
              <p className="text-yellow-400 text-xs mt-2">Formatos: JPG, PNG, WEBP</p>
            </div>
          )}
        </motion.div>

        {selectedFile && (
          <motion.div 
            className="w-full mb-4 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-yellow-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-yellow-800 text-sm">
              <strong>Archivo:</strong> {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          </motion.div>
        )}

        <motion.button
          onClick={handleAnalyze}
          disabled={!selectedFile || loading}
          className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg ${
            selectedFile && !loading
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={selectedFile && !loading ? { scale: 1.02 } : {}}
          whileTap={selectedFile && !loading ? { scale: 0.98 } : {}}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <motion.div 
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Analizando...
            </span>
          ) : (
            'Analizar Grano'
          )}
        </motion.button>
      </div>

      {/* Modal de Resultados */}
      <AnimatePresence>
        {showModal && analysisResult && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3">☕</span>
                    Resultado del Análisis
                  </h2>
                  <button onClick={() => setShowModal(false)} className="text-white hover:text-amber-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {previewUrl && (
                  <div className="text-center">
                    <img src={previewUrl} alt="Imagen analizada" className="max-w-full max-h-48 object-contain rounded-lg mx-auto shadow-lg" />
                  </div>
                )}

                <motion.div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="text-lg font-bold text-amber-800 mb-2 flex items-center">
                    <span className="mr-2">🌱</span>Clasificación
                  </h3>
                  <p className="text-amber-700">{analysisResult.clasificacion}</p>
                </motion.div>

                <motion.div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center">
                    <span className="mr-2">📝</span>Descripción
                  </h3>
                  <p className="text-orange-700">{analysisResult.descripcion}</p>
                </motion.div>

                <motion.div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-xl border border-yellow-200" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center">
                    <span className="mr-2">💡</span>Recomendación
                  </h3>
                  <p className="text-yellow-700">{analysisResult.recomendacion}</p>
                </motion.div>

                <motion.div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                  <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center">
                    <span className="mr-2">🎯</span>Nivel de Confianza
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    analysisResult.nivel_confianza === 'Alto' ? 'bg-green-100 text-green-800' : 
                    analysisResult.nivel_confianza === 'Medio' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {analysisResult.nivel_confianza}
                  </span>
                </motion.div>

                <motion.div className="flex justify-center pt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <button onClick={downloadPDF} className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descargar PDF
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Error */}
      <AnimatePresence>
        {showErrorModal && (
          <motion.div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowErrorModal(false)}>
            <motion.div className="bg-white rounded-2xl shadow-2xl max-w-md w-full" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <span className="mr-3">⚠️</span>Error
                  </h2>
                  <button onClick={() => setShowErrorModal(false)} className="text-white hover:text-red-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-800 text-center">{errorMessage}</p>
                </div>
                <div className="flex justify-center pt-4">
                  <button onClick={() => setShowErrorModal(false)} className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-6 rounded-xl">
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
