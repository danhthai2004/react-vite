import './style.css';

//component syntax
const MyComponent = () => {
    return (
        <>
            <div> My Component </div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >Child</div>
        </>
    );
}

export default MyComponent; //cho biết file này chỉ xuất ra một component duy nhất