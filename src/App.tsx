import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  UserCheck, 
  Scale, 
  Eye, 
  AlertCircle, 
  FileText, 
  CheckCircle2,
  ChevronRight,
  Info
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const rights = [
    {
      title: "Acceso",
      description: "Derecho a obtener confirmación de si sus datos están siendo tratados y acceder a ellos.",
      icon: <Eye className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Rectificación",
      description: "Derecho a modificar datos exactos, incompletos o desactualizados.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-emerald-500"
    },
    {
      title: "Cancelación",
      description: "Derecho a solicitar la eliminación de datos cuando su almacenamiento carezca de fundamento legal.",
      icon: <Lock className="w-6 h-6" />,
      color: "bg-rose-500"
    },
    {
      title: "Oposición",
      description: "Derecho a oponerse al uso de datos para fines específicos, como publicidad o prospección.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-amber-500"
    }
  ];

  const sections = [
    {
      title: "Marco Legal",
      content: "La Ley N° 19.628 sobre Protección de la Vida Privada es el pilar fundamental en Chile. Actualmente, el país transita hacia un estándar más exigente (similar al GDPR europeo) con la creación de la Agencia de Protección de Datos.",
      points: ["Ley 19.628 (Base)", "Ley 21.096 (Rango Constitucional)", "Nueva Agencia de Protección (En trámite)"]
    },
    {
      title: "Principios Clave",
      content: "El tratamiento de datos debe regirse siempre por principios éticos y legales que garantizan la libertad del ciudadano.",
      points: ["Finalidad: Uso solo para lo declarado", "Consentimiento: Debe ser libre e informado", "Seguridad: Medidas técnicas de resguardo"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Hero Section */}
      <header className="bg-indigo-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Shield size={200} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
            Guía Ciudadana Chile
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Ley de Protección de <br/>
            <span className="text-indigo-400">Datos Personales</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl leading-relaxed">
            Conoce tus derechos ARCO y cómo la legislación chilena protege tu privacidad en la era digital.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 -mt-8 pb-20">
        {/* ARCO Rights Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <UserCheck className="text-indigo-600" />
            Tus Derechos ARCO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rights.map((right, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className={`${right.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {right.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{right.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {right.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="flex border-b">
                {sections.map((sec, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-8 py-4 text-sm font-semibold transition-colors ${
                      activeTab === idx 
                        ? "text-indigo-600 border-b-2 border-indigo-600" 
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </div>
              <div className="p-8">
                <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                  {sections[activeTab].content}
                </p>
                <div className="space-y-3">
                  {sections[activeTab].points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
              <div className="flex items-center gap-3 mb-4 text-indigo-800 font-bold">
                <Scale className="w-5 h-5" />
                <span>Dato Sensible</span>
              </div>
              <p className="text-sm text-indigo-900/70 leading-relaxed italic">
                "Son aquellos que se refieren a características físicas o morales, hechos o circunstancias de la vida privada, como el origen racial, opiniones políticas o estados de salud."
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100">
              <div className="flex items-center gap-3 mb-4 text-rose-800 font-bold">
                <AlertCircle className="w-5 h-5" />
                <span>¿Cuándo denunciar?</span>
              </div>
              <ul className="text-sm text-rose-900/70 space-y-2">
                <li className="flex gap-2 font-medium">
                  <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-rose-400" />
                  Si usan tus datos sin tu consentimiento explícito.
                </li>
                <li className="flex gap-2 font-medium">
                  <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-rose-400" />
                  Si no cumplen con la eliminación solicitada.
                </li>
                <li className="flex gap-2 font-medium">
                  <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-rose-400" />
                  Si tus datos financieros son divulgados ilegalmente.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <section className="bg-slate-900 rounded-3xl p-10 text-center text-white">
          <Info className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ejercer tus derechos?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Puedes acudir directamente al responsable de la base de datos o, en caso de incumplimiento, iniciar acciones legales ante los tribunales de justicia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full font-semibold transition-colors">
              Descargar Guía PDF
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-colors">
              Ver Ley 19.628
            </button>
          </div>
        </section>
      </main>

      <footer className="text-center py-10 text-slate-400 text-sm">
        <p>© 2024 Infografía de Protección de Datos - Chile</p>
      </footer>
    </div>
  );
};

export default App;