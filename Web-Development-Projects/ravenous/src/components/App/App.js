import logo from '../../logo.svg';
import React from 'react';
import { BusinessList } from '../../components/BusinessList/BusinessList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import './App.css';

export function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}
