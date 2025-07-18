export default function Container({children}) {
    return (
        <div className="py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    )
}
