import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, MapPin, Gauge, Check, X, Sliders } from 'lucide-react';

interface CompanySettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanySettingsModal: React.FC<CompanySettingsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { 
    t, 
    isRTL, 
    companyName, 
    setCompanyName, 
    territoryName, 
    setTerritoryName, 
    distanceUnit, 
    setDistanceUnit 
  } = useLanguage();

  const [localCompany, setLocalCompany] = useState(companyName);
  const [localTerritory, setLocalTerritory] = useState(territoryName);
  const [localUnit, setLocalUnit] = useState(distanceUnit);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      setLocalCompany(companyName);
      setLocalTerritory(territoryName);
      setLocalUnit(distanceUnit);
      setSavedSuccess(false);
    }
  }, [isOpen, companyName, territoryName, distanceUnit]);

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

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setCompanyName(localCompany.trim() || t.companyNameDefault);
    setTerritoryName(localTerritory.trim() || t.territoryDefault);
    setDistanceUnit(localUnit);

    if (typeof window !== 'undefined') {
      localStorage.setItem('hvac_company_name', localCompany.trim());
      localStorage.setItem('hvac_territory_name', localTerritory.trim());
      localStorage.setItem('hvac_distance_unit', localUnit);
    }

    setSavedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const territoryPresets = isRTL
    ? [
        { label: 'الرياض وضواحيها', value: 'الرياض وضواحيها' },
        { label: 'جدة والمنطقة الغربية', value: 'جدة والمنطقة الغربية' },
        { label: 'الدمام والمنطقة الشرقية', value: 'الدمام والمنطقة الشرقية' },
        { label: 'دبي والإمارات', value: 'دبي والمناطق المجاورة' },
        { label: 'Dallas-Fort Worth Metroplex', value: 'Dallas-Fort Worth Metroplex' },
      ]
    : [
        { label: 'Dallas-Fort Worth Metroplex', value: 'Dallas-Fort Worth Metroplex' },
        { label: 'Houston Greater Area', value: 'Houston Greater Area' },
        { label: 'Austin-San Antonio Corridor', value: 'Austin-San Antonio Corridor' },
        { label: 'Riyadh Central District', value: 'Riyadh Central District' },
      ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="company-settings-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 id="company-settings-title" className="text-sm sm:text-base font-bold text-white">
                {t.settingsTitle}
              </h2>
              <p className="text-[11px] text-slate-300">
                {t.settingsSubtitle}
              </p>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.settingsCompanyName}</span>
            </label>
            <input
              type="text"
              value={localCompany}
              onChange={(e) => setLocalCompany(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-semibold"
              placeholder={t.companyNameDefault}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.settingsRegion}</span>
            </label>
            <input
              type="text"
              value={localTerritory}
              onChange={(e) => setLocalTerritory(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 mb-2 font-semibold"
              placeholder={t.territoryDefault}
              required
            />
            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5">
              {territoryPresets.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setLocalTerritory(p.value)}
                  className={`px-2 py-1 rounded-md text-[11px] font-medium border cursor-pointer transition-colors ${
                    localTerritory === p.value
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.settingsDistanceUnit}</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLocalUnit('km')}
                className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  localUnit === 'km'
                    ? 'bg-blue-50 border-blue-500 text-blue-800 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {localUnit === 'km' && <Check className="w-3.5 h-3.5 text-blue-600" />}
                <span>{isRTL ? 'كيلومتر (كم / لتر)' : 'Kilometers (km / L)'}</span>
              </button>
              <button
                type="button"
                onClick={() => setLocalUnit('miles')}
                className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  localUnit === 'miles'
                    ? 'bg-blue-50 border-blue-500 text-blue-800 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {localUnit === 'miles' && <Check className="w-3.5 h-3.5 text-blue-600" />}
                <span>{isRTL ? 'أميال (ميل / جالون)' : 'Miles (miles / gal)'}</span>
              </button>
            </div>
          </div>

          {savedSuccess && (
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{isRTL ? 'تم حفظ التعديلات بنجاح!' : 'Settings updated successfully!'}</span>
            </div>
          )}

          <div className="pt-2 flex justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold cursor-pointer"
            >
              {t.newTicketCancelBtn}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs cursor-pointer transition-all active:scale-95"
            >
              {t.settingsSave}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
