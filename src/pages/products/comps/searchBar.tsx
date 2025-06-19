import productsStore from "../store"
import { useStore } from "zustand"


export default function SearchBar() {
    const query = useStore(productsStore, state => state.query)
    const setQuery = useStore(productsStore, state => state.setQuery)

    return (
        <input
            type="text"
            placeholder="Enter Search!"
            className="border p-2 w-full mb-4"
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
    );
}
