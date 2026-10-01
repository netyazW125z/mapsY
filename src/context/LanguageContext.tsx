import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, translations } from '../i18n/translations';
import { TechnicianStatus, TicketStatus, UrgencyLevel, EquipmentType } from '../types/dispatch';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: Translations;
  companyName: string;
  setCompanyName: (name: string) => void;
  territoryName: string;
  setTerritoryName: (name: string) => void;
  distanceUnit: 'miles' | 'km';
  setDistanceUnit: (unit: 'miles' | 'km') => void;
  translateTechStatus: (status: TechnicianStatus | string) => string;
  translateTicketStatus: (status: TicketStatus | string) => string;
  translateUrgency: (urgency: UrgencyLevel | 'ALL' | string) => string;
  translateEquipment: (eq: EquipmentType | string) => string;
  formatDistance: (miles: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to Arabic ('ar') since user requested in Arabic, with localStorage persistence
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hvac_app_lang');
      if (saved === 'ar' || saved === 'en') return saved;
    }
    return 'ar';
  });

  const [companyName, setCompanyName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('hvac_company_name') || translations[language].companyNameDefault;
    }
    return translations[language].companyNameDefault;
  });

  const [territoryName, setTerritoryName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('hvac_territory_name') || translations[language].territoryDefault;
    }
    return translations[language].territoryDefault;
  });

  const [distanceUnit, setDistanceUnit] = useState<'miles' | 'km'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('hvac_distance_unit') as 'miles' | 'km') || (language === 'ar' ? 'km' : 'miles');
    }
    return language === 'ar' ? 'km' : 'miles';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('hvac_app_lang', lang);
    }
  };

  const isRTL = language === 'ar';
  const t = translations[language];

  // Update HTML document attributes on language change
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      if (isRTL) {
        document.body.classList.add('font-arabic');
      } else {
        document.body.classList.remove('font-arabic');
      }
    }
  }, [language, isRTL]);

  const translateTechStatus = (status: TechnicianStatus | string): string => {
    switch (status) {
      case 'AVAILABLE':
        return t.techStatusAvailable;
      case 'EN_ROUTE':
        return t.techStatusEnRoute;
      case 'ON_SITE':
        return t.techStatusOnSite;
      case 'RETURNING_DEPOT':
        return t.techStatusReturningDepot;
      case 'ON_DUTY':
        return t.techStatusOnDuty;
      case 'OFF_DUTY':
        return t.techStatusOffDuty;
      default:
        return status;
    }
  };

  const translateTicketStatus = (status: TicketStatus | string): string => {
    switch (status) {
      case 'UNASSIGNED':
        return t.ticketStatusUnassigned;
      case 'ASSIGNED':
        return t.ticketStatusAssigned;
      case 'EN_ROUTE':
        return t.ticketStatusEnRoute;
      case 'IN_PROGRESS':
        return t.ticketStatusInProgress;
      case 'COMPLETED':
        return t.ticketStatusCompleted;
      default:
        return status;
    }
  };

  const translateUrgency = (urgency: UrgencyLevel | 'ALL' | string): string => {
    switch (urgency) {
      case 'ALL':
        return t.filterAll;
      case 'EMERGENCY':
        return t.urgencyEmergency;
      case 'SAME_DAY':
        return t.urgencySameDay;
      case 'ROUTINE':
        return t.urgencyRoutine;
      default:
        return urgency;
    }
  };

  const translateEquipment = (eq: EquipmentType | string): string => {
    switch (eq) {
      case 'Commercial Chiller':
        return t.equipChiller;
      case 'Rooftop Package Unit (RTU)':
        return t.equipRTU;
      case 'VRF Multi-Split Heat Pump':
        return t.equipVRF;
      case 'High-Efficiency Gas Furnace':
        return t.equipGasFurnace;
      case 'Hydronic Commercial Boiler':
        return t.equipBoiler;
      case 'Data Center CRAC / Precision Cooling':
        return t.equipCRAC;
      case 'Ductless Inverter Mini-Split':
        return t.equipMiniSplit;
      case 'Air Handling Unit (AHU) & VAV':
        return t.equipAHU;
      default:
        return eq;
    }
  };

  const formatDistance = (miles: number): string => {
    if (distanceUnit === 'km') {
      const km = Math.round(miles * 1.60934 * 10) / 10;
      return `${km} ${t.unitsKm}`;
    }
    return `${Math.round(miles * 10) / 10} ${t.unitsMiles}`;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRTL,
        t,
        companyName,
        setCompanyName,
        territoryName,
        setTerritoryName,
        distanceUnit,
        setDistanceUnit,
        translateTechStatus,
        translateTicketStatus,
        translateUrgency,
        translateEquipment,
        formatDistance,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
