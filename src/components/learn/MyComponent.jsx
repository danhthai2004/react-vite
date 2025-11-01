import './style.css';

// const bien = "Thai";
// const bien = 22;
// const bien = true;
// const bien = null;
// const bien = undefined;
// const bien = [1, 2, 3];
const bien = { name: "Thai", age: 22 };

//với biến string và number thì không cần dùng JSON.stringify() mà chỉ cần đặt biến trong dấu {}
//component syntax
const MyComponent = () => {
    return (
        <>
            <div>{JSON.stringify(bien)}</div>
            <div> {console.log("Hello World")} </div>
            <div className="child"
                style={{ borderRadius: "10px" }} //dấu {} đầu tiên là để nhúng js, dấu {} thứ 2 là object literal
            >Child</div>
        </>
    );
}

export default MyComponent; //cho biết file này chỉ xuất ra một component duy nhất