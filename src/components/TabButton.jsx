export default function TabButton ({children, onSelect}) {
   
    return (
        <li>
            <button onClick={onSelect} className="tab-button">
                {children}
            </button>
        </li>
       
    );
}