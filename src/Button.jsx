import { useDispatch } from "react-redux";
import { incrementNum, resetNum, decrementNum, plusNum, minusNum } from "./redux/reducers/car";

const Button = () => {
    const dispatch = useDispatch();
    return (
        <div className="btn">
           <button className="onePlus" onClick={()=>{
            dispatch(incrementNum())
           }}>+1</button>
           <button className="oneMinus" onClick={()=>{
            dispatch(decrementNum())
           }}>-1</button>
           <button className="reset" onClick={()=>{
            dispatch(resetNum())
           }}>reset</button>

            <button className="fivePlus" onClick={()=>{
            dispatch(plusNum())
           }}>+5</button>
           <button className="fiveMinus" onClick={()=>{
            dispatch(minusNum())
           }}>-5</button>

        </div>
    );
}

export default Button;
