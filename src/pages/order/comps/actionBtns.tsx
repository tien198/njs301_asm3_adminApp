export default function ActionButtons() {
    {/* Action Buttons */ }
    return (
        < div className="flex flex-wrap gap-3 pt-4" >
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Theo dõi đơn hàng
            </button>
            <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Liên hệ hỗ trợ
            </button>
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                In đơn hàng
            </button>
        </ div>
    )
}