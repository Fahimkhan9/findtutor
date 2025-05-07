'use client';

import { useState } from 'react';

export default function TuitionSearchForm({ onSearch,isSearhcing }: { onSearch: (filters: any) => void,isSearhcing:boolean }) {
  const [filters, setFilters] = useState({
    district: '',
    location: '',
    year: '',
    subject: '',
    salary: '',
  });
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setError('')
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const hasAnyFilter = Object.values(filters).some((value) => value.trim() !== '');

    if (!hasAnyFilter) {
      setError('Please provide at least one search filter.');
      return;
    }
    onSearch(filters);
  };

  return (
    <div className="card bg-base-100 shadow-xl p-6 w-full max-w-4xl mx-auto mt-6">
      <form onSubmit={handleSearch} className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="label">District</label>
          <input
            type="text"
            name="district"
            value={filters.district}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="e.g. Dhaka"
          />
        </div>
        <div>
          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="e.g. Dhanmondi"
          />
        </div>
        <div>
          <label className="label">Year</label>
          <input
            type="number"
            name="year"
            value={filters.year}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="e.g. 10"
          />
        </div>
        <div>
          <label className="label">Subject</label>
          <input
            type="text"
            name="subject"
            value={filters.subject}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="e.g. Math"
          />
        </div>
        <div>
          <label className="label">Minimum Salary</label>
          <input
            type="number"
            name="salary"
            value={filters.salary}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="e.g. 5000"
          />
        </div>
        <div className="flex items-end">
            
          <button disabled={isSearhcing} type="submit" className="btn btn-primary w-full">
            Search
          </button>
        </div>
        {error && <span>At least one filter should be given</span>}
      </form>
    </div>
  );
}
