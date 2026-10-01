import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  MapPin, 
  Truck, 
  FileText, 
  PlusCircle, 
  Route, 
  Sliders, 
  CheckCircle2, 
  X,
  Layers,
  Flame,
  Clock,
  Wrench,
  Fuel,
  Compass
} from 'lucide-react';

interface QuickGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAi: () => void;
  onOpenNewTicket: () => void;
  onOpenSettings: () => void;
}

export const QuickGuideModal: React.FC<QuickGuideModalProps> = ({
  isOpen,
  onClose,
  onOpenAi,
  onOpenNewTicket,
  onOpenSettings,
}) => {
  const { t, isRTL } = useLanguage();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const guidePillars = [
    {
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      bg: 'bg-blue-50 border-blue-100',
      title: t.guideStep1Title,
      desc: t.guideStep1Desc,
    },
    {
      icon: <Compass className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50 border-emerald-100',
      title: t.guideStep2Title,
      desc: t.guideStep2Desc,
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      bg: 'bg-purple-50 border-purple-100',
      title: t.guideStep3Title,
      desc: t.guideStep3Desc,
    },
    {
      icon: <Truck className="w-5 h-5 text-amber-600" />,
      bg: 'bg-amber-50 border-amber-100',
      title: t.guideStep4Title,
      desc: t.guideStep4Desc,
    },
    {
      icon: <FileText className="w-5 h-5 text-teal-600" />,
      bg: 'bg-teal-50 border-teal-100',
      title: t.guideStep5Title,
      desc: t.guideStep5Desc,
    },
    {
      icon: <PlusCircle className="w-5 h-5 text-rose-600" />,
      bg: 'bg-rose-50 border-rose-100',
      title: t.guideStep6Title,
      desc: t.guideStep6Desc,
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-white font-bold">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 id="quick-guide-title" className="text-base sm:text-lg font-bold text-white leading-tight">
                {t.guideTitle}
              </h2>
              <p className="text-xs text-blue-100 mt-0.5">
                {t.guideSubtitle}
              </p>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 no-scrollbar">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            {t.guidePillarsTitle}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {guidePillars.map((p, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border ${p.bg} transition-all hover:shadow-xs flex gap-3`}
              >
                <div className="shrink-0 mt-0.5">{p.icon}</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Badges */}
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-700 mb-2">
              {isRTL ? 'إجراءات سريعة لتجربة النظام الآن:' : 'Quick shortcuts to explore right now:'}
            </h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenAi();
                }}
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer transition-all active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.btnAiDispatch}</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenNewTicket();
                }}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer transition-all active:scale-95"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>{t.btnNewTicket}</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenSettings();
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer transition-all active:scale-95"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{t.companySettings}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
          >
            {t.guideClose}
          </button>
        </div>
      </div>
    </div>
  );
};
