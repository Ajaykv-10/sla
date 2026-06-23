
const DisplayComponent = (props) => {

    const {numbers,color} = props;
    const numbersArray = Array.from({length:numbers},(_,index)=>index+1);
  return (
    <div className={` bg-${color}-500`}>{
        numbersArray.map((number,index)=>(
            <div key={index}>{number}</div>
        ))}
    </div>
  )
}

export default DisplayComponent