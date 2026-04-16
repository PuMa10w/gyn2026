import React, { useState, useMemo, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import DiseaseCard from './components/DiseaseCard';
import CategoryFilter from './components/CategoryFilter';
import BackgroundEffects from './components/BackgroundEffects';
import ErrorBoundary from './components/ErrorBoundary';
import { useDebounce } from './hooks/useDebounce';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import { useHistory } from './hooks/useHistory';
import { gynData } from './data/gynData';
import { obsData } from './data/obsData';

const DiseaseModal = lazy(() => import('./components/DiseaseModal'));
const Questionnaire = lazy(() => import('./components/Questionnaire'));
const PharmacologyModal = lazy(() => import('./components/PharmacologyModal'));

const LoadingSpinner = () => (
  <motion.div 
    className="loading-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div 
      className="loading-spinner"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      🌸
    </motion.div>
  </motion.div>
);

const categoryKeywords = {
  oncology: ['рак', 'онколог', 'опухол', 'малигн', 'карцином', 'сарком', 'метастаз', 'неоплаз'],
  infection: ['инфекц', 'воспал', 'бактери', 'вирус', 'пцр', 'хламидиоз', 'микоплазм', 'трихомон', 'вич', 'гепатит'],
  hormonal: ['гормон', 'эстроген', 'прогестерон', 'тестостерон', 'спкя', 'гиперпролактинемия', 'тиреоид'],
  inflammatory: ['эндометриоз', 'аднексит', 'сальпингит', 'эндометрит', 'вагинит', 'цервицит', 'вульвит'],
  pregnancy: ['беременност', 'преэклампси', 'гестацион', 'род', 'плод', 'плацент', 'выкидыш', 'аборт', 'эктопическ'],
};

function App() {
  const [activeTab, setActiveTab] = useState('gynecology');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showPharmacology, setShowPharmacology] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { toggleFavorite, isFavorite, favorites } = useFavorites();
  const { history, addToHistory } = useHistory();
  const debouncedSearch = useDebounce(searchTerm, 300);

  const currentData = activeTab === 'gynecology' ? gynData : obsData;

  const filteredData = useMemo(() => {
    let data = currentData.filter(item =>
      item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      item.icd.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    
    if (showFavorites) {
      data = data.filter(item => isFavorite(item.id));
    }
    
    if (showHistory) {
      const historyIds = history.map(h => h.id);
      data = data.filter(item => historyIds.includes(item.id));
    }

    if (activeCategory !== 'all') {
      const keywords = categoryKeywords[activeCategory] || [];
      data = data.filter(item => {
        const searchText = (item.name + ' ' + item.description).toLowerCase();
        return keywords.some(kw => searchText.includes(kw));
      });
    }
    
    return data;
  }, [currentData, debouncedSearch, showFavorites, showHistory, isFavorite, history, activeCategory]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    addToHistory(item);
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <BackgroundEffects />
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onQuestionnaires={() => setShowQuestionnaire(true)}
          onPharmacology={() => setShowPharmacology(true)}
          theme={theme}
          toggleTheme={toggleTheme}
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          favoritesCount={favorites.length}
          historyCount={history.length}
        />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} resultCount={filteredData.length} />
        
        <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        <div className="cards-grid">
          {filteredData.map((item, index) => (
            <DiseaseCard 
              key={item.id} 
              item={item} 
              onClick={handleItemClick} 
              index={index}
              isFavorite={isFavorite(item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
          {filteredData.length === 0 && (
            <motion.div
              className="empty-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="empty-icon">{showFavorites ? '⭐' : showHistory ? '🕐' : '🔍'}</div>
              <h3>{showFavorites ? 'Нет избранного' : showHistory ? 'Нет истории' : 'Ничего не найдено'}</h3>
              <p>{showFavorites ? 'Добавьте заболевания в избранное' : showHistory ? 'Просмотрите несколько заболеваний' : 'Попробуйте изменить запрос'}</p>
            </motion.div>
          )}
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          {selectedItem && (
            <DiseaseModal item={selectedItem} onClose={() => setSelectedItem(null)} />
          )}

          {showQuestionnaire && (
            <Questionnaire onClose={() => setShowQuestionnaire(false)} />
          )}

          {showPharmacology && (
            <PharmacologyModal onClose={() => setShowPharmacology(false)} />
          )}
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
