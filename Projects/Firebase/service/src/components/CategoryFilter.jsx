import { useService } from "../context/ServiceContext";


function CategoryFilter() {
  const { category, setCategory } = useService();

  return (
    <div className="category-filter">
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="IT Services">IT Services</option>
        
      </select>
    </div>
  );
}

export default CategoryFilter;
