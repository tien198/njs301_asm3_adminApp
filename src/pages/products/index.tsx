import Table from "./comps/table";
import SearchBar from "./comps/searchBar";

export default function Product() {

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-2">Products</h1>
            <SearchBar />
            <Table />
        </div>
    );
}