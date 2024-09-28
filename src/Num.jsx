import { useSelector } from "react-redux";

const Num = () => {
  
    const num = useSelector(s => s.car.num);
    return (
        <div>
            <h1 className="Text">{num}</h1>
        </div>
    );
}

export default Num;
