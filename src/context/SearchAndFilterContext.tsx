'use client';
import { createContext, useContext, useReducer, ReactNode } from 'react';

interface FilterState {
  searchTerm: string;
  role: string;
  plan: string;
  status: string;
}

interface SearchFilterContextType {
  filters: FilterState;
  updateSearchTerm: (term: string) => void;
  updateRole: (role: string) => void;
  updatePlan: (plan: string) => void;
  updateStatus: (status: string) => void;
  clearFilters: () => void;
}

// Initial state
const initialState: FilterState = {
  searchTerm: '',
  role: '',
  plan: '',
  status: '',
};

// Action types
type FilterAction =
  | { type: 'UPDATE_SEARCH_TERM'; payload: string }
  | { type: 'UPDATE_ROLE'; payload: string }
  | { type: 'UPDATE_PLAN'; payload: string }
  | { type: 'UPDATE_STATUS'; payload: string }
  | { type: 'CLEAR_FILTERS' };

// Reducer
const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'UPDATE_ROLE':
      return { ...state, role: action.payload };
    case 'UPDATE_PLAN':
      return { ...state, plan: action.payload };
    case 'UPDATE_STATUS':
      return { ...state, status: action.payload };
    case 'CLEAR_FILTERS':
      return initialState;
    default:
      return state;
  }
};

// Create context
const SearchFilterContext = createContext<SearchFilterContextType | undefined>(undefined);

// Provider component
export const SearchFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  const updateSearchTerm = (term: string) => {
    dispatch({ type: 'UPDATE_SEARCH_TERM', payload: term });
  };

  const updateRole = (role: string) => {
    dispatch({ type: 'UPDATE_ROLE', payload: role });
  };

  const updatePlan = (plan: string) => {
    dispatch({ type: 'UPDATE_PLAN', payload: plan });
  };

  const updateStatus = (status: string) => {
    dispatch({ type: 'UPDATE_STATUS', payload: status });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  const value: SearchFilterContextType = {
    filters,
    updateSearchTerm,
    updateRole,
    updatePlan,
    updateStatus,
    clearFilters,
  };

  return (
    <SearchFilterContext.Provider value={value}>
      {children}
    </SearchFilterContext.Provider>
  );
};

// Custom hook to use the context
export const useSearchFilter = () => {
  const context = useContext(SearchFilterContext);
  if (context === undefined) {
    throw new Error('useSearchFilter must be used within a SearchFilterProvider');
  }
  return context;
};