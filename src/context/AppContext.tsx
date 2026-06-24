'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Leads data types definition (Existing types remain same)
export interface QuoteRequest {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  status: 'Pending' | 'Contacted' | 'Completed';
  date: string;
}

export interface ElectricianBooking {
  id: string;
  name: string;
  phone: string;
  status: 'Pending' | 'Confirmed' | 'Done';
  date: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  body: string;
  date: string;
}

interface AppContextType {
  quotes: QuoteRequest[];
  bookings: ElectricianBooking[];
  messages: ContactMessage[];
  subscribers: string[];
  
  // Global Modals State Controllers
  isQuoteModalOpen: boolean;
  isElectricianModalOpen: boolean;
  isHVACModalOpen: boolean; // Added
  preselectedService: string;
  openQuoteModal: (serviceType?: string) => void;
  closeQuoteModal: () => void;
  openElectricianModal: () => void;
  closeElectricianModal: () => void;
  openHVACModal: () => void; // Added
  closeHVACModal: () => void; // Added

  addQuote: (quote: Omit<QuoteRequest, 'id' | 'status' | 'date'>) => void;
  addBooking: (booking: Omit<ElectricianBooking, 'id' | 'status' | 'date'>) => void;
  addMessage: (msg: Omit<ContactMessage, 'id' | 'date'>) => void;
  addSubscriber: (email: string) => boolean;
  updateQuoteStatus: (id: string, status: QuoteRequest['status']) => void;
  updateBookingStatus: (id: string, status: ElectricianBooking['status']) => void;
  deleteQuote: (id: string) => void;
  deleteBooking: (id: string) => void;
  deleteMessage: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [bookings, setBookings] = useState<ElectricianBooking[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [subscribers, setSubscribers] = useState<string[]>([]);

  // Modals active states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isElectricianModalOpen, setIsElectricianModalOpen] = useState(false);
  const [isHVACModalOpen, setIsHVACModalOpen] = useState(false); // Added
  const [preselectedService, setPreselectedService] = useState('');

  // Load state from local storage... (Existing useEffect remains same)
  useEffect(() => {
    const savedQuotes = localStorage.getItem('gs_quotes');
    const savedBookings = localStorage.getItem('gs_bookings');
    const savedMessages = localStorage.getItem('gs_messages');
    const savedSubscribers = localStorage.getItem('gs_subscribers');

    if (savedQuotes) setQuotes(JSON.parse(savedQuotes));
    if (savedBookings) setBookings(JSON.parse(savedBookings));
    if (savedMessages) setMessages(JSON.parse(savedMessages));
    if (savedSubscribers) setSubscribers(JSON.parse(savedSubscribers));
  }, []);

  const saveToStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const openQuoteModal = (serviceType?: string) => {
    setPreselectedService(serviceType || '');
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPreselectedService('');
  };

  const openElectricianModal = () => setIsElectricianModalOpen(true);
  const closeElectricianModal = () => setIsElectricianModalOpen(false);
  
  // Added HVAC modal handlers
  const openHVACModal = () => setIsHVACModalOpen(true);
  const closeHVACModal = () => setIsHVACModalOpen(false);

  const addQuote = (quote: Omit<QuoteRequest, 'id' | 'status' | 'date'>) => {
    const newQuote: QuoteRequest = {
      ...quote,
      id: crypto.randomUUID(),
      status: 'Pending',
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    const updated = [newQuote, ...quotes];
    setQuotes(updated);
    saveToStorage('gs_quotes', updated);
  };

  const addBooking = (booking: Omit<ElectricianBooking, 'id' | 'status' | 'date'>) => {
    const newBooking: ElectricianBooking = {
      ...booking,
      id: crypto.randomUUID(),
      status: 'Pending',
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    saveToStorage('gs_bookings', updated);
  };

  const addMessage = (msg: Omit<ContactMessage, 'id' | 'date'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    const updated = [newMsg, ...messages];
    setMessages(updated);
    saveToStorage('gs_messages', updated);
  };

  const addSubscriber = (email: string) => {
    if (subscribers.includes(email)) return false;
    const updated = [email, ...subscribers];
    setSubscribers(updated);
    saveToStorage('gs_subscribers', updated);
    return true;
  };

  const updateQuoteStatus = (id: string, status: QuoteRequest['status']) => {
    const updated = quotes.map(q => q.id === id ? { ...q, status } : q);
    setQuotes(updated);
    saveToStorage('gs_quotes', updated);
  };

  const updateBookingStatus = (id: string, status: ElectricianBooking['status']) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    setBookings(updated);
    saveToStorage('gs_bookings', updated);
  };

  const deleteQuote = (id: string) => {
    const updated = quotes.filter(q => q.id !== id);
    setQuotes(updated);
    saveToStorage('gs_quotes', updated);
  };

  const deleteBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    saveToStorage('gs_bookings', updated);
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    saveToStorage('gs_messages', updated);
  };

  return (
    <AppContext.Provider value={{
      quotes, bookings, messages, subscribers,
      isQuoteModalOpen, isElectricianModalOpen, isHVACModalOpen, preselectedService,
      openQuoteModal, closeQuoteModal, openElectricianModal, closeElectricianModal, openHVACModal, closeHVACModal,
      addQuote, addBooking, addMessage, addSubscriber,
      updateQuoteStatus, updateBookingStatus,
      deleteQuote, deleteBooking, deleteMessage
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');
  return context;
}